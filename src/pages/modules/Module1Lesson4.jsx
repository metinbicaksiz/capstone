import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import ModuleLayout from '../../components/ModuleLayout'
import { supabase } from '../../lib/supabase'
import './ModulesPage.css'
import './DiscussionForum.css'

const QUESTIONS = [
  {
    id: 0,
    question: "What are the TWO main points stated in the thesis statement of the essay?",
    options: [
      "The cost of travel and its environmental impact",
      "Personal benefits for the traveller and benefits for a country's economy",
      "Domestic travel and international travel",
      "Travel safety and travel enjoyment",
    ],
    answer: 1,
    feedback: "The thesis states: 'Obviously, travelling has benefits for the people who travel and for the country's economy.' These two points — personal benefits and economic benefits — become the topics of each body paragraph.",
  },
  {
    id: 1,
    question: "What is the topic sentence of Body Paragraph 1, and what point does it introduce?",
    options: [
      "Another gain of travelling is that it benefits a country's economy — it introduces economic benefits.",
      "Travelling requires many workers in tourism agencies — it introduces job creation.",
      "The first gain of travelling is personal benefits — it introduces the personal advantages of travel.",
      "In conclusion, travel is useful for both people and businesses — it introduces the conclusion.",
    ],
    answer: 2,
    feedback: "The topic sentence is: 'The first gain of travelling is personal benefits.' This directly picks up 'benefits for the people who travel' from the thesis.",
  },
  {
    id: 2,
    question: "What specific example does the writer use in Body Paragraph 2 to illustrate how travel builds professional networks?",
    options: [
      "A traveller who learns to cook different cuisines",
      "A student who studies abroad for a semester",
      "A tourist who visits historical monuments",
      "A businessman who meets someone in the same industry while travelling on a train",
    ],
    answer: 3,
    feedback: "The writer uses 'a businessman who travels on a train can meet somebody who does the same business as they do and they can network' as a concrete example, introduced by the signal phrase 'For example,'.",
  },
  {
    id: 3,
    question: "According to Body Paragraph 1, how does travel affect a person's skills and perspective?",
    options: [
      "It has no effect on skills, only on relaxation.",
      "It broadens perspectives and improves social/organizational skills, since travellers must plan carefully and communicate with new people.",
      "It primarily improves language skills through immersion.",
      "It reduces a person's ability to adapt to new situations.",
    ],
    answer: 1,
    feedback: "Body Paragraph 1 explains that travel 'broadens the traveller's horizons' (more tolerant, wiser perspectives) and 'teaches people many skills,' specifically social and organizational skills, since travellers must plan their trips carefully and communicate with many people.",
  },
  {
    id: 4,
    question: "What does the concluding paragraph do, and how does it relate to the thesis?",
    options: [
      "It introduces a brand-new argument not mentioned earlier — it contradicts the thesis.",
      "It paraphrases the thesis statement and adds the writer's final opinion that travel is important in a globalized world.",
      "It only summarizes Body Paragraph 2, ignoring Body Paragraph 1.",
      "It restates the opening quotation from the introduction word-for-word.",
    ],
    answer: 1,
    feedback: "The conclusion paraphrases the thesis ('Domestic and international travel will give rise to people who are more equipped and qualified and also economies can improve and become stronger') and adds a final comment: 'I think, in addition to being fun, travel is important especially in the globalized world.'",
  },
]

// lesson_id used to identify this lesson's discussion in the database.
// Run: INSERT INTO discussions (lesson_id, title) VALUES (14, 'Module 1 Lesson 4 Discussion');
const M1L4_LESSON_ID = 14

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

