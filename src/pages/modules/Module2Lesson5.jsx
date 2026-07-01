import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module2Lesson5() {
  const moduleNames = {
    1: 'Module 1 — From Paragraph to Essay',
    2: 'Module 2 — Advantages & Disadvantages Essays',
    3: 'Module 3 — Cause & Effect Essays',
    4: 'Module 4 — Argumentative Essays'
  }

  return (
    <ModuleLayout moduleNumber={2} moduleName={moduleNames[2]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="content-locked" dangerouslySetInnerHTML={{ __html: `<div class="breadcrumb">
        <a href="../index.html">🏠 Home</a>
        <span class="breadcrumb-sep">›</span>
        <a href="index.html">Module 2</a>
        <span class="breadcrumb-sep">›</span>
        <span>2.5 Writing Practice &amp; Submission</span>
      </div>

      <div class="page-banner" style="background: linear-gradient(135deg, #117a65, #16a085);">
        <div class="banner-icon">✍️</div>
        <h1>2.5 — Writing Practice &amp; Submission</h1>
        <p class="banner-sub">Plan and write your first full academic essay: a 4-paragraph advantages and disadvantages essay.</p>
        <div class="banner-tags">
          <span class="banner-tag">📅 Week 5 – 6</span>
          <span class="banner-tag">⏱️ ~2–3 hours</span>
          <span class="banner-tag">📊 Graded (10%)</span>
        </div>
      </div>

      <h2 class="section-title">📝 Essay Assignment</h2>
      <p>Write a 4-paragraph advantages and disadvantages essay (approximately 500–700 words) on the assigned topic.</p>

      <div class="info-box info-box-blue">
        <h4>🎯 Essay Requirements</h4>
        <ul style="font-size:0.89em; margin:0;">
          <li><strong>Length:</strong> 500–700 words</li>
          <li><strong>Structure:</strong> 4 paragraphs (introduction, advantages, disadvantages, conclusion)</li>
          <li><strong>Topic:</strong> Assigned advantages and disadvantages topic</li>
          <li><strong>Language:</strong> Academic, formal, with balancing connectors</li>
          <li><strong>Do you need to use articles?</strong> No — this essay is based on your ideas and knowledge, not source materials</li>
        </ul>
      </div>

      <h2 class="section-title">📋 Planning Your Essay</h2>
      <p>Before you start writing, plan your essay using an outline. Consider:</p>
      <ul>
        <li>What is your introduction? (background, context, thesis statement)</li>
        <li>What are the main advantages of the topic?</li>
        <li>What are the main disadvantages of the topic?</li>
        <li>What is your conclusion? (summary, balanced perspective)</li>
      </ul>

      <div class="info-box info-box-teal">
        <h4>📌 Essay Outline Template</h4>
        <p style="margin:0;">A downloadable outline template will be provided to help you organize your essay before writing.</p>
      </div>

      <h2 class="section-title">🏆 Assessment Rubric</h2>
      <p>Your essay will be graded using the 4-category rubric:</p>

      <table class="styled-table" style="margin-bottom:20px; width:100%;">
        <tr style="background:var(--teal-dark); color:#fff;">
          <th style="text-align:left;">Category</th>
          <th>Description</th>
        </tr>
        <tr>
          <td style="font-weight:600;">Task Achievement</td>
          <td>How well you present both advantages and disadvantages in a balanced way</td>
        </tr>
        <tr>
          <td style="font-weight:600;">Organization</td>
          <td>Logical paragraph structure and coherent development of ideas</td>
        </tr>
        <tr>
          <td style="font-weight:600;">Grammar &amp; Mechanics</td>
          <td>Accuracy and range of grammar structures used</td>
        </tr>
        <tr>
          <td style="font-weight:600;">Vocabulary &amp; Tone</td>
          <td>Range of academic vocabulary and appropriate formal tone</td>
        </tr>
      </table>

      <h2 class="section-title">📤 Submission Instructions</h2>
      <p>Submit your essay using the form below. Your instructor will read your essay and provide feedback that will help you improve before Module 3.</p>

      <div class="info-box info-box-orange">
        <h4>⏰ Deadline</h4>
        <p style="margin:0;"><strong>[Instructor to add specific submission deadline for Week 6]</strong></p>
      </div>

      <!-- Navigation -->` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module2/lesson-4"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module3/lesson-1"} className="btn btn-primary">Next Module →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
