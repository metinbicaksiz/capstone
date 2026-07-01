import { useState } from 'react'
import './DiagnosticPages.css'

const GRAMMAR_QUESTIONS = [
  {
    category: 'Sentence Types',
    icon: '🔤',
    q: 'Which of the following is a COMPLEX sentence?',
    opts: [
      'Technology changes communication.',
      'Social media is popular, but it can cause problems.',
      'Although learning English is challenging, it opens many opportunities.',
      'Students study hard and they succeed.'
    ],
    ans: 2,
    exp: 'A complex sentence has one main clause + one subordinate clause joined by a subordinating conjunction (although, because, since, while, if). Option C: subordinate clause = "Although learning English is challenging" → main clause = "it opens many opportunities". Options B and D are compound.'
  },
  {
    category: 'Sentence Types',
    icon: '🔤',
    q: 'Which of the following is a COMPOUND sentence?',
    opts: [
      'Regular exercise improves both physical and mental health.',
      'Many students find English difficult because of complex grammar rules.',
      'Reading improves vocabulary, and writing develops grammar skills.',
      'Despite the challenges, most students succeed with practice.'
    ],
    ans: 2,
    exp: 'A compound sentence joins two independent clauses with a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so). Option C has two independent clauses joined by "and". Option B is complex. Options A and D are simple sentences.'
  },
  {
    category: 'Sentence Types',
    icon: '🔤',
    q: 'What type of sentence is this? "Because universities provide diverse career opportunities, many students move to large cities."',
    opts: ['Simple', 'Compound', 'Complex', 'Compound-complex'],
    ans: 2,
    exp: 'This is a complex sentence. "Because" introduces the subordinate clause "Because universities provide diverse career opportunities". Main clause is "many students move to large cities".'
  },
  {
    category: 'Connectors & Transitions',
    icon: '🔗',
    q: 'Which connector is used to add an additional point that supports the same argument?',
    opts: ['However', 'Consequently', 'Furthermore', 'Although'],
    ans: 2,
    exp: 'Furthermore (also: moreover, additionally, in addition) signals that you are adding another point. "However" = contrast. "Consequently" = result. "Although" = concession.'
  },
  {
    category: 'Connectors & Transitions',
    icon: '🔗',
    q: 'Choose the best word to complete this sentence: "Exercise improves physical health. ___, it also reduces stress and anxiety."',
    opts: ['However', 'Although', 'Furthermore', 'Consequently'],
    ans: 2,
    exp: 'Furthermore is correct because the second sentence adds ANOTHER benefit of exercise (mental health). We are not showing contrast or a cause-effect relationship.'
  },
  {
    category: 'Connectors & Transitions',
    icon: '🔗',
    q: 'Which sentence correctly shows cause and effect?',
    opts: [
      'Exercise is beneficial; however, many people avoid it.',
      'Many people avoid exercise, although it is beneficial.',
      'Exercise improves health. Furthermore, it is enjoyable.',
      'Many people do not exercise regularly; consequently, rates of lifestyle diseases are increasing.'
    ],
    ans: 3,
    exp: 'Option D uses "consequently" correctly: not exercising (cause) → increase in disease rates (effect). "Consequently" always introduces a result.'
  },
  {
    category: 'Formal & Informal Language',
    icon: '🎓',
    q: 'Which sentence is most appropriate for academic writing?',
    opts: [
      'I think social media is bad for teenagers.',
      'Social media is really bad for young people and stuff.',
      'It can be argued that social media has a negative impact on adolescents.',
      'Don\'t you think social media is harmful?'
    ],
    ans: 2,
    exp: 'Option C is correct: third person, formal vocabulary (argued, negative impact, adolescents), no personal opinion markers. Options A and B are informal. Option D is a direct question.'
  },
  {
    category: 'Formal & Informal Language',
    icon: '🎓',
    q: 'Which of the following should you AVOID in academic writing?',
    opts: ['it is argued that', 'a significant number of', "it's clear that", 'however'],
    ans: 2,
    exp: 'Option C contains a contraction (it\'s = it is). Contractions are informal and must be avoided in academic writing. Always write the full form.'
  },
  {
    category: 'Formal & Informal Language',
    icon: '🎓',
    q: 'Which is the most formal academic replacement for "a lot of"?',
    opts: ['loads of', 'a significant number of', 'a huge amount of', 'so many'],
    ans: 1,
    exp: '"A significant number of" is the most formal academic alternative. Other formal options: a considerable number of, numerous, a substantial proportion of.'
  },
  {
    category: 'Verb Forms in Academic Writing',
    icon: '⚙️',
    q: 'In academic writing, general truths and accepted facts are normally expressed in which tense?',
    opts: ['Past simple', 'Present perfect', 'Present simple', 'Future simple'],
    ans: 2,
    exp: 'The present simple expresses general truths and things that are always or generally true: "Exercise improves health."'
  },
  {
    category: 'Verb Forms in Academic Writing',
    icon: '⚙️',
    q: 'Which sentence correctly uses passive voice?',
    opts: [
      'The researchers conducted the study in 2020.',
      'The study was conducted by researchers in 2020.',
      'Researchers are conducting the study in 2020.',
      'The study has been conducting since 2020.'
    ],
    ans: 1,
    exp: 'Option B is correct. Passive voice = subject + be + past participle: "The study WAS CONDUCTED". The subject receives the action.'
  },
  {
    category: 'Verb Forms in Academic Writing',
    icon: '⚙️',
    q: 'Which sentence has correct subject-verb agreement?',
    opts: [
      'The number of students who use social media are increasing.',
      'A large number of studies shows that exercise is beneficial.',
      'The results of the research shows a clear pattern.',
      'A significant number of researchers argue that sleep is essential.'
    ],
    ans: 3,
    exp: 'Option D is correct. Key rules: "The number of" + noun → SINGULAR verb. "A number of / A significant number of" → PLURAL verb.'
  },
  {
    category: 'Punctuation',
    icon: '📍',
    q: 'When a complex sentence starts with the subordinate clause, where does the comma go?',
    opts: [
      'Before the subordinating conjunction',
      'After the subordinate clause, before the main clause',
      'At the end of the sentence',
      'No comma is needed in complex sentences'
    ],
    ans: 1,
    exp: 'When the subordinate clause comes FIRST, a comma separates it from the main clause: "Although learning is challenging, it is rewarding."'
  },
  {
    category: 'Punctuation',
    icon: '📍',
    q: 'Which sentence is punctuated correctly?',
    opts: [
      'Social media has many benefits, however it also has drawbacks.',
      'Social media has many benefits; however, it also has drawbacks.',
      'Social media has many benefits however, it also has drawbacks.',
      'Social media has many benefits however it also has drawbacks.'
    ],
    ans: 1,
    exp: 'Option B is correct. "However" is a conjunctive adverb, not a coordinating conjunction, so correct pattern is: independent clause ; however, independent clause.'
  },
  {
    category: 'Punctuation',
    icon: '📍',
    q: 'Which of the following is a COMMA SPLICE (a punctuation error)?',
    opts: [
      'Exercise is beneficial, and many doctors recommend it.',
      'Exercise is beneficial; many doctors recommend it.',
      'Exercise is beneficial, many doctors recommend it.',
      'Exercise is beneficial. Many doctors recommend it.'
    ],
    ans: 2,
    exp: 'Option C is a comma splice — two independent clauses joined with ONLY a comma. Fixes: add a coordinating conjunction (Option A), use a semicolon (Option B), or split into two sentences (Option D).'
  }
]

