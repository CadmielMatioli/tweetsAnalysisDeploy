import React, { useState, useEffect } from "react";
import "./Paginador.css";
import dados from "./data/tweets.json";
import Paginator from "react-hooks-paginator";
import { Card, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Paginador() {
  const pageLimit = 10;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setData(dados);
  }, []);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);

  function formatDate(date) {
    var date = new Date(date);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var formatted = day + "-" + month + "-" + year;
    return formatted;
  }
  return (
    <div>
      <Container>
        <Row>
          <Card className="bg-dark text-white w-100 m-2">
            <Card.Header as="h5" className="text-center">
              Listagem de Tweetts
            </Card.Header>
            <Card.Body className="p-0 overflow-auto max-height">
              <Table striped bordered hover variant="dark">
                <thead className="head">
                  <tr>
                    <th>Usuário</th>
                    <th>Tweet</th>
                    <th>Sentimento</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((data, index) => (
                    <tr>
                      <td key={index}>@{data.usuario}</td>
                      <td>{data.texto}</td>
                      <td>{data.sentimento == 4 ? "😃" : "🙁"}</td>
                      <td>{formatDate(data.data)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
            <Paginator
              totalRecords={data.length}
              pageLimit={pageLimit}
              pageNeighbours={1}
              setOffset={setOffset}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Paginador;
