import "../App.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">My Skills</h2>

      <div className="skills-container">
        <div className="skill-box">
          <h3>HTML 5</h3>
          <p>I create well-structured and semantic web pages using HTML5.</p>
        </div>

        <div className="skill-box">
          <h3>CSS 3</h3>
          <p>I design responsive and attractive websites using CSS3.</p>
        </div>

        <div className="skill-box">
          <h3>JavaScript</h3>
          <p>I build interactive and dynamic web applications.</p>
        </div>

        <div className="skill-box python-box">
          <h3>Python</h3>
          <p>I use Python for programming and backend development.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;