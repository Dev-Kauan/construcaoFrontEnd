'use client'

import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Calculo(){
    const [numero, setNumero] = useState(0)

    function diminuir(){
        setNumero(numero - 1);
    }

    function aumentar(){
        setNumero(numero + 1);
    }
    return (
        <Pagina titulo="Calculo">
            <Button onClick={diminuir}>-</Button>
            <h1>{numero}</h1>
            <Button onClick={aumentar}>+</Button>
        </Pagina>
    )
}