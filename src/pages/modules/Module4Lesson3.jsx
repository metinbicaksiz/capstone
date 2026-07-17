import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import ModuleLayout from '../../components/ModuleLayout'
import { supabase } from '../../lib/supabase'
import './ModulesPage.css'
import './DiscussionForum.css'

// Recursive component to display nested replies at any depth
function RepliesThread({ replies, level = 1, replyingTo, setReplyingTo, replyText, setReplyText, user, handleSubmitReply, discussionId, loadComments, editingCommentId, setEditingCommentId, editText, setEditText, handleEditComment, handleDeleteComment }) {
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
        const { error: deleteError } = await supabase
          .from('comment_likes')
          .delete()
          .eq('comment_id', commentId)
          .eq('user_id', user.id)
        if (deleteError) throw deleteError
      } else {
        const { error: insertError } = await supabase
          .from('comment_likes')
          .insert({
            comment_id: commentId,
            user_id: user.id
          })
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
      console.log('[RepliesThread] Toggling unread for reply:', commentId)
      const { data: existingRead, error: checkError } = await supabase
        .from('comment_reads')
        .select('id, is_unread')
        .eq('comment_id', commentId)
        .eq('user_id', user.id)
        .limit(1)

      if (checkError && checkError.code !== 'PGRST116') throw checkError

      const newIsUnread = existingRead?.length > 0 ? !existingRead[0].is_unread : true
      console.log('[RepliesThread] New is_unread value:', newIsUnread)

      // Delete the old record if it exists
      if (existingRead?.length > 0) {
        console.log('[RepliesThread] Deleting old record')
        const { error: deleteError } = await supabase
          .from('comment_reads')
          .delete()
          .eq('comment_id', commentId)
          .eq('user_id', user.id)
        if (deleteError) throw deleteError
      }

      // Insert the new record
      console.log('[RepliesThread] Inserting new record with is_unread:', newIsUnread)
      const { data: insertData, error: insertError } = await supabase
        .from('comment_reads')
        .insert({
          comment_id: commentId,
          user_id: user.id,
          is_unread: newIsUnread
        })
        .select()
      console.log('[RepliesThread] Insert result - data:', insertData, 'error:', insertError)
      if (insertError) throw insertError
      console.log('[RepliesThread] Reloading comments, discussionId:', discussionId)
      await loadComments(discussionId)
    } catch (error) {
      console.error('Error toggling unread:', error)
      alert('Error: ' + error.message)
    }
  }

  return (
    <div style={{
      marginTop: '16px',
      marginLeft: '16px',
      borderLeft: '2px solid #ddd',
      paddingLeft: '12px'
    }}>
      {replies.map((reply) => (
        <div key={reply.id} style={{
          marginBottom: '12px',
          paddingBottom: '12px',
          borderBottom: '1px solid #eee'
        }}>
          <p style={{ margin: '0 0 4px 0', fontWeight: '600', fontSize: '0.9em', color: 'var(--blue-dark)' }}>
            {reply.author}
            {reply.role === 'teacher' && (
              <span style={{
                marginLeft: '8px',
                background: '#d4edda',
                color: '#155724',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '0.75em',
                fontWeight: '500'
              }}>
                👨‍🏫 Teacher
              </span>
            )}
          </p>
          <p style={{ margin: '0 0 8px 0', fontSize: '0.85em', color: '#888' }}>
            {reply.timestamp}
          </p>
          {editingCommentId === reply.id ? (
            <div style={{ margin: '0 0 8px 0' }}>
              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid var(--grey-border)', fontFamily: 'inherit', fontSize: '0.9em', resize: 'vertical', minHeight: '60px', marginBottom: '8px' }}
              />
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn btn-primary" disabled={!editText.trim()} onClick={() => handleEditComment(reply.id)} style={{ padding: '6px 12px', fontSize: '0.85em' }}>Save</button>
                <button onClick={() => { setEditingCommentId(null); setEditText('') }} style={{ padding: '6px 12px', fontSize: '0.85em', background: '#f0f0f0', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
              </div>
            </div>
          ) : (
            <p style={{ margin: '0 0 8px 0', color: '#333', lineHeight: '1.5', fontSize: '0.95em' }}>
              {reply.content}
            </p>
          )}
          <div style={{ display: 'flex', gap: '12px', fontSize: '0.85em' }}>
            <button
              onClick={() => user && toggleLike(reply.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: user ? 'pointer' : 'not-allowed',
                color: '#888',
                opacity: user ? 1 : 0.6
              }}
            >
              🤍 {reply.likes}
            </button>
            <button
              onClick={() => user && toggleUnread(reply.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: user ? 'pointer' : 'not-allowed',
                color: reply.isUnread ? '#e74c3c' : '#888',
                opacity: user ? 1 : 0.6
              }}
            >
              📍 {reply.isUnread ? 'Marked' : 'Mark Unread'}
            </button>
            {user && (
              <button
                onClick={() => setReplyingTo(replyingTo === reply.id ? null : reply.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: replyingTo === reply.id ? '#e74c3c' : '#2980b9'
                }}
              >
                💬 {replyingTo === reply.id ? 'Cancel' : 'Reply'}
              </button>
            )}
            {user && reply.userId === user.id && (
              <>
                <button
                  onClick={() => { setEditingCommentId(reply.id); setEditText(reply.content) }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2980b9' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteComment(reply.id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e74c3c' }}
                >
                  Delete
                </button>
              </>
            )}
          </div>

          {/* Reply to Reply Form */}
          {user && replyingTo === reply.id && (
            <form
              onSubmit={(e) => handleSubmitReply(e, reply.id)}
              style={{
                marginTop: '12px',
                paddingTop: '12px',
                borderTop: '1px solid var(--grey-border)'
              }}
            >
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write your reply..."
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid var(--grey-border)',
                  fontFamily: 'inherit',
                  fontSize: '0.9em',
                  resize: 'vertical',
                  minHeight: '60px',
                  marginBottom: '8px'
                }}
              />
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!replyText.trim()}
                  style={{ padding: '6px 12px', fontSize: '0.85em' }}
                >
                  Reply
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setReplyingTo(null)
                    setReplyText('')
                  }}
                  style={{
                    padding: '6px 12px',
                    fontSize: '0.85em',
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

          {/* Recursively display nested replies */}
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
            editingCommentId={editingCommentId}
            setEditingCommentId={setEditingCommentId}
            editText={editText}
            setEditText={setEditText}
            handleEditComment={handleEditComment}
            handleDeleteComment={handleDeleteComment}
          />
        </div>
      ))}
    </div>
  )
}

