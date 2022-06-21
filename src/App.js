import "./App.css";
import RenderSection from "./RenderSection";
import { useState } from "react";

function App() {
  const [showProjects, setShowProjects] = useState(true);
  const [showExperience, setShowExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="wrapper">
      <nav>
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
          <li>
            <a>Settings</a>
          </li>
        </ul>
      </nav>

      <main>
        <header className="large-header">
          <div className="profile-pic">
            <img src="./profile-pic.png" />
            <span>social media links</span>
          </div>

          <section className="main-section">
            <h2>Hey, I'm Asher.</h2>
            <h1>Software Engineer</h1>
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
        <ul className="nav-ul">
          <li>
            <a>linkedin</a>
          </li>
          <li>
            <a>github</a>
          </li>
          <li>
            <a>blog</a>
          </li>
          <li>
            <a>github specific</a>
          </li>
          <li>
            <a>other</a>
          </li>
          <li>email</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
