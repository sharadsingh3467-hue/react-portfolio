import "../App.css";
import profile from "../assets/photo.jpeg";
import CV from "../assets/DakshSingh_CV.pdf";


function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img src={profile} alt="Profile" />
        </div>

        <div className="about-content">
          <h3>I'm Daksh Singh</h3>

          <p>
            I am a passionate Web Developer and MCA student.
            I enjoy creating responsive, modern and user-friendly
            websites using HTML and CSS. I am continuously learning
            new technologies to improve my skills.
          </p>

          <a href={CV} download className="btn">
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;