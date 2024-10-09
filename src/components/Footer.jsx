const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Nicole Hernandez. All rights reserved.
      </p>
      <div className="footer-links">
        <a
          href="https://github.com/nearias3"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {" | "}
        <a
          href="https://linkedin.com/in/nicoleearias"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {" | "}
        <a
          href="https://stackoverflow.com/users/27721605/nicole"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stack Overflow
        </a>
      </div>
    </footer>
  );
};

export default Footer;
