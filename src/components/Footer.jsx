const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Nicole Arias. All rights reserved.</p>
      <div>
        <a
          href="https://github.com/nearias3"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
