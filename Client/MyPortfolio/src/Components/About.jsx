import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <img src="/path-to-your-image.jpg" alt="Your Name" className="about-image" />
        <div className="about-text">
          <p>Hello! I'm a passionate web developer with a love for creating beautiful and functional websites. With a background in [Your Background], I have honed my skills in HTML, CSS, JavaScript, and various frameworks such as React and Vue.js.</p>
          <p>Over the years, I have worked on numerous projects that have helped businesses and individuals establish their online presence. My expertise lies in front-end development, but I also have experience with back-end technologies and database management.</p>
          <p>In my spare time, I enjoy learning new technologies, contributing to open-source projects, and sharing my knowledge with the developer community through blogs and workshops. I am always eager to take on new challenges and collaborate with like-minded professionals.</p>
          <p>When I'm not coding, you can find me exploring the outdoors, playing video games, or experimenting with new recipes in the kitchen.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
