const reviews = [
  {
    name: "Ananya",
    initials: "A",
    text: "The website is easy to browse, and I love how clearly the products are presented."
  },
  {
    name: "Meera",
    initials: "M",
    text: "A lovely selection of snack ideas. The product cards make everything simple to explore."
  },
  {
    name: "Priya",
    initials: "P",
    text: "The warm colours and neat layout make this shop feel welcoming."
  }
];

function Reviews() {
  return (
    <section className="section-padding reviews-section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="eyebrow">Kind words</span>
          <h2>A little love for <span>Nut & Nook.</span></h2>
          <p>Sample testimonials to demonstrate the reviews section.</p>
        </div>

        <div className="row g-4">
          {reviews.map((review, index) => (
            <div className="col-md-4" key={review.name} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="review-card">
                <div className="review-stars" aria-label="Five stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i className="bi bi-star-fill" key={star}></i>
                  ))}
                </div>
                <p className="review-text">“{review.text}”</p>
                <div className="review-person">
                  <span className="review-avatar">{review.initials}</span>
                  <div>
                    <strong>{review.name}</strong>
                    <small>Sample website review</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;