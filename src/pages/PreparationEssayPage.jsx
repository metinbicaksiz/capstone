import { Link, useParams, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import EssaySubmissionForm from '../components/EssaySubmissionForm'
import './PreparationPage.css'

const RUBRIC_CATEGORIES = [
  { key: 'task-achievement', label: 'Task Achievement' },
  { key: 'organization', label: 'Organization' },
  { key: 'grammar-mechanics', label: 'Grammar & Mechanics' },
  { key: 'vocabulary-tone', label: 'Vocabulary & Tone' },
]

const RUBRIC_LEVELS = ['NONE', 'MINIMAL', 'BASIC', 'ADEQUATE', 'EFFECTIVE', 'ADVANCED']

export default function PreparationEssayPage() {
  const { essaySlug } = useParams()
  const { profile } = useAuth()
  const num = parseInt(essaySlug?.replace('essay-', ''), 10)

  if (isNaN(num) || num < 1 || num > 5) return <Navigate to="/preparation" replace />

  const isInstructor = profile?.role === 'teacher' || profile?.role === 'admin'

  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <nav style={{ fontSize: '0.9em', color: '#888', marginBottom: '16px' }}>
        <Link to="/" style={{ color: '#888' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <Link to="/preparation" style={{ color: '#888' }}>Preparation</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span>Essay Prompt {num}</span>
      </nav>

      {/* Banner */}
      <div className="page-banner" style={{ background: 'linear-gradient(135deg, #7f8c8d, #95a5a6)', marginBottom: '28px' }}>
        <div className="banner-icon" style={{ fontSize: '2em', marginBottom: '8px' }}>{num}️⃣</div>
        <h1>Essay Prompt {num}</h1>
        <p className="banner-sub">Write a 4-paragraph opinion essay using evidence from the provided articles.</p>
        <div className="banner-tags">
          <span className="banner-tag">4 Paragraphs</span>
          <span className="banner-tag">3 Articles</span>
          <span className="banner-tag">~500–700 words</span>
        </div>
      </div>

      {/* Essay Prompt */}
      <h2 className="section-title">Your Essay Prompt</h2>
      <div className="info-box info-box-blue" style={{ fontSize: '1.05em', padding: '24px' }}>
        <p style={{ margin: 0 }}><strong>Essay Topic to Be Added</strong></p>
        <p style={{ margin: '12px 0 0 0', fontSize: '0.95em', color: 'var(--text-muted)' }}>
          The essay prompt and specific writing instructions will appear here.
        </p>
      </div>

      {/* Supporting Articles */}
      <h2 className="section-title">Supporting Articles</h2>
      <p>Read the following articles. You must integrate evidence from at least 2 of these articles into your essay.</p>
      <div style={{ background: 'var(--grey-bg)', border: '1px solid var(--grey-border)', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
        {[1, 2, 3].map(n => (
          <div key={n} style={{ marginBottom: n < 3 ? '16px' : 0 }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Article {n}</h4>
            <p style={{ margin: 0, fontSize: '0.9em', color: 'var(--text-muted)' }}>Title and link to be added</p>
          </div>
        ))}
      </div>

      {/* Essay Requirements */}
      <h2 className="section-title">Essay Requirements</h2>
      <div className="two-col">
        <div className="info-box info-box-teal">
          <h4>Structure</h4>
          <ul className="list-unstyled" style={{ fontSize: '0.9em' }}>
            <li>Paragraph 1: Introduction with thesis</li>
            <li>Paragraph 2: Supporting argument + evidence</li>
            <li>Paragraph 3: Supporting argument + evidence</li>
            <li>Paragraph 4: Conclusion</li>
          </ul>
        </div>
        <div className="info-box info-box-green">
          <h4>Guidelines</h4>
          <ul className="list-unstyled" style={{ fontSize: '0.9em' }}>
            <li>Length: 500–700 words</li>
            <li>Evidence: At least 2 articles cited</li>
            <li>Language: Formal, academic</li>
            <li>Format: Double-spaced, clear font</li>
          </ul>
        </div>
      </div>

      {/* Essay Submission */}
      <h2 className="section-title">Submit Your Essay</h2>
      <EssaySubmissionForm />

      {/* Rubric — instructors/admins only */}
      {isInstructor && (
        <>
          <h2 className="section-title" style={{ marginTop: '28px' }}>Summative Grade Rubric</h2>
          <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              {RUBRIC_CATEGORIES.map((cat, i) => (
                <div key={cat.key} style={{ background: i === 0 ? '#7f8c8d' : '#95a5a6', color: '#fff', padding: '10px 16px', borderRadius: '6px', fontWeight: 600 }}>
                  {cat.label}
                </div>
              ))}
            </div>

            <div className="rubric-table-wrapper">
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                <thead>
                  <tr style={{ background: '#f0f0f0', borderBottom: '2px solid #7f8c8d' }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600, width: '20%' }}>Category</th>
                    {RUBRIC_LEVELS.map(level => (
                      <th key={level} style={{ padding: '12px', textAlign: 'center', fontWeight: 600, borderLeft: '1px solid #ddd' }}>{level}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RUBRIC_CATEGORIES.map((cat, i) => (
                    <tr key={cat.key} style={{ borderBottom: i < RUBRIC_CATEGORIES.length - 1 ? '1px solid #ddd' : 'none' }}>
                      <td style={{ padding: '12px', fontWeight: 600 }}>{cat.label}</td>
                      {RUBRIC_LEVELS.map(level => (
                        <td key={level} style={{ padding: '12px', textAlign: 'center', borderLeft: '1px solid #ddd' }}>
                          <input type="radio" name={`essay-${num}-${cat.key}`} value={level} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ marginBottom: '10px' }}>Comments</h4>
              <textarea
                style={{ width: '100%', height: '100px', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', fontFamily: 'inherit', boxSizing: 'border-box' }}
                placeholder="Optional feedback for the student..."
              />
            </div>

            <div style={{ textAlign: 'right' }}>
              <button className="btn btn-primary" style={{ background: '#7f8c8d', borderColor: '#7f8c8d' }}>
                Finalize Grade
              </button>
            </div>
          </div>
        </>
      )}

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '28px', flexWrap: 'wrap', gap: '12px' }}>
        <Link to="/preparation" className="btn btn-outline">← All Prompts</Link>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {num > 1 && (
            <Link to={`/preparation/essay-${num - 1}`} className="btn btn-outline">
              ← Essay {num - 1}
            </Link>
          )}
          {num < 5 && (
            <Link to={`/preparation/essay-${num + 1}`} className="btn btn-primary">
              Essay {num + 1} →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
