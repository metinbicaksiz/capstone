import { Link, useParams } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

const lessonContent = {
  1: {
    orientation: {
      title: 'Orientation & Activation',
      icon: '🎯',
      content: `
        <h2 className="section-title">Welcome to Module 1!</h2>
        <p>In this module, you will build your foundational academic writing skills. You'll learn about paragraph structure, essay organization, and how to write in a formal academic style.</p>

        <h3>Module Objectives</h3>
        <ul className="objectives-list">
          <li>Understand paragraph structure and components</li>
          <li>Learn the four-paragraph essay format</li>
          <li>Apply academic writing conventions</li>
          <li>Use proper sentence structures</li>
          <li>Expand your academic vocabulary</li>
        </ul>

        <h3>What to Expect</h3>
        <p>This module includes theory lessons, interactive activities with immediate feedback, reading materials, discussion forums, and writing practice. Work through each section in order for best results.</p>
      `
    }
  }
}

export default function ModuleLesson() {
  const { moduleNum, lessonNum } = useParams()

  const moduleNames = {
    1: 'Module 1 — From Paragraph to Essay',
    2: 'Module 2 — Advantages & Disadvantages Essays',
    3: 'Module 3 — Cause & Effect Essays',
    4: 'Module 4 — Argumentative Essays'
  }

  return (
    <ModuleLayout moduleNumber={moduleNum} moduleName={moduleNames[moduleNum]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="info-box info-box-blue">
          <h4>📚 Lesson Content Coming Soon</h4>
          <p>This lesson page is ready for your content. Each lesson will include theory, examples, activities, and resources to support your learning.</p>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={`/module${moduleNum}`} className="btn btn-outline">
            ← Back to Module Overview
          </Link>
          <Link to="/" className="btn btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
