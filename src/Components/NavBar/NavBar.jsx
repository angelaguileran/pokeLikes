import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bgColor">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="link-deco me-2" to="/">
              🏠 Inicio
            </Link>
            <Link className="link-deco " to="/favoritos">
              ❤️ Favoritos
            </Link>
          </Nav>
          <Navbar.Brand>
            <Link className="link-deco" to="/">
              PokeApi 🌍
            </Link>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
