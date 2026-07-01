import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module1Lesson5() {
  const moduleNames = {
    1: 'Module 1 — From Paragraph to Essay',
    2: 'Module 2 — Advantages & Disadvantages Essays',
    3: 'Module 3 — Cause & Effect Essays',
    4: 'Module 4 — Argumentative Essays'
  }

  return (
    <ModuleLayout moduleNumber={1} moduleName={moduleNames[1]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="content-locked" dangerouslySetInnerHTML={{ __html: `<div class="breadcrumb">
        <a href="../index.html">🏠 Home</a>
        <span class="breadcrumb-sep">›</span>
        <a href="index.html">Module 1</a>
        <span class="breadcrumb-sep">›</span>
        <span>1.5 Writing Practice &amp; Submission</span>
      </div>

      <div class="page-banner" style="background: linear-gradient(135deg, #1e8449, #27ae60);">
        <div class="banner-icon">✍️</div>
        <h1>1.5 — Writing Practice &amp; Submission</h1>
        <p class="banner-sub">Apply everything you have learned. Complete guided writing practice, plan your essay with an outline, and submit your Module 1 writing assignment.</p>
        <div class="banner-tags">
          <span class="banner-tag">📅 Week 3</span>
          <span class="banner-tag">⏱️ ~90–120 minutes</span>
          <span class="banner-tag">📝 Formative Submission</span>
        </div>
      </div>

      <div class="info-box info-box-orange">
        <h4>📌 Before You Write</h4>
        <p style="margin:0;">Make sure you have completed all previous sections of Module 1 before writing your essay. Read the theory carefully (1.2), practised the activities (1.3), studied the sample texts (1.4), and completed the checklist (1.1). Writing is most effective when it is informed by reading and practice.</p>
      </div>

      <!-- ── PRACTICE 1 ── -->
      <h2 class="section-title" id="practice1">✏️ Writing Practice 1 — Write an Academic Paragraph</h2>
      <p><strong>Purpose:</strong> Practice writing a complete academic paragraph with all three parts: topic sentence, supporting ideas, and concluding sentence. This is <strong>ungraded</strong> — it is purely for practice. Your instructor may provide brief oral or written feedback during your tutorial session.</p>

      <div class="theory-block">
        <h3>📋 Practice 1 Instructions</h3>
        <p>Choose <strong>one</strong> of the following prompts and write a paragraph of <strong>120–160 words</strong>. Your paragraph must include:</p>
        <ul>
          <li>A clear <strong>topic sentence</strong> (topic + controlling idea)</li>
          <li>2–3 <strong>supporting sentences</strong> with at least one example or reason</li>
          <li>A <strong>concluding sentence</strong> that restates the main idea in different words</li>
          <li>Formal academic language (no contractions, no first person "I think")</li>
          <li>At least <strong>3 words from the Academic Word List</strong></li>
        </ul>
      </div>

      <div style="background:var(--blue-bg); border:2px solid var(--blue-border); border-radius:8px; padding:18px 22px; margin-bottom:16px;">
        <h3 style="color:var(--blue-dark); font-size:0.97em; margin-bottom:12px;">📝 Choose ONE Writing Prompt:</h3>
        <div style="display:flex; flex-direction:column; gap:10px; font-size:0.9em;">
          <div style="background:#fff; border-radius:6px; padding:12px 16px; border-left:4px solid var(--blue-mid);">
            <span class="label-tag">Option A</span> <strong>"Learning English has many advantages for university students."</strong><br>
            <span style="color:var(--text-muted); font-size:0.88em;">→ Write a body paragraph supporting this statement with specific advantages and an example.</span>
          </div>
          <div style="background:#fff; border-radius:6px; padding:12px 16px; border-left:4px solid var(--blue-mid);">
            <span class="label-tag">Option B</span> <strong>"Living in a large city has significant challenges for young people."</strong><br>
            <span style="color:var(--text-muted); font-size:0.88em;">→ Write a body paragraph describing one or two significant challenges with specific examples or reasons.</span>
          </div>
          <div style="background:#fff; border-radius:6px; padding:12px 16px; border-left:4px solid var(--blue-mid);">
            <span class="label-tag">Option C</span> <strong>"Technology has transformed the way people access information."</strong><br>
            <span style="color:var(--text-muted); font-size:0.88em;">→ Write a body paragraph explaining how technology has changed information access with at least one specific example.</span>
          </div>
        </div>
      </div>

      <div class="info-box info-box-green">
        <h4>✅ Self-Check After Writing Practice 1</h4>
        <ul style="margin:0; font-size:0.9em;">
          <li>Does my topic sentence state a clear topic AND a controlling idea?</li>
          <li>Are all my supporting sentences directly related to the topic sentence?</li>
          <li>Did I include a specific example or reason?</li>
          <li>Does my concluding sentence restate the main idea without copying the topic sentence?</li>
          <li>Did I use formal language? (No "I think", no contractions, no slang)</li>
          <li>Did I use at least 3 AWL words correctly?</li>
        </ul>
      </div>

      <!-- ── PRACTICE 2 ── -->
      <h2 class="section-title" id="practice2">✏️ Writing Practice 2 — Thesis Statements &amp; Topic Sentences</h2>
      <p><strong>Purpose:</strong> Practice writing thesis statements and topic sentences — the most important sentences in academic essay writing. Ungraded practice.</p>

      <div class="theory-block">
        <h3>📋 Practice 2 Instructions</h3>
        <p>For each essay prompt below, write:</p>
        <ol>
          <li>A <strong>thesis statement</strong> (for the introduction) — must mention both main points</li>
          <li>Two <strong>topic sentences</strong> (one for each body paragraph)</li>
        </ol>
        <p>You do not need to write full paragraphs — just the thesis statement and topic sentences.</p>
      </div>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:8px; padding:16px 20px; margin-bottom:20px;">
        <p style="font-size:0.92em;"><strong>Essay Prompt 1:</strong> <em>"Discuss the advantages and disadvantages of using smartphones in educational settings."</em></p>
        <div style="background:#fff; border:1px solid #ddd; border-radius:5px; padding:12px 16px; margin-top:10px; font-size:0.88em;">
          <p style="margin-bottom:4px; color:var(--text-muted);">Model Answer:</p>
          <p style="margin-bottom:6px;"><strong>Thesis:</strong> <em>Although smartphones can enhance learning by providing instant access to information and educational resources, their use in educational settings also presents significant challenges in terms of distraction and academic dishonesty.</em></p>
          <p style="margin-bottom:6px;"><strong>Topic Sentence 1:</strong> <em>One major advantage of allowing smartphones in educational environments is the ability to access diverse digital learning resources instantaneously.</em></p>
          <p style="margin-bottom:0;"><strong>Topic Sentence 2:</strong> <em>However, a significant disadvantage of smartphone use in classrooms is the potential for students to become easily distracted, which can negatively impact their concentration and academic performance.</em></p>
        </div>
      </div>

      <div style="background:var(--blue-bg); border:2px solid var(--blue-border); border-radius:8px; padding:16px 20px; margin-bottom:20px;">
        <p style="font-size:0.92em;"><strong>Now you try — Essay Prompt 2:</strong> <em>"Discuss whether people should be required to study a foreign language at school."</em></p>
        <p style="font-size:0.87em; color:var(--text-muted); margin-bottom:10px;">Write your own thesis statement and two topic sentences in your notebook or on a separate document. Then check: Does your thesis mention two main points? Do your topic sentences connect directly to the thesis?</p>
      </div>

      <!-- ── ESSAY OUTLINE ── -->
      <h2 class="section-title" id="outline">📋 Essay Outline Template — Plan Before You Write</h2>
      <p>Before writing your Module 1 assignment essay, complete the outline template below. Planning your essay carefully before writing will help you organize your ideas, write a focused thesis statement, and maintain logical paragraph structure throughout the essay. <strong>A well-planned essay is almost always a better essay.</strong></p>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:8px; padding:20px 24px; margin-bottom:20px;">` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module1/lesson-4"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module2/lesson-1"} className="btn btn-primary">Next Module →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
