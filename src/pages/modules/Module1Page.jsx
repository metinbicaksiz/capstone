import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module1Page() {
  return (
    <ModuleLayout
      moduleNumber={1}
      moduleName="Module 1 — From Paragraph to Essay"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>


      {/* What You Will Learn */}
      {/* <div class="page-banner" style="background: linear-gradient(135deg, #1e8449, #27ae60);">
        <h1>1.5 — Writing Practice &amp; Submission</h1>
        <p class="banner-sub">Apply everything you have learned. Complete guided writing practice, plan your essay with an outline, and submit your Module 1 writing assignment.</p>
        <div class="banner-tags">
          <span class="banner-tag">Module 1</span>
        </div>
      </div> */}
      <h2 className="section-title">🎯 What You Will Learn in Module 1</h2>
      <p>
        Module 1 is your starting point. Whether you are new to academic writing or returning to strengthen your foundations, this module will help you understand the building blocks of an academic essay. You will learn how paragraphs are structured, how paragraphs work together to form a complete essay, and how to use grammar and vocabulary in a formal academic style.
      </p>

      <ul className="objectives-list">
        <li>Identify and describe the main parts of an academic paragraph: topic sentence, supporting ideas, and concluding sentence</li>
        <li>Explain the four-paragraph essay structure: introduction, two body paragraphs, and conclusion</li>
        <li>Write a well-organized academic paragraph with a clear topic sentence and relevant supporting ideas</li>
        <li>Construct a thesis statement and topic sentences for a four-paragraph essay</li>
        <li>Apply academic writing conventions: formal language, third person, no contractions</li>
        <li>Use appropriate sentence structures including simple, compound, and complex sentences</li>
        <li>Identify and use key academic vocabulary from the Academic Word List (AWL)</li>
        <li>Complete an essay outline for a four-paragraph opinion essay</li>
      </ul>

      {/* Module Structure */}
      <h2 className="section-title">🗂️ Module Structure</h2>
      <p>Work through the sections below in order. Each section builds on the previous one. Complete all activities before moving to the next section.</p>

      <div className="module-steps">
        <div className="step-row">
          <div className="step-num">1</div>
          <div className="step-body">
            <h4>1.1 — Orientation & Activation</h4>
            <p>Watch the welcome video, read the module overview, review the learning objectives, and complete your module checklist. Get familiar with how this module works.</p>
          </div>
        </div>
        <div className="step-row">
          <div className="step-num">2</div>
          <div className="step-body">
            <h4>1.2 — Theory & Knowledge Building</h4>
            <p>Study the core concepts: paragraph structure, essay structure, thesis statements, topic sentences, academic writing conventions, sentence types, and academic vocabulary. Read the theory carefully and take notes.</p>
          </div>
        </div>
        <div className="step-row">
          <div className="step-num">3</div>
          <div className="step-body">
            <h4>1.3 — Interactive Activities</h4>
            <p>Practice what you have learned through H5P interactive activities with immediate, automated feedback. Activities include identifying paragraph parts, choosing topic sentences, ordering sentences, and recognizing formal language.</p>
          </div>
        </div>
        <div className="step-row">
          <div className="step-num">4</div>
          <div className="step-body">
            <h4>1.4 — Reading, Discussion & Collaboration</h4>
            <p>Read sample academic paragraphs and essays, analyze their structure, and participate in the online discussion forum to share ideas with your classmates.</p>
          </div>
        </div>
        <div className="step-row">
          <div className="step-num">5</div>
          <div className="step-body">
            <h4>1.5 — Writing Practice & Submission</h4>
            <p>Apply everything you have learned: write practice paragraphs, complete an essay outline, and submit your first writing assignment (500–700 words). Receive formative feedback from your instructor.</p>
          </div>
        </div>
      </div>

      {/* Assessment */}
      <h2 className="section-title">📊 Module 1 Assessment</h2>
      <div className="two-col">
        <div className="info-box info-box-blue">
          <h4>✍️ Writing Assignment (Module 1)</h4>
          <p>
            Write a 500–700 word academic essay on a given prompt. This assignment is <strong>formative only</strong> — it is not graded but your instructor will provide written feedback to help you improve before Module 2.
          </p>
          <p style={{ margin: 0 }}>
            <strong>Purpose:</strong> Diagnostic + practice. Identify strengths and areas for improvement.
          </p>
        </div>
        <div className="info-box" style={{ background: 'var(--teal-bg)', borderColor: 'var(--teal-border)' }}>
          <h4>💬 Discussion Forum Participation</h4>
          <p>
            Participate in the Module 1 discussion forum: share your response to the discussion prompt and reply to at least two classmates. This counts toward your <strong>Participation grade (25%).</strong>
          </p>
          <p style={{ margin: 0 }}>
            <strong>Deadline:</strong> Before the end of Week 3.
          </p>
        </div>
      </div>

      {/* Tips */}
      <div className="info-box info-box-orange">
        <h4>💡 Tips for Success in Module 1</h4>
        <ul style={{ margin: 0 }}>
          <li>Download the <strong>Interactive Theory Booklet</strong> from Course Study Materials — it supports every section of this module.</li>
          <li>
            Complete the <strong>Grammar Diagnostic Tests</strong> in Week 1 and 2 so your instructor can give you targeted support.
          </li>
          <li>
            Do not rush through the theory — understanding the structure of a paragraph and an essay now will make everything easier later.
          </li>
          <li>Ask questions in your tutorial session if you are unsure about anything.</li>
        </ul>
      </div>

      {/* Navigation */}
      <div style={{ marginTop: '28px', textAlign: 'center' }}>
        <Link to="/module1" className="btn btn-primary" style={{ fontSize: '1em', padding: '12px 32px' }}>
          Start Module 1 → 1.1 Orientation & Activation
        </Link>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/" className="btn btn-outline">
          ← Back to Home
        </Link>
      </div>

      </div>
    </ModuleLayout>
  )
}
