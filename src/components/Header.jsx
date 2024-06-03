import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <h1>James Ohlhausen</h1>
        <nav>
            <ul class = "navbar">
              <Link to="/about">
              About me
              </Link>
              <Link to="/">
              Portfolio
              </Link>
              <Link to="/resume">
              Resume
              </Link>
              <Link to="/contact">
              Contact Me
              </Link>
            </ul>
        </nav>
    </header>
  );
}
