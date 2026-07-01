import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  const modules = [
    {
      number: 1,
      title: 'From Paragraph to Essay',
      weeks: 'Weeks 1–3',
      description: 'Build your academic writing foundations — paragraph structure, essay organization, grammar, and vocabulary.',
      color: 'blue'
    },
    {
      number: 2,
      title: 'Advantages & Disadvantages Essays',
      weeks: 'Weeks 4–6',
      description: 'Learn to write a balanced essay, integrate ideas, and practice academic argumentation.',
      color: 'orange'
    },
    {
      number: 3,
      title: 'Cause & Effect Essays',
      weeks: 'Weeks 7–9',
      description: 'Develop analytical writing skills, use causal language, and explore real-world issues through academic writing.',
      color: 'teal'
    },
    {
      number: 4,
      title: 'Opinion Essays',
      weeks: 'Weeks 10–12',
      description: 'Write a full academic essay by choosing a position and supporting your arguments with evidence from articles.',
      color: 'green'
    },
    {
      number: 'Prep',
      title: 'Final Preparation',
      weeks: 'Weeks 13–14',
      description: 'Consolidation & Exam Preparation. Timed writing practice, mixed-genre review, revision workshops, and exam strategies.',
      color: 'prep'
    },
    {
      number:'Study Materials',
      title: 'From Paragraph to Essay',
      weeks: 'The whole course',
      description: 'Explore supplementary resources to reinforce your learning and support your success in the course.',
      color: 'blue'
    },
  ]

  return (
    <div className="page-container">
      <div className="page-banner">
        <div className="banner-content">
          <h1>Academic Writing in English</h1>
          <p style={{ textTransform: 'uppercase', fontSize: '0.9em', opacity: 0.9 }}>EFL Interactive Course</p>
          <p>Develop your essay-writing skills step by step with practice, feedback, and support at every stage.</p>
          <div className="banner-tags">
            <span className="banner-tag">B1 Intermediate</span>
            <span className="banner-tag">14 Weeks</span>
            <span className="banner-tag">Online + Classroom</span>
            <span className="banner-tag">4 Modules + Preparation</span>
          </div>
        </div>
      </div>

      {/* <div className="info-box info-box-blue" style={{ marginBottom: '28px' }}>
        <h4>Welcome to Your Academic Writing Course!</h4>
        <p>This course is a <strong>complementary extension</strong> to your classroom instruction — not a replacement, but a dedicated space to deepen your academic writing skills through additional practice, reflection, and targeted support. Over the next <strong>14 weeks</strong>, you will work through structured modules with clear deadlines that align with your classroom schedule.</p>
        <p>This is an <strong>asynchronous course with built-in structure</strong>. While you have flexibility in when you complete activities within each week, each module has a defined timeline to keep you progressing alongside your classmates.</p>
        <p style={{ marginBottom: 0 }}>Together, we're building a <strong>community of practice</strong> where you learn not just from your instructor, but also through collaboration and feedback with your peers. <strong>Work through each section in order, complete all required tasks by their deadlines, and engage actively in discussions and peer collaboration.</strong></p>
      </div> */}

      {/* Course Modules Section */}
      <h2 className="section-title">Course Modules</h2>
      <div className="module-grid">
        {modules.map((module) => (
          <Link
            key={module.number}
            to={
              module.number === 'Prep'
                ? '/preparation'
                : module.number === 'Study Materials'
                ? '/materials'
                : `/module${module.number}`
            }
            className={`module-card card-${module.color}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <h3>Module {module.number}</h3>
            <div className="weeks">{module.weeks}</div>
            <p>{module.description}</p>
            <button className="btn btn-primary">
              {module.number === 'Prep'
                ? 'Go to Preparation'
                : module.number === 'Study Materials'
                ? 'Go to Study Materials'
                : `Start Module ${module.number}`} →
            </button>
          </Link>
        ))}
      </div>


      {/* Course Overview Section */}
      <h2 className="section-title">Course Assessment & Feedback</h2>
      <div className="two-col" style={{ marginBottom: '28px' }}>
        <div className="info-box info-box-blue">
          <h4>Assessment Breakdown</h4>
          <ul className="list-unstyled">
            <li>Essay 1 — Advantages/Disadvantages <strong>(10%)</strong></li>
            <li>Essay 2 — Cause & Effect <strong>(10%)</strong></li>
            <li>Essay 3 — Opinion Essay <strong>(10%)</strong></li>
            <li>Peer Feedback Assignment <strong>(15%)</strong></li>
            <li>Participation & Engagement <strong>(25%)</strong></li>
            <li>Final Reading-into-Writing Exam <strong>(30%)</strong></li>
          </ul>
        </div>

        <div className="info-box" style={{ background: 'var(--teal-bg)', borderColor: 'var(--teal-border)' }}>
          <h4>Types of Feedback You Will Receive</h4>
          <ul className="list-unstyled">
            <li>Instant feedback on interactive practice activities</li>
            <li>Instructor formative feedback on your drafts</li>
            <li>Summative feedback on graded essays</li>
            <li>Structured peer review & collaboration feedback</li>
            <li>Individual tutorial support (Fridays, 15 minutes)</li>
          </ul>
        </div> 
      </div>



      <h2 className="section-title">Course Structure & Learning Path</h2>
      <div className="writing-journey">
        <div className="step-card">
          <div className="step-num">1</div>
          <div className="step-body">
            <h4>Module 1 — Paragraph & Essay Foundations</h4>
            <p>Learn paragraph structure, essay organization, academic vocabulary, and formal writing conventions. Practice writing individual paragraphs and a complete essay outline.</p>
          </div>
        </div>
        <div className="step-card">
          <div className="step-num">2</div>
          <div className="step-body">
            <h4>Module 2 — Advantages & Disadvantages Essay (500–700 words)</h4>
            <p>Write your first full academic essay presenting both sides of an argument. Receive instructor formative feedback on your draft before the final submission.</p>
          </div>
        </div>
        <div className="step-card">
          <div className="step-num">3</div>
          <div className="step-body">
            <h4>Module 3 — Cause & Effect Essay (500–700 words)</h4>
            <p>Write an analytical essay exploring causes and effects of a real-world topic. Practice integrating ideas from readings into your academic argument.</p>
          </div>
        </div>
        <div className="step-card">
          <div className="step-num">4</div>
          <div className="step-body">
            <h4>Module 4 — Opinion Essay with Sources (500–700 words) — Most Important!</h4>
            <p>Write a full academic opinion essay choosing a clear position and supporting it with evidence from provided articles. Submit a draft (formative), complete peer review, then submit your final essay (summative).</p>
          </div>
        </div>
        <div className="step-card">
          <div className="step-num step-num-5">5</div>
          <div className="step-body">
            <h4>Preparation & Practice — Opinion Essays with Articles</h4>
            <p>Practice writing 4-paragraph opinion essays with 5 different prompts. Complete 3 essays (optional: 4th essay for additional practice). Receive summative feedback from your instructor on each essay to prepare for your final examination.</p>
          </div>
        </div>
      </div>

      <h2 className="section-title">Quick Links</h2>
      <div className="one-col">
        <Link to="/materials" className="module-card" style={{ textDecoration: 'none' }}>
          <h3>📂 Course Study Materials</h3>
          <p>Grammar booklets, academic word lists, diagnostic tests, writing guides, and vocabulary resources.</p>
          <button className="btn btn-outline">Access Materials →</button>
        </Link>
      </div>
    </div>
  )
}
