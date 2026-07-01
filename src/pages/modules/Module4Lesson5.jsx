import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import EssaySubmissionForm from '../../components/EssaySubmissionFinal'
import './ModulesPage.css'

export default function Module4Lesson5() {
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
        <span>4.5 Final Essay Submission</span>
      </div>

      <div class="page-banner" style="background: linear-gradient(135deg, #093C5D, #3B7597);">
        <h1>4.5 Final Essay Submission</h1>
        <p class="banner-sub">Submit your revised final argumentative essay and receive instructor feedback on your work.</p>
      </div>

      <!-- Final Submission Instructions -->
      <h2 class="section-title">Final Argumentative Essay</h2>
      <!-- Required Articles -->
      <p>Your final essay must incorporate evidence and ideas from at least 3 academic articles. You will be provided with articles that support different positions on the assigned topic.</p>
      </br>
      <div class="info-box info-box-teal">
        <h4>Articles</h4>
        <p style="margin:0;"><a href="../../public/pdfs/Physical_Education_Article 2.pdf" target="_blank">Physical Education and Student Well-being</a></p>
        <p style="margin:0;"><a href="../../public/pdfs/Social_Media_Article.pdf" target="_blank">Social Media and Its Impact on Mental Health</a></p>
      </div>
      
      <div class="info-box info-box-blue">
      <p>Submit your final, revised argumentative essay. This is your summative assessment for Module 4. Your essay should:</p>
      <ul style="margin-left:30px;">
        <li>Be approximately 500–700 words (4 paragraphs)</li>
        <li>Include a clear, defensible thesis statement</li>
        <li>Use evidence from the academic articles you read</li>
        <li>Use persuasive reasoning and language</li>
        <li>Follow academic writing conventions</li>
        <li>Summative Feedback will be provided</li>
      </ul>
      </div>

      <h3>Prompt 1</h3>
      <p>Many people believe that social media has become an important part of daily life, while others argue that it causes more harm than good.</p>
      <p>Do you think social media has a positive impact on people's lives? Why or why not?</p>
      </br>
      <h3>Prompt 2</h3>
      <p>Many people believe that regular physical activity should be a required part of every student's education, while others think students should be free to choose whether to participate.</p>
      <p>Do you think schools should require all students to take part in regular physical education? Why or why not?</p>
      </br>
      <!-- Feedback Information -->
      <h3>Feedback</h3>
      <p>Your final essay will be assessed by your instructor using the 4-category rubric. You will receive:</p>
      
      <p><strong>Formative feedback:</strong> Guidance on how to improve your argumentative writing</p>
      <p><strong>Summative score:</strong> A score (0–5) in each rubric category</p>
      <p><strong>Overall grade:</strong> Percentage grade for Module 4</p>
      </br>

      <div class="info-box info-box-teal">
        <h4>Essay Rubric for Peer Review</h4>
        <p>Use the essay rubric to grade the paper and provide any additional feedback in the comments section while submitting the file. You will assign a score (0–5) in each category and provide written feedback.</p>
        <p style="margin:0;"><a href="../../public/pdfs/ELC_AcademicEssayRubric.pdf" target="_blank">Rubrics</a></p>
      </div>

      <!-- Navigation -->` }} />

        <EssaySubmissionForm />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module4/lesson-4"} className="btn btn-outline">← Previous Lesson</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
