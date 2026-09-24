const mapUrl = "https://maps.app.goo.gl/trL4RvkWbsmeb6Ew5";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/YOUR_FACEBOOK_USERNAME/",
  },
  {
    name: "X / Twitter",
    url: "https://x.com/YOUR_X_USERNAME",
  },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#172e27] text-[#f8f3eb]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#edc1a3]/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-[#edc1a3]/10" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-20">
          {/* Brand */}
          <div>
            <a href="/" className="group inline-flex items-center gap-4">
              <span className="grid h-[68px] w-[68px] place-items-center rounded-full border border-[#edc1a3]/70 font-serif text-4xl text-[#edc1a3] transition duration-300 group-hover:bg-[#edc1a3] group-hover:text-[#172e27]">
                R
              </span>

              <span>
                <strong className="block font-serif text-3xl tracking-[0.08em] text-white">
                  RAJSYA
                </strong>

                <small className="mt-2 block text-[10px] tracking-[0.22em] text-[#b9c6bd]">
                  ALUMINIUM & FURNITURE
                </small>
              </span>
            </a>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#b9c6bd]">
              Premium aluminium fabrication, glass work and custom furniture
              solutions for homes, offices and commercial spaces in Patna.
            </p>

            <a
              href="tel:+919334497202"
              className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#edc1a3] transition hover:text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-[#edc1a3]/40">
                ☎
              </span>
              93344 97202
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#edc1a3]">
              Explore
            </p>

            <nav className="grid gap-4 text-sm text-[#d7e0d9]">
              <a className="transition hover:translate-x-1 hover:text-[#edc1a3]" href="/">
                Home
              </a>
              <a className="transition hover:translate-x-1 hover:text-[#edc1a3]" href="/services">
                Services
              </a>
              <a className="transition hover:translate-x-1 hover:text-[#edc1a3]" href="/about">
                About Us
              </a>
              <a className="transition hover:translate-x-1 hover:text-[#edc1a3]" href="/gallery">
                Our Gallery
              </a>
              <a className="transition hover:translate-x-1 hover:text-[#edc1a3]" href="/contact">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#edc1a3]">
              Visit Our Workshop
            </p>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-[#edc1a3]/50 hover:bg-white/[0.08]"
            >
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#edc1a3] text-lg text-[#172e27]">
                  ⌖
                </span>

                <span>
                  <strong className="block text-sm text-white">
                    Rajsya Aluminium & Furniture Works
                  </strong>

                  <span className="mt-2 block text-sm leading-6 text-[#b9c6bd]">
                    Sipara Pul, Indrapuri,
                    <br />
                    Patna, Bihar
                  </span>

                  <span className="mt-3 inline-block text-xs font-semibold text-[#edc1a3]">
                    Open exact location
                    <span className="ml-1 transition group-hover:ml-2">↗</span>
                  </span>
                </span>
              </div>
            </a>

            <a
              href="https://wa.me/919334497202"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#20b968] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#20b968]/20 transition hover:-translate-y-1 hover:bg-[#26ce75]"
            >
              <span className="text-lg">◉</span>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Social row */}
        <div className="flex flex-col gap-5 border-b border-white/10 py-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-[#b9c6bd]">
              Follow our latest work and projects
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-[#d7e0d9] transition hover:border-[#edc1a3] hover:bg-[#edc1a3] hover:text-[#172e27]"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <a
            href="tel:+919334497202"
            className="text-sm font-semibold text-[#edc1a3] transition hover:text-white"
          >
            Call now for free quotation →
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 py-6 text-xs text-[#91a59a] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Rajsya Aluminium & Furniture Works.
            All rights reserved.
          </p>

          <p>
            Designed & developed by{" "}
            <strong className="text-[#edc1a3]">Ritik Anand</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;