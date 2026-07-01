import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Comment({ comment, onLike, onUnread, onReply, nestLevel = 0 }) {
  const { user } = useAuth()
  const [showReplyForm, setShowReplyForm] = useState(false)

  const getRoleBadge = (role) => {
    const badges = {
      teacher: { text: '👨‍🏫 Teacher', bg: '#d4edda', color: '#155724' },
      admin: { text: '🔐 Admin', bg: '#f8d7da', color: '#842029' },
      student: { text: '👤 Student', bg: '#cfe2ff', color: '#084298' }
    }
    return badges[role] || badges.student
  }

  const badge = getRoleBadge(comment.role)
  const marginLeft = nestLevel > 0 ? `${nestLevel * 20}px` : '0'

  return (
    <div
      style={{
        borderLeft: '3px solid var(--blue-mid)',
        paddingLeft: '16px',
        marginBottom: '20px',
        paddingBottom: '16px',
        borderBottom: '1px solid var(--grey-border)',
        marginLeft,
        background: '#ffffff',
        padding: '16px 16px 16px 32px'
      }}
    >
      {/* Comment Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
        <div>
          <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: 'var(--blue-dark)' }}>
            {comment.author}
            <span
              style={{
                marginLeft: '8px',
                background: badge.bg,
                color: badge.color,
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '0.8em',
                fontWeight: '500'
              }}
            >
              {badge.text}
            </span>
          </p>
          <p style={{ margin: '0', fontSize: '0.85em', color: '#888' }}>
            {comment.timestamp}
          </p>
        </div>
        {comment.isUnread && (
          <span
            style={{
              background: '#e7f3ff',
              color: '#0056b3',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '0.8em'
            }}
          >
            New
          </span>
        )}
      </div>

      {/* Comment Content */}
      <p style={{ margin: '12px 0', color: '#333', lineHeight: '1.6' }}>
        {comment.content}
      </p>

      {/* Comment Actions */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '12px' }}>
        <button
          onClick={() => onLike(comment.id)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: comment.userLiked ? '#e74c3c' : '#888',
            fontSize: '0.9em',
            fontWeight: comment.userLiked ? '600' : '400',
            transition: 'all 0.2s'
          }}
        >
          {comment.userLiked ? '❤️' : '🤍'} {comment.likes}
        </button>

        <button
          onClick={() => onUnread(comment.id)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: comment.isUnread ? '#2980b9' : '#888',
            fontSize: '0.9em',
            fontWeight: comment.isUnread ? '600' : '400',
            transition: 'all 0.2s'
          }}
        >
          {comment.isUnread ? '📌' : '📍'} {comment.isUnread ? 'Unread' : 'Mark Unread'}
        </button>

        {user && (
          <button
            onClick={() => setShowReplyForm(!showReplyForm)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#2980b9',
              fontSize: '0.9em',
              transition: 'all 0.2s'
            }}
          >
            💬 Reply
          </button>
        )}
      </div>

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div style={{ marginTop: '16px' }}>
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              onLike={onLike}
              onUnread={onUnread}
              onReply={onReply}
              nestLevel={nestLevel + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}
