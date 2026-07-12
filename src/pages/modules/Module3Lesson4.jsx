import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import ModuleLayout from '../../components/ModuleLayout'
import { supabase } from '../../lib/supabase'
import './ModulesPage.css'
import './DiscussionForum.css'

// lesson_id used to identify this lesson's discussion in the database.
// Run: INSERT INTO discussions (lesson_id, title) VALUES (34, 'Module 3 Lesson 4 Discussion');
const M3L4_LESSON_ID = 34

// Recursive component to display nested replies at any depth
function RepliesThread({ replies, level = 1, replyingTo, setReplyingTo, replyText, setReplyText, user, handleSubmitReply, discussionId, loadComments }) {
  if (!replies || replies.length === 0) return null

  const toggleLike = async (commentId) => {
    if (!user) return
    try {
      const { data: existingLike, error: checkError } = await supabase
        .from('comment_likes')
        .select('id')
        .eq('comment_id', commentId)
        .eq('user_id', user.id)
        .limit(1)
      if (checkError) throw checkError
      if (existingLike?.length > 0) {
        const { error: deleteError } = await supabase.from('comment_likes').delete().eq('comment_id', commentId).eq('user_id', user.id)
        if (deleteError) throw deleteError
      } else {
        const { error: insertError } = await supabase.from('comment_likes').insert({ comment_id: commentId, user_id: user.id })
        if (insertError) throw insertError
      }
      await loadComments(discussionId)
    } catch (error) {
      console.error('Error toggling like:', error)
      alert('Error: ' + error.message)
    }
  }

  const toggleUnread = async (commentId) => {
    if (!user) return
    try {
      const { data: existingRead, error: checkError } = await supabase
        .from('comment_reads')
        .select('id, is_unread')
        .eq('comment_id', commentId)
        .eq('user_id', user.id)
        .limit(1)
      if (checkError && checkError.code !== 'PGRST116') throw checkError
      const newIsUnread = existingRead?.length > 0 ? !existingRead[0].is_unread : true
      if (existingRead?.length > 0) {
        const { error: deleteError } = await supabase.from('comment_reads').delete().eq('comment_id', commentId).eq('user_id', user.id)
        if (deleteError) throw deleteError
      }
      const { error: insertError } = await supabase.from('comment_reads').insert({ comment_id: commentId, user_id: user.id, is_unread: newIsUnread }).select()
      if (insertError) throw insertError
      await loadComments(discussionId)
    } catch (error) {
      console.error('Error toggling unread:', error)
      alert('Error: ' + error.message)
    }
  }

  return (
    <div style={{ marginTop: '16px', marginLeft: '16px', borderLeft: '2px solid #ddd', paddingLeft: '12px' }}>
      {replies.map((reply) => (
        <div key={reply.id} style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #eee' }}>
          <p style={{ margin: '0 0 4px 0', fontWeight: '600', fontSize: '0.9em', color: 'var(--blue-dark)' }}>
            {reply.author}
            {reply.role === 'teacher' && (
              <span style={{ marginLeft: '8px', background: '#d4edda', color: '#155724', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75em', fontWeight: '500' }}>
                Teacher
              </span>
            )}
          </p>
          <p style={{ margin: '0 0 8px 0', fontSize: '0.85em', color: '#888' }}>{reply.timestamp}</p>
          <p style={{ margin: '0 0 8px 0', color: '#333', lineHeight: '1.5', fontSize: '0.95em' }}>{reply.content}</p>
          <div style={{ display: 'flex', gap: '12px', fontSize: '0.85em' }}>
            <button onClick={() => user && toggleLike(reply.id)} style={{ background: 'none', border: 'none', cursor: user ? 'pointer' : 'not-allowed', color: '#888', opacity: user ? 1 : 0.6 }}>
              Like {reply.likes}
            </button>
            <button onClick={() => user && toggleUnread(reply.id)} style={{ background: 'none', border: 'none', cursor: user ? 'pointer' : 'not-allowed', color: reply.isUnread ? '#e74c3c' : '#888', opacity: user ? 1 : 0.6 }}>
              {reply.isUnread ? 'Marked' : 'Mark Unread'}
            </button>
            {user && (
              <button onClick={() => setReplyingTo(replyingTo === reply.id ? null : reply.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: replyingTo === reply.id ? '#e74c3c' : '#2980b9' }}>
                {replyingTo === reply.id ? 'Cancel' : 'Reply'}
              </button>
            )}
          </div>

          {user && replyingTo === reply.id && (
            <form onSubmit={(e) => handleSubmitReply(e, reply.id)} style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--grey-border)' }}>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write your reply..."
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid var(--grey-border)', fontFamily: 'inherit', fontSize: '0.9em', resize: 'vertical', minHeight: '60px', marginBottom: '8px' }}
              />
              <div style={{ display: 'flex', gap: '8px' }}>
                <button type="submit" className="btn btn-primary" disabled={!replyText.trim()} style={{ padding: '6px 12px', fontSize: '0.85em' }}>Reply</button>
                <button type="button" onClick={() => { setReplyingTo(null); setReplyText('') }} style={{ padding: '6px 12px', fontSize: '0.85em', background: '#f0f0f0', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
              </div>
            </form>
          )}

          <RepliesThread
            replies={reply.replies}
            level={level + 1}
            replyingTo={replyingTo}
            setReplyingTo={setReplyingTo}
            replyText={replyText}
            setReplyText={setReplyText}
            user={user}
            handleSubmitReply={handleSubmitReply}
            discussionId={discussionId}
            loadComments={loadComments}
          />
        </div>
      ))}
    </div>
  )
}

export default function Module3Lesson4() {
  const { user } = useAuth()
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [replyingTo, setReplyingTo] = useState(null)
  const [replyText, setReplyText] = useState('')
  const [loading, setLoading] = useState(true)
  const [discussionId, setDiscussionId] = useState(null)

  useEffect(() => {
    loadDiscussion()
  }, [user])

  const loadDiscussion = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase.from('discussions').select('id').eq('lesson_id', M3L4_LESSON_ID).limit(1)
      if (error) throw error
      const discussion = data?.[0]
      if (discussion?.id) {
        setDiscussionId(discussion.id)
        await loadComments(discussion.id)
      } else {
        setComments([])
      }
    } catch (error) {
      console.error('Error loading discussion:', error)
      setComments([])
    } finally {
      setLoading(false)
    }
  }

  const loadComments = async (dId) => {
    if (!dId) return
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('id, content, created_at, user_id, parent_comment_id')
        .eq('discussion_id', dId)
        .order('created_at', { ascending: true })
      if (error) throw error
      if (!data || data.length === 0) { setComments([]); return }

      const userIds = [...new Set(data.map(c => c.user_id))]
      const { data: userProfiles } = await supabase.from('users').select('id, name, role').in('id', userIds)
      const userMap = {}
      userProfiles?.forEach(u => { userMap[u.id] = { name: u.name, role: u.role } })

      const commentMap = {}
      const rootComments = []
      data.forEach(c => {
        const u = userMap[c.user_id]
        const formatted = {
          id: c.id,
          author: u?.name || 'Anonymous',
          role: u?.role || 'student',
          content: c.content,
          timestamp: new Date(c.created_at).toLocaleDateString(),
          likes: 0,
          isUnread: false,
          replies: [],
          parentId: c.parent_comment_id
        }
        commentMap[c.id] = formatted
        if (!c.parent_comment_id) rootComments.push(formatted)
      })

      const commentIds = Object.keys(commentMap)
      if (commentIds.length > 0) {
        const { data: likesData } = await supabase.from('comment_likes').select('comment_id').in('comment_id', commentIds)
        const likeCounts = {}
        likesData?.forEach(like => { likeCounts[like.comment_id] = (likeCounts[like.comment_id] || 0) + 1 })
        Object.keys(commentMap).forEach(id => { commentMap[id].likes = likeCounts[id] || 0 })

        if (user) {
          const { data: readsData } = await supabase.from('comment_reads').select('comment_id, is_unread').in('comment_id', commentIds).eq('user_id', user.id)
          const unreadStatus = {}
          readsData?.forEach(r => { unreadStatus[r.comment_id] = r.is_unread })
          Object.keys(commentMap).forEach(id => { commentMap[id].isUnread = unreadStatus[id] || false })
        }
      }

      const addReplyToParent = (childId) => {
        const child = commentMap[childId]
        if (!child || !child.parentId) return
        const parent = commentMap[child.parentId]
        if (parent && !parent.replies.includes(child)) {
          parent.replies.push(child)
          addReplyToParent(child.parentId)
        }
      }
      data.forEach(c => { if (c.parent_comment_id) addReplyToParent(c.id) })
      rootComments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      setComments(rootComments)
    } catch (error) {
      console.error('Error loading comments:', error)
      setComments([])
    }
  }

  const handleSubmitComment = async (e) => {
    e.preventDefault()
    if (!newComment.trim() || !user || !discussionId) return
    try {
      const { error } = await supabase.from('comments').insert({ discussion_id: discussionId, user_id: user.id, content: newComment })
      if (error) throw error
      setNewComment('')
      await loadComments(discussionId)
    } catch (error) {
      console.error('Error posting comment:', error)
      alert('Failed to post comment')
    }
  }

  const handleSubmitReply = async (e, parentId) => {
    e.preventDefault()
    if (!replyText.trim() || !user || !discussionId) return
    try {
      const { error } = await supabase.from('comments').insert({ discussion_id: discussionId, parent_comment_id: parentId, user_id: user.id, content: replyText })
      if (error) throw error
      setReplyText('')
      setReplyingTo(null)
      await loadComments(discussionId)
    } catch (error) {
      console.error('Error posting reply:', error)
      alert('Failed to post reply: ' + error.message)
    }
  }

  const toggleLike = async (commentId) => {
    if (!user) return
    try {
      const { data: existingLike, error: checkError } = await supabase.from('comment_likes').select('id').eq('comment_id', commentId).eq('user_id', user.id).limit(1)
      if (checkError) throw checkError
      if (existingLike?.length > 0) {
        const { error } = await supabase.from('comment_likes').delete().eq('comment_id', commentId).eq('user_id', user.id)
        if (error) throw error
      } else {
        const { error } = await supabase.from('comment_likes').insert({ comment_id: commentId, user_id: user.id })
        if (error) throw error
      }
      await loadComments(discussionId)
    } catch (error) {
      console.error('Error toggling like:', error)
      alert('Error: ' + error.message)
    }
  }

  const toggleUnread = async (commentId) => {
    if (!user) return
    try {
      const { data: existingRead, error: checkError } = await supabase.from('comment_reads').select('id, is_unread').eq('comment_id', commentId).eq('user_id', user.id).limit(1)
      if (checkError && checkError.code !== 'PGRST116') throw checkError
      const newIsUnread = existingRead?.length > 0 ? !existingRead[0].is_unread : true
      if (existingRead?.length > 0) {
        const { error } = await supabase.from('comment_reads').delete().eq('comment_id', commentId).eq('user_id', user.id)
        if (error) throw error
      }
      const { error } = await supabase.from('comment_reads').insert({ comment_id: commentId, user_id: user.id, is_unread: newIsUnread }).select()
      if (error) throw error
      await loadComments(discussionId)
    } catch (error) {
      console.error('Error toggling unread:', error)
      alert('Error: ' + error.message)
    }
  }

  const moduleNames = {
    1: 'Module 1 — From Paragraph to Essay',
    2: 'Module 2 — Advantages & Disadvantages Essays',
    3: 'Module 3 — Cause & Effect Essays',
    4: 'Module 4 — Argumentative Essays'
  }

  const articles = [
    {
      id: 1,
      title: 'Cultural Diversity and Information & Communication Impacts on Language Learning',
      fileName: 'article1causeeffect.pdf',
      size: '145 KB',
      uploadedBy: 'Prof. Michael Lee',
      uploadedDate: 'Oct 15, 2024'
    },
    {
      id: 2,
      title: 'Bullying in Elementary Schools: Its Causes and Effects on Students',
      fileName: 'Article2causeeffect.pdf',
      size: '275 KB',
      uploadedBy: 'Prof. Michael Lee',
      uploadedDate: 'Oct 14, 2024'
    }
  ]

  return (
    <ModuleLayout moduleNumber={3} moduleName={moduleNames[3]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div dangerouslySetInnerHTML={{ __html: `
      <div class="page-banner">
        <h1>3.4 Reading, Discussion &amp; Collaboration</h1>
        <p class="banner-sub">Read academic articles exploring causes and effects of real-world issues, and discuss your ideas with classmates.</p>
      </div>

      <!-- Reading Assignment -->
      <h2 class="section-title">Reading Assignment</h2>
      <p>You will be assigned academic articles to read. These articles model cause/effect analysis and will give you ideas and evidence for your own cause and effect essay. Read the articles carefully and take notes on the causes, effects, and relationships the authors describe.</p>` }} />

        {/* Articles Section */}
        <div className="articles-section" style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.2em', marginBottom: '16px', color: 'var(--blue-dark)' }}>
            Available Articles
          </h3>
          {articles.map((article) => (
            <div key={article.id} className="article-card" style={{
              border: '1px solid var(--grey-border)',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: 'var(--blue-dark)' }}>{article.title}</h4>
                <p style={{ margin: '0 0 4px 0', fontSize: '0.9em', color: '#555' }}>
                  {article.fileName} • {article.size}
                </p>
                <p style={{ margin: '0', fontSize: '0.85em', color: '#888' }}>
                  Uploaded by {article.uploadedBy} on {article.uploadedDate}
                </p>
              </div>
              <a
                href={`/pdfs/${article.fileName}`}
                download
                className="btn btn-primary"
                style={{ marginLeft: '16px', whiteSpace: 'nowrap' }}
              >
                Download
              </a>
            </div>
          ))}
        </div>

        <div dangerouslySetInnerHTML={{ __html: `<h4>Use the discussion forum below to:</h4>
        </br>
        <p>Share your summary of the articles</p>
        <p>Identify the causes and effects each author discusses</p>
        <p>Discuss different perspectives on the topic</p>
        <p>Ask questions and answer your classmates' questions</p>
      ` }} />

        {/* Discussion Forum Section */}
        <div className="discussion-forum" style={{ marginTop: '32px' }}>
          <h2 style={{ fontSize: '1.3em', marginBottom: '24px', color: 'var(--blue-dark)' }}>
            Discussion Forum
          </h2>

          {/* Comment Form */}
          {user ? (
            <div className="comment-form-section" style={{
              background: 'var(--blue-bg)',
              border: '1px solid var(--blue-border)',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '24px'
            }}>
              <h4 style={{ margin: '0 0 12px 0', color: 'var(--blue-dark)' }}>Add Your Comment</h4>
              <form onSubmit={handleSubmitComment}>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts, ask a question, or reply to the article..."
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '4px',
                    border: '1px solid var(--grey-border)',
                    fontFamily: 'inherit',
                    fontSize: '0.95em',
                    resize: 'vertical',
                    minHeight: '100px',
                    marginBottom: '12px'
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!newComment.trim()}
                >
                  Post Comment
                </button>
              </form>
            </div>
          ) : (
            <div style={{
              background: '#fff3cd',
              border: '1px solid #ffc107',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '24px'
            }}>
              <p style={{ margin: '0', color: '#856404' }}>
                Please <Link to="/login" style={{ color: '#0056b3' }}>log in</Link> to participate in the discussion.
              </p>
            </div>
          )}

          {/* Comments List */}
          <div className="comments-section">
            <h4 style={{ marginBottom: '16px', color: 'var(--blue-dark)' }}>
              {loading ? 'Loading comments...' : `${comments.length} Comments`}
            </h4>

            {loading ? (
              <p style={{ color: '#888', textAlign: 'center', padding: '20px' }}>Loading discussion forum...</p>
            ) : comments.length === 0 ? (
              <p style={{ color: '#888', textAlign: 'center', padding: '20px' }}>No comments yet. Be the first to share your thoughts!</p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="comment-item" style={{
                  borderLeft: '3px solid var(--blue-mid)',
                  paddingLeft: '16px',
                  marginBottom: '20px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--grey-border)'
                }}>
                  {/* Comment Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                    <div>
                      <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: 'var(--blue-dark)' }}>
                        {comment.author}
                        {comment.role === 'teacher' && (
                          <span style={{
                            marginLeft: '8px',
                            background: '#d4edda',
                            color: '#155724',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            fontSize: '0.8em',
                            fontWeight: '500'
                          }}>
                            Teacher
                          </span>
                        )}
                      </p>
                      <p style={{ margin: '0', fontSize: '0.85em', color: '#888' }}>
                        {comment.timestamp}
                      </p>
                    </div>
                  </div>

                  {/* Comment Content */}
                  <p style={{ margin: '12px 0', color: '#333', lineHeight: '1.6' }}>
                    {comment.content}
                  </p>

                  {/* Comment Actions */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '12px' }}>
                    <button
                      onClick={() => user && toggleLike(comment.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: user ? 'pointer' : 'not-allowed',
                        color: '#888',
                        fontSize: '0.9em',
                        opacity: user ? 1 : 0.6
                      }}
                    >
                      Like {comment.likes}
                    </button>

                    <button
                      onClick={() => user && toggleUnread(comment.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: user ? 'pointer' : 'not-allowed',
                        color: comment.isUnread ? '#e74c3c' : '#888',
                        fontSize: '0.9em',
                        opacity: user ? 1 : 0.6
                      }}
                    >
                      {comment.isUnread ? 'Marked Unread' : 'Mark Unread'}
                    </button>

                    {user && (
                      <button
                        onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: replyingTo === comment.id ? '#e74c3c' : '#2980b9',
                          fontSize: '0.9em'
                        }}
                      >
                        {replyingTo === comment.id ? 'Cancel' : 'Reply'}
                      </button>
                    )}
                  </div>

                  {/* Reply Form */}
                  {user && replyingTo === comment.id && (
                    <form
                      onSubmit={(e) => handleSubmitReply(e, comment.id)}
                      style={{
                        marginTop: '16px',
                        paddingTop: '16px',
                        borderTop: '1px solid var(--grey-border)'
                      }}
                    >
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write your reply..."
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '4px',
                          border: '1px solid var(--grey-border)',
                          fontFamily: 'inherit',
                          fontSize: '0.95em',
                          resize: 'vertical',
                          minHeight: '80px',
                          marginBottom: '8px'
                        }}
                      />
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={!replyText.trim()}
                          style={{ padding: '8px 16px', fontSize: '0.9em' }}
                        >
                          Post Reply
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setReplyingTo(null)
                            setReplyText('')
                          }}
                          style={{
                            padding: '8px 16px',
                            fontSize: '0.9em',
                            background: '#f0f0f0',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}

                  {/* Replies Section - Using Recursive Component */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div style={{ marginTop: '16px' }}>
                      <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '12px', marginLeft: '16px' }}>
                        {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}:
                      </p>
                      <RepliesThread
                        replies={comment.replies}
                        replyingTo={replyingTo}
                        setReplyingTo={setReplyingTo}
                        replyText={replyText}
                        setReplyText={setReplyText}
                        user={user}
                        handleSubmitReply={handleSubmitReply}
                        discussionId={discussionId}
                        loadComments={loadComments}
                      />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module3/lesson-3"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module3/lesson-5"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
