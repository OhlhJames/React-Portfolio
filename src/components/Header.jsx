import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <h1>James Ohlhausen</h1>
        <nav>
            <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Link key={1} className="nav-link text-light" to="/about">
                    About me
                    </Link>,
                    <Link key={2} className="nav-link text-light" to="/">
                    Portfolio
                    </Link>,
                    <Link key={3} className="nav-link text-light" to="/resume">
                    Resume
                    </Link>,
                    <Link key={4} className="nav-link text-light" to="/contact">
                    Contact Me
                    </Link>,
                </ul>
            </div>
        </nav>
    </header>
  );
}
