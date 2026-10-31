import { unsplash } from "../data/cafeInfo.js";
import SmartImage from "./SmartImage.jsx";
import "./About.css";

const PERKS = [
  "Quiet corners and plug points for study sessions",
  "Big tables for friends and group catch-ups",
  "Beans ground fresh for every single cup",
];

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__media">
          <SmartImage
            className="about__img about__img--main"
            src={unsplash("photo-1445116572660-236099ec97a0", 1000)}
            alt="Guests relaxing at tables inside BrewNest Café"
          />
          <SmartImage
            className="about__img about__img--inset"
            src={unsplash("photo-1495474472287-4d71bcdd2085", 600)}
            alt="A cup of coffee on a wooden table"
          />
        </div>

        <div className="about__text">
          <h2 id="about-title">A cozy place for coffee lovers, students and friends</h2>
          <p>
            BrewNest began in 2019 when two college friends in Surat got tired of searching for
            a place that was calm enough to study in and friendly enough to stay in. So they
            built one: warm lights, good coffee and a table for everyone.
          </p>
          <p>
            Today we are the neighbourhood spot for first dates, exam weeks, work-from-café
            afternoons and Sunday catch-ups. Come in for a quick espresso or stay until closing.
            Nobody will rush you.
          </p>
          <ul className="about__perks">
            {PERKS.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
