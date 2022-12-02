import React from "react";

export default function CV() {
  return (
    <div>
      <div className="cvContainer">
        <h1>Proficiencies</h1>
        <h2>Front-end</h2>
        <div className="">
          <ul className="skillsList ">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <h2>Back-end</h2>
        <ul className="skillsList">
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL/Sequelize</li>
          <li>MongoDB/Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <div className="btnContainer">
        <button
          id="downloadCV"
          className="btn btn-primary"
        >
          Download CV
        </button>
      </div>
    </div>
  );
}
