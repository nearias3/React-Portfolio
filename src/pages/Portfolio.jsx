import Project from "../components/Project";
import "../styles/Portfolio.css";

const projects = [
  {
    title: "Code Refactor",
    description: "This app is a refactor of a website. I cleaned up the code, fixed a couple of issues for the client, and made it more accessible.",
    image: "assets/images/challenge01.png",
    liveLink: "https://nearias3.github.io/Challenge-01/",
    repoLink: "https://github.com/nearias3/Challenge-01"
  },
  {
    title: "Payroll Tracker",
    description: "This app is a tracker that helps employers keep track of payroll, with additional information stored in the console.",
    image: "assets/images/challenge03.png",
    liveLink: "https://nearias3.github.io/Employee-Payroll-Tracker/",
    repoLink: "https://github.com/nearias3/Employee-Payroll-Tracker"
  },

  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }

  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }

  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }

  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }

  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }

  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }

  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }


  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }


  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }

  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }

  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }


  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }


  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }


  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }

  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }

  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }

  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }

  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }

  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }

  {
    title: "",
    description: "",
    image: "",
    liveLink: "",
    repoLink: ""
  }

];


const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
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
    </section>
  );
};

export default Portfolio;
