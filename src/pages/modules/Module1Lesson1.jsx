import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module1Lesson1() {
  const moduleNames = {
    1: 'Module 1 — From Paragraph to Essay',
    2: 'Module 2 — Advantages & Disadvantages Essays',
    3: 'Module 3 — Cause & Effect Essays',
    4: 'Module 4 — Argumentative Essays'
  }

  return (
    <ModuleLayout
      moduleNumber={1}
      moduleName={moduleNames[1]}
      lessonNumber="1.1"
      lessonTitle="1.1 — Orientation & Activation"
      lessonDescription="Welcome to Module 1. Start here — watch the welcome video, read the module overview, and use the checklist to track your progress."
      lessonIcon=""
      bannerColor="linear-gradient(135deg, #1a4a8a, #2e86c1)"
    >

      
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div class="page-banner">
        <h1>1.1 Orientation & Activation</h1>
        <p class="banner-sub">10 activities with instant feedback. Work in order, they get progressively harder.</p>
        <div class="banner-tags">
          {/* <span class="banner-tag">📅 Week 2–3</span>
          <span class="banner-tag">🎯 Instant feedback</span>
          <span class="banner-tag">🔄 Retry anytime</span> */}
        </div>
      </div>
        <div className="content-locked" dangerouslySetInnerHTML={{ __html: `<!-- Welcome Video -->
      
      <!-- Learning Objectives -->
      <h2 class="section-title">Module 1: Learning Objectives</h2>
      <p>By the end of Module 1, you will be able to:</p>
      <ul class="objectives-list">
        <li>Identify the three main parts of an academic paragraph: the topic sentence, supporting ideas, and the concluding sentence</li>
        <li>Explain the purpose of each paragraph in a four-paragraph academic essay: introduction, body paragraph 1, body paragraph 2, and conclusion</li>
        <li>Write a clear, focused topic sentence that introduces the main idea of a body paragraph</li>
        <li>Write a thesis statement that states the essay topic and the writer's main position or plan</li>
        <li>Apply academic writing conventions: formal language, third person perspective, no contractions, no direct questions</li>
        <li>Identify and use at least 20 academic words from the Academic Word List (AWL) in context</li>
        <li>Distinguish between simple, compound, and complex sentences and use all three types in writing</li>
        <li>Complete an essay outline for a four-paragraph essay before writing a full draft</li>
      </ul>


      <!-- Navigation -->` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module1/lesson-2"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
