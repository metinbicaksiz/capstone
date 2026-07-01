import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module1Lesson4() {
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
        <span>1.4 Reading, Discussion &amp; Collaboration</span>
      </div>

      <div class="page-banner">
        <div class="banner-icon">💬</div>
        <h1>1.4 — Reading, Discussion &amp; Collaboration</h1>
        <p class="banner-sub">Read and analyze sample academic texts, complete a guided analysis worksheet, and participate in the Module 1 online discussion forum.</p>
        <div class="banner-tags">
          <span class="banner-tag">📅 Week 3</span>
          <span class="banner-tag">⏱️ ~40–50 minutes</span>
          <span class="banner-tag">💬 Participation counts toward your grade</span>
        </div>
      </div>

      <div class="info-box info-box-orange">
        <h4>📌 What to Do in This Section</h4>
        <ol style="margin:0; padding-left:18px; font-size:0.92em;">
          <li>Read the annotated sample paragraph and study the colour-coded structure</li>
          <li>Read the annotated sample four-paragraph essay and identify all structural components</li>
          <li>Complete the Paragraph Analysis Worksheet (download below)</li>
          <li>Post in the Module 1 Discussion Forum and reply to at least two classmates</li>
        </ol>
      </div>

      <!-- ── SAMPLE PARAGRAPH ── -->
      <h2 class="section-title" id="sample-para">📄 Sample Academic Paragraph (Annotated)</h2>
      <p>Read this academic paragraph carefully. The different parts are colour-coded to help you identify the structure. Study the annotation notes below the paragraph.</p>

      <div class="annotated-essay">
        <div class="ae-header">
          <span>Sample Paragraph — Topic: The Benefits of Urban Green Spaces</span>
        </div>
        <div class="ae-body">
          <p><span class="hi-ts"><strong>Urban green spaces, such as parks and gardens, play a vital role in improving the physical and mental health of city residents.</strong></span> <span class="hi-sup">First, access to green spaces encourages people to engage in physical activities, including walking, jogging, and cycling, which contribute to improved cardiovascular health and reduced rates of obesity.</span> <span class="hi-sup">In addition, numerous studies have demonstrated that spending time in natural environments significantly reduces cortisol levels — the hormone associated with stress — thereby promoting mental well-being and reducing anxiety.</span> <span class="hi-ex">For example, a study conducted in Amsterdam found that residents who lived within 300 metres of a park reported significantly higher levels of life satisfaction and lower rates of depression compared to those without access to green spaces.</span> <span class="hi-cs">It is therefore clear that urban green spaces are not simply aesthetic features of a city, but rather essential contributors to the overall health and quality of life of urban populations.</span></p>
        </div>
        <div class="ae-legend">
          <span><span class="dot" style="background:#fce4ec;"></span> Topic Sentence</span>
          <span><span class="dot" style="background:#e3f2fd;"></span> Supporting Ideas</span>
          <span><span class="dot" style="background:#e8f5e9;"></span> Example</span>
          <span><span class="dot" style="background:#fff3e0;"></span> Concluding Sentence</span>
        </div>
      </div>

      <div class="two-col" style="margin-bottom:20px;">
        <div class="info-box info-box-blue">
          <h4>✅ What makes this a strong paragraph?</h4>
          <ul style="font-size:0.88em; margin:0;">
            <li>The topic sentence is specific — it states <em>both</em> the topic (urban green spaces) and the controlling idea (vital role in health)</li>
            <li>Supporting ideas are clearly connected to the topic sentence</li>
            <li>A specific, credible example is provided (Amsterdam study)</li>
            <li>Academic vocabulary is used throughout (<em>cardiovascular, cortisol, aesthetic</em>)</li>
            <li>Formal language — no contractions, no first person</li>
            <li>The concluding sentence restates the main idea without copying</li>
          </ul>
        </div>
        <div class="info-box info-box-teal">
          <h4>📝 Study Questions — Think About This</h4>
          <ul style="font-size:0.88em; margin:0;">
            <li>What is the topic of this paragraph? What is the controlling idea?</li>
            <li>How many supporting ideas are there? How are they connected?</li>
            <li>Which discourse markers (linking words) does the writer use?</li>
            <li>Which words from the Academic Word List can you identify?</li>
            <li>How does the concluding sentence differ from the topic sentence?</li>
          </ul>
        </div>
      </div>

      <!-- ── SAMPLE ESSAY ── -->
      <h2 class="section-title" id="sample-essay">📄 Sample Four-Paragraph Essay (Annotated)</h2>
      <p>Read this full four-paragraph academic essay. All structural components are colour-coded. As you read, identify each part and notice how the paragraphs connect to each other.</p>

      <div class="annotated-essay">
        <div class="ae-header">
          <span>Sample Essay — Topic: Online Learning</span>
          <span style="font-size:0.8em; opacity:0.8;">~520 words</span>
        </div>
        <div class="ae-body">
          <p><strong>Introduction</strong><br>
          In recent years, the rapid advancement of digital technology has fundamentally transformed the landscape of education, making online learning more accessible and widespread than ever before. <span class="hi-thesis"><strong>While online learning offers considerable advantages in terms of flexibility and access, it also presents significant challenges related to student motivation and the quality of social interaction in educational environments.</strong></span></p>

          <p><strong>Body Paragraph 1</strong><br>
          <span class="hi-ts"><strong>One of the most significant advantages of online learning is the flexibility it provides to students with diverse schedules and responsibilities.</strong></span> <span class="hi-sup">Unlike traditional classroom-based education, online platforms allow learners to access course materials, complete assignments, and participate in discussions at times that suit their individual circumstances.</span> <span class="hi-sup">This flexibility is particularly beneficial for students who are simultaneously managing employment commitments, family responsibilities, or geographical limitations that would otherwise prevent them from pursuing formal education.</span> <span class="hi-ex">For instance, a working parent who cannot attend a university campus during conventional hours can complete a full degree programme online without disrupting their professional or personal obligations.</span> <span class="hi-cs">Consequently, online learning has democratized access to education by removing many of the logistical barriers that have historically restricted participation in higher education.</span></p>

          <p><strong>Body Paragraph 2</strong><br>
          <span class="hi-ts"><strong>However, a major disadvantage of online learning is the reduced opportunity for meaningful social interaction, which can negatively affect both student motivation and academic performance.</strong></span> <span class="hi-sup">In a traditional classroom environment, students benefit from spontaneous discussions, collaborative group activities, and direct interactions with instructors that foster a sense of community and shared academic purpose.</span> <span class="hi-sup">Online learning, by contrast, often relies on asynchronous communication tools such as discussion forums and email, which lack the immediacy and emotional richness of face-to-face interaction.</span> <span class="hi-ex">Research conducted by the University of Michigan found that students enrolled in fully online programmes reported significantly higher rates of feelings of isolation and disengagement compared to their on-campus counterparts.</span> <span class="hi-cs">It is therefore evident that while online learning expands access to education, it must address the fundamental human need for connection and collaboration in order to be fully effective.</span></p>

          <p><strong>Conclusion</strong><br>
          In summary, online learning represents a transformative development in education that offers unprecedented flexibility and access to learners worldwide. Nevertheless, it is essential to acknowledge and address the social and motivational challenges that arise from reduced human interaction in digital learning environments. Educational institutions and course designers should therefore seek to integrate collaborative online tools and regular virtual interaction opportunities to create more engaging and socially rich online learning experiences.</p>
        </div>
        <div class="ae-legend">
          <span><span class="dot" style="background:#f3e5f5;"></span> Thesis Statement</span>
          <span><span class="dot" style="background:#fce4ec;"></span> Topic Sentence</span>
          <span><span class="dot" style="background:#e3f2fd;"></span> Supporting Ideas</span>
          <span><span class="dot" style="background:#e8f5e9;"></span> Example</span>
          <span><span class="dot" style="background:#fff3e0;"></span> Concluding Sentence</span>
        </div>
      </div>

      <!-- ── ANALYSIS WORKSHEET ── -->
      <h2 class="section-title" id="worksheet">📋 Paragraph Analysis Worksheet</h2>
      <p>Download and complete this worksheet by answering the guided questions about the sample essay above. Use the worksheet to strengthen your analytical skills — identifying essay structure is an important step before writing your own essays.</p>

      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:8px; padding:20px 24px; margin-bottom:20px;">` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module1/lesson-3"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module1/lesson-5"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
