import Home from '../images/home.svg'
import About from '../images/user.svg'
import Projects from '../images/browser.svg'
import GitHub from '../images/github.png'
import LinkedIn from '../images/linkedin.png'

function NavBar() {
  return (
    <div className='nav-bar'>
      <div>
        <img src={Home} alt="home" title="Home" />
        <img src={About} alt="about" title="Sobre" />
        <img src={Projects} alt="projects" title="Projetos" />
      </div>
      <div>
      <img src={GitHub} alt="projects" title="GitHub" />
      <img src={LinkedIn} alt="projects" title="LinkedIn" />
      </div>
    </div>
  );
};

export default NavBar;