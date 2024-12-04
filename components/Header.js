import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header>
            <div>
                <span className="name-je">
                    <Link href="https://jespinola.com">
                        <Image src="/images/logo.png" alt=".:AI:." height={50} width={50} />
                    </Link>
                </span>
                <span className="my-name">Jesús Espinola</span>
            </div>
            <div className="contact">
                <Link href="https://veplin.com">
                    <i className="fa-solid fa-globe"></i> https://veplin.com
                </Link> | 
                <Link href="mailto:jesusespinola90@gmail.com"><i className="fa-regular fa-envelope">
                    </i> jesusespinola90@gmail.com
                </Link>
            </div>
            <div className="social-network contact">
                <Link href="https://www.linkedin.com/in/marioespinola" target="_blank">
                    <i className="fa-brands fa-linkedin"></i> Linkedin
                </Link> | 
                <Link href="https://github.com/Jesus390" target="_blank">
                    <i className="fa-brands fa-github"></i> Github
                </Link> | 
                <Link href="https://medium.com/@jesusespinola90" target="_blank">
                    <i className="fa-brands fa-medium"></i> Medium
                </Link> | 
                <Link href="#">
                    <i className="fa-solid fa-phone"></i> +595 991 906 719
                </Link>
            </div>
        </header>
    )
}

export default Header;