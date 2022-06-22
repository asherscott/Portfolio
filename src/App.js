import "./App.css";
import RenderSection from "./RenderSection";
import { useState } from "react";

function App() {
  const [showProjects, setShowProjects] = useState(true);
  const [showExperience, setShowExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="wrapper">
      <nav className="main-nav">
        <div>
          <ul className="nav-ul">
            <li>
              <a href="#projects" onClick={() => setShowProjects(true)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setShowExperience(true)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#education" onClick={() => setShowEducation(true)}>
                Education
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <header className="large-header">
          <div className="profile-pic">
            <img src="./profile-pic.png" />
            <ul className="svgs-ul">
              <li>
                <a href="http://www.linkedin.com/in/asher-j-scott">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </li>

              <li>
                <a href="https://github.com/asherscott">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <section className="main-section">
            <h2>Hey, I'm Asher</h2>
            <h1>Software Engineer.</h1>
            <p>
              I'm a full stack software engineer trained in JavaScript, React,
              Ruby, Ruby on Rails, HTML5 and CSS3. I have had a lifelong
              appreciation and fascination with computer programming.
              Experienced in Ruby on Rails and JavaScript based programming.
              Thrive in roles that involve time management and analytical
              thinking.
            </p>
          </section>
        </header>

        <header className="small-header">
          <section className="main-section">
            <div className="profile-pic">
              <img src="./profile-pic.png" />
            </div>
            <div className="small-title">
              <h2>Hey, I'm Asher.</h2>
              <h1>Software Engineer</h1>
            </div>
          </section>

          <p>
            I'm a full stack software engineer trained in JavaScript, React,
            Ruby, Ruby on Rails, HTML5 and CSS3. I have had a lifelong
            appreciation and fascination with computer programming. Experienced
            in Ruby on Rails and JavaScript based programming. Thrive in roles
            that involve time management and analytical thinking.
          </p>
        </header>

        <aside>
          <ul className="nav-ul">
            <li>JavaScript</li>
            <span>|</span>
            <li>React.js</li>
            <span>|</span>
            <li>Ruby</li>
            <span>|</span>
            <li>Ruby on Rails</li>
            <span>|</span>
            <li>SQL</li>
            <span>|</span>
            <li>HTML</li>
            <span>|</span>
            <li>CSS</li>
          </ul>
        </aside>

        <article>
          <h3 id="projects" onClick={() => setShowProjects(!showProjects)}>
            Technical Projects
          </h3>

          <div className={showProjects ? "sections display" : "sections"}>
            <RenderSection
              data={{
                title: "Finance Tracker",
                links: {
                  github: "https://github.com/asherscott/finance-tracker",
                  website: "https://asher-scott-finance-tracker.herokuapp.com/",
                },
                description:
                  "A personal finance tracker to design a budget and track daily income and expenses.",
                listItems: [
                  "Applied BCrypt and Active Record to ensure security of user information.",
                  "Constructed Ruby on Rails backend utilizing the Model View Controller pattern.",
                  "Designed and constructed React frontend to provide an excellent user experience.",
                  "Utilized React-Google-Charts to display budget, cash flow, and net worth information to the user.",
                ],
              }}
            />
            <RenderSection
              data={{
                title: "The Game Corner",
                links: {
                  github:
                    "https://github.com/asherscott/The-Game-Corner-frontend",
                  demo: "https://www.youtube.com/watch?v=t605X_9GFsk",
                },
                description:
                  "A video game catalog where users can browse different game information and leave reviews.",
                listItems: [
                  "Modeled, rendered, and edited a 3D animation using Blender for the home page background.",
                  "Utilized Ruby, ActiveRecord, and Sinatra to create a backend to store game and review information.",
                  "Constructed React frontend that includes the home, game list, game instance tab, and user tab.",
                  "Utilized React-Stars to create an in-depth review section.",
                ],
              }}
            />
            <RenderSection
              data={{
                title: "Word Muncher",
                links: {
                  github: "https://github.com/asherscott/Word-Muncher",
                  website: "https://asherscott.github.io/Word-Muncher/",
                  demo: "https://www.youtube.com/watch?v=LPuwrxYA51M",
                },
                description:
                  "A reimagination of the classic snake game where users collect letters to spell words.",
                listItems: [
                  "Utilized json-server to mimic database operations in order to let users choose between built-in word lists.",
                  "Utilized Words API to generate a word list of synonyms from user input.",
                  "Configured behind the scene logic of the game mechanics.",
                  "Constructed JavaScript frontend utilizing the Document Oriented Model.",
                ],
              }}
            />
          </div>
        </article>

        <article>
          <h3
            id="experience"
            onClick={() => setShowExperience(!showExperience)}
          >
            Experience
          </h3>

          <div className={showExperience ? "sections display" : "sections"}>
            <RenderSection
              data={{
                title: "Pizza Hut",
                description: "Delivery Driver",
                date: "02/2021 - 02/2022",
                listItems: [
                  "Delivered goods to customers with a perfect driving record.",
                  "Provided excellent customer experience, managed inventory stock, and ensured the quality of orders.",
                ],
              }}
            />
            <RenderSection
              data={{
                title: "Which Wich",
                description: "Shift Leader",
                date: "09/2017 - 02/2019",
                listItems: [
                  "Communicated with customers and used POS systems to handle transactions.",
                  "Managed crew members, handled opening and closing duties, and ensured the security of the store.",
                ],
              }}
            />
          </div>
        </article>

        <article>
          <h3 id="education" onClick={() => setShowEducation(!showEducation)}>
            Education
          </h3>

          <div className={showEducation ? "sections display" : "sections"}>
            <RenderSection
              data={{
                title: "Flatiron School",
                description:
                  "Software Engineering Certification - Full Stack, Ruby on Rails and JavaScript",
                date: "01/2022 - 06/2022",
              }}
            />
            <RenderSection
              data={{
                title: "Collin College",
                description: "(AAS) - Math Concentration",
                date: "09/2019 - 09/2021",
              }}
            />
          </div>
        </article>
      </main>

      <footer>
        <div className="nav-wrap">
          <nav className="foot-nav">
            <h5>PERSONAL</h5>
            <ul>
              <li>
                <a href="http://www.linkedin.com/in/asher-j-scott">Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/asherscott">Github</a>
              </li>
              <li>
                <a href="mailto: asher.scott6@gmail.com">Email</a>
              </li>
              <li>
                <a href="./Asher_Scott.pdf" download="Asher_Scott">
                  Resume
                </a>
              </li>
              <li>
                <a href="https://dev.to/asherscott">Dev.to</a>
              </li>
            </ul>
          </nav>

          <nav className="foot-nav">
            <h5>PORTFOLIO</h5>
            <ul>
              <li>
                <a href="index.html">Website</a>
              </li>
              <li>
                <a href="https://github.com/asherscott/Portfolio">Github</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
