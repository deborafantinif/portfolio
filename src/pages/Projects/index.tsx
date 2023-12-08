import Menu from "../../components/Menu";
import Cover from "../../assets/cover-project.jpeg";
import Link from "../../assets/link.png";
import Github from "../../assets/github.png";
import Todo from "../../assets/todo.png";
import Back from "../../assets/cover-back.png";
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
            <img src={Todo} alt="cover project" />
            <div>
              <h3>ToDo</h3>
              <p>Template de uma estrutura de todo-list com React
              </p>
              <p><span>Tech Stack:</span> React, Typescript</p>
              <S.Icons>
                <div>
                  <img src={Link} alt="link icon" />
                  <a href="https://todo-one-kohl.vercel.app/">Demo</a>
                </div>
                <div>
                  <img src={Github} alt="github icon" />
                  <a href="https://github.com/deborafantinif/todo">Code</a>
                </div>
              </S.Icons>
            </div>
        </S.Project>
        <S.Project>
            <img src={Back} alt="cover project" />
            <div>
              <h3>Blogs Api</h3>
              <p>API de controle de posts e usuários do blog
              </p>
              <p><span>Tech Stack:</span> MySQL, JavaScript, Sequelize</p>
              <S.Icons>
                <div>
                  <img src={Github} alt="github icon" />
                  <a href="https://github.com/deborafantinif/projeto-blogs-api">Code</a>
                </div>
              </S.Icons>
            </div>
        </S.Project>
        <S.Project>
            <img src={Back} alt="cover project" />
            <div>
              <h3>Trybers and Dragons</h3>
              <p>Estruturação de personagens e ações de RPG utilizando conceitos de SOLID e POO
              </p>
              <p><span>Tech Stack:</span> Typescript, POO, SOLID</p>
              <S.Icons>
                <div>
                  <img src={Github} alt="github icon" />
                  <a href="https://github.com/deborafantinif/projeto-trybers-and-dragons">Code</a>
                </div>
              </S.Icons>
            </div>
        </S.Project>
        <S.Project>
            <img src={Back} alt="cover project" />
            <div>
              <h3>Pixels Art</h3>
              <p>O Pixels Art é um projeto onde há um quadro de pixels para poder 
                ser colorido, semelhante ao Paint, mas na versão pixel.
              </p>
              <p><span>Tech Stack:</span> HTML, CSS, Javascript</p>
              <S.Icons>
                <div>
                  <img src={Link} alt="link icon" />
                  <a href="https://pixels-art-eight.vercel.app/">Demo</a>
                </div>
                <div>
                  <img src={Github} alt="github icon" />
                  <a href="https://github.com/deborafantinif/project-pixels-art">Code</a>
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