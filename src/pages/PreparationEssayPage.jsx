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

const ARTICLES_BY_ESSAY = {
  1: [
    { title: 'Packaging Waste in the Supply Chain: A Systematic Literature Review', file: 'Packaging_Waste_in_the_Supply_Chain_A_Systematic_L.pdf' },
    { title: 'Should Parents be Involved in their Children’s Schooling?', file: 'ShouldParentsbeInvolvedintheirChildrensSchoolingaccepted.pdf' },
  ],
}

const PROMPTS_BY_ESSAY = {
  1: [
    {
      heading: 'Essay Prompt 1 – Packaging Waste',
      question: 'To what extent should governments introduce stricter regulations to reduce packaging waste, even if these regulations increase costs for businesses and consumers?',
      guidance: 'Use evidence from the article to support your opinion. You may discuss the environmental impact of packaging waste, the role of e-commerce, business responsibilities, consumer behavior, or possible solutions.',
    },
    {
      heading: 'Essay Prompt 2 – Parent Involvement in Education',
      question: 'To what extent should parents be actively involved in their children’s education?',
      guidance: 'Use evidence from the article to support your opinion. You may discuss the benefits and drawbacks of parent involvement, the importance of the quality of involvement, homework support, student independence, or the roles of parents and teachers.',
    },
  ],
}

export default function PreparationEssayPage() {
  const { essaySlug } = useParams()
  const { profile } = useAuth()
  const num = parseInt(essaySlug?.replace('essay-', ''), 10)

  if (isNaN(num) || num < 1 || num > 5) return <Navigate to="/preparation" replace />

  const isInstructor = profile?.role === 'teacher' || profile?.role === 'admin'

  return (
    <div className="page-container">
     

      {/* Banner */}
      <div className="page-banner" style={{ background: 'linear-gradient(135deg, #7f8c8d, #95a5a6)', marginBottom: '28px' }}>
        <h1>Essay Prompt {num}</h1>
      </div>

      {/* Supporting Articles */}
      <h2 className="section-title">Supporting Articles</h2>
      <p>Read both articles, choose one essay prompt and one side of the argument, then write a 4-paragraph opinion essay using evidence from the article to support your ideas.</p>
      <div style={{ background: 'var(--grey-bg)', border: '1px solid var(--grey-border)', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
        {[1, 2].map(n => {
          const article = ARTICLES_BY_ESSAY[num]?.[n - 1]
          return (
            <div key={n} style={{ marginBottom: n < 2 ? '16px' : 0 }}>
              <h4 style={{ margin: '0 0 8px 0' }}>Article {n}</h4>
              {article ? (
                <a href={`/pdfs/articles/${article.file}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9em' }}>
                  {article.title}
                </a>
              ) : (
                <p style={{ margin: 0, fontSize: '0.9em', color: 'var(--text-muted)' }}>Title and link to be added</p>
              )}
            </div>
          )
        })}
      </div>

      {/* Essay Prompt */}
      <h2 className="section-title">Your Essay Prompt</h2>
      {PROMPTS_BY_ESSAY[num] ? (
        PROMPTS_BY_ESSAY[num].map((prompt, i) => (
          <div
            key={prompt.heading}
            className="info-box info-box-blue"
            style={{ fontSize: '1.05em', padding: '24px', marginBottom: i < PROMPTS_BY_ESSAY[num].length - 1 ? '16px' : 0 }}
          >
            <p style={{ margin: 0 }}><strong>{prompt.heading}</strong></p>
            <p style={{ margin: '12px 0 0 0' }}>{prompt.question}</p>
            <p style={{ margin: '12px 0 0 0', fontSize: '0.95em', color: 'var(--text-muted)' }}>
              {prompt.guidance}
            </p>
          </div>
        ))
      ) : (
        <div className="info-box info-box-blue" style={{ fontSize: '1.05em', padding: '24px' }}>
          <p style={{ margin: 0 }}><strong>Essay Topic to Be Added</strong></p>
          <p style={{ margin: '12px 0 0 0', fontSize: '0.95em', color: 'var(--text-muted)' }}>
            The essay prompt and specific writing instructions will appear here.
          </p>
        </div>
      )}

      <br/>
      <div className="info-box info-box-teal">
        <h4>Essay Rubric for Peer Review</h4>
        <p>Use the essay rubric to grade the paper and provide any additional feedback in the comments section while submitting the file. You will assign a score (0–5) in each category and provide written feedback.</p>
        <p><a href="../public/pdfs/ELC_AcademicEssayRubric.pdf" target="_blank">Rubrics</a></p>
      </div>

      {/* Essay Submission */}
      <h2 className="section-title">Submit Your Essay</h2>
      <EssaySubmissionForm />

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
