'use client'

import { Button, Card, Col, Row } from "react-bootstrap";
import Pagina from "../components/Pagina";
import { carros } from "../constants/carros";

export default function Objetos() {

    return (
        <Pagina titulo="Objetos">

            <Row md={4}>
                {carros.map(item => (
                    <Col className="my-2">
                        <Card>
                            <Card.Img variant="top" src={item.foto} />
                            <Card.Body>
                                <Card.Title>{`${item.marca} - ${item.modelo}`}</Card.Title>
                                <Row>
                                    <Col>
                                        <p>Ano: <b>{item.ano}</b></p>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Detalhes</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}