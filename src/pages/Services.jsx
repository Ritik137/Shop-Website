import { services } from "../data/services";

function Services() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <div className="section-label">OUR SERVICES</div>
          <h1>Crafted for comfort, strength and style.</h1>
        </div>

        <div className="service-list">
          {services.map((service, index) => (
            <div className="service-row" key={service.id}>
              <div className="service-no">0{index + 1}</div>

              <div className="service-icon">{service.icon}</div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;