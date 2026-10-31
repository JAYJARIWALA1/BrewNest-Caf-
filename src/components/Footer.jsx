import { CAFE, NAV_LINKS } from "../data/cafeInfo.js";
import Logo from "./Logo.jsx";
import "./Footer.css";

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <path d="M14 8h2.5V4.5H14A4 4 0 0 0 10 8.5V11H7.5v3.5H10V21h3.5v-6.5H16l.5-3.5h-3V8.8c0-.5.2-.8.5-.8z" />,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com",
    icon: <path d="M4 4l16 16M20 4L4 20" />,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="footer__logo" href="#home">
            <Logo size={30} />
            <span>{CAFE.name}</span>
          </a>
          <p>{CAFE.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <h3>Quick links</h3>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3>Follow us</h3>
          <ul className="footer__social">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {s.icon}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {CAFE.name}. All rights reserved. Demo website with
          fictional business details.
        </p>
      </div>
    </footer>
  );
}
