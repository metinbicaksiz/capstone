import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module3Page() {
  const [activeAccordion, setActiveAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <ModuleLayout
      moduleNumber={3}
      moduleName="Module 3 — Cause & Effect Essays"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <div class="page-banner">
        <h1>Module Overview</h1>
        <p class="banner-sub">Welcome to Module 3. Start here — watch the welcome video, review objectives, and understand the cause and effect essay format.</p>
      </div>

      {/* Module Overview */}
      <p>
        Module 3 introduces cause and effect essay writing. In this module, you will explore how events, actions, or conditions lead to results. This essay type develops your analytical skills and teaches you to explain complex relationships between ideas. You will integrate sources and develop sophisticated arguments.
      </p>

      <ul className="objectives-list">
        <li>Understand the structure of cause and effect essays</li>
        <li>Identify and explain causal relationships</li>
        <li>Use causal language and transitions effectively</li>
        <li>Develop multi-paragraph cause and effect arguments</li>
        <li>Write a 500–700 word cause and effect essay with sources</li>
      </ul>

      {/* Module Structure */}
      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-header ${activeAccordion === 0 ? 'active' : ''}`}
            onClick={() => toggleAccordion(0)}
          >
            <h2>Module Structure</h2>
            <span className="accordion-icon">▼</span>
          </button>
          {activeAccordion === 0 && (
            <div className={`accordion-content ${activeAccordion === 0 ? 'active' : ''}`}>
              <p>Work through the sections below in order. Each section builds on the previous one.</p>

              <div className="module-steps">
                <div className="step-row">
                  <div className="step-num">1</div>
                  <div className="step-body">
                    <h4>3.1 — Orientation & Activation</h4>
                    <p>Welcome to Module 3, review learning objectives, and explore examples of cause and effect essays.</p>
                  </div>
                </div>
                <div className="step-row">
                  <div className="step-num">2</div>
                  <div className="step-body">
                    <h4>3.2 — Theory & Knowledge Building</h4>
                    <p>Learn about cause and effect essay structure, causal language, and how to explain complex relationships clearly.</p>
                  </div>
                </div>
                <div className="step-row">
                  <div className="step-num">3</div>
                  <div className="step-body">
                    <h4>3.3 — Interactive Activities</h4>
                    <p>Practice identifying causes and effects, organizing arguments, and using causal transitions with immediate feedback.</p>
                  </div>
                </div>
                <div className="step-row">
                  <div className="step-num">4</div>
                  <div className="step-body">
                    <h4>3.4 — Reading, Discussion & Collaboration</h4>
                    <p>Analyze cause and effect essays, study how authors explain causal relationships, and discuss with classmates.</p>
                  </div>
                </div>
                <div className="step-row">
                  <div className="step-num">5</div>
                  <div className="step-body">
                    <h4>3.5 — Writing Practice & Submission</h4>
                    <p>Write a 500–700 word cause and effect essay. Submit draft for formative feedback, then final version for grading (10% of course grade).</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Assessment */}
      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-header ${activeAccordion === 1 ? 'active' : ''}`}
            onClick={() => toggleAccordion(1)}
          >
            <h2>Module 3 Assessment</h2>
            <span className="accordion-icon">▼</span>
          </button>
          {activeAccordion === 1 && (
            <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
              <div>
                <h4>Discussion & Collaboration</h4>
                <p>
                  You will be assigned two articles to read. After completing the readings, you will write a 150–200-word discussion post describing the ideas you found most interesting, your main takeaway, and how the reading connects to your own experience or observations. You will also read and respond to your classmates' discussion posts with meaningful comments. Your discussion post and comments will count toward your course participation grade.
                </p>
              </div>
              <br/>
              <div>
                <h4>Graded Essay Assignment</h4>
                <ul style={{ marginLeft: '16px' }}>
                  <li>You will choose one of two cause-and-effect essay prompts based on the articles you read for the discussion.</li>
                  <li>You will write a 500–700-word cause-and-effect essay, focusing on the causes, the effects, or both. </li>
                  <li>This is your second graded essay and is worth 10% of your course grade. </li>
                  <li>Your essay will be evaluated using the four-category writing rubric.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tips */}
      <div className="info-box info-box-orange">
        <h4>💡 Tips for Success in Module 3</h4>
        <ul style={{ margin: 0 }}>
          <li>Use causal language: because, as a result, consequently, led to, caused by</li>
          <li>Consider both immediate and long-term effects</li>
          <li>Avoid oversimplifying complex causal relationships</li>
          <li>Use transition words to show cause-effect relationships clearly</li>
          <li>Support each causal claim with evidence or explanation</li>
        </ul>
      </div>

      {/* Navigation */}
      <div style={{ marginTop: '28px', textAlign: 'center' }}>
        <Link to="/module3" className="btn btn-primary" style={{ fontSize: '1em', padding: '12px 32px' }}>
          Start Module 3 → 3.1 Orientation & Activation
        </Link>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn-outline">
          ← Back to Home
        </Link>
        <Link to="/module2" className="btn btn-outline">
          ← Back to Module 2
        </Link>
      </div>

      </div>
    </ModuleLayout>
  )
}
