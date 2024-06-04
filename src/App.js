import React from 'react';
import './App.css';
import profilePic from './profile.JPG'; // Make sure to have this image in the src folder
import project1 from './project1.JPG'; 
import project2 from './project2.JPG'; 
import b1Background from './B1.png';
import b2Background from './B2.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Header-title">My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#goals">My Goals</a>
          <a href="#resume">My Resume</a>
          <a href="#projects">Projects</a>
          <a href="#social">Social Platforms</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="about" className="Section-container" style={{ position: 'relative' }}>
        <div className="Section-content About-container" style={{ position: 'relative' }}>
          <img src={profilePic} className="Profile-pic" alt="Profile" />
          <div className="About-text" style={{ position: 'relative' }}>
            <h2>Vishal Srivatsav K</h2>
            <p>
              Hello! I'm a web developer with a passion for creating beautiful and functional websites. 
              I'm a fresh student studying at KL University, and this is my portfolio project for my internship.
            </p>
            <p>
              I have a keen interest in data science and aim to leverage my skills to analyze and interpret complex data, 
              turning it into actionable insights. My goal is to contribute to impactful projects that make a difference.
            </p>
          </div>
          <div className="Background-layer" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${b1Background})`,
            backgroundSize: 'cover',
            opacity: 0.6, // Adjust the opacity as per your preference
            zIndex: -1, // Ensure the pseudo-element is behind the actual content
          }} />
        </div>
      </section>
      <section id="goals" className="Section-container" style={{ position: 'relative' }}>
        <div className="Section-content Goals-container" style={{ position: 'relative' }}>
          <div className="Background-layer" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${b2Background})`,
            backgroundSize: 'cover',
            opacity: 0.5, // Adjust the opacity as per your preference
            zIndex: -1, // Ensure the pseudo-element is behind the actual content
          }} />
        <h1 style={{ fontSize: '3em' }}>My Goals</h1>

          <p>
            My primary goal is to become a proficient full-stack developer and data scientist. I aim to:
          </p>
          <ul>
            <li>Interest in Data Science: You are keenly interested in pursuing a career in data science, leveraging your analytical skills to extract insights from complex datasets.

</li>
<li>Interest in UX Design: Alongside data science, you also aspire to explore a career in UX design, aiming to create intuitive and user-friendly digital experiences.</li>
           <li>Continuous Learning: You are eager to continuously learn and adapt to new tools, software, and methodologies in both data science and UX design fields.</li>
           <li>Skill Enhancement: You aim to enhance your skills in various areas, including data analysis, visualization, machine learning, prototyping, and user research, to excel in your chosen career paths.</li>
           <li>Versatility: You seek to become versatile in your skill set, capable of seamlessly transitioning between data-driven analysis and user-centric design to address diverse challenges in the tech industry.</li>
           <li>Impactful Contributions: Ultimately, your goal is to make meaningful contributions to projects and initiatives that positively impact users' lives while staying at the forefront of technological advancements.</li>

          </ul>
         
        </div>
      </section>
      <section id="resume" className="Section-container">
        <div className="Section-content Resume-container">
        <h1 style={{ fontSize: '3em' }}>My Resume</h1>
          <p>I specialize in web development, UX design, and data science. With a strong background in coding and front-end development, I craft responsive and user-friendly websites that provide seamless experiences. Additionally, my expertise in UX design ensures intuitive interfaces that enhance user engagement and satisfaction. Leveraging data science techniques, I analyze complex datasets to extract valuable insights and drive informed decision-making. Passionate about innovation and continuous learning, I strive to create impactful solutions at the intersection of technology and design.
            You can view or download my resume <a href="file:///C:/Users/VISHAL/OneDrive/Desktop/Resume%20.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
      </section>
      <section id="projects" className="Section-container">
        <div className="Section-content Projects">
        <h1 style={{ fontSize: '3em' }}>Projects</h1>
          <div className="Project-card">
            <img src={project1} className="Project-image" alt="Project 1" />
            <h3>Pet Adoption Platform</h3>
            <p>The Pet Adoption Platform is a Python-based web application designed to facilitate the adoption process for pets in need of homes. The platform serves as a central hub where animal shelters, rescue organizations, and individuals can post information about pets available for adoption. Users can browse through listings, view details about each pet, and express their interest in adopting.</p>
          </div>
          <div className="Project-card">
            <img src={project2} className="Project-image" alt="Project 2" />
            <h3>Eventify - Event Management System</h3>
            <p>Eventify is a modern web application built with React.js that simplifies event management for organizers and participants alike. Whether it's a conference, seminar, workshop, or social gathering, Eventify provides a comprehensive solution for planning, promoting, and managing events seamlessly.</p>
          </div>
        </div>
      </section>
      <section id="social" className="Section-container">
        <div className="Section-content Social-container">
        <h1 style={{ fontSize: '3em' }}>Social Platforms</h1>
          <p>"Connect with me on various social and coding platforms to explore my projects and coding journey. On LinkedIn, you'll find my professional profile and career highlights. Visit my GitHub repository to explore my coding projects and contributions. For coding challenges and competitions, find me on platforms like CodeChef and LeetCode, where I hone my problem-solving skills and engage with the coding community. Follow my coding journey and stay updated on my latest projects across these platforms.
            You can connect with me on the following platforms:</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/k-vishal-srivatsav-4bb395258/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/Vishaltsuki" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.codechef.com/users/vishal2277" target="_blank" rel="noopener noreferrer">CodeChef</a></li>
            <li><a href="https://leetcode.com/u/vishal2277/" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
          </ul>
        </div>
      </section>
      <section id="contact" className="Section-container">
        <div className="Section-content Contact-container">
        <h1 style={{ fontSize: '3em' }}>Contact</h1>
          <p>Feel free to reach out to me via email at <a href="2200032583cser@gmail.com">2200032583cser@gmail.com</a>.</p>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
