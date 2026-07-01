import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { discussionService } from '../services/discussionService'

export default function AdminPanel({ lessonId, onArticleAdded }) {
  const { user, profile } = useAuth()
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    fileName: '',
    fileSize: 0
  })

  // Check if user is admin or teacher
  const isAdmin = profile?.role === 'admin' || profile?.role === 'teacher'

  if (!isAdmin || !user) {
    return null
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'fileSize' ? parseInt(value) : value
    }))
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setLoading(true)
    setError(null)

    try {
      // Upload file to Supabase Storage
      const filePath = `articles/${Date.now()}_${file.name}`
      const { error: uploadError } = await discussionService.supabase.storage
        .from('articles')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      // Get public URL
      const { data } = discussionService.supabase.storage
        .from('articles')
        .getPublicUrl(filePath)

      setFormData(prev => ({
        ...prev,
        fileName: file.name,
        fileSize: file.size,
        fileUrl: data.publicUrl
      }))
    } catch (err) {
      setError(`Upload failed: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const articleData = {
        lesson_id: lessonId,
        title: formData.title,
        description: formData.description,
        file_url: `/pdfs/${formData.fileName}`, // Using public folder path
        file_name: formData.fileName,
        file_size: formData.fileSize,
        uploaded_by: user.id
      }

      const { data, error: createError } = await discussionService.createArticle(articleData)

      if (createError) throw createError

      // Reset form
      setFormData({
        title: '',
        description: '',
        fileName: '',
        fileSize: 0
      })
      setShowForm(false)

      // Notify parent component
      if (onArticleAdded) {
        onArticleAdded(data)
      }
    } catch (err) {
      setError(`Failed to add article: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      background: '#fff3cd',
      border: '1px solid #ffc107',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '24px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: '0', color: '#856404' }}>👨‍🏫 Admin: Manage Articles</h4>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn btn-primary"
          style={{ padding: '6px 12px', fontSize: '0.9em' }}
        >
          {showForm ? 'Cancel' : '+ Add Article'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #ffc107' }}>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#856404' }}>
              Article Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '4px',
                border: '1px solid #ffc107',
                fontSize: '0.9em',
                boxSizing: 'border-box'
              }}
              placeholder="e.g., The Benefits of Gap Years"
            />
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#856404' }}>
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '4px',
                border: '1px solid #ffc107',
                fontSize: '0.9em',
                minHeight: '60px',
                boxSizing: 'border-box'
              }}
              placeholder="Brief description of the article"
            />
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#856404' }}>
              PDF File *
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              disabled={loading}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '4px',
                border: '1px solid #ffc107'
              }}
            />
            {formData.fileName && (
              <p style={{ margin: '8px 0 0 0', fontSize: '0.85em', color: '#856404' }}>
                ✓ Selected: {formData.fileName}
              </p>
            )}
          </div>

          {error && (
            <div style={{
              background: '#f8d7da',
              color: '#842029',
              padding: '12px',
              borderRadius: '4px',
              marginBottom: '12px',
              fontSize: '0.9em'
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !formData.title || !formData.fileName}
            className="btn btn-primary"
            style={{
              opacity: loading || !formData.title || !formData.fileName ? 0.6 : 1,
              cursor: loading || !formData.title || !formData.fileName ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Uploading...' : 'Add Article'}
          </button>
        </form>
      )}
    </div>
  )
}
