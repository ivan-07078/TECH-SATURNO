import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-copy">
          <div className="footer-brand">
            <span className="brand-mark">TS</span>
            <span>TECH SATURNO</span>
          </div>
          <div className="footer-links">
            <span>Acompanhe nossas novidades</span>
            <span>Compra segura e protegida</span>
            <span>Recife e região</span>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/produtos">Produtos</Link>
          <Link to="/categorias">Categorias</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/admin">Admin</Link>
        </div>

        <div className="footer-note">
          Todos os direitos reservados © Tech Saturno.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
