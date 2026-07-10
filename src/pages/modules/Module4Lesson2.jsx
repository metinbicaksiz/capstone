import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

// ── Activity data ──────────────────────────────────────────────

const A1_PROMPTS = [
  { id: 0, text: "To what extent do you agree or disagree that social media has a negative impact on young people's mental health?", answer: 'arg', feedback: "Argumentative — 'to what extent do you agree or disagree' asks the writer to take a clear position and support it with reasons." },
  { id: 1, text: "Describe the main cultural attractions in a city of your choice.", answer: 'not', feedback: "Not argumentative — 'describe' asks for factual description, not an opinion or a defended position." },
  { id: 2, text: "Do you agree that governments should ban single-use plastic products? Justify your answer.", answer: 'arg', feedback: "Argumentative — 'do you agree' and 'justify your answer' require a clear position supported by logical arguments." },
  { id: 3, text: "Explain the process by which volcanoes are formed.", answer: 'not', feedback: "Not argumentative — 'explain how' requires a factual, process-based response with no opinion or position." },
  { id: 4, text: "Some people believe that university education should be free for all students. Discuss your views.", answer: 'arg', feedback: "Argumentative — 'discuss your views' requires the writer to take and defend a clear position." },
  { id: 5, text: "Compare the advantages and disadvantages of living in a large city versus a rural area.", answer: 'not', feedback: "Not argumentative — this is an advantages/disadvantages essay. It presents both sides without arguing for a single position." },
]

const A2_SENTENCES = [
  { id: 0, text: "In recent years, social media platforms have become an integral part of daily life for billions of people worldwide.", answer: 'BG' },
  { id: 1, text: "Although social media offers significant communication benefits, it should be regulated by governments because it spreads misinformation and negatively affects users' mental health.", answer: 'TH' },
  { id: 2, text: "One of the primary reasons governments should regulate social media is its role in spreading harmful misinformation.", answer: 'CL' },
  { id: 3, text: "For example, during the COVID-19 pandemic, false health information circulated rapidly on major platforms, causing many people to reject effective medical treatments.", answer: 'EV' },
  { id: 4, text: "In conclusion, the regulation of social media is a necessary step to protect public health and social wellbeing in the digital age.", answer: 'CO' },
]

// Activity 3 — Arrange words to form a thesis statement (3 exercises)
const A3_EXERCISES = [
  {
    label: 'Thesis 1',
    topic: 'Topic: Should governments regulate social media?',
    words:     ["Governments", "should", "regulate", "social", "media", "to", "prevent", "harmful", "misinformation."],
    scrambled: ["should", "harmful", "regulate", "Governments", "to", "misinformation.", "social", "prevent", "media"],
  },
  {
    label: 'Thesis 2',
    topic: 'Topic: Should schools ban junk food?',
    words:     ["Schools", "should", "ban", "junk", "food", "to", "protect", "students", "from", "obesity."],
    scrambled: ["junk", "should", "protect", "ban", "Schools", "obesity.", "to", "from", "food", "students"],
  },
  {
    label: 'Thesis 3',
    topic: 'Topic: Is daily exercise important for students?',
    words:     ["Daily", "exercise", "is", "essential", "to", "improve", "student", "health", "and", "concentration."],
    scrambled: ["essential", "health", "exercise", "Daily", "to", "concentration.", "is", "improve", "and", "student"],
  },
]

