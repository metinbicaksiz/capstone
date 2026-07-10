import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

// ── Activity data ──────────────────────────────────────────────

const A1_SENTENCES = [
  { id: 0, text: "Learning English provides students with a wide range of important academic and professional advantages.", answer: 'TS' },
  { id: 1, text: "First, students who are proficient in English can access a much larger variety of academic resources, including research papers and textbooks.", answer: 'SI' },
  { id: 2, text: "In addition, English is widely recognised as the international language of business, which means strong English skills improve students' employment prospects after graduation.", answer: 'SI' },
  { id: 3, text: "For example, many multinational companies require employees to communicate in English during meetings and in written correspondence.", answer: 'SI' },
  { id: 4, text: "It is therefore clear that developing English proficiency is a valuable investment that benefits students both academically and professionally.", answer: 'CS' },
]

const A2_ITEMS = [
  { id: 0, text: "Regular exercise has many important benefits for young people's health.", answer: 'good', feedback: "Strong — clear topic (regular exercise) and a specific controlling idea (benefits for young people's health)." },
  { id: 1, text: "Exercise is good.", answer: 'weak', feedback: "Too vague — no controlling idea. Good for what? For whom? The reader cannot predict what the paragraph will discuss." },
  { id: 2, text: "There are many things about social media.", answer: 'weak', feedback: "No controlling idea — 'many things' is not specific. The reader cannot predict what the paragraph will be about." },
  { id: 3, text: "Living in a large city presents significant challenges for young people in terms of cost and social isolation.", answer: 'good', feedback: "Strong — formal language, specific topic, and two clear aspects of the controlling idea (cost + social isolation)." },
  { id: 4, text: "I think technology is really interesting.", answer: 'weak', feedback: "Two problems: first person ('I think') and informal language ('really interesting'). Academic writing avoids both." },
  { id: 5, text: "Online learning offers students greater flexibility and access to diverse educational resources.", answer: 'good', feedback: "Strong — formal language, clear topic, and a specific controlling idea with two elements (flexibility + access)." },
]

const A3_SENTENCES = {
  A: { text: "One of the most significant advantages of technology in education is its ability to provide students with immediate access to a wide range of learning resources.", part: "Topic Sentence" },
  B: { text: "Digital platforms such as online libraries and educational websites allow students to access research materials and textbooks at any time and from any location.", part: "Supporting Idea 1" },
  C: { text: "Furthermore, interactive tools such as educational videos and online quizzes enable students to engage with course content in a variety of formats, improving understanding and retention.", part: "Supporting Idea 2" },
  D: { text: "For instance, a student studying environmental science can access peer-reviewed articles, watch documentaries, and complete interactive exercises — all through a single device.", part: "Example" },
  E: { text: "It is therefore evident that technology has fundamentally transformed the learning experience by making high-quality educational resources more accessible than ever before.", part: "Concluding Sentence" },
}
const A3_CORRECT = ['A', 'B', 'C', 'D', 'E']
const A3_INITIAL = ['C', 'E', 'A', 'D', 'B']

const A4_PARTS = [
  { type: 'text', content: 'Learning English as a second language provides students with a number of ' },
  { type: 'gap', id: 0, answer: 'significant', options: ['significant', 'many', 'large', 'common'] },
  { type: 'text', content: ' academic and ' },
  { type: 'gap', id: 1, answer: 'professional', options: ['professional', 'personal', 'important', 'useful'] },
  { type: 'text', content: ' advantages. First, students who are proficient in English can access a wider range of academic resources and research materials. ' },
  { type: 'gap', id: 2, answer: 'Furthermore', options: ['Furthermore', 'However', 'Although', 'Because'] },
  { type: 'text', content: ', strong English skills are increasingly valued by employers in international organisations. It is important to ' },
  { type: 'gap', id: 3, answer: 'acknowledge', options: ['acknowledge', 'say', 'think', 'explain'] },
  { type: 'text', content: ' that learning a language requires time and consistent effort. ' },
  { type: 'gap', id: 4, answer: 'Overall', options: ['Overall', 'Also', 'First', 'Then'] },
  { type: 'text', content: ', the benefits of English proficiency far outweigh the challenges involved.' },
]

const A5_SEGMENTS = [
  { informal: false, text: 'Social media has become a ' },
  { informal: true, id: 0, text: 'really', formal: 'significantly / extremely' },
  { informal: false, text: ' popular communication tool among young people, and ' },
  { informal: true, id: 1, text: 'lots of', formal: 'many / a significant number of' },
  { informal: false, text: ' students use it every day. While it can help people stay connected, it can also be ' },
  { informal: true, id: 2, text: 'pretty bad', formal: 'significantly harmful / detrimental' },
  { informal: false, text: ' for mental health. ' },
  { informal: true, id: 3, text: 'I think', formal: 'It can be argued that / It is evident that' },
  { informal: false, text: ' schools should teach students how to use social media responsibly. Moreover, spending excessive time on social media ' },
  { informal: true, id: 4, text: 'stuff', formal: 'content / platforms' },
  { informal: false, text: ' can lead to reduced concentration and lower academic performance. It is therefore important that young people are aware of both the advantages and the risks of digital communication.' },
]

