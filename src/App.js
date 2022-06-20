import "./App.css";
import RenderSection from "./RenderSection";

function App() {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Experience</a>
          </li>
          <li>
            <a>Education</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
        </ul>
      </nav>

      <main>
        <header>
          <div>
            <img />
            <p>social media links</p>
          </div>
          <section>
            <h2>Hey, I'm Asher</h2>
            <h1>Software Engineer</h1>
            <p>
              I am a full stack software engineer trained in JavaScript, React,
              Ruby, Ruby on Rails, HTML5 and CSS3. I have had a lifelong
              appreciation and fascination with computer programming.
              Experienced in Ruby on Rails and JavaScript based programming.
              Thrive in roles that involve time management and analytical
              thinking.
            </p>
          </section>
        </header>

        <aside>
          <h4>Skills</h4>
          <ul>
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
          <h3>Technical Projects</h3>
          <RenderSection
            data={{
              title: "Project 1",
              links: {
                github: "github",
                website: "website",
                demo: "demo",
              },
              description: "description",
              listItems: ["item 1", "item 2", "item 3", "item 4"],
            }}
          />
          <RenderSection
            data={{
              title: "Project 1",
              links: {
                github: "github",
                website: "website",
                demo: "demo",
              },
              description: "description",
              listItems: ["item 1", "item 2", "item 3", "item 4"],
            }}
          />
          <RenderSection
            data={{
              title: "Project 1",
              links: {
                github: "github",
                website: "website",
                demo: "demo",
              },
              description: "description",
              listItems: ["item 1", "item 2", "item 3", "item 4"],
            }}
          />
        </article>

        <article>
          <h3>Experience</h3>

          <RenderSection
            data={{
              title: "Experience 1",
              description: "description",
              date: "02/2021 - 02/2022",
              listItems: ["item 1", "item 2"],
            }}
          />
          <RenderSection
            data={{
              title: "Experience 2",
              description: "description",
              date: "02/2021 - 02/2022",
              listItems: ["item 1", "item 2"],
            }}
          />
        </article>

        <article>
          <h3>Education</h3>

          <RenderSection
            data={{
              title: "Education 1",
              description: "description",
              date: "02/2021 - 02/2022",
            }}
          />
          <RenderSection
            data={{
              title: "Education 2",
              description: "description",
              date: "02/2021 - 02/2022",
            }}
          />
        </article>
      </main>

      <footer>
        <ul>
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
