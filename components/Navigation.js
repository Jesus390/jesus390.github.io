import Link from 'next/link';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link href="/#about-me">About Me</Link></li>
                {/* <li><a href="#portfolio">Portfolio</a></li> */}
                {/* <li><Link href="/blog">Blog</Link></li> */}
                <li><Link href="https://medium.com/@jesusespinola90" target="_blank">Blog</Link></li>
                <li><Link href="#contact">Contact Me</Link></li>
            </ul>
        </nav>
    )
}