import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navb(){
    return(
        <div>
                  <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CleanMart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Contato">Contatos</Nav.Link>
            <Nav.Link href="/Sobre">Sobre</Nav.Link>
          </Nav>
          <Navbar.Text>
              <a href="#login">Login</a>
              <Nav.Link href="/"></Nav.Link>
              <Navbar.Text>
              <a href="#sign-up">Cadastre-se</a>
            </Navbar.Text>
            </Navbar.Text>
        </Container>
      </Navbar>
        </div>

    )
}

export default Navb