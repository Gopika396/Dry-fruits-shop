import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Deals from "./components/Deals";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import Services from "./components/Services";
import Reviews from "./components/Reviews";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 70,
      easing: "ease-out-cubic"
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [cart, wishlist]);

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  function changeQuantity(id, amount) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function toggleWishlist(product) {
    setWishlist((current) =>
      current.some((item) => item.id === product.id)
        ? current.filter((item) => item.id !== product.id)
        : [...current, product]
    );
  }

  const sharedProps = {
    cart,
    wishlist,
    addToCart,
    toggleWishlist
  };

  return (
    <>
      <ScrollToTop />

      <Navbar
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
        wishlistCount={wishlist.length}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home {...sharedProps} />} />
          <Route path="/products" element={<Products {...sharedProps} />} />
          <Route path="/categories" element={<Categories {...sharedProps} />} />
          <Route path="/deals" element={<Deals {...sharedProps} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                changeQuantity={changeQuantity}
                clearCart={() => setCart([])}
              />
            }
          />
          <Route path="*" element={<Home {...sharedProps} />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;