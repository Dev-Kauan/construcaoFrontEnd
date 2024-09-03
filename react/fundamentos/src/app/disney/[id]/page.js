'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Card, Col, ListGroup, ListGroupItem, Row, Spinner } from "react-bootstrap";

export default function Page({ params }) {

    const [details, setDetails] = useState({})

    useEffect(() => {
        apiDisney.get(`character/${params.id}`).then(resultado => {
            setDetails(resultado.data.data)
        })

        console.log(details);
    }, [])

    return (
        <Pagina titulo="Disney Detalhes">

            {
                !details._id &&
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }

            {
                details._id &&
                <div>
                    <Row className="mt-3">
                        <Col md={4}>
                            <img src={details.imageUrl} />
                        </Col>
                        <Col md={8}>
                            <p><b>Nome: </b>{details.name}</p>
                            <p><b>Data Criação: </b>{details.createdAt}</p>
                            <p><a target="_blank" href={details.sourceUrl}>Ver página original</a></p>
                        </Col>
                        <Col md={6} className="mt-3">
                            <Card border="primary">
                                <Card.Header className="bg-primary text-white">Filmes</Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                        {details.tvShows.map(item => (
                                            <ListGroup.Item key={item}>{item}</ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card border="warning">
                                <Card.Header className="bg-warning">Séries</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <ListGroup>
                                            {details.films.map(item => (
                                                <ListGroup.Item key={item}>{item}</ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>




                </div>
            }

        </Pagina>
    )
}