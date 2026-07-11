import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModuleLayout from '../../components/ModuleLayout'
import './ModulesPage.css'

export default function Module2Lesson2() {
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
        <h1>2.2 Theory &amp; Knowledge Building</h1>
        <p class="banner-sub">Learn the theory of advantages and disadvantages essays and develop the skills you need to write them effectively.</p>
      </div>

      <h2 class="section-title">Theory</h2>
      <p>Study the essay structure, model paragraphs, topic and concluding sentences, and transitional signals used in advantages/disadvantages essays.</p>
        ` }} />

        <div className="accordion">
          <div className="accordion-item">
            <button
              className={`accordion-header ${activeAccordion === 0 ? 'active' : ''}`}
              onClick={() => toggleAccordion(0)}
            >
              <span>Paragraph Structure Basics</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 0 && (
              <div
                className={`accordion-content ${activeAccordion === 0 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p>The focus of an advantages/disadvantages essay is on the advantages <strong>OR</strong> the disadvantages of a topic. The word "or" makes it clear that there are two sides — you must choose <u>one</u> side and stick to it.</p>
                  <div class="info-box" style="background:#fef2f2; border-color:#fca5a5;">
                    <h4>Warning</h4>
                    <p style="margin:0;">Do not write about advantages and disadvantages in the same paragraph. Mixing both sides will cost you points in both organization and content.</p>
                  </div>
                  <p>Every paragraph has three basic parts:</p>
                  <ol style="margin:0 0 0 20px; line-height:1.8;">
                    <li>Topic Sentence</li>
                    <li>Supporting / Body Sentences (3 supporting ideas)</li>
                    <li>Concluding Sentence</li>
                  </ol>
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
              <span>Model Paragraph 1 — Staying in a Dormitory</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 1 && (
              <div
                className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p><strong>Question:</strong> What are the advantages or disadvantages of staying in a dormitory?</p>
                  <p>First, brainstorm ideas for advantages and disadvantages separately, then focus on the side you can write more about. Here is the brainstorming for disadvantages of staying in a dorm:</p>
                  <ul style="margin:0 0 16px 20px; line-height:1.8;">
                    <li>No Privacy</li>
                    <li>Limited space</li>
                    <li>Rules</li>
                    <li>Physical conditions</li>
                    <li>Noisy and active life</li>
                    <li>Meals</li>
                  </ul>
                  <p>Remember, you don't need to use all of the ideas — just three, each with supporting details.</p>
                  <p><strong>Outline</strong></p>
                  <p><strong>Topic sentence:</strong> There are many disadvantages of staying in a dormitory.</p>
                  <p><strong>Supporting idea 1:</strong> Students live in poor physical conditions.<br>— Small space and no privacy<br>— Dirty kitchen and toilets</p>
                  <p><strong>Supporting idea 2:</strong> There is a noisy and active life in dormitories.<br>— Loud music coming from next door and visitors or roommates<br>— Exciting activities surrounding students</p>
                  <p><strong>Supporting idea 3:</strong> Students have problems with meals.<br>— Not proper timing of the meals<br>— Options are not available</p>
                  <p><strong>Concluding sentence:</strong> All in all, staying in a dorm has these three disadvantages.</p>
                  <p><strong>Full Model Paragraph</strong></p>
                  <div class="info-box info-box-blue">
                    <p style="margin:0;">There are several disadvantages of staying in a dormitory. First of all, students live in poor physical conditions. Since so many students use the bathrooms and kitchens, these places are usually dirty. Therefore, students can suffer from some health issues due to this hygiene problem. In addition, limited space causes privacy problems. Students who live together cannot keep much from each other, because they can see and hear everything they do. For example, they listen to each other when they are on the phone. Secondly, there is always a noisy and active life in dorms. Because students share the same room with others, friends come and go. Also, there might be some students who stay up all night. This is a serious problem for the ones who like their sleep. Furthermore, there is always a game going on in one room. You can hear them having fun and may want to join them. As a result, this can become a distraction from studying. Finally, students can have problems with meals when they stay in a dorm. There is usually a fixed time for each meal in dormitories. For this reason, students who wake up late cannot have breakfast and they stay hungry or eat unhealthy food. What is more, students in some dormitories have limited options for food. Some students have difficulty finding food that they like. For instance, the ones who don't like okra may have to eat soup only with too much bread. In short, staying in a dormitory has these three disadvantages.</p>
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
              <span>Model Paragraph 2 — Public Transportation</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 2 && (
              <div
                className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p><strong>Question:</strong> What are the advantages or disadvantages of public transportation?</p>
                  <p><strong>Outline</strong></p>
                  <p><strong>Topic sentence:</strong> There are many advantages of public transportation.</p>
                  <p><strong>Supporting idea 1 — Environmental benefits:</strong><br>— Less air pollution due to carbon emissions<br>— Less land use for roads</p>
                  <p><strong>Supporting idea 2 — Economic benefits:</strong><br>— Buses are cheaper than driving<br>— No high parking prices</p>
                  <p><strong>Supporting idea 3 — Psychological benefits:</strong><br>— Not stressful (no traffic jam / reading or playing games)<br>— Making new friends</p>
                  <p><strong>Concluding sentence:</strong> In short, public transportation has these three advantages.</p>
                  <p><strong>Full Model Paragraph</strong></p>
                  <div class="info-box info-box-blue">
                    <p style="margin:0;">There are many advantages of public transportation. The first advantage is that using public transportation offers some environmental benefits. Public transport causes less pollution than private cars. According to the United States Energy Association, public transportation use in the US reduces the nation's carbon emissions by 37 million metric tons annually because less fuel is needed. In addition, if more people travel by train, tram or bus, there will be fewer cars on the road. Thus, they won't need to destroy nature to build extra roads. The second advantage concerns the economic benefits of public transportation. Public transportation is cheaper than individual cars since you don't have a problem of high gas prices and in many cities you can go wherever you want with one ticket. Furthermore, if they use public transportation, people do not have to worry about parking and its high prices, especially in city centers. The final advantage is the psychological benefits of using public transportation. People who travel by subways don't feel stressed because of traffic jams. They can also play computer games or read books on the train. Moreover, if people use public transportation, they can meet new people during their journeys and make new friends. As a result, they won't feel isolated. In brief, public transportation has these three advantages.</p>
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
              <span>Topic &amp; Concluding Sentence Patterns</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 3 && (
              <div
                className={`accordion-content ${activeAccordion === 3 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p><strong>Topic sentence patterns</strong></p>
                  <ol style="margin:0 0 16px 20px; line-height:1.8;">
                    <li><u>[Topic]</u> has <em>three / several / many</em> <u>[advantages / disadvantages]</u>.</li>
                    <li>There are <em>some / three / several</em> <u>[advantages / disadvantages]</u> of <u>[topic]</u>.</li>
                  </ol>
                  <p><em>Example:</em> Staying in a dormitory has three disadvantages. / There are some disadvantages of staying in a dormitory.</p>
                  <p><strong>Concluding sentence</strong></p>
                  <p>Start with a transitional signal, then restate the topic sentence in a different way:</p>
                  <p style="margin:0 0 16px;"><em>In short, / In brief, / To sum up, / In conclusion, / All in all,</em> ... (restated topic sentence)</p>
                  <div class="info-box" style="background:#fffbeb; border-color:#fde047;">
                    <h4>Note</h4>
                    <p style="margin:0;">There are many ways of saying almost the same thing. You can use one version as the topic sentence and the other as the concluding sentence — but never use the exact same sentence for both.</p>
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
              <span>Transitional Signals &amp; Connectors</span>
              <span className="accordion-icon">▼</span>
            </button>
            {activeAccordion === 4 && (
              <div
                className={`accordion-content ${activeAccordion === 4 ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: `
                  <p><strong>To list points:</strong> To start with, / To begin with, / First(ly), Second(ly), Third(ly), Final(ly), — OR — The first / second / final advantage is that... / Another advantage is that... / concerns...</p>
                  <p><strong>To add details:</strong> In addition (to this), / Furthermore, / Moreover, / Also, / What is more,</p>
                  <p><strong>Giving examples:</strong> for example, / for instance, / such as / like</p>
                  <p><strong>Giving results:</strong> Therefore, / , so / Thus, / As a result,</p>
                  <p style="margin:0;"><strong>Stating reasons:</strong> Since / Because</p>
                ` }}
              />
            )}
          </div>
        </div>

        
        <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={"/module2/lesson-1"} className="btn btn-outline">← Previous Lesson</Link>
          <Link to={"/module2/lesson-3"} className="btn btn-primary">Next Lesson →</Link>
        </div>
      </div>
    </ModuleLayout>
  )
}
