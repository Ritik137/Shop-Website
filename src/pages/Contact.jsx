function Contact() {
  const phone = "919334497202";

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const name = formData.get("name");
    const phoneNumber = formData.get("phone");
    const requirement = formData.get("requirement");

    const message = encodeURIComponent(
      `Namaste Rajsya Aluminium & Furniture Works,

Name: ${name}
Phone: ${phoneNumber}
Requirement: ${requirement}

Mujhe free on-site measurement aur quotation chahiye.`
    );

    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="page-section">
      <div className="container contact-wrap">
        <div className="page-header">
          <div className="section-label">CONTACT US</div>
          <h1>Let’s build something beautiful for your space.</h1>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <span>☎</span>
              <div>
                <small>Call Us</small>
                <strong>93344 97202</strong>
              </div>
            </div>

            <div className="contact-item">
              <span>◉</span>
              <div>
                <small>WhatsApp</small>
                <strong>Chat with us instantly</strong>
              </div>
            </div>

            {/* <div className="contact-item">
              <span>⌖</span>
              <div>
                <small>Visit Us</small>
                <strong>
                  Near Sipara Pul, Indrapuri, Patna, Bihar
                </strong>
              </div>
            </div> */}

            <a
              href="https://maps.app.goo.gl/trL4RvkWbsmeb6Ew5"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span>⌖</span>

              <div>
                <small>Visit Us</small>
                <strong>Near Sipara Pul, Indrapuri, Patna, Bihar</strong>
                <small className="map-link">Open location in Google Maps →</small>
              </div>
            </a>

            <div className="contact-item">
              <span>🕒</span>
              <div>
                <small>Working Hours</small>
                <strong>Mon - Sat: 9:00 AM - 8:00 PM</strong>
              </div>
            </div>
          </div>

          <div className="enquiry-box">
            <h3>Get Free Quotation</h3>

            <form onSubmit={handleSubmit}>
              <label>
                Your Name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Apna naam likhein"
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="93344 97202"
                />
              </label>

              <label>
                Requirement
                <textarea
                  name="requirement"
                  required
                  rows="4"
                  placeholder="Jaise: aluminium window, custom wardrobe, modular kitchen..."
                />
              </label>

              <button type="submit" className="button dark full">
                Send on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;