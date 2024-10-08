import PropTypes from "prop-types";
import '../styles/Project.css';

const Project = ({ title, description, image, liveLink, repoLink }) => {
  return (
    <div className="project">
      <img
        src={image}
        alt={`Screenshot of ${title}`}
        className="project-image"
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            View Live
          </a>
        )}
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        )}
    </div>
  </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
  repoLink: PropTypes.string,
};

export default Project;
