import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module2Page() {
  const [activeAccordion, setActiveAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <ModuleLayout
      moduleNumber={2}
      moduleName="Module 2 — Advantages & Disadvantages Essays"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div class="page-banner">
          <h1>Module Overview</h1>
          {/* <p class="banner-sub">10 activities with instant feedback. Work in order, they get progressively harder.</p> */}
          <div class="banner-tags">
            {/* <span class="banner-tag">Week 2–3</span>
            <span class="banner-tag">Instant feedback</span>
            <span class="banner-tag">Retry anytime</span> */}
          </div>
        </div>
      

      {/* Module Overview */}
      <p>
        Module 2 builds on the foundations from Module 1. In this module, you will write your first full academic essay: an advantages and disadvantages essay. This essay type requires you to present multiple perspectives on a topic in a balanced way, demonstrating critical thinking and analytical skills.
      </p>

      <ul className="objectives-list">
        <li>Understand the structure of advantages and disadvantages essays</li>
        <li>Analyze multiple perspectives on a topic</li>
        <li>Use topic sentences and supporting ideas effectively</li>
        <li>Write a 4-paragraph essay (500–700 words)</li>
        <li>Apply academic writing conventions and formal language</li>
      </ul>


      {/* Module Structure */}
      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-header ${activeAccordion === 0 ? 'active' : ''}`}
            onClick={() => toggleAccordion(0)}
          >
            <span>Module Structure</span>
            <span className="accordion-icon">▼</span>
          </button>
          {activeAccordion === 0 && (
            <div className={`accordion-content ${activeAccordion === 0 ? 'active' : ''}`}>
              <p>Work through the sections below in order. Each section builds on the previous one.</p>

              <div className="module-steps">
                <div className="step-row">
                  <div className="step-num">1</div>
                  <div className="step-body">
                    <h4>2.1 — Orientation & Activation</h4>
                    <p>Welcome to Module 2, review learning objectives, and understand the advantages/disadvantages essay format.</p>
                  </div>
                </div>
                <div className="step-row">
                  <div className="step-num">2</div>
                  <div className="step-body">
                    <h4>2.2 — Theory & Knowledge Building</h4>
                    <p>Learn about advantages/disadvantages essay structure, balanced argument development, and relevant academic vocabulary.</p>
                  </div>
                </div>
                <div className="step-row">
                  <div className="step-num">3</div>
                  <div className="step-body">
                    <h4>2.3 — Interactive Activities</h4>
                    <p>Practice identifying advantages/disadvantages, organizing arguments, and writing supporting paragraphs with immediate feedback.</p>
                  </div>
                </div>
                <div className="step-row">
                  <div className="step-num">4</div>
                  <div className="step-body">
                    <h4>2.4 — Reading, Discussion & Collaboration</h4>
                    <p>Read sample advantages/disadvantages essays, analyze their structure, and discuss with classmates.</p>
                  </div>
                </div>
                <div className="step-row">
                  <div className="step-num">5</div>
                  <div className="step-body">
                    <h4>2.5 — Writing Practice & Submission</h4>
                    <p>Write a 500–700 word advantages/disadvantages essay. Submit your draft for formative feedback, then final version for grading (10% of course grade).</p>
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
            <span>Module 2 Assessment</span>
            <span className="accordion-icon">▼</span>
          </button>
          {activeAccordion === 1 && (
            <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                  <h4>Discussion</h4>
                  <p>
                    You will write your opinion on the materials taught in class.
                    </p>
                    <br></br>
                  <h4>Graded Essay Assignment</h4>
                  <ul style={{ marginLeft: '16px' }}>
                    <li>Write a 500–700 word advantages and disadvantages essay.</li>
                    <li>This is your <strong>first graded essay (10% of your course grade)</strong>.</li>
                    <li>You will receive a score of 0–5 in each of the four rubric categories.</li>
                  </ul>
                
              </div>
          )}
        </div>
      </div>

      {/* Tips */}
      <div className="info-box info-box-orange">
        <h4>Tips for Success in Module 2</h4>
        <ul style={{ margin: 0 }}>
          <li>Remember the structure: Introduction → Advantages paragraph → Disadvantages paragraph → Conclusion</li>
          <li>Present both sides fairly and balance your discussion</li>
          <li>Use transition words to move between advantages and disadvantages</li>
          <li>Provide specific examples or explanations for each point</li>
          <li>Consult the rubric before submitting your essay</li>
        </ul>
      </div>

      {/* Navigation */}
      <div style={{ marginTop: '28px', textAlign: 'center' }}>
        <Link to="/module2" className="btn btn-primary" style={{ fontSize: '1em', padding: '12px 32px' }}>
          Start Module 2 → 2.1 Orientation & Activation
        </Link>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn-outline">
          ← Back to Home
        </Link>
        <Link to="/module1" className="btn btn-outline">
          ← Back to Module 1
        </Link>
      </div>

      </div>
    </ModuleLayout>
  )
}
