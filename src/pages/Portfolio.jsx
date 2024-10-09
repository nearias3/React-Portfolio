import { useState } from "react";
import Project from "../components/Project";
import Collapsible from "../components/Collapsible";
import images from "../assets/images";
import "../styles/Portfolio.css";

const frontEndProjects = [
  {
    title: "Code Refactor",
    description:
      "This app is a refactor of a website. I cleaned up the code, fixed a couple of issues for the client, and made it more accessible.",
    image: images.challenge01,
    liveLink: "https://nearias3.github.io/Challenge-01/",
    repoLink: "https://github.com/nearias3/Challenge-01",
  },
  {
    title: "Payroll Tracker",
    description:
      "This app is a tracker that helps employers keep track of payroll, with additional information stored in the console.",
    image: images.challenge03,
    liveLink: "https://nearias3.github.io/Employee-Payroll-Tracker/",
    repoLink: "https://github.com/nearias3/Employee-Payroll-Tracker",
  },

  {
    title: "Task Board",
    description:
      "This app allows the user to input information into a modal and create task cards that include due dates and descriptions.",
    image: images.challenge05,
    liveLink: "https://nearias3.github.io/Task-Board/",
    repoLink: "https://github.com/nearias3/Task-Board/",
  },

  {
    title: "Weather Dashboard",
    description:
      "This app allows users to search for the current weather in a city and view dynamically updated weather forecasts.",
    image: images.challenge06,
    liveLink: "https://nearias3.github.io/Weather-Dashboard/",
    repoLink: "https://github.com/nearias3/Weather-Dashboard/",
  },

  {
    title: "README Generator",
    description:
      "In this app, the user can automate the creation of README files using a node powered prompt in the terminal.",
    image: images.challenge09,
    repoLink: "https://github.com/nearias3/README-Generator",
  },

  {
    title: "Logo Maker",
    description:
      "This app allows the user to automate the creation of an SVG logo. In the terminal, the user is prompted to choose their color, shape, and text.",
    image: images.challenge10,
    repoLink: "https://github.com/nearias3/SVG-Logo-Maker",
  },

  {
    title: "Note Taker",
    description:
      "This app provides users with space to take notes. They can input their notes, save them on their browser, and delete them as needed.",
    image: images.challenge11,
    liveLink: "https://note-taker-kohj.onrender.com",
    repoLink: "https://github.com/nearias3/Miniature-Eureka",
  },

  {
    title: "SQL Employee Tracker",
    description:
      "This command-line application allows users to manage a company's employee database using node, inquirer, and postgreSQL.",
    image: images.challenge12,
    repoLink: "https://github.com/nearias3/SQL-Employee-Tracker",
  },
];

const backEndProjects = [
  {
    title: "E-Commerce Backend",
    description:
      "This app is the back-end for an e-commerce site, built using Express, Sequelize, and PostgreSQL.",
    image: images.challenge13,
    repoLink: "https://github.com/nearias3/ecommerce-backend",
  },

  {
    title: "Social Network API",
    description:
      "This app is the backend for a social networking site built with Node, Express, MongoDB and Mongoose.",
    image: images.challenge18,
    repoLink: "https://github.com/nearias3/Social-Network-API",
  },
];

const fullStackProjects = [
  {
    title: "Tech Blog",
    description:
      "This app is a full-stack site that allows users to create their own accounts, publish blogs, and comment on other users' posts.",
    image: images.challenge14,
    liveLink: "https://tech-blog-6wke.onrender.com/",
    repoLink: "https://github.com/nearias3/Tech-Blog/",
  },
];

const collaborativeProjects = [
  {
    title: "gigON!",
    description:
      "In this collaborative project, the user can login using their Spotify account, view their top artists, and  search for concerts by those artists using their location.",
    image: images.project1,
    liveLink: "https://cneale92.github.io/gigON/",
    repoLink: "https://github.com/cneale92/gigON/",
  },

  {
    title: "BookNest",
    description:
      "In this collaborative project, we bring you BookNest, an app that facilitate's peer-to-peer book lending! Users can create their own collection of books, share with others, and borrow from within their communities.",
    image: images.project2,
    liveLink: "https://p2-book-nest.onrender.com/",
    repoLink: "https://github.com/Lixiviate/P2-Book-Nest",
  },
];

const otherProjects = [
  {
    title: "Text Editor",
    description:
      "This app is a PWA text editor that runs on the browser, works both online and offline, and stores data using IndexedDB.",
    image: images.challenge19,
    liveLink: "https://text-editor-mzng.onrender.com",
    repoLink: "https://github.com/nearias3/Text-Editor",
  },

  {
    title: "Regex Tutorial",
    description:
      "This is a gist tutorial in which I breakdown the Regex generator.",
    image: images.challenge17,
    liveLink:
      "https://gist.github.com/nearias3/b460fd7e73e3f0c807bf5b5856d3006e",
  },
];

const Portfolio = () => {
  const [activeCollapsible, setActiveCollapsible] = useState(null);

  const handleCollapsibleToggle = (title) => {
    setActiveCollapsible((prev) => (prev === title ? null : title));
  };

  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <Collapsible 
      title="Front-End Projects"
      isOpen={activeCollapsible === "Front-End Projects"}
      onToggle={() => handleCollapsibleToggle("Front-End Projects")}
      >
        <div className="projects">
          {frontEndProjects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </Collapsible>

      <Collapsible 
      title="Back-End Projects"
      >
        <div className="projects">
          {backEndProjects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </Collapsible>

      <Collapsible title="Full-Stack Projects">
        <div className="projects">
          {fullStackProjects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </Collapsible>

      <Collapsible title="Collaborative Projects">
        <div className="projects">
          {collaborativeProjects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </Collapsible>

      <Collapsible title="Other Projects">
        <div className="projects">
          {otherProjects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </Collapsible>
    </section>
  );
};

export default Portfolio;
