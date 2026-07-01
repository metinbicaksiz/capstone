import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module2Lesson2() {
  useEffect(() => {
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header')
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling
        const isActive = content.classList.contains('active')

        // Close all accordions
        document.querySelectorAll('.accordion-content').forEach(c => {
          c.classList.remove('active')
          c.previousElementSibling.classList.remove('active')
        })

        // Open clicked accordion if it wasn't open
        if (!isActive) {
          content.classList.add('active')
          header.classList.add('active')
        }
      })
    })
  }, [])
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
        <span>2.2 Theory &amp; Knowledge Building</span>
      </div>

      <div class="page-banner" style="background: linear-gradient(135deg, #117a65, #16a085);">
        <div class="banner-icon">📚</div>
        <h1>2.2 — Theory &amp; Knowledge Building</h1>
        <p class="banner-sub">Learn the theory of advantages and disadvantages essays and develop the skills you need to write them effectively.</p>
        <div class="banner-tags">
          <span class="banner-tag">📅 Week 4</span>
          <span class="banner-tag">⏱️ ~1–2 hours</span>
        </div>
      </div>

      <h2 class="section-title">📖 Advantages &amp; Disadvantages Essay Structure</h2>

      <div class="accordion">
        <div class="accordion-item">
          <button class="accordion-header">
            <span>📄 Essay Organization</span>
            <span class="accordion-icon">▼</span>
          </button>
          <div class="accordion-content">
            <iframe
              src="/pdfs/essay_organization.pdf"
              width="100%"
              height="600px"
              style="border: none; border-radius: 4px;"
              frameBorder="0"
              title="Essay Organization PDF">
              Your browser does not support PDFs.
              <a href="/pdfs/essay_organization.pdf" download>Download PDF</a>
            </iframe>
          </div>
        </div>
      </div>

      <h2 class="section-title">🎯 How to Analyze a Topic from Multiple Perspectives</h2>
      <div class="info-box info-box-blue">
        <h4>📌 Content to Be Added</h4>
        <p style="margin:0;">Strategies for analyzing topics and identifying advantages and disadvantages will be added here.</p>
      </div>

      <h2 class="section-title">📝 Topic Sentences &amp; Supporting Ideas</h2>
      <div class="info-box info-box-blue">
        <h4>📌 Content to Be Added</h4>
        <p style="margin:0;">Guidelines for writing strong topic sentences and developing supporting paragraphs will be added here.</p>
      </div>

      <h2 class="section-title">🔗 Balancing Language &amp; Connectors</h2>
      <div class="info-box info-box-blue">
        <h4>📌 Content to Be Added</h4>
        <p style="margin:0;">List and usage of connectors for presenting multiple perspectives: however, in contrast, on the other hand, similarly, etc.</p>
      </div>

      <h2 class="section-title">📚 Vocabulary Focus</h2>
      <div class="info-box info-box-blue">
        <h4>📌 Content to Be Added</h4>
        <p style="margin:0;">Academic vocabulary for advantages and disadvantages essays, with collocations and example sentences.</p>
      </div>

      <!-- Navigation -->` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module2/lesson-1"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module2/lesson-3"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
