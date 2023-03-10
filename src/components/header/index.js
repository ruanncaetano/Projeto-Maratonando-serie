import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      variant="light"
      expand="lg"
      style={{ color: "#fff", background: "rgb(14,80,64)" }}
      className="justify"
    >
      <Navbar.Brand>
        <img
          src={logo}
          alt="Logo Maratonando Série"
          style={{ width: "125px" }}
        />
      </Navbar.Brand>
      <Navbar.Brand>Maratonando Série</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/Sobre">
            Sobre
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/Contexto">
            Contexto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
