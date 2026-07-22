import "../App.css";
import profile from "../assets/photo.jpeg";

import {
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi,</h1>

        <h2>
          I'm <span>Daksh Singh</span>
        </h2>

        <h3>
          I am Web Developer | I enjoy building responsive and user-friendly
            websites.
        
        </h3>

        <a href="#about" className="btn">
          About Me
        </a>

        <div className="social-icons">
          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaTelegram />
          </a>

          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="hero-image">
         <img src={profile} alt="profile"/>
      </div>
    </section>
  );
}

export default Hero;