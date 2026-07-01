import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module2Lesson1() {
  const moduleNames = {
    1: 'Module 1 — From Paragraph to Essay',
    2: 'Module 2 — Advantages & Disadvantages Essays',
    3: 'Module 3 — Cause & Effect Essays',
    4: 'Module 4 — Argumentative Essays'
  }

  return (
    <ModuleLayout moduleNumber={2} moduleName={moduleNames[2]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="content-locked" dangerouslySetInnerHTML={{ __html: `<div class="breadcrumb">
        <a href="../index.html">🏠 Home</a>
        <span class="breadcrumb-sep">›</span>
        <a href="index.html">Module 2</a>
        <span class="breadcrumb-sep">›</span>
        <span>2.1 Orientation &amp; Activation</span>
      </div>

      <div class="page-banner" style="background: linear-gradient(135deg, #117a65, #16a085);">
        <div class="banner-icon">🎯</div>
        <h1>2.1 — Orientation &amp; Activation</h1>
        <p class="banner-sub">Welcome to Module 2. Start here — watch the welcome video, review objectives, and understand the advantages and disadvantages essay format.</p>
        <div class="banner-tags">
          <span class="banner-tag">📅 Week 4</span>
          <span class="banner-tag">⏱️ ~30 minutes</span>
        </div>
      </div>

      <!-- Welcome Video -->
      <h2 class="section-title">🎬 Welcome Video</h2>
      <p>Watch this welcome video from your instructor. The video introduces advantages and disadvantages essays and explains how this module builds on Module 1.</p>

      <div class="video-placeholder">
        <div class="play-btn">▶</div>
        <p>Module 2 — Welcome Video<br><span style="font-size:0.85em; opacity:0.7;">[Upload your welcome video here — approx. 3–5 minutes]</span></p>
      </div>

      <!-- Module Overview -->
      <h2 class="section-title">📋 Module 2 Overview</h2>
      <p>In Module 2, you will write your first complete academic essay: an advantages and disadvantages essay. This essay type requires you to present multiple perspectives on a topic in a balanced, analytical way. You will apply everything you learned in Module 1 about paragraph structure and essay organization to this new essay format.</p>

      <!-- Learning Objectives -->
      <h2 class="section-title">✅ Module 2 — Learning Objectives</h2>
      <p>By the end of Module 2, you will be able to:</p>
      <ul class="objectives-list">
        <li>Understand the structure and purpose of advantages and disadvantages essays</li>
        <li>Analyze a topic from multiple perspectives</li>
        <li>Write topic sentences and supporting paragraphs that present different viewpoints</li>
        <li>Use balancing language and connectors (however, on the other hand, etc.)</li>
        <li>Write a complete 4-paragraph advantages and disadvantages essay (500–700 words)</li>
        <li>Apply feedback to improve your academic writing</li>
      </ul>

      <!-- Module Checklist -->
      <h2 class="section-title">☑️ Module 2 Checklist</h2>
      <p>Use this checklist to track your progress through Module 2. Complete all items by the end of Week 6.</p>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; overflow:hidden; margin-bottom:20px;">
        <div style="background:var(--teal-dark); color:#fff; padding:12px 20px; font-size:0.9em; font-weight:700;">
          📋 Section 2.1 — Orientation &amp; Activation
        </div>
        <ul class="checklist">
          <li><span class="item-label">Watch the Module 2 Welcome Video</span><small>~5 minutes — introduces advantages and disadvantages essays</small></li>
          <li><span class="item-label">Read the Module 2 Overview</span><small>Understand the essay format and module structure</small></li>
          <li><span class="item-label">Read the Learning Objectives</span><small>Know what skills you will develop by the end of Module 2</small></li>
        </ul>
      </div>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; overflow:hidden; margin-bottom:20px;">
        <div style="background:var(--teal-dark); color:#fff; padding:12px 20px; font-size:0.9em; font-weight:700;">
          📚 Section 2.2 — Theory &amp; Knowledge Building
        </div>
        <ul class="checklist">
          <li><span class="item-label">Study Advantages &amp; Disadvantages Essay Structure</span><small>Learn the format and organization</small></li>
          <li><span class="item-label">Review Topic Sentences &amp; Supporting Ideas</span><small>How to present multiple perspectives</small></li>
          <li><span class="item-label">Study Balancing Language &amp; Connectors</span><small>however, in contrast, on the other hand, etc.</small></li>
          <li><span class="item-label">Review Academic Vocabulary</span><small>Words for comparison and contrast</small></li>
        </ul>
      </div>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; overflow:hidden; margin-bottom:20px;">
        <div style="background:var(--teal-dark); color:#fff; padding:12px 20px; font-size:0.9em; font-weight:700;">
          ⚡ Section 2.3 — Interactive Activities
        </div>
        <ul class="checklist">
          <li><span class="item-label">Complete Interactive Activities</span><small>Practice with immediate feedback on advantages &amp; disadvantages essays</small></li>
        </ul>
      </div>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; overflow:hidden; margin-bottom:20px;">
        <div style="background:var(--teal-dark); color:#fff; padding:12px 20px; font-size:0.9em; font-weight:700;">
          💬 Section 2.4 — Reading, Discussion &amp; Collaboration
        </div>
        <ul class="checklist">
          <li><span class="item-label">Read Assigned Articles</span><small>Articles on advantages and disadvantages topics</small></li>
          <li><span class="item-label">Participate in Module Discussion</span><small>Share your summary and opinion (150–200 words)</small></li>
          <li><span class="item-label">Read and Respond to Classmates</span><small>Engage with peers' ideas and perspectives</small></li>
        </ul>
      </div>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; overflow:hidden; margin-bottom:24px;">
        <div style="background:var(--teal-dark); color:#fff; padding:12px 20px; font-size:0.9em; font-weight:700;">
          ✍️ Section 2.5 — Writing Practice &amp; Submission
        </div>
        <ul class="checklist">
          <li><span class="item-label">Plan Your Essay (Outline)</span><small>Organize your advantages and disadvantages</small></li>
          <li><span class="item-label">Write Your Module 2 Essay</span><small>4-paragraph advantages and disadvantages essay (500–700 words)</small></li>
          <li><span class="item-label">Submit Your Essay</span><small>Graded assignment — worth 10% of your course grade</small></li>
          <li><span class="item-label">Read Instructor Feedback</span><small>Review feedback and identify areas to improve in Module 3</small></li>
        </ul>
      </div>

      <!-- Navigation -->` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module1/lesson-5"} className="btn btn-outline">← Previous Module</Link>
          <Link to={"/module2/lesson-2"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
