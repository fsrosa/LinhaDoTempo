import React from 'react'
import './styles.css'

import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import linhaDoTempoLogo from '../../assets/logo-linhasdotempo.gif'

export default function Home() {
    return (
        <div className="home-container">
            <Navbar bg="light" expand="lg" className="main-header">
                <Navbar.Brand href="#home">
                    <img src={linhaDoTempoLogo} alt="" />
                </Navbar.Brand>
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Fabrício Rosa">
                    <NavDropdown.Item href="#account">Minha Conta</NavDropdown.Item>
                    <NavDropdown.Item href="#acontecimentos">Meus Acontecimentos</NavDropdown.Item>
                    <NavDropdown.Item href="#linhas-do-tempo">Minhas Linhas do Tempo</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#logout">Sair</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        </div>


    )
}