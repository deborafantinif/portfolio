import { Link } from "react-router-dom";
import Code from "../../assets/code.png"
import Github from "../../assets/github.png"
import LinkedIn from "../../assets/linkedin.png"

function Menu() {
  return (
    <div>
      <div>
        <img src={Code} alt="code" />
      </div>
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <a href="https://github.com/deborafantinif" target="_blank"><img src={Github} alt="github icon" /></a>
        <a href="https://www.linkedin.com/in/deborafantini/" target="_blank"><img src={LinkedIn} alt="linkedIn icon" /></a>
        
      </div>
    </div>
  );
}

export default Menu;