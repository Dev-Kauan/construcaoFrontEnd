import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button variant="success">Success</Button>{' '}
      <Cabecalho titulo="Página Inicial" sub="Kauan Souza"/>
    
      <Link href="/fundamentos">Página Fundamentos</Link><br />
      <Link href="/clientes">Página Clientes</Link>
    </main>
  );
}
