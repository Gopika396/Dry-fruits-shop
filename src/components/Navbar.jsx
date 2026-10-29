import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ cartCount, wishlistCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "Deals", path: "/deals" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <div className="announcement-bar">
        <span>Fresh picks, happy snacking!</span>
        <span>Quality dry fruits for everyday goodness</span>
      </div>

      <nav className="navbar navbar-expand-lg nut-navbar">
        <div className="container">
          <Link className="navbar-brand nut-brand" to="/" onClick={closeMenu}>
            <span className="brand-icon">
              <i className="bi bi-flower1"></i>
            </span>
            <span>
              NUT <span className="brand-amp">&</span> NOOK
              <small>Nature's little treasures</small>
            </span>
          </Link>

          <button
            className="custom-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </button>

          <div className={`navbar-collapse ${menuOpen ? "show" : ""}`}>
            <div className="navbar-nav ms-auto nav-links">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="nav-actions">
              <span className="nav-wishlist" title="Wishlist">
                <i className="bi bi-heart"></i>
                <span>{wishlistCount}</span>
              </span>

              <Link className="cart-link" to="/cart" onClick={closeMenu}>
                <i className="bi bi-bag"></i>
                <span>Cart</span>
                <b>{cartCount}</b>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;