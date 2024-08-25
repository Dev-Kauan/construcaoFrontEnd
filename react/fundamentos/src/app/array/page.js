'use client';
import { Col, Row } from "react-bootstrap";
import { carros } from "../constants/carros";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Clientes() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Navbar.Brand href="#home">Sistema Acadêmico</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Página 1</Nav.Link>
                    <Nav.Link href="#features">Página 2</Nav.Link>
                    <Nav.Link href="#pricing">Array</Nav.Link>
                    <Nav.Link href="#pricing">Carros</Nav.Link>
                </Nav>
            </Navbar>
            <div style={{ height: 150, backgroundColor: '#ffffe6' }} className="d-flex align-items-center">
                <Container style={{ maxWidth: 1300 }}>
                    <h1 >Carros</h1>
                </Container>
            </div>

            <Container style={{ maxWidth: 1300, marginTop: 30 }}>
                <Row className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
                    {carros.map(carro => (
                        <Col style={{marginTop: 20}}>
                            <div class="card" style={{ width: '18rem' }}>
                                <img src={carro.foto}></img>
                                <div class="card-body">
                                    <h5 class="card-title">{carro.marca} - {carro.modelo}</h5>
                                    <p class="card-text">Ano: {carro.ano}</p>
                                    <a href="#" class="btn btn-primary">Detalhes</a>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    );
}