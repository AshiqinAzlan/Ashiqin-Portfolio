import React from "react";
import "./Styles.css";

function Skills() {
  return (
    <div>
      <div className="container" id="skills">
        <div className="row mt-5">
          <div className="col-md-12 text-center mb-4">
            <h2 className="display-4 lead font-color">Professional Skills</h2>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-md-3">
            <div className="card skills-card mb-4">
              <img
                className="card-img-top skill-img"
                src="mongoDB.png"
                alt="MongoDB"
              />
              <div className="card-body">
                <p className="card-text pb-4">
                  A flexible NoSQL database storing data in JSON-like documents,
                  ideal for modern web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card skills-card mb-4">
              <img
                className="card-img-top skill-img"
                src="react.png"
                alt="React"
              />
              <div className="card-body">
                <p className="card-text">
                  A JavaScript library for building user interfaces, focusing on
                  component-based architecture and efficient rendering.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card skills-card mb-4">
              <img
                className="card-img-top skill-img"
                src="nodeExpress.png"
                alt="Node.js and Express"
              />
              <div className="card-body">
                <p className="card-text">
                  Node.js with Express provides a powerful, lightweight
                  framework for building efficient, scalable server-side
                  applications with JavaScript.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card skills-card mb-5">
              <img
                className="card-img-top skill-img"
                src="javascript.jpg"
                alt="JavaScript"
              />
              <div className="card-body">
                <p className="card-text pb-4">
                  Versatile language for interactive web content, crucial for
                  front-end and Node.js server-side scripting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
