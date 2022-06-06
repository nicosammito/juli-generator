import {Container, Nav, Navbar} from "react-bootstrap";
import {IconBrandInstagram, IconBrandTwitter} from "@tabler/icons";

const NavBar = () => {
    return <Navbar collapseOnSelect expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                Junge Liberale SOCIAL MEDIA TOOL
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link href={"https://www.instagram.com/nico_sammito/"} eventKey={2}>Du brauchst hilfe?</Nav.Link>
                    <Nav.Link href={"https://www.instagram.com/nico_sammito/"} eventKey={2}> <IconBrandInstagram/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavBar;