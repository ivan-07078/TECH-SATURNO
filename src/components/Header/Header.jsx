import { NavLink } from 'react-router-dom';
import { Heart, ShoppingCart, User, Search } from 'lucide-react';

const links = [
  { to: '/produtos', label: 'Todos os produtos' },
  { to: '/categorias', label: 'Eletrônicos' },
  { to: '/produtos', label: 'Games' },
  { to: '/produtos', label: 'Acessórios' },
  { to: '/produtos', label: 'Casa & Cozinha' },
  { to: '/produtos', label: 'Beleza & Cuidados' },
  { to: '/produtos', label: 'Ferramentas' },
  { to: '/produtos', label: 'Mais' }
];

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" aria-label="Tech Saturno home">
          <span className="brand-mark">TS</span>
          <span>TECH SATURNO</span>
        </NavLink>

        <div className="header-search">
          <div className="search-box">
            <Search size={16} color="#9aa6b8" />
            <input type="search" placeholder="O que você procura?" aria-label="Buscar produtos" />
          </div>
        </div>

        <div className="header-actions">
          <NavLink to="/minha-conta" className="nav-link" aria-label="Minha conta">
            Minha conta
          </NavLink>
          <NavLink to="/favoritos" className="icon-button" aria-label="Favoritos">
            <Heart size={18} />
          </NavLink>
          <NavLink to="/carrinho" className="icon-button" aria-label="Carrinho">
            <ShoppingCart size={18} />
          </NavLink>
          <NavLink to="/login" className="button header-login" aria-label="Entrar">
            <User size={16} />
            Entrar
          </NavLink>
        </div>
      </div>

      <div className="department-bar">
        <div className="container">
          {links.map((link, index) => (
            <NavLink
              key={`${link.label}-${index}`}
              to={link.to}
              className={({ isActive }) => `department-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
