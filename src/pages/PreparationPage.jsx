import { Link } from 'react-router-dom'
import { useState } from 'react'
import './modules/ModulesPage.css'
import './PreparationPage.css'

export default function PreparationPage() {
  const [activeAccordion, setActiveAccordion] = useState(0)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const essayPrompts = [
    {
      number: 1,
      emoji: '1️⃣',
      color: '#eaf4fc',
      borderColor: 'var(--blue-dark)',
    },
    {
      number: 2,
      emoji: '2️⃣',
      color: '#eaf4fc',
      borderColor: 'var(--blue-dark)',
    },
    {
      number: 3,
      emoji: '3️⃣',
      color: '#eaf4fc',
      borderColor: 'var(--blue-dark)',
    }
  ]

  return (
    <div className="page-container">
      <div className="page-banner" style={{ background: 'linear-gradient(135deg, #1a4a8a, #2e86c1)' }}>
        <div className="banner-icon"></div>
        <h1>Preparation & Practice <br/>Argumentative Opinion Essays</h1>
        <p className="banner-sub">Practice writing 4-paragraph opinion essays using articles.</p>
        
      </div>

      {/* Overview */}
      <h2 className="section-title">Module Overview</h2>
      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-header ${activeAccordion === 0 ? 'active' : ''}`}
            onClick={() => toggleAccordion(0)}
          >
            <span>Instructions</span>
            <span className="accordion-icon">▼</span>
          </button>
          {activeAccordion === 0 && (
            <div className={`accordion-content ${activeAccordion === 0 ? 'active' : ''}`}>
              <ul className="instructions-checklist">
                <li>In this module, you will have the opportunity to practice writing 4-paragraph opinion essays to prepare for your university entrance English proficiency exam.</li>
                <li>You will apply the writing skills you have developed throughout the course in a low-stakes practice environment before completing your final assessment.</li>
                <li>You will practice integrating evidence from academic articles to support your ideas and strengthen your arguments.</li>
                <li>You will develop clear, logical, and well-supported opinions using persuasive language and appropriate academic reasoning.</li>
                <li>You will demonstrate your understanding of formal academic writing conventions, including organization, coherence, grammar, and academic vocabulary.</li>
                <li>You are required to complete at least three opinion essays. If you would like additional practice, you may complete one optional fourth essay.</li>
                <li>Each essay should be approximately 500–700 words in length.</li>
                <li>Your instructor will provide a summative grade for each submitted essay rather than detailed formative feedback.</li>
                <li>Please submit all required essays by the end of Week 14.</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Essay Prompts Grid */}
      <h2 className="section-title">Essay Practice Prompts</h2>
      <p>Each prompt includes background articles and requires you to write a 4-paragraph opinion essay.</p> <br/>

      <div className="essay-grid">
        {essayPrompts.map((prompt) => (
          <Link
            key={prompt.number}
            to={`/preparation/essay-${prompt.number}`}
            className="essay-card"
            style={{
              background: prompt.color,
              borderLeftColor: prompt.borderColor,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ fontSize: '1.8em' }}>{prompt.emoji}</div>
              <h3 style={{ margin: 0 }}>Essay Prompt {prompt.number}</h3>
            </div>
            <p style={{ flex: 1, fontSize: '0.9em', color: 'var(--text-muted)', marginBottom: '14px' }}>
              Opinion essay on assigned topic with supporting articles.
            </p>
            <span className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
              View Prompt & Submit →
            </span>
          </Link>
        ))}
      </div>

     
      {/* Tips for Success */}
      <h2 className="section-title">Tips for Success</h2>
      <div className="two-col">
        <div className="info-box info-box-teal">
          <h4>Before You Write</h4>
          <ul className="list-unstyled">
            <li>Read the essay prompt carefully</li>
            <li>Read the articles thoroughly</li>
            <li>Plan your argument and evidence</li>
            <li>Create a brief outline</li>
          </ul>
        </div>
        <div className="info-box info-box-green">
          <h4>After You Write</h4>
          <ul className="list-unstyled">
            <li>Check the rubric before submitting</li>
            <li>Proofread for grammar and spelling</li>
            <li>Verify you used article evidence</li>
            <li>Ensure 4-paragraph structure</li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn-outline">
          ← Back to Home
        </Link>
        <Link to="/preparation/essay-1" className="btn btn-primary">
          Start: Essay Prompt 1 →
        </Link>
      </div>
    </div>
  )
}
