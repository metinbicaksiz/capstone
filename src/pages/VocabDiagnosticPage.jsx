import { useState } from 'react'
import './DiagnosticPages.css'

const VOCAB_QUESTIONS = [
  // Part 1: Word Meanings
  {
    part: 1,
    targetWord: 'significant',
    q: 'What does significant mean?',
    opts: ['Large, important, or noticeable enough to have an effect', 'Very small or unimportant', 'Unclear or uncertain', 'Temporary or short-lived'],
    ans: 0,
    exp: '"Significant" describes something large, important, or noticeable. Example: "Exercise has a significant impact on mental health."'
  },
  {
    part: 1,
    targetWord: 'consequently',
    q: 'What does consequently mean?',
    opts: ['At the same time as something else', 'As a result of what was just mentioned', 'Despite what was just mentioned', 'In addition to what was just mentioned'],
    ans: 1,
    exp: '"Consequently" shows cause and effect. Example: "He did not study. Consequently, he failed the exam." = He failed BECAUSE he did not study.'
  },
  {
    part: 1,
    targetWord: 'evidence',
    q: 'What does evidence mean in academic writing?',
    opts: ['A personal opinion or belief', 'A conclusion at the end of an essay', 'Facts, data, or examples that support an argument', 'A question that needs to be answered'],
    ans: 2,
    exp: '"Evidence" = specific, verifiable information used to support a claim. It can be statistics, research findings, expert opinions, or examples.'
  },
  {
    part: 1,
    targetWord: 'factor',
    q: 'What does factor mean?',
    opts: ['The final result of a process', 'Something that contributes to or influences a result or situation', 'A type of grammar structure', 'A formal phrase used in conclusions'],
    ans: 1,
    exp: 'A factor is one of several elements that causes or influences something. Example: "Motivation is a key factor in academic success."'
  },
  {
    part: 1,
    targetWord: 'beneficial',
    q: 'What does beneficial mean?',
    opts: ['Harmful or dangerous', 'Related to money or finance', 'Producing good results; helpful or advantageous', 'Difficult or challenging'],
    ans: 2,
    exp: '"Beneficial" = having positive effects. Example: "Regular exercise is highly beneficial for both physical and mental health."'
  },

  // Part 2: Words in Context
  {
    part: 2,
    q: 'A new _____ to teaching vocabulary involves using images and authentic context sentences rather than translation.',
    blank: 'approach',
    opts: ['evidence', 'approach', 'factor', 'impact'],
    ans: 1,
    exp: '"Approach" means a method or way of doing something. We are describing HOW vocabulary is taught — a specific METHOD.'
  },
  {
    part: 2,
    q: 'The researchers found clear _____ that regular exercise reduces symptoms of depression and anxiety.',
    blank: 'evidence',
    opts: ['approach', 'significant', 'evidence', 'factor'],
    ans: 2,
    exp: '"Evidence" = facts/data/proof that support a claim. The researchers found PROOF.'
  },
  {
    part: 2,
    q: 'Living in a city has a _____ impact on a person\'s career opportunities and social life.',
    blank: 'significant',
    opts: ['consequently', 'significant', 'beneficial', 'approach'],
    ans: 1,
    exp: '"Significant" describes the SIZE of the impact — it is large and important.'
  },
  {
    part: 2,
    q: 'Motivation, time management, and strong study habits are key _____ in academic success.',
    blank: 'factors',
    opts: ['factors', 'evidence', 'approaches', 'impacts'],
    ans: 0,
    exp: '"Factors" (plural) = elements that contribute to a result. Motivation etc. are ELEMENTS that CAUSE academic success.'
  },
  {
    part: 2,
    q: 'Exercise improves physical health. _____, it has been shown to reduce stress and improve mental wellbeing.',
    blank: 'Furthermore',
    opts: ['However', 'Because', 'Furthermore', 'Although'],
    ans: 2,
    exp: '"Furthermore" adds an additional point supporting the same idea. We are ADDING another benefit of exercise (mental health).'
  }
]

