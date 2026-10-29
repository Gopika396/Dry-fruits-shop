import { useMemo, useState } from "react";
import products from "./ProductData";
import ProductCard from "./ProductCard";

function Products({ addToCart, wishlist, toggleWishlist }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const categories = ["All", "Nuts", "Dried Fruits", "Healthy Snacks", "Combos"];

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [search, category, sort]);

  return (
    <section className="page-section section-padding">
      <div className="container">
        <div className="page-heading" data-aos="fade-up">
          <span className="eyebrow">The Nut & Nook collection</span>
          <h1>Shop all <span>good things.</span></h1>
          <p>Find a little something to make your snack time special.</p>
        </div>

        <div className="shop-toolbar">
          <div className="search-box">
            <i className="bi bi-search"></i>
            <input
              type="search"
              placeholder="Search dry fruits..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: Low to high</option>
            <option value="high">Price: High to low</option>
            <option value="rating">Top rated</option>
          </select>
        </div>

        <div className="category-filters">
          {categories.map((item) => (
            <button
              key={item}
              className={`filter-button ${category === item ? "selected" : ""}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="results-count">
          Showing {filteredProducts.length} product(s)
        </p>

        <div className="row g-4">
          {filteredProducts.map((product) => (
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

        {filteredProducts.length === 0 && (
          <div className="empty-state">
            <i className="bi bi-search"></i>
            <h3>No products found</h3>
            <p>Try another search or choose a different category.</p>
            <button
              className="primary-button"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;