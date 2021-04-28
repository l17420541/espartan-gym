import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import logo from '../Assets/logov3.png'

export class Menu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="32"
                            height="51"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home" >Inicio</Nav.Link>
                            <NavDropdown title="Rutinas" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1">Torso</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Brazos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Piernas</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown  title="Productos" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1">Suplementos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Accesorios</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link" >Acerda de</Nav.Link>
                            <NavDropdown title="Horario" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="">Lunes:     06:00 - 22:00</NavDropdown.Item>
                                <NavDropdown.Item href="">Martes:    06:00 - 22:00</NavDropdown.Item>
                                <NavDropdown.Item href="">Miércoles: 06:00 - 22:00</NavDropdown.Item>
                                <NavDropdown.Item href="">Jueves:    06:00 - 22:00</NavDropdown.Item>
                                <NavDropdown.Item href="">Viernes:   06:00 - 22:00</NavDropdown.Item>
                                <NavDropdown.Item href="">Sábado:    06:00 - 18:00</NavDropdown.Item>
                                <NavDropdown.Item href="">Domingo:   CERRADO</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                            <Button variant="outline-warning">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Menu
