import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Collapsible.css";

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible">
      <button className="collapsible-header" onClick={toggleOpen}>
        {title} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapsible;
