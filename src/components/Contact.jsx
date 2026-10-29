import { useState } from "react";
import getImage from "./getImage";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  }

  return (
    <section className="page-section section-padding">
      <div className="container">
        <div className="page-heading" data-aos="fade-up">
          <span className="eyebrow">We would love to hear from you</span>
          <h1>Let's have a <span>little chat.</span></h1>
          <p>Send us a message using the form below.</p>
        </div>

        <div className="row g-5 align-items-stretch">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="contact-visual">
              <img src={getImage("contact")} alt="A welcoming dry-fruit selection" />
              <div className="contact-visual-text">
                <h2>Here for the good stuff.</h2>
                <p>Questions, suggestions or a simple hello? Send us a message.</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div><i className="bi bi-envelope"></i><span><strong>Email</strong><small>hello@nutandnook.example</small></span></div>
              <div><i className="bi bi-clock"></i><span><strong>Response time</strong><small>We aim to respond as soon as possible.</small></span></div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send us a message</h2>
              <p>Fill in your details below.</p>

              {submitted && (
                <div className="form-success">
                  Your form was submitted in this demo. No message was sent to a server.
                </div>
              )}

              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="contactName">Your name</label>
                  <input id="contactName" type="text" className="form-control" placeholder="Enter your name" required />
                </div>

                <div className="col-md-6">
                  <label htmlFor="contactEmail">Email address</label>
                  <input id="contactEmail" type="email" className="form-control" placeholder="you@example.com" required />
                </div>

                <div className="col-12">
                  <label htmlFor="contactSubject">Subject</label>
                  <input id="contactSubject" type="text" className="form-control" placeholder="What is your message about?" required />
                </div>

                <div className="col-12">
                  <label htmlFor="contactMessage">Your message</label>
                  <textarea id="contactMessage" className="form-control" rows="5" placeholder="Write your message here..." required></textarea>
                </div>

                <div className="col-12">
                  <button type="submit" className="primary-button">
                    Send message <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;