// Activity 4 — Choose the missing sentence in a body paragraph (3 exercises)
const A4_EXERCISES = [
  {
    label: 'Paragraph 1',
    topic: 'Topic: Social media regulation',
    before: "One of the main reasons governments should regulate social media is its role in spreading dangerous misinformation.",
    after:  "For example, during the COVID-19 pandemic, false health information spread rapidly on major platforms, leading many people to reject effective vaccines. It is therefore clear that without regulation, the consequences for public health can be severe.",
    options: [
      { id: 'A', text: "Social media platforms were first created in the early 2000s by technology companies in the United States." },
      { id: 'B', text: "When false information circulates freely online, it can have devastating consequences for public health and safety." },
      { id: 'C', text: "Many teenagers enjoy using social media platforms such as TikTok and Instagram for entertainment." },
      { id: 'D', text: "Social media companies earn large profits from advertising by analysing users' online activity." },
    ],
    correct: 'B',
    feedback: {
      A: "Incorrect — this is background/historical information. It does not support the claim about misinformation or connect to the evidence that follows.",
      B: "Correct — this sentence directly supports the claim about misinformation and links logically to the COVID-19 evidence in the next sentence.",
      C: "Incorrect — this is an off-topic observation about how teenagers use social media. It does not relate to the argument about misinformation.",
      D: "Incorrect — this is about social media business models, not about the danger of misinformation. It does not fit the paragraph's argument.",
    },
  },
  {
    label: 'Paragraph 2',
    topic: 'Topic: Online learning and flexibility',
    before: "One significant advantage of online learning is the flexibility it provides to students.",
    after:  "This is particularly beneficial for students who have work commitments or live in remote areas. Consequently, online learning can significantly increase access to quality education for a wider range of learners.",
    options: [
      { id: 'A', text: "Many students find it difficult to remain motivated when studying independently at home." },
      { id: 'B', text: "Online learning was first introduced in the 1990s with the growth of the internet." },
      { id: 'C', text: "Unlike traditional classroom settings, online platforms allow students to access course materials at any time and from any location." },
      { id: 'D', text: "Some online degree programmes are more expensive than equivalent courses at traditional universities." },
    ],
    correct: 'C',
    feedback: {
      A: "Incorrect — this identifies a disadvantage of online learning, not a supporting idea for the claim about flexibility.",
      B: "Incorrect — this is historical background information that does not support the claim about flexibility.",
      C: "Correct — this sentence directly develops the claim by explaining exactly how online learning delivers flexibility to students.",
      D: "Incorrect — this introduces the topic of cost, which is unrelated to the claim about flexibility.",
    },
  },
  {
    label: 'Paragraph 3',
    topic: 'Topic: Physical exercise and academic performance',
    before: "Regular physical activity has a significant positive effect on students' academic performance.",
    after:  "For instance, a study conducted across multiple schools found that students who participated in daily exercise scored considerably higher on standardised tests than those who did not. It is therefore evident that integrating physical activity into the school day can enhance academic outcomes.",
    options: [
      { id: 'A', text: "Sport is widely regarded as one of the most popular subjects among secondary school students." },
      { id: 'B', text: "Research has shown that students who exercise regularly demonstrate improved concentration, better memory, and higher academic achievement." },
      { id: 'C', text: "Many students prefer playing video games rather than participating in physical activity after school." },
      { id: 'D', text: "Physical education classes are typically taught by specialist teachers with recognised sports qualifications." },
    ],
    correct: 'B',
    feedback: {
      A: "Incorrect — stating that sport is popular does not provide evidence linking exercise to improved academic performance.",
      B: "Correct — this sentence provides direct evidence for the claim by listing three specific ways that exercise improves academic performance.",
      C: "Incorrect — this is an off-topic observation about student habits unrelated to the effect of exercise on academic performance.",
      D: "Incorrect — this describes who teaches PE classes, which is completely unrelated to the claim about exercise and academic performance.",
    },
  },
]

// Activity 5 — Supporting Ideas Quiz (templateId=5)
const A5_QUESTIONS = [
  {
    id: 0,
    text: "Which sentence is the strongest supporting idea for the argument 'Social media should be regulated by governments'?",
    options: [
      "Social media was invented in the early 2000s.",
      "Many people around the world use social media every day.",
      "Without regulation, harmful content and misinformation on social media can spread unchecked.",
      "Some social media platforms allow users to share short video clips.",
    ],
    answer: 2,
    feedback: "Option C is correct. It directly identifies a specific harm (unchecked harmful content) that regulation would address, making it a relevant and strong supporting idea.",
  },
  {
    id: 1,
    text: "What is the purpose of a counterargument in an argumentative essay?",
    options: [
      "To prove that the writer's main argument is wrong.",
      "To acknowledge the opposing view before refuting it with evidence.",
      "To provide historical background information about the topic.",
      "To list the main points the essay will discuss.",
    ],
    answer: 1,
    feedback: "Option B is correct. A counterargument shows the writer has considered opposing views and then uses a rebuttal to strengthen their own position.",
  },
  {
    id: 2,
    text: "Which discourse connector is most appropriate to introduce a rebuttal after a counterargument?",
    options: [
      "Furthermore",
      "For example",
      "However",
      "In addition",
    ],
    answer: 2,
    feedback: "Option C is correct. 'However' signals a contrast or shift in direction, making it the natural choice when moving from a counterargument to a rebuttal.",
  },
  {
    id: 3,
    text: "Where should the thesis statement appear in an argumentative essay?",
    options: [
      "At the very beginning of the introduction, as the first sentence.",
      "At the end of the introduction.",
      "At the beginning of the first body paragraph.",
      "At the end of the conclusion.",
    ],
    answer: 1,
    feedback: "Option B is correct. The thesis statement typically closes the introduction, providing a clear statement of the writer's position before the body paragraphs begin.",
  },
  {
    id: 4,
    text: "Which of the following is NOT a feature of a well-written argumentative thesis?",
    options: [
      "It states the writer's clear position on the topic.",
      "It mentions two specific reasons to support the position.",
      "It uses first-person language such as 'I think' or 'I believe'.",
      "It acknowledges the opposing viewpoint.",
    ],
    answer: 2,
    feedback: "Option C is correct. Academic writing avoids first-person language like 'I think' or 'I believe', which is informal and subjective.",
  },
]

