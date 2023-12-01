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
          <li>Home</li>
          <li>About</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <img src={Github} alt="code" />
        <img src={LinkedIn} alt="code" />
      </div>
    </div>
  );
}

export default Menu;