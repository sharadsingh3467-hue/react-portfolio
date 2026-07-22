import "../App.css";

function Education() {
  return (
    <section className="education" id="education">

      <h2 className="heading">My Education</h2>

      <div className="education-container">

        <div className="education-box">
          <h3>Master of Computer Applications (MCA)</h3>

          <h4>Dr. A.P.J. Abdul Kalam Technical University (AKTU)</h4>

          <p>2025 - 2027</p>

          <p>
            Currently pursuing MCA with focus on Web Development,
            Programming and Software Development.
          </p>
        </div>

        <div className="education-box">
          <h3>Bachelor's Degree (B.Sc.)</h3>

          <h4>Chhatrapati Shahu Ji Maharaj University, Kanpur</h4>

          <p>2022 - 2025</p>

          <p>
            Completed Bachelor's degree with strong interest in
            Mathematics
          </p>
        </div>

      </div>

    </section>
  );
}

export default Education;