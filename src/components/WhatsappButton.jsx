function WhatsAppButton() {
  const phone = "919334497202";

  const message = encodeURIComponent(
    "Namaste Rajsya Aluminium & Furniture Works, mujhe free on-site measurement aur quotation chahiye."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label="WhatsApp contact"
    >
      <span>◉</span>
      <small>WhatsApp</small>
    </a>
  );
}

export default WhatsAppButton;