export default function Module1Lesson4() {
  const { user } = useAuth()
  const [analysisOpen, setAnalysisOpen] = useState(false)
  const [answers, setAnswers] = useState({})
  const [checked, setChecked] = useState(false)

  const [discussionOpen, setDiscussionOpen] = useState(false)
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
      const { data, error } = await supabase.from('discussions').select('id').eq('lesson_id', M1L4_LESSON_ID).limit(1)
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

  const select = (qId, optIndex) => {
    if (checked) return
    setAnswers({ ...answers, [qId]: optIndex })
  }

  const allAnswered = QUESTIONS.every(q => answers[q.id] !== undefined)
  const score = checked ? QUESTIONS.filter(q => answers[q.id] === q.answer).length : 0

  const scoreBg = (c, t) => c === t ? '#e8f5e9' : c >= t / 2 ? '#fff8e1' : '#fce4ec'
  const scoreBorder = (c, t) => c === t ? '#a5d6a7' : c >= t / 2 ? '#ffe082' : '#ef9a9a'

  const moduleNames = {
    1: 'Module 1 — From Paragraph to Essay',
    2: 'Module 2 — Advantages & Disadvantages Essays',
    3: 'Module 3 — Cause & Effect Essays',
    4: 'Module 4 — Argumentative Essays'
  }

  return (
    <ModuleLayout moduleNumber={1} moduleName={moduleNames[1]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div dangerouslySetInnerHTML={{ __html: `
      <div class="page-banner">
        <h1>1.4 Reading, Discussion &amp; Collaboration</h1>
        <p class="banner-sub">Read and analyze sample academic texts, complete a guided analysis worksheet, and participate in the Module 1 online discussion forum.</p>
      </div>

      <div class="info-box info-box-orange">
        <h4>What to Do in This Section</h4>
        <ol style="margin:0; padding-left:18px; font-size:0.92em;">
          <li>Read the annotated sample paragraph and study the colour-coded structure</li>
          <li>Read the annotated sample four-paragraph essay and identify all structural components</li>
          <li>Answer the 5 comprehension questions below the essay</li>
          <li>Post in the Module 1 Discussion Forum and reply to at least two classmates</li>
        </ol>
      </div>

      <!-- SAMPLE PARAGRAPH -->
      <h2 class="section-title" id="sample-para">Sample Academic Paragraph (Annotated)</h2>
      <p>Read this academic paragraph carefully. The different parts are colour-coded to help you identify the structure. Study the annotation notes below the paragraph.</p>

      <div class="annotated-essay">
        <div class="ae-header">
          <span>Sample Paragraph — Topic: The Benefits of Urban Green Spaces</span>
        </div>
        <div class="ae-body">
          <p><span class="hi-ts"><strong>Urban green spaces, such as parks and gardens, play a vital role in improving the physical and mental health of city residents.</strong></span> <span class="hi-sup">First, access to green spaces encourages people to engage in physical activities, including walking, jogging, and cycling, which contribute to improved cardiovascular health and reduced rates of obesity.</span> <span class="hi-sup">In addition, numerous studies have demonstrated that spending time in natural environments significantly reduces cortisol levels — the hormone associated with stress — thereby promoting mental well-being and reducing anxiety.</span> <span class="hi-ex">For example, a study conducted in Amsterdam found that residents who lived within 300 metres of a park reported significantly higher levels of life satisfaction and lower rates of depression compared to those without access to green spaces.</span> <span class="hi-cs">It is therefore clear that urban green spaces are not simply aesthetic features of a city, but rather essential contributors to the overall health and quality of life of urban populations.</span></p>
        </div>
        <div class="ae-legend">
          <span><span class="dot" style="background:#fce4ec;"></span> Topic Sentence</span>
          <span><span class="dot" style="background:#e3f2fd;"></span> Supporting Ideas</span>
          <span><span class="dot" style="background:#e8f5e9;"></span> Example</span>
          <span><span class="dot" style="background:#fff3e0;"></span> Concluding Sentence</span>
        </div>
      </div>
      <br>

      <div class="two-col" style="margin-bottom:20px;">
        <div class="info-box info-box-blue">
          <h4>What makes this a strong paragraph?</h4>
          <ul style="font-size:0.88em; margin:0;">
            <li>The topic sentence is specific — it states <em>both</em> the topic (urban green spaces) and the controlling idea (vital role in health)</li>
            <li>Supporting ideas are clearly connected to the topic sentence</li>
            <li>A specific, credible example is provided (Amsterdam study)</li>
            <li>Academic vocabulary is used throughout (<em>cardiovascular, cortisol, aesthetic</em>)</li>
            <li>Formal language — no contractions, no first person</li>
            <li>The concluding sentence restates the main idea without copying</li>
          </ul>
        </div>
        <div class="info-box info-box-teal">
          <h4>Study Questions — Think About This</h4>
          <ul style="font-size:0.88em; margin:0;">
            <li>What is the topic of this paragraph? What is the controlling idea?</li>
            <li>How many supporting ideas are there? How are they connected?</li>
            <li>Which discourse markers (linking words) does the writer use?</li>
            <li>Which words from the Academic Word List can you identify?</li>
            <li>How does the concluding sentence differ from the topic sentence?</li>
          </ul>
        </div>
      </div>

      <!-- SAMPLE ESSAY -->
      <h2 class="section-title" id="sample-essay">Sample Four-Paragraph Essay (Annotated)</h2>
      <p>Read this full four-paragraph academic essay. All structural components are colour-coded. As you read, identify each part and notice how the paragraphs connect to each other.</p>

      <div class="annotated-essay">
        <div class="ae-header">
          <span>Sample Essay — Topic: Benefits of Travel</span>
          <span style="font-size:0.8em; opacity:0.8;">~480 words</span>
        </div>
        <div class="ae-body">
          <p><strong>Introduction</strong><br>
          One of the greatest philosophers, Augustine, said, "The world is a book and those who do not travel read only one page." It is a well-known fact that experiences of travel can provide a person a lot of benefits. Not only the traveller, but also an entire country benefits from travel or tourism activities. <span class="hi-thesis"><strong>Obviously, travelling has benefits for the people who travel and for the country's economy.</strong></span></p>

          <p><strong>Body Paragraph 1</strong><br>
          <span class="hi-ts"><strong>The first gain of travelling is personal benefits.</strong></span> <span class="hi-sup">To begin with, travelling broadens the traveller's horizons. Seeing different places either in their own country or in another country will give travellers a chance to see different lifestyles and different kinds of people. They can realize that there are alternative ways of doing everyday activities such as housing, cooking and practicing religion. As a result, they become more tolerant and wiser with different perspectives in their own life and work.</span> <span class="hi-sup">Furthermore, travelling teaches people many skills. Maybe the skills that are most dramatically affected are social and organizational skills. Travellers have to plan their travels carefully and follow these plans, which will make them better organizers. Also, travellers have to talk to, or even stay with many other people during their time away from home. This will also help them become better communicators.</span> <span class="hi-cs">In brief, if people want to improve themselves, travelling is definitely the best option for them.</span></p>

          <p><strong>Body Paragraph 2</strong><br>
          <span class="hi-ts"><strong>Another gain of travelling is that it benefits a country's economy.</strong></span> <span class="hi-sup">To start with, travelling creates a lot of opportunities. Travelling requires many workers in tourism agencies, transportation, accommodation, catering, and a lot of other job areas that depend on visitors. When people travel, they have to spend money to meet at least their basic needs. As a result, this will create more job opportunities in the places which are attractive for tourists.</span> <span class="hi-sup">Additionally, people who travel will get new ideas for business wherever they go because they see new businesses and communicate with people who are in different industries. This will give people a chance to build a network for their work.</span> <span class="hi-ex">For example, a businessman who travels on a train can meet somebody who does the same business as they do and they can network.</span> <span class="hi-cs">As a result, travelling can improve a country's economy.</span></p>

          <p><strong>Conclusion</strong><br>
          In conclusion, travel is useful for both people and businesses. Domestic and international travel will give rise to people who are more equipped and qualified and also economies can improve and become stronger. I think, in addition to being fun, travel is important especially in the globalized world.</p>
        </div>
        <div class="ae-legend">
          <span><span class="dot" style="background:#f3e5f5;"></span> Thesis Statement</span>
          <span><span class="dot" style="background:#fce4ec;"></span> Topic Sentence</span>
          <span><span class="dot" style="background:#e3f2fd;"></span> Supporting Ideas</span>
          <span><span class="dot" style="background:#e8f5e9;"></span> Example</span>
          <span><span class="dot" style="background:#fff3e0;"></span> Concluding Sentence</span>
        </div>
      </div>

` }} />

          <br></br>

        {/* ── Comprehension Check Accordion ── */}
        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${analysisOpen ? 'active' : ''}`}
              onClick={() => setAnalysisOpen(!analysisOpen)}
            >
              <span>Paragraph Analysis — Comprehension Check</span>
              <span className="accordion-icon">▼</span>
            </button>
            {analysisOpen && (
              <div className="accordion-content active">
                <p style={{ marginBottom: '16px', fontSize: '0.93em', color: '#444' }}>Answer the 5 questions below to check your understanding of the sample essay. Read the essay again before you start.</p>
        <div style={{ marginBottom: '24px' }}>
          {QUESTIONS.map((q, qi) => {
            const selected = answers[q.id]
            const isCorrect = checked && selected === q.answer
            const isWrong = checked && selected !== undefined && selected !== q.answer
            return (
              <div key={q.id} style={{ marginBottom: '16px', padding: '18px 20px', borderRadius: '8px', border: `1.5px solid ${isCorrect ? '#a5d6a7' : isWrong ? '#ef9a9a' : '#e0e0e0'}`, background: isCorrect ? '#f1f8f2' : isWrong ? '#fff5f5' : '#fafafa' }}>
                <p style={{ margin: '0 0 12px 0', fontWeight: '600', fontSize: '0.93em', color: '#1a1a1a' }}>
                  <span style={{ color: '#1a4a8a', marginRight: '6px' }}>Q{qi + 1}.</span>{q.question}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {q.options.map((opt, oi) => {
                    const isSelected = selected === oi
                    const isAnswerKey = checked && oi === q.answer
                    let bg = '#fff'
                    let border = '1.5px solid #d0d0d0'
                    let color = '#444'
                    if (isSelected && !checked) { bg = '#e8f0fc'; border = '1.5px solid #1a4a8a'; color = '#1a4a8a' }
                    if (isAnswerKey) { bg = '#e8f5e9'; border = '1.5px solid #4caf50'; color = '#1b5e20' }
                    if (checked && isSelected && !isAnswerKey) { bg = '#fce4ec'; border = '1.5px solid #e57373'; color = '#b71c1c' }
                    return (
                      <div
                        key={oi}
                        onClick={() => select(q.id, oi)}
                        style={{ padding: '9px 14px', borderRadius: '6px', border, background: bg, color, fontSize: '0.88em', cursor: checked ? 'default' : 'pointer', lineHeight: '1.5', display: 'flex', gap: '10px', alignItems: 'flex-start' }}
                      >
                        <span style={{ fontWeight: '700', flexShrink: 0, minWidth: '18px' }}>{String.fromCharCode(65 + oi)}.</span>
                        <span>{opt}</span>
                      </div>
                    )
                  })}
                </div>
                {checked && (
                  <div style={{ marginTop: '10px', padding: '10px 14px', borderRadius: '6px', background: '#f0f4ff', border: '1px solid #c5d0f0', fontSize: '0.84em', color: '#333', lineHeight: '1.6' }}>
                    <strong style={{ color: '#1a4a8a' }}>Explanation: </strong>{q.feedback}
                  </div>
                )}
              </div>
            )
          })}

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              className="check-btn"
              disabled={!allAnswered || checked}
              onClick={() => setChecked(true)}
              style={{ opacity: !allAnswered || checked ? 0.5 : 1, cursor: !allAnswered || checked ? 'default' : 'pointer' }}
            >
              {allAnswered ? 'Check My Answers' : `Answer all questions (${Object.keys(answers).length}/5)`}
            </button>
            {checked && (
              <button className="retry-btn" onClick={() => { setAnswers({}); setChecked(false) }}>Try Again</button>
            )}
          </div>

          {checked && (
            <div style={{ marginTop: '14px', padding: '14px 18px', borderRadius: '8px', background: scoreBg(score, 5), border: `1px solid ${scoreBorder(score, 5)}`, fontSize: '0.93em' }}>
              <strong>Score: {score}/5</strong> — {score === 5 ? 'Excellent! You have a strong understanding of the essay structure.' : score >= 3 ? 'Good work. Review the explanations for the questions you missed.' : 'Re-read the essay carefully and try again. Pay attention to the colour-coded sections.'}
            </div>
          )}
        </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Discussion Accordion ── */}
        <div className="accordion" style={{ marginTop: '16px' }}>
          <div className="accordion-item">
            <button
              className={`accordion-header ${discussionOpen ? 'active' : ''}`}
              onClick={() => setDiscussionOpen(!discussionOpen)}
            >
              <span>Discussion</span>
              <span className="accordion-icon">▼</span>
            </button>
            {discussionOpen && (
              <div className="accordion-content active">
                <div style={{ marginBottom: '20px', padding: '16px 18px', background: 'var(--blue-bg)', border: '1px solid var(--blue-border)', borderRadius: '8px' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: 'var(--blue-dark)', fontSize: '0.97em' }}>Discussion Prompt</h4>
                  <p style={{ margin: '0', fontSize: '0.9em', lineHeight: '1.7', color: '#333' }}>
                    Write approximately <strong>150 words</strong> in response to the following prompt:
                  </p>
                  <p style={{ margin: '12px 0 0 0', fontSize: '0.9em', lineHeight: '1.7', color: '#333' }}>
                    Having read the sample essay on <em>Benefits of Travel</em>, what would you change or improve in the essay? Consider the structure, the examples used, the language, or the arguments made. In addition, suggest <strong>at least one additional idea</strong> (a further personal or economic benefit of travel) that the writer could have included to make the essay stronger. Explain your reasoning clearly and use specific references to the essay where possible.
                  </p>
                </div>

                <div className="discussion-forum">
                  {user ? (
                    <div style={{ background: 'var(--blue-bg)', border: '1px solid var(--blue-border)', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
                      <h4 style={{ margin: '0 0 12px 0', color: 'var(--blue-dark)' }}>Add Your Response</h4>
                      <form onSubmit={handleSubmitComment}>
                        <textarea
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          placeholder="Write your response here (~150 words)..."
                          style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid var(--grey-border)', fontFamily: 'inherit', fontSize: '0.95em', resize: 'vertical', minHeight: '120px', marginBottom: '12px' }}
                        />
                        <button type="submit" className="btn btn-primary" disabled={!newComment.trim()}>Post Response</button>
                      </form>
                    </div>
                  ) : (
                    <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
                      <p style={{ margin: '0', color: '#856404' }}>
                        Please <Link to="/login" style={{ color: '#0056b3' }}>log in</Link> to participate in the discussion.
                      </p>
                    </div>
                  )}

                  <div className="comments-section">
                    <h4 style={{ marginBottom: '16px', color: 'var(--blue-dark)' }}>
                      {loading ? 'Loading...' : `${comments.length} ${comments.length === 1 ? 'Response' : 'Responses'}`}
                    </h4>

                    {loading ? (
                      <p style={{ color: '#888', textAlign: 'center', padding: '20px' }}>Loading discussion...</p>
                    ) : comments.length === 0 ? (
                      <p style={{ color: '#888', textAlign: 'center', padding: '20px' }}>No responses yet. Be the first to share your thoughts!</p>
                    ) : (
                      comments.map((comment) => (
                        <div key={comment.id} style={{ borderLeft: '3px solid var(--blue-mid)', paddingLeft: '16px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--grey-border)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                            <div>
                              <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: 'var(--blue-dark)' }}>
                                {comment.author}
                                {comment.role === 'teacher' && (
                                  <span style={{ marginLeft: '8px', background: '#d4edda', color: '#155724', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8em', fontWeight: '500' }}>Teacher</span>
                                )}
                              </p>
                              <p style={{ margin: '0', fontSize: '0.85em', color: '#888' }}>{comment.timestamp}</p>
                            </div>
                          </div>

                          <p style={{ margin: '12px 0', color: '#333', lineHeight: '1.6' }}>{comment.content}</p>

                          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '12px' }}>
                            <button onClick={() => user && toggleLike(comment.id)} style={{ background: 'none', border: 'none', cursor: user ? 'pointer' : 'not-allowed', color: '#888', fontSize: '0.9em', opacity: user ? 1 : 0.6 }}>
                              Like {comment.likes}
                            </button>
                            <button onClick={() => user && toggleUnread(comment.id)} style={{ background: 'none', border: 'none', cursor: user ? 'pointer' : 'not-allowed', color: comment.isUnread ? '#e74c3c' : '#888', fontSize: '0.9em', opacity: user ? 1 : 0.6 }}>
                              {comment.isUnread ? 'Marked Unread' : 'Mark Unread'}
                            </button>
                            {user && (
                              <button onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: replyingTo === comment.id ? '#e74c3c' : '#2980b9', fontSize: '0.9em' }}>
                                {replyingTo === comment.id ? 'Cancel' : 'Reply'}
                              </button>
                            )}
                          </div>

                          {user && replyingTo === comment.id && (
                            <form onSubmit={(e) => handleSubmitReply(e, comment.id)} style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--grey-border)' }}>
                              <textarea
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                placeholder="Write your reply..."
                                style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid var(--grey-border)', fontFamily: 'inherit', fontSize: '0.95em', resize: 'vertical', minHeight: '80px', marginBottom: '8px' }}
                              />
                              <div style={{ display: 'flex', gap: '8px' }}>
                                <button type="submit" className="btn btn-primary" disabled={!replyText.trim()} style={{ padding: '8px 16px', fontSize: '0.9em' }}>Post Reply</button>
                                <button type="button" onClick={() => { setReplyingTo(null); setReplyText('') }} style={{ padding: '8px 16px', fontSize: '0.9em', background: '#f0f0f0', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
                              </div>
                            </form>
                          )}

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
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module1/lesson-3"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module1/lesson-5"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
