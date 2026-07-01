import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module3Lesson4() {
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
        <span>3.4 Reading, Discussion &amp; Collaboration</span>
      </div>

      <div class="page-banner" style="background: linear-gradient(135deg, #1e8449, #27ae60);">
        <div class="banner-icon">💬</div>
        <h1>3.4 — Reading, Discussion &amp; Collaboration</h1>
        <p class="banner-sub">Read articles exploring causes and effects of real-world issues, analyze the relationships, and discuss your ideas with classmates.</p>
        <div class="banner-tags">
          <span class="banner-tag">📅 Week 8</span>
          <span class="banner-tag">⏱️ ~2–3 hours</span>
        </div>
      </div>

      <h2 class="section-title">📖 Reading Assignment</h2>
      <p>You will be assigned articles that explore causes and effects of real-world phenomena or issues. Read the articles carefully and identify the causes and effects that are discussed. These articles will help you understand how to analyze complex relationships and present them in an academic way.</p>

      <div class="info-box info-box-blue">
        <h4>📌 Articles to Be Added</h4>
        <p style="margin:0;">Academic articles exploring causes and effects of real-world issues will be provided here.</p>
      </div>

      <h2 class="section-title">💭 Module Discussion Forum</h2>
      <p>After reading the articles, participate in the Module 3 Discussion Forum. You must post an analysis of the causes and effects discussed, along with your ideas and perspective.</p>

      <div class="info-box info-box-green">
        <h4>📌 Discussion Requirements</h4>
        <ul style="font-size:0.89em; margin:0;">
          <li><strong>Word limit:</strong> 150–200 words</li>
          <li><strong>Content:</strong> Summarize the main causes and effects from the articles</li>
          <li><strong>Analysis:</strong> Explain the relationships between causes and effects</li>
          <li><strong>Opinion:</strong> Share your ideas and perspective on the issue</li>
          <li><strong>Discussion in class:</strong> Your post will be discussed in class — be prepared to elaborate on your analysis</li>
        </ul>
      </div>

      <h2 class="section-title">👥 Collaboration &amp; Peer Discussion</h2>
      <p>Read your classmates' posts and respond to at least 2 of them. Engage thoughtfully with their analyses and prepare to discuss these ideas during your classroom session.</p>

      <!-- Navigation -->` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module3/lesson-3"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module3/lesson-5"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