// Activity 6 — Final Mixed Quiz (templateId=5)
const A6_QUESTIONS = [
  {
    id: 0,
    text: "Which of these is an argumentative (opinion) essay prompt?",
    options: [
      "Describe the main features of climate change and its causes.",
      "Explain how volcanoes are formed using scientific evidence.",
      "Do you agree that schools should ban the use of mobile phones? Justify your answer.",
      "Compare city life with rural life, including both advantages and disadvantages.",
    ],
    answer: 2,
    feedback: "Option C is correct. 'Do you agree…? Justify your answer' requires the writer to take a clear position and support it — the defining feature of an argumentative essay.",
  },
  {
    id: 1,
    text: "Which sentence functions as a background statement (BG) for an essay about social media regulation?",
    options: [
      "Governments should regulate social media to prevent the spread of harmful misinformation.",
      "In recent years, social media has become a central part of daily life for billions of people worldwide.",
      "One major reason to regulate social media is its role in facilitating the rapid spread of misinformation.",
      "In conclusion, the regulation of social media is both necessary and urgent.",
    ],
    answer: 1,
    feedback: "Option B is correct. A background statement introduces the topic with general, factual context. Option A is a thesis, C is a claim, and D is a conclusion.",
  },
  {
    id: 2,
    text: "Which of the following is the strongest argumentative thesis statement?",
    options: [
      "Social media is bad for society.",
      "I think social media should be regulated because it causes many problems.",
      "Although social media provides communication benefits, it should be regulated by governments to prevent the spread of misinformation and protect users' mental health.",
      "There are many things to consider when discussing social media and its impact on modern society.",
    ],
    answer: 2,
    feedback: "Option C is correct. It uses formal language, acknowledges the opposing view ('Although…'), takes a clear position, and names two specific reasons — all features of a strong argumentative thesis.",
  },
  {
    id: 3,
    text: "What must a body paragraph in an argumentative essay include?",
    options: [
      "A topic sentence, background information, and a concluding statement.",
      "A clear claim, supporting evidence, and a link back to the main argument.",
      "A thesis statement, two supporting ideas, and a counterargument.",
      "An introduction, a counterargument, and formal vocabulary.",
    ],
    answer: 1,
    feedback: "Option B is correct. An argumentative body paragraph needs a clear claim (topic sentence), evidence to support it, and a closing link back to the essay's main argument.",
  },
  {
    id: 4,
    text: "Which sentence uses the most formal and appropriate academic language for an argumentative essay?",
    options: [
      "I think social media is really bad for young people and their mental health.",
      "Social media is kind of harmful sometimes, especially for teenagers.",
      "It is evident that social media has significant negative effects on young people's mental wellbeing.",
      "Loads of people don't like social media because it can be really dangerous.",
    ],
    answer: 2,
    feedback: "Option C is correct. It avoids first person, uses formal vocabulary ('evident', 'significant', 'wellbeing'), and presents a clear, objective academic claim.",
  },
]

// ── Helpers ────────────────────────────────────────────────────

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

const twoChoiceBtnStyle = (selected, variant) => {
  const isA = variant === 'a'
  return {
    padding: '4px 12px', borderRadius: '4px', marginRight: '6px', cursor: 'pointer',
    border: `1.5px solid ${selected ? (isA ? '#388e3c' : '#c62828') : '#ccc'}`,
    background: selected ? (isA ? '#e8f5e9' : '#fce4ec') : '#fff',
    color: selected ? (isA ? '#1b5e20' : '#b71c1c') : '#555',
    fontSize: '0.82em', fontWeight: selected ? '700' : '400',
  }
}

// ── Component ──────────────────────────────────────────────────

