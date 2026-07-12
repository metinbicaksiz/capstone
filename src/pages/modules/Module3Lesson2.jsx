import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module3Lesson2() {
  const [activeAccordion, setActiveAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const moduleNames = {
    1: 'Module 1 — From Paragraph to Essay',
    2: 'Module 2 — Advantages & Disadvantages Essays',
    3: 'Module 3 — Cause & Effect Essays',
    4: 'Module 4 — Argumentative Essays'
  }

  return (
    <ModuleLayout moduleNumber={3} moduleName={moduleNames[3]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="content-locked" dangerouslySetInnerHTML={{ __html: `

      <div class="page-banner">
        <h1>3.2 — Theory &amp; Knowledge Building</h1>
        <p class="banner-sub">Learn the theory of cause and effect essays and develop the skills you need to write them effectively.</p>
      </div>

      <h2 class="section-title">Theory</h2>
      <p>Study what a cause/effect essay is, how to build introductions and thesis statements, model body paragraphs, and the causal language used to connect reasons to results.</p>
        ` }} />

        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 0 ? 'active' : ''}`}
              onClick={() => toggleAccordion(0)}
            >
              <span>What Is a Cause &amp; Effect Essay?</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 0 && (
              <div
                className={`accordion-content ${activeAccordion === 0 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p>Cause and effect essays are concerned with <strong>why</strong> things happen (causes) and <strong>what</strong> happens as a result (effects). Topics always have a number of possible causes and effects.</p>
                  <ul style="margin:0 0 16px 20px; line-height:1.8;">
                    <li>To determine <strong>causes</strong>, ask: "Why did this happen?"</li>
                    <li>To determine <strong>effects</strong>, ask: "What happened because of this?"</li>
                  </ul>
                  <p><strong>A simple example of one cause producing one effect:</strong></p>
                  <div class="info-box info-box-blue">
                    <p style="margin:0;"><strong>Cause:</strong> You are out of gas. &nbsp;→&nbsp; <strong>Effect:</strong> Your car won't start.</p>
                  </div>
                  <p>Sometimes, <u>many</u> causes contribute to a <u>single</u> effect, or <u>many</u> effects may result from a <u>single</u> cause. For example:</p>
                  <ul style="margin:0 0 16px 20px; line-height:1.8;">
                    <li><strong>What are the causes of choosing to major in accounting?</strong> — liked business in high school; salaries in the field are high; have an aunt who is an accountant; good with numbers</li>
                    <li><strong>What are the effects of reduced work hours?</strong> — employer is irritated; more time to study; more time for family and friends</li>
                  </ul>
                  <div class="info-box" style="background:#fffbeb; border-color:#fde047;">
                    <h4>Why does this matter?</h4>
                    <p style="margin:0;">In academic writing, you will frequently need cause/effect organization when explaining a situation — for example, analyzing the effects of a historical event, or the reasons why a phenomenon occurs.</p>
                  </div>
                ` }}
              />
            )}
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 1 ? 'active' : ''}`}
              onClick={() => toggleAccordion(1)}
            >
              <span>Introductions, Hooks &amp; Thesis Statements</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 1 && (
              <div
                className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p>The introduction paragraph has three jobs: capture the reader's attention, introduce the topic with background information, and state the thesis statement.</p>
                  <p><strong>1. The Hook</strong> — an interesting opening sentence (or two) that creates curiosity. Common types:</p>
                  <ul style="margin:0 0 16px 20px; line-height:1.8;">
                    <li><strong>Question:</strong> Isn't it unfortunate that in today's society there are so many people who cannot read or write?</li>
                    <li><strong>Quotation:</strong> As Benjamin Franklin pointed out, "Genius without education is like silver in the mine."</li>
                    <li><strong>Facts &amp; Statistics:</strong> According to the Ministry of Education, the budget for higher education rose from 9% in 2003 to 14% by 2009.</li>
                    <li><strong>General Statement:</strong> Happiness is a state of being that everyone wants to achieve.</li>
                  </ul>
                  <p><strong>2. Background Information (The Funnel Approach)</strong> — move from something general down to your specific thesis: <em>Hook → Specific → More specific → Thesis statement.</em></p>
                  <div class="info-box" style="background:#fef2f2; border-color:#fca5a5;">
                    <h4>Reverse Cause and Effect Rule</h4>
                    <p style="margin:0;">You <strong>cannot</strong> mention any specific causes before the thesis statement in a <strong>cause</strong> essay, and you <strong>cannot</strong> mention any specific effects before the thesis statement in an <strong>effect</strong> essay. You may only mention the underlying reasons (in an effect essay) or overall results (in a cause essay) as background.</p>
                  </div>
                  <p><strong>Example (Effect essay — "What are the effects of migration?"):</strong></p>
                  <div class="info-box info-box-blue">
                    <p style="margin:0;">Overpopulation in cities is a phenomenon affecting many countries in the world. It is largely caused by the migration of people searching for new opportunities that rural areas cannot provide. Though there exist some benefits in having large concentrations of people in an urban area, there are many negative outcomes. <strong>Two such outcomes of overpopulated cities are an increase in both health problems and crime rates.</strong></p>
                  </div>
                  <p><strong>Sample thesis statement patterns:</strong></p>
                  <ul style="margin:0 0 16px 20px; line-height:1.8;">
                    <li><em>Cause:</em> The two causes of globalization are developments in technology and capitalism.</li>
                    <li><em>Cause:</em> Globalization stems from two major causes: developments in technology and capitalism.</li>
                    <li><em>Effect:</em> Globalization has two significant effects: the destruction of local cultures and the standardization of lifestyles.</li>
                    <li><em>Effect:</em> Because of globalization, local cultures have been destroyed and lifestyles have become standard around the world.</li>
                  </ul>
                ` }}
              />
            )}
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 2 ? 'active' : ''}`}
              onClick={() => toggleAccordion(2)}
            >
              <span>Model Paragraph 1 — Causes of Poor Health</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 2 && (
              <div
                className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p><strong>Question:</strong> What are the factors that lead to poor health?</p>
                  <p><strong>Thesis statement:</strong> There are two main factors that lead to poor health: stress and bad eating habits.</p>
                  <p>Each body paragraph should start with a <strong>topic sentence</strong> and follow with <strong>supporting ideas</strong> that develop it logically.</p>
                  <p><strong>Outline</strong></p>
                  <p><strong>Topic sentence:</strong> One of the most important reasons for poor health is stress.</p>
                  <p><strong>Supporting idea 1 — larger and more crowded work places:</strong><br>— More people living and working together → more arguments and disagreements<br>— Stress in turn leads to poor health</p>
                  <p><strong>Supporting idea 2 — financial problems:</strong><br>— Being unemployed or not earning enough money → not able to support families<br>— Losing hope and no longer caring about their health</p>
                  <p><strong>Full Model Paragraph</strong></p>
                  <div class="info-box info-box-blue">
                    <p style="margin:0;">One of the most important reasons for poor health is stress. Firstly, one cannot deny that in the 21st century, work places are larger and more crowded. More specifically, there are more people working and living together than in the past. When a lot of people work together, there are always disagreements and arguments. As a consequence, all these problems will eventually cause stress which in turn leads to poor health. What is more, financial problems inevitably increase stress levels. Sometimes people are unemployed or do not earn enough money to support their families given the economic circumstances of the country. As a result, they lose their hope and stop caring about their health since finding a new job and maintaining their life are their only concerns.</p>
                  </div>
                ` }}
              />
            )}
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 3 ? 'active' : ''}`}
              onClick={() => toggleAccordion(3)}
            >
              <span>Model Paragraph 2 — Effects of a Positive Outlook</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 3 && (
              <div
                className={`accordion-content ${activeAccordion === 3 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p><strong>Question:</strong> What are the effects of a positive outlook on our lives?</p>
                  <p><strong>Thesis statement:</strong> A positive outlook can enrich your relationships, guide you through some of life's greatest challenges, and help you achieve your goals.</p>
                  <p><strong>Topic sentence:</strong> People with a positive outlook are stronger and more capable of confronting difficult situations.</p>
                  <p><strong>Full Model Paragraph</strong></p>
                  <div class="info-box info-box-blue">
                    <p style="margin:0;">People with a positive outlook are stronger and more capable of confronting difficult situations. They develop clear minds, which help them cope with life's challenges better than those individuals who are not at peace with themselves. Happy people's optimism creates the strength needed to find rational solutions to the many unexpected problems that life presents. Another reason why they can easily handle challenges is this optimism also promotes their self-confidence and self-esteem. For example, happier students are more likely to approach professors for help when they are having some trouble with their course work. They also do not hesitate to take risks since they believe in their potential and they are not afraid of making mistakes. In contrast, unhappy or less happy students may internalize their frustration and be less likely to seek out help.</p>
                  </div>
                  <p><strong>Concluding paragraph</strong> — restate the thesis, then add a final comment (In my opinion, / It seems to me that, / To my mind, ...):</p>
                  <div class="info-box info-box-blue">
                    <p style="margin:0;">In conclusion, happiness will bring us strong relationships, the ability to face any obstacle and the opportunity to achieve our goals. It is a good idea to have a positive outlook and recognize what makes us happy since it will bring us more harmony. If we promise ourselves to laugh more and think positively, we will change our lives for the better.</p>
                  </div>
                ` }}
              />
            )}
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 4 ? 'active' : ''}`}
              onClick={() => toggleAccordion(4)}
            >
              <span>Causal Language &amp; Connectors</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 4 && (
              <div
                className={`accordion-content ${activeAccordion === 4 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p>Indicators are signal words that connect a cause/reason to its effect/result, giving your writing flow.</p>
                  <p><strong>Signal words for cause:</strong> Because / Since / As, Because of, Due to, Owing to, As a consequence of, As a result of, On account of</p>
                  <p><strong>Signal words for effect:</strong> So / Therefore / Thus / Hence, Because of this, For this reason, That's why, As a consequence, Consequently, Accordingly, As a result</p>
                  <p><strong>Sentence patterns:</strong></p>
                  <ul style="margin:0 0 16px 20px; line-height:1.8;">
                    <li>The demand has increased. <em>Consequently, / Thus, / As a result,</em> the prices are high.</li>
                    <li><em>Because / As / Since</em> the demand has increased, the prices are higher.</li>
                    <li>Higher prices are <em>because of / due to / a result of</em> an increase in demand.</li>
                    <li>The prices are high <em>owing to the fact that</em> there is an increase in demand.</li>
                  </ul>
                  <p><strong>Cause/effect verb phrases:</strong></p>
                  <ul style="margin:0 0 16px 20px; line-height:1.8;">
                    <li>An increase in demand <strong>causes / results in / leads to / produces / brings about / gives rise to</strong> higher prices. (CAUSE → EFFECT)</li>
                    <li>Higher prices <strong>result from / stem from / are caused by / derive from</strong> an increase in demand. (EFFECT ← CAUSE)</li>
                    <li>The <strong>cause of / reason for</strong> higher prices was an increase in demand.</li>
                    <li>The <strong>effect of / one consequence of</strong> an increase in demand is high prices.</li>
                  </ul>
                  <div class="info-box" style="background:#fffbeb; border-color:#fde047;">
                    <h4>Note</h4>
                    <p style="margin:0;">The verb "affect" is neutral in meaning, so an adjective isn't needed after it (e.g., "An increase in demand affects prices," not "affects higher prices"). Some verb phrases carry connotation — "pose a threat to" is negative.</p>
                  </div>
                ` }}
              />
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module3/lesson-1"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module3/lesson-3"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
