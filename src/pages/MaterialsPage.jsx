import { Link } from 'react-router-dom'
import './MaterialsPage.css'

export default function MaterialsPage() {
  return (
    <div className="page-container">
      <div className="page-banner">
        <h1>Course Study Materials</h1>
        <h4 className="banner-sub">Everything in one place, mandatory interactive diagnostics, all downloadable PDFs, and optional practice resources.</h4>
      </div>

      {/* Navigation Overview */}
      <div className="nav-overview">
        <a href="#diagnostics" className="nav-box nav-turquoise">
          <div className="nav-label">Diagnostic Tests</div>
          <div className="nav-sublabel">MANDATORY · Week 1</div>
        </a>
        <a href="#downloads" className="nav-box nav-blue">
          <div className="nav-label">All Downloads</div>
          <div className="nav-sublabel">PDFs</div>
        </a>
        <a href="#rubric" className="nav-box nav-green">
          <div className="nav-label">Essay Rubric</div>
        </a>
        <a href="#practice" className="nav-box nav-teal">
          <div className="nav-label">Extra Practice Materials</div>
        </a>
      </div>

      {/* SECTION 1: MANDATORY DIAGNOSTIC TESTS */}
      <h2 className="section-title" id="diagnostics">
        Diagnostic Tests
      </h2>

      <div className="info-box info-box-orange">
        <h4>These tests are required</h4>
        <p>
          Complete <strong>both</strong> diagnostic tests in Week 1, before starting the Module 1 activities. They are not graded but they are mandatory — your instructor uses the results to understand where to focus support. Both tests give you <strong>instant results and feedback</strong> the moment you submit.
        </p>
      </div>

      {/* Grammar Diagnostic */}
      <div className="diag-card diag-grammar">
        <div className="diag-body">
          <h3>Grammar Diagnostic Test</h3>
          <p>15 questions covering sentence types, connectors, formal/informal language, verb forms, and punctuation. Immediate score + explanation for every question + recommendations on what to review.</p>
          <div className="tag-row">
            <span className="mandatory-badge">MANDATORY</span>
            <span className="tag-pill">15 questions</span>
            <span className="tag-pill">~15 minutes</span>
            <span className="tag-pill">Week 1</span>
            <span className="tag-pill">Instant results</span>
          </div>
          <Link to="/grammar-diagnostic" className="btn btn-primary">
            Start Grammar Diagnostic →
          </Link>
        </div>
        <div className="diag-progress" style={{ color: 'var(--blue-dark)' }}>
          <div className="big">15</div>
          <div className="lbl">questions</div>
        </div>
      </div>

      {/* Vocab Diagnostic */}
      <div className="diag-card diag-vocab">
        <div className="diag-body">
          <h3>Vocabulary Diagnostic Test</h3>
          <p>10 questions in 2 parts: word meanings (definitions) + words in context (choose the right word for each sentence). Tests core academic vocabulary used throughout the course.</p>
          <div className="tag-row">
            <span className="mandatory-badge">MANDATORY</span>
            <span className="tag-pill">10 questions</span>
            <span className="tag-pill">~10 minutes</span>
            <span className="tag-pill">Week 1</span>
            <span className="tag-pill">Instant results</span>
          </div>
          <Link to="/vocab-diagnostic" className="btn btn-primary">
            Start Vocabulary Diagnostic →
          </Link>
        </div>
        <div className="diag-progress" style={{ color: 'var(--teal-dark)' }}>
          <div className="big">10</div>
          <div className="lbl">questions</div>
        </div>
      </div>

      {/* SECTION 2: ALL DOWNLOADS */}
      <h2 className="section-title" id="downloads" style={{ marginTop: '36px' }}>
        All Course Documents & Downloads
      </h2>

      <div className="info-box info-box-blue">
        <h4>How to Use These Resources</h4>
        <p>
          These PDF documents are <strong>supplementary</strong> — they support your learning in the modules but the <strong>interactive activities in each module are the main learning path</strong>. Download PDFs for offline study or printing. The Essay Rubric is the most important document: study it before writing any essay.
        </p>
      </div>

      <div className="dl-section">
        <h3 className="dl-category">Course Information</h3>
        <div className="dl-grid">
          <div className="dl-item">
            <div className="dl-item-body">
              <h3>Course Materials — General Information</h3>
              <p>Overview of course organization, assignment instructions, feedback procedures, and academic integrity policies. Read this first before starting Module 1.</p>
              <div className="tag-row">
                <span className="tag-pill">Read first</span>
                <span className="tag-pill">Week 1</span>
              </div>
            </div>
            <div className="dl-btns">
              <a href="../../public/pdfs/Writing_Syllabus_Appendix.pdf" target="_self" className="btn btn-primary">Download (.pdf)</a>
            </div>
          </div>
        </div>
      </div>

      <div className="dl-section">
        <h3 className="dl-category">Grammar Resources</h3>
        <div className="dl-grid">
          <div className="dl-item">
            <div className="dl-item-body">
              <h3>Grammar Reference Booklet — Tenses & Sentence Structure</h3>
              <p>Comprehensive grammar reference covering tenses used in academic writing (present simple, past simple, present perfect, passive voice) + sentence types + punctuation rules. Keep open during writing activities.</p>
              <div className="tag-row">
                <span className="tag-pill">All Modules</span>
                <span className="tag-pill">Reference</span>
              </div>
            </div>
            <div className="dl-btns">
              <a href="#" className="btn btn-primary">Download (.pdf)</a>
            </div>
          </div>
        </div>
      </div>

      <div className="dl-section">
        <h3 className="dl-category">Vocabulary Resources</h3>
        <div className="dl-grid">
          <div className="dl-item">
            <div className="dl-item-body">
              <h3>Academic Word List — Collocations & Parts of Speech</h3>
              <p>Curated academic vocabulary organized by topic and part of speech, with common collocations (e.g., argue that, provide evidence, significant impact) and example sentences. Use when planning and revising essays.</p>
              <div className="tag-row">
                <span className="tag-pill">All Modules</span>
                <span className="tag-pill">Reference</span>
                <span className="tag-pill">Collocations</span>
              </div>
            </div>
            <div className="dl-btns">
              <a href="#" className="btn btn-primary">Download (.pdf)</a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="dl-section">
        <h3 className="dl-category">Writing Practice Booklet</h3>
        <div className="dl-grid">
          <div className="dl-item">
            <div className="dl-item-body">
              <h3>📓 Interactive Theory & Practice Booklet</h3>
              <p>The main writing development booklet for the whole course. Covers all four essay types: paragraph writing → advantages/disadvantages → cause & effect → opinion essays. Includes explanations, model texts, and practice activities. Use alongside the module interactive activities.</p>
              <div className="tag-row">
                <span className="tag-pill">All Modules</span>
                <span className="tag-pill">Main Reference</span>
                <span className="tag-pill">Writing Practice</span>
              </div>
            </div>
            <div className="dl-btns">
              <a href="#" className="btn btn-primary">Download PDF</a>
            </div>
          </div>
        </div>
      </div> */}

      {/* SECTION 3: ESSAY RUBRIC */}
      <h2 className="section-title" id="rubric" style={{ marginTop: '36px' }}>
        Academic Essay Rubric (ELC)
      </h2>

      <div className="info-box info-box-green">
        <h4>Study This Rubric Before Writing Any Essay</h4>
        <p>
          This rubric is used to assess <strong>all your essays</strong> in Modules 1–4. Four categories: Task Achievement, Organization, Grammar, Vocabulary. Scores 0–5. Understanding exactly what each score means, before you write, will significantly improve your results.
        </p>
      </div>

      <div className="rubric-container">
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 style={{ color: 'var(--blue-dark)', marginBottom: '4px' }}>ELC Academic Essay Rubric</h3>
            <p style={{ fontSize: '0.87em', color: '#555', margin: 0 }}>Official rubric used by ELC instructors to assess all academic essays in this course.</p>
          </div>
          <a href="#" className="btn btn-primary">Download Rubric (.pdf)</a>
        </div>

        <div className="rubric-preview">
          <table className="styled-table">
            <thead>
              <tr>
                <th style={{ width: '50px' }}>Score</th>
                <th>Task Achievement</th>
                <th>Organization</th>
                <th>Grammar</th>
                <th>Vocabulary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: 'center', fontWeight: 'bold' }}>5</td>
                <td>Full response; all ideas fully developed with specific detail</td>
                <td>Very well-organized; logical order; clear paragraph topics; wide range of discourse markers</td>
                <td>Wide range of structures used accurately; errors rare; academic conventions met</td>
                <td>Wide range; errors rare; consistently formal and academic</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', fontWeight: 'bold' }}>4</td>
                <td>Good extent; mostly relevant; ideas mostly well-developed</td>
                <td>Mostly well-organized; good range of discourse markers</td>
                <td>Good range; occasional errors only; does not impede communication</td>
                <td>Good range; occasional errors only; mostly formal</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', fontWeight: 'bold' }}>3</td>
                <td>All parts answered; slight imbalance in development</td>
                <td>Adequately organized; may not always follow logical order</td>
                <td>Adequate range; errors sometimes impede understanding</td>
                <td>Adequate range; some spelling/word choice errors</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', fontWeight: 'bold' }}>2</td>
                <td>Only some parts answered OR ideas underdeveloped</td>
                <td>Inadequate organization; limited logical structure</td>
                <td>Inadequate range; frequent errors impede understanding</td>
                <td>Inadequate range; frequent inaccurate use</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', fontWeight: 'bold' }}>1</td>
                <td>Minimal attempt to answer the question</td>
                <td>Poorly organized; limited or no discourse markers</td>
                <td>Poor range; systematic errors throughout</td>
                <td>Poor range; frequent spelling mistakes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 4: OPTIONAL PRACTICE */}
      <h2 className="section-title" id="practice" style={{ marginTop: '36px' }}>
        Optional Extra Practice
      </h2>

      <div className="info-box info-box-teal">
        <h4>Supplementary Practice — Not Required, Highly Recommended</h4>
        <p>
          These interactive games make vocabulary and grammar practice more engaging. Not assessed. Use them during self-study or before tests to reinforce what you have learned in the module activities.
        </p>
      </div>

      {/* <div className="practice-card">
        <h3>Kahoot! Grammar Practice</h3>
        <p>Interactive grammar quizzes covering sentence types, punctuation, and academic grammar conventions. Great for revision before writing assignments. Can be played solo or in groups.</p>
        <div className="tag-row" style={{ marginBottom: '12px' }}>
          <span className="tag-pill">Optional</span>
          <span className="tag-pill">Grammar</span>
          <span className="tag-pill">Self-Study or Class</span>
        </div>
        <a href="#" className="btn btn-outline">Kahoot Game Codes (.docx)</a>
      </div> */}

      {/* <div className="practice-card">
        <h3>Wordwall Vocabulary Games</h3>
        <p>Fast-paced vocabulary games for each module. Practice the Academic Word List with matching, flashcards, and word searches. Each module's activity page links directly to the relevant Wordwall game.</p>
        <div className="tag-row" style={{ marginBottom: '12px' }}>
          <span className="tag-pill">Optional</span>
          <span className="tag-pill">Vocabulary</span>
          <span className="tag-pill">All Modules</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <a href="/module1" className="btn btn-outline" style={{ fontSize: '0.84em' }}>Module 1 Vocabulary Game</a>
          <a href="/module2" className="btn btn-outline" style={{ fontSize: '0.84em' }}>Module 2 Vocabulary Game</a>
          <a href="/module3" className="btn btn-outline" style={{ fontSize: '0.84em' }}>Module 3 Vocabulary Game</a>
          <a href="/module4" className="btn btn-outline" style={{ fontSize: '0.84em' }}>Module 4 Vocabulary Game</a>
        </div>
      </div> */}

      {/* Call to action */}
      <div className="cta-section">
        <p style={{ fontWeight: 700, color: 'var(--blue-dark)', fontSize: '1.05em', marginBottom: '14px' }}>
          Ready to begin? Complete the diagnostic tests first, then start Module 1.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/grammar-diagnostic" className="btn btn-primary">
            Grammar Diagnostic →
          </Link>
          <Link to="/vocab-diagnostic" className="btn btn-primary">
            Vocabulary Diagnostic →
          </Link>
          <Link to="/module1" className="btn btn-outline">
            Module 1 →
          </Link>
        </div>
      </div>
    </div>
  )
}
