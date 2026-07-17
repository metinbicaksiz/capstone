import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module4Page() {
  const [activeAccordion, setActiveAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <ModuleLayout
      moduleNumber={4}
      moduleName="Module 4 — Argumentative Essays"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

      <div className="page-banner" style={{ background: 'linear-gradient(135deg, #093C5D, #3B7597)' }}>
      <h1>Module Overview</h1>
      </div>

      {/* Module Overview */}
      <h2 className="section-title">Module Overview</h2>
      <div className="info-box info-box-blue">
      <p>
        Module 4 is your most challenging and important module. In this module, you will write an opinion essay with source integration, the culmination of skills from all previous modules. You will take a clear position on a topic and support it with evidence from provided academic articles. This essay type demonstrates mastery of academic writing.
      </p>
      </div>

      <ul className="objectives-list">
        <li>Develop and clearly state a personal opinion on an academic topic</li>
        <li>Support opinions with evidence from academic sources</li>
        <li>Integrate quotations and paraphrases appropriately</li>
        <li>Use academic language to build persuasive arguments</li>
        <li>Write a 500–700 word opinion essay with article sources</li>
        <li>Participate in peer review and respond to feedback</li>
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
              <p>Work through the sections below in order. This module has two assignments: a draft and a final essay.</p>

              <div className="module-steps">
                <div className="step-row">
                  <div className="step-num">1</div>
                  <div className="step-body">
                    <h4>4.1 — Orientation & Activation</h4>
                    <p>Welcome to Module 4, the final and most important module. Review learning objectives and understand the opinion essay format with sources.</p>
                  </div>
                </div>
                <div className="step-row">
                  <div className="step-num">2</div>
                  <div className="step-body">
                    <h4>4.2 — Theory & Knowledge Building</h4>
                    <p>Learn about opinion essay structure, how to integrate sources, effective persuasion techniques, and academic language.</p>
                  </div>
                </div>
                <div className="step-row">
                  <div className="step-num">3</div>
                  <div className="step-body">
                    <h4>4.3 — Interactive Activities</h4>
                    <p>Practice developing positions, analyzing sources, integrating evidence, and writing persuasive paragraphs with immediate feedback.</p>
                  </div>
                </div>
                <div className="step-row">
                  <div className="step-num">4</div>
                  <div className="step-body">
                    <h4>4.4 — Reading, Discussion & Collaboration</h4>
                    <p>Study the provided articles, analyze different perspectives, and discuss opinions with classmates in the forum.</p>
                  </div>
                </div>
                <div className="step-row">
                  <div className="step-num">5</div>
                  <div className="step-body">
                    <h4>4.5 — Writing Practice & Submission</h4>
                    <p>Write a 500–700 word opinion essay with article sources. Submit draft (formative feedback), peer review classmates, then submit final version for grading (10% of course grade).</p>
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
            <h2>Module Assessment</h2>
            <span className="accordion-icon">▼</span>
          </button>
          {activeAccordion === 1 && (
            <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
              <div className="info-box info-box-white" >
                <h4>Reading Discussion & Collaboration</h4>
                <p>
                  Active participation in the discussion forum is essential for this module. Through collaborative discussion, reflection, and peer interaction, you will refine your ideas, prepare for the writing tasks that follow, learn how to interpret and apply feedback effectively, and develop strategies for improving your academic writing.
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Deadline:</strong> Before the end of Week 10.
                </p>
              </div>

              <div className="info-box" style={{ background: 'var(--teal-bg)', borderColor: 'var(--teal-border)' }}>
                <h4>Peer Review & Feedback (15%)</h4>
                <p>
                  Exchange drafts with a classmate, provide constructive feedback using the rubric, discuss your suggestions, and revise your essay based on the feedback received.
                  This counts toward your <strong>Peer Feedback Assignment grade (15%).</strong>
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Deadline:</strong> Before the end of Week 10.
                </p>
              </div>

              <div className="info-box info-box-blue">
                <h4>Reading into Writing Assignment:Opinion Essay with Articles</h4>
                <p>
                  The final essay is the most important assessment in this module, allowing you to demonstrate your ability to construct a well-supported academic argument, integrate evidence from the assigned readings, and apply the writing skills developed throughout the course.          </p>
                <p style={{ margin: 0 }}>
                  <strong>Deadline:</strong> Final: Week 12.
                </p>
              </div>

              <div className="info-box info-box-white">
                <h4>Module 4 Schedule</h4>
                <ul style={{ fontSize: '0.89em', listStyle: 'none', padding: 0, margin: 0 }}>
                  <li><strong>Week 10:</strong> Orientation, theory, interactive activities</li>
                  <li><strong>Week 11:</strong> Reading articles, discussing perspectives</li>
                  <li><strong>Week 12:</strong> Essay submission, peer review, final revision</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div style={{ marginTop: '28px', textAlign: 'center' }}>
        <Link to="/module4" className="btn btn-primary" style={{ fontSize: '1em', padding: '12px 32px' }}>
          Start Module 4 → 4.1 Orientation & Activation
        </Link>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn-outline">
          ← Back to Home
        </Link>
        <Link to="/module3" className="btn btn-outline">
          ← Back to Module 3
        </Link>
      </div>

      </div>
    </ModuleLayout>
  )
}
