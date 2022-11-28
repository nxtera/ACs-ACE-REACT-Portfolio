import githubLogo from "../assets/icons/GitHub_Logo.png";
import linkedinLogo from "../assets/icons/linkedin_logo.png";
import stackoverflowLogo from "../assets/icons/stackoverflow_logo.png";

export default function Footer() {
  return (
    <div className="footerLogo">
      <div className="logoContainer">
      <img
      className="logo" 
      src={githubLogo}></img>
       <img
      className="logo" 
      src={linkedinLogo}></img>
      <img
      className="logo" 
      src={stackoverflowLogo}></img>
      </div>
    </div>
  );
}
