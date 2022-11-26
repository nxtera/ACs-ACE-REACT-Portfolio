import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";
import "./styles.css";
import "./flickity.css";
import Gif1 from "../../../assets/shorts/Office_Team_Gen_Short.gif";
import Gif2 from "../../../assets/shorts/Showers_or_Sunshine_Short.gif";
import Gif3 from "../../../assets/shorts/Tech_Thoughts_Short.gif";
import Gif4 from "../../../assets/shorts/TechUnity_API_Short.gif";
import Gif5 from "../../../assets/shorts/Track_My_Employee_Short.gif";
import Gif6 from "../../../assets/shorts/Whats_Back_There_Short.gif";

// const test = () => {
//   console.log("hiiiiiiiiiiii2");
// };

const flickityOptions = {
  draggable: false,
  wrapAround: true,
  adaptiveHeight: false,
  setGallerySize: false,
  percentPosition: false,
  autoPlay: 10000 

};

function Carousel() {
  return (
    <Flickity
      options={flickityOptions}
      className={"carousel"} // default ''
    >
      <a href="https://drive.google.com/file/d/1WZ6ETA9Et_pInPNF6DqHrrDburPAh0dM/view">
      <img
        src={Gif1} />
      </a>
      <a href="https://drive.google.com/file/d/1WZ6ETA9Et_pInPNF6DqHrrDburPAh0dM/view">
      <img
        src={Gif2} />
      </a>
      <a href="https://drive.google.com/file/d/1WZ6ETA9Et_pInPNF6DqHrrDburPAh0dM/view">
      <img
        src={Gif3} />
      </a>
      <a href="https://drive.google.com/file/d/1WZ6ETA9Et_pInPNF6DqHrrDburPAh0dM/view">
      <img
        src={Gif4} />
      </a>
      <a href="https://drive.google.com/file/d/1WZ6ETA9Et_pInPNF6DqHrrDburPAh0dM/view">
      <img
        src={Gif5} />
      </a>
      <a href="https://drive.google.com/file/d/1WZ6ETA9Et_pInPNF6DqHrrDburPAh0dM/view">
      <img
        src={Gif6} />
      </a>
    </Flickity>
  );
}

export default Carousel;
