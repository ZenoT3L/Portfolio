import {
  Github,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
} from "lucide-react";
import "./App.css";

function App() {
  const projects = [
    {
      title: "Custom ToDo List",
      description:
        "A minimalist todo list app with dynamic URL-based list creation. Each path creates a unique list with custom headers.",
      image: "../images/todo-app.png",
      technologies: ["Node.js", "Express", "EJS", "MongoDB", "Mongoose"],
      liveUrl: "https://custom-list-app.onrender.com",
      githubUrl: "#",
    },
    {
      title: "CS Career Pathways",
      description:
        "Interactive platform providing curated computer science career paths with both free and paid learning resources for each specialization.",
      image: "../images/career-pathways.png",
      technologies: ["React", "Vite", "JavaScript"],
      liveUrl: "https://pathway-beryl.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Notes Keeper",
      description:
        "A Google Keep-inspired note-taking application with create and delete functionality, built with modern React practices.",
      image: "../images/notes-app.png",
      technologies: ["React", "Vite", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/ZenoT3L/Notes-App",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "EJS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "Mongoose"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render"],
    },
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-brand">
            <a href="#home" className="brand-link">
              <span className="brand-text">Rhema</span>
            </a>
          </div>
          <nav className="nav">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="accent">Rhema</span>
            </h1>
            <p className="hero-subtitle">
              Full-Stack Developer & Computer Science Student
            </p>
            <p className="hero-description">
              Building practical, user-focused applications with modern web
              technologies
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-description">
              I am a Computer Science student with a passion for full-stack web
              development. Though still early in my career, I have built
              projects that showcase both front-end and back-end skills. I am
              proficient in JavaScript and capable of working across the entire
              development stack to create practical, user-focused applications.
              I am continuously expanding my knowledge and improving my craft,
              driven by curiosity and a genuine desire to grow as a developer.
            </p>
          </div>

          {/* Skills */}
          <div className="skills-section">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="skill-card">
                  <div className="skill-header">
                    <div className="skill-icon">
                      {skillGroup.category === "Frontend" && (
                        <Globe size={20} />
                      )}
                      {skillGroup.category === "Backend" && (
                        <Database size={20} />
                      )}
                      {skillGroup.category === "Tools" && <Code size={20} />}
                    </div>
                    <h4 className="skill-category">{skillGroup.category}</h4>
                  </div>
                  <div className="skill-items">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-description">
              Here are some of my recent projects that demonstrate my
              development capabilities
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} screenshot`}
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-description">
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out!
            </p>
            <div className="contact-buttons">
              <a href="MAILTO:centients3@gmail.com" className="btn btn-primary">
                <Mail size={16} />
                Email Me
              </a>
              <a
                href="https://github.com/ZenoT3L"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© Rhema 2025.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
