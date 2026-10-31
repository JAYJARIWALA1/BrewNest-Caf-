import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#menu">
        Skip to menu
      </a>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
