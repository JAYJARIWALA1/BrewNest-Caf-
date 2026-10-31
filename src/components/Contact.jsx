import { useState } from "react";
import { CAFE, WHATSAPP_URL } from "../data/cafeInfo.js";
import "./Contact.css";

const ICONS = {
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
};

function Icon({ name }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

const INFO = [
  { icon: "pin", label: "Visit us", value: CAFE.address },
  { icon: "phone", label: "Call us", value: CAFE.phoneDisplay, href: `tel:${CAFE.phoneLink}` },
  { icon: "clock", label: "Opening hours", value: `Every day, ${CAFE.hours}` },
  { icon: "mail", label: "Email us", value: CAFE.email, href: `mailto:${CAFE.email}` },
];

const EMPTY_FORM = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [sentName, setSentName] = useState(null); // null = not submitted yet

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  // Demo only: nothing is sent anywhere. A real site would post this to a backend or form service.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSentName(form.name.trim() || "there");
    setForm(EMPTY_FORM);
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section__head">
          <h2 id="contact-title">Come say hello</h2>
          <p>Questions, group bookings or just want to know what is brewing? Reach out.</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <ul className="contact__list">
              {INFO.map((item) => (
                <li key={item.label}>
                  <span className="contact__icon">
                    <Icon name={item.icon} />
                  </span>
                  <div>
                    <h3>{item.label}</h3>
                    {item.href ? <a href={item.href}>{item.value}</a> : <p>{item.value}</p>}
                  </div>
                </li>
              ))}
            </ul>
            <a
              className="btn btn--whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us on WhatsApp
            </a>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <h3>Send us a message</h3>

            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
            />

            <button className="btn btn--primary" type="submit">
              Send message
            </button>

            <p className="contact__demo-note">
              Demo form: messages are not actually sent anywhere.
            </p>

            <div className="contact__success" role="status" aria-live="polite">
              {sentName !== null && (
                <p>
                  Thanks, {sentName}! This is a demo form, so your message was not actually sent.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
