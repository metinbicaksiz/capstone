import { Link } from 'react-router-dom'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module1Lesson2() {
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
      lessonNumber="1.2"
      lessonTitle="1.2 — Theory & Knowledge Building"
      lessonDescription="This section is scaffolded from A2 to B1. Start with sentences and paragraphs at A2 level, then build up to full essay structure at B1 level. Read carefully and take notes."
      lessonIcon="📚"
      bannerColor="linear-gradient(135deg, #1a4a8a, #2e86c1)"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="content-locked" dangerouslySetInnerHTML={{ __html: `<!-- Level Map -->
      <div style="background:var(--grey-bg); border:1px solid var(--grey-border); border-radius:10px; padding:18px 22px; margin-bottom:24px;">
        <h3 style="color:var(--blue-dark); margin-bottom:12px; font-size:0.97em;">🗺️ Your Learning Path Through This Section</h3>
        <div style="display:flex; align-items:center; gap:0; flex-wrap:wrap;">
          <div style="background:#e8f8f5; border:2px solid #76d7c4; border-radius:8px; padding:10px 16px; text-align:center; font-size:0.83em; min-width:110px;">
            <div style="font-weight:700; color:#0e6655;">A2</div>
            <div>Sentences →<br>Paragraphs</div>
          </div>
          <div style="font-size:1.4em; color:#aaa; padding:0 8px;">→</div>
          <div style="background:var(--blue-bg); border:2px solid var(--blue-mid); border-radius:8px; padding:10px 16px; text-align:center; font-size:0.83em; min-width:110px;">
            <div style="font-weight:700; color:var(--blue-dark);">A2 → B1</div>
            <div>Essay<br>Structure</div>
          </div>
          <div style="font-size:1.4em; color:#aaa; padding:0 8px;">→</div>
          <div style="background:#e3f2fd; border:2px solid #5dade2; border-radius:8px; padding:10px 16px; text-align:center; font-size:0.83em; min-width:110px;">
            <div style="font-weight:700; color:#1a5276;">B1</div>
            <div>Opinion Essay<br>Structure</div>
          </div>
          <div style="font-size:1.4em; color:#aaa; padding:0 8px;">→</div>
          <div style="background:#f3e5f5; border:2px solid #ab47bc; border-radius:8px; padding:10px 16px; text-align:center; font-size:0.83em; min-width:110px;">
            <div style="font-weight:700; color:#6a1b9a;">B1</div>
            <div>Academic<br>Conventions</div>
          </div>
        </div>
        <p style="font-size:0.84em; color:var(--text-muted); margin-top:10px; margin-bottom:0;">Use the <strong>A2 Writing Booklet</strong> (available from Course Study Materials) alongside Parts 1 and 2 for additional explanations and practice at A2 level.</p>
      </div>

      <!-- ═══════════════════════════════════════════════════
           PART 1 — A2: SENTENCES (Starting Point)
           ═══════════════════════════════════════════════════ -->
      <div class="level-section-header a2" id="a2-start">
        <span class="level-badge level-a2" style="font-size:0.95em; padding:5px 14px;">A2</span>
        <h2>Part 1 — Building Sentences</h2>
      </div>

      <p>Before writing paragraphs and essays, it is important to understand how sentences are built. In academic writing, you need to use a variety of sentence types correctly and accurately.</p>

      <div class="theory-block">
        <h3>🔷 Three Sentence Types</h3>
        <p>You will use all three of these sentence types in your academic writing:</p>

        <div style="display:flex; flex-direction:column; gap:12px; margin-top:10px;">
          <div style="background:#fff; border-radius:7px; padding:14px 18px; border-left:4px solid var(--blue-light);">
            <p style="margin:0 0 5px 0;"><span class="label-tag">Simple</span> <strong>Subject + Verb (+ Object)</strong></p>
            <p style="margin:0; font-size:0.89em; color:#555;">One idea, one clause. Good for stating facts clearly.</p>
            <div class="theory-example" style="margin-top:8px; margin-bottom:0;">Technology changes the way people communicate.</div>
          </div>
          <div style="background:#fff; border-radius:7px; padding:14px 18px; border-left:4px solid var(--blue-mid);">
            <p style="margin:0 0 5px 0;"><span class="label-tag">Compound</span> <strong>Clause + <em>and / but / so / yet</em> + Clause</strong></p>
            <p style="margin:0; font-size:0.89em; color:#555;">Two related ideas joined together. Shows connection between two points.</p>
            <div class="theory-example" style="margin-top:8px; margin-bottom:0;">Social media is popular, <strong>but</strong> it also causes problems.</div>
          </div>
          <div style="background:#fff; border-radius:7px; padding:14px 18px; border-left:4px solid var(--blue-dark);">
            <p style="margin:0 0 5px 0;"><span class="label-tag">Complex</span> <strong><em>Although / Because / While / When / If</em> + Clause + Main Clause</strong></p>
            <p style="margin:0; font-size:0.89em; color:#555;">Shows a relationship (contrast, cause, condition) between two ideas. Important for higher-level writing.</p>
            <div class="theory-example" style="margin-top:8px; margin-bottom:0;"><strong>Although</strong> social media has many advantages, it can also be harmful to mental health.</div>
          </div>
        </div>
      </div>

      <div class="theory-block">
        <h3>✏️ Quick Practice (A2) — Complete These Sentences</h3>
        <p style="font-size:0.9em; color:var(--text-muted); margin-bottom:14px;">Fill in the blank to complete each sentence. Write your answers in your notebook.</p>
        <ol style="font-size:0.9em; line-height:2.2;">
          <li>Learning English is important <strong>because</strong> ______________________________________.</li>
          <li>Many students use social media, <strong>but</strong> ______________________________________.</li>
          <li><strong>Although</strong> ______________________________________, students can still succeed.</li>
          <li>Living in a city has advantages. <strong>However,</strong> ______________________________________.</li>
          <li>Exercise is beneficial for health <strong>because</strong> ______________________________________.</li>
        </ol>
        <p style="font-size:0.83em; color:var(--text-muted); margin-top:12px; margin-bottom:0;">💡 Compare your answers with a classmate. Do your sentences make sense? Do they follow the sentence pattern?</p>
      </div>

      <!-- ═══════════════════════════════════════════════════
           PART 2 — A2/B1: PARAGRAPH STRUCTURE
           ═══════════════════════════════════════════════════ -->
      <div class="level-section-header a2" id="a2-para">
        <span class="level-badge level-a2" style="font-size:0.95em; padding:5px 14px;">A2 → B1</span>
        <h2>Part 2 — The Academic Paragraph</h2>
      </div>

      <p>An academic paragraph develops <strong>one main idea</strong> using a clear structure. Every paragraph has three parts — this is the same at A2 level and at B1 level.</p>

      <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:12px; margin-bottom:20px;">
        <div style="background:#fce4ec; border-radius:8px; padding:16px 14px; text-align:center;">
          <div style="font-size:1.6em; margin-bottom:6px;">1️⃣</div>
          <h4 style="color:#c0392b; margin-bottom:6px; font-size:0.9em;">TOPIC SENTENCE</h4>
          <p style="font-size:0.83em; color:#555; margin:0;">The FIRST sentence. States the main idea of the paragraph.</p>
        </div>
        <div style="background:#e3f2fd; border-radius:8px; padding:16px 14px; text-align:center;">
          <div style="font-size:1.6em; margin-bottom:6px;">2️⃣</div>
          <h4 style="color:#1565c0; margin-bottom:6px; font-size:0.9em;">SUPPORTING IDEAS</h4>
          <p style="font-size:0.83em; color:#555; margin:0;">2–3 sentences. Explain, give reasons, or provide examples.</p>
        </div>
        <div style="background:#e8f5e9; border-radius:8px; padding:16px 14px; text-align:center;">
          <div style="font-size:1.6em; margin-bottom:6px;">3️⃣</div>
          <h4 style="color:#1b5e20; margin-bottom:6px; font-size:0.9em;">CONCLUDING SENTENCE</h4>
          <p style="font-size:0.83em; color:#555; margin:0;">The LAST sentence. Restates the main idea in different words.</p>
        </div>
      </div>

      <div class="theory-block">
        <h3>🔷 The Topic Sentence — Two Parts</h3>
        <p>A strong topic sentence has: <strong>TOPIC</strong> (what you are writing about) + <strong>CONTROLLING IDEA</strong> (what specific point you are making)</p>
        <div class="theory-example">
          <span class="label-tag label-good">GOOD</span> <strong>Regular exercise has many important benefits for young people's health.</strong><br>
          → Topic = <em>Regular exercise</em> | Controlling idea = <em>many important benefits for young people's health</em>
        </div>
        <div class="theory-example">
          <span class="label-tag label-bad">WEAK</span> <strong>Exercise is good.</strong><br>
          → Too general. What kind of good? Good for what? Good for whom?
        </div>
        <div class="theory-example">
          <span class="label-tag label-bad">WEAK</span> <strong>There are many things about exercise.</strong><br>
          → Does not state a clear point. The reader does not know what the paragraph is about.
        </div>
      </div>

      <div class="theory-block">
        <h3>🟦 Full Annotated Paragraph Example (A2 → B1 transition)</h3>
        <div style="border:2px solid var(--blue-border); border-radius:8px; overflow:hidden; margin-top:10px;">
          <div style="background:var(--blue-dark); color:#fff; padding:10px 18px; font-size:0.85em; font-weight:600;">Topic: Advantages of learning English</div>
          <div style="padding:16px 20px; line-height:1.95; font-size:0.91em;">
            <p style="margin:0;"><span style="background:#fce4ec; border-radius:3px; padding:1px 3px;"><strong>[TOPIC SENTENCE]</strong> Learning English provides students with a wide range of important academic and professional advantages.</span> <span style="background:#e3f2fd; border-radius:3px; padding:1px 3px;"><strong>[SUPPORT 1]</strong> First, students who are proficient in English can access a much larger variety of academic resources, including research papers, textbooks, and online courses that are primarily written in English.</span> <span style="background:#e3f2fd; border-radius:3px; padding:1px 3px;"><strong>[SUPPORT 2]</strong> In addition, English is widely recognized as the international language of business and communication, which means that strong English skills significantly improve students' employment prospects after graduation.</span> <span style="background:#e8f5e9; border-radius:3px; padding:1px 3px;"><strong>[EXAMPLE]</strong> For example, many multinational companies require employees to communicate in English during meetings and in written correspondence.</span> <span style="background:#fff3e0; border-radius:3px; padding:1px 3px;"><strong>[CONCLUDING SENTENCE]</strong> It is therefore clear that developing English proficiency is a valuable investment that benefits students both academically and professionally.</span></p>
          </div>
          <div style="display:flex; gap:12px; flex-wrap:wrap; padding:10px 18px; background:var(--grey-bg); font-size:0.8em;">
            <span><span style="background:#fce4ec; padding:1px 5px; border-radius:3px;">■</span> Topic Sentence</span>
            <span><span style="background:#e3f2fd; padding:1px 5px; border-radius:3px;">■</span> Supporting Ideas</span>
            <span><span style="background:#e8f5e9; padding:1px 5px; border-radius:3px;">■</span> Example</span>
            <span><span style="background:#fff3e0; padding:1px 5px; border-radius:3px;">■</span> Concluding Sentence</span>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════
           PART 3 — B1: ESSAY STRUCTURE
           ═══════════════════════════════════════════════════ -->
      <div class="level-section-header b1" id="b1-essay">
        <span class="level-badge level-b1" style="font-size:0.95em; padding:5px 14px;">B1</span>
        <h2>Part 3 — The Four-Paragraph Academic Essay</h2>
      </div>

      <p>Now that you understand how a paragraph works, let's look at how paragraphs combine to form a complete academic essay. In this course, you will write <strong>four-paragraph essays</strong>.</p>

      <div class="essay-diagram">
        <div class="ed-row">
          <span class="ed-label ed-intro">¶1 — Introduction</span>
          <span class="ed-content">
            <strong>Background</strong> (1–2 sentences introducing the topic) <br>
            ↓<br>
            <strong>Thesis Statement</strong> — your main position + two main points (the "plan" of the essay)
          </span>
        </div>
        <div class="ed-row">
          <span class="ed-label ed-body1">¶2 — Body Paragraph 1</span>
          <span class="ed-content">
            <strong>Topic Sentence</strong> (first main point, connected to thesis)<br>
            + 2–3 Supporting ideas + Example/Evidence<br>
            + Concluding sentence
          </span>
        </div>
        <div class="ed-row">
          <span class="ed-label ed-body2">¶3 — Body Paragraph 2</span>
          <span class="ed-content">
            <strong>Topic Sentence</strong> (second main point, connected to thesis)<br>
            + 2–3 Supporting ideas + Example/Evidence<br>
            + Concluding sentence
          </span>
        </div>
        <div class="ed-row">
          <span class="ed-label ed-concl">¶4 — Conclusion</span>
          <span class="ed-content">
            <strong>Restate the thesis</strong> (in different words — do not copy!)<br>
            + Short summary of main points<br>
            + Final thought (recommendation / prediction)
          </span>
        </div>
      </div>

      <div class="info-box info-box-blue">
        <h4>📏 Word Count Guidance (500–700 words)</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:10px; margin-top:8px; font-size:0.86em;">
          <div style="background:#fff; border-radius:5px; padding:10px; text-align:center; border:1px solid var(--blue-border);">
            <strong style="color:var(--blue-dark);">Introduction</strong><br>80–100 words
          </div>
          <div style="background:#fff; border-radius:5px; padding:10px; text-align:center; border:1px solid var(--blue-border);">
            <strong style="color:var(--blue-dark);">Body ¶1</strong><br>150–180 words
          </div>
          <div style="background:#fff; border-radius:5px; padding:10px; text-align:center; border:1px solid var(--blue-border);">
            <strong style="color:var(--blue-dark);">Body ¶2</strong><br>150–180 words
          </div>
          <div style="background:#fff; border-radius:5px; padding:10px; text-align:center; border:1px solid var(--blue-border);">
            <strong style="color:var(--blue-dark);">Conclusion</strong><br>80–100 words
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════
           PART 4 — B1: THESIS & TOPIC SENTENCES
           ═══════════════════════════════════════════════════ -->
      <div class="level-section-header b1" id="b1-thesis">
        <span class="level-badge level-b1" style="font-size:0.95em; padding:5px 14px;">B1</span>
        <h2>Part 4 — Thesis Statements &amp; Topic Sentences</h2>
      </div>

      <div class="theory-block">
        <h3>🔷 The Thesis Statement</h3>
        <p>The thesis statement is <strong>the last sentence of your introduction</strong>. It tells the reader your main argument AND the two points you will discuss in the body paragraphs.</p>
        <div class="theory-example" style="font-style:normal;">
          <strong>Formula:</strong> [Topic] + [Your position] + [Point 1] + [Point 2]
        </div>
        <div class="theory-example">
          <span class="label-tag label-good">EXAMPLE</span> <strong>Although learning a foreign language requires significant effort, it is highly beneficial for students as it improves their career prospects and broadens their cultural understanding.</strong>
        </div>
        <div class="theory-example">
          <span class="label-tag label-bad">AVOID</span> <strong>Learning languages is important.</strong><br>
          → Too simple. No position + no mention of the two points.
        </div>
      </div>

      <div class="theory-block">
        <h3>🔷 Topic Sentences — Connecting Thesis to Body Paragraphs</h3>
        <p>Each body paragraph starts with a topic sentence that <strong>directly picks up one of the two points mentioned in the thesis</strong>.</p>
        <div class="theory-example" style="font-style:normal; line-height:2.1;">
          <strong>Thesis:</strong> <em>"…it is highly beneficial for students as it improves their <u>career prospects</u> and broadens their <u>cultural understanding</u>."</em><br>
          <br>
          <strong>Body ¶1 Topic Sentence:</strong> <em>One of the most significant benefits of learning a foreign language is the considerable improvement it can bring to students' <u>career prospects</u>.</em><br>
          <span style="color:var(--green-dark); font-size:0.84em;">→ Picks up "career prospects" from the thesis</span><br>
          <br>
          <strong>Body ¶2 Topic Sentence:</strong> <em>In addition to professional advantages, studying a foreign language also enables students to develop a deeper <u>understanding of different cultures</u>.</em><br>
          <span style="color:var(--green-dark); font-size:0.84em;">→ Picks up "cultural understanding" from the thesis</span>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════
           PART 5 — B1: OPINION ESSAY (IMPORTANT!)
           ═══════════════════════════════════════════════════ -->
      <div class="level-section-header b1" id="b1-opinion">
        <span class="level-badge level-b1" style="font-size:0.95em; padding:5px 14px;">B1 — Important</span>
        <h2>Part 5 — The Opinion (Argumentative) Essay</h2>
      </div>

      <div class="info-box info-box-orange" style="margin-bottom:20px;">
        <h4>⭐ This is the most important essay type in this course (Module 4)</h4>
        <p style="margin:0;">The Opinion Essay is the essay type used in the <strong>final exam</strong> and in <strong>Module 4</strong>. It is essential that you understand how it works. Read this section carefully.</p>
      </div>

      <div class="theory-block">
        <h3>📌 What is an Opinion Essay?</h3>
        <p>In an opinion essay, you <strong>choose one side of an argument</strong> and support that position with two strong, well-developed reasons. You <strong>do NOT</strong> include counterarguments or refutation in this essay type.</p>

        <div class="two-col" style="margin-top:12px;">
          <div style="background:var(--green-bg); border:2px solid var(--green-border); border-radius:8px; padding:14px 16px;">
            <h4 style="color:var(--green-dark); margin-bottom:8px; font-size:0.9em;">✅ Your Opinion Essay INCLUDES:</h4>
            <ul style="font-size:0.87em; margin:0;">
              <li>A clear position in the thesis (you agree OR disagree)</li>
              <li>Two body paragraphs — each supporting your position</li>
              <li>Evidence from articles to support your arguments (Module 4)</li>
              <li>A conclusion that restates your position</li>
            </ul>
          </div>
          <div style="background:var(--red-bg); border:2px solid var(--red-border); border-radius:8px; padding:14px 16px;">
            <h4 style="color:var(--red-dark); margin-bottom:8px; font-size:0.9em;">❌ Your Opinion Essay does NOT include:</h4>
            <ul style="font-size:0.87em; margin:0;">
              <li>A counterargument paragraph</li>
              <li>A refutation of the opposing view</li>
              <li>Discussing "both sides" in the body paragraphs</li>
              <li>Phrases like "On the other hand, some people think…" (in body ¶s)</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="theory-block">
        <h3>📐 Opinion Essay Structure — Diagram</h3>
        <div class="essay-diagram" style="margin-top:12px;">
          <div class="ed-row">
            <span class="ed-label ed-intro">Introduction</span>
            <span class="ed-content">
              Background information about the topic (1–2 sentences)<br>
              <strong>Thesis:</strong> State your position clearly + mention two reasons why
            </span>
          </div>
          <div class="ed-row">
            <span class="ed-label ed-body1">Body Paragraph 1</span>
            <span class="ed-content">
              <strong>Topic Sentence:</strong> First reason supporting your position<br>
              Explanation + Evidence/Example (from article in Module 4)<br>
              Concluding sentence
            </span>
          </div>
          <div class="ed-row">
            <span class="ed-label ed-body2">Body Paragraph 2</span>
            <span class="ed-content">
              <strong>Topic Sentence:</strong> Second reason supporting your position<br>
              Explanation + Evidence/Example (from article in Module 4)<br>
              Concluding sentence
            </span>
          </div>
          <div class="ed-row">
            <span class="ed-label ed-concl">Conclusion</span>
            <span class="ed-content">
              Restate your position (different words — do not copy!)<br>
              Brief summary of your two reasons<br>
              Final recommendation or statement
            </span>
          </div>
        </div>

        <div class="theory-example" style="font-style:normal; margin-top:14px; line-height:2.1;">
          <strong>Prompt:</strong> <em>"Do you agree or disagree that social media has a negative effect on young people?"</em><br><br>
          <strong>Introduction:</strong> Background about social media use → <strong>Thesis:</strong> <em>"It is argued that social media has a significantly negative effect on young people, primarily due to its harmful impact on their mental health and its contribution to reduced face-to-face communication."</em><br><br>
          <strong>Body ¶1 Topic Sentence:</strong> <em>"The most significant negative effect of social media on young people is its damaging impact on mental health."</em><br>
          <span style="color:var(--green-dark); font-size:0.84em;">→ Supports the "mental health" point from the thesis</span><br><br>
          <strong>Body ¶2 Topic Sentence:</strong> <em>"A further concern is that excessive use of social media has led to a significant reduction in meaningful face-to-face communication among young people."</em><br>
          <span style="color:var(--green-dark); font-size:0.84em;">→ Supports the "reduced face-to-face communication" point from the thesis</span>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════
           PART 6 — ACADEMIC CONVENTIONS
           ═══════════════════════════════════════════════════ -->
      <div class="level-section-header b1" id="conventions">
        <span class="level-badge level-b1" style="font-size:0.95em; padding:5px 14px;">B1</span>
        <h2>Part 6 — Academic Writing Conventions</h2>
      </div>

      <div class="two-col">
        <div class="theory-block">
          <h3>❌ What to AVOID</h3>
          <table class="styled-table" style="font-size:0.83em;">
            <tr><th>Problem</th><th>Example to avoid</th></tr>
            <tr><td>Contractions</td><td><em>don't, can't, it's, I've</em></td></tr>
            <tr><td>First person opinion</td><td><em>I think, I believe</em></td></tr>
            <tr><td>Second person</td><td><em>you should, your</em></td></tr>
            <tr><td>Informal vocabulary</td><td><em>stuff, a lot of, big, bad, good</em></td></tr>
            <tr><td>Direct questions</td><td><em>Why is this? What should we do?</em></td></tr>
            <tr><td>Slang</td><td><em>super, totally, guys</em></td></tr>
          </table>
        </div>
        <div class="theory-block">
          <h3>✅ Use Instead</h3>
          <table class="styled-table" style="font-size:0.83em;">
            <tr><th>Instead of…</th><th>Write…</th></tr>
            <tr><td><em>don't</em></td><td><em>do not</em></td></tr>
            <tr><td><em>I think</em></td><td><em>It can be argued that…</em></td></tr>
            <tr><td><em>you</em></td><td><em>individuals / students / people</em></td></tr>
            <tr><td><em>a lot of</em></td><td><em>many / numerous / a significant number of</em></td></tr>
            <tr><td><em>good / bad</em></td><td><em>beneficial / detrimental / harmful</em></td></tr>
            <tr><td><em>Why is this?</em></td><td><em>This is due to… / The reason is…</em></td></tr>
          </table>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════
           PART 7 — ACADEMIC VOCABULARY
           ═══════════════════════════════════════════════════ -->
      <h2 class="section-title" id="vocabulary">📌 Part 7 — Academic Vocabulary Starter List</h2>
      <p>These are key academic words you should know and be able to use correctly in your essays. Study them with their collocations (words they are commonly used with).</p>

      <table class="styled-table" style="font-size:0.86em; margin-bottom:20px;">
        <thead>
          <tr><th>Word</th><th>Type</th><th>Common Collocations</th><th>Example</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>significant</strong></td><td>adj.</td><td><em>significant impact, significant benefit, significant challenge</em></td><td><em>Social media has a significant impact on young people.</em></td></tr>
          <tr><td><strong>impact</strong></td><td>n./v.</td><td><em>negative impact, positive impact, impact on</em></td><td><em>Technology has impacted the way people work.</em></td></tr>
          <tr><td><strong>argue</strong></td><td>v.</td><td><em>It can be argued that, argue that</em></td><td><em>It can be argued that online learning is effective.</em></td></tr>
          <tr><td><strong>evidence</strong></td><td>n.</td><td><em>strong evidence, evidence suggests, provide evidence</em></td><td><em>There is strong evidence that exercise reduces stress.</em></td></tr>
          <tr><td><strong>factor</strong></td><td>n.</td><td><em>key factor, important factor, contributing factor</em></td><td><em>One key factor in academic success is motivation.</em></td></tr>
          <tr><td><strong>contribute</strong></td><td>v.</td><td><em>contribute to, contribute significantly</em></td><td><em>Social media contributes to reduced face-to-face interaction.</em></td></tr>
          <tr><td><strong>beneficial</strong></td><td>adj.</td><td><em>highly beneficial, beneficial for, beneficial effects</em></td><td><em>Regular exercise is highly beneficial for mental health.</em></td></tr>
          <tr><td><strong>consequently</strong></td><td>adv.</td><td>Use at the start of a sentence + comma</td><td><em>Consequently, students may struggle to manage their time.</em></td></tr>
          <tr><td><strong>furthermore</strong></td><td>adv.</td><td>Adding a second, stronger point</td><td><em>Furthermore, technology has transformed education globally.</em></td></tr>
          <tr><td><strong>however</strong></td><td>adv.</td><td>Introducing a contrasting point</td><td><em>However, there are several challenges to consider.</em></td></tr>
        </tbody>
      </table>

      <div class="info-box info-box-green">
        <h4>✅ Vocabulary Strategy</h4>
        <p style="margin:0;">Do not learn words alone — learn them in <strong>collocations</strong>. Instead of memorizing "significant", memorize <em>"a significant impact on…"</em> or <em>"a significant challenge for…"</em>. This makes it much easier to use the word correctly in your writing. Keep a vocabulary notebook with collocations and example sentences.</p>
      </div>` }} />

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module1/lesson-1"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module1/lesson-3"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
