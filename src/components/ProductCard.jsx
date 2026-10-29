function ProductCard({ product, addToCart, wishlist, toggleWishlist }) {
  const isFavourite = wishlist?.some((item) => item.id === product.id);

  return (
    <div className="product-card" data-aos="fade-up">
      <div className="product-image-wrap">
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}

        <button
          className={`wishlist-button ${isFavourite ? "favourite" : ""}`}
          onClick={() => toggleWishlist(product)}
          aria-label="Toggle wishlist"
        >
          <i className={`bi ${isFavourite ? "bi-heart-fill" : "bi-heart"}`}></i>
        </button>

        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <div className="product-details">
        <div className="product-category">{product.category}</div>
        <h3>{product.name}</h3>

        <div className="product-rating">
          <i className="bi bi-star-fill"></i>
          <span>{product.rating}</span>
          <span className="product-weight">| {product.weight}</span>
        </div>

        <div className="product-price">
          <strong>₹{product.price}</strong>
          <del>₹{product.oldPrice}</del>
        </div>

        <button className="add-cart-button" onClick={() => addToCart(product)}>
          <i className="bi bi-bag-plus"></i> Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;