'use client'

import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Nome(){
    
    const [nome, setNome] = useState('Kauan')

    function alterarNome(){
        setNome(nome == 'Kauan' ? 'Kauan Souza Lima' : 'Kauan')
    }

    return (
        <Pagina titulo={"Nome: " + nome}>
            <h1>{nome}</h1>
            <Button onClick={alterarNome}>Alterar nome</Button>
        </Pagina>
    )
}