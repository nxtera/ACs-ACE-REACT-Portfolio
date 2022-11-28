import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";
import Gif1 from "../../../assets/shorts/Office_Team_Gen_Short.gif";
import Gif2 from "../../../assets/shorts/Showers_or_Sunshine_Short.gif";
import Gif3 from "../../../assets/shorts/Tech_Thoughts_Short.gif";
import Gif4 from "../../../assets/shorts/TechUnity_API_Short.gif";
import Gif5 from "../../../assets/shorts/Track_My_Employee_Short.gif";
import Gif6 from "../../../assets/shorts/Whats_Back_There_Short.gif";
import githubIcon from "../../../assets/icons/github_icon.png"
import "./styles.css";
import "./flickity.css";


const flickityOptions = {
  draggable: false,
  wrapAround: true,
  adaptiveHeight: false,
  setGallerySize: false,
  percentPosition: false,
  autoPlay: 8500 

};

function Carousel() {
  return (
    <Flickity
      options={flickityOptions}
      className={"carousel"} 
    > <div className={"carousel-cell"}>
      <a href="https://drive.google.com/file/d/1WZ6ETA9Et_pInPNF6DqHrrDburPAh0dM/view">
      <img 
        src={Gif1} 
        className={"gif"}
        />
      </a>
      <div className={"github-icon"}>
        <a href="https://github.com/nxtera/Office-Team-Gen">
      <img
      className={"github-img"} 
      src ={githubIcon} />
      </a>
      </div>
      </div>
      <div className={"carousel-cell"}>
      <a href="https://nxtera.github.io/Showers-or-Sunshine">
      <img
        src={Gif2} 
        className={"gif"}
        />
      </a>
      <div className={"github-icon"}>
        <a href="https://github.com/nxtera/Showers-or-Sunshine">
      <img
      className={"github-img"} 
      src ={githubIcon} />
      </a>
      </div>
      </div>
      <div className={"carousel-cell"}>
      <a href="https://tech-thoughts.herokuapp.com/">
      <img
      className={"gif"}
        src={Gif3} 
        />
      </a>
      <div className={"github-icon"}>
        <a href="https://github.com/nxtera/tech-thoughts">
      <img
      className={"github-img"} 
      src ={githubIcon} />
      </a>
      </div>
      </div>
      <div className={"carousel-cell"}>
      <a href="https://drive.google.com/file/d/1VxFJ76ItGpQGwOFjNdQy3eoVYVFQZTrK/view?usp=share_link">
      <img
        className={"gif"}
        src={Gif4} />
      </a>
      <div className={"github-icon"}>
        <a href="https://github.com/nxtera/TechUnity-API">
      <img
      className={"github-img"} 
      src ={githubIcon} />
      </a>
      </div>
      </div>
      <div className={"carousel-cell"}>
      <a href="https://drive.google.com/file/d/1H1NeQuEWvuhx6stKz-s5wq0LJ2wwPa24/view?usp=sharing">
      <img
      className={"gif"}
        src={Gif5} />
      </a>
      <div className={"github-icon"}>
        <a href="https://github.com/nxtera/track-my-employee">
      <img
      className={"github-img"} 
      src ={githubIcon} />
      </a>
      </div>
      </div>
      <div className={"carousel-cell"}>
      <a href="https://drive.google.com/file/d/1AliqB2DSS_CrPyyd_7dveditmqg7q87Z/view?usp=share_link">
      <img
      className={"gif"}
        src={Gif6} />
      </a>
      <div className={"github-icon"}>
        <a href="https://github.com/nxtera/Whats-Back-There">
      <img
      className={"github-img"} 
      src ={githubIcon} />
      </a>
      </div>
      </div>
    </Flickity>
  );
}

export default Carousel;
