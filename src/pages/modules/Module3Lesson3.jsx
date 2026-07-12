import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module3Lesson3() {
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
        <h1>3.3 Interactive Activities</h1>
        <p class="banner-sub">Complete interactive practice activities with immediate feedback to master cause and effect essay skills.</p>
      </div>

      <h2 class="section-title">Practice</h2>
      <p>Apply what you learned in 3.2 with these exercises: writing topic sentences for cause/effect thesis statements, practicing causal connectors, and combining causes and effects with linking language.</p>
        ` }} />

        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 0 ? 'active' : ''}`}
              onClick={() => toggleAccordion(0)}
            >
              <span>Exercise 1 — Topic Sentences for Thesis Statements</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 0 && (
              <div
                className={`accordion-content ${activeAccordion === 0 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p>Read each thesis statement, then write a topic sentence for each body paragraph it introduces.</p>
                  <div class="info-box info-box-blue">
                    <p style="margin:0 0 8px;"><strong>Example — Thesis:</strong> Global warming is caused by two major factors: man-made factors and natural factors.</p>
                    <p style="margin:0 0 4px;"><strong>a.</strong> One of the major factors that causes global warming is man-made factors.</p>
                    <p style="margin:0;"><strong>b.</strong> Natural factors are another important factor that causes global warming.</p>
                  </div>
                  <p>Now try these on your own:</p>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>1. Thesis:</strong> Some women delay having children since they want to accomplish career objectives and do not want to limit themselves in their social lives.</p>
                    <textarea placeholder="a. ..." style="width:100%; margin-bottom:8px; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                    <textarea placeholder="b. ..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>2. Thesis:</strong> There are two main factors that lead to poor health: stress and bad eating habits.</p>
                    <textarea placeholder="a. ..." style="width:100%; margin-bottom:8px; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                    <textarea placeholder="b. ..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:16px;">
                    <p style="margin:0 0 8px;"><strong>3. Thesis:</strong> Terrorism has two main negative effects: the failure of social order and the collapse of the economy.</p>
                    <textarea placeholder="a. ..." style="width:100%; margin-bottom:8px; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                    <textarea placeholder="b. ..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <p><strong>Now write the question (prompt) that each thesis statement is answering:</strong></p>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>4.</strong> Thesis: The two causes of globalization are developments in technology and capitalism.</p>
                    <textarea placeholder="Question: ..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>5.</strong> Thesis: The two main effects computers have had on our lives are in the areas of economics and communications.</p>
                    <textarea placeholder="Question: ..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px;">
                    <p style="margin:0 0 8px;"><strong>6.</strong> Topic sentence: One of the most important reasons for poor health is stress.</p>
                    <textarea placeholder="Question: ..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
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
              <span>Exercise 2 — Cause &amp; Effect Connectors</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 1 && (
              <div
                className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p><strong>Fill in each blank with one connective from the box below.</strong> (More than one option may be possible.)</p>
                  <div class="info-box" style="background:#fffbeb; border-color:#fde047;">
                    <p style="margin:0;">due to &nbsp;•&nbsp; as &nbsp;•&nbsp; as a result &nbsp;•&nbsp; thus &nbsp;•&nbsp; on account of &nbsp;•&nbsp; since &nbsp;•&nbsp; for this reason &nbsp;•&nbsp; therefore &nbsp;•&nbsp; because &nbsp;•&nbsp; consequently</p>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>1.</strong> Schools for girls were built. ______, girls had a chance to learn about health and life skills.</p>
                    <textarea placeholder="Your answer..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>2.</strong> ______ girls learned about health skills, they improved the sanitation of their villages.</p>
                    <textarea placeholder="Your answer..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>3.</strong> Girls were given school uniforms ______ they needed to feel that they were a valued part of the school.</p>
                    <textarea placeholder="Your answer..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>4.</strong> The girls felt proud to have a uniform. ______, they were more likely to attend school every day.</p>
                    <textarea placeholder="Your answer..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>5.</strong> The family members of the girls walked them to school ______ they didn't want other males in the village to taunt the girls.</p>
                    <textarea placeholder="Your answer..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>6.</strong> After graduation, the girls were more likely to start small businesses ______ their mathematical and accounting skills.</p>
                    <textarea placeholder="Your answer..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>7.</strong> Some graduates became valued business owners. ______, they were invited to serve on business councils.</p>
                    <textarea placeholder="Your answer..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>8.</strong> ______ their community status, they were able to vote on improving water and sanitation.</p>
                    <textarea placeholder="Your answer..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px;">
                    <p style="margin:0 0 8px;"><strong>9.</strong> Health conditions improved in villages. ______, more babies and children survived.</p>
                    <textarea placeholder="Your answer..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
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
              <span>Exercise 3 — Combine Causes &amp; Effects</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 2 && (
              <div
                className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p><strong>Combine each cause and effect pair into one sentence using a cause/effect linker</strong> (e.g., leads to, results in, brings about, is a consequence of, since, because...). Use a different linker for each sentence.</p>
                  <div class="info-box info-box-blue">
                    <p style="margin:0 0 4px;"><strong>Example — cause:</strong> smoking &nbsp; <strong>effect:</strong> premature aging</p>
                    <p style="margin:0;">Smoking results in premature aging.</p>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>1. Cause:</strong> being a member of a social club &nbsp;&nbsp; <strong>Effect:</strong> taking on more responsibilities</p>
                    <textarea placeholder="Write your combined sentence..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>2. Cause:</strong> cultural differences &nbsp;&nbsp; <strong>Effect:</strong> communication breakdown</p>
                    <textarea placeholder="Write your combined sentence..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>3. Cause:</strong> financial problems &nbsp;&nbsp; <strong>Effect:</strong> unhappy marriage</p>
                    <textarea placeholder="Write your combined sentence..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>4. Cause:</strong> lack of study skills &nbsp;&nbsp; <strong>Effect:</strong> failure at school exams</p>
                    <textarea placeholder="Write your combined sentence..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:16px;">
                    <p style="margin:0 0 8px;"><strong>5. Cause:</strong> consuming fattening food &nbsp;&nbsp; <strong>Effect:</strong> gaining weight</p>
                    <textarea placeholder="Write your combined sentence..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <p><strong>Now write a full sentence for each cause/effect pair using the verb given in parentheses:</strong></p>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>6.</strong> A desire for attention (cause) → bullying behavior (effect) <em>(to be caused by)</em></p>
                    <textarea placeholder="Write your sentence..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px;">
                    <p style="margin:0 0 8px;"><strong>7.</strong> unemployment (cause) → an increase in crime rates (effect) <em>(give rise to)</em></p>
                    <textarea placeholder="Write your sentence..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                ` }}
              />
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module3/lesson-2"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module3/lesson-4"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
