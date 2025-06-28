'use client'
import Link from 'next/link'
import '../styles/NavigationMenu.css'


export default function NavigationMenu() {
    return (
        <nav className="navContainer">
            <Link href="/"><span>Home</span></Link>
            <Link href="/garments"><span>Garments</span></Link>
            <Link href="/style"><span>Style</span></Link>
            <Link href="/category"><span>Category</span></Link>
        </nav>
    )
}
