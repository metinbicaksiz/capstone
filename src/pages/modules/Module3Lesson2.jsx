import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module3Lesson2() {
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
        <span>3.2 Theory &amp; Knowledge Building</span>
      </div>

      <div class="page-banner" style="background: linear-gradient(135deg, #1e8449, #27ae60);">
        <div class="banner-icon">📚</div>
        <h1>3.2 — Theory &amp; Knowledge Building</h1>
        <p class="banner-sub">Learn the theory of cause and effect essays and develop the skills you need to write them effectively.</p>
        <div class="banner-tags">
          <span class="banner-tag">📅 Week 7</span>
          <span class="banner-tag">⏱️ ~1–2 hours</span>
        </div>
      </div>

      <h2 class="section-title">📖 Cause &amp; Effect Essay Structure</h2>
      <div class="info-box info-box-blue">
        <h4>📌 Content to Be Added</h4>
        <p style="margin:0;">Theory content on cause and effect essay structure, organization, and format will be added here.</p>
      </div>

      <h2 class="section-title">🔍 Analyzing Causes &amp; Effects</h2>
      <div class="info-box info-box-blue">
        <h4>📌 Content to Be Added</h4>
        <p style="margin:0;">Strategies for identifying causes, effects, and the relationships between them will be added here.</p>
      </div>

      <h2 class="section-title">📝 Topic Sentences &amp; Supporting Ideas</h2>
      <div class="info-box info-box-blue">
        <h4>📌 Content to Be Added</h4>
        <p style="margin:0;">Guidelines for writing topic sentences focused on causes and effects, with supporting paragraphs will be added here.</p>
      </div>

      <h2 class="section-title">🔗 Causal Language &amp; Connectors</h2>
      <div class="info-box info-box-blue">
        <h4>📌 Content to Be Added</h4>
        <p style="margin:0;">List and usage of causal connectors: because, as a result, consequently, led to, caused by, resulted in, etc.</p>
      </div>

      <h2 class="section-title">📚 Vocabulary Focus</h2>
      <div class="info-box info-box-blue">
        <h4>📌 Content to Be Added</h4>
        <p style="margin:0;">Academic vocabulary for cause and effect essays, with collocations and example sentences.</p>
      </div>

      <!-- Navigation -->` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module3/lesson-1"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module3/lesson-3"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
