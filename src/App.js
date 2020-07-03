import React from "react";
import Home from "./Home";
import Lista from "./lista";
import Graficos from "./Graficos";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="app">
      <header>
        <Container bsPrefix className="w-100">
          <Router>
            <main>
              <nav className="menu">
                <ul>
                  <li>
                    <Link to="/" className="menu-links">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/lista" className="menu-links">
                      Lista
                    </Link>
                  </li>
                  <li>
                    <Link to="/graficos" className="menu-links">
                      Gráficos
                    </Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/lista" component={Lista} />
                <Route path="/graficos" component={Graficos} />
              </Switch>
            </main>
          </Router>
          <Row>
            <div className="footer">
              <p>Página HTML desenvolvida por Cadmiel M. Donato ©</p>
            </div>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
