import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profilePic from './assets/myprofile.jpg'; 
import './App.css';

function App() {
  // 1. State to manage the form (sending, success, or error)
  const [formStatus, setFormStatus] = useState(null);

  // 2. Logic to send email WITHOUT leaving the page
  const handleSubmit = async (e) => {
    e.preventDefault(); // <--- This stops the redirect!
    setFormStatus("sending");

    const formData = new FormData(e.target);

    try {
      // !!! REPLACE THE URL BELOW WITH YOUR FORMSPREE ID !!!
      const response = await fetch("https://formspree.io/f/movgodke", { 
        method: "POST",
        body: formData,
        headers: { 
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus("success"); // Switches to the "Thank You" view
        e.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div className="app-container">
      
      {/* Navigation */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header id="about" className="hero-section">
        <div className="hero-content">
          
          {/* Profile Image */}
          <img src={profilePic} alt="Profile" className="profile-img" />
          
          <p className="subtitle" style={{color: '#00d4ff', marginBottom: '10px'}}>Hello, I am</p>
          <h1 className="title-name">Vemula Manideep</h1>
          <h2 className="title-role">
            CBIT Student & <span className="highlight">Software Developer</span>
          </h2>
          <p className="description" style={{maxWidth: '600px', margin: '20px auto', color: '#b0b0b0'}}>
            Second-year student at <strong>Chaitanya Bharathi Institute of Technology</strong>. 
            Passionate about building software with Java, C++, and Python.
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn primary-btn">Hire Me</a>
            {/* Make sure you put a resume.pdf in your 'public' folder */}
            <a href="/resume.pdf" download="Manideep_Resume.pdf" className="btn secondary-btn">Download CV</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/Vemula-Manideep" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="http://www.linkedin.com/in/vemula-manideep-bab697393" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '40px'}}>Technical Arsenal</h2>
        <div className="skills-grid">
          <div className="skill-card">🐍 Python</div>
          <div className="skill-card">☕ Java</div>
          <div className="skill-card">⚙️ C++</div>
          <div className="skill-card">⚛️ React.js</div>
          <div className="skill-card">🌐 HTML5</div>
          <div className="skill-card">🎨 CSS3</div>
          <div className="skill-card">⚡ JavaScript</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '40px'}}>Current Work</h2>
        <div className="projects-grid">
          
          {/* Project 1: THIS Portfolio */}
          <div className="project-card">
            <h3>My Personal Portfolio</h3>
            <p style={{color: '#aaa', margin: '10px 0'}}>
              A fully responsive personal portfolio website designed to showcase my skills. 
              Built from scratch using React.js and modern CSS Glassmorphism effects.
            </p>
            <div style={{color: '#00d4ff', fontSize: '0.9rem', marginBottom: '15px'}}>
              React • CSS3 • Vercel
            </div>
            <a href="https://github.com/Vemula-Manideep/my-portfolio" target="_blank" rel="noopener noreferrer" style={{color: '#00d4ff', textDecoration: 'none', fontWeight: 'bold'}}>
              View Source Code &rarr;
            </a>
          </div>

          {/* Placeholder for future project */}
          <div className="project-card" style={{border: '1px dashed #444', background: 'transparent'}}>
            <h3 style={{color: '#666'}}>Upcoming Project</h3>
            <p style={{color: '#666', margin: '10px 0'}}>
              Currently learning Data Structures & Algorithms to build an efficient backend system.
            </p>
            <div style={{color: '#666', fontSize: '0.9rem'}}>
              Java • MySQL
            </div>
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section">
         <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '40px'}}>Certifications</h2>
         <div className="skills-grid">
            <div className="skill-card" style={{borderColor: '#8a2be2'}}>Python for Beginners (Coursera)</div>
            <div className="skill-card" style={{borderColor: '#8a2be2'}}>Java Programming (NPTEL)</div>
            <div className="skill-card" style={{borderColor: '#8a2be2'}}>Web Development Bootcamp</div>
         </div>
      </section>

      {/* Contact Section - WITH NO REDIRECT LOGIC */}
      <section id="contact" className="section" style={{marginTop: '80px', width: '100%'}}>
        <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '40px'}}>Let's Connect</h2>
        
        {/* Conditional Rendering: If Success, show Message. If not, show Form. */}
        {formStatus === "success" ? (
          
          /* --- SUCCESS MESSAGE (Uses same style as form) --- */
          <div className="contact-form" style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
            <h3 style={{color: '#00d4ff', fontSize: '2rem'}}>Message Sent! 🚀</h3>
            <p style={{color: '#ccc', margin: '20px 0'}}>
              Thanks for reaching out, Manideep. I'll get back to you soon!
            </p>
            <button 
              className="btn primary-btn" 
              onClick={() => setFormStatus(null)}
              style={{marginTop: '10px'}}
            >
              Send Another Message
            </button>
          </div>

        ) : (

          /* --- THE FORM --- */
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Write your message here..." rows="5" required></textarea>
            
            <button type="submit" disabled={formStatus === "sending"}>
              {formStatus === "sending" ? "Sending..." : "Send Message"}
            </button>
            
            {formStatus === "error" && (
              <p style={{color: 'red', textAlign: 'center'}}>Oops! Something went wrong. Please try again.</p>
            )}
          </form>

        )}
      </section>

      <footer style={{marginTop: '50px', padding: '20px', color: '#666'}}>
        <p>Designed & Built by Vemula Manideep © 2025</p>
      </footer>
    </div>
  );
}

export default App;