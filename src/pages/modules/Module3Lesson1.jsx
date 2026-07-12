import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module3Lesson1() {
  const moduleNames = {
    1: 'Module 1 — From Paragraph to Essay',
    2: 'Module 2 — Advantages & Disadvantages Essays',
    3: 'Module 3 — Cause & Effect Essays',
    4: 'Module 4 — Argumentative Essays'
  }

  const [activeAccordion, setActiveAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <ModuleLayout moduleNumber={3} moduleName={moduleNames[3]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="content-locked" dangerouslySetInnerHTML={{ __html: `

      <div class="page-banner">
        <h1>3.1 — Orientation &amp; Activation</h1>
        <p class="banner-sub">Welcome to Module 3. Start here — watch the welcome video, review objectives, and understand the cause and effect essay format.</p>

      </div>


      <!-- Learning Objectives -->
      <h2 class="section-title">Module 3 — Learning Objectives</h2>
      <p>By the end of Module 3, you will be able to:</p>
      <ul class="objectives-list">
        <li>Understand the structure and purpose of cause and effect essays</li>
        <li>Analyze a phenomenon to identify its causes and effects</li>
        <li>Distinguish between immediate and underlying causes</li>
        <li>Recognize direct and indirect effects</li>
        <li>Use causal language and reasoning connectors effectively (because, as a result, consequently, etc.)</li>
        <li>Write a complete 4-paragraph cause and effect essay (500–700 words)</li>
        <li>Apply feedback to improve your analytical writing</li>
      </ul>

      <!-- Module Checklist -->
      <h2 class="section-title">Module 3 Checklist</h2>
      <p>Use this checklist to track your progress through Module 3. Complete all items by the end of Week 9.</p>` }} />

        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 0 ? 'active' : ''}`}
              onClick={() => toggleAccordion(0)}
            >
              <span>Section 3.1 — Orientation & Activation</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 0 && (
              <div className={`accordion-content ${activeAccordion === 0 ? 'active' : ''}`}>
                <ul className="checklist">
                  <li><span className="item-label">Watch the Module 3 Welcome Video</span><small>~5 minutes — introduces cause and effect essays</small></li>
                  <li><span className="item-label">Read the Module 3 Overview</span><small>Understand the essay format and module structure</small></li>
                  <li><span className="item-label">Read the Learning Objectives</span><small>Know what skills you will develop by the end of Module 3</small></li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 1 ? 'active' : ''}`}
              onClick={() => toggleAccordion(1)}
            >
              <span>Section 3.2 — Theory & Knowledge Building</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 1 && (
              <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                <ul className="checklist">
                  <li><span className="item-label">Study Cause & Effect Essay Structure</span><small>Learn the format and organization</small></li>
                  <li><span className="item-label">Understand Types of Causes & Effects</span><small>Immediate vs. underlying; direct vs. indirect</small></li>
                  <li><span className="item-label">Study Causal Language & Connectors</span><small>because, as a result, consequently, led to, etc.</small></li>
                  <li><span className="item-label">Review Academic Vocabulary</span><small>Words for cause and effect relationships</small></li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 2 ? 'active' : ''}`}
              onClick={() => toggleAccordion(2)}
            >
              <span>Section 3.3 — Interactive Activities</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 2 && (
              <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                <ul className="checklist">
                  <li><span className="item-label">Complete Interactive Activities</span><small>Practice with immediate feedback on cause and effect essays</small></li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 3 ? 'active' : ''}`}
              onClick={() => toggleAccordion(3)}
            >
              <span>Section 3.4 — Reading, Discussion & Collaboration</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 3 && (
              <div className={`accordion-content ${activeAccordion === 3 ? 'active' : ''}`}>
                <ul className="checklist">
                  <li><span className="item-label">Read Assigned Articles</span><small>Articles exploring causes and effects of real-world issues</small></li>
                  <li><span className="item-label">Participate in Module Discussion</span><small>Share your analysis and opinion (150–200 words)</small></li>
                  <li><span className="item-label">Read and Respond to Classmates</span><small>Engage with peers' analyses and perspectives</small></li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 4 ? 'active' : ''}`}
              onClick={() => toggleAccordion(4)}
            >
              <span>Section 3.5 — Writing Practice & Submission</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 4 && (
              <div className={`accordion-content ${activeAccordion === 4 ? 'active' : ''}`}>
                <ul className="checklist">
                  <li><span className="item-label">Plan Your Essay (Outline)</span><small>Organize the causes and effects you will discuss</small></li>
                  <li><span className="item-label">Write Your Module 3 Essay</span><small>4-paragraph cause and effect essay (500–700 words)</small></li>
                  <li><span className="item-label">Submit Your Essay</span><small>Graded assignment — worth 10% of your course grade</small></li>
                  <li><span className="item-label">Read Instructor Feedback</span><small>Review feedback and prepare for Module 4</small></li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module2/lesson-5"} className="btn btn-outline">← Previous Module</Link>
          <Link to={"/module3/lesson-2"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
