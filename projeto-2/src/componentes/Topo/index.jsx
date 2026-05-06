import Link from "next/link";

export default function Topo(){
    return(
        <nav>
            <Link href="/frontend"></Link>
            <Link href="/backend"></Link>
            <Link href="/mobile"></Link>
        </nav>
    )
}