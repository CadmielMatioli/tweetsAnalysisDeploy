import React from "react";
import "./Graficos.css";
import GraficoBarras from "./GraficoBarras";
import GraficoPizza from "./GraficoPizza";
import GraficoBarrasAno from "./GraficoBarrasAno";
import { Card, Container, Row } from "react-bootstrap";

function Graficos() {
  return (
    <div>
      <Container>
        <Row>
          <Card className="bg-dark text-white w-100 m-2">
            <Card.Header as="h5" className="text-center">
              Recarregue a pagina caso os gráficos nao carreguem corretamente
            </Card.Header>
            <Card.Body>
              <Card className="m-2">
                <Card.Body>
                  {" "}
                  <GraficoPizza />
                </Card.Body>
              </Card>
              <Card className="m-2">
                <Card.Body>
                  {" "}
                  <GraficoBarras />
                </Card.Body>
              </Card>
              <Card className="m-2">
                <Card.Body>
                  {" "}
                  <GraficoBarrasAno />
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
export default Graficos;
