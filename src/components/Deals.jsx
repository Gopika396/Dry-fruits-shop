import { Link } from "react-router-dom";
import products from "./ProductData";
import ProductCard from "./ProductCard";

function Deals({ addToCart, wishlist, toggleWishlist }) {
  const deals = products.filter((product) => product.oldPrice > product.price);

  return (
    <section className="page-section section-padding">
      <div className="container">
        <div className="deal-hero" data-aos="fade-up">
          <div>
            <span className="eyebrow">Little treats, lovely prices</span>
            <h1>Good deals. <span>Great snacks.</span></h1>
            <p>Explore selected products with special displayed prices.</p>
            <Link to="/products" className="primary-button">
              Shop all products <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div className="deal-icon"><i className="bi bi-gift"></i></div>
        </div>

        <div className="section-heading compact-heading">
          <h2>Today's <span>favourites.</span></h2>
          <p>Browse the collection and choose your favourites.</p>
        </div>

        <div className="row g-4">
          {deals.map((product) => (
            <div className="col-sm-6 col-lg-3" key={product.id}>
              <ProductCard
                product={product}
                addToCart={addToCart}
                wishlist={wishlist}
                toggleWishlist={toggleWishlist}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Deals;