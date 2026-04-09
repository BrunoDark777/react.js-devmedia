import Image from "next/image";
import estilos from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main className={estilos.main}>
        <div>
          <h1>Seja bem-vindo ao exemplo de navegação no React</h1>
        </div>
      </main>
      
    </div>
  );
}
