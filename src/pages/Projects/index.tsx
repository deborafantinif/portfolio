import Menu from "../../components/Menu";
import Cover from "../../assets/cover-project.jpeg";
import Link from "../../assets/link.png";
import Github from "../../assets/github.png";
import Footer from "../../components/Footer"
import * as S from "./styles"

function Projects() {
  return (
    <>
      <Menu/>
      <S.ProjectsContent>
        <h1>Projects</h1>
        <S.Projects>
        <S.Project>
            <img src={Cover} alt="cover project" />
            <div>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum!
              </p>
              <p><span>Tech Stack:</span> HTML/CSS, JavaScript</p>
              <S.Icons>
                <div>
                  <img src={Link} alt="link icon" />
                  <a href="https://react-portfolio-v1.netlify.app/projects">Demo</a>
                </div>
                <div>
                  <img src={Github} alt="github icon" />
                  <a href="https://react-portfolio-v1.netlify.app/projects">Code</a>
                </div>
              </S.Icons>
            </div>
        </S.Project>
        <S.Project>
            <img src={Cover} alt="cover project" />
            <div>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum!
              </p>
              <p><span>Tech Stack:</span> HTML/CSS, JavaScript</p>
              <S.Icons>
                <div>
                  <img src={Link} alt="link icon" />
                  <a href="https://react-portfolio-v1.netlify.app/projects">Demo</a>
                </div>
                <div>
                  <img src={Github} alt="github icon" />
                  <a href="https://react-portfolio-v1.netlify.app/projects">Code</a>
                </div>
              </S.Icons>
            </div>
        </S.Project>
        <S.Project>
            <img src={Cover} alt="cover project" />
            <div>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum!
              </p>
              <p><span>Tech Stack:</span> HTML/CSS, JavaScript</p>
              <S.Icons>
                <div>
                  <img src={Link} alt="link icon" />
                  <a href="https://react-portfolio-v1.netlify.app/projects">Demo</a>
                </div>
                <div>
                  <img src={Github} alt="github icon" />
                  <a href="https://react-portfolio-v1.netlify.app/projects">Code</a>
                </div>
              </S.Icons>
            </div>
        </S.Project>
        </S.Projects>
      </S.ProjectsContent>
      <Footer/>
    </>
  );
}

export default Projects;