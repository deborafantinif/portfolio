import { Link } from "react-router-dom";
import Code from "../../assets/code.png"
import Github from "../../assets/github.png"
import LinkedIn from "../../assets/linkedin.png"
import * as S from "./styles";

function Menu() {
  return (
    <S.Menu>
      <S.Logo>
        <img src={Code} alt="code" />
      </S.Logo>
      <S.Links>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/technologies">Technologies</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </S.Links>
      <S.Icons>
        <a href="https://github.com/deborafantinif" target="_blank"><img src={Github} alt="github icon" /></a>
        <a href="https://www.linkedin.com/in/deborafantini/" target="_blank"><img src={LinkedIn} alt="linkedIn icon" /></a>
      </S.Icons>
    </S.Menu>
  );
}

export default Menu;