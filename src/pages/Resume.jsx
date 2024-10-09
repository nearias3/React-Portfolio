import "../styles/Resume.css";

const Resume = () => {
  return (
    <section className="resume">
      <h2>My Resume</h2>
      <p>Download my resume below:</p>
      <a href="/nicoleresume.pdf" download>
        Download Resume
      </a>

      <div className="proficiencies">
        <h3>Front-End Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS (Sass, Bootstrap, Tailwind)</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Responsive Design</li>
          <li>Progressive Web Applications (PWAs)</li>
        </ul>

        <h3>Back-End Proficiencies</h3>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>SQL (MySQL, PostgreSQL)</li>
          <li>MongoDB & Mongoose</li>
          <li>GraphQL</li>
          <li>RESTful API Design</li>
        </ul>

        <h3>Tools & Miscellaneous</h3>
        <ul>
          <li>Git & GitHub</li>
          <li>Webpack, Babel, Vite</li>
          <li>Testing (Jest)</li>
          <li>Command Line Interface (CLI)</li>
          <li>Agile Methodology</li>
          <li>Deployment (Heroku, Netlify, Render)</li>
          <li>Graphic Design (Photoshop)</li>
        </ul>
      </div>

    </section>
  );
};

export default Resume;