export default function VocabDiagnosticPage() {
  const [userAnswers, setUserAnswers] = useState(Array(VOCAB_QUESTIONS.length).fill(null))
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
    setUserAnswers(Array(VOCAB_QUESTIONS.length).fill(null))
    setSubmitted(false)
  }

  const calculateScores = () => {
    let part1Score = 0
    let part2Score = 0

    VOCAB_QUESTIONS.forEach((q, idx) => {
      if (userAnswers[idx] === q.ans) {
        if (q.part === 1) part1Score++
        else part2Score++
      }
    })

    return { part1: part1Score, part2: part2Score, total: part1Score + part2Score }
  }

  const scores = calculateScores()
  const answeredCount = userAnswers.filter((ans) => ans !== null).length

  const getScoreMessage = () => {
    if (scores.total >= 8) return { msg: 'Excellent! You know the key academic vocabulary.', class: 's-great' }
    if (scores.total >= 6) return { msg: 'Good! You understand most academic vocabulary. Review areas below.', class: 's-good' }
    if (scores.total >= 4) return { msg: 'Fair. Study the Academic Word List before starting Module 1.', class: 's-fair' }
    return { msg: 'Focus on vocabulary review materials before starting the course.', class: 's-low' }
  }

  return (
    <div className="page-container">
      <div className="page-banner" style={{ background: 'linear-gradient(135deg,#117a65,#1abc9c)' }}>
        <div className="banner-icon">📘</div>
        <h1>Vocabulary Diagnostic Test</h1>
        <p className="banner-sub">10 questions · Part 1: Word meanings · Part 2: Words in context · Instant results after submission</p>
        <div className="banner-tags">
          <span className="banner-tag">📅 Complete in Week 1</span>
          <span className="banner-tag">⏱ ~10 minutes</span>
          <span className="banner-tag">🎯 Not graded — honest answers only</span>
          <span className="banner-tag">🔄 Retry anytime</span>
        </div>
      </div>

      <div className="quiz-wrap">
        <div className="info-box info-box-teal">
          <h4>📌 Instructions</h4>
          <p>
            This test checks your knowledge of <strong>academic vocabulary</strong> used throughout the course. It has two parts: (1) word meanings, and (2) choosing the right word in context. This is diagnostic — not graded. Answer honestly without a dictionary. After submitting, read the explanations: they give you collocations and example sentences to study.
          </p>
        </div>

        {/* Results Panel */}
        {submitted && (
          <div className="results-panel">
            <h2>📊 Your Vocabulary Results</h2>
            <div className={`score-hero ${getScoreMessage().class}`}>
              <div className="big-num">{scores.total}/10</div>
              <div className="score-msg">{getScoreMessage().msg}</div>
            </div>

            <div className="part-scores">
              <div className="part-score-box">
                <div className="psb-num">{scores.part1}/5</div>
                <div className="psb-label">Part 1: Word Meanings</div>
              </div>
              <div className="part-score-box">
                <div className="psb-num">{scores.part2}/5</div>
                <div className="psb-label">Part 2: Words in Context</div>
              </div>
            </div>

            <div className="info-box info-box-teal">
              <h4>📚 What to Do Next</h4>
              <ul>
                <li>Download the Academic Word List from Course Study Materials</li>
                <li>Review the explanations for questions you got wrong</li>
                <li>Study the vocabulary in context as you work through Module 1</li>
                <li>Use Wordwall games in each module for vocabulary practice</li>
              </ul>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button className="btn-retry" onClick={handleRetry}>
                🔄 Retake the Test
              </button>
              <a href="/module1" className="btn btn-primary" style={{ marginLeft: '14px' }}>
                Start Module 1 →
              </a>
            </div>
          </div>
        )}

        {/* Quiz */}
        <div className="quiz-questions">
          {VOCAB_QUESTIONS.map((question, qIdx) => (
            <div key={qIdx} className="quiz-question-group">
              {/* Part Headers */}
              {(qIdx === 0 || (qIdx === 5 && VOCAB_QUESTIONS[qIdx].part !== VOCAB_QUESTIONS[qIdx - 1].part)) && (
                <div className="part-header" style={{ backgroundColor: question.part === 1 ? 'var(--teal-dark)' : 'var(--blue-dark)' }}>
                  {question.part === 1 ? '📖 Part 1 — Word Meanings (Questions 1–5)' : '✏️ Part 2 — Choose the Right Word in Context (Questions 6–10)'}
                </div>
              )}

              {qIdx === 5 && (
                <div className="word-bank">
                  <strong>📝 Word Bank — choose from these words:</strong>
                  <div className="bank-words">
                    <span className="wb-word">approach</span>
                    <span className="wb-word">beneficial</span>
                    <span className="wb-word">consequently</span>
                    <span className="wb-word">evidence</span>
                    <span className="wb-word">factor / factors</span>
                    <span className="wb-word">furthermore</span>
                  </div>
                </div>
              )}

              <div className="q-num">{qIdx + 1}</div>

              {question.part === 1 ? (
                <div className="q-text">
                  What does <span className="target-word">{question.targetWord}</span> mean?
                </div>
              ) : (
                <div className="q-text">
                  <div className="sentence-blank">{question.q}</div>
                </div>
              )}

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
            <p className="ans-counter">{answeredCount} of 10 answered</p>
            <div className="submit-bar">
              <button className="btn-submit-quiz" onClick={handleSubmit} disabled={answeredCount < 10}>
                ✅ Submit All Answers & See Results
              </button>
              <p style={{ fontSize: '0.8em', color: 'var(--text-muted)', marginTop: '8px' }}>Answer all 10 questions, then click Submit.</p>
            </div>
          </>
        )}

        <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '40px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/grammar-diagnostic" className="btn btn-outline">
            ← Grammar Diagnostic
          </a>
          <a href="/materials" className="btn btn-outline">
            Study Materials
          </a>
        </div>
      </div>
    </div>
  )
}
