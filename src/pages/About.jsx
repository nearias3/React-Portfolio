import '../styles/About.css';
import profileImage from '../assets/images/nicole.jpg';

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img src={profileImage} alt="Nicole Arias Icon" className="about-photo" />
      <p>
        I am a passionate software developer dedicated to creating intuitive
        and impactful digital experiences. My background includes a B.S. in
        Radio Television Film from the University of Texas and a Masters in
        Education from Relay Graduate School of Education. My initial career as
        a teacher honed my problem-solving skills and cultivated a deep
        appreciation for clear communication and structured thinking.
      </p>
      <br></br>
      <p>
        Inspired by a longstanding love for technology, I transitioned into
        software development by completing the rigorous UT Coding Bootcamp. This
        journey has allowed me to build a solid foundation in web development
        technologies. This portfolio showcases my journey, featuring projects
        that reflect my commitment to creating user-friendly and efficient
        applications. 
      </p>
    </section>
  );
};

export default About;
