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

<div class="page-banner">
        <h1>Module Overview</h1>
        {/* <p class="banner-sub">10 activities with instant feedback. Work in order, they get progressively harder.</p> */}
        <div class="banner-tags">
          {/* <span class="banner-tag">📅 Week 2–3</span>
          <span class="banner-tag">🎯 Instant feedback</span>
          <span class="banner-tag">🔄 Retry anytime</span> */}
        </div>
      </div>
      {/* What You Will Learn */}
      {/* <div class="page-banner" style="background: linear-gradient(135deg, #1e8449, #27ae60);">
        <h1>1.5 — Writing Practice &amp; Submission</h1>
        <p class="banner-sub">Apply everything you have learned. Complete guided writing practice, plan your essay with an outline, and submit your Module 1 writing assignment.</p>
        <div class="banner-tags">
          <span class="banner-tag">Module 1</span>
        </div>
      </div> */}
      <h2 className="section-title">What You Will Learn in Module 1</h2>
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

    

      {/* Tips */}
      <div className="info-box info-box-orange">
        <h4>Tips for Success in Module 1</h4>
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
