import Link from "next/link";
import Cabecalho from "../components/Cabecalho";
import Table from 'react-bootstrap/Table';

export default function Clientes() {
    return (
        <>
            <Cabecalho titulo="Clientes" sub="Página de clientes usando o cabeçalho"></Cabecalho>
            <Link href="/">Página Inicial</Link><br />
            <Link href="../fundamentos">Fundamentos</Link><br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}