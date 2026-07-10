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
      <h2 class="section-title">Welcome Video</h2>
      <p>Watch this short welcome video from your instructor before starting the module. The video introduces the course, explains how the modules are organized, and gives you important information about how to use this website alongside your classroom lessons.</p>

      <div class="video-placeholder">
        <div class="play-btn">▶</div>
        <p>Module 1 — Welcome Video<br><span style="font-size:0.85em; opacity:0.7;">[Upload your welcome video here — approx. 3–5 minutes]</span></p>
      </div>

      
      <!-- Module Overview -->
      <h2 class="section-title">Module 1 Overview</h2>
      <p>Module 1 is the starting point of your academic writing journey. Over the next three weeks, you will build the foundations you need to write academic essays throughout the rest of the course and beyond. This module does not require you to write a perfect essay immediately, it is about understanding the structure and conventions of academic writing so that you can develop your skills step by step.</p>
      <br>


      <div class="info-box info-box-orange">
        <h4>How This Module Connects to the Rest of the Course</h4>
        <p style="margin:0;">Everything you learn in Module 1 is a foundation for Modules 2, 3, and 4. The paragraph structure you practice here is the same structure used in all your essays. The academic language conventions you study will appear in every assessment. The vocabulary you begin learning now will be reinforced and expanded throughout the semester. Take your time with this module, it will make a significant difference to your writing in later modules.</p>
      </div>

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
