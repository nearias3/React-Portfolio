import PropTypes from "prop-types";
import "../styles/Collapsible.css";

const Collapsible = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="collapsible">
      <button className="collapsible-header" onClick={onToggle}>
        {title} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Collapsible;
