import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

const MODEL_ANSWERS = {
  thesis: "The two main areas in which computers have brought about a profound change in our lives are in the economic field and in the field of communications.",
  bp1Topic: "The computer has led to immense changes in economic and business life.",
  bp1Si1: "First, businesses now have to be computerized or they risk failure.",
  bp1Si2: "Second, computing is an economic dynamo.",
  bp2Topic: "It is not just in business that computers have affected us so profoundly; communication has been revolutionized totally.",
  bp2Si1: "Firstly, whereas before, people wrote letters, which would often take weeks to reach their destinations, or speak on the phone, which was terribly expensive, now they e-mail.",
  bp2Si2: "Secondly, many people use computers to communicate with people all around the world using chat rooms and chat programs, this was impossible before the computer became widespread.",
  conclusion: "In conclusion, computers have had a profound effect on our lives in many ways and it is in business and communication that they have had the greatest influence.",
  opinion: "In the future, if the computer continues evolving at such speed, our business practices and methods of communication will undergo even more radical changes.",
}

export default function Module1Lesson5() {
  const [outline, setOutline] = useState({
    thesis: '',
    bp1Topic: '',
    bp1Si1: '',
    bp1Si2: '',
    bp2Topic: '',
    bp2Si1: '',
    bp2Si2: '',
    conclusion: '',
    opinion: '',
  })
  const [checked, setChecked] = useState(false)

  const set = (field, value) => {
    if (checked) return
    setOutline(prev => ({ ...prev, [field]: value }))
  }
  const allFilled = Object.values(outline).every(v => v.trim() !== '')

  const normalize = (s) => s.trim().toLowerCase().replace(/\s+/g, ' ')
  const isCorrect = (field) => normalize(outline[field]) === normalize(MODEL_ANSWERS[field])
  const score = checked ? Object.keys(MODEL_ANSWERS).filter(f => isCorrect(f)).length : 0
  const total = Object.keys(MODEL_ANSWERS).length

  const getInputStyle = (field) => ({
    width: '100%',
    padding: '9px 12px',
    borderRadius: '5px',
    border: checked
      ? isCorrect(field) ? '1.5px solid #4caf50' : '1.5px solid #e57373'
      : '1.5px solid #d0d0d0',
    fontFamily: 'inherit',
    fontSize: '0.88em',
    lineHeight: '1.5',
    resize: 'vertical',
    minHeight: '48px',
    background: checked
      ? isCorrect(field) ? '#f1f8f2' : '#fff5f5'
      : '#fff',
    color: '#222',
    marginTop: '6px',
    boxSizing: 'border-box',
    cursor: checked ? 'default' : 'text',
  })

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
      <div class="page-banner" style="background: linear-gradient(135deg, #1e8449, #27ae60);">
        <h1>1.5 — Writing Practice &amp; Submission</h1>
        <p class="banner-sub">Read the essay below carefully, then complete the essay outline by identifying each structural component.</p>
      </div>

      <div class="info-box info-box-orange">
        <h4>Essay Prompt</h4>
        <p style="margin:0; font-size:0.95em;"><strong>What are the effects of computers on people's lives?</strong></p>
      </div>

      <div class="info-box info-box-blue">
        <h4>Task</h4>
        <p style="margin:0; font-size:0.92em;">Read the following essay carefully. Then scroll down and complete the essay outline by identifying the thesis statement, topic sentences, supporting ideas, concluding sentence, and the writer's opinion.</p>
      </div>

      <h2 class="section-title">Reading: The Effects of Computers on Our Lives</h2>

      <div class="annotated-essay">
        <div class="ae-body" style="font-size:0.93em; line-height:1.8;">
          <p><strong>Introduction</strong><br>
          What effects has the computer had on our lives? The twenty-first century is already turning out to be the century of the computer. The computer revolution that started after the Second World War is now developing exponentially and computers are beginning to influence and take over nearly every aspect of our lives. Computers are clearly changing and affecting society in many ways. <span class="hi-thesis"><strong>The two main areas in which computers have brought about a profound change in our lives are in the economic field and in the field of communications.</strong></span></p>

          <p><strong>Body Paragraph 1</strong><br>
          <span class="hi-ts"><strong>The computer has led to immense changes in economic and business life.</strong></span> First, businesses now have to be computerized or they risk failure. Every big corporation bases its operations on computing, regardless of which sector they are in. <span class="hi-ex">For example, Coca-Cola, the BBC and Levi's market and sell different products and services, yet they all share one basic property — without computers their operations would collapse.</span> Second, computing is an economic dynamo. Japan, China, India and many other countries have large IT sectors which drive their economies upwards. Furthermore, the developed world is moving from an industrial-based economy to a computer and IT-based one.</p>

          <p><strong>Body Paragraph 2</strong><br>
          <span class="hi-ts"><strong>It is not just in business that computers have affected us so profoundly; communication has been revolutionized totally.</strong></span> Firstly, whereas before, people wrote letters, which would often take weeks to reach their destinations, or speak on the phone, which was terribly expensive, now they e-mail. <span class="hi-ex">For instance, instead of waiting weeks for a letter now, we can read it instantly, seconds after it has been written.</span> Secondly, many people use computers to communicate with people all around the world using chat rooms and chat programs — this was impossible before the computer became widespread. As a result, now people who live thousands of kilometres away from each other can communicate as much as they want and whenever they want using e-mail and/or chat rooms.</p>

          <p><strong>Conclusion</strong><br>
          <span class="hi-cs"><strong>In conclusion, computers have had a profound effect on our lives in many ways and it is in business and communication that they have had the greatest influence.</strong></span> In the future, if the computer continues evolving at such speed, our business practices and methods of communication will undergo even more radical changes.</p>
        </div>
        <div class="ae-legend">
          <span><span class="dot" style="background:#f3e5f5;"></span> Thesis Statement</span>
          <span><span class="dot" style="background:#fce4ec;"></span> Topic Sentence</span>
          <span><span class="dot" style="background:#e8f5e9;"></span> Example</span>
          <span><span class="dot" style="background:#fff3e0;"></span> Concluding Sentence</span>
        </div>
      </div>

      <h2 class="section-title" style="margin-top:32px;">Essay Outline</h2>
      <p style="font-size:0.92em; margin-bottom:20px;">Complete the outline below by finding and copying the exact sentences from the essay above.</p>
        ` }} />

        {/* ── Interactive Outline ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>

          {/* Introduction */}
          <div style={{ background: '#fafafa', border: '1.5px solid #e0e0e0', borderRadius: '8px', padding: '20px 22px' }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '0.97em', color: 'var(--blue-dark)' }}>Introduction</h3>
            <div>
              <label style={{ fontSize: '0.87em', fontWeight: '600', color: '#333' }}>Thesis Statement:</label>
              <textarea value={outline.thesis} onChange={(e) => set('thesis', e.target.value)} placeholder="Find and copy the thesis statement from the introduction..." style={getInputStyle('thesis')} readOnly={checked} />
              {checked && !isCorrect('thesis') && <div style={{ marginTop: '8px', padding: '10px 13px', background: '#e8f5e9', border: '1px solid #a5d6a7', borderRadius: '5px', fontSize: '0.83em', color: '#1b5e20', lineHeight: '1.6' }}><strong>Correct answer: </strong>{MODEL_ANSWERS.thesis}</div>}
            </div>
          </div>

          {/* Body Paragraph 1 */}
          <div style={{ background: '#fafafa', border: '1.5px solid #e0e0e0', borderRadius: '8px', padding: '20px 22px' }}>
            <h3 style={{ margin: '0 0 14px 0', fontSize: '0.97em', color: 'var(--blue-dark)' }}>Body Paragraph 1</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.87em', fontWeight: '600', color: '#333' }}>Topic Sentence:</label>
                <textarea value={outline.bp1Topic} onChange={(e) => set('bp1Topic', e.target.value)} placeholder="Find and copy the topic sentence of Body Paragraph 1..." style={getInputStyle('bp1Topic')} readOnly={checked} />
                {checked && !isCorrect('bp1Topic') && <div style={{ marginTop: '8px', padding: '10px 13px', background: '#e8f5e9', border: '1px solid #a5d6a7', borderRadius: '5px', fontSize: '0.83em', color: '#1b5e20', lineHeight: '1.6' }}><strong>Correct answer: </strong>{MODEL_ANSWERS.bp1Topic}</div>}
              </div>
              <div>
                <label style={{ fontSize: '0.87em', fontWeight: '600', color: '#333' }}>Supporting Idea 1:</label>
                <textarea value={outline.bp1Si1} onChange={(e) => set('bp1Si1', e.target.value)} placeholder="Find and copy the sentence that introduces the first supporting idea..." style={getInputStyle('bp1Si1')} readOnly={checked} />
                {checked && !isCorrect('bp1Si1') && <div style={{ marginTop: '8px', padding: '10px 13px', background: '#e8f5e9', border: '1px solid #a5d6a7', borderRadius: '5px', fontSize: '0.83em', color: '#1b5e20', lineHeight: '1.6' }}><strong>Correct answer: </strong>{MODEL_ANSWERS.bp1Si1}</div>}
              </div>
              <div>
                <label style={{ fontSize: '0.87em', fontWeight: '600', color: '#333' }}>Supporting Idea 2:</label>
                <textarea value={outline.bp1Si2} onChange={(e) => set('bp1Si2', e.target.value)} placeholder="Find and copy the sentence that introduces the second supporting idea..." style={getInputStyle('bp1Si2')} readOnly={checked} />
                {checked && !isCorrect('bp1Si2') && <div style={{ marginTop: '8px', padding: '10px 13px', background: '#e8f5e9', border: '1px solid #a5d6a7', borderRadius: '5px', fontSize: '0.83em', color: '#1b5e20', lineHeight: '1.6' }}><strong>Correct answer: </strong>{MODEL_ANSWERS.bp1Si2}</div>}
              </div>
            </div>
          </div>

          {/* Body Paragraph 2 */}
          <div style={{ background: '#fafafa', border: '1.5px solid #e0e0e0', borderRadius: '8px', padding: '20px 22px' }}>
            <h3 style={{ margin: '0 0 14px 0', fontSize: '0.97em', color: 'var(--blue-dark)' }}>Body Paragraph 2</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.87em', fontWeight: '600', color: '#333' }}>Topic Sentence:</label>
                <textarea value={outline.bp2Topic} onChange={(e) => set('bp2Topic', e.target.value)} placeholder="Find and copy the topic sentence of Body Paragraph 2..." style={getInputStyle('bp2Topic')} readOnly={checked} />
                {checked && !isCorrect('bp2Topic') && <div style={{ marginTop: '8px', padding: '10px 13px', background: '#e8f5e9', border: '1px solid #a5d6a7', borderRadius: '5px', fontSize: '0.83em', color: '#1b5e20', lineHeight: '1.6' }}><strong>Correct answer: </strong>{MODEL_ANSWERS.bp2Topic}</div>}
              </div>
              <div>
                <label style={{ fontSize: '0.87em', fontWeight: '600', color: '#333' }}>Supporting Idea 1:</label>
                <textarea value={outline.bp2Si1} onChange={(e) => set('bp2Si1', e.target.value)} placeholder="Find and copy the sentence that introduces the first supporting idea..." style={getInputStyle('bp2Si1')} readOnly={checked} />
                {checked && !isCorrect('bp2Si1') && <div style={{ marginTop: '8px', padding: '10px 13px', background: '#e8f5e9', border: '1px solid #a5d6a7', borderRadius: '5px', fontSize: '0.83em', color: '#1b5e20', lineHeight: '1.6' }}><strong>Correct answer: </strong>{MODEL_ANSWERS.bp2Si1}</div>}
              </div>
              <div>
                <label style={{ fontSize: '0.87em', fontWeight: '600', color: '#333' }}>Supporting Idea 2:</label>
                <textarea value={outline.bp2Si2} onChange={(e) => set('bp2Si2', e.target.value)} placeholder="Find and copy the sentence that introduces the second supporting idea..." style={getInputStyle('bp2Si2')} readOnly={checked} />
                {checked && !isCorrect('bp2Si2') && <div style={{ marginTop: '8px', padding: '10px 13px', background: '#e8f5e9', border: '1px solid #a5d6a7', borderRadius: '5px', fontSize: '0.83em', color: '#1b5e20', lineHeight: '1.6' }}><strong>Correct answer: </strong>{MODEL_ANSWERS.bp2Si2}</div>}
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div style={{ background: '#fafafa', border: '1.5px solid #e0e0e0', borderRadius: '8px', padding: '20px 22px' }}>
            <h3 style={{ margin: '0 0 14px 0', fontSize: '0.97em', color: 'var(--blue-dark)' }}>Conclusion</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.87em', fontWeight: '600', color: '#333' }}>Concluding Sentence:</label>
                <textarea value={outline.conclusion} onChange={(e) => set('conclusion', e.target.value)} placeholder="Find and copy the concluding sentence of the essay..." style={getInputStyle('conclusion')} readOnly={checked} />
                {checked && !isCorrect('conclusion') && <div style={{ marginTop: '8px', padding: '10px 13px', background: '#e8f5e9', border: '1px solid #a5d6a7', borderRadius: '5px', fontSize: '0.83em', color: '#1b5e20', lineHeight: '1.6' }}><strong>Correct answer: </strong>{MODEL_ANSWERS.conclusion}</div>}
              </div>
              <div>
                <label style={{ fontSize: '0.87em', fontWeight: '600', color: '#333' }}>Writer's Opinion / Future Prediction:</label>
                <textarea value={outline.opinion} onChange={(e) => set('opinion', e.target.value)} placeholder="Find and copy the sentence with the writer's prediction about the future..." style={getInputStyle('opinion')} readOnly={checked} />
                {checked && !isCorrect('opinion') && <div style={{ marginTop: '8px', padding: '10px 13px', background: '#e8f5e9', border: '1px solid #a5d6a7', borderRadius: '5px', fontSize: '0.83em', color: '#1b5e20', lineHeight: '1.6' }}><strong>Correct answer: </strong>{MODEL_ANSWERS.opinion}</div>}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <button
            onClick={() => setChecked(true)}
            disabled={!allFilled || checked}
            className="check-btn"
            style={{ opacity: !allFilled || checked ? 0.5 : 1, cursor: !allFilled || checked ? 'default' : 'pointer' }}
          >
            {allFilled ? 'Check Answers' : `Complete all fields (${Object.values(outline).filter(v => v.trim()).length}/9)`}
          </button>
          {checked && (
            <button
              className="retry-btn"
              onClick={() => {
                setOutline({ thesis: '', bp1Topic: '', bp1Si1: '', bp1Si2: '', bp2Topic: '', bp2Si1: '', bp2Si2: '', conclusion: '', opinion: '' })
                setChecked(false)
              }}
            >
              Try Again
            </button>
          )}
        </div>

        {checked && (
          <div style={{ marginBottom: '28px', padding: '14px 18px', borderRadius: '8px', background: score === total ? '#e8f5e9' : score >= total / 2 ? '#fff8e1' : '#fce4ec', border: `1px solid ${score === total ? '#a5d6a7' : score >= total / 2 ? '#ffe082' : '#ef9a9a'}`, fontSize: '0.93em' }}>
            <strong>Score: {score}/{total}</strong> — {score === total ? 'Perfect! You found all the correct sentences.' : score >= total / 2 ? 'Good effort. Review the highlighted fields and compare your answers.' : 'Keep trying. Re-read the essay carefully and look for the exact sentences.'}
          </div>
        )}

        <div style={{ display: 'flex', gap: '12px', marginTop: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module1/lesson-4"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module2/lesson-1"} className="btn btn-primary">Next Module →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
