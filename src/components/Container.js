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
import Card from "./Card";

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
            <FontAwesomeIcon icon={faFacebook} size="2x" color="#0673E7" />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="2x" color="#C93E81" />
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} size="2x" color="#1D9BF0" />
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} size="2x" color="#" />
          </div>
        </div>
      </div>
      <div className="enroled-courses">
        <div>
          <h1>Enroled Courses</h1>
          <input type="text" placeholder="search" />
        </div>
        <div className="courses">
          <Card title="React Js" img="../../../imgs/react.svg" />
          <Card title="Node Js" img="../../../imgs/nodejs.svg" />
          <Card title="MongoDB" img="../../../imgs/mongodb.svg" />
          <Card title="TypeScript" img="../../../imgs/typescript.svg" />
        </div>
      </div>
    </div>
  );
}

export default Container;
