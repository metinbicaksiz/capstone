import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module4Lesson2() {
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
    <ModuleLayout moduleNumber={4} moduleName={moduleNames[4]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div dangerouslySetInnerHTML={{ __html: `<div class="breadcrumb">
        <a href="../index.html">Home</a>
        <span class="breadcrumb-sep">›</span>
        <a href="index.html">Module 4</a>
        <span class="breadcrumb-sep">›</span>
        <span>4.2 Interactive Knowledge Building</span>
      </div>

      <div class="page-banner" style="background: linear-gradient(135deg, #093C5D, #3B7597);">
        <h1>4.2  Interactive Knowledge Building</h1>
        <p class="banner-sub">Learn argumentative essay theory and practice with interactive activities that provide immediate feedback.</p>
      </div>

      <h2 class="section-title">Theory &amp; Knowledge</h2>
      <p>Before you start the interactive activities, review the key concepts of argumentative essay writing. This section covers the theory you need to understand to complete the activities and write your final essay.</p>
      </br>
      </div>


      <!-- Navigation -->` }} />

        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 0 ? 'active' : ''}`}
              onClick={() => toggleAccordion(0)}
            >
              <span>Essay Organization</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 0 && (
              <div className={`accordion-content ${activeAccordion === 0 ? 'active' : ''}`}>
                <embed
                  src="/pdfs/essay_organization.pdf"
                  type="application/pdf"
                  width="100%"
                  height="900px"
                  style={{ borderRadius: '6px' }}
                />
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
              <span>Thesis Statement</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 1 && (
              <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                <embed
                  src="/pdfs/thesis.pdf"
                  type="application/pdf"
                  width="100%"
                  height="900px"
                  style={{ borderRadius: '6px' }}
                />
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
              <span>Body Paragraphs</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 2 && (
              <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                <embed
                  src="/pdfs/body.pdf"
                  type="application/pdf"
                  width="100%"
                  height="900px"
                  style={{ borderRadius: '6px' }}
                />
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
              <span>Conclusion</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 3 && (
              <div className={`accordion-content ${activeAccordion === 3 ? 'active' : ''}`}>
                <embed
                  src="/pdfs/conclusion.pdf"
                  type="application/pdf"
                  width="100%"
                  height="900px"
                  style={{ borderRadius: '6px' }}
                />
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
              <span>Sample Essay</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 4 && (
              <div className={`accordion-content ${activeAccordion === 4 ? 'active' : ''}`}>
                <embed
                  src="/pdfs/sample.pdf"
                  type="application/pdf"
                  width="100%"
                  height="900px"
                  style={{ borderRadius: '6px' }}
                />
              </div>
            )}
          </div>
        </div>

      <h2 className="section-title">Interactive Activities</h2>
      <p>Complete all 6 interactive activities above. Each activity has immediate feedback and covers an important aspect of argumentative essay writing.</p>
      <br></br>      

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-header ${activeAccordion === 5 ? 'active' : ''}`}
            onClick={() => toggleAccordion(5)}
          >
            <span>Identifying Opinion Essay Prompts</span>
            <span className="accordion-icon">▼</span>
          </button>
          {activeAccordion === 5 && (
            <div className={`accordion-content ${activeAccordion === 5 ? 'active' : ''}`}>
              <iframe
                src="https://wordwall.net/embed/ebb14644ad804131bfb93ebb969fd6e9?themeId=62&templateId=5&fontStackId=0"
                width="100%"
                height="900px"
                frameBorder="0"
                title="Activity 1"
                style={{ borderRadius: '6px' }}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-header ${activeAccordion === 6 ? 'active' : ''}`}
            onClick={() => toggleAccordion(6)}
          >
            <span>Match The Parts Of An Opinion Essay</span>
            <span className="accordion-icon">▼</span>
          </button>
          {activeAccordion === 6 && (
            <div className={`accordion-content ${activeAccordion === 6 ? 'active' : ''}`}>
              <iframe
                src="https://wordwall.net/embed/8d5834305fa749d481e08e23a688acec?themeId=62&templateId=3&fontStackId=0"
                width="100%"
                height="900px"
                frameBorder="0"
                title="Activity 2"
                style={{ borderRadius: '6px' }}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-header ${activeAccordion === 7 ? 'active' : ''}`}
            onClick={() => toggleAccordion(7)}
          >
            <span>Thesis Statement and Unjumble Words</span>
            <span className="accordion-icon">▼</span>
          </button>
          {activeAccordion === 7 && (
            <div className={`accordion-content ${activeAccordion === 7 ? 'active' : ''}`}>
              <iframe
                src="https://wordwall.net/embed/f05b3fe278064031aa8a2eb69524de94?themeId=62&templateId=72&fontStackId=0"
                width="100%"
                height="900px"
                frameBorder="0"
                title="Activity 3"
                style={{ borderRadius: '6px' }}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-header ${activeAccordion === 8 ? 'active' : ''}`}
            onClick={() => toggleAccordion(8)}
          >
            <span>Missing Sentence in Body Paragraph</span>
            <span className="accordion-icon">▼</span>
          </button>
          {activeAccordion === 8 && (
            <div className={`accordion-content ${activeAccordion === 8 ? 'active' : ''}`}>
              <iframe
                src="https://wordwall.net/embed/473bb6952cc24df3908cae92080650b5?themeId=62&templateId=36&fontStackId=0"
                width="100%"
                height="900px"
                frameBorder="0"
                title="Activity 4"
                style={{ borderRadius: '6px' }}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-header ${activeAccordion === 9 ? 'active' : ''}`}
            onClick={() => toggleAccordion(9)}
          >
            <span>Supporting Ideas Quiz</span>
            <span className="accordion-icon">▼</span>
          </button>
          {activeAccordion === 9 && (
            <div className={`accordion-content ${activeAccordion === 9 ? 'active' : ''}`}>
              <iframe
                src="https://wordwall.net/embed/83b1d9d1f2d340fd83e9bd67e71e8474?themeId=62&templateId=5&fontStackId=0"
                width="100%"
                height="900px"
                frameBorder="0"
                title="Activity 5"
                style={{ borderRadius: '6px' }}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-header ${activeAccordion === 10 ? 'active' : ''}`}
            onClick={() => toggleAccordion(10)}
          >
            <span>Final Quiz Mixed Questions</span>
            <span className="accordion-icon">▼</span>
          </button>
          {activeAccordion === 10 && (
            <div className={`accordion-content ${activeAccordion === 10 ? 'active' : ''}`}>
              <iframe
                src="https://wordwall.net/embed/83b1d9d1f2d340fd83e9bd67e71e8474?themeId=62&templateId=5&fontStackId=0"
                width="100%"
                height="900px"
                frameBorder="0"
                title="Activity 6"
                style={{ borderRadius: '6px' }}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      
      

      
        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module4/lesson-1"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module4/lesson-3"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
