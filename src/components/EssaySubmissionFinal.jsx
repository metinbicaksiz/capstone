import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'

export default function EssaySubmissionForm() {
  const { user, profile } = useAuth()
  const [essayTitle, setEssayTitle] = useState('')
  const [essayContent, setEssayContent] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [visibleTo, setVisibleTo] = useState([])
  const [users, setUsers] = useState([])
  const [usersLoading, setUsersLoading] = useState(false)
  const [usersError, setUsersError] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    if (user) {
      fetchUsers()
    }
  }, [user])

  const fetchUsers = async () => {
    setUsersLoading(true)
    setUsersError('')
    try {
      // Try fetching users — if your Supabase 'users' table has RLS enabled,
      // you need a policy: allow authenticated users to SELECT id, name, email
      // from users WHERE true (or role IN ('student','teacher','admin'))
      const { data, error } = await supabase
        .from('users')
        .select('id, name, email, role')
        .neq('id', user.id)

      if (error) {
        // Log the real error so it's easy to debug
        console.error('Supabase error fetching users:', error.code, error.message, error.details, error.hint)
        // Check for common RLS / permission errors
        if (error.code === 'PGRST301' || error.message?.includes('row-level security') || error.code === '42501') {
          setUsersError('rls')
        } else {
          setUsersError(error.message || 'Unknown error')
        }
        setUsers([])
        return
      }

      console.log('Fetched users:', data)

      // Map data — handle both 'name' and 'full_name' column variants
      const mapped = (data || []).map(u => ({
        id: u.id,
        name: u.name || u.full_name || u.email,
        email: u.email,
        role: u.role
      }))
      setUsers(mapped)

      if (mapped.length === 0) {
        console.warn('No other users found. This may be caused by Supabase RLS blocking the query, or there is only one user in the database.')
        setUsersError('empty')
      }
    } catch (err) {
      console.error('Error fetching users:', err)
      setUsersError(err.message || 'Failed to load users')
    } finally {
      setUsersLoading(false)
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError('File size exceeds 10MB limit')
        setSelectedFile(null)
        return
      }
      setSelectedFile(file)
      setError('')
    }
  }

  const handleVisibilityChange = (userId) => {
    setVisibleTo(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!essayTitle.trim()) {
      setError('Please enter an essay title')
      return
    }

    if (!essayContent.trim()) {
      setError('Please enter essay content')
      return
    }

    setLoading(true)
    setError('')

    try {
      let fileUrl = null
      let fileName = null
      let fileWarning = null

      // Upload file if selected
      if (selectedFile) {
        const fileExt = selectedFile.name.split('.').pop()
        fileName = `${Date.now()}.${fileExt}`
        const filePath = `essays/${user.id}/${fileName}`

        const { error: uploadError } = await supabase.storage
          .from('essays')
          .upload(filePath, selectedFile)

        if (uploadError) {
          console.warn('Storage upload failed (essay text will still be saved):', uploadError.message)
          // Don't block the whole submission — save the essay text without the file
          fileWarning = `File could not be uploaded (${uploadError.message}). Your essay text was saved successfully.`
          fileName = null
        } else {
          fileUrl = filePath
        }
      }

      // Save essay to database
      // Note: omit created_at so the DB default handles it
      const insertPayload = {
        user_id: user.id,
        title: essayTitle,
        content: essayContent,
        file_url: fileUrl,
        file_name: fileName,
        visible_to: visibleTo.length > 0 ? JSON.stringify(visibleTo) : null
      }

      console.log('Attempting essay insert with user_id:', user.id, 'auth uid should match')

      const { data: insertData, error: insertError } = await supabase
        .from('essays')
        .insert(insertPayload)
        .select()

      if (insertError) {
        const fullMsg = [
          `Code: ${insertError.code}`,
          `Message: ${insertError.message}`,
          insertError.details ? `Details: ${insertError.details}` : null,
          insertError.hint ? `Hint: ${insertError.hint}` : null
        ].filter(Boolean).join(' | ')
        console.error('Essay insert error:', fullMsg, insertError)
        throw new Error(fullMsg)
      }

      console.log('Essay inserted successfully:', insertData)

      setSubmitted(true)
      setEssayTitle('')
      setEssayContent('')
      setSelectedFile(null)
      setVisibleTo([])
      if (fileWarning) setError(fileWarning)

      setTimeout(() => {
        setSubmitted(false)
        if (fileWarning) setError('')
      }, 6000)
    } catch (err) {
      console.error('Error submitting essay:', err)
      setError(err.message || 'Failed to submit essay')
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="info-box info-box-orange" style={{ marginBottom: '16px' }}>
        <p style={{ margin: 0 }}>You must be logged in to submit essays and view feedback.</p>
      </div>
    )
  }

  return (
    <div className="info-box info-box-blue" id="essaySubmissionSection">
      <h6>Submit Your Final Essay</h6>

      {submitted && (
        <div className="info-box info-box-teal" style={{ marginBottom: '16px' }}>
          <p style={{ margin: 0 }}>✓ Essay submitted successfully!</p>
        </div>
      )}

      {error && (
        <div className="info-box info-box-orange" style={{ marginBottom: '16px' }}>
          <p style={{ margin: 0 }}>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '16px' }}>
          <label htmlFor="essayTitle" style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>
            Essay Title
          </label>
          <input
            type="text"
            id="essayTitle"
            placeholder="Enter your essay title"
            value={essayTitle}
            onChange={(e) => setEssayTitle(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '16px' }}>
          <label htmlFor="essayContent" style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>
            Add Comment
          </label>
          <textarea
            id="essayContent"
            placeholder="Paste your essay here or write directly..."
            value={essayContent}
            onChange={(e) => setEssayContent(e.target.value)}
            style={{
              width: '100%',
              minHeight: '100px',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontFamily: 'monospace'
            }}
          />
          <small style={{ color: '#6c757d', display: 'block', marginTop: '6px' }}>
            Recommended: 500–750 words
          </small>
        </div>

        <div className="form-group" style={{ marginBottom: '16px' }}>
          <label htmlFor="essayDocument" style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>
            📎 Upload Your Essay
          </label>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <input
                type="file"
                id="essayDocument"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
                style={{ padding: '8px' }}
              />
              <small style={{ color: '#6c757d', display: 'block', marginTop: '6px' }}>
                Accepted formats: PDF, DOCX, TXT, DOC (Max 10MB)
              </small>
            </div>

            {selectedFile && (
              <div style={{ flex: 1, minWidth: '200px' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#093C5D' }}>
                  Who can see this file?
                </label>
                <div style={{ position: 'relative' }}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      backgroundColor: '#fff',
                      cursor: 'pointer',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: '#333'
                    }}
                  >
                    <span>
                      {visibleTo.length === 0
                        ? 'Select users...'
                        : `${visibleTo.length} user${visibleTo.length !== 1 ? 's' : ''} selected`}
                    </span>
                    <span style={{ fontSize: '12px' }}>▼</span>
                  </button>

                  {dropdownOpen && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      right: 0,
                      marginTop: '4px',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      backgroundColor: '#fff',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      zIndex: 10,
                      maxHeight: '250px',
                      overflowY: 'auto'
                    }}>
                      {usersLoading ? (
                        <p style={{ margin: '12px', color: '#6c757d', fontSize: '0.9em' }}>⏳ Loading users...</p>
                      ) : usersError === 'rls' ? (
                        <div style={{ margin: '12px' }}>
                          <p style={{ color: '#842029', fontSize: '0.85em', margin: '0 0 6px 0', fontWeight: 600 }}>⚠️ Permission Error</p>
                          <p style={{ color: '#6c757d', fontSize: '0.82em', margin: 0 }}>
                            Your Supabase <code>users</code> table RLS policy is blocking this query.
                            Add a policy: <em>allow authenticated users to SELECT from users</em>.
                          </p>
                        </div>
                      ) : users.length > 0 ? (
                        users.map(u => (
                          <label
                            key={u.id}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              padding: '8px 12px',
                              borderBottom: '1px solid #f0f0f0',
                              cursor: 'pointer',
                              color: '#333',
                              margin: 0,
                              fontSize: '14px',
                              gap: '8px'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                          >
                            <input
                              type="checkbox"
                              checked={visibleTo.includes(u.id)}
                              onChange={() => handleVisibilityChange(u.id)}
                              style={{
                                width: '16px',
                                height: '16px',
                                margin: 0,
                                cursor: 'pointer',
                                flexShrink: 0
                              }}
                            />
                            <span style={{ flex: 1 }}>
                              {u.name || u.email}
                              {u.role && <span style={{ marginLeft: '6px', fontSize: '11px', color: '#888', fontStyle: 'italic' }}>({u.role})</span>}
                            </span>
                          </label>
                        ))
                      ) : (
                        <p style={{ margin: '12px', color: '#6c757d', fontSize: '0.9em' }}>
                          {usersError === 'empty'
                            ? 'No other users found in the database.'
                            : usersError
                              ? `Error: ${usersError}`
                              : 'No other users available'}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                <small style={{ color: '#6c757d', display: 'block', marginTop: '6px' }}>
                  Click to select users who can view your uploaded file
                </small>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary"
          style={{ opacity: loading ? 0.6 : 1 }}
        >
          {loading ? 'Submitting...' : 'Submit Essay'}
        </button>
        <button
          type="button"
          className="btn btn-outline"
          style={{ marginLeft: '10px' }}
          disabled={loading}
        >
          Save as Draft
        </button>
      </form>
    </div>
  )
}
