import Menu from "../../components/Menu";
import Cover from "../../assets/cover-project.jpeg";
import Link from "../../assets/link.png";
import Github from "../../assets/github.png";

function Projects() {
  return (
    <>
      <Menu/>
      <main>
        <h1>Projects</h1>
        <div>
          <div>
            <img src={Cover} alt="cover project" />
            <div>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum!
              </p>
              <p><span>Tech Stack:</span> HTML/CSS, JavaScript</p>
              <div>
                <div>
                  <img src={Link} alt="link icon" />
                  <a href="https://react-portfolio-v1.netlify.app/projects">Demo</a>
                </div>
                <div>
                  <img src={Github} alt="github icon" />
                  <a href="https://react-portfolio-v1.netlify.app/projects">Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>Designed by Pavan MG and Coded by Debora Fantini with love</footer>
    </>
  );
}

export default Projects;