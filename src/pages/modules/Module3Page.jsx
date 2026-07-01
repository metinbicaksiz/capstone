import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module3Page() {
  return (
    <ModuleLayout
      moduleNumber={3}
      moduleName="Module 3 — Cause & Effect Essays"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

      {/* Module Overview */}
      <h2 className="section-title">📋 Module 3 Overview</h2>
      <p>
        Module 3 introduces cause and effect essay writing. In this module, you will explore how events, actions, or conditions lead to results. This essay type develops your analytical skills and teaches you to explain complex relationships between ideas. You will integrate sources and develop sophisticated arguments.
      </p>

      <ul className="objectives-list">
        <li>Understand the structure of cause and effect essays</li>
        <li>Identify and explain causal relationships</li>
        <li>Use causal language and transitions effectively</li>
        <li>Develop multi-paragraph cause and effect arguments</li>
        <li>Write a 500–700 word cause and effect essay with sources</li>
      </ul>

      <div className="two-col">
        <div className="info-box info-box-blue">
          <h4>📅 Module 3 Schedule</h4>
          <ul style={{ fontSize: '0.89em', listStyle: 'none', padding: 0, margin: 0 }}>
            <li><strong>Week 7:</strong> Orientation, theory, interactive activities</li>
            <li><strong>Week 8:</strong> Reading, discussion, source analysis</li>
            <li><strong>Week 9:</strong> Essay submission, instructor feedback</li>
          </ul>
        </div>
        <div className="info-box" style={{ background: 'var(--teal-bg)', borderColor: 'var(--teal-border)' }}>
          <h4>🎯 What You Will Learn</h4>
          <ul style={{ fontSize: '0.89em', listStyle: 'none', padding: 0, margin: 0 }}>
            <li>Cause and effect essay structure and organization</li>
            <li>Causal language and academic transitions</li>
            <li>Analysis of complex relationships</li>
            <li>Integration of external sources</li>
          </ul>
        </div>
      </div>

      {/* Module Structure */}
      <h2 className="section-title">🗂️ Module Structure</h2>
      <p>Work through the sections below in order. Each section builds on the previous one.</p>

      <div className="module-steps">
        <div className="step-row">
          <div className="step-num">1</div>
          <div className="step-body">
            <h4>3.1 — Orientation & Activation</h4>
            <p>Welcome to Module 3, review learning objectives, and explore examples of cause and effect essays.</p>
          </div>
        </div>
        <div className="step-row">
          <div className="step-num">2</div>
          <div className="step-body">
            <h4>3.2 — Theory & Knowledge Building</h4>
            <p>Learn about cause and effect essay structure, causal language, and how to explain complex relationships clearly.</p>
          </div>
        </div>
        <div className="step-row">
          <div className="step-num">3</div>
          <div className="step-body">
            <h4>3.3 — Interactive Activities</h4>
            <p>Practice identifying causes and effects, organizing arguments, and using causal transitions with immediate feedback.</p>
          </div>
        </div>
        <div className="step-row">
          <div className="step-num">4</div>
          <div className="step-body">
            <h4>3.4 — Reading, Discussion & Collaboration</h4>
            <p>Analyze cause and effect essays, study how authors explain causal relationships, and discuss with classmates.</p>
          </div>
        </div>
        <div className="step-row">
          <div className="step-num">5</div>
          <div className="step-body">
            <h4>3.5 — Writing Practice & Submission</h4>
            <p>Write a 500–700 word cause and effect essay. Submit draft for formative feedback, then final version for grading (10% of course grade).</p>
          </div>
        </div>
      </div>

      {/* Assessment */}
      <h2 className="section-title">📊 Module 3 Assessment</h2>
      <div className="two-col">
        <div className="info-box info-box-blue">
          <h4>📝 Graded Essay Assignment</h4>
          <p>
            Write a 500–700 word cause and effect essay on a topic of your choice. This is your <strong>second graded essay (10% of your course grade)</strong>. Graded on the four-category rubric.
          </p>
          <p style={{ margin: 0 }}>
            <strong>Deadline:</strong> End of Week 9.
          </p>
        </div>
        <div className="info-box" style={{ background: 'var(--teal-bg)', borderColor: 'var(--teal-border)' }}>
          <h4>💬 Discussion & Collaboration</h4>
          <p>
            Participate in discussions about causes and effects of real-world issues. Engagement counts toward your <strong>Participation grade (25%).</strong>
          </p>
          <p style={{ margin: 0 }}>
            <strong>Deadline:</strong> Before the end of Week 9.
          </p>
        </div>
      </div>

      {/* Tips */}
      <div className="info-box info-box-orange">
        <h4>💡 Tips for Success in Module 3</h4>
        <ul style={{ margin: 0 }}>
          <li>Use causal language: because, as a result, consequently, led to, caused by</li>
          <li>Consider both immediate and long-term effects</li>
          <li>Avoid oversimplifying complex causal relationships</li>
          <li>Use transition words to show cause-effect relationships clearly</li>
          <li>Support each causal claim with evidence or explanation</li>
        </ul>
      </div>

      {/* Navigation */}
      <div style={{ marginTop: '28px', textAlign: 'center' }}>
        <Link to="/module3" className="btn btn-primary" style={{ fontSize: '1em', padding: '12px 32px' }}>
          Start Module 3 → 3.1 Orientation & Activation
        </Link>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn-outline">
          ← Back to Home
        </Link>
        <Link to="/module2" className="btn btn-outline">
          ← Back to Module 2
        </Link>
      </div>

      </div>
    </ModuleLayout>
  )
}
