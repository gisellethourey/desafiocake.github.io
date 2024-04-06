import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar bg="danger" expand="lg" fixed="top">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to = "/home"className="text-white ms-4 text-decoration-none"
        >🏠Home</Link>
        <Link to ="/contacto" className= "text-white ms-5 text-decoration-none">🗒️Contacto</Link>
      </Nav>
        <Link to ="/"className="text-white ms-auto text-decoration-none" ><h5>Happy Cake 🍰</h5></Link>
    </Navbar.Collapse>
  </Navbar>
    );
};
export default NavBar;

 