const A8_SENTENCES = [
  { id: 0, text: "In recent years, the use of technology in education has increased significantly around the world.", answer: 'BG' },
  { id: 1, text: "While technology offers considerable advantages for learners, it also presents significant challenges for educators and institutions.", answer: 'TH' },
  { id: 2, text: "One of the most significant advantages of technology in education is the flexibility and access it provides to students.", answer: 'TP' },
  { id: 3, text: "Online platforms allow students to access course materials at any time and from any location, which is particularly beneficial for those with work or family commitments.", answer: 'SI' },
  { id: 4, text: "In conclusion, it is clear that technology has transformed education in ways that offer both considerable opportunities and important challenges that must be addressed.", answer: 'CO' },
]

const A9_ITEMS = [
  { id: 0, text: "Learning English is important.", answer: 'weak', feedback: "Too simple — states a general opinion but gives no clear position and does not mention two specific main points." },
  { id: 1, text: "Although learning a foreign language requires significant effort, it is highly beneficial as it improves students' career prospects and broadens their cultural understanding.", answer: 'good', feedback: "Strong — formal language, clear position, and TWO specific main points named (career prospects + cultural understanding)." },
  { id: 2, text: "Social media is bad for young people.", answer: 'weak', feedback: "Too vague and informal. No two main points mentioned. A thesis must clearly outline what the essay will discuss." },
  { id: 3, text: "While online learning offers considerable flexibility for students, it also presents significant challenges in terms of motivation and social interaction.", answer: 'good', feedback: "Strong — clear topic, balanced position, and TWO specific points named (motivation + social interaction)." },
  { id: 4, text: "Technology has changed a lot of things in the modern world.", answer: 'weak', feedback: "Too vague — no position stated, no two points mentioned, and informal language ('a lot of things')." },
]

const A10_SECTIONS = {
  INTRO: { label: 'Introduction', text: "In today's globalised world, proficiency in English has become increasingly important for academic and professional success. Students who develop strong English skills are better positioned to access resources and opportunities worldwide. Although learning English requires considerable time and effort, it is highly beneficial for students as it improves access to academic resources and enhances career opportunities." },
  BODY1: { label: 'Body Paragraph 1', text: "One of the most significant benefits of learning English is the improved access it provides to academic resources. Students proficient in English can access a much wider range of research papers, textbooks, and online courses, the majority of which are published in English. Furthermore, many of the world's leading academic journals require authors to publish in English, meaning that language proficiency is essential for academic advancement." },
  BODY2: { label: 'Body Paragraph 2', text: "In addition to academic benefits, strong English skills considerably enhance students' career opportunities. English is widely recognised as the international language of business, and employers in multinational organisations frequently require employees to communicate effectively in English. Consequently, graduates who are proficient in English are more competitive in the job market and have access to a broader range of employment opportunities both locally and internationally." },
  CONCL: { label: 'Conclusion', text: "In summary, learning English provides students with academic and professional advantages that can significantly enhance their future opportunities. While language learning requires dedication and consistent effort, the long-term benefits — from accessing global academic resources to improving career prospects — make English proficiency a highly valuable investment for any student." },
}
const A10_CORRECT = ['INTRO', 'BODY1', 'BODY2', 'CONCL']
const A10_INITIAL = ['BODY2', 'CONCL', 'INTRO', 'BODY1']

// ── Helpers ────────────────────────────────────────────────────

const wordCount = (t) => t.trim() === '' ? 0 : t.trim().split(/\s+/).length

const moveItem = (arr, from, to) => {
  const next = [...arr]
  ;[next[from], next[to]] = [next[to], next[from]]
  return next
}

const scoreColor = (c, t) => c === t ? '#e8f5e9' : c >= t / 2 ? '#fff8e1' : '#fce4ec'
const scoreBorder = (c, t) => c === t ? '#a5d6a7' : c >= t / 2 ? '#ffe082' : '#ef9a9a'

// ── Styles ─────────────────────────────────────────────────────

const labelBtnStyle = (selected, color = '#1a4a8a') => ({
  padding: '3px 9px', borderRadius: '4px', marginRight: '5px', cursor: 'pointer',
  border: `1.5px solid ${selected ? color : '#ccc'}`,
  background: selected ? color : '#fff',
  color: selected ? '#fff' : '#555',
  fontSize: '0.8em', fontWeight: selected ? '700' : '400',
})

const goodWeakBtnStyle = (selected, type) => ({
  padding: '4px 12px', borderRadius: '4px', marginRight: '6px', cursor: 'pointer',
  border: `1.5px solid ${selected ? (type === 'good' ? '#388e3c' : '#c62828') : '#ccc'}`,
  background: selected ? (type === 'good' ? '#e8f5e9' : '#fce4ec') : '#fff',
  color: selected ? (type === 'good' ? '#1b5e20' : '#b71c1c') : '#555',
  fontSize: '0.82em', fontWeight: selected ? '700' : '400',
})

const arrowBtnStyle = (disabled) => ({
  padding: '2px 7px', border: '1px solid #ccc', borderRadius: '3px',
  background: disabled ? '#f5f5f5' : '#fff', cursor: disabled ? 'default' : 'pointer',
  color: disabled ? '#bbb' : '#555', fontSize: '0.75em', display: 'block', width: '28px',
})

// ── Component ──────────────────────────────────────────────────

