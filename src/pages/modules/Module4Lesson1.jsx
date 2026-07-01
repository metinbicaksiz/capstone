import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module4Lesson1() {
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
        <span>4.1 Orientation &amp; Activation</span>
      </div>

      <div class="page-banner" style="background: linear-gradient(135deg, #093C5D, #3B7597);">
        <h1>4.1 — Orientation &amp; Activation</h1>
        <p class="banner-sub">Welcome to Module 4. Start here — watch the welcome video, review the module objectives, and use the checklist to track your progress.</p>
      </div>

      <!-- Welcome Video -->
      <h2 class="section-title">Welcome Video</h2>
      <p>Watch this welcome video from your instructor before starting Module 4. The video introduces argumentative essays, explains the module structure, and gives you an overview of what you will learn.</p>

      <div class="video-placeholder">
        <video width="100%" height="auto" controls style="border-radius: 8px;">
          <source src="/Module_4__Opinion_Essays.mp4" type="video/mp4">
          Your browser does not support the video tag. Please update your browser to watch this video.
        </video>
      </div>

    
      <!-- Learning Objectives -->
      <h2 class="section-title">Module 4 — Learning Objectives</h2>
      <p>By the end of Module 4, you will be able to:</p>
      <ul class="objectives-list">
        <li>Understand argumentative essay structure and how it differs from other essay types</li>
        <li>Identify and analyze an argumentative prompt</li>
        <li>Develop a clear and defensible thesis statement for an argumentative essay</li>
        <li>Integrate evidence from academic sources into your body paragraphs</li>
        <li>Use persuasive reasoning and language techniques</li>
        <li>Provide constructive peer feedback using the essay rubric</li>
        <li>Revise your draft based on feedback and guidance</li>
        <li>Submit a polished final argumentative essay</li>
      </ul>

     
      <!-- Navigation -->` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module3/lesson-5"} className="btn btn-outline">← Previous Module</Link>
          <Link to={"/module4/lesson-2"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
