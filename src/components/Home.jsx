import { Link } from "react-router-dom";
import getImage from "./getImage";
import products from "./ProductData";
import ProductCard from "./ProductCard";
import Services from "./Services";
import Reviews from "./Reviews";

function Home({ addToCart, wishlist, toggleWishlist }) {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center hero-row">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="eyebrow">
                <i className="bi bi-stars"></i> A little goodness every day
              </span>

              <h1>
                Nature's goodness,
                <br />
                <span>in every handful.</span>
              </h1>

              <p className="hero-description">
                Discover delicious dry fruits and wholesome snacks carefully
                selected to bring a little more goodness to your everyday
                moments.
              </p>

              <div className="hero-buttons">
                <Link to="/products" className="primary-button">
                  Explore products <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="/about" className="secondary-button">
                  Our story
                </Link>
              </div>

              <div className="hero-trust">
                <span><i className="bi bi-check-circle-fill"></i> Carefully selected</span>
                <span><i className="bi bi-check-circle-fill"></i> Packed with care</span>
              </div>
            </div>

            <div className="col-lg-6 hero-image-column" data-aos="fade-left">
              <div className="hero-image-frame">
                <img
                  src={getImage("hero")}
                  alt="An assortment of premium dry fruits"
                />
              </div>
              <div className="floating-note">
                <i className="bi bi-heart-fill"></i>
                <div>
                  <strong>Goodness in every bite</strong>
                  <small>Made for your everyday moments</small>
                </div>
              </div>
              <div className="hero-decoration"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-strip-inner">
          <span><i className="bi bi-leaf"></i> Nature-inspired goodness</span>
          <span><i className="bi bi-box-seam"></i> Thoughtfully packed</span>
          <span><i className="bi bi-gift"></i> Perfect for gifting</span>
          <span><i className="bi bi-heart"></i> Made for sharing</span>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span className="eyebrow">A few customer favourites</span>
            <h2>Good things come in <span>little packages.</span></h2>
            <p>Explore some of our most-loved crunchy, chewy and naturally delicious picks.</p>
          </div>

          <div className="row g-4">
            {products.slice(0, 4).map((product) => (
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

          <div className="center-button">
            <Link to="/products" className="primary-button">
              View all products <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="category-preview section-padding">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span className="eyebrow">Find your favourite</span>
            <h2>Something good for <span>every mood.</span></h2>
          </div>

          <div className="row g-4">
            {[
              { name: "Nuts", image: "almonds", text: "Crunchy little favourites" },
              { name: "Dried Fruits", image: "dried-mango", text: "Naturally sweet bites" },
              { name: "Healthy Snacks", image: "coconut-chips", text: "Snack-time goodness" }
            ].map((category) => (
              <div className="col-md-4" key={category.name} data-aos="zoom-in">
                <Link to="/categories" className="category-card">
                  <img src={getImage(category.image)} alt={category.name} />
                  <div>
                    <h3>{category.name}</h3>
                    <p>{category.text}</p>
                    <span>Explore <i className="bi bi-arrow-up-right"></i></span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="story-banner section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <img
                className="story-banner-image"
                src={getImage("our-story")}
                alt="Natural dry fruits arranged for sharing"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <span className="eyebrow">A thoughtful little brand</span>
              <h2>Simple ingredients. <span>Happier moments.</span></h2>
              <p>
                At Nut & Nook, we believe everyday snacks can feel special.
                Our collection celebrates the natural taste, texture and
                versatility of dry fruits.
              </p>
              <Link to="/about" className="primary-button">
                Get to know us <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Reviews />

      <section className="newsletter-section">
        <div className="container newsletter-content" data-aos="fade-up">
          <span className="eyebrow">A little note from us</span>
          <h2>Make room for <span>goodness.</span></h2>
          <p>Explore our collection and find a new everyday favourite.</p>
          <Link to="/products" className="primary-button">
            Shop the collection <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;