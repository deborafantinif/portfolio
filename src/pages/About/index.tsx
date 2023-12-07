import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import Company from "../../assets/office.png"
import Location from "../../assets/location.png"
import * as S from "./styles"

function About() {
  return (
    <>
      <Menu/>
      <S.About>
        <h1>About Me</h1>
        <p>Descobri meu amor por Tecnologia ao me deparar com a imensidão de caminhos que poderia seguir e construir a partir dela.</p> 

        <p>Iniciei meus estudos no início de 2021 entrando no curso de Análise e Desenvolvimento de Sistemas na FIAP e tranquei 
          o curso no final do segundo semestre. Posteriormente ingressei no curso de Desenvolvimento Web na Trybe, onde conclui em 
          dezembro de 2022. Atualmente estou cursando Ciência da Computação.</p>

        <p>Hoje estou em busca de uma oportunidade para poder aplicar tudo que aprendi ao longo desses messes tendo 
          como objetivo estar numa empresa que tem como pilar respeito, cooperação, aprendizagem contínua e com foco 
          em gerar impacto positivo na sociedade.</p>

        <h2>Education</h2>
        <S.Education>
          <div>
            <h3>Ciência da Computação</h3>
            <img src={Company} alt="Company icon" />
            <span>Estácio</span>
            <img src={Location} alt="Location icon" />
            <span>EAD</span>
          </div>
          <div>
            <p>Fev 2023 - Presente (Cursando)</p>
          </div>
        </S.Education>

        <S.Education>
          <div>
            <h3>Desenvolvimento Web</h3>
            <img src={Company} alt="Company icon" />
            <span>Trybe</span>
            <img src={Location} alt="Location icon" />
            <span>EAD</span>
          </div>
          <div>
            <p>Jul 2021 - Jan 2023 (Concluída)</p>
          </div>
        </S.Education>

        <S.Education>
          <div>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <img src={Company} alt="Company icon" />
            <span>FIAP</span>
            <img src={Location} alt="Location icon" />
            <span>EAD</span>
          </div>
          <div>
            <p>Fev 2021 - Dez 2020 (Interrompida)</p>
          </div>
        </S.Education>
      </S.About>
      <Footer/>
    </>
  );
}

export default About;