import { Link } from "react-router-dom";
import { services } from "../data/services";
import { galleryItems } from "../data/gallery";
import img1 from "../Image/img1.jpg"

function Home() {
  const phone = "919334497202";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Namaste Rajsya Aluminium & Furniture Works, mujhe free on-site measurement aur quotation chahiye."
  )}`;

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="section-label">
              CRAFTING SPACES. BUILDING TRUST.
            </div>

            <h1>
              Your Vision.
              <br />
              <span>Our Craft.</span>
            </h1>

            <p>
              Rajsya Aluminium & Furniture Works, Patna mein premium aluminium
              fabrication, structural glass work aur custom furniture solutions
              provide karta hai.
            </p>

            <div className="hero-actions">
              <a
                href={whatsappUrl}
                className="button dark"
                target="_blank"
                rel="noreferrer"
              >
                Get Free Quotation
              </a>

              <Link to="/services" className="button light">
                Explore Services
              </Link>
            </div>

            <div className="hero-trust">
              <div className="avatar-group">
                <span>✓</span>
                <span>✓</span>
                <span>✓</span>
              </div>

              <div>
                <strong>Trusted local craftsmanship</strong>
                <small>Serving Patna with quality work</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="main-photo-card">
              <img
                src={img1}
                alt="Modern interior design"
              />
            </div>

            <div className="floating-card">
              <strong>Quality Workmanship</strong>
              <span>Built to last</span>
            </div>

            <div className="mini-badge">
              <span>●</span>

              <div>
                <strong>Serving Patna</strong>
                <a
                  href="https://maps.app.goo.gl/trL4RvkWbsmeb6Ew5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <small>Sipara • Indrapuri — Open Map</small>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-strip">
          <div className="container hero-strip-inner">
            <span>Premium Materials</span>
            <span>Custom Design</span>
            <span>Expert Installation</span>
            <span>Transparent Quotation</span>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="container intro-grid">
          <div className="section-label">WHO WE ARE</div>

          <div>
            <h2>
              Spaces made better
              <br />
              <em>with honest craftsmanship.</em>
            </h2>

            <p>
              Welcome to <strong>Rajsya Aluminium & Furniture Works</strong>.
              Based in Sipara, Patna, hum architectural aluminium fabrication,
              structural glass fittings aur custom interior carpentry provide
              karte hain — sab ek hi roof ke neeche.
            </p>

            <p>
              Manoj Sharma ji ke craftsmanship aur modern fitting techniques ke
              saath hum durable sliding windows, toughened railings, modular
              kitchens aur custom woodwork banate hain jo aapke space, style aur
              budget ke according hota hai.
            </p>

            <Link to="/about" className="text-link">
              Know more about us →
            </Link>
          </div>
        </div>

        <div className="container stat-row">
          <div className="stat-box">
            <strong>01</strong>
            <span>Trusted local craftsmanship</span>
          </div>

          <div className="stat-box">
            <strong>100%</strong>
            <span>Transparent quotation</span>
          </div>

          <div className="stat-box">
            <strong>∞</strong>
            <span>Custom designs</span>
          </div>

          <div className="stat-box">
            <strong>Patna</strong>
            <span>Quick local service</span>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">WHAT WE DO</div>

            <h2>
              Complete solutions.
              <br />
              <em>One trusted team.</em>
            </h2>
          </div>

          <div className="service-grid">
            {services.slice(0, 4).map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <ul>
                  {service.items.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="owner-spotlight">
        <div className="container owner-grid">
          <div className="owner-photo">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85"
              alt="Manoj Sharma"
            />

            <div className="owner-badge">
              <strong>Manoj Sharma</strong>
              <span>Founder & Master Craftsman</span>
            </div>
          </div>

          <div className="owner-copy">
            <div className="section-label">
              THE PERSON BEHIND THE WORK
            </div>

            <h2>
              Built on experience.
              <br />
              <em>Driven by detail.</em>
            </h2>

            <p>
              Rajsya Aluminium & Furniture Works ko quality, trust aur customer
              satisfaction ke vision ke saath develop kiya gaya hai. Har project
              mein detail, strength aur finishing par special focus rakha jata
              hai.
            </p>

            <div className="quote-box">
              <span>“</span>

              <p>
                Har customer ka space alag hota hai. Isliye hum ready-made
                solution nahi, balki sahi custom solution banate hain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">OUR WORK</div>

            <h2>
              Made with care.
              <br />
              <em>Finished with pride.</em>
            </h2>
          </div>

          <div className="gallery-grid">
            {galleryItems.slice(0, 6).map((item) => (
              <div key={item.title} className="gallery-item">
                <img src={item.image} alt={item.title} />

                <div className="gallery-overlay">
                  <span>{item.title}</span>
                  <b>↗</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <div className="section-label">LET’S BUILD SOMETHING</div>

            <h2>
              Need a custom solution
              <br />
              <em>for your space?</em>
            </h2>
          </div>

          <a
            href={whatsappUrl}
            className="button dark"
            target="_blank"
            rel="noreferrer"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;