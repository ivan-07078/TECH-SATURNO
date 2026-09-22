import { NavLink } from 'react-router-dom';
import { Heart, ShoppingCart, User, Search } from 'lucide-react';

const links = [
  { to: '/', label: 'Início' },
  { to: '/produtos', label: 'Produtos' },
  { to: '/categorias', label: 'Categorias' },
  { to: '/contato', label: 'Contato' }
];

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          <span className="brand-mark">TS</span>
          <span>Tech Saturno</span>
        </NavLink>

        <nav className="nav-links" aria-label="Menu principal">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="icon-button" aria-label="Buscar">
            <Search size={18} />
          </button>
          <NavLink to="/favoritos" className="icon-button" aria-label="Favoritos">
            <Heart size={18} />
          </NavLink>
          <NavLink to="/carrinho" className="icon-button" aria-label="Carrinho">
            <ShoppingCart size={18} />
          </NavLink>
          <NavLink to="/login" className="button button-secondary header-login">
            <User size={17} />
            Entrar
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
