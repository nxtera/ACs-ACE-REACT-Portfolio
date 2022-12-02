import React from "react";
import profilePic from "../../assets/images/profile-avatar.png";

export default function About() {
  return (
    <div className="profileContainer">
      <div className="profilePicContainer">
        <img src={profilePic} alt="profile avatar" id="profilePic"></img>
      </div>
      <div className="profileTextContainer">
        <h1>About Me</h1>
        <p>
          Hello there...
          <br />
          <br />
          I'm Asheigh, Full-Stack Web Developer and welcome to my portfolio.
          <br />
          <br />
          Having always possessed a deep passion for the wonderful word of
          "Tech", in May 2022 I decided to take it to the next level and make
          the transition to actually work in the industry by enrolling in the
          University of Birmingham's Coding Boot Camp.
          <br />
          <br />
          24 intense weeks later with many grueling hours spent learning new
          technologies through a dynamic full stack curriculum, I am now ready
          to kick start my new career as a Web Developer.
        </p>
      </div>
    </div>
  );
}
