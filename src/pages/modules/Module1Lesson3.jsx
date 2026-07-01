import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module1Lesson3() {
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
        <a href="../index.html">🏠 Home</a><span class="breadcrumb-sep">›</span>
        <a href="index.html">Module 1</a><span class="breadcrumb-sep">›</span>
        <span>1.3 Interactive Activities</span>
      </div>

      <div class="page-banner">
        <div class="banner-icon">⚡</div>
        <h1>1.3 — Interactive Activities</h1>
        <p class="banner-sub">10 activities with instant feedback. Work in order — they get progressively harder.</p>
        <div class="banner-tags">
          <span class="banner-tag">📅 Week 2–3</span>
          <span class="banner-tag">🎯 Instant feedback</span>
          <span class="banner-tag">🔄 Retry anytime</span>
        </div>
      </div>

      <div class="info-box info-box-blue" style="margin-bottom:20px;">
        <h4>📌 Before You Start</h4>
        <p style="margin:0;">Complete <a href="1-2-theory.html">Section 1.2 — Theory</a> first. Activities 1–5 identify and analyse. Activities 6–7 are writing with automatic feedback. Part 2 covers essay structure — <strong>no essay writing required</strong> in Module 1.</p>
      </div>

      <!-- ══ PART 1: PARAGRAPH ══ -->
      <div class="part-divider" id="part1">
        <h2>📝 Part 1 — Paragraph Activities</h2>
        <p>Identifying parts → analysing sentences → ordering → filling blanks → spotting errors → writing</p>
      </div>

      <!-- ACT 1 -->
      <div class="act-box" id="act1">
        <div class="act-header para">
          <span style="font-size:1.2em;">🏷️</span>
          <div>Activity 1 — Label the Parts of a Paragraph <span class="diff-badge diff-easy">⭐ Easy</span></div>
        </div>
        <div class="act-body">
          <div class="tip-box">Click the correct label for each sentence: <strong>TS</strong> = Topic Sentence &nbsp;·&nbsp; <strong>SI</strong> = Supporting Idea &nbsp;·&nbsp; <strong>CS</strong> = Concluding Sentence</div>
          <div id="a1sents"></div>
          <button class="check-btn" onclick="checkA1()">✅ Check My Labels</button>
          <button class="retry-btn" onclick="resetA1()">🔄 Reset</button>
          <div class="result-box" id="a1res"></div>
        </div>
      </div>

      <!-- ACT 2 -->
      <div class="act-box" id="act2">
        <div class="act-header para">
          <span style="font-size:1.2em;">🔘</span>
          <div>Activity 2 — Is This a Good Topic Sentence? <span class="diff-badge diff-easy">⭐ Easy</span></div>
        </div>
        <div class="act-body">
          <div class="tip-box">For each sentence, decide: <strong>Good</strong> academic topic sentence or <strong>Not Good</strong>? Click Check for instant feedback.</div>
          <div id="a2items"></div>
          <button class="check-btn" onclick="checkA2()">✅ Check All</button>
          <button class="retry-btn" onclick="resetA2()">🔄 Reset</button>
          <div class="result-box" id="a2res"></div>
        </div>
      </div>

      <!-- ACT 3 -->
      <div class="act-box" id="act3">
        <div class="act-header para">
          <span style="font-size:1.2em;">🔀</span>
          <div>Activity 3 — Put the Paragraph in Order <span class="diff-badge diff-medium">⭐⭐ Medium</span></div>
        </div>
        <div class="act-body">
          <div class="tip-box"><strong>Drag</strong> the sentences into the correct paragraph order: Topic Sentence → Supporting Ideas → Concluding Sentence.</div>
          <ul class="sort-list" id="a3list"></ul>
          <button class="check-btn" onclick="checkA3()">✅ Check Order</button>
          <button class="retry-btn" onclick="resetA3()">🔄 Reshuffle</button>
          <div class="result-box" id="a3res"></div>
        </div>
      </div>

      <!-- ACT 4 -->
      <div class="act-box" id="act4">
        <div class="act-header para">
          <span style="font-size:1.2em;">✏️</span>
          <div>Activity 4 — Complete the Paragraph <span class="diff-badge diff-medium">⭐⭐ Medium</span></div>
        </div>
        <div class="act-body">
          <div class="tip-box">Choose the best word from the dropdowns to complete each gap. Use the word bank as a guide.</div>
          <div class="word-bank-strip">
            <span class="wb-chip">significant</span><span class="wb-chip">professional</span>
            <span class="wb-chip">Furthermore</span><span class="wb-chip">acknowledge</span><span class="wb-chip">Overall</span>
          </div>
          <div class="fib-para" id="a4para"></div>
          <button class="check-btn" onclick="checkA4()">✅ Check Answers</button>
          <button class="retry-btn" onclick="resetA4()">🔄 Reset</button>
          <div class="result-box" id="a4res"></div>
        </div>
      </div>

      <!-- ACT 5 -->
      <div class="act-box" id="act5">
        <div class="act-header para">
          <span style="font-size:1.2em;">🔍</span>
          <div>Activity 5 — Spot the Informal Language <span class="diff-badge diff-medium">⭐⭐ Medium</span></div>
        </div>
        <div class="act-body">
          <div class="tip-box">There are <strong>5 informal words or phrases</strong> in the paragraph (highlighted in orange). <strong>Click each one</strong> to mark it. Then click Check to see the formal alternatives.</div>
          <div class="informal-para" id="a5para"></div>
          <p style="font-size:0.83em; color:var(--text-muted); margin-top:4px;">Click all 5 informal expressions, then check your answers.</p>
          <button class="check-btn" onclick="checkA5()">✅ Check</button>
          <button class="retry-btn" onclick="resetA5()">🔄 Reset</button>
          <div class="spot-results" id="a5res"></div>
        </div>
      </div>

      <!-- ACT 6 -->
      <div class="act-box" id="act6">
        <div class="act-header write">
          <span style="font-size:1.2em;">✍️</span>
          <div>Activity 6 — Write a Topic Sentence <span class="diff-badge diff-hard">⭐⭐⭐ Hard</span></div>
        </div>
        <div class="act-body">
          <div class="writing-prompt">
            <strong>Prompt:</strong> Write a topic sentence for a body paragraph about <em>one advantage of learning a second language</em>.<br>
            <span style="font-size:0.85em; color:#555;">One sentence only. Formal language. No "I think". State the topic + one specific advantage.</span>
          </div>
          <input type="text" class="writing-input" id="ts-input" placeholder="Type your topic sentence here…">
          <div class="wc-bar">Words: <span id="ts-wc">0</span></div>
          <button class="check-btn orange" onclick="checkA6()">⚡ Analyse My Sentence</button>
          <button class="retry-btn" onclick="resetA6()">🔄 Clear</button>
          <div class="check-list-result" id="a6checks"></div>
          <button class="model-toggle" id="a6mbtn" onclick="toggleModel('a6model','a6mbtn')" style="display:none;">👁 Show Model Answer</button>
          <div class="model-answer" id="a6model">
            <div class="ma-label">✅ Model Answer</div>
            <p style="margin:0;">"Learning a second language provides individuals with a significant cognitive advantage, as research has shown it improves memory, concentration, and problem-solving skills."</p>
            <p style="font-size:0.82em; color:#555; margin-top:8px;"><strong>Notice:</strong> formal vocabulary · third person · specific controlling idea · one sentence only</p>
          </div>
        </div>
      </div>

      <!-- ACT 7 -->
      <div class="act-box" id="act7">
        <div class="act-header write">
          <span style="font-size:1.2em;">📝</span>
          <div>Activity 7 — Write an Academic Paragraph <span class="diff-badge diff-hard">⭐⭐⭐ Hard</span></div>
        </div>
        <div class="act-body">
          <div class="writing-prompt">
            <strong>Prompt:</strong> Write an academic paragraph (80–140 words) about <em>one advantage of studying abroad</em>.<br>
            <span style="font-size:0.85em; color:#555;">Include: topic sentence → at least 2 supporting ideas → concluding sentence. Use formal language + at least one connector.</span>
          </div>
          <textarea class="writing-input" id="para-input" rows="7" placeholder="Write your paragraph here…" oninput="updateParaWC()"></textarea>
          <div class="wc-bar">Words: <span id="para-wc">0</span> &nbsp;|&nbsp; Target: 80–140 words</div>
          <div class="info-box info-box-orange" style="margin-bottom:10px; font-size:0.83em; padding:10px 14px;">
            <strong>Note:</strong> The automatic check below verifies basic structural features only. Your instructor evaluates the quality and development of your ideas in Section 1.5.
          </div>
          <button class="check-btn orange" onclick="checkA7()">⚡ Analyse My Paragraph</button>
          <button class="retry-btn" onclick="resetA7()">🔄 Clear</button>
          <div class="check-list-result" id="a7checks"></div>
          <button class="model-toggle" id="a7mbtn" onclick="toggleModel('a7model','a7mbtn')" style="display:none;">👁 Show Model Paragraph</button>
          <div class="model-answer" id="a7model">
            <div class="ma-label">✅ Model Paragraph (~110 words)</div>
            <p style="margin:0; font-style:italic;">"Studying abroad provides students with invaluable opportunities for personal and professional development. First, living independently in a foreign country requires students to manage daily responsibilities — such as budgeting and navigating an unfamiliar environment — which builds confidence and resilience. Furthermore, studying in an international context exposes students to diverse perspectives and cultural practices, which broadens their understanding of the world and develops their intercultural communication skills. These skills are increasingly valued by employers in today's globalised economy. Consequently, students who study abroad are often more competitive in the job market upon graduation. For these reasons, studying abroad can be considered one of the most transformative academic experiences available."</p>
            <p style="font-size:0.82em; color:#555; margin-top:8px;"><strong>Connectors used:</strong> First · Furthermore · Consequently · For these reasons. <strong>Structure:</strong> TS → SI 1 (independence) → SI 2 (culture) → link to benefit → CS.</p>
          </div>
        </div>
      </div>

      <!-- ══ PART 2: ESSAY STRUCTURE ══ -->
      <div class="part-divider" id="part2" style="background:linear-gradient(135deg,var(--teal-dark),#1abc9c);">
        <h2>📑 Part 2 — Essay Structure Activities</h2>
        <p>Labelling → evaluating → ordering. No essay writing required in Module 1.</p>
      </div>
      <div class="no-write-note">📌 <strong>No essay writing in Module 1.</strong> These activities build your understanding of essay structure so you are ready to write full essays in Modules 2–4.</div>

      <!-- ACT 8 -->
      <div class="act-box" id="act8">
        <div class="act-header essay">
          <span style="font-size:1.2em;">🗂️</span>
          <div>Activity 8 — Label the Parts of an Essay <span class="diff-badge diff-essay">📑 Essay</span> <span class="diff-badge diff-easy">⭐ Easy</span></div>
        </div>
        <div class="act-body">
          <div class="tip-box">Click the correct label for each sentence: <strong>BG</strong> = Background · <strong>TH</strong> = Thesis · <strong>TP</strong> = Topic Sentence · <strong>SI</strong> = Supporting Idea · <strong>CO</strong> = Conclusion</div>
          <div id="a8sents"></div>
          <button class="check-btn teal" onclick="checkA8()">✅ Check Labels</button>
          <button class="retry-btn" onclick="resetA8()">🔄 Reset</button>
          <div class="result-box" id="a8res"></div>
        </div>
      </div>

      <!-- ACT 9 -->
      <div class="act-box" id="act9">
        <div class="act-header essay">
          <span style="font-size:1.2em;">🎯</span>
          <div>Activity 9 — Is This a Good Thesis Statement? <span class="diff-badge diff-essay">📑 Essay</span> <span class="diff-badge diff-medium">⭐⭐ Medium</span></div>
        </div>
        <div class="act-body">
          <div class="tip-box">A strong thesis: (1) states the topic clearly · (2) gives the writer's position · (3) names the TWO main points · (4) is formal and specific · (5) is one sentence.</div>
          <div id="a9items"></div>
          <button class="check-btn teal" onclick="checkA9()">✅ Check All</button>
          <button class="retry-btn" onclick="resetA9()">🔄 Reset</button>
          <div class="result-box" id="a9res"></div>
        </div>
      </div>

      <!-- ACT 10 -->
      <div class="act-box" id="act10">
        <div class="act-header essay">
          <span style="font-size:1.2em;">🔀</span>
          <div>Activity 10 — Put the Essay in Order <span class="diff-badge diff-essay">📑 Essay</span> <span class="diff-badge diff-medium">⭐⭐ Medium</span></div>
        </div>
        <div class="act-body">
          <div class="tip-box"><strong>Drag</strong> the four essay sections into the correct order: Introduction → Body 1 → Body 2 → Conclusion.</div>
          <ul class="sort-list" id="a10list"></ul>
          <button class="check-btn teal" onclick="checkA10()">✅ Check Essay Order</button>
          <button class="retry-btn" onclick="resetA10()">🔄 Reshuffle</button>
          <div class="result-box" id="a10res"></div>
        </div>
      </div>

      <!-- Wordwall -->
      <div style="background:linear-gradient(135deg,var(--green-bg),#f0fdf8); border:2px solid var(--green-border); border-radius:10px; padding:20px 22px; margin-bottom:28px;" id="vocab-act">
        <h3 style="color:var(--green-dark); margin-bottom:6px;">🎮 Bonus — Vocabulary Practice (Wordwall)</h3>
        <p style="font-size:0.88em; margin-bottom:10px;">Practice Module 1 academic vocabulary: significant, evidence, factor, approach, beneficial, consequently, furthermore…</p>
        <p style="font-size:0.82em; color:#aaa; margin-bottom:12px;">[ Paste your Wordwall embed code here ]</p>
        <a href="#" class="btn btn-green">🎮 Open Wordwall Game</a>
      </div>

      <div class="info-box info-box-green">
        <h4>🎉 All Activities Complete!</h4>
        <p style="margin:0;">If any activity was hard, revisit <a href="1-2-theory.html">Section 1.2 — Theory</a> then retry. Ready to continue? Go to <a href="1-4-reading.html">Section 1.4 — Reading, Discussion &amp; Collaboration</a>.</p>
      </div>` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module1/lesson-2"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module1/lesson-4"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
