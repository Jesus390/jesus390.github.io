import Link from 'next/link';

const NavigationMenu = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li>
          <Link href="/" className="navigation-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="navigation-link">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="navigation-link">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/blog" className="navigation-link">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;