import { useState } from "react";
import { MENU } from "../data/menuData.js";
import SmartImage from "./SmartImage.jsx";
import "./Menu.css";

const formatPrice = (value) => `₹${value}`;

export default function Menu() {
  const [activeId, setActiveId] = useState(MENU[0].id);
  const category = MENU.find((c) => c.id === activeId);

  return (
    <section id="menu" className="section menu" aria-labelledby="menu-title">
      <div className="container">
        <div className="section__head">
          <h2 id="menu-title">Fresh from our counter</h2>
          <p>Brewed, baked and plated to order. Pick a category to see what is on today.</p>
        </div>

        <div className="menu__tabs" role="group" aria-label="Menu categories">
          {MENU.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`menu__tab ${c.id === activeId ? "is-active" : ""}`}
              aria-pressed={c.id === activeId}
              onClick={() => setActiveId(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <ul className="menu__grid" key={category.id}>
          {category.items.map((item) => (
            <li key={item.id} className="menu-card">
              <div className="menu-card__media">
                <SmartImage src={item.image} alt={item.name} className="menu-card__img" />
              </div>
              <div className="menu-card__body">
                <div className="menu-card__row">
                  <h3>{item.name}</h3>
                  <span className="menu-card__price">{formatPrice(item.price)}</span>
                </div>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
