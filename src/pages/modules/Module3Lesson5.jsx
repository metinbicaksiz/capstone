import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import EssaySubmissionForm from '../../components/EssaySubmissionFinal'
import './ModulesPage.css'

export default function Module3Lesson5() {
  const moduleNames = {
    1: 'Module 1 — From Paragraph to Essay',
    2: 'Module 2 — Advantages & Disadvantages Essays',
    3: 'Module 3 — Cause & Effect Essays',
    4: 'Module 4 — Argumentative Essays'
  }

  return (
    <ModuleLayout moduleNumber={3} moduleName={moduleNames[3]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div dangerouslySetInnerHTML={{ __html: `<div class="breadcrumb">
        <a href="../index.html">Home</a>
        <span class="breadcrumb-sep">›</span>
        <a href="index.html">Module 3</a>
        <span class="breadcrumb-sep">›</span>
        <span>3.5 Final Essay Submission</span>
      </div>

      <div class="page-banner" style="background: linear-gradient(135deg, #093C5D, #3B7597);">
        <h1>3.5 Final Essay Submission</h1>
        <p class="banner-sub">Submit your revised final cause-and-effect essay and receive instructor feedback on your work.</p>
      </div>

      <!-- Final Submission Instructions -->
      <h2 class="section-title">Final Cause-and-Effect Essay</h2>
      <!-- Required Article -->
      <p>Your final essay must incorporate evidence and examples from the assigned article for your chosen prompt. You will be provided with articles that support the causes and/or effects discussed in each topic.</p>
      </br>
      <div class="info-box info-box-teal">
        <h4>Articles</h4>
        <p style="margin:0;"><a href="/pdfs/Article2causeeffect.pdf" target="_blank">Bullying in Elementary Schools: Its Causes and Effects on Students</a></p>
        <p style="margin:0;"><a href="/pdfs/article1causeeffect.pdf" target="_blank">Cultural Diversity and Information &amp; Communication Impacts on Language Learning</a></p>
      </div>

      <div class="info-box info-box-blue">
      <p>Submit your final, revised cause-and-effect essay. This is your summative assessment for Module 3. Your essay should:</p>
      <ul style="margin-left:30px;">
        <li>Be approximately 500–700 words (4 paragraphs)</li>
        <li>Include a clear thesis statement identifying the causes and/or effects you will discuss</li>
        <li>Use evidence and examples from the assigned article</li>
        <li>Use causal language and connectors (because, as a result, consequently, led to, etc.)</li>
        <li>Follow academic writing conventions</li>
        <li>Summative feedback will be provided</li>
      </ul>
      </div>

      <h3>Cause-and-Effect Essay Assignment 1</h3>
      <p><strong>Essay Prompt:</strong> What are the causes and/or effects of bullying in schools?</p>
      <p>Using evidence from the assigned article, write a cause-and-effect essay. You may choose one of the following approaches:</p>
      <ul style="margin-left:30px;">
        <li>Discuss the causes of bullying.</li>
        <li>Discuss the effects of bullying.</li>
        <li>Discuss both the causes and the effects of bullying (e.g., one body paragraph on causes and one on effects).</li>
      </ul>
      <p>Support your ideas with specific evidence and examples from the assigned reading.</p>
      </br>
      <h3>Cause-and-Effect Essay Assignment 2</h3>
      <p><strong>Essay Prompt:</strong> What are the causes and/or effects of cultural diversity in language learning and communication?</p>
      <p>Using evidence from the assigned article, write a cause-and-effect essay. You may choose one of the following approaches:</p>
      <ul style="margin-left:30px;">
        <li>Discuss the causes of cultural diversity in language learning and communication.</li>
        <li>Discuss the effects of cultural diversity in language learning and communication.</li>
        <li>Discuss both the causes and the effects (e.g., one body paragraph on causes and one on effects).</li>
      </ul>
      <p>Support your ideas with specific evidence and examples from the assigned reading.</p>
      </br>
      <!-- Feedback Information -->
      <h3>Feedback</h3>
      <p>Your final essay will be assessed by your instructor using the 4-category rubric. You will receive:</p>

      <p><strong>Formative feedback:</strong> Guidance on how to improve your cause-and-effect writing</p>
      <p><strong>Summative score:</strong> A score (0–5) in each rubric category</p>
      <p><strong>Overall grade:</strong> Percentage grade for Module 3</p>
      </br>

      <div class="info-box info-box-teal">
        <h4>Essay Rubric for Peer Review</h4>
        <p>Use the essay rubric to grade the paper and provide any additional feedback in the comments section while submitting the file. You will assign a score (0–5) in each category and provide written feedback.</p>
        <p style="margin:0;"><a href="/pdfs/ELC_AcademicEssayRubric.pdf" target="_blank">Rubrics</a></p>
      </div>

      <!-- Navigation -->` }} />

        <EssaySubmissionForm />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module3/lesson-4"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module4/lesson-1"} className="btn btn-primary">Next Module →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
