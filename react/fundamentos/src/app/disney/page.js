'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Disney() {

    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setPersonagens(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo="Disney">
            <Link href="/disney/cards">Ir para Disney Cards</Link><br/>
            <Link href="/disney/tabela">Ir para Disney Table</Link><br/>
            <Link href="/disney/carrosel">Ir para Disney Carrosel</Link>
            <br/>
            <hr/>
            {personagens.map(item => (
                <p>{item.name}</p>
            ))} 
        </Pagina>
    )
}