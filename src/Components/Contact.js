import React from "react";
import "./Styles.css";

const Contact = () => {
  return (
    <div className="container mt-5 mb-5" id="contact">
      <div className="row justify-content-center text-center">
        <div className="col">
          <h2 className="display-4 lead mb-4 font-color">Contact Me</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 mt-4 mb-4">
          <div className="card skills-card">
            <div className="card-body ">
              <h5 className="card-title">Linkedin</h5>
              <a
                href="http://www.linkedin.com/in/ashiqin-azlan"
                className="card-link"
              >
                <i className="fab fa-linkedin"></i> linkedin.com/ashiqin-azlan
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-4 mb-4">
          <div className="card skills-card">
            <div className="card-body">
              <h5 className="card-title">Email</h5>
              <a href="mailto:ashiqinazlan97@gmail.com" className="card-link">
                <i className="fas fa-envelope"></i> ashiqinazlan97@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-4 mb-4">
          <div className="card skills-card">
            <div className="card-body">
              <h5 className="card-title">Contact No</h5>
              <a href="tel:+60123090770" className="card-link">
                <i className="fas fa-phone"></i> +60123090770
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
