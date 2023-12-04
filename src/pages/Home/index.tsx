import Menu from "../../components/Menu"
import Perfil from "../../assets/perfil.jpeg"
import Footer from "../../components/Footer"
import * as S from "./styles"

function Home() {
  return (
    <>
      <Menu/>
      <S.Home>
        <h1>
            Hi,👋 <br/>
            My Name is <br/>
            <span>Debora Fantini</span> <br/>
            I build things for web <br/>
        </h1>

        <img src={Perfil} alt="foto de uma mulher" />
      </S.Home>
      <Footer/>
    </>
  );
}

export default Home;