export default function Module1Lesson3() {
  const [activeAccordion, setActiveAccordion] = useState(null)

  const [a1Labels, setA1Labels] = useState({})
  const [a1Result, setA1Result] = useState(null)

  const [a2Answers, setA2Answers] = useState({})
  const [a2Checked, setA2Checked] = useState(false)

  const [a3Order, setA3Order] = useState([...A3_INITIAL])
  const [a3Result, setA3Result] = useState(null)

  const [a4Answers, setA4Answers] = useState({})
  const [a4Result, setA4Result] = useState(null)

  const [a5Selected, setA5Selected] = useState(new Set())
  const [a5Checked, setA5Checked] = useState(false)

  const [a6Text, setA6Text] = useState('')
  const [a6Result, setA6Result] = useState(null)
  const [a6ShowModel, setA6ShowModel] = useState(false)

  const [a7Text, setA7Text] = useState('')
  const [a7Result, setA7Result] = useState(null)
  const [a7ShowModel, setA7ShowModel] = useState(false)

  const [a8Labels, setA8Labels] = useState({})
  const [a8Result, setA8Result] = useState(null)

  const [a9Answers, setA9Answers] = useState({})
  const [a9Checked, setA9Checked] = useState(false)

  const [a10Order, setA10Order] = useState([...A10_INITIAL])
  const [a10Result, setA10Result] = useState(null)

  const toggleAccordion = (i) => setActiveAccordion(activeAccordion === i ? null : i)

  const toggleA5 = (id) => {
    if (a5Checked) return
    const next = new Set(a5Selected)
    next.has(id) ? next.delete(id) : next.add(id)
    setA5Selected(next)
  }

  const checkA1 = () => {
    const correct = A1_SENTENCES.filter(s => a1Labels[s.id] === s.answer).length
    setA1Result({ correct, total: A1_SENTENCES.length })
  }

  const checkA3 = () => {
    const correct = a3Order.filter((id, i) => id === A3_CORRECT[i]).length
    setA3Result({ correct, total: A3_CORRECT.length })
  }

  const checkA4 = () => {
    const gaps = A4_PARTS.filter(p => p.type === 'gap')
    const correct = gaps.filter(g => a4Answers[g.id] === g.answer).length
    setA4Result({ correct, total: gaps.length })
  }

  const checkA6 = () => {
    if (!a6Text.trim()) return
    const wc = wordCount(a6Text)
    setA6Result([
      { label: "Written in third person (no 'I think', 'I believe', 'In my opinion')", pass: !/\b(i think|i believe|i feel|in my opinion)\b/i.test(a6Text) },
      { label: "No contractions (don't, can't, it's…)", pass: !/\w'\w/.test(a6Text) },
      { label: "Appropriate length for a topic sentence (15–35 words)", pass: wc >= 15 && wc <= 35 },
      { label: "Contains enough detail to state a controlling idea (at least 12 words)", pass: wc >= 12 },
    ])
  }

  const checkA7 = () => {
    if (!a7Text.trim()) return
    const wc = wordCount(a7Text)
    const lower = a7Text.toLowerCase()
    const connectors = ['first', 'furthermore', 'in addition', 'moreover', 'however', 'consequently', 'therefore', 'for example', 'for instance', 'additionally']
    setA7Result([
      { label: `Word count in target range: 80–140 words (your count: ${wc})`, pass: wc >= 80 && wc <= 140 },
      { label: "Contains at least one discourse connector (First, Furthermore, Consequently…)", pass: connectors.some(c => lower.includes(c)) },
      { label: "Written in third person (no 'I think', 'I believe')", pass: !/\b(i think|i believe|i feel|in my opinion)\b/i.test(a6Text) },
      { label: "No contractions (don't, can't, it's…)", pass: !/\w'\w/.test(a7Text) },
    ])
  }

  const checkA8 = () => {
    const correct = A8_SENTENCES.filter(s => a8Labels[s.id] === s.answer).length
    setA8Result({ correct, total: A8_SENTENCES.length })
  }

  const checkA10 = () => {
    const correct = a10Order.filter((id, i) => id === A10_CORRECT[i]).length
    setA10Result({ correct, total: A10_CORRECT.length })
  }

  const ScoreBox = ({ correct, total, good, review }) => (
    <div style={{ marginTop: '14px', padding: '12px 16px', borderRadius: '6px', background: scoreColor(correct, total), border: `1px solid ${scoreBorder(correct, total)}`, fontSize: '0.9em' }}>
      <strong>{correct}/{total} correct.</strong> {correct === total ? good : review}
    </div>
  )

  const CheckList = ({ checks }) => (
    <div style={{ marginTop: '12px' }}>
      {checks.map((c, i) => (
        <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '7px', fontSize: '0.88em', alignItems: 'flex-start' }}>
          <span style={{ color: c.pass ? '#2e7d32' : '#c62828', fontWeight: '700', flexShrink: 0, minWidth: '48px' }}>{c.pass ? 'Pass' : 'Review'}</span>
          <span style={{ color: '#444' }}>{c.label}</span>
        </div>
      ))}
    </div>
  )

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
        <h1>1.3  Interactive Activities</h1>
        <p class="banner-sub">10 activities with instant feedback. Work in order — they get progressively harder.</p>
      </div>
      <div class="info-box info-box-blue" style="margin-bottom:20px;">
        <h4>Before You Start</h4>
        <p style="margin:0;">Complete Section 1.2 — Theory first.
          <ul style="margin-top:6px; margin-bottom:0; padding-left:18px; font-size:0.88em;">
            <li>Activities 1–5 focus on paragraph structure and formal language.</li>
            <li>Activities 6–7 are writing activities with automatic feedback.</li>
            <li>Activities 8–10 focus on essay structure — no essay writing required in Module 1.</li>
          </ul>
        </p>
      </div>` }} />

        {/* ── PART 1 ACCORDION ── */}
        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 0 ? 'active' : ''}`}
              onClick={() => toggleAccordion(0)}
            >
              <span>Part 1 — Paragraph Activities</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 0 && (
              <div className="accordion-content active">
                <div className="part-divider" id="part1">
                  <h2>Part 1 — Paragraph Activities</h2>
                  <p>Identifying parts → analysing sentences → ordering → filling blanks → spotting errors → writing</p>
                </div>

                {/* Activity 1 */}
                <div className="act-box" id="act1">
                  <div className="act-header para">
                    <div>Activity 1 — Label the Parts of a Paragraph <span className="diff-badge diff-easy">Easy</span></div>
                  </div>
                  <div className="act-body">
                    <div className="tip-box">
                      Click the correct label for each sentence: <strong>TS</strong> = Topic Sentence &nbsp;·&nbsp; <strong>SI</strong> = Supporting Idea &nbsp;·&nbsp; <strong>CS</strong> = Concluding Sentence
                    </div>
                    <p style={{ fontSize: '0.84em', color: 'var(--text-muted)', marginBottom: '10px' }}>Topic: The advantages of learning English</p>
                    {A1_SENTENCES.map(s => (
                      <div key={s.id} style={{ marginBottom: '10px', padding: '10px 14px', background: '#f9f9f9', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
                        <p style={{ margin: '0 0 8px 0', fontSize: '0.91em', lineHeight: '1.6' }}>{s.text}</p>
                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px' }}>
                          {['TS', 'SI', 'CS'].map(label => (
                            <button key={label} style={labelBtnStyle(a1Labels[s.id] === label)} onClick={() => !a1Result && setA1Labels({ ...a1Labels, [s.id]: label })}>{label}</button>
                          ))}
                          {a1Result && (
                            <span style={{ marginLeft: '8px', fontSize: '0.82em', color: a1Labels[s.id] === s.answer ? '#2e7d32' : '#c62828', fontWeight: '600' }}>
                              {a1Labels[s.id] === s.answer ? 'Correct' : `Incorrect — answer: ${s.answer}`}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                    <button className="check-btn" onClick={checkA1}>Check My Labels</button>
                    <button className="retry-btn" onClick={() => { setA1Labels({}); setA1Result(null) }}>Reset</button>
                    {a1Result && <ScoreBox correct={a1Result.correct} total={a1Result.total} good="All correct — well done!" review="Review the highlighted sentences above." />}
                  </div>
                </div>

                {/* Activity 2 */}
                <div className="act-box" id="act2">
                  <div className="act-header para">
                    <div>Activity 2 — Is This a Good Topic Sentence? <span className="diff-badge diff-easy">Easy</span></div>
                  </div>
                  <div className="act-body">
                    <div className="tip-box">For each sentence decide: <strong>Good</strong> academic topic sentence or <strong>Not Good</strong>? Click your answer, then click Check All.</div>
                    {A2_ITEMS.map(item => {
                      const answered = a2Answers[item.id]
                      const isCorrect = a2Checked && answered === item.answer
                      const isWrong = a2Checked && answered && answered !== item.answer
                      return (
                        <div key={item.id} style={{ marginBottom: '10px', padding: '12px 14px', borderRadius: '6px', background: isCorrect ? '#e8f5e9' : isWrong ? '#fce4ec' : '#f9f9f9', border: `1px solid ${isCorrect ? '#a5d6a7' : isWrong ? '#ef9a9a' : '#e0e0e0'}` }}>
                          <p style={{ margin: '0 0 8px 0', fontSize: '0.91em' }}>{item.text}</p>
                          <div>
                            <button style={goodWeakBtnStyle(answered === 'good', 'good')} onClick={() => !a2Checked && setA2Answers({ ...a2Answers, [item.id]: 'good' })}>Good Topic Sentence</button>
                            <button style={goodWeakBtnStyle(answered === 'weak', 'weak')} onClick={() => !a2Checked && setA2Answers({ ...a2Answers, [item.id]: 'weak' })}>Not Good</button>
                          </div>
                          {a2Checked && <p style={{ margin: '8px 0 0 0', fontSize: '0.83em', color: '#444' }}>{item.feedback}</p>}
                        </div>
                      )
                    })}
                    <button className="check-btn" onClick={() => setA2Checked(true)}>Check All</button>
                    <button className="retry-btn" onClick={() => { setA2Answers({}); setA2Checked(false) }}>Reset</button>
                    {a2Checked && (
                      <ScoreBox
                        correct={A2_ITEMS.filter(i => a2Answers[i.id] === i.answer).length}
                        total={A2_ITEMS.length}
                        good="All correct — excellent!"
                        review="Review the feedback shown under each sentence."
                      />
                    )}
                  </div>
                </div>

                {/* Activity 3 */}
                <div className="act-box" id="act3">
                  <div className="act-header para">
                    <div>Activity 3 — Put the Paragraph in Order <span className="diff-badge diff-medium">Medium</span></div>
                  </div>
                  <div className="act-body">
                    <div className="tip-box">Use the <strong>arrows</strong> to arrange the sentences in the correct paragraph order: Topic Sentence → Supporting Ideas → Example → Concluding Sentence.</div>
                    {a3Order.map((id, i) => {
                      const isCorrect = a3Result && id === A3_CORRECT[i]
                      const isWrong = a3Result && id !== A3_CORRECT[i]
                      return (
                        <div key={id} style={{ display: 'flex', gap: '10px', marginBottom: '10px', padding: '12px', borderRadius: '6px', background: isCorrect ? '#e8f5e9' : isWrong ? '#fce4ec' : '#f9f9f9', border: `1px solid ${isCorrect ? '#a5d6a7' : isWrong ? '#ef9a9a' : '#e0e0e0'}` }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flexShrink: 0 }}>
                            <button style={arrowBtnStyle(i === 0 || !!a3Result)} onClick={() => !a3Result && setA3Order(moveItem(a3Order, i, i - 1))}>Up</button>
                            <button style={arrowBtnStyle(i === a3Order.length - 1 || !!a3Result)} onClick={() => !a3Result && setA3Order(moveItem(a3Order, i, i + 1))}>Dn</button>
                          </div>
                          <div style={{ flex: 1 }}>
                            <span style={{ fontSize: '0.78em', color: '#999', fontWeight: '600', display: 'block', marginBottom: '4px' }}>Position {i + 1}</span>
                            <span style={{ fontSize: '0.9em', lineHeight: '1.6' }}>{A3_SENTENCES[id].text}</span>
                            {isWrong && <span style={{ fontSize: '0.8em', color: '#c62828', display: 'block', marginTop: '4px' }}>Should be position {A3_CORRECT.indexOf(id) + 1} ({A3_SENTENCES[id].part})</span>}
                            {isCorrect && <span style={{ fontSize: '0.8em', color: '#2e7d32', display: 'block', marginTop: '4px' }}>{A3_SENTENCES[id].part}</span>}
                          </div>
                        </div>
                      )
                    })}
                    <button className="check-btn" onClick={checkA3}>Check Order</button>
                    <button className="retry-btn" onClick={() => { setA3Order([...A3_INITIAL]); setA3Result(null) }}>Reshuffle</button>
                    {a3Result && <ScoreBox correct={a3Result.correct} total={a3Result.total} good="Perfect order!" review="Check the highlighted sentences above for the correct positions." />}
                  </div>
                </div>

                {/* Activity 4 */}
                <div className="act-box" id="act4">
                  <div className="act-header para">
                    <div>Activity 4 — Complete the Paragraph <span className="diff-badge diff-medium">Medium</span></div>
                  </div>
                  <div className="act-body">
                    <div className="tip-box">Choose the best word from each dropdown to complete the paragraph. Use the word bank as a guide.</div>
                    <div className="word-bank-strip">
                      <span className="wb-chip">significant</span>
                      <span className="wb-chip">professional</span>
                      <span className="wb-chip">Furthermore</span>
                      <span className="wb-chip">acknowledge</span>
                      <span className="wb-chip">Overall</span>
                    </div>
                    <div style={{ lineHeight: '2.4', fontSize: '0.93em', padding: '14px 16px', background: '#fff', borderRadius: '6px', border: '1px solid #e0e0e0', marginTop: '10px' }}>
                      {A4_PARTS.map((part, i) => {
                        if (part.type === 'text') return <span key={i}>{part.content}</span>
                        const val = a4Answers[part.id] || ''
                        const isCorrect = a4Result && val === part.answer
                        const isWrong = a4Result && val && val !== part.answer
                        return (
                          <select
                            key={i}
                            value={val}
                            disabled={!!a4Result}
                            onChange={e => setA4Answers({ ...a4Answers, [part.id]: e.target.value })}
                            style={{ margin: '0 4px', padding: '2px 5px', borderRadius: '4px', border: `1.5px solid ${isCorrect ? '#4caf50' : isWrong ? '#f44336' : '#aaa'}`, background: isCorrect ? '#e8f5e9' : isWrong ? '#fce4ec' : '#fff', fontSize: '0.9em', cursor: a4Result ? 'default' : 'pointer' }}
                          >
                            <option value="">— select —</option>
                            {part.options.map(o => <option key={o} value={o}>{o}</option>)}
                          </select>
                        )
                      })}
                    </div>
                    <button className="check-btn" onClick={checkA4}>Check Answers</button>
                    <button className="retry-btn" onClick={() => { setA4Answers({}); setA4Result(null) }}>Reset</button>
                    {a4Result && <ScoreBox correct={a4Result.correct} total={a4Result.total} good="All correct!" review="Incorrect selections are highlighted in red above." />}
                  </div>
                </div>

                {/* Activity 5 */}
                <div className="act-box" id="act5">
                  <div className="act-header para">
                    <div>Activity 5 — Spot the Informal Language <span className="diff-badge diff-medium">Medium</span></div>
                  </div>
                  <div className="act-body">
                    <div className="tip-box">There are <strong>5 informal words or phrases</strong> in the paragraph below. <strong>Click each one</strong> to mark it, then click Check to see the formal alternatives.</div>
                    <div style={{ lineHeight: '2.0', fontSize: '0.92em', padding: '14px 16px', background: '#fff', borderRadius: '6px', border: '1px solid #e0e0e0', marginTop: '10px', marginBottom: '10px' }}>
                      {A5_SEGMENTS.map((seg, i) => {
                        if (!seg.informal) return <span key={i}>{seg.text}</span>
                        const selected = a5Selected.has(seg.id)
                        let bg = '#fff3cd'
                        if (selected && !a5Checked) bg = '#ffb300'
                        if (a5Checked) bg = selected ? '#c8e6c9' : '#ffcdd2'
                        return (
                          <span
                            key={i}
                            onClick={() => toggleA5(seg.id)}
                            style={{ background: bg, padding: '1px 3px', borderRadius: '3px', cursor: a5Checked ? 'default' : 'pointer', fontWeight: '600' }}
                          >{seg.text}</span>
                        )
                      })}
                    </div>
                    <p style={{ fontSize: '0.83em', color: 'var(--text-muted)', marginBottom: '10px' }}>Click all 5 informal expressions highlighted in yellow, then check your answers.</p>
                    <button className="check-btn" onClick={() => setA5Checked(true)}>Check</button>
                    <button className="retry-btn" onClick={() => { setA5Selected(new Set()); setA5Checked(false) }}>Reset</button>
                    {a5Checked && (
                      <div style={{ marginTop: '14px' }}>
                        <div style={{ marginBottom: '10px', padding: '12px 16px', borderRadius: '6px', background: scoreColor(a5Selected.size === 5 ? 5 : [...a5Selected].filter(id => id < 5).length, 5), border: `1px solid ${scoreBorder([...a5Selected].filter(id => id < 5).length, 5)}`, fontSize: '0.9em' }}>
                          <strong>You found {[...a5Selected].length} of 5 informal expressions.</strong>
                        </div>
                        <p style={{ fontWeight: '600', fontSize: '0.88em', marginBottom: '8px' }}>Formal alternatives:</p>
                        {A5_SEGMENTS.filter(s => s.informal).map(seg => (
                          <div key={seg.id} style={{ display: 'flex', gap: '10px', marginBottom: '6px', fontSize: '0.87em', padding: '6px 10px', borderRadius: '4px', background: '#f5f5f5' }}>
                            <span style={{ color: '#c62828', fontWeight: '700', flexShrink: 0, minWidth: '80px' }}>"{seg.text}"</span>
                            <span style={{ color: '#555' }}>→ {seg.formal}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Activity 6 */}
                <div className="act-box" id="act6">
                  <div className="act-header write">
                    <div>Activity 6 — Write a Topic Sentence <span className="diff-badge diff-hard">Hard</span></div>
                  </div>
                  <div className="act-body">
                    <div className="writing-prompt">
                      <strong>Prompt:</strong> Write a topic sentence for a body paragraph about <em>one advantage of learning a second language</em>.<br />
                      <span style={{ fontSize: '0.85em', color: '#555' }}>One sentence only. Formal language. No "I think". State the topic + one specific advantage.</span>
                    </div>
                    <input
                      type="text"
                      className="writing-input"
                      value={a6Text}
                      onChange={e => { setA6Text(e.target.value); setA6Result(null) }}
                      placeholder="Type your topic sentence here…"
                    />
                    <div className="wc-bar">Words: {wordCount(a6Text)}</div>
                    <button className="check-btn orange" onClick={checkA6}>Analyse My Sentence</button>
                    <button className="retry-btn" onClick={() => { setA6Text(''); setA6Result(null); setA6ShowModel(false) }}>Clear</button>
                    {a6Result && (
                      <>
                        <CheckList checks={a6Result} />
                        <button className="model-toggle" onClick={() => setA6ShowModel(!a6ShowModel)} style={{ marginTop: '10px' }}>
                          {a6ShowModel ? 'Hide Model Answer' : 'Show Model Answer'}
                        </button>
                      </>
                    )}
                    {a6ShowModel && (
                      <div className="model-answer">
                        <div className="ma-label">Model Answer</div>
                        <p style={{ margin: 0 }}>"Learning a second language provides individuals with a significant cognitive advantage, as research has shown it improves memory, concentration, and problem-solving skills."</p>
                        <p style={{ fontSize: '0.82em', color: '#555', marginTop: '8px' }}><strong>Notice:</strong> formal vocabulary · third person · specific controlling idea · one sentence only</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Activity 7 */}
                <div className="act-box" id="act7">
                  <div className="act-header write">
                    <div>Activity 7 — Write an Academic Paragraph <span className="diff-badge diff-hard">Hard</span></div>
                  </div>
                  <div className="act-body">
                    <div className="writing-prompt">
                      <strong>Prompt:</strong> Write an academic paragraph (80–140 words) about <em>one advantage of studying abroad</em>.<br />
                      <span style={{ fontSize: '0.85em', color: '#555' }}>Include: topic sentence → at least 2 supporting ideas → concluding sentence. Use formal language + at least one connector.</span>
                    </div>
                    <textarea
                      className="writing-input"
                      rows={7}
                      value={a7Text}
                      onChange={e => { setA7Text(e.target.value); setA7Result(null) }}
                      placeholder="Write your paragraph here…"
                    />
                    <div className="wc-bar">Words: {wordCount(a7Text)} &nbsp;|&nbsp; Target: 80–140 words</div>
                    <div className="info-box info-box-orange" style={{ marginBottom: '10px', fontSize: '0.83em', padding: '10px 14px' }}>
                      <strong>Note:</strong> The automatic check verifies basic structural features only. Your instructor evaluates the quality of your ideas in Section 1.5.
                    </div>
                    <button className="check-btn orange" onClick={checkA7}>Analyse My Paragraph</button>
                    <button className="retry-btn" onClick={() => { setA7Text(''); setA7Result(null); setA7ShowModel(false) }}>Clear</button>
                    {a7Result && (
                      <>
                        <CheckList checks={a7Result} />
                        <button className="model-toggle" onClick={() => setA7ShowModel(!a7ShowModel)} style={{ marginTop: '10px' }}>
                          {a7ShowModel ? 'Hide Model Paragraph' : 'Show Model Paragraph'}
                        </button>
                      </>
                    )}
                    {a7ShowModel && (
                      <div className="model-answer">
                        <div className="ma-label">Model Paragraph (~110 words)</div>
                        <p style={{ margin: 0, fontStyle: 'italic' }}>"Studying abroad provides students with invaluable opportunities for personal and professional development. First, living independently in a foreign country requires students to manage daily responsibilities — such as budgeting and navigating an unfamiliar environment — which builds confidence and resilience. Furthermore, studying in an international context exposes students to diverse perspectives and cultural practices, which broadens their understanding of the world and develops their intercultural communication skills. These skills are increasingly valued by employers in today's globalised economy. Consequently, students who study abroad are often more competitive in the job market upon graduation. For these reasons, studying abroad can be considered one of the most transformative academic experiences available."</p>
                        <p style={{ fontSize: '0.82em', color: '#555', marginTop: '8px' }}><strong>Connectors:</strong> First · Furthermore · Consequently · For these reasons &nbsp;|&nbsp; <strong>Structure:</strong> TS → SI 1 → SI 2 → benefit → CS</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* ── PART 2 ACCORDION ── */}
        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 1 ? 'active' : ''}`}
              onClick={() => toggleAccordion(1)}
            >
              <span>Part 2 — Essay Structure Activities</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 1 && (
              <div className="accordion-content active">
                <div className="part-divider" id="part2" style={{ background: 'linear-gradient(135deg,var(--teal-dark),#1abc9c)' }}>
                  <h2>Part 2 — Essay Structure Activities</h2>
                  <p>Labelling → evaluating → ordering. No essay writing required in Module 1.</p>
                </div>
                <div className="no-write-note"><strong>No essay writing in Module 1.</strong> These activities build your understanding of essay structure so you are ready to write full essays in Modules 2–4.</div>

                {/* Activity 8 */}
                <div className="act-box" id="act8">
                  <div className="act-header essay">
                    <div>Activity 8 — Label the Parts of an Essay <span className="diff-badge diff-essay">Essay</span> <span className="diff-badge diff-easy">Easy</span></div>
                  </div>
                  <div className="act-body">
                    <div className="tip-box">Click the correct label for each sentence: <strong>BG</strong> = Background · <strong>TH</strong> = Thesis · <strong>TP</strong> = Topic Sentence · <strong>SI</strong> = Supporting Idea · <strong>CO</strong> = Conclusion</div>
                    <p style={{ fontSize: '0.84em', color: 'var(--text-muted)', marginBottom: '10px' }}>Essay topic: The use of technology in education</p>
                    {A8_SENTENCES.map(s => (
                      <div key={s.id} style={{ marginBottom: '10px', padding: '10px 14px', background: '#f9f9f9', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
                        <p style={{ margin: '0 0 8px 0', fontSize: '0.91em', lineHeight: '1.6' }}>{s.text}</p>
                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px' }}>
                          {['BG', 'TH', 'TP', 'SI', 'CO'].map(label => (
                            <button key={label} style={labelBtnStyle(a8Labels[s.id] === label, '#00796b')} onClick={() => !a8Result && setA8Labels({ ...a8Labels, [s.id]: label })}>{label}</button>
                          ))}
                          {a8Result && (
                            <span style={{ marginLeft: '8px', fontSize: '0.82em', color: a8Labels[s.id] === s.answer ? '#2e7d32' : '#c62828', fontWeight: '600' }}>
                              {a8Labels[s.id] === s.answer ? 'Correct' : `Incorrect — answer: ${s.answer}`}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                    <button className="check-btn teal" onClick={checkA8}>Check Labels</button>
                    <button className="retry-btn" onClick={() => { setA8Labels({}); setA8Result(null) }}>Reset</button>
                    {a8Result && <ScoreBox correct={a8Result.correct} total={a8Result.total} good="All correct — well done!" review="Review the highlighted sentences above." />}
                  </div>
                </div>

                {/* Activity 9 */}
                <div className="act-box" id="act9">
                  <div className="act-header essay">
                    <div>Activity 9 — Is This a Good Thesis Statement? <span className="diff-badge diff-essay">Essay</span> <span className="diff-badge diff-medium">Medium</span></div>
                  </div>
                  <div className="act-body">
                    <div className="tip-box">A strong thesis: (1) states the topic clearly · (2) gives the writer's position · (3) names TWO main points · (4) is formal and specific · (5) is one sentence.</div>
                    {A9_ITEMS.map(item => {
                      const answered = a9Answers[item.id]
                      const isCorrect = a9Checked && answered === item.answer
                      const isWrong = a9Checked && answered && answered !== item.answer
                      return (
                        <div key={item.id} style={{ marginBottom: '10px', padding: '12px 14px', borderRadius: '6px', background: isCorrect ? '#e8f5e9' : isWrong ? '#fce4ec' : '#f9f9f9', border: `1px solid ${isCorrect ? '#a5d6a7' : isWrong ? '#ef9a9a' : '#e0e0e0'}` }}>
                          <p style={{ margin: '0 0 8px 0', fontSize: '0.91em' }}>{item.text}</p>
                          <div>
                            <button style={goodWeakBtnStyle(answered === 'good', 'good')} onClick={() => !a9Checked && setA9Answers({ ...a9Answers, [item.id]: 'good' })}>Strong Thesis</button>
                            <button style={goodWeakBtnStyle(answered === 'weak', 'weak')} onClick={() => !a9Checked && setA9Answers({ ...a9Answers, [item.id]: 'weak' })}>Weak Thesis</button>
                          </div>
                          {a9Checked && <p style={{ margin: '8px 0 0 0', fontSize: '0.83em', color: '#444' }}>{item.feedback}</p>}
                        </div>
                      )
                    })}
                    <button className="check-btn teal" onClick={() => setA9Checked(true)}>Check All</button>
                    <button className="retry-btn" onClick={() => { setA9Answers({}); setA9Checked(false) }}>Reset</button>
                    {a9Checked && (
                      <ScoreBox
                        correct={A9_ITEMS.filter(i => a9Answers[i.id] === i.answer).length}
                        total={A9_ITEMS.length}
                        good="All correct — excellent!"
                        review="Review the feedback shown under each statement."
                      />
                    )}
                  </div>
                </div>

                {/* Activity 10 */}
                <div className="act-box" id="act10">
                  <div className="act-header essay">
                    <div>Activity 10 — Put the Essay in Order <span className="diff-badge diff-essay">Essay</span> <span className="diff-badge diff-medium">Medium</span></div>
                  </div>
                  <div className="act-body">
                    <div className="tip-box">Use the <strong>arrows</strong> to arrange the four essay sections in the correct order: Introduction → Body Paragraph 1 → Body Paragraph 2 → Conclusion.</div>
                    {a10Order.map((id, i) => {
                      const section = A10_SECTIONS[id]
                      const isCorrect = a10Result && id === A10_CORRECT[i]
                      const isWrong = a10Result && id !== A10_CORRECT[i]
                      return (
                        <div key={id} style={{ display: 'flex', gap: '10px', marginBottom: '10px', padding: '12px', borderRadius: '6px', background: isCorrect ? '#e8f5e9' : isWrong ? '#fce4ec' : '#f9f9f9', border: `1px solid ${isCorrect ? '#a5d6a7' : isWrong ? '#ef9a9a' : '#e0e0e0'}` }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flexShrink: 0 }}>
                            <button style={arrowBtnStyle(i === 0 || !!a10Result)} onClick={() => !a10Result && setA10Order(moveItem(a10Order, i, i - 1))}>Up</button>
                            <button style={arrowBtnStyle(i === a10Order.length - 1 || !!a10Result)} onClick={() => !a10Result && setA10Order(moveItem(a10Order, i, i + 1))}>Dn</button>
                          </div>
                          <div style={{ flex: 1 }}>
                            <span style={{ fontSize: '0.78em', color: '#999', fontWeight: '600', display: 'block', marginBottom: '3px' }}>Position {i + 1}</span>
                            <span style={{ fontWeight: '700', fontSize: '0.88em', color: '#1a4a8a', display: 'block', marginBottom: '4px' }}>{section.label}</span>
                            <span style={{ fontSize: '0.86em', color: '#555', lineHeight: '1.5' }}>{section.text.substring(0, 110)}…</span>
                            {isWrong && <span style={{ fontSize: '0.8em', color: '#c62828', display: 'block', marginTop: '4px' }}>Should be position {A10_CORRECT.indexOf(id) + 1}</span>}
                          </div>
                        </div>
                      )
                    })}
                    <button className="check-btn teal" onClick={checkA10}>Check Essay Order</button>
                    <button className="retry-btn" onClick={() => { setA10Order([...A10_INITIAL]); setA10Result(null) }}>Reshuffle</button>
                    {a10Result && <ScoreBox correct={a10Result.correct} total={a10Result.total} good="Perfect order!" review="Check the highlighted sections above for the correct positions." />}
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: `
      <div class="info-box info-box-green" style="margin-top:24px;">
        <h4>All Activities Complete!</h4>
        <p style="margin:0;">If any activity was hard, revisit Section 1.2 — Theory then retry. Ready to continue? Move on to Section 1.4 — Reading, Discussion &amp; Collaboration.</p>
      </div>` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module1/lesson-2"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module1/lesson-4"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
