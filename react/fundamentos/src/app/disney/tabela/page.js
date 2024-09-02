'use client'

import Table from 'react-bootstrap/Table';
import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import apiDisney from "@/services/apiDisney";
import Link from 'next/link';


export default function Objetos() {

    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            const res = resultado.data.data
            res.sort(function(a, b){
                return a.name < b.name
            })
            setPersonagens(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo="Disney Table">
            <Link href="/disney">Voltar para Disney</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    {personagens.map(item => (
                        <tr>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td><img src={item.imageUrl} height={100}/></td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </Pagina>
    )
}