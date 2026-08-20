import Image from "next/image";
import CursorFollower from "./cursor-follower";
import ThemeToggle from "./theme-toggle";

const skillGroups = [
  { label: "Frontend", items: "JavaScript, TypeScript, React.js, Redux, Jest" },
  {
    label: "Backend",
    items: "Node.js, Express, Strapi CMS, REST APIs, Java, Spring Boot, Django",
  },
  {
    label: "Data + semantic web",
    items: "SQL, SPARQL, GraphDB, Protégé, rdflib, pandas",
  },
  {
    label: "DevOps + delivery",
    items: "Docker, Git, AWS, APISIX, GitLab CI/CD",
  },
];

const projects = [
  {
    number: "01",
    title: "Information Retrieval Project",
    context: "University of Padua / CLEF 2023 LongEval",
    description:
      "Built a Lucene-based retrieval system with custom indexing, N-grams, BM25 ranking, regex matching, NER, topic modeling, and rank fusion. Evaluated results with MAP, nDCG, and P@10.",
    tags: "Lucene / BM25 / NER",
  },
  {
    number: "02",
    title: "LinkedIn Job Postings Knowledge Graph",
    context: "University of Padua / Semantic web",
    description:
      "Modeled relationships between jobs, companies, industries, skills, and salaries. Transformed source data into RDF, queried it with SPARQL, and visualized the resulting insights.",
    tags: "RDF / SPARQL / GraphDB",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-inner shell">
          <a className="wordmark" href="#top">
            AT<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-tools">
            <span className="availability">Open to conversations</span>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Software engineer / Italy</p>
          <h1>
            Systems that make
            <br />
            <em>complex data</em> useful.
          </h1>
          <p className="hero-intro">
            I build data-intensive web applications and real-time monitoring
            services for the industrial world, from device streams to the
            interface people trust.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <span>-&gt;</span>
            </a>
            <a className="text-link" href="mailto:a.tahvildari1997@gmail.com">
              Get in touch <span>-&gt;</span>
            </a>
          </div>
        </div>
        <div className="hero-aside">
          <Image
            className="profile-image"
            src="/ali-tahvildari.png"
            alt="Ali Tahvildari"
            width={1260}
            height={1260}
            priority
          />
        </div>
      </section>

      <section className="stats-band">
        <div className="shell stats-grid">
          <div>
            <strong>2k+</strong>
            <span>gateways supported</span>
          </div>
          <div>
            <strong>200+</strong>
            <span>users served by dashboards</span>
          </div>
          <div>
            <strong>3</strong>
            <span>languages for thinking + building</span>
          </div>
          <div>
            <strong>Padua</strong>
            <span>based in Italy</span>
          </div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">01 / Experience</p>
          <h2>
            Building at the edge
            <br />
            of <em>signal and scale.</em>
          </h2>
        </div>
        <div className="experience">
          <article className="experience-item current">
            <div className="experience-meta">
              <span>Jan 2025 - Present</span>
              <span>Padova, Italy</span>
            </div>
            <div>
              <h3>
                Software Engineer <small>@ Logbot</small>
              </h3>
              <p>
                Developing industrial cloud distributed systems and
                microservices for 2,000+ gateways and real-time data streams. I
                work across the product: monitoring dashboards in React and
                Redux, validation services in Node.js and Strapi, Python data
                tools, and delivery workflows with Docker, AWS, APISIX, and
                GitLab CI/CD.
              </p>
              <div className="tag-row">
                <span>React.js</span>
                <span>Redux</span>
                <span>Node.js</span>
                <span>Python</span>
                <span>AWS</span>
              </div>
            </div>
          </article>
          <article className="experience-item">
            <div className="experience-meta">
              <span>Earlier role</span>
              <span>Ontario, Canada</span>
            </div>
            <div>
              <h3>
                Fullstack Developer <small>@ Denxa</small>
              </h3>
              <p>
                Built customer-facing web applications, analytical views,
                reporting tools, and an admin panel. Developed Node.js, Express,
                and JavaScript services following MVC architecture, including
                dashboards for cryptocurrency assets and market trends.
              </p>
              <div className="tag-row">
                <span>React.js</span>
                <span>Express.js</span>
                <span>MVC</span>
                <span>Data analysis</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section skills-section">
        <div className="shell skills-layout">
          <div className="section-heading">
            <p className="eyebrow">02 / Toolkit</p>
            <h2>
              A practical
              <br />
              <em>stack.</em>
            </h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <span>{group.label}</span>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="projects">
        <div className="section-heading project-heading">
          <p className="eyebrow">03 / Selected projects</p>
          <h2>
            Curiosity, made
            <br />
            <em>queryable.</em>
          </h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div>
                <p className="project-context">{project.context}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-tags">{project.tags}</span>
              </div>
              <span className="project-arrow">-&gt;</span>
            </article>
          ))}
        </div>
      </section>

      <section className="education shell">
        <div>
          <p className="eyebrow">04 / Education</p>
          <h2>
            Researching the
            <br />
            <em>next abstraction.</em>
          </h2>
        </div>
        <div className="education-copy">
          <h3>Master of Computer Engineering</h3>
          <p>
            University of Padua, Padua, Italy <span>2022 - 2025</span>
          </p>
          <p className="thesis">
            <b>Thesis</b> LLMs for Understanding and Preserving Historical
            Musical Codes: Evaluation and Benchmarking. Built a curated Csound
            dataset and evaluation framework for LLM benchmarking.
          </p>
          <h3 className="bachelor">Bachelor of Computer Engineering</h3>
          <p>
            Azad University Central Tehran Branch <span>2016 - 2021</span>
          </p>
        </div>
      </section>

      <footer className="footer shell" id="contact">
        <div>
          <p className="eyebrow">Have a problem worth solving?</p>
          <h2>
            Let&apos;s make
            <br />
            <em>it legible.</em>
          </h2>
        </div>
        <div className="contact-links">
          <a href="mailto:a.tahvildari1997@gmail.com">
            a.tahvildari1997@gmail.com <span>-&gt;</span>
          </a>
          <a
            href="https://linkedin.com/in/alitahvildari"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span>-&gt;</span>
          </a>
          <p>English / Italian / German / Persian</p>
        </div>
        <div className="footer-bottom">
          <span>Ali Tahvildari</span>
          <span>© 2026 / Built for the web</span>
        </div>
      </footer>
      <CursorFollower />
    </main>
  );
}
