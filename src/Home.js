import React from "react";
import "./Home.css";
import { Card, Container, Row } from "react-bootstrap";
function Home(props) {
  return (
    <div className="content">
      <Container className="mt-5">
        <Row>
          <Card className="bg-dark text-white w-100 m-2">
            <Card.Body className="p-0 overflow-auto">
              <p className="home">
                A ascensão das mídias sociais, como blogs e redes sociais tem
                despertado interesse em análise de sentimento. Com a
                proliferação de opiniões, avaliações, recomendações e outras
                formas de expressão on-line, a opinião se transformou em uma
                espécie de moeda virtual para empresas que desejam comercializar
                os seus produtos, identificar novas oportunidades e gerenciar
                suas reputações. Como as empresas estão cada vez mais
                interessadas em automatizar o processo de pesquisa sobre o que
                está sendo falado sobre elas, a compreensão das conversas nas
                mídias sociais, a fim de identificar conteúdo relevante, que
                permita tomar ações específicas, tem levado as empresas a buscar
                soluções de análise de sentimentos. Nossa visão do mundo é
                muitas vezes influenciada pela visão e opinião de outras
                pessoas. E isso não acontece apenas com indivíduos, mas também
                com as empresas. E por isso, cada vez mais as empresas estão
                interessadas em saber a percepção de outras empresas e
                indivíduos sobre seus produtos e serviços. E esta é a função da
                análise de sentimentos, também conhecida como opinion mining: é
                a tarefa de identificar se a opinião que foi expressada em um
                determinado texto é positiva ou negativa. Adaptado de:
                <a href="http://www.cienciaedados.com/analise-de-sentimentos-e-machine-learning/" target="_blank"> http://www.cienciaedados.com/analise-de-sentimentos-e-machine-learning/</a>
              </p>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
