import { Link, useLocation } from 'react-router-dom'
import './ModuleSidebar.css'

export default function ModuleSidebar({ moduleNumber, moduleName }) {
  const location = useLocation()

  // Module-specific lesson definitions based on original HTML structure
  const lessonsByModule = {
    1: [
      { id: 1, title: 'Orientation & Activation', description: 'Welcome, objectives, checklist' },
      { id: 2, title: 'Theory & Knowledge Building', description: 'Paragraphs, essays, grammar, vocab' },
      { id: 3, title: 'Interactive Activities', description: 'H5P practice with instant feedback' },
      { id: 4, title: 'Reading, Discussion & Collaboration', description: 'Sample texts & discussion forum' },
      { id: 5, title: 'Writing Practice & Submission', description: 'Paragraph, outline, essay assignment' },
    ],
    2: [
      { id: 1, title: 'Orientation & Activation', description: 'Welcome, objectives, checklist' },
      { id: 2, title: 'Theory & Knowledge Building', description: 'Essays, grammar, vocab' },
      { id: 3, title: 'Interactive Activities', description: 'Practice with instant feedback' },
      { id: 4, title: 'Reading, Discussion & Collaboration', description: 'Articles & discussion' },
      { id: 5, title: 'Writing Practice & Submission', description: 'Essay assignment' },
    ],
    3: [
      { id: 1, title: 'Orientation & Activation', description: 'Welcome, objectives, checklist' },
      { id: 2, title: 'Theory & Knowledge Building', description: 'Essays, grammar, vocab' },
      { id: 3, title: 'Interactive Activities', description: 'Practice with instant feedback' },
      { id: 4, title: 'Reading, Discussion & Collaboration', description: 'Articles & discussion' },
      { id: 5, title: 'Writing Practice & Submission', description: 'Essay assignment' },
    ],
    4: [
      { id: 1, title: 'Orientation & Activation', description: 'Welcome, objectives, checklist' },
      { id: 2, title: 'Interactive Knowledge Building', description: 'Theory and interactive activities' },
      { id: 3, title: 'Reading, Discussion & Collaboration', description: 'Articles, discussion, pair work' },
      { id: 4, title: 'Writing, Drafting & Feedback', description: 'Draft essay, peer review, revision' },
      { id: 5, title: 'Final Essay Submission', description: 'Submit your final argumentative essay' },
    ],
  }

  const lessons = lessonsByModule[moduleNumber] || lessonsByModule[1]

  const isActive = (path) => location.pathname === path

  return (
    <aside className="module-sidebar">
      <div className="sidebar-box">
        <div className="sidebar-box-title">📖 Module {moduleNumber} — Navigation</div>
        <ul className="sidebar-nav">
          <li>
            <Link
              to={`/module${moduleNumber}`}
              className={isActive(`/module${moduleNumber}`) ? 'active' : ''}
            >
              Module Overview
            </Link>
          </li>
          <div className="sidebar-divider"></div>
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <Link
                to={`/module${moduleNumber}/lesson-${lesson.id}`}
                className={isActive(`/module${moduleNumber}/lesson-${lesson.id}`) ? 'active' : ''}
              >
                {moduleNumber}.{lesson.id} {lesson.title}
                <small>{lesson.description}</small>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="sidebar-box">
        <div className="sidebar-box-title">🔗 Module Links</div>
        <ul className="sidebar-nav">
          <li><Link to="/materials">Course Study Materials</Link></li>
          <li>
            {moduleNumber < 4 ? (
              <Link to={`/module${moduleNumber + 1}`}>Next: Module {moduleNumber + 1}</Link>
            ) : (
              <Link to="/preparation">Next: Preparation</Link>
            )}
          </li>
        </ul>
      </div> */}
    </aside>
  )
}
