import { useEffect, useState } from "react";
import { CAFE, unsplash } from "../data/cafeInfo.js";
import SmartImage from "./SmartImage.jsx";
import "./Hero.css";

// Is the café open right now? Uses Indian Standard Time so the demo is always accurate.
function isOpenNow() {
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      hourCycle: "h23",
      timeZone: "Asia/Kolkata",
    }).format(new Date())
  );
  return hour >= CAFE.openHour && hour < CAFE.closeHour;
}

export default function Hero() {
  const [open, setOpen] = useState(isOpenNow());

  useEffect(() => {
    const timer = setInterval(() => setOpen(isOpenNow()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <SmartImage
        className="hero__bg"
        src={unsplash("photo-1554118811-1e0d58224f24", 1800)}
        alt="Cozy café interior with warm lighting"
        eager
      />
      <div className="hero__overlay" />

      <div className="container hero__content">
        <p className={`hero__status ${open ? "is-open" : ""}`}>
          <span className="hero__dot" aria-hidden="true" />
          {open ? "Open now, until 10:00 PM" : "Closed now, opens at 9:00 AM"}
        </p>
        <h1 id="hero-title">{CAFE.name}</h1>
        <p className="hero__tagline">{CAFE.tagline}</p>
        <p className="hero__text">
          A cozy corner in Surat for slow mornings, study sessions and long catch-ups. Freshly
          brewed coffee, warm snacks and desserts made in-house, every day.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#menu">
            Explore Our Menu
          </a>
          <a className="btn btn--light" href="#contact">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
