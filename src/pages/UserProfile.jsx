import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { discussionService } from '../services/discussionService'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function UserProfile() {
  const { userId } = useParams()
  const [profile, setProfile] = useState(null)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      // Fetch user profile
      const { data: profileData, error: profileError } = await discussionService.getUserProfile(userId)
      if (profileError) {
        setError(profileError)
      } else {
        setProfile(profileData)
      }

      // Fetch user's comments
      const { data: commentsData, error: commentsError } = await discussionService.getUserComments(userId)
      if (!commentsError) {
        setComments(commentsData || [])
      }

      setLoading(false)
    }

    if (userId) {
      fetchData()
    }
  }, [userId])

  if (loading) {
    return (
      <>
        <Header />
        <main style={{ minHeight: '60vh', padding: '40px 20px' }}>
          <div style={{ textAlign: 'center' }}>
            <p>Loading profile...</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (error || !profile) {
    return (
      <>
        <Header />
        <main style={{ minHeight: '60vh', padding: '40px 20px' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#e74c3c' }}>Error loading profile: {error}</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const getRoleBadge = (role) => {
    const badges = {
      teacher: { text: 'Teacher', bg: '#d4edda', color: '#155724' },
      admin: { text: 'Admin', bg: '#f8d7da', color: '#842029' },
      student: { text: 'Student', bg: '#cfe2ff', color: '#084298' }
    }
    return badges[role] || badges.student
  }

  const badge = getRoleBadge(profile.role)

  return (
    <>
      <Header />
      <main style={{ minHeight: '60vh', maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Profile Header */}
        <div style={{
          background: 'white',
          border: '1px solid var(--grey-border)',
          borderRadius: '8px',
          padding: '30px',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'var(--blue-bg)',
            margin: '0 auto 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2em'
          }}>
            {profile.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt={profile.name}
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
              />
            ) : (
              '👤'
            )}
          </div>

          <h1 style={{ margin: '0 0 8px 0', color: 'var(--blue-dark)' }}>
            {profile.name}
          </h1>

          <span style={{
            display: 'inline-block',
            background: badge.bg,
            color: badge.color,
            padding: '6px 12px',
            borderRadius: '4px',
            fontWeight: '500',
            marginBottom: '16px'
          }}>
            {badge.text}
          </span>

          {profile.bio && (
            <p style={{ color: '#555', lineHeight: '1.6', maxWidth: '600px', margin: '16px auto' }}>
              {profile.bio}
            </p>
          )}

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
            marginTop: '24px',
            paddingTop: '24px',
            borderTop: '1px solid var(--grey-border)'
          }}>
            <div>
              <p style={{ margin: '0 0 4px 0', fontSize: '1.5em', fontWeight: '700', color: 'var(--blue-dark)' }}>
                {comments.length}
              </p>
              <p style={{ margin: '0', fontSize: '0.9em', color: '#888' }}>Comments</p>
            </div>
            <div>
              <p style={{ margin: '0 0 4px 0', fontSize: '1.5em', fontWeight: '700', color: 'var(--blue-dark)' }}>
                {profile.created_at ? new Date(profile.created_at).getFullYear() : 'N/A'}
              </p>
              <p style={{ margin: '0', fontSize: '0.9em', color: '#888' }}>Member Since</p>
            </div>
          </div>
        </div>

        {/* Recent Comments */}
        <div>
          <h2 style={{ marginBottom: '20px', color: 'var(--blue-dark)' }}>📝 Recent Comments</h2>

          {comments.length === 0 ? (
            <div style={{
              background: '#f9f9f9',
              border: '1px solid var(--grey-border)',
              borderRadius: '8px',
              padding: '40px',
              textAlign: 'center',
              color: '#888'
            }}>
              <p>No comments yet</p>
            </div>
          ) : (
            <div>
              {comments.slice(0, 10).map((comment) => (
                <div
                  key={comment.id}
                  style={{
                    background: 'white',
                    border: '1px solid var(--grey-border)',
                    borderRadius: '8px',
                    padding: '16px',
                    marginBottom: '12px'
                  }}
                >
                  <p style={{ margin: '0 0 8px 0', color: '#888', fontSize: '0.85em' }}>
                    {new Date(comment.created_at).toLocaleDateString()}
                  </p>
                  <p style={{ margin: '0', color: '#333', lineHeight: '1.6' }}>
                    {comment.content.substring(0, 200)}
                    {comment.content.length > 200 ? '...' : ''}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
