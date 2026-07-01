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
      lessonIcon="🎯"
      bannerColor="linear-gradient(135deg, #1a4a8a, #2e86c1)"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="content-locked" dangerouslySetInnerHTML={{ __html: `<!-- Welcome Video -->
      <h2 class="section-title">🎬 Welcome Video</h2>
      <p>Watch this short welcome video from your instructor before starting the module. The video introduces the course, explains how the modules are organized, and gives you important information about how to use this website alongside your classroom lessons.</p>

      <div class="video-placeholder">
        <div class="play-btn">▶</div>
        <p>Module 1 — Welcome Video<br><span style="font-size:0.85em; opacity:0.7;">[Upload your welcome video here — approx. 3–5 minutes]</span></p>
      </div>

      <div class="info-box info-box-blue">
        <h4>📌 After Watching</h4>
        <p style="margin:0;">Make a note of any questions you have about the course structure or module organization. Bring these to your first tutorial session. You can also post questions in the Module 1 Discussion Forum.</p>
      </div>

      <!-- Module Overview -->
      <h2 class="section-title">📋 Module 1 Overview</h2>
      <p>Module 1 is the starting point of your academic writing journey. Over the next three weeks, you will build the foundations you need to write academic essays throughout the rest of the course and beyond. This module does not require you to write a perfect essay immediately — it is about understanding the structure and conventions of academic writing so that you can develop your skills step by step.</p>

      <div class="two-col" style="margin-bottom:20px;">
        <div class="info-box info-box-blue">
          <h4>📅 Module 1 Schedule</h4>
          <ul style="font-size:0.89em;">
            <li><strong>Week 1:</strong> Orientation, grammar diagnostic tests, paragraph structure theory</li>
            <li><strong>Week 2:</strong> Essay structure theory, thesis statements, topic sentences</li>
            <li><strong>Week 3:</strong> Interactive activities, reading &amp; discussion, writing assignment submission</li>
          </ul>
        </div>
        <div class="info-box info-box-teal">
          <h4>🎯 What This Module Focuses On</h4>
          <ul style="font-size:0.89em;">
            <li>Understanding academic paragraph structure</li>
            <li>Organizing a four-paragraph essay</li>
            <li>Writing thesis statements and topic sentences</li>
            <li>Using formal academic language</li>
            <li>Building academic vocabulary</li>
          </ul>
        </div>
      </div>

      <div class="info-box info-box-orange">
        <h4>🔁 How This Module Connects to the Rest of the Course</h4>
        <p style="margin:0;">Everything you learn in Module 1 is a foundation for Modules 2, 3, and 4. The paragraph structure you practice here is the same structure used in all your essays. The academic language conventions you study will appear in every assessment. The vocabulary you begin learning now will be reinforced and expanded throughout the semester. Take your time with this module — it will make a significant difference to your writing in later modules.</p>
      </div>

      <!-- Learning Objectives -->
      <h2 class="section-title">✅ Module 1 — Learning Objectives</h2>
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

      <!-- Module Checklist -->
      <h2 class="section-title">☑️ Module 1 Checklist</h2>
      <p>Use this checklist to track your progress through Module 1. Complete all items before moving to Module 2.</p>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; overflow:hidden; margin-bottom:20px;">
        <div style="background:var(--blue-dark); color:#fff; padding:12px 20px; font-size:0.9em; font-weight:700;">
          📋 Section 1.1 — Orientation &amp; Activation
        </div>
        <ul class="checklist">
          <li><span class="item-label">Watch the Module 1 Welcome Video</span><small>~5 minutes — introduces the module and course structure</small></li>
          <li><span class="item-label">Read the Module 1 Overview</span><small>Understand what this module covers and how it connects to the course</small></li>
          <li><span class="item-label">Read the Learning Objectives</span><small>Know what skills you will develop by the end of Module 1</small></li>
          <li><span class="item-label">Download Course Study Materials</span><small>Grammar Booklet, Academic Word List, Interactive Theory Booklet — from the Materials page</small></li>
          <li><span class="item-label">Complete Grammar Diagnostic Test 1</span><small>Available in Course Study Materials — submit to your instructor</small></li>
        </ul>
      </div>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; overflow:hidden; margin-bottom:20px;">
        <div style="background:var(--blue-dark); color:#fff; padding:12px 20px; font-size:0.9em; font-weight:700;">
          📚 Section 1.2 — Theory &amp; Knowledge Building
        </div>
        <ul class="checklist">
          <li><span class="item-label">Study: What is an Academic Paragraph?</span><small>Topic sentence, supporting ideas, concluding sentence</small></li>
          <li><span class="item-label">Study: The Four-Paragraph Essay Structure</span><small>Introduction, body paragraphs, conclusion</small></li>
          <li><span class="item-label">Study: How to Write a Thesis Statement</span><small>Review the rules and model examples</small></li>
          <li><span class="item-label">Study: How to Write a Topic Sentence</span><small>Review the rules and model examples</small></li>
          <li><span class="item-label">Study: Academic Writing Conventions</span><small>Formal language, third person, no contractions</small></li>
          <li><span class="item-label">Study: Sentence Types — Simple, Compound, Complex</span><small>Grammar for academic writing</small></li>
          <li><span class="item-label">Complete Grammar Diagnostic Test 2</span><small>Available in Course Study Materials</small></li>
          <li><span class="item-label">Study the Academic Word List</span><small>Focus on the first 20 words from the list — learn their meaning and collocations</small></li>
        </ul>
      </div>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; overflow:hidden; margin-bottom:20px;">
        <div style="background:var(--blue-dark); color:#fff; padding:12px 20px; font-size:0.9em; font-weight:700;">
          ⚡ Section 1.3 — Interactive Activities
        </div>
        <ul class="checklist">
          <li><span class="item-label">Activity 1 (A2): Sentence Types — Match and Identify</span><small>H5P drag-and-drop — identify simple, compound, and complex sentences</small></li>
          <li><span class="item-label">Activity 2 (A2): Complete the Sentence</span><small>H5P fill-in-the-blanks — use connectors and academic vocabulary in context</small></li>
          <li><span class="item-label">Activity 3 (A2): Word Order — Build Academic Sentences</span><small>H5P drag the words — arrange scrambled words into correct academic sentences</small></li>
          <li><span class="item-label">Activity 4 (A2→B1): Put the Paragraph in Order</span><small>H5P ordering — arrange scrambled sentences into a logical academic paragraph</small></li>
          <li><span class="item-label">Activity 5 (A2→B1): Choose the Best Topic Sentence</span><small>H5P multiple choice — select the strongest, most formal topic sentence</small></li>
          <li><span class="item-label">Activity 6 (B1): Identify the Parts of an Essay</span><small>H5P drag-and-drop — label thesis, topic sentences, supporting ideas, and conclusion</small></li>
          <li><span class="item-label">Activity 7 (B1): Formal or Informal? — Language Check</span><small>H5P sort — decide which expressions are appropriate for academic writing</small></li>
          <li><span class="item-label">Activity 8 (B1): Complete the Essay Outline</span><small>H5P fill-in-the-blanks — practice writing thesis and topic sentences in an outline</small></li>
          <li><span class="item-label">Activity 9 (Collaborative): Group Essay Analysis Worksheet</span><small>Work in pairs or small groups to analyze a full academic essay together</small></li>
          <li><span class="item-label">Wordwall Activity: Academic Vocabulary Review</span><small>Practice AWL vocabulary through Wordwall games</small></li>
        </ul>
      </div>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; overflow:hidden; margin-bottom:20px;">
        <div style="background:var(--blue-dark); color:#fff; padding:12px 20px; font-size:0.9em; font-weight:700;">
          💬 Section 1.4 — Reading, Discussion &amp; Collaboration
        </div>
        <ul class="checklist">
          <li><span class="item-label">Read Sample Academic Paragraph (annotated)</span><small>Study the highlighted structure and read the instructor notes</small></li>
          <li><span class="item-label">Read Sample Four-Paragraph Essay (annotated)</span><small>Identify the introduction, thesis, topic sentences, body paragraphs, and conclusion</small></li>
          <li><span class="item-label">Complete the Paragraph Analysis Worksheet</span><small>Answer guided questions about the sample essay structure</small></li>
          <li><span class="item-label">Participate in the Module 1 Discussion Forum</span><small>Post your response and reply to at least 2 classmates — counts toward participation grade</small></li>
        </ul>
      </div>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; overflow:hidden; margin-bottom:24px;">
        <div style="background:var(--blue-dark); color:#fff; padding:12px 20px; font-size:0.9em; font-weight:700;">
          ✍️ Section 1.5 — Writing Practice &amp; Submission
        </div>
        <ul class="checklist">
          <li><span class="item-label">Write Practice Paragraphs</span><small>Complete 2 guided paragraph-writing practice activities (ungraded)</small></li>
          <li><span class="item-label">Complete the Essay Outline Template</span><small>Plan your Module 1 essay using the downloadable outline template</small></li>
          <li><span class="item-label">Submit Your Module 1 Essay (500–700 words)</span><small>Formative only — not graded but essential for instructor feedback before Module 2</small></li>
          <li><span class="item-label">Read Your Instructor's Feedback</span><small>Review feedback carefully and identify 2–3 areas to focus on in Module 2</small></li>
        </ul>
      </div>

      <!-- Navigation -->` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module1/lesson-2"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
