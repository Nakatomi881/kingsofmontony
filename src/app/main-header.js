import Link from "next/link";

export default function MainHeader(){
return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
)


}