import { useContext } from 'react';
import { SearchContext } from '../../context';
import "./index.css";
import { Link } from 'react-router-dom';

function Header() {
    const { setInputValue } = useContext(SearchContext);
    const handleLogin = (e) => {
        e.preventDefault();
        alert('Atrapada! el login no lo hice ☠️');
    }
    return (
        <header className="header">
            <Link to={'/'}>
                <div className="logo">Jairo's</div>
            </Link>

            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar..."
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>

            <nav className="nav-links">
                <a href="/" onClick={handleLogin} className="nav-link">Login</a>
                <Link to={'/contact'} className="nav-link button-link">Contacto</Link>
            </nav>
        </header>
    );
}

export { Header }