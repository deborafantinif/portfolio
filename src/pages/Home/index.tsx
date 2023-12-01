import Menu from "../../components/Menu"
import Perfil from "../../assets/perfil.jpeg"

function Home() {
  return (
    <>
      <Menu/>
      <main>
        <h1>
            Hi,👋
            My Name is
            Debora Fantini
            I build things for web
        </h1>

        <img src={Perfil} alt="foto de uma mulher" />
      </main>
      <footer>Designed by Pavan MG and Coded by Debora Fantini with love</footer>
    </>
  );
}

export default Home;