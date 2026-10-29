import { Link } from "react-router-dom";
import getImage from "./getImage";

const categoryData = [
  {
    name: "Nuts",
    image: "almonds",
    description: "Almonds, cashews, walnuts and pistachios."
  },
  {
    name: "Dried Fruits",
    image: "dried-mango",
    description: "Raisins, dates, mangoes, apricots and berries."
  },
  {
    name: "Healthy Snacks",
    image: "coconut-chips",
    description: "Simple snack choices for your everyday routine."
  },
  {
    name: "Combos",
    image: "mixed-dryfruits",
    description: "A colourful assortment of dry-fruit favourites."
  }
];

function Categories() {
  return (
    <section className="page-section section-padding">
      <div className="container">
        <div className="page-heading" data-aos="fade-up">
          <span className="eyebrow">Browse by collection</span>
          <h1>Find your <span>kind of goodness.</span></h1>
          <p>Explore our collections and discover your next favourite snack.</p>
        </div>

        <div className="row g-4">
          {categoryData.map((item, index) => (
            <div className="col-sm-6 col-lg-3" key={item.name} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="category-detail-card">
                <img src={getImage(item.image)} alt={item.name} />
                <div className="category-detail-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link to="/products" className="text-link">
                    Browse collection <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;