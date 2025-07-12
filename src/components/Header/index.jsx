import { useContext } from 'react';
import { SearchContext } from '../../context';
import "./index.css";

function Header() {
    const { setInputValue } = useContext(SearchContext);
    return (
        <header className="header">
            <div className="logo">Jairo's</div>

            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar..."
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>

            <nav className="nav-links">
                <a href="/login" className="nav-link">Login</a>
                <a href="/contacto" className="nav-link button-link">Contacto</a>
            </nav>
        </header>
    );
}

export { Header }