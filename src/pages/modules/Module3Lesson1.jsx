import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module3Lesson1() {
  const moduleNames = {
    1: 'Module 1 — From Paragraph to Essay',
    2: 'Module 2 — Advantages & Disadvantages Essays',
    3: 'Module 3 — Cause & Effect Essays',
    4: 'Module 4 — Argumentative Essays'
  }

  return (
    <ModuleLayout moduleNumber={3} moduleName={moduleNames[3]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="content-locked" dangerouslySetInnerHTML={{ __html: `<div class="breadcrumb">
        <a href="../index.html">🏠 Home</a>
        <span class="breadcrumb-sep">›</span>
        <a href="index.html">Module 3</a>
        <span class="breadcrumb-sep">›</span>
        <span>3.1 Orientation &amp; Activation</span>
      </div>

      <div class="page-banner" style="background: linear-gradient(135deg, #1e8449, #27ae60);">
        <div class="banner-icon">🎯</div>
        <h1>3.1 — Orientation &amp; Activation</h1>
        <p class="banner-sub">Welcome to Module 3. Start here — watch the welcome video, review objectives, and understand the cause and effect essay format.</p>
        <div class="banner-tags">
          <span class="banner-tag">📅 Week 7</span>
          <span class="banner-tag">⏱️ ~30 minutes</span>
        </div>
      </div>

      <!-- Welcome Video -->
      <h2 class="section-title">🎬 Welcome Video</h2>
      <p>Watch this welcome video from your instructor. The video introduces cause and effect essays and explains how this module builds on your skills from Modules 1 and 2.</p>

      <div class="video-placeholder">
        <div class="play-btn">▶</div>
        <p>Module 3 — Welcome Video<br><span style="font-size:0.85em; opacity:0.7;">[Upload your welcome video here — approx. 3–5 minutes]</span></p>
      </div>

      <!-- Module Overview -->
      <h2 class="section-title">📋 Module 3 Overview</h2>
      <p>In Module 3, you will write your second complete academic essay: a cause and effect essay. This essay type requires you to analyze why something happens (causes) and what results from it (effects). Through this analysis, you will develop deeper critical thinking and analytical writing skills that are essential for advanced academic writing.</p>

      <!-- Learning Objectives -->
      <h2 class="section-title">✅ Module 3 — Learning Objectives</h2>
      <p>By the end of Module 3, you will be able to:</p>
      <ul class="objectives-list">
        <li>Understand the structure and purpose of cause and effect essays</li>
        <li>Analyze a phenomenon to identify its causes and effects</li>
        <li>Distinguish between immediate and underlying causes</li>
        <li>Recognize direct and indirect effects</li>
        <li>Use causal language and reasoning connectors effectively (because, as a result, consequently, etc.)</li>
        <li>Write a complete 4-paragraph cause and effect essay (500–700 words)</li>
        <li>Apply feedback to improve your analytical writing</li>
      </ul>

      <!-- Module Checklist -->
      <h2 class="section-title">☑️ Module 3 Checklist</h2>
      <p>Use this checklist to track your progress through Module 3. Complete all items by the end of Week 9.</p>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; overflow:hidden; margin-bottom:20px;">
        <div style="background:var(--green-dark); color:#fff; padding:12px 20px; font-size:0.9em; font-weight:700;">
          📋 Section 3.1 — Orientation &amp; Activation
        </div>
        <ul class="checklist">
          <li><span class="item-label">Watch the Module 3 Welcome Video</span><small>~5 minutes — introduces cause and effect essays</small></li>
          <li><span class="item-label">Read the Module 3 Overview</span><small>Understand the essay format and module structure</small></li>
          <li><span class="item-label">Read the Learning Objectives</span><small>Know what skills you will develop by the end of Module 3</small></li>
        </ul>
      </div>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; overflow:hidden; margin-bottom:20px;">
        <div style="background:var(--green-dark); color:#fff; padding:12px 20px; font-size:0.9em; font-weight:700;">
          📚 Section 3.2 — Theory &amp; Knowledge Building
        </div>
        <ul class="checklist">
          <li><span class="item-label">Study Cause &amp; Effect Essay Structure</span><small>Learn the format and organization</small></li>
          <li><span class="item-label">Understand Types of Causes &amp; Effects</span><small>Immediate vs. underlying; direct vs. indirect</small></li>
          <li><span class="item-label">Study Causal Language &amp; Connectors</span><small>because, as a result, consequently, led to, etc.</small></li>
          <li><span class="item-label">Review Academic Vocabulary</span><small>Words for cause and effect relationships</small></li>
        </ul>
      </div>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; overflow:hidden; margin-bottom:20px;">
        <div style="background:var(--green-dark); color:#fff; padding:12px 20px; font-size:0.9em; font-weight:700;">
          ⚡ Section 3.3 — Interactive Activities
        </div>
        <ul class="checklist">
          <li><span class="item-label">Complete Interactive Activities</span><small>Practice with immediate feedback on cause and effect essays</small></li>
        </ul>
      </div>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; overflow:hidden; margin-bottom:20px;">
        <div style="background:var(--green-dark); color:#fff; padding:12px 20px; font-size:0.9em; font-weight:700;">
          💬 Section 3.4 — Reading, Discussion &amp; Collaboration
        </div>
        <ul class="checklist">
          <li><span class="item-label">Read Assigned Articles</span><small>Articles exploring causes and effects of real-world issues</small></li>
          <li><span class="item-label">Participate in Module Discussion</span><small>Share your analysis and opinion (150–200 words)</small></li>
          <li><span class="item-label">Read and Respond to Classmates</span><small>Engage with peers' analyses and perspectives</small></li>
        </ul>
      </div>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; overflow:hidden; margin-bottom:24px;">
        <div style="background:var(--green-dark); color:#fff; padding:12px 20px; font-size:0.9em; font-weight:700;">
          ✍️ Section 3.5 — Writing Practice &amp; Submission
        </div>
        <ul class="checklist">
          <li><span class="item-label">Plan Your Essay (Outline)</span><small>Organize the causes and effects you will discuss</small></li>
          <li><span class="item-label">Write Your Module 3 Essay</span><small>4-paragraph cause and effect essay (500–700 words)</small></li>
          <li><span class="item-label">Submit Your Essay</span><small>Graded assignment — worth 10% of your course grade</small></li>
          <li><span class="item-label">Read Instructor Feedback</span><small>Review feedback and prepare for Module 4</small></li>
        </ul>
      </div>

      <!-- Navigation -->` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module2/lesson-5"} className="btn btn-outline">← Previous Module</Link>
          <Link to={"/module3/lesson-2"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
