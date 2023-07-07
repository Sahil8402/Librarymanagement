import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './im.png'
import { BiCartAlt } from "react-icons/bi";

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" fixed>

                <Container>
                    <img src={Logo} style={{ height: 40, width: 40, marginTop: -2 }}></img>
                    <Navbar.Brand href="#home">Library Management System</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/dashbord">Books</Nav.Link>
                        <Nav.Link href="/">Logout</Nav.Link>
                        <Nav.Link href="/" style={{ paddingLeft: '700px' }}>Login</Nav.Link>
                        <Nav.Link href="/signup" >Signup</Nav.Link>
                        <Nav.Link href="/dashbord">
                            <BiCartAlt style={{ color: 'white', marginTop: 4, height: 25, width: 25, cursor: 'pointer' }}></BiCartAlt></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default ColorSchemesExample;