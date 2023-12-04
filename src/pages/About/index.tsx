import Menu from "../../components/Menu"

function About() {
  return (
    <>
      <Menu/>
      <main>
        <h1>About Me</h1>
        <p>Descobri meu amor por Tecnologia ao me deparar com a imensidão de caminhos que poderia seguir e construir a partir dela.</p> 

        <p>Iniciei meus estudos no início de 2021 entrando no curso de Análise e Desenvolvimento de Sistemas na FIAP e tranquei 
          o curso no final do segundo semestre. Posteriormente ingressei no curso de Desenvolvimento Web na Trybe, onde conclui em 
          dezembro de 2022. Atualmente estou cursando Ciência da Computação.</p>

        <p>Hoje estou em busca de uma oportunidade para poder aplicar tudo que aprendi ao longo desses messes tendo 
          como objetivo estar numa empresa que tem como pilar respeito, cooperação, aprendizagem contínua e com foco 
          em gerar impacto positivo na sociedade.</p>

        <h2>Education</h2>
        <div>
          <div>
            <h3>Ciência da Computação</h3>
            <p>Estácio</p>
          </div>
          <div>
            <p>EAD</p>
            <p>Fev 2023 - Presente (Cursando)</p>
          </div>
        </div>

        <div>
          <div>
            <h3>Desenvolvimento Web</h3>
            <p>Trybe</p>
          </div>
          <div>
            <p>EAD</p>
            <p>Jul 2021 - Jan 2023 (Concluída)</p>
          </div>
        </div>

        <div>
          <div>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p>FIAP</p>
          </div>
          <div>
            <p>EAD</p>
            <p>Fev 2021 - Dez 2020 (Interrompida)</p>
          </div>
        </div>
      </main>
      <footer>Designed by Pavan MG and Coded by Debora Fantini with love</footer>
    </>
  );
}

export default About;