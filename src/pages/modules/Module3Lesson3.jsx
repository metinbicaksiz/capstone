import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module3Lesson3() {
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
        <span>3.3 Interactive Activities</span>
      </div>

      <div class="page-banner" style="background: linear-gradient(135deg, #1e8449, #27ae60);">
        <div class="banner-icon">⚡</div>
        <h1>3.3 — Interactive Activities</h1>
        <p class="banner-sub">Complete interactive practice activities with immediate feedback to master cause and effect essay skills.</p>
        <div class="banner-tags">
          <span class="banner-tag">📅 Week 7 – 8</span>
          <span class="banner-tag">⏱️ ~2–3 hours</span>
        </div>
      </div>

      <h2 class="section-title">⚡ Interactive Activities</h2>
      <p>Complete all interactive activities below. Each activity provides immediate feedback to help you practice cause and effect essay writing skills.</p>

      <div class="info-box info-box-blue">
        <h4>📌 Activities to Be Added</h4>
        <p style="margin:0;">Interactive activities focusing on cause and effect essay structure, causal reasoning, and academic vocabulary will be added here.</p>
      </div>

      <!-- Navigation -->` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module3/lesson-2"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module3/lesson-4"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
