import "./App.css";
import RenderSection from "./RenderSection";
import { useState } from "react";

function App() {
  const [showProjects, setShowProjects] = useState(true);
  const [showExperience, setShowExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div className={darkTheme ? "wrapper" : "wrapper light"}>
      <nav className={darkTheme ? "main-nav" : "main-nav light"}>
        <div>
          <ul className="nav-ul">
            <li>
              <a
                href="#projects"
                onClick={() => setShowProjects(true)}
                className={darkTheme ? "" : "light"}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => setShowExperience(true)}
                className={darkTheme ? "" : "light"}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={() => setShowEducation(true)}
                className={darkTheme ? "" : "light"}
              >
                Education
              </a>
            </li>
            <li onClick={() => setDarkTheme(!darkTheme)} className="theme-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className={
                  darkTheme ? "bi bi-sun-fill" : "bi bi-sun-fill light"
                }
                viewBox="0 0 16 16"
              >
                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
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
                <a
                  href="http://www.linkedin.com/in/asher-j-scott"
                  className={darkTheme ? "" : "light"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={
                      darkTheme ? "bi bi-linkedin" : "bi bi-linkedin light"
                    }
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/asherscott"
                  className={darkTheme ? "" : "light"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={
                      darkTheme ? "bi bi-github" : "bi bi-github light"
                    }
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <section className="main-section">
            <h2 className={darkTheme ? "" : "light"}>Hey, I'm Asher</h2>
            <h1 className={darkTheme ? "" : "light"}>Software Engineer.</h1>
            <p>
              Full stack software engineer trained in JavaScript, React, Ruby,
              Ruby on Rails, HTML5 and CSS3. Lifelong passion and fascination
              for building web applications to create solutions and develop new
              technologies. Thrive working on teams where time management,
              innovation, and analytical thinking contribute to successful
              solutions.
            </p>
          </section>
        </header>

        <header className="small-header">
          <section className="main-section">
            <div className="profile-pic">
              <img src="./profile-pic.png" />
            </div>
            <div className="small-title">
              <h2 className={darkTheme ? "" : "light"}>Hey, I'm Asher.</h2>
              <h1 className={darkTheme ? "" : "light"}>Software Engineer</h1>
            </div>
          </section>

          <p>
            Full stack software engineer trained in JavaScript, React, Ruby,
            Ruby on Rails, HTML5 and CSS3. Lifelong passion and fascination for
            building web applications to create solutions and develop new
            technologies. Thrive working on teams where time management,
            innovation, and analytical thinking contribute to successful
            solutions.
          </p>
        </header>

        <aside className={darkTheme ? "skills" : "skills light"}>
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

        <article id="projects">
          <h3
            onClick={() => setShowProjects(!showProjects)}
            className={darkTheme ? "" : "light"}
          >
            Technical Projects
            <span
              className={
                showProjects ? "svg-span arrow-in" : "svg-span arrow-out"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={
                  darkTheme
                    ? "bi bi-caret-right-fill"
                    : "bi bi-caret-right-fill light"
                }
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </span>
          </h3>

          <div className={showProjects ? "sections display" : "sections"}>
            <RenderSection
              data={{
                title: "Personal Finance Tracker",
                links: {
                  github: "https://github.com/asherscott/finance-tracker",
                  website: "https://asher-scott-finance-tracker.herokuapp.com/",
                  demo: "https://www.youtube.com/watch?v=VvzOSbpJzIE",
                },
                description:
                  "A personal finance tracker that allows users to create a budget, track daily income and expenses.",
                listItems: [
                  "Applied BCrypt and Active Record to ensure security of user information.",
                  "Constructed Ruby on Rails backend utilizing the Model View Controller pattern in order to store user data.",
                  "Designed and constructed React frontend to provide a smooth and intuitive user experience.",
                  "Utilized React-Google-Charts to display budget, cash flow, and net worth information for the user.",
                ],
              }}
              darkTheme={darkTheme}
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
                  "Developed Ruby, ActiveRecord, and Sinatra backend to store game and review information.",
                  "Constructed React frontend that includes the home, game list, game instance tab, and user tab.",
                  "Utilized React-Stars to create an in-depth and interactive review section.",
                ],
              }}
              darkTheme={darkTheme}
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
                  "Developed json-server database in order to let users choose between built-in word lists.",
                  "Incorporated Words API which users can interact with to develop a personalized word list.",
                  "Configured behind the scene logic of the game mechanics.",
                  "Constructed JavaScript frontend utilizing the Document Oriented Model.",
                ],
              }}
              darkTheme={darkTheme}
            />
          </div>
        </article>

        <article id="experience">
          <h3
            onClick={() => setShowExperience(!showExperience)}
            className={darkTheme ? "" : "light"}
          >
            Experience
            <span
              className={
                showExperience ? "svg-span arrow-in" : "svg-span arrow-out"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={
                  darkTheme
                    ? "bi bi-caret-right-fill"
                    : "bi bi-caret-right-fill light"
                }
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </span>
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
              darkTheme={darkTheme}
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
              darkTheme={darkTheme}
            />
          </div>
        </article>

        <article id="education">
          <h3
            onClick={() => setShowEducation(!showEducation)}
            className={darkTheme ? "" : "light"}
          >
            Education
            <span
              className={
                showEducation ? "svg-span arrow-in" : "svg-span arrow-out"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={
                  darkTheme
                    ? "bi bi-caret-right-fill"
                    : "bi bi-caret-right-fill light"
                }
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </span>
          </h3>

          <div className={showEducation ? "sections display" : "sections"}>
            <RenderSection
              data={{
                title: "Flatiron School",
                description:
                  "Software Engineering Certification - Full Stack, Ruby on Rails and JavaScript",
                date: "01/2022 - 06/2022",
              }}
              darkTheme={darkTheme}
            />
            <RenderSection
              data={{
                title: "Collin College",
                description: "(AAS) - Math Concentration",
                date: "09/2019 - 09/2021",
              }}
              darkTheme={darkTheme}
            />
          </div>
        </article>
      </main>

      <footer className={darkTheme ? "" : "light"}>
        <div className="foot-wrap">
          <nav className={darkTheme ? "foot-nav" : "foot-nav light"}>
            <h5 className={darkTheme ? "" : "light"}>PERSONAL</h5>
            <ul>
              <li>
                <a
                  href="http://www.linkedin.com/in/asher-j-scott"
                  className={darkTheme ? "" : "light"}
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/asherscott"
                  className={darkTheme ? "" : "light"}
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="mailto: asher.scott6@gmail.com"
                  className={darkTheme ? "" : "light"}
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="./Asher_Scott.pdf"
                  target="blank"
                  className={darkTheme ? "" : "light"}
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="https://dev.to/asherscott"
                  className={darkTheme ? "" : "light"}
                >
                  Dev.to
                </a>
              </li>
            </ul>
          </nav>

          <nav className={darkTheme ? "foot-nav" : "foot-nav light"}>
            <h5 className={darkTheme ? "" : "light"}>PORTFOLIO</h5>
            <ul>
              <li>
                <a href="index.html" className={darkTheme ? "" : "light"}>
                  Website
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/asherscott/Portfolio"
                  className={darkTheme ? "" : "light"}
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
