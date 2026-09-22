import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <h3>Tech Saturno</h3>
          <p>Eletrônicos, acessórios e tecnologia para o dia a dia.</p>
        </div>

        <div className="footer-links">
          <Link to="/produtos">Produtos</Link>
          <Link to="/categorias">Categorias</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