export default function GrammarDiagnosticPage() {
  const [userAnswers, setUserAnswers] = useState(Array(GRAMMAR_QUESTIONS.length).fill(null))
  const [submitted, setSubmitted] = useState(false)

  const handleAnswer = (questionIndex, optionIndex) => {
    if (!submitted) {
      const newAnswers = [...userAnswers]
      newAnswers[questionIndex] = optionIndex
      setUserAnswers(newAnswers)
    }
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const handleRetry = () => {
    setUserAnswers(Array(GRAMMAR_QUESTIONS.length).fill(null))
    setSubmitted(false)
  }

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, idx) => {
      return answer === GRAMMAR_QUESTIONS[idx].ans ? score + 1 : score
    }, 0)
  }

  const score = calculateScore()
  const answeredCount = userAnswers.filter((ans) => ans !== null).length

  const getScoreMessage = () => {
    const percentage = Math.round((score / GRAMMAR_QUESTIONS.length) * 100)
    if (percentage >= 85) return { msg: 'Excellent! You have strong grammar foundations.', class: 's-great' }
    if (percentage >= 70) return { msg: 'Good! You understand most grammar concepts. Review the areas below.', class: 's-good' }
    if (percentage >= 50) return { msg: 'Fair. Review the grammar areas below before starting Module 1.', class: 's-fair' }
    return { msg: 'Focus on grammar review materials before starting the course.', class: 's-low' }
  }

  return (
    <div className="page-container">
      <div className="page-banner" style={{ background: 'linear-gradient(135deg,#1a4a8a,#2e86c1)' }}>
        <div className="banner-icon">📝</div>
        <h1>Grammar Diagnostic Test</h1>
        <p className="banner-sub">15 questions · 5 grammar areas · Instant score + detailed feedback after submission</p>
        <div className="banner-tags">
          <span className="banner-tag">📅 Complete in Week 1</span>
          <span className="banner-tag">⏱ ~15 minutes</span>
          <span className="banner-tag">🎯 Not graded — honest answers only</span>
          <span className="banner-tag">🔄 Retry anytime</span>
        </div>
      </div>

      <div className="quiz-wrap">
        <div className="info-box info-box-blue">
          <h4>📌 Instructions</h4>
          <p>
            This is a <strong>diagnostic</strong> — it is not graded. Answer all questions honestly without using dictionaries or notes. After submitting, read every explanation carefully: they show you exactly what to review before starting the module activities.
          </p>
        </div>

        {/* Results Panel */}
        {submitted && (
          <div className="results-panel">
            <h2>📊 Your Diagnostic Results</h2>
            <div className={`score-hero ${getScoreMessage().class}`}>
              <div className="big-num">{score}/15</div>
              <div className="score-msg">{getScoreMessage().msg}</div>
            </div>

            <div className="info-box info-box-teal">
              <h4>📚 Recommended Next Steps</h4>
              <ul>
                <li>Review the explanations for any questions you got wrong</li>
                <li>Use the Grammar Reference Booklet from Course Study Materials</li>
                <li>Complete Module 1 Theory section on grammar</li>
                <li>Ask your instructor for support in tutorials</li>
              </ul>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button className="btn-retry" onClick={handleRetry}>
                🔄 Retake the Test
              </button>
              <a href="/materials" className="btn btn-primary" style={{ marginLeft: '14px' }}>
                Next: Study Materials →
              </a>
            </div>
          </div>
        )}

        {/* Quiz */}
        <div className="quiz-questions">
          {GRAMMAR_QUESTIONS.map((question, qIdx) => (
            <div key={qIdx} className="quiz-question-group">
              <div className="q-num">{qIdx + 1}</div>
              <div className="q-text">{question.q}</div>

              <div className="options">
                {question.opts.map((option, optIdx) => (
                  <label key={optIdx} className="opt-label">
                    <input
                      type="radio"
                      name={`q${qIdx}`}
                      checked={userAnswers[qIdx] === optIdx}
                      onChange={() => handleAnswer(qIdx, optIdx)}
                      disabled={submitted}
                    />
                    <span
                      className={
                        submitted
                          ? optIdx === question.ans
                            ? 'opt-correct'
                            : userAnswers[qIdx] === optIdx
                              ? 'opt-wrong'
                              : ''
                          : ''
                      }
                    >
                      {option}
                    </span>
                  </label>
                ))}
              </div>

              {submitted && (
                <div className="q-explanation">
                  <strong>Explanation:</strong> {question.exp}
                </div>
              )}
            </div>
          ))}
        </div>

        {!submitted && (
          <>
            <p className="ans-counter">{answeredCount} of 15 answered</p>
            <div className="submit-bar">
              <button className="btn-submit-quiz" onClick={handleSubmit} disabled={answeredCount < 15}>
                ✅ Submit All Answers & See Results
              </button>
              <p style={{ fontSize: '0.8em', color: 'var(--text-muted)', marginTop: '8px' }}>Answer all 15 questions, then click Submit.</p>
            </div>
          </>
        )}

        <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '40px' }}>
          <a href="/materials" className="btn btn-outline">
            ← Back to Study Materials
          </a>
        </div>
      </div>
    </div>
  )
}
