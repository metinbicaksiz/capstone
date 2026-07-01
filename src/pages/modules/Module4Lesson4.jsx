import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import EssaySubmissionForm from '../../components/EssaySubmissionForm'
import './ModulesPage.css'

export default function Module4Lesson4() {
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
        <span>4.4 Writing, Drafting & Feedback</span>
      </div>

      <div class="page-banner" style="background: linear-gradient(135deg, #093C5D, #3B7597);">
        <h1>4.4 Writing, Drafting & Feedback</h1>
        <p class="banner-sub">Submit your first draft, exchange it with your peer, review each other's work, and revise based on feedback.</p>
      </div>

      <!-- Draft Assignment -->
      <h2 class="section-title">First Draft Assignment</h2>
      <!-- <p>Write a 4-paragraph argumentative essay (approximately 500–700 words) on the assigned topic. Use evidence from the academic articles you read in Section 4.3 to support your argument.</p> -->

      <div class="info-box info-box-blue">
        <h4>Articles</h4>
        <p style="margin:0;"><a href="../../public/pdfs/taking_gap_year.pdf" target="_blank">Taking a Gap Year</a></p>
        <p style="margin:0;"><a href="../../public/pdfs/Bullying_Article.pdf" target="_blank">Bullying</a></p>
      </div>

      <!-- Peer Review Instructions -->
      <h2 class="section-title">Peer Review &amp; Feedback Process</h2>
      <p>This is a process writing activity. You will:</p>
      <ol style="margin-left:30px;">
        <li>Submit your first draft essay</li>
        <li>Receive your peer's draft for review</li>
        <li>Grade their essay using the rubric and provide written feedback</li>
        <li>Receive feedback on your own essay from your peer</li>
        <li>Revise your draft based on the feedback</li>
        <li>Discuss your revisions with your peer in a follow-up conversation</li>
        </br>
      </ol>

      <div class="info-box info-box-teal">
      <h2>Instructions</h2>
      <p>Choose ONE of the following prompts and write a four-paragraph opinion essay.</p>

      <p>Your essay should:</p>
      <p>Be 500–750 words in length.</p>
      <p>Clearly state your opinion in the introduction.</p>
      <p>Include two body paragraphs, each presenting a different reason supported with evidence and examples.</p>
      <p>Use information from the assigned article to support your ideas. You may summarize, paraphrase, or refer to evidence from the reading.</p>
      <p>End with a concluding paragraph that restates your opinion and summarizes your main points.</p>
      <p>Use your own words and cite ideas from the article appropriately when necessary.</p>
       </div>   
      
      <h3>Prompt 1</h3>
      <p>Some students choose to take a gap year before starting university or college, while others believe students should begin their studies immediately after high school.</p>
      <p>Do you think students should take a gap year before postsecondary education? Why or why not?</p>
      
      <h3>Prompt 2</h3>
      <p>Bullying continues to affect many students despite schools' efforts to prevent it. Some people believe schools should take stronger action to reduce bullying, while others believe parents and students share equal responsibility.</p>
      <p>Do you think schools should be primarily responsible for preventing bullying? Why or why not?</p>

      
      <!-- Comments and Feedback Section -->
      <h2 class="section-title">Essay Submission</h2>
      <p>Share your essay below and receive constructive feedback from  peers.</p>
      </br>
      `}} />

      <EssaySubmissionForm />

      <div dangerouslySetInnerHTML={{ __html: `


      <div class="info-box info-box-teal">
        <h4>Essay Rubric for Peer Review</h4>
        <p>Use the essay rubric to grade the paper and provide any additional feedback in the comments section while submitting the file. You will assign a score (0–5) in each category and provide written feedback.</p>
        <p style="margin:0;"><a href="../../public/pdfs/ELC_AcademicEssayRubric.pdf" target="_blank">Rubrics</a></p>
      </div>
      
      

      <!-- Navigation -->` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module4/lesson-3"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module4/lesson-5"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
