const services = [
  {
    icon: "bi-box-seam",
    title: "Thoughtful packaging",
    description: "A neat, considered presentation for your chosen products."
  },
  {
    icon: "bi-bag-heart",
    title: "Easy shopping",
    description: "Browse categories, compare products and add favourites to your cart."
  },
  {
    icon: "bi-gift",
    title: "Gift-worthy picks",
    description: "Discover dry-fruit selections for celebrations and sharing."
  },
  {
    icon: "bi-chat-heart",
    title: "Friendly support",
    description: "Use our contact form to send a question or message."
  }
];

function Services() {
  return (
    <section className="section-padding services-section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="eyebrow">A pleasant shopping experience</span>
          <h2>Little things, <span>thoughtfully done.</span></h2>
          <p>Designed to make exploring your favourites simple and enjoyable.</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-sm-6 col-lg-3"
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-card">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;