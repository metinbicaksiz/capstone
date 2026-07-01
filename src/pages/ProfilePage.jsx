import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import './ProfilePage.css'

export default function ProfilePage() {
  const { user, profile } = useAuth()
  const [essays, setEssays] = useState([])
  const [essaysLoading, setEssaysLoading] = useState(false)
  const [sharedEssays, setSharedEssays] = useState([])
  const [sharedLoading, setSharedLoading] = useState(false)
  const [downloadingId, setDownloadingId] = useState(null)

  useEffect(() => {
    if (user) {
      fetchEssays()
      fetchSharedEssays()
    }
  }, [user])

  const fetchEssays = async () => {
    setEssaysLoading(true)
    const { data, error } = await supabase
      .from('essays')
      .select('id, title, content, file_url, file_name, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
    if (!error) setEssays(data || [])
    setEssaysLoading(false)
  }

  const fetchSharedEssays = async () => {
    setSharedLoading(true)
    console.log('[SharedEssays] current user.id:', user.id)

    // Step 1: fetch ALL essays not owned by this user (ignores visible_to)
    // This tells us if RLS is blocking rows entirely
    const { data: allOthers, error: allErr } = await supabase
      .from('essays')
      .select('id, title, visible_to, user_id')
      .neq('user_id', user.id)
    console.log('[SharedEssays] all other essays (no filter):', allOthers, 'error:', allErr)

    // Step 2: apply the filter client-side so we can see what visible_to actually contains
    if (allOthers && allOthers.length > 0) {
      const matched = allOthers.filter(e => {
        console.log('[SharedEssays] essay', e.id, 'visible_to raw value:', e.visible_to, 'type:', typeof e.visible_to)
        if (!e.visible_to) return false
        const arr = typeof e.visible_to === 'string' ? JSON.parse(e.visible_to) : e.visible_to
        return Array.isArray(arr) && arr.includes(user.id)
      })
      console.log('[SharedEssays] client-side matched:', matched)
      if (matched.length > 0) {
        // Fetch full data for matched IDs
        const { data: full } = await supabase
          .from('essays')
          .select('id, title, content, file_url, file_name, created_at, user_id')
          .in('id', matched.map(e => e.id))
          .order('created_at', { ascending: false })
        setSharedEssays(full || [])
        setSharedLoading(false)
        return
      }
    }

    setSharedEssays([])
    setSharedLoading(false)
  }

  const handleDownload = async (essay) => {
    if (!essay.file_url) return
    setDownloadingId(essay.id)
    const { data, error } = await supabase.storage
      .from('essays')
      .createSignedUrl(essay.file_url, 60)
    setDownloadingId(null)
    if (error) {
      alert('Could not generate download link: ' + error.message)
      return
    }
    window.open(data.signedUrl, '_blank')
  }

  if (!user || !profile) {
    return (
      <div className="page-container">
        <p>Loading profile...</p>
      </div>
    )
  }

  return (
    <div className="page-container">
      <h1>👤 My Profile</h1>

      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">{profile.name?.[0]?.toUpperCase() || 'U'}</div>
          <div className="profile-info">
            <h2>{profile.name}</h2>
            <p className="profile-email">{profile.email}</p>
            <p className="profile-role">Role: <strong>{profile.role}</strong></p>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <label>Member Since</label>
            <p>{new Date(profile.created_at).toLocaleDateString()}</p>
          </div>
          <div className="detail-item">
            <label>Email</label>
            <p>{profile.email}</p>
          </div>
          <div className="detail-item">
            <label>Role</label>
            <p className="role-badge">{profile.role}</p>
          </div>
        </div>
      </div>

      {profile.role === 'student' && (
        <div className="info-box info-box-blue" style={{ marginTop: '28px' }}>
          <h4>Course Progress</h4>
          <p>Your course progress will be tracked here. Complete modules to see your progress update.</p>
        </div>
      )}

      <div style={{ marginTop: '28px' }}>
        <h4 style={{ color: 'var(--blue-dark)', marginBottom: '16px' }}>My Submitted Essays</h4>

        {essaysLoading ? (
          <p style={{ color: '#6c757d' }}>Loading essays...</p>
        ) : essays.length === 0 ? (
          <div className="profile-card" style={{ color: '#6c757d', textAlign: 'center', padding: '32px' }}>
            <p style={{ margin: 0 }}>No essays submitted yet.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {essays.map(essay => (
              <div key={essay.id} className="profile-card" style={{ padding: '20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <p style={{ margin: '0 0 4px 0', fontWeight: 600, color: 'var(--blue-dark)' }}>{essay.title}</p>
                  <p style={{ margin: '0 0 6px 0', fontSize: '0.85em', color: '#888' }}>
                    {new Date(essay.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  {essay.content && (
                    <p style={{ margin: 0, fontSize: '0.9em', color: '#555', lineHeight: '1.5' }}>
                      {essay.content.substring(0, 120)}{essay.content.length > 120 ? '…' : ''}
                    </p>
                  )}
                </div>
                {essay.file_url && (
                  <button
                    className="btn btn-outline"
                    style={{ flexShrink: 0, fontSize: '0.9em' }}
                    disabled={downloadingId === essay.id}
                    onClick={() => handleDownload(essay)}
                  >
                    {downloadingId === essay.id ? 'Preparing…' : 'Open File'}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ marginTop: '28px' }}>
        <h4 style={{ color: 'var(--blue-dark)', marginBottom: '16px' }}>Essays Shared with Me</h4>

        {sharedLoading ? (
          <p style={{ color: '#6c757d' }}>Loading shared essays...</p>
        ) : sharedEssays.length === 0 ? (
          <div className="profile-card" style={{ color: '#6c757d', textAlign: 'center', padding: '32px' }}>
            <p style={{ margin: 0 }}>No essays have been shared with you yet.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {sharedEssays.map(essay => (
              <div key={essay.id} className="profile-card" style={{ padding: '20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <p style={{ margin: '0 0 4px 0', fontWeight: 600, color: 'var(--blue-dark)' }}>{essay.title}</p>
                  <p style={{ margin: '0 0 6px 0', fontSize: '0.85em', color: '#888' }}>
                    {new Date(essay.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  {essay.content && (
                    <p style={{ margin: 0, fontSize: '0.9em', color: '#555', lineHeight: '1.5' }}>
                      {essay.content.substring(0, 120)}{essay.content.length > 120 ? '…' : ''}
                    </p>
                  )}
                </div>
                {essay.file_url && (
                  <button
                    className="btn btn-outline"
                    style={{ flexShrink: 0, fontSize: '0.9em' }}
                    disabled={downloadingId === essay.id}
                    onClick={() => handleDownload(essay)}
                  >
                    {downloadingId === essay.id ? 'Preparing…' : 'Open File'}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
