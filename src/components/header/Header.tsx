import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <Navbar variant="dark" expand="sm">
    <Container>
      <Navbar.Collapse id="navbar-nav" className="">
        <Nav>
          <Link href={"/"}>
            <a className="nav-link">Home</a>
          </Link>
        </Nav>
        <Nav className="ml-auto">
          {/* <Link href={"/skills"}>
            <a className="nav-link">Skills</a>
          </Link>
          <Link href={"/portfolio"}>
            <a className="nav-link">Portfolio</a>
          </Link> */}
          <Link href={"//github.com/vigovlugt"}>
            <a className="nav-link">
              Github
              <FontAwesomeIcon className="ml-1" icon={faGithub} size="lg" />
            </a>
          </Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Toggle aria-controls="navbar-nav" />
    </Container>
  </Navbar>
);
export default Header;
