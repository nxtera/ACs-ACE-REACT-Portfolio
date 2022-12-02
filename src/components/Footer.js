import githubLogo from "../assets/icons/GitHub_Logo.png";
import linkedinLogo from "../assets/icons/linkedin_logo.png";
import stackoverflowLogo from "../assets/icons/stackoverflow_logo.png";

export default function Footer() {
  return (
    <div className="footerLogo">
      <div className="logoContainer">
      <img className="logo" alt ="Github Logo" src={githubLogo}
      onClick={(e) => {
      window.open('https://github.com/nxtera', "_blank");
      }}>
      </img>
       <img className="logo" alt="LinkedIn Logo" src={linkedinLogo}
       onClick={(e) => {
        window.open('https://www.linkedin.com/in/ashleigh-jay-5a851772/', "_blank");
       }}>
       </img>
      <img className="logo" alt="StackOverflow Logo" src={stackoverflowLogo}
      onClick={(e) => {
        window.open('https://stackoverflow.com/users/19403133/ashleigh', "_blank");
       }}>
      </img>
      </div>
    </div>
  );
}
