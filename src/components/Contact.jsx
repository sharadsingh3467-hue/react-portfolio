import "../App.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2 className="heading">Contact Me</h2>

      <div className="contact-container">

        <form
          action="https://formsubmit.co/sharadsingh3467@gmail.com"
          method="POST"
        >

          <input
            type="text"
            placeholder="Your Name"
            pattern="[A-Za-z ]+"
            title="Only letters are allowed"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;