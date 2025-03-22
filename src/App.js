import React, { useState } from 'react';
import './App.css';
import 'boxicons/css/boxicons.min.css';

// Import images
import profileImage from './1.png'; // Home section image
import aboutImage from './about.jpg'; // About section image
import schoolImage from './image.png'; // Education school image
import uniImage from './clg.png'; // Education university image

function App() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleMenu = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <a href="#home" className="logo">
          Narinder Singh <span className="animate" style={{ '--i': 1 }}></span>
        </a>
        <div className="bx bx-menu" id="menu-icon" onClick={toggleMenu}>
          <span className="animate" style={{ '--i': 2 }}></span>
        </div>
        <nav className={`navbar ${isNavActive ? 'active' : ''}`}>
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#project">Project</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <span className="active-nav"></span>
          <span className="animate" style={{ '--i': 2 }}></span>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home show-animate" id="home">
        <div className="home-content">
          <h1>
            Hi, I'm <span>Narinder</span> <span className="animate" style={{ '--i': 2 }}></span>
          </h1>
          <div className="text-animate">
            <h3>Web Developer</h3>
            <span className="animate" style={{ '--i': 3 }}></span>
          </div>
          <p>
            As a passionate and innovative web developer, I specialize in transforming ideas into stunning, responsive websites using the latest technologies.
            <span className="animate" style={{ '--i': 4 }}></span>
          </p>
          <div className="btn-box">
            <a href="#contact" className="btn">Hire Me</a>
            <a href="#contact" className="btn">Contact Me</a>
            <span className="animate" style={{ '--i': 5 }}></span>
          </div>
        </div>
        <div className="home-sci">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
          <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
          <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
          <a href="mailto:your.email@gmail.com"><i className='bx bxl-gmail'></i></a>
          <span className="animate" style={{ '--i': 6 }}></span>
        </div>
        <div className="image-section">
          <img src={profileImage} alt="Narinder Singh" />
        </div>
        <div className="home-imgHover"></div>
        <span className="animate home-img" style={{ '--i': 7 }}></span>
      </section>

      {/* About Section */}
      <section className="home section" id="about">
        <h2 className="heading">About <span>Me</span></h2>
        <div className="home_section">
          <div className="icns icons" data-reveal="left"></div>
          <div className="image_container">
            <img src={aboutImage} alt="About Narinder" />
            <div className="new_btn">
              <a href="#project">My Portfolio <i className="ri-arrow-right-line"></i></a>
            </div>
          </div>
          <div className="home_content" data-reveal="right">
            <div className="drop">
              <div className="home_text">
                <h3>
                  Hi, I'm <span>I am a B.Tech CSE AI & ML student passionate about web development and AI. My focus is on building smart and user-friendly applications through continuous learning and innovation. I am dedicated to exploring the intersection of artificial intelligence and web technologies, aiming to create impactful solutions and enhance user experiences.</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="project" id="education">
        <h1 className="heading"><i className="fas fa-graduation-cap"></i> My <span>Education</span></h1>
        <p className="quote">"Education is not the learning of facts, but the training of the mind to think."</p>
        <div className="education-container">
          <div className="card">
            <img src={schoolImage} alt="School" />
            <div className="card-content">
              <p>2021 - 2022</p>
              <h3>Gsss. School (Boys) Ropar</h3>
              <p>10+2 Science</p>
              <p className="gpa">GPA: 85%</p>
            </div>
          </div>
          <div className="card">
            <img src={uniImage} alt="University" />
            <div className="card-content">
              <p>2022 - Present</p>
              <h3>LAMRIN TECH SKILLS UNIVERSITY PUNJAB</h3>
              <p>B.Tech CSE (AI & ML)</p>
              <p className="gpa">SGPA: ...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="skills-container">
          <h1>SKILLS</h1>
          <div className="skill-row">
            {[
              { name: 'HTML', percentage: 86 },
              { name: 'CSS', percentage: 86 },
              { name: 'JavaScript', percentage: 86 },
              { name: 'React', percentage: 86 },
              { name: 'SEO Marketing', percentage: 86 },
              { name: 'MongoDB', percentage: 86 },
              { name: 'Node.js', percentage: 86 },
              { name: 'Python', percentage: 86 },
            ].map((skill, index) => (
              <div className="skill" key={index}>
                <div className="circular-progress">
                  <svg viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" stroke="#333"></circle>
                    <circle cx="18" cy="18" r="16" stroke="teal" strokeDasharray="100" strokeDashoffset={100 - skill.percentage}></circle>
                  </svg>
                  <span className="percentage-text">{skill.percentage}%</span>
                </div>
                <span className="skill-name">{skill.name}</span>
                <div className="progress-bar" style={{ '--progress-width': `${skill.percentage}%` }}></div>
                <span className="percentage">{skill.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;