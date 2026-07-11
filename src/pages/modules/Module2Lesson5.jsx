import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModuleLayout from '../../components/ModuleLayout'
import EssaySubmissionForm from '../../components/EssaySubmissionFinal'
import './ModulesPage.css'

export default function Module2Lesson5() {
  const [activeAccordion, setActiveAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const moduleNames = {
    1: 'Module 1 — From Paragraph to Essay',
    2: 'Module 2 — Advantages & Disadvantages Essays',
    3: 'Module 3 — Cause & Effect Essays',
    4: 'Module 4 — Argumentative Essays'
  }

  return (
    <ModuleLayout moduleNumber={2} moduleName={moduleNames[2]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="content-locked" dangerouslySetInnerHTML={{ __html: `
      <div class="page-banner">
        <h1>2.5 Writing Practice &amp; Submission</h1>
        <p class="banner-sub">Plan and write your first full academic essay: a 4-paragraph advantages and disadvantages essay.</p>
      </div>

      <h2 class="section-title">Essay Assignment</h2>
      <p>Write a 4-paragraph advantages and disadvantages essay on the assigned topic.</p>

      <div class="info-box info-box-blue">
        <ul style="font-size:0.89em; margin:0;">
          <li><strong>Length:</strong> 500–700 words</li>
          <li><strong>Structure:</strong> 4 paragraphs (introduction, advantages, disadvantages, conclusion)</li>
          <li><strong>Topic:</strong> Assigned advantages and disadvantages topic</li>
          <li><strong>Language:</strong> Academic, formal, with balancing connectors</li>
          <li><strong>Do you need to use articles?</strong> No — this essay is based on your ideas and knowledge, not source materials</li>
        </ul>
      </div>

      ` }} />

        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 0 ? 'active' : ''}`}
              onClick={() => toggleAccordion(0)}
            >
              <h2>Planning Your Essay</h2>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 0 && (
              <div
                className={`accordion-content ${activeAccordion === 0 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p>Before you start writing, plan your essay using an outline. Consider:</p>
                  <ul style="margin:0 0 16px 20px; line-height:1.8;">
                    <li>What is your introduction? (background, context, thesis statement)</li>
                    <li>What are the main advantages of the topic?</li>
                    <li>What are the main disadvantages of the topic?</li>
                    <li>What is your conclusion? (summary, balanced perspective)</li>
                  </ul>
                 
                ` }}
              />
            )}
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: `
      <h2 class="section-title">Choose Your Essay Prompt</h2>
      <p>Choose <strong>one</strong> of the two prompts below and write a 4-paragraph advantages and disadvantages essay (500–700 words).</p>

      <h3>Prompt 1</h3>
      <p>Being a celebrity, whether as a film star or sports icon, comes with both advantages and disadvantages.</p>
      <p>Is the life of a celebrity ultimately more beneficial or challenging?</p>
      </br>
      <h3>Prompt 2</h3>
      <p>While some prefer living in a house, others find apartments more advantageous.</p>
      <p>Does living in a house offer more advantages than disadvantages in comparison to living in an apartment?</p>
        ` }} />
        <br />

        <EssaySubmissionForm />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module2/lesson-4"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module3/lesson-1"} className="btn btn-primary">Next Module →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