export default function Module4Lesson2() {
  const [activeAccordion, setActiveAccordion] = useState(null)

  // Activity 1
  const [a1Answers, setA1Answers] = useState({})
  const [a1Checked, setA1Checked] = useState(false)

  // Activity 2
  const [a2Labels, setA2Labels] = useState({})
  const [a2Result, setA2Result] = useState(null)

  // Activity 3 — 3 unjumble exercises
  const [a3Pools, setA3Pools] = useState(A3_EXERCISES.map(ex => [...ex.scrambled]))
  const [a3Builts, setA3Builts] = useState(A3_EXERCISES.map(() => []))
  const [a3Checkeds, setA3Checkeds] = useState([false, false, false])

  // Activity 4 — 3 missing-sentence exercises
  const [a4Answers, setA4Answers] = useState([null, null, null])
  const [a4Checkeds, setA4Checkeds] = useState([false, false, false])

  // Activity 5 — Quiz
  const [a5Answers, setA5Answers] = useState({})
  const [a5Checked, setA5Checked] = useState(false)

  // Activity 6 — Final Quiz
  const [a6Answers, setA6Answers] = useState({})
  const [a6Checked, setA6Checked] = useState(false)

  const toggleAccordion = (i) => setActiveAccordion(activeAccordion === i ? null : i)

  // Activity 2
  const checkA2 = () => {
    const correct = A2_SENTENCES.filter(s => a2Labels[s.id] === s.answer).length
    setA2Result({ correct, total: A2_SENTENCES.length })
  }

  // Activity 3 helpers
  const a3AddWord = (ei, wi) => {
    if (a3Checkeds[ei]) return
    const word = a3Pools[ei][wi]
    setA3Pools(prev => prev.map((pool, i) => i === ei ? pool.filter((_, j) => j !== wi) : pool))
    setA3Builts(prev => prev.map((built, i) => i === ei ? [...built, word] : built))
  }
  const a3RemoveWord = (ei, wi) => {
    if (a3Checkeds[ei]) return
    const word = a3Builts[ei][wi]
    setA3Builts(prev => prev.map((built, i) => i === ei ? built.filter((_, j) => j !== wi) : built))
    setA3Pools(prev => prev.map((pool, i) => i === ei ? [...pool, word] : pool))
  }
  const a3Check = (ei) => setA3Checkeds(prev => prev.map((c, i) => i === ei ? true : c))
  const a3Reset = (ei) => {
    setA3Pools(prev => prev.map((pool, i) => i === ei ? [...A3_EXERCISES[i].scrambled] : pool))
    setA3Builts(prev => prev.map((built, i) => i === ei ? [] : built))
    setA3Checkeds(prev => prev.map((c, i) => i === ei ? false : c))
  }

  // Activity 4 helpers
  const a4SetAnswer = (ei, val) => {
    if (a4Checkeds[ei]) return
    setA4Answers(prev => prev.map((a, i) => i === ei ? val : a))
  }
  const a4Check = (ei) => setA4Checkeds(prev => prev.map((c, i) => i === ei ? true : c))
  const a4Reset = (ei) => {
    setA4Answers(prev => prev.map((a, i) => i === ei ? null : a))
    setA4Checkeds(prev => prev.map((c, i) => i === ei ? false : c))
  }

  const ScoreBox = ({ correct, total, good, review }) => (
    <div style={{ marginTop: '14px', padding: '12px 16px', borderRadius: '6px', background: scoreColor(correct, total), border: `1px solid ${scoreBorder(correct, total)}`, fontSize: '0.9em' }}>
      <strong>{correct}/{total} correct.</strong> {correct === total ? good : review}
    </div>
  )

  const QuizBlock = ({ questions, answers, setAnswers, checked }) => (
    <div>
      {questions.map((q, qi) => {
        const selected = answers[q.id]
        return (
          <div key={q.id} style={{ marginBottom: '18px', padding: '14px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <p style={{ margin: '0 0 10px 0', fontSize: '0.92em', fontWeight: '600', lineHeight: '1.5' }}>
              <span style={{ color: '#1a4a8a', marginRight: '6px' }}>Q{qi + 1}.</span>{q.text}
            </p>
            {q.options.map((opt, oi) => {
              const isSelected = selected === oi
              const isCorrect = oi === q.answer
              let bg = '#fff', border = '#e0e0e0', color = '#444'
              if (!checked && isSelected) { bg = '#e3f2fd'; border = '#1a4a8a'; color = '#1a4a8a' }
              if (checked && isSelected && isCorrect) { bg = '#e8f5e9'; border = '#4caf50'; color = '#1b5e20' }
              if (checked && isSelected && !isCorrect) { bg = '#fce4ec'; border = '#f44336'; color = '#b71c1c' }
              if (checked && !isSelected && isCorrect) { bg = '#f1f8e9'; border = '#81c784'; color = '#2e7d32' }
              return (
                <button
                  key={oi}
                  onClick={() => !checked && setAnswers({ ...answers, [q.id]: oi })}
                  style={{ display: 'block', width: '100%', textAlign: 'left', padding: '8px 12px', borderRadius: '6px', marginBottom: '5px', cursor: checked ? 'default' : 'pointer', border: `1.5px solid ${border}`, background: bg, color, fontSize: '0.88em', lineHeight: '1.4' }}
                >
                  <strong style={{ marginRight: '6px' }}>{String.fromCharCode(65 + oi)}.</strong>{opt}
                </button>
              )
            })}
            {checked && <p style={{ margin: '8px 0 0 0', fontSize: '0.82em', color: '#444', fontStyle: 'italic' }}>{q.feedback}</p>}
          </div>
        )
      })}
    </div>
  )

  const moduleNames = {
    1: 'Module 1 — From Paragraph to Essay',
    2: 'Module 2 — Advantages & Disadvantages Essays',
    3: 'Module 3 — Cause & Effect Essays',
    4: 'Module 4 — Argumentative Essays'
  }

  return (
    <ModuleLayout moduleNumber={4} moduleName={moduleNames[4]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <div dangerouslySetInnerHTML={{ __html: `
          <div class="page-banner" style="background: linear-gradient(135deg, #093C5D, #3B7597);">
            <h1>4.2  Interactive Activities</h1>
            <p class="banner-sub">6 activities with instant feedback. Work in order — they get progressively harder.</p>
          </div>
          <div class="info-box info-box-blue" style="margin-bottom:20px;">
            <h4>Before You Start</h4>
            <p style="margin:0;">Review the theory resources below, then complete all 6 activities.
              <ul style="margin-top:6px; margin-bottom:0; padding-left:18px; font-size:0.88em;">
                <li>Activities 1–2 focus on recognising and labelling the parts of an opinion essay.</li>
                <li>Activities 3–4 practise forming thesis statements and completing body paragraphs.</li>
                <li>Activities 5–6 are knowledge quizzes with multiple-choice questions.</li>
              </ul>
            </p>
          </div>
          <h2 class="section-title">Theory Resources</h2>
          <p style="margin-bottom:16px;">Review these resources before attempting the activities below.</p>
        ` }} />

        {/* ── PDF THEORY ACCORDIONS ── */}
        <div className="accordion">
          <div className="accordion-item">
            <button className={`accordion-header ${activeAccordion === 0 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>
              <span>Essay Organization</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 0 && (
              <div className="accordion-content active">
                <embed src="/pdfs/essay_organization.pdf" type="application/pdf" width="100%" height="900px" style={{ borderRadius: '6px' }} />
              </div>
            )}
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <button className={`accordion-header ${activeAccordion === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)}>
              <span>Thesis Statement</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 1 && (
              <div className="accordion-content active">
                <embed src="/pdfs/thesis.pdf" type="application/pdf" width="100%" height="900px" style={{ borderRadius: '6px' }} />
              </div>
            )}
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <button className={`accordion-header ${activeAccordion === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)}>
              <span>Body Paragraphs</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 2 && (
              <div className="accordion-content active">
                <embed src="/pdfs/body.pdf" type="application/pdf" width="100%" height="900px" style={{ borderRadius: '6px' }} />
              </div>
            )}
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <button className={`accordion-header ${activeAccordion === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)}>
              <span>Conclusion</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 3 && (
              <div className="accordion-content active">
                <embed src="/pdfs/conclusion.pdf" type="application/pdf" width="100%" height="900px" style={{ borderRadius: '6px' }} />
              </div>
            )}
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <button className={`accordion-header ${activeAccordion === 4 ? 'active' : ''}`} onClick={() => toggleAccordion(4)}>
              <span>Sample Essay</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 4 && (
              <div className="accordion-content active">
                <embed src="/pdfs/sample.pdf" type="application/pdf" width="100%" height="900px" style={{ borderRadius: '6px' }} />
              </div>
            )}
          </div>
        </div>

        {/* ── INTERACTIVE ACTIVITIES HEADER ── */}
        <div dangerouslySetInnerHTML={{ __html: `<h2 class="section-title" style="margin-top:32px;">Interactive Activities</h2><p style="margin-bottom:16px;">Complete all 6 activities with instant feedback. Work in order — they get progressively harder.</p>` }} />

        {/* ── ACTIVITY 1: Identifying Opinion Essay Prompts ── */}
        <div className="accordion">
          <div className="accordion-item">
            <button className={`accordion-header ${activeAccordion === 5 ? 'active' : ''}`} onClick={() => toggleAccordion(5)}>
              <span>Identifying Opinion Essay Prompts</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 5 && (
              <div className="accordion-content active">
                <div className="act-body">
                  <div className="tip-box">
                    For each prompt, decide whether it is an <strong>Argumentative</strong> (opinion) essay prompt or <strong>Not Argumentative</strong>. Click your answer, then click <strong>Check All</strong>.
                  </div>
                  <p style={{ fontSize: '0.84em', color: 'var(--text-muted)', marginBottom: '10px' }}>
                    Tip: argumentative prompts typically use words like <em>agree/disagree, justify, discuss your views, to what extent, in your opinion</em>.
                  </p>
                  {A1_PROMPTS.map(item => {
                    const answered = a1Answers[item.id]
                    const isCorrect = a1Checked && answered === item.answer
                    const isWrong = a1Checked && answered && answered !== item.answer
                    return (
                      <div key={item.id} style={{ marginBottom: '10px', padding: '12px 14px', borderRadius: '6px', background: isCorrect ? '#e8f5e9' : isWrong ? '#fce4ec' : '#f9f9f9', border: `1px solid ${isCorrect ? '#a5d6a7' : isWrong ? '#ef9a9a' : '#e0e0e0'}` }}>
                        <p style={{ margin: '0 0 8px 0', fontSize: '0.91em', lineHeight: '1.6', fontStyle: 'italic' }}>{item.text}</p>
                        <div>
                          <button style={twoChoiceBtnStyle(answered === 'arg', 'a')} onClick={() => !a1Checked && setA1Answers({ ...a1Answers, [item.id]: 'arg' })}>Argumentative</button>
                          <button style={twoChoiceBtnStyle(answered === 'not', 'b')} onClick={() => !a1Checked && setA1Answers({ ...a1Answers, [item.id]: 'not' })}>Not Argumentative</button>
                        </div>
                        {a1Checked && <p style={{ margin: '8px 0 0 0', fontSize: '0.83em', color: '#444' }}>{item.feedback}</p>}
                      </div>
                    )
                  })}
                  <button className="check-btn" onClick={() => setA1Checked(true)}>Check All</button>
                  <button className="retry-btn" onClick={() => { setA1Answers({}); setA1Checked(false) }}>Reset</button>
                  {a1Checked && (
                    <ScoreBox
                      correct={A1_PROMPTS.filter(i => a1Answers[i.id] === i.answer).length}
                      total={A1_PROMPTS.length}
                      good="All correct — excellent!"
                      review="Review the feedback shown under each prompt."
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── ACTIVITY 2: Match the Parts ── */}
        <div className="accordion">
          <div className="accordion-item">
            <button className={`accordion-header ${activeAccordion === 6 ? 'active' : ''}`} onClick={() => toggleAccordion(6)}>
              <span>Match the Parts of an Opinion Essay</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 6 && (
              <div className="accordion-content active">
                <div className="act-body">
                  <div className="tip-box">
                    Click the correct label for each sentence: <strong>BG</strong> = Background &nbsp;·&nbsp; <strong>TH</strong> = Thesis &nbsp;·&nbsp; <strong>CL</strong> = Claim (Topic Sentence) &nbsp;·&nbsp; <strong>EV</strong> = Evidence/Example &nbsp;·&nbsp; <strong>CO</strong> = Conclusion
                  </div>
                  <p style={{ fontSize: '0.84em', color: 'var(--text-muted)', marginBottom: '10px' }}>Essay topic: Should social media be regulated by governments?</p>
                  {A2_SENTENCES.map(s => (
                    <div key={s.id} style={{ marginBottom: '10px', padding: '10px 14px', background: '#f9f9f9', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
                      <p style={{ margin: '0 0 8px 0', fontSize: '0.91em', lineHeight: '1.6' }}>{s.text}</p>
                      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px' }}>
                        {['BG', 'TH', 'CL', 'EV', 'CO'].map(label => (
                          <button key={label} style={labelBtnStyle(a2Labels[s.id] === label)} onClick={() => !a2Result && setA2Labels({ ...a2Labels, [s.id]: label })}>{label}</button>
                        ))}
                        {a2Result && (
                          <span style={{ marginLeft: '8px', fontSize: '0.82em', color: a2Labels[s.id] === s.answer ? '#2e7d32' : '#c62828', fontWeight: '600' }}>
                            {a2Labels[s.id] === s.answer ? 'Correct' : `Incorrect — answer: ${s.answer}`}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                  <button className="check-btn" onClick={checkA2}>Check My Labels</button>
                  <button className="retry-btn" onClick={() => { setA2Labels({}); setA2Result(null) }}>Reset</button>
                  {a2Result && <ScoreBox correct={a2Result.correct} total={a2Result.total} good="All correct — well done!" review="Review the highlighted sentences above." />}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── ACTIVITY 3: Arrange the Thesis Statement Words (3 exercises) ── */}
        <div className="accordion">
          <div className="accordion-item">
            <button className={`accordion-header ${activeAccordion === 7 ? 'active' : ''}`} onClick={() => toggleAccordion(7)}>
              <span>Thesis Statement — Arrange the Words</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 7 && (
              <div className="accordion-content active">
                <div className="act-body">
                  <div className="tip-box">
                    Click the words in the correct order to build each thesis statement. Click a placed word to remove it. When all words are placed, click <strong>Check</strong>.
                  </div>

                  {A3_EXERCISES.map((ex, ei) => {
                    const pool = a3Pools[ei]
                    const built = a3Builts[ei]
                    const checked = a3Checkeds[ei]
                    const score = built.filter((w, i) => w === ex.words[i]).length
                    return (
                      <div key={ei} style={{ marginBottom: ei < A3_EXERCISES.length - 1 ? '28px' : '0', paddingBottom: ei < A3_EXERCISES.length - 1 ? '28px' : '0', borderBottom: ei < A3_EXERCISES.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
                        <p style={{ fontWeight: '700', fontSize: '0.92em', color: '#1a4a8a', marginBottom: '4px' }}>{ex.label}</p>
                        <p style={{ fontSize: '0.83em', color: 'var(--text-muted)', marginBottom: '12px' }}>{ex.topic}</p>

                        <p style={{ fontSize: '0.78em', fontWeight: '600', color: '#555', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Word Bank — click to place:</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px', padding: '12px', background: '#f0f4ff', borderRadius: '8px', border: '1px solid #c5cae9', minHeight: '48px' }}>
                          {pool.length === 0
                            ? <span style={{ color: '#999', fontSize: '0.88em', alignSelf: 'center' }}>All words placed below.</span>
                            : pool.map((word, wi) => (
                              <button key={wi} onClick={() => a3AddWord(ei, wi)} style={{ padding: '4px 11px', borderRadius: '20px', border: '1.5px solid #1a4a8a', background: '#fff', color: '#1a4a8a', fontSize: '0.9em', cursor: 'pointer', fontWeight: '500' }}>
                                {word}
                              </button>
                            ))
                          }
                        </div>

                        <p style={{ fontSize: '0.78em', fontWeight: '600', color: '#555', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Your thesis — click a word to remove it:</p>
                        <div style={{ padding: '12px', background: '#fff', borderRadius: '8px', border: '2px dashed #bbb', minHeight: '48px', marginBottom: '12px' }}>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {built.length === 0
                              ? <span style={{ color: '#bbb', fontSize: '0.88em' }}>Click words above to build your thesis…</span>
                              : built.map((word, wi) => {
                                const isCorrect = checked && word === ex.words[wi]
                                const isWrong = checked && word !== ex.words[wi]
                                return (
                                  <button
                                    key={wi}
                                    onClick={() => a3RemoveWord(ei, wi)}
                                    disabled={checked}
                                    style={{ padding: '4px 11px', borderRadius: '20px', border: `1.5px solid ${isCorrect ? '#4caf50' : isWrong ? '#f44336' : '#1a4a8a'}`, background: isCorrect ? '#e8f5e9' : isWrong ? '#fce4ec' : '#e3f2fd', color: isCorrect ? '#1b5e20' : isWrong ? '#b71c1c' : '#1a4a8a', fontSize: '0.9em', cursor: checked ? 'default' : 'pointer', fontWeight: '500' }}
                                  >{word}</button>
                                )
                              })
                            }
                          </div>
                        </div>

                        <button className="check-btn" onClick={() => a3Check(ei)} disabled={built.length !== ex.words.length || checked}>Check</button>
                        <button className="retry-btn" onClick={() => a3Reset(ei)}>Reset</button>

                        {checked && (
                          <>
                            <ScoreBox
                              correct={score}
                              total={ex.words.length}
                              good="Perfect — you formed the thesis correctly!"
                              review="Some words are in the wrong position. The correct thesis is shown below."
                            />
                            {score < ex.words.length && (
                              <div style={{ marginTop: '10px', padding: '10px 14px', background: '#e8f5e9', borderRadius: '6px', border: '1px solid #a5d6a7', fontSize: '0.88em' }}>
                                <strong>Correct thesis:</strong> <em>"{ex.words.join(' ')}"</em>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── ACTIVITY 4: Missing Sentence in Body Paragraph (3 exercises) ── */}
        <div className="accordion">
          <div className="accordion-item">
            <button className={`accordion-header ${activeAccordion === 8 ? 'active' : ''}`} onClick={() => toggleAccordion(8)}>
              <span>Missing Sentence in Body Paragraph</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 8 && (
              <div className="accordion-content active">
                <div className="act-body">
                  <div className="tip-box">
                    Read each body paragraph below. One sentence is missing. Choose the option (A–D) that best completes the paragraph, then click <strong>Check</strong>.
                  </div>

                  {A4_EXERCISES.map((ex, ei) => {
                    const answer = a4Answers[ei]
                    const checked = a4Checkeds[ei]
                    return (
                      <div key={ei} style={{ marginBottom: ei < A4_EXERCISES.length - 1 ? '28px' : '0', paddingBottom: ei < A4_EXERCISES.length - 1 ? '28px' : '0', borderBottom: ei < A4_EXERCISES.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
                        <p style={{ fontWeight: '700', fontSize: '0.92em', color: '#1a4a8a', marginBottom: '4px' }}>{ex.label}</p>
                        <p style={{ fontSize: '0.83em', color: 'var(--text-muted)', marginBottom: '10px' }}>{ex.topic}</p>

                        <div style={{ padding: '14px 16px', background: '#fff', borderRadius: '6px', border: '1px solid #e0e0e0', fontSize: '0.91em', lineHeight: '1.8', marginBottom: '14px' }}>
                          <span>{ex.before} </span>
                          <span style={{ display: 'inline-block', background: '#fff3cd', border: '2px dashed #f9a825', borderRadius: '4px', padding: '2px 12px', margin: '0 4px', color: '#795548', fontWeight: '600', fontSize: '0.88em' }}>[ Missing sentence ]</span>
                          <span> {ex.after}</span>
                        </div>

                        <p style={{ fontSize: '0.84em', fontWeight: '600', color: '#555', marginBottom: '10px' }}>Which sentence belongs in the gap?</p>
                        {ex.options.map(opt => {
                          const isSelected = answer === opt.id
                          const isCorrect = opt.id === ex.correct
                          let bg = '#f9f9f9', border = '#e0e0e0', color = '#444'
                          if (!checked && isSelected) { bg = '#e3f2fd'; border = '#1a4a8a'; color = '#1a4a8a' }
                          if (checked && isSelected && isCorrect) { bg = '#e8f5e9'; border = '#4caf50'; color = '#1b5e20' }
                          if (checked && isSelected && !isCorrect) { bg = '#fce4ec'; border = '#f44336'; color = '#b71c1c' }
                          if (checked && !isSelected && isCorrect) { bg = '#f1f8e9'; border = '#81c784'; color = '#2e7d32' }
                          return (
                            <div key={opt.id}>
                              <button
                                onClick={() => a4SetAnswer(ei, opt.id)}
                                style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 14px', borderRadius: '6px', marginBottom: '6px', cursor: checked ? 'default' : 'pointer', border: `1.5px solid ${border}`, background: bg, color, fontSize: '0.89em', lineHeight: '1.5' }}
                              >
                                <strong style={{ marginRight: '8px' }}>{opt.id}.</strong>{opt.text}
                              </button>
                              {checked && (isSelected || isCorrect) && (
                                <p style={{ margin: '-2px 0 8px 4px', fontSize: '0.82em', color: '#444', fontStyle: 'italic' }}>{ex.feedback[opt.id]}</p>
                              )}
                            </div>
                          )
                        })}
                        <button className="check-btn" onClick={() => a4Check(ei)} disabled={!answer || checked}>Check</button>
                        <button className="retry-btn" onClick={() => a4Reset(ei)}>Reset</button>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── ACTIVITY 5: Supporting Ideas Quiz ── */}
        <div className="accordion">
          <div className="accordion-item">
            <button className={`accordion-header ${activeAccordion === 9 ? 'active' : ''}`} onClick={() => toggleAccordion(9)}>
              <span>Supporting Ideas Quiz</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 9 && (
              <div className="accordion-content active">
                <div className="act-body">
                  <div className="tip-box">
                    Choose the best answer for each question, then click <strong>Check All</strong> to see your score and feedback.
                  </div>
                  <QuizBlock questions={A5_QUESTIONS} answers={a5Answers} setAnswers={setA5Answers} checked={a5Checked} />
                  <button className="check-btn" onClick={() => setA5Checked(true)}>Check All</button>
                  <button className="retry-btn" onClick={() => { setA5Answers({}); setA5Checked(false) }}>Reset</button>
                  {a5Checked && (
                    <ScoreBox
                      correct={A5_QUESTIONS.filter(q => a5Answers[q.id] === q.answer).length}
                      total={A5_QUESTIONS.length}
                      good="All correct — excellent work!"
                      review="Review the feedback shown under each question."
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── ACTIVITY 6: Final Mixed Quiz ── */}
        <div className="accordion">
          <div className="accordion-item">
            <button className={`accordion-header ${activeAccordion === 10 ? 'active' : ''}`} onClick={() => toggleAccordion(10)}>
              <span>Final Quiz — Mixed Questions</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 10 && (
              <div className="accordion-content active">
                <div className="act-body">
                  <div className="tip-box">
                    Final review — choose the best answer for each question, then click <strong>Check All</strong>.
                  </div>
                  <QuizBlock questions={A6_QUESTIONS} answers={a6Answers} setAnswers={setA6Answers} checked={a6Checked} />
                  <button className="check-btn" onClick={() => setA6Checked(true)}>Check All</button>
                  <button className="retry-btn" onClick={() => { setA6Answers({}); setA6Checked(false) }}>Reset</button>
                  {a6Checked && (
                    <ScoreBox
                      correct={A6_QUESTIONS.filter(q => a6Answers[q.id] === q.answer).length}
                      total={A6_QUESTIONS.length}
                      good="All correct — excellent work!"
                      review="Review the feedback shown under each question."
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: `
          <div class="info-box info-box-green" style="margin-top:24px;">
            <h4>All Activities Complete!</h4>
            <p style="margin:0;">If any activity was hard, revisit the theory resources above then retry. Ready to continue? Move on to Section 4.3 — Reading, Discussion &amp; Collaboration.</p>
          </div>` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module4/lesson-1"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module4/lesson-3"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
