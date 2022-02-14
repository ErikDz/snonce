import Navbar from "react-bootstrap/Navbar"
import {Container, Nav, NavDropdown} from "react-bootstrap"
function Header(){
    return(
        <div>
           <Navbar bg="dark" expand="lg" className="dzNavbar" >
            <Container>
                <Navbar.Brand className="mainLogo" href="#home">SNONCE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{marginLeft:"auto",marginRight:"0px !important"}}>
                    <Nav.Link href="#home">Contact</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar> 
        </div>
    )
}

export default Header