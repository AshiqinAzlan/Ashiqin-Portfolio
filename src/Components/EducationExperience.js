import React from "react";
import "./Styles.css";

const EducationExperience = () => {
  return (
    <div className="bg-light py-5 bg-color" id="eduexp">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="display-4 lead mb-4 font-color">
              Education & Experiences
            </h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Education Timeline Column */}
          <div className="col-md-6 mb-5">
            <ul className="timeline">
              <li>
                <div className="timeline-badge bg-info">
                  <i className="glyphicon glyphicon-education"></i>
                </div>
                <div className="timeline-panel panel-sm skills-card">
                  <div className="timeline-heading">
                    <h4 className="timeline-title timeline-medium">
                      Full Stack Development Bootcamp
                    </h4>
                    <p>
                      <small className="text-muted">
                        <i className="glyphicon glyphicon-time"></i> 2024
                      </small>
                    </p>
                  </div>
                  <div className="timeline-body">
                    <p className="timeline-text">
                      Completed the Full Stack Development Bootcamp by Peoplogy
                      Group, sponsored by Yayasan Pahang.
                    </p>
                  </div>
                </div>
              </li>

              <li className="timeline-inverted">
                <div className="timeline-badge bg-info">
                  <i className="glyphicon glyphicon-education"></i>
                </div>
                <div className="timeline-panel panel-sm skills-card">
                  <div className="timeline-heading">
                    <h4 className="timeline-title timeline-medium">
                      Bachelor of Computer Science (Software Engineering)
                    </h4>
                    <p>
                      <small className="text-muted">
                        <i className="glyphicon glyphicon-time"></i> 2021
                      </small>
                    </p>
                  </div>
                  <div className="timeline-body">
                    <p className="timeline-text">
                      Graduated with first-class honors from Universiti Tenaga
                      Nasional, majoring in Software Engineering.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="timeline-badge bg-info">
                  <i className="glyphicon glyphicon-education"></i>
                </div>
                <div className="timeline-panel panel-sm skills-card">
                  <div className="timeline-heading">
                    <h4 className="timeline-title timeline-medium">
                      Diploma in Electronic & Information Technology
                    </h4>
                    <p>
                      <small className="text-muted">
                        <i className="glyphicon glyphicon-time"></i> 2018
                      </small>
                    </p>
                  </div>
                  <div className="timeline-body">
                    <p className="timeline-text">
                      Completed a Diploma in Electronic & Information
                      Technology, gaining foundational knowledge in electronics
                      and IT systems.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Divider / Spacer */}
          <div className="col-md-1 d-none d-md-block">
            <div className="vertical-divider"></div>
          </div>

          {/* Experiences Timeline Column */}
          <div className="col-md-5 mb-5">
            <ul className="timeline">
              <li className="timeline-inverted">
                <div className="timeline-badge bg-warning">
                  <i className="glyphicon glyphicon-briefcase"></i>
                </div>
                <div className="timeline-panel panel-sm skills-card">
                  <div className="timeline-heading">
                    <h4 className="timeline-title timeline-medium">
                      Software Engineer
                    </h4>
                    <p>
                      <small className="text-muted">
                        <i className="glyphicon glyphicon-time"></i> Apr 2022 -
                        Apr 2024
                      </small>
                    </p>
                  </div>
                  <div className="timeline-body">
                    <p className="timeline-text">
                      As a Software Engineer, I provided technical support for
                      RPA and BPMS, developed responsive web designs, enhanced
                      C# applications, and implemented BPMS solutions, including
                      a SharePoint data migration ahead of schedule.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="timeline-badge bg-warning">
                  <i className="glyphicon glyphicon-briefcase"></i>
                </div>
                <div className="timeline-panel panel-sm skills-card">
                  <div className="timeline-heading">
                    <h4 className="timeline-title timeline-medium">
                      Web Designer Trainee
                    </h4>
                    <p>
                      <small className="text-muted">
                        <i className="glyphicon glyphicon-time"></i> Mar 2021 -
                        Jul 2021
                      </small>
                    </p>
                  </div>
                  <div className="timeline-body">
                    <p className="timeline-text">
                      Updated content and edited product photos using Adobe
                      Photoshop. Delivered minisites for new clients and updated
                      72 product photos daily, ensuring high-quality outputs and
                      meeting client expectations promptly.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
