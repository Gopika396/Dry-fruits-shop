import getImage from "./getImage";

function About() {
  return (
    <section className="page-section section-padding">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <img
              className="about-main-image"
              src={getImage("our-story")}
              alt="A natural assortment of dry fruits"
            />
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <span className="eyebrow">Our little story</span>
            <h1 className="page-title">
              Goodness grows from <span>simple things.</span>
            </h1>

            <p>
              Nut & Nook is a dry-fruits shop concept built around the simple
              joy of discovering delicious snacks. We bring together a
              colourful selection of nuts, dried fruits and snack-time
              favourites in one welcoming place.
            </p>

            <p>
              We believe good food deserves thoughtful presentation, clear
              product information and a pleasant shopping experience.
            </p>

            <div className="about-values">
              <div><i className="bi bi-leaf"></i><span>Nature-inspired choices</span></div>
              <div><i className="bi bi-box-seam"></i><span>Thoughtful presentation</span></div>
              <div><i className="bi bi-heart"></i><span>Made for sharing</span></div>
            </div>
          </div>
        </div>

        <div className="about-highlight section-padding">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="eyebrow">Our approach</span>
              <h2>Little details make <span>a difference.</span></h2>
              <p>
                From browsing the collection to adding a product to your cart,
                Nut & Nook aims to make every step feel simple, warm and easy.
              </p>
            </div>
            <div className="col-lg-5">
              <img
                src={getImage("healthy-snacks")}
                alt="Dry fruits prepared for snack time"
                className="about-secondary-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;