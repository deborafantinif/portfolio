import Capa from '../images/capa.svg'

function Home() {
  return (
    <div className="home">
      <div>
        <h1>Olá,</h1>
        <p>Meu nome é Debora Fantini, sou Desenvolvedora Full Stack e este é meu portfólio sobre algumas informações sobre mim e alguns projetos que já desenolvi!!</p>
      </div>
      <div>
        <img src={Capa} alt="capa" />
      </div>
    </div>
  );
};

export default Home;