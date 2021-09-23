import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faChalkboardTeacher,
  faRss,
  faTasks
} from "@fortawesome/free-solid-svg-icons";

function Container() {
  return (
    <div className="container">
      <div className="dashboard">
        <div className="dashboard-infos">
          <img src="../../../imgs/img1.jpeg" alt="not found" />
          <h3>Aissa Dev</h3>
          <p>Web development</p>
        </div>

        <div className="dashboard-sections">
          <div>
            <FontAwesomeIcon icon={faChalkboardTeacher} className="icon" />
            <h3>Courses</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faTasks} className="icon" />
            <h3>Projects</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faRss} className="icon" />
            <h3>News</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faBook} className="icon" />
            <h3>library</h3>
          </div>
        </div>

        <div className="dashboard-links">
          <div>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faTwitter} size="2x" color="green" />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="enroled-courses">
        <h1>Enroled Courses</h1>
        <input type="text" />

        <div className="course">
          <img src="https://via.placeholder.com/50" alt="" />
          <h3>title</h3>
          <p>description</p>
          <h4>60%</h4>
        </div>
        <div className="course">
          <img src="https://via.placeholder.com/50" alt="" />
          <h3>title</h3>
          <p>description</p>
          <h4>60%</h4>
        </div>
        <div className="course">
          <img src="https://via.placeholder.com/50" alt="" />
          <h3>title</h3>
          <p>description</p>
          <h4>60%</h4>
        </div>
        <div className="course">
          <img src="https://via.placeholder.com/50" alt="" />
          <h3>title</h3>
          <p>description</p>
          <h4>60%</h4>
        </div>
      </div>
    </div>
  );
}

export default Container;
