import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Routes, Route } from "react-router-dom";
import ProductAll from "./ProductAll";
import Diffuser from "./Diffuser";
import Candle from "./Candle";

import Detail from "./Detail";
import data from "./data";

function App() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Mall
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/diffuser">
              디퓨저
            </Nav.Link>
            <Nav.Link as={Link} to="/candle">
              캔들
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/diffuser" element={<Diffuser />} />
        <Route path="/candle" element={<Candle />} />
        <Route path="/product/:id" element={<Detail data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
