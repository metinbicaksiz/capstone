import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module3Lesson5() {
  const moduleNames = {
    1: 'Module 1 — From Paragraph to Essay',
    2: 'Module 2 — Advantages & Disadvantages Essays',
    3: 'Module 3 — Cause & Effect Essays',
    4: 'Module 4 — Argumentative Essays'
  }

  return (
    <ModuleLayout moduleNumber={3} moduleName={moduleNames[3]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="content-locked" dangerouslySetInnerHTML={{ __html: `<div class="breadcrumb">
        <a href="../index.html">🏠 Home</a>
        <span class="breadcrumb-sep">›</span>
        <a href="index.html">Module 3</a>
        <span class="breadcrumb-sep">›</span>
        <span>3.5 Writing Practice &amp; Submission</span>
      </div>

      <div class="page-banner" style="background: linear-gradient(135deg, #1e8449, #27ae60);">
        <div class="banner-icon">✍️</div>
        <h1>3.5 — Writing Practice &amp; Submission</h1>
        <p class="banner-sub">Plan and write your second full academic essay: a 4-paragraph cause and effect essay.</p>
        <div class="banner-tags">
          <span class="banner-tag">📅 Week 8 – 9</span>
          <span class="banner-tag">⏱️ ~2–3 hours</span>
          <span class="banner-tag">📊 Graded (10%)</span>
        </div>
      </div>

      <h2 class="section-title">📝 Essay Assignment</h2>
      <p>Write a 4-paragraph cause and effect essay (approximately 500–700 words) on the assigned topic.</p>

      <div class="info-box info-box-blue">
        <h4>🎯 Essay Requirements</h4>
        <ul style="font-size:0.89em; margin:0;">
          <li><strong>Length:</strong> 500–700 words</li>
          <li><strong>Structure:</strong> 4 paragraphs (introduction, causes, effects, conclusion)</li>
          <li><strong>Topic:</strong> Assigned cause and effect topic</li>
          <li><strong>Analysis:</strong> Clear identification of causes and effects, with explanation of relationships</li>
          <li><strong>Language:</strong> Academic, formal, with causal connectors and reasoning language</li>
          <li><strong>Do you need to use articles?</strong> No — this essay is based on your ideas and knowledge, not source materials</li>
        </ul>
      </div>

      <h2 class="section-title">📋 Planning Your Essay</h2>
      <p>Before you start writing, plan your essay using an outline. Consider:</p>
      <ul>
        <li>What is your introduction? (background, context, thesis statement)</li>
        <li>What are the main causes of the phenomenon or issue?</li>
        <li>What are the main effects or consequences?</li>
        <li>What is your conclusion? (summary, implications)</li>
      </ul>

      <div class="info-box info-box-green">
        <h4>📌 Essay Outline Template</h4>
        <p style="margin:0;">A downloadable outline template will be provided to help you organize your essay before writing.</p>
      </div>

      <h2 class="section-title">🏆 Assessment Rubric</h2>
      <p>Your essay will be graded using the 4-category rubric:</p>

      <table class="styled-table" style="margin-bottom:20px; width:100%;">
        <tr style="background:var(--green-dark); color:#fff;">
          <th style="text-align:left;">Category</th>
          <th>Description</th>
        </tr>
        <tr>
          <td style="font-weight:600;">Task Achievement</td>
          <td>How well you identify and explain causes and effects</td>
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
      <p>Submit your essay using the form below. Your instructor will read your essay and provide feedback that will help you improve in Module 4.</p>

      <div class="info-box info-box-orange">
        <h4>⏰ Deadline</h4>
        <p style="margin:0;"><strong>[Instructor to add specific submission deadline for Week 9]</strong></p>
      </div>

      <!-- Navigation -->` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module3/lesson-4"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module4/lesson-1"} className="btn btn-primary">Next Module →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
