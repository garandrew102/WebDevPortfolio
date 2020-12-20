import React from "react";
import contactbg from "../../../videos/contactbg.mp4";
import "../../pages/Contact/Contact.css";

function Contact() {
  return (
    <div className="contact-body">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={contactbg} type="video/mp4" />
      </video>
      <div className="contact-grid">
        <h2>Andrew Garcia</h2>
        <hr />
        <div className="contact-list">
          <div style={{ fontSize: "25px" }} className="phone">
            <i className="fa fa-phone-square" aria-hidden="true" />
            (305) 542-8722
          </div>
          <div className="email">
            <div style={{ fontSize: "25px" }}>
              <i className="fa fa-envelope" aria-hidden="true" />
              garandrew102@gmail.com
            </div>
          </div>
        </div>
        <div className="contact-grid-bottom">
          <div>
            <div className="contact-quote">
              <p>
                "Keep your thoughts positive because your thoughts become your
                words. Keep your words positive because your words become your
                behavior. Keep your behavior positive because your behavior
                becomes your habits. Keep your habits positive because your
                habits become your values."
              </p>
              <div>
                <p>
                  <i> – Mahatma Gandhi</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
