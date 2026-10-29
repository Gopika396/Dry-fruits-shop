import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <Link to="/" className="footer-brand">
            <i className="bi bi-flower1"></i> NUT & NOOK
          </Link>

          <p>
            Little bites of goodness for everyday moments.
            Discover your next favourite dry-fruit snack.
          </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" aria-label="Pinterest">
              <i className="bi bi-pinterest"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              <i className="bi bi-youtube"></i>
            </a>
          </div>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/deals">Deals</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nut & Nook.</span>
          <span>Made with <i className="bi bi-heart-fill"></i> for snack lovers.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;