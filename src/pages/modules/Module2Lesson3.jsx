import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module2Lesson3() {
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
    <ModuleLayout moduleNumber={2} moduleName={moduleNames[2]}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="content-locked" dangerouslySetInnerHTML={{ __html: `

      <div class="page-banner">
        <h1>2.3 Interactive Activities</h1>
        <p class="banner-sub">Complete interactive practice activities with immediate feedback to master advantages and disadvantages essay skills.</p>
      </div>

      <h2 class="section-title">Practice</h2>
      <p>Apply what you learned in 2.2 with these paragraph-writing exercises: writing topic and concluding sentences, and building supporting ideas for a full paragraph.</p>
        ` }} />

        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 0 ? 'active' : ''}`}
              onClick={() => toggleAccordion(0)}
            >
              <span>Exercise 1 — Topic &amp; Concluding Sentences</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 0 && (
              <div
                className={`accordion-content ${activeAccordion === 0 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p>For each question below, write a topic sentence (TS) and a concluding sentence (CS).</p>
                  <div class="info-box info-box-blue">
                    <p style="margin:0 0 8px;"><strong>1. What are the advantages OR disadvantages of alternative medicine?</strong></p>
                    <p style="margin:0 0 4px;"><strong>TS:</strong> There are several advantages of alternative medicine.</p>
                    <p style="margin:0;"><strong>CS:</strong> In short, alternative medicine has these three advantages.</p>
                  </div>
                  <p>Now try these on your own:</p>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>2. What are the advantages OR disadvantages of having a pet?</strong></p>
                    <textarea placeholder="TS: ..." style="width:100%; margin-bottom:8px; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                    <textarea placeholder="CS: ..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>3. What are the advantages OR disadvantages of renewable energy?</strong></p>
                    <textarea placeholder="TS: ..." style="width:100%; margin-bottom:8px; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                    <textarea placeholder="CS: ..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>4. What are the advantages OR disadvantages of eating regularly?</strong></p>
                    <textarea placeholder="TS: ..." style="width:100%; margin-bottom:8px; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                    <textarea placeholder="CS: ..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:16px;">
                    <p style="margin:0 0 8px;"><strong>5. What are the advantages OR disadvantages of distance learning?</strong></p>
                    <textarea placeholder="TS: ..." style="width:100%; margin-bottom:8px; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                    <textarea placeholder="CS: ..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <p><strong>Now write the question for each topic sentence given below:</strong></p>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>6.</strong> TS: There are several disadvantages of nuclear power.</p>
                    <textarea placeholder="Question: ..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px; margin-bottom:12px;">
                    <p style="margin:0 0 8px;"><strong>7.</strong> TS: There are many advantages of riding a bike.</p>
                    <textarea placeholder="Question: ..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  </div>
                  <div style="border:1px solid var(--grey-border); border-radius:8px; padding:14px 18px;">
                    <p style="margin:0 0 8px;"><strong>8.</strong> TS: There are some disadvantages of group decision-making.</p>
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
              <span>Exercise 2 — Living in a City</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 1 && (
              <div
                className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p><strong>Question:</strong> What are the advantages OR disadvantages of living in a city?</p>

                  <p><strong>1) Put the sentences in order to make the first supporting idea for the question above.</strong></p>
                  <ul style="margin:0 0 12px 20px; line-height:1.8;">
                    <li>a) Since most corporate offices, industries, factories, and government offices are in a city or close to it, there are many job opportunities.</li>
                    <li>b) In addition, big international or national companies have their headquarters in cities. People in higher positions work in these places.</li>
                    <li>c) The first advantage is that there are wider career options in cities.</li>
                    <li>d) Therefore, people can get a promotion and become managers at these headquarters.</li>
                    <li>e) People can find a job and make a living more easily in a city.</li>
                  </ul>
                  <textarea placeholder="Write the correct order, e.g. c, e, a, b, d" style="width:100%; margin-bottom:16px; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>

                  <p><strong>2) Write the topic sentence and concluding sentence for the same question.</strong></p>
                  <textarea placeholder="TS: ..." style="width:100%; margin-bottom:8px; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  <textarea placeholder="CS: ..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
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
              <span>Exercise 3 — Write the Supporting Idea</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 2 && (
              <div
                className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p><strong>Question:</strong> What are the advantages OR disadvantages of living in a city?</p>

                  <p><strong>3) Write the keywords in the clustering schema given below to map the information given in the second supporting idea.</strong></p>
                  <div class="info-box info-box-blue">
                    <p style="margin:0;">The second advantage concerns educational facilities. Better schools and universities are often in cities. They provide students with better education with the help of their qualified instructors. Students who attend these schools can find a better job in the future. Furthermore, people can acquire various skills by taking different courses such as language and arts courses at other institutions. These courses can help people to develop personally.</p>
                  </div>
                  <textarea placeholder="Supporting idea: ..." style="width:100%; margin-bottom:8px; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  <textarea placeholder="Supporting detail – 1: ..." style="width:100%; margin-bottom:8px; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>
                  <textarea placeholder="Supporting detail – 2: ..." style="width:100%; margin-bottom:16px; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="1"></textarea>

                  <p><strong>4) Write the last supporting idea for the same question.</strong></p>
                  <textarea placeholder="Write your supporting idea here..." style="width:100%; padding:8px; border:1px solid var(--grey-border); border-radius:4px; font-family:inherit;" rows="5"></textarea>
                ` }}
              />
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module2/lesson-2"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module2/lesson-4"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