export default function Module4Lesson3() {
  const { user, profile } = useAuth()
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [replyingTo, setReplyingTo] = useState(null)
  const [replyText, setReplyText] = useState('')
  const [loading, setLoading] = useState(true)

  const [discussionId, setDiscussionId] = useState(null)
  const [editingCommentId, setEditingCommentId] = useState(null)
  const [editText, setEditText] = useState('')

  useEffect(() => {
    loadDiscussion()
  }, [user])

  const loadDiscussion = async () => {
    try {
      setLoading(true)
      console.log('Loading discussion for lesson 3...')

      // Get the first discussion for lesson 3 (don't use .single() to avoid errors)
      const { data, error } = await supabase
        .from('discussions')
        .select('id')
        .eq('lesson_id', 3)
        .limit(1)

      if (error) {
        console.error('Error fetching discussion:', error)
        throw error
      }

      const discussion = data?.[0]
      if (discussion?.id) {
        console.log('Found discussion:', discussion.id)
        setDiscussionId(discussion.id)
        await loadComments(discussion.id)
      } else {
        console.warn('No discussion found for lesson 3 - make sure to run SETUP_LESSON3_COMPLETE.sql in Supabase')
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
      console.log('Loading comments for discussion:', dId)
      // Load ALL comments (parent and child)
      const { data, error } = await supabase
        .from('comments')
        .select('id, content, created_at, user_id, parent_comment_id')
        .eq('discussion_id', dId)
        .order('created_at', { ascending: true })

      if (error) {
        console.error('Error fetching comments:', error)
        throw error
      }

      console.log('Raw comments data:', data)

      if (!data || data.length === 0) {
        console.log('No comments found')
        setComments([])
        return
      }

      // Fetch user data for all comments
      const userIds = [...new Set(data.map(c => c.user_id))]
      console.log('Fetching user data for:', userIds)

      const { data: userProfiles, error: userError } = await supabase
        .from('users')
        .select('id, name, role')
        .in('id', userIds)

      const userMap = {}
      userProfiles?.forEach(u => {
        userMap[u.id] = { name: u.name, role: u.role }
      })

      // Create a map of all comments for easy lookup
      const commentMap = {}
      const rootComments = []

      console.log('Total comments to process:', data.length)

      data.forEach(c => {
        const user = userMap[c.user_id]
        const formattedComment = {
          id: c.id,
          userId: c.user_id,
          author: user?.name || 'Anonymous',
          role: user?.role || 'student',
          content: c.content,
          timestamp: new Date(c.created_at).toLocaleDateString(),
          likes: 0,
          userLiked: false,
          isUnread: false,
          replies: [],
          parentId: c.parent_comment_id
        }
        commentMap[c.id] = formattedComment
        console.log('Added comment:', c.id, 'parent:', c.parent_comment_id, 'isRoot:', !c.parent_comment_id)

        // If no parent, it's a root comment
        if (!c.parent_comment_id) {
          rootComments.push(formattedComment)
        }
      })

      console.log('Total root comments:', rootComments.length)
      console.log('Total comments in map:', Object.keys(commentMap).length)

      // Fetch like counts for all comments
      const commentIds = Object.keys(commentMap)
      if (commentIds.length > 0) {
        const { data: likesData, error: likesError } = await supabase
          .from('comment_likes')
          .select('comment_id')
          .in('comment_id', commentIds)

        if (likesError) {
          console.error('Error fetching likes:', likesError)
        } else {
          const likeCounts = {}
          likesData?.forEach(like => {
            likeCounts[like.comment_id] = (likeCounts[like.comment_id] || 0) + 1
          })

          // Update comment likes
          Object.keys(commentMap).forEach(commentId => {
            commentMap[commentId].likes = likeCounts[commentId] || 0
          })
        }

        // Fetch unread status for current user
        if (user) {
          const { data: readsData, error: readsError } = await supabase
            .from('comment_reads')
            .select('comment_id, is_unread')
            .in('comment_id', commentIds)
            .eq('user_id', user.id)

          if (readsError) {
            console.error('Error fetching read status:', readsError)
          } else {
            console.log('Total read records fetched:', readsData?.length || 0)
            const unreadStatus = {}
            readsData?.forEach((read, index) => {
              console.log(`Read record ${index}:`, 'comment_id:', read.comment_id, 'is_unread:', read.is_unread, 'type of comment_id:', typeof read.comment_id)
              unreadStatus[read.comment_id] = read.is_unread
            })
            console.log('Unread status map keys:', Object.keys(unreadStatus))
            console.log('Unread status map:', unreadStatus)

            // Update unread status
            Object.keys(commentMap).forEach(commentId => {
              const newUnreadStatus = unreadStatus[commentId] || false
              commentMap[commentId].isUnread = newUnreadStatus
              if (newUnreadStatus) {
                console.log('Set comment', commentId, 'isUnread: TRUE')
              }
            })
          }
        }
      }

      // Now add replies to their parent comments (handles nested replies too)
      const addReplyToParent = (childId) => {
        const child = commentMap[childId]
        if (!child || !child.parentId) return

        const parent = commentMap[child.parentId]
        if (parent) {
          if (!parent.replies.includes(child)) {
            parent.replies.push(child)
            console.log('Added reply (id:', childId, ', isUnread:', child.isUnread, ') to parent (id:', child.parentId, ', isUnread:', parent.isUnread, ')')
          }
          // Recursively add parent to its parent (if it exists)
          addReplyToParent(child.parentId)
        } else {
          console.warn('Parent not found for reply:', childId, 'parent_id:', child.parentId)
        }
      }

      // Process all replies
      data.forEach(c => {
        if (c.parent_comment_id) {
          addReplyToParent(c.id)
        }
      })

      // Sort root comments by date (newest first)
      rootComments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

      console.log('Final formatted comments with replies:', rootComments)
      console.log('Total replies across all comments:', rootComments.reduce((sum, c) => sum + c.replies.length, 0))

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
      const { error } = await supabase.from('comments').insert({
        discussion_id: discussionId,
        user_id: user.id,
        content: newComment
      })

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
    if (!replyText.trim() || !user || !discussionId) {
      console.warn('Reply submission blocked - missing:', {
        hasReplyText: !!replyText.trim(),
        hasUser: !!user,
        hasDiscussionId: !!discussionId
      })
      return
    }

    try {
      console.log('Submitting reply with:', {
        discussion_id: discussionId,
        parent_comment_id: parentId,
        user_id: user.id,
        content: replyText
      })

      const { error } = await supabase.from('comments').insert({
        discussion_id: discussionId,
        parent_comment_id: parentId,
        user_id: user.id,
        content: replyText
      })

      if (error) throw error

      console.log('Reply posted successfully, parent_id:', parentId)
      setReplyText('')
      setReplyingTo(null)
      await loadComments(discussionId)
    } catch (error) {
      console.error('Error posting reply:', error)
      alert('Failed to post reply: ' + error.message)
    }
  }

  const handleEditComment = async (commentId) => {
    if (!editText.trim() || !user) return
    try {
      const { error } = await supabase.from('comments').update({ content: editText }).eq('id', commentId).eq('user_id', user.id)
      if (error) throw error
      setEditingCommentId(null)
      setEditText('')
      await loadComments(discussionId)
    } catch (error) {
      console.error('Error editing comment:', error)
      alert('Failed to edit comment: ' + error.message)
    }
  }

  const handleDeleteComment = async (commentId) => {
    if (!user) return
    if (!confirm('Are you sure you want to delete this comment?')) return
    try {
      const { error } = await supabase.from('comments').delete().eq('id', commentId).eq('user_id', user.id)
      if (error) throw error
      await loadComments(discussionId)
    } catch (error) {
      console.error('Error deleting comment:', error)
      alert('Failed to delete comment: ' + error.message)
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
      title: 'Taking a Gap Year',
      fileName: 'taking_gap_year.pdf',
      size: '2.4 MB',
      uploadedBy: 'Prof. Michael Lee',
      uploadedDate: 'Oct 15, 2024'
    },
    {
      id: 2,
      title: 'Social Media Impact on Society',
      fileName: 'social_media_article.pdf',
      size: '1.8 MB',
      uploadedBy: 'Prof. Michael Lee',
      uploadedDate: 'Oct 14, 2024'
    }
  ]

  const toggleLike = async (commentId) => {
    if (!user) return
    try {
      // First check if like already exists
      const { data: existingLike, error: checkError } = await supabase
        .from('comment_likes')
        .select('id')
        .eq('comment_id', commentId)
        .eq('user_id', user.id)
        .limit(1)

      if (checkError) throw checkError

      if (existingLike?.length > 0) {
        // Unlike: delete the existing like
        const { error: deleteError } = await supabase
          .from('comment_likes')
          .delete()
          .eq('comment_id', commentId)
          .eq('user_id', user.id)
        if (deleteError) throw deleteError
      } else {
        // Like: insert new like
        const { error: insertError } = await supabase
          .from('comment_likes')
          .insert({
            comment_id: commentId,
            user_id: user.id
          })
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
      console.log('Toggling unread for comment:', commentId)
      // First check if read status already exists
      const { data: existingRead, error: checkError } = await supabase
        .from('comment_reads')
        .select('id, is_unread')
        .eq('comment_id', commentId)
        .eq('user_id', user.id)
        .limit(1)

      if (checkError && checkError.code !== 'PGRST116') throw checkError

      const newIsUnread = existingRead?.length > 0 ? !existingRead[0].is_unread : true
      console.log('New is_unread value:', newIsUnread)

      // Delete the old record if it exists
      if (existingRead?.length > 0) {
        console.log('Deleting old record')
        const { error: deleteError } = await supabase
          .from('comment_reads')
          .delete()
          .eq('comment_id', commentId)
          .eq('user_id', user.id)
        if (deleteError) throw deleteError
      }

      // Insert the new record
      console.log('Inserting new record for comment:', commentId, 'with is_unread:', newIsUnread)
      const { data: insertData, error: insertError } = await supabase
        .from('comment_reads')
        .insert({
          comment_id: commentId,
          user_id: user.id,
          is_unread: newIsUnread
        })
        .select()
      console.log('Insert result - data:', insertData, 'error:', insertError)
      if (insertError) throw insertError

      console.log('Reloading comments after unread toggle, discussionId:', discussionId)
      await loadComments(discussionId)
    } catch (error) {
      console.error('Error toggling unread:', error)
      alert('Error: ' + error.message)
    }
  }

  return (
    <ModuleLayout moduleNumber={4} moduleName={moduleNames[4]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div dangerouslySetInnerHTML={{ __html: `<div class="breadcrumb">
        <a href="../index.html">Home</a>
        <span class="breadcrumb-sep">›</span>
        <a href="index.html">Module 4</a>
        <span class="breadcrumb-sep">›</span>
        <span>4.3 Reading, Discussion &amp; Collaboration</span>
      </div>

      <div class="page-banner" style="background: linear-gradient(135deg, #093C5D, #3B7597);">
        <h1>4.3 Reading, Discussion &amp; Collaboration</h1>
        <p class="banner-sub">Read academic articles, discuss your ideas with classmates, and collaborate on pair work activities.</p>
      </div>

      <!-- Reading Assignment -->
      <h2 class="section-title">Reading Assignment</h2>
      <p>You will be assigned academic articles to read. These articles will provide evidence and ideas for your argumentative essay. Read the articles carefully and take notes on key ideas, evidence, and perspectives.</p>` }} />

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
        <p>Discuss different perspectives on the topic</p>
        <p>Ask questions and answer your classmates' questions</p>
        <p>Develop ideas for your essay argument</p>
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
                🔐 Please <Link to="/login" style={{ color: '#0056b3' }}>log in</Link> to participate in the discussion.
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
                            👨‍🏫 Teacher
                          </span>
                        )}
                      </p>
                      <p style={{ margin: '0', fontSize: '0.85em', color: '#888' }}>
                        {comment.timestamp}
                      </p>
                    </div>
                  </div>

                  {/* Comment Content */}
                  {editingCommentId === comment.id ? (
                    <div style={{ margin: '12px 0' }}>
                      <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid var(--grey-border)', fontFamily: 'inherit', fontSize: '0.95em', resize: 'vertical', minHeight: '80px', marginBottom: '8px' }}
                      />
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="btn btn-primary" disabled={!editText.trim()} onClick={() => handleEditComment(comment.id)} style={{ padding: '8px 16px', fontSize: '0.9em' }}>Save</button>
                        <button onClick={() => { setEditingCommentId(null); setEditText('') }} style={{ padding: '8px 16px', fontSize: '0.9em', background: '#f0f0f0', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <p style={{ margin: '12px 0', color: '#333', lineHeight: '1.6' }}>
                      {comment.content}
                    </p>
                  )}

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
                      🤍 {comment.likes}
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
                      📍 {comment.isUnread ? 'Marked Unread' : 'Mark Unread'}
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
                        💬 {replyingTo === comment.id ? 'Cancel' : 'Reply'}
                      </button>
                    )}

                    {user && comment.userId === user.id && (
                      <>
                        <button
                          onClick={() => { setEditingCommentId(comment.id); setEditText(comment.content) }}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2980b9', fontSize: '0.9em' }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteComment(comment.id)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e74c3c', fontSize: '0.9em' }}
                        >
                          Delete
                        </button>
                      </>
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
                        editingCommentId={editingCommentId}
                        setEditingCommentId={setEditingCommentId}
                        editText={editText}
                        setEditText={setEditText}
                        handleEditComment={handleEditComment}
                        handleDeleteComment={handleDeleteComment}
                      />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: `<!-- Navigation -->` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module4/lesson-2"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module4/lesson-4"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
