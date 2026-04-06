import Image from "next/image";
import Logo from './../../../public/next.svg';
import Estilos from "./Topo.module.css"

export default function Topo(){
    return(
        <div className={Estilos.topo_container}>
            <Image src={Logo} alt="Vercel Logo" className={Estilos.img_logo}/>
            <h1>Topo</h1>
        </div>
    )
}