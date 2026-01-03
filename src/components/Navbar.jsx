import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* TOP INFO BAR */}
      <div className={`top-bar ${scrolled ? "top-hide" : ""}`}>
        <span>📞 +91 9555431143</span>
        <span>✉️ info@gowithtrip.com</span>
      </div>

      {/* MAIN NAVBAR */}
      <header className={`navbar glass-nav ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="logo">
          GoWithTrip
          <span>Spiritual Travel</span>
        </div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/track-trip" className="nav-link">Track Trip</Link>
          <Link to="/book-slot" className="nav-btn">
            Book Now
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
