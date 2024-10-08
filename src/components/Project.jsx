import PropTypes from "prop-types";

const Project = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
      {/* Here I'll add all the specific project details */}
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Project;
