const mapUrl = "https://maps.app.goo.gl/trL4RvkWbsmeb6Ew5";

const phoneUrl = "tel:+919334497202";

function About() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <div className="section-label">ABOUT THE FOUNDER</div>
          <h1>Experience, skill and trust behind every project.</h1>
        </div>

        <div className="founder-profile">
          <div className="founder-photo">
            <img
              src="/images/manoj-sharma.jpg"
              alt="Manoj Sharma - Founder of Rajsya Aluminium and Furniture Works"
            />
          </div>

          <div className="founder-content">
            <div className="section-label">MANOJ SHARMA</div>

            <h2>
              The person behind
              <br />
              <em>Rajsya Aluminium & Furniture Works.</em>
            </h2>

            <p>
              Manoj Sharma ji Rajsya Aluminium & Furniture Works ke founder aur
              master craftsman hain. Unke experience, practical knowledge aur
              quality-focused approach ke through Patna mein customers ko
              aluminium, glass aur furniture ke reliable solutions provide kiye
              jaate hain.
            </p>

            <p>
              Unka focus sirf kaam complete karna nahi, balki har project mein
              proper measurement, strong fitting, clean finishing aur long-term
              durability dena hai. Isi wajah se har customer ke requirement,
              space aur budget ko samajhkar solution prepare kiya jata hai.
            </p>

            <a href={phoneUrl} className="button dark">
              Call Manoj Sharma
            </a>
          </div>
        </div>

        <div className="founder-stats">
          <div className="founder-stat">
            <strong>[30+]</strong>
            <span>Years of practical experience</span>
          </div>

          <div className="founder-stat">
            <strong>4</strong>
            <span>Major service categories</span>
          </div>

          <div className="founder-stat">
            <strong>Patna</strong>
            <span>Local service area</span>
          </div>

          <div className="founder-stat">
            <strong>100%</strong>
            <span>Customer-focused work</span>
          </div>
        </div>

        <div className="story-section">
          <div>
            <div className="section-label">OUR BUSINESS STORY</div>
            <h2>
              From skilled workmanship
              <br />
              <em>to complete space solutions.</em>
            </h2>
          </div>

          <div className="story-content">
            <p>
              Rajsya Aluminium & Furniture Works, Sipara Pul, Indrapuri, Patna
              mein located ek family-run business hai. Yahan aluminium
              fabrication, structural glass fittings aur interior carpentry ka
              kaam ek hi roof ke neeche kiya jata hai.
            </p>

            <p>
              Residential homes, offices, clinics, shops aur commercial spaces
              ke liye custom work prepare kiya jata hai. Sliding windows,
              aluminium doors, glass railings, partitions, modular kitchens,
              wardrobes, beds, TV units aur repairing services hamare kaam ka
              hissa hain.
            </p>

            <p>
              Har project ke liye pehle requirement samjhi jaati hai, phir
              measurement, material suggestion, quotation aur installation ka
              process complete kiya jata hai.
            </p>
          </div>
        </div>

        <div className="expertise-section">
          <div className="section-heading">
            <div className="section-label">THE EXPERTISE BEHIND EVERY SPACE</div>
            <h2>
              Complete knowledge from
              <br />
              <em>measurement to installation.</em>
            </h2>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card">
              <span>01</span>
              <h3>Aluminium Fabrication</h3>
              <p>
                Sliding windows, doors, casement windows, mesh systems,
                partitions aur bathroom doors ki planning aur fitting.
              </p>
            </div>

            <div className="expertise-card">
              <span>02</span>
              <h3>Glass Fittings</h3>
              <p>
                Toughened glass railings, frameless doors, shower partitions
                aur modern elevation solutions.
              </p>
            </div>

            <div className="expertise-card">
              <span>03</span>
              <h3>Custom Furniture</h3>
              <p>
                Modular kitchens, wardrobes, beds, TV units, study tables aur
                custom wooden furniture.
              </p>
            </div>

            <div className="expertise-card">
              <span>04</span>
              <h3>Repair & Maintenance</h3>
              <p>
                Window rollers, mesh, locks, glass, drawer channels, hinges aur
                furniture repairing ka practical support.
              </p>
            </div>
          </div>
        </div>

        <div className="promise-section">
          <div className="promise-content">
            <div className="section-label">OUR PROMISE</div>

            <h2>
              Honest advice.
              <br />
              <em>Strong work. Happy customers.</em>
            </h2>

            <p>
              Manoj Sharma ji ka aim hai ki har customer ko clear information,
              suitable material, transparent quotation aur durable finishing
              mile. Agar aapko free on-site measurement aur quotation chahiye,
              to directly contact karein.
            </p>

            <div className="promise-actions">
              <a href={phoneUrl} className="button dark">
                Call: 93344 97202
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button location-button"
              >
                Open Shop Location <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;