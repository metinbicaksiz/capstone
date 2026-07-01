import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function CommentForm({ onSubmit, placeholder = 'Share your thoughts...' }) {
  const { user, profile } = useAuth()
  const [content, setContent] = useState('')
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!content.trim()) return

    onSubmit({
      author: profile?.name || 'Anonymous',
      role: profile?.role || 'student',
      content: content.trim(),
      timestamp: 'just now'
    })

    setContent('')
    setIsBold(false)
    setIsItalic(false)
    setIsUnderline(false)
  }

  const applyFormat = (command, value = null) => {
    document.execCommand(command, false, value)
  }

  const insertLink = () => {
    const url = prompt('Enter URL:')
    if (url) {
      applyFormat('createLink', url)
    }
  }

  const insertList = (type) => {
    applyFormat(type === 'ul' ? 'insertUnorderedList' : 'insertOrderedList')
  }

  if (!user) {
    return (
      <div
        style={{
          background: '#fff3cd',
          border: '1px solid #ffc107',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px'
        }}
      >
        <p style={{ margin: '0', color: '#856404' }}>
          🔐 Please log in to participate in the discussion.
        </p>
      </div>
    )
  }

  return (
    <div
      style={{
        background: 'var(--blue-bg)',
        border: '1px solid var(--blue-border)',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '24px'
      }}
    >
      <h4 style={{ margin: '0 0 12px 0', color: 'var(--blue-dark)' }}>
        ✍️ Add Your Comment
      </h4>

      <form onSubmit={handleSubmit}>
        {/* Toolbar */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            padding: '8px',
            background: '#ffffff',
            borderRadius: '4px 4px 0 0',
            borderBottom: '1px solid var(--grey-border)',
            marginBottom: '0'
          }}
        >
          <button
            type="button"
            onClick={() => {
              applyFormat('bold')
              setIsBold(!isBold)
            }}
            style={{
              background: isBold ? 'var(--blue-dark)' : '#ffffff',
              color: isBold ? '#ffffff' : 'var(--blue-dark)',
              border: '1px solid var(--grey-border)',
              padding: '6px 10px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.9em'
            }}
            title="Bold"
          >
            B
          </button>

          <button
            type="button"
            onClick={() => {
              applyFormat('italic')
              setIsItalic(!isItalic)
            }}
            style={{
              background: isItalic ? 'var(--blue-dark)' : '#ffffff',
              color: isItalic ? '#ffffff' : 'var(--blue-dark)',
              border: '1px solid var(--grey-border)',
              padding: '6px 10px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontStyle: 'italic',
              fontSize: '0.9em'
            }}
            title="Italic"
          >
            I
          </button>

          <button
            type="button"
            onClick={() => {
              applyFormat('underline')
              setIsUnderline(!isUnderline)
            }}
            style={{
              background: isUnderline ? 'var(--blue-dark)' : '#ffffff',
              color: isUnderline ? '#ffffff' : 'var(--blue-dark)',
              border: '1px solid var(--grey-border)',
              padding: '6px 10px',
              borderRadius: '4px',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '0.9em'
            }}
            title="Underline"
          >
            U
          </button>

          <div style={{ width: '1px', background: 'var(--grey-border)' }}></div>

          <button
            type="button"
            onClick={() => insertList('ul')}
            style={{
              background: '#ffffff',
              color: 'var(--blue-dark)',
              border: '1px solid var(--grey-border)',
              padding: '6px 10px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9em'
            }}
            title="Bullet List"
          >
            •
          </button>

          <button
            type="button"
            onClick={() => insertList('ol')}
            style={{
              background: '#ffffff',
              color: 'var(--blue-dark)',
              border: '1px solid var(--grey-border)',
              padding: '6px 10px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9em'
            }}
            title="Numbered List"
          >
            #
          </button>

          <button
            type="button"
            onClick={insertLink}
            style={{
              background: '#ffffff',
              color: 'var(--blue-dark)',
              border: '1px solid var(--grey-border)',
              padding: '6px 10px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9em'
            }}
            title="Insert Link"
          >
            🔗
          </button>
        </div>

        {/* Editor */}
        <div
          contentEditable
          onInput={(e) => setContent(e.currentTarget.innerHTML)}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '0 0 4px 4px',
            border: '1px solid var(--grey-border)',
            fontFamily: 'inherit',
            fontSize: '0.95em',
            minHeight: '120px',
            maxHeight: '300px',
            overflowY: 'auto',
            background: '#ffffff',
            outline: 'none',
            marginBottom: '12px'
          }}
          onFocus={(e) => {
            if (e.currentTarget.innerHTML === '<br>' || !e.currentTarget.innerHTML) {
              e.currentTarget.innerHTML = ''
            }
          }}
        >
          <br />
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!content.trim()}
            style={{
              opacity: content.trim() ? 1 : 0.6,
              cursor: content.trim() ? 'pointer' : 'not-allowed'
            }}
          >
            Post Comment
          </button>
          <button
            type="button"
            onClick={() => {
              setContent('')
              setIsBold(false)
              setIsItalic(false)
              setIsUnderline(false)
            }}
            style={{
              background: 'none',
              border: '1px solid var(--grey-border)',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              color: 'var(--blue-dark)',
              fontWeight: '500'
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}
