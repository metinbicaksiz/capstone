import { Link } from 'react-router-dom'
import './PreparationPage.css'

export default function PreparationPage() {
  const essayPrompts = [
    {
      number: 1,
      emoji: '1️⃣',
      color: '#eaf4fc',
      borderColor: 'var(--blue-dark)',
    },
    {
      number: 2,
      emoji: '2️⃣',
      color: '#e8f8f5',
      borderColor: 'var(--teal-dark)',
    },
    {
      number: 3,
      emoji: '3️⃣',
      color: '#eafaf1',
      borderColor: 'var(--green-dark)',
    },
    {
      number: 4,
      emoji: '4️⃣',
      color: '#fef9e7',
      borderColor: 'var(--orange-dark)',
    },
    {
      number: 5,
      emoji: '5️⃣',
      color: '#fdedec',
      borderColor: 'var(--red-dark)',
    },
  ]

  return (
    <div className="page-container">
      <div className="page-banner" style={{ background: 'linear-gradient(135deg, #1a4a8a, #2e86c1)' }}>
        <div className="banner-icon"></div>
        <h1>Preparation & Practice — Opinion Essays</h1>
        <p className="banner-sub">Practice writing 4-paragraph opinion essays using articles. Complete 3 out of 5 essay prompts to prepare for your final exam.</p>
        <div className="banner-tags">
          <span className="banner-tag">Weeks 13 – 14</span>
          <span className="banner-tag">5 Essay Prompts</span>
          <span className="banner-tag">Complete 3 (Optional: 4)</span>
        </div>
      </div>

      {/* Overview */}
      <h2 className="section-title">Module Overview</h2>
      <p>
        In the Preparation module, you will practice writing opinion essays with articles to prepare for your final exam. This module focuses on consolidating all the skills you have developed throughout the course in a low-stakes, practice environment. You will receive summative feedback from your instructor on each essay you submit.
      </p>

      <div className="two-col">
        <div className="info-box info-box-blue">
          <h4>What You'll Practice</h4>
          <ul className="list-unstyled">
            <li>Writing 4-paragraph opinion essays</li>
            <li>Integrating evidence from academic articles</li>
            <li>Developing clear arguments</li>
            <li>Using persuasive language</li>
            <li>Formal academic writing conventions</li>
          </ul>
        </div>
        <div className="info-box" style={{ background: '#f5f5f5', borderColor: 'var(--grey-border)' }}>
          <h4>Requirements</h4>
          <ul className="list-unstyled">
            <li><strong>Minimum:</strong> Complete 3 essays</li>
            <li><strong>Optional:</strong> Complete up to 4 essays</li>
            <li><strong>Length:</strong> ~500–700 words per essay</li>
            <li><strong>Feedback:</strong> Summative grade only</li>
            <li><strong>Deadline:</strong> By end of Week 14</li>
          </ul>
        </div>
      </div>

      {/* Essay Prompts Grid */}
      <h2 className="section-title">Essay Practice Prompts (Choose 3 of 5)</h2>
      <p>Each prompt includes background articles and requires you to write a 4-paragraph opinion essay. Select and complete any 3 essays. If you want additional practice, you can complete a 4th essay.</p>

      <div className="essay-grid">
        {essayPrompts.map((prompt) => (
          <Link
            key={prompt.number}
            to={`/preparation/essay-${prompt.number}`}
            className="essay-card"
            style={{
              background: prompt.color,
              borderLeftColor: prompt.borderColor,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ fontSize: '1.8em' }}>{prompt.emoji}</div>
              <h3 style={{ margin: 0 }}>Essay Prompt {prompt.number}</h3>
            </div>
            <p style={{ flex: 1, fontSize: '0.9em', color: 'var(--text-muted)', marginBottom: '14px' }}>
              Opinion essay on assigned topic with supporting articles.
            </p>
            <span className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
              View Prompt & Submit →
            </span>
          </Link>
        ))}
      </div>

      {/* Assessment Information */}
      <h2 className="section-title">Assessment & Feedback</h2>
      <p>Each essay you submit will receive a <strong>summative grade</strong> based on the 4-category rubric below. Your instructor will review your essay and enter a score (0–5) in each category.</p>

      <div className="info-box info-box-blue">
        <h4>Essay Rubric (All Essays Graded on This Scale)</h4>

        <div className="rubric-table-wrapper">
          <table className="rubric-table">
            <thead>
              <tr>
                <th>Task Achievement</th>
                <th>Organization</th>
                <th>Grammar & Mechanics</th>
                <th>Vocabulary & Tone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="rubric-desc">Fulfills prompt; develops clear opinion; integrates evidence effectively</td>
                <td className="rubric-desc">Clear structure; logical flow; coherent paragraph development</td>
                <td className="rubric-desc">Range and accuracy of structures; correct punctuation and spelling</td>
                <td className="rubric-desc">Academic vocabulary; appropriate formal tone; precise word choice</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ marginTop: '12px', fontSize: '0.9em', color: 'var(--text-muted)' }}>
          <strong>Note:</strong> Instructors enter scores (0–5) in each box. Students will receive their final grade based on this rubric.
        </p>
      </div>

      {/* Tips for Success */}
      <h2 className="section-title">Tips for Success</h2>
      <div className="two-col">
        <div className="info-box info-box-teal">
          <h4>Before You Write</h4>
          <ul className="list-unstyled">
            <li>Read the essay prompt carefully</li>
            <li>Read the articles thoroughly</li>
            <li>Plan your argument and evidence</li>
            <li>Create a brief outline</li>
          </ul>
        </div>
        <div className="info-box info-box-green">
          <h4>After You Write</h4>
          <ul className="list-unstyled">
            <li>Check the rubric before submitting</li>
            <li>Proofread for grammar and spelling</li>
            <li>Verify you used article evidence</li>
            <li>Ensure 4-paragraph structure</li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn-outline">
          ← Back to Home
        </Link>
        <Link to="/preparation/essay-1" className="btn btn-primary">
          Start: Essay Prompt 1 →
        </Link>
      </div>
    </div>
  )
}
