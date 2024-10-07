import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
