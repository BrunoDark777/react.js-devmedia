import Link from "next/link";
import estilos from "./page.module.css";
import Topo from "@/componentes/Topo";

export default function Home() {
  return (
    <div className={estilos.page}>
      <Topo />
      <main className={estilos.main}>
        <div className={estilos.card_container}>
          <h1>Página Inicial</h1>
          <p>Essa é a página principal da aplicação.</p>
          <p>
            Essa página é gerada automaticamente durante a criação da aplicação.
          </p>
          <Link href="/novapagina" className={estilos.link}>Link para a nova página</Link>
        </div>
      </main>
    </div>
  );
}
