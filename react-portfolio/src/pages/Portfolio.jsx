import Project from "../components/Project";

const Portfolio = () => {
  return (
    <section>
      <h2>My Portfolio</h2>
      <div className="projects">
        {/* I will render multiple <Project /> components here, this is just placeholders for now */}
        <Project title="Project 1" />
        <Project title="Project 2" />
        <Project title="Project 3" />
      </div>
    </section>
  );
};

export default Portfolio;
