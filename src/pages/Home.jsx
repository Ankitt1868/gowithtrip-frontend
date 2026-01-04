import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import attractions from "../Data/attractions";

function Home() {

  const navigate = useNavigate();
  const heroImages = [
  "/images/hero1.jpeg",
  "/images/hero2.jpeg",
  "/images/hero3.jpeg",
  "/images/hero4.jpeg",
  "/images/hero5.jpeg",
];


  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= HERO SLIDER ================= */}
      <section
        className="hero-slider"
        style={{ backgroundImage: `url(${heroImages[current]})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Mahakumbh & Magh Mela Prayagraj 2026</h1>
            <p>
              Official spiritual tours, tent stays, cab services and
              senior-friendly yatra planning at Triveni Sangam.
            </p>

            <div className="hero-badges">
              <span>World’s Largest Spiritual Gathering</span>
              <span>Sacred Triveni Sangam</span>
            </div>

            <a href="/book-slot" className="primary-btn">
              Book Your Yatra
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section">
        <h2>Our Spiritual Services</h2>

        <div className="card-grid">
          <div className="card">🛕 Temple & Tirth Yatra Packages</div>
          <div className="card">⛺ Premium Tent Accommodation</div>
          <div className="card">🚖 Cab & Local Travel Services</div>
        </div>
      </section>

      {/* ================= FEATURED UPDATES ================= */}
  <section className="featured-section">
  <h2>Latest Mahakumbh 2026 Updates</h2>
  <p className="featured-sub">
    Verified announcements & on-ground preparations
  </p>

  <div className="featured-grid">
    {attractions.map((item) => (
      <div
        key={item.id}
        className="featured-card attraction-click"
        role="button"
        tabIndex={0}
        onClick={() => navigate(`/attraction/${item.id}`)}
        onKeyDown={(e) => e.key === "Enter" && navigate(`/attraction/${item.id}`)}
      >
        <img src={item.image} alt={item.title} loading="lazy" />
        <span className="tag">Explore</span>
        <h3>{item.title}</h3>
      </div>
    ))}

    {/* STATIC FEATURED ITEMS */}
    <div className="featured-card">
      <img src="/images/hero3.jpeg" />
      <span className="tag">Update</span>
      <h3>Saints & Akhada Camps</h3>
    </div>

    <div className="featured-card">
      <img src="/images/hero2.jpeg" />
      <span className="tag">Update</span>
      <h3>Shahi Snan Dates Announced</h3>
    </div>
  </div>
</section>





      {/* ================= MUST VISIT ATTRACTIONS ================= */}
      <section className="attractions-section">
        <div className="section-header">
          <h2>Must-Visit-Attractions</h2>
          <p>Explore the sacred and historic sites of Prayagraj</p>
        </div>

        <div className="attractions-grid">
          <div className="attraction-card">
            <img src="./src/assets/Images/look1.jpg" />
            <div className="attraction-overlay">
              <h3>Shankar Viman Mandapam</h3>
            </div>
          </div>

          <div className="attraction-card">
            <img src="./src/assets/Images/look2.jpg" />
            <div className="attraction-overlay">
              <h3>Akshayavat Temple, Prayagraj</h3>
            </div>
          </div>

          <div className="attraction-card">
            <img src="./src/assets/Images/look3.jpg" />
            <div className="attraction-overlay">
              <h3>Bade Hanuman Ji Mandir</h3>
            </div>
          </div>

          <div className="attraction-card">
            <img src="./src/assets/Images/look4.webp" />
            <div className="attraction-overlay">
              <h3>Famous Ghats of Prayagraj</h3>
            </div>
          </div>

          <div className="attraction-card">
            <img src="./src/assets/Images/look5.jpg" />
            <div className="attraction-overlay">
              <h3>Bharadwaj Ashram</h3>
            </div>
          </div>

          <div className="attraction-card">
            <img src="./src/assets/Images/look6.jpg" />
            <div className="attraction-overlay">
              <h3>Ganga Aarti, Prayagraj</h3>
            </div>
          </div>
        </div>
      </section>





      {/* ================= EXPERIENCES SECTION ================= */}
      <section className="experience-section">
        <div className="experience-header">
          <h2>Local Guides & Experiences</h2>
          <p>Explore Magh Mela tours with trusted local insights</p>
        </div>

        <div className="experience-grid">

          {/* CARD 1 */}
          <div className="experience-card">
            <img src="./src/assets/Images/e-card1.jpeg" />
            <div className="exp-meta">
              <span>🕒 4 H</span>
              <span>📍 Triveni Sangam</span>
            </div>
            <h3>Aghori Experience | Magh Mela 2026 Guide Tour</h3>
            <p>
              Experience the spiritual path of Aghori sadhus and their devotion
              towards Lord Shiva.
            </p>
            <div className="exp-footer">
              <strong>₹3,999</strong>
              <button>View Details</button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="experience-card">
            <img src="./src/assets/Images/e-card2.jpg" />
            <div className="exp-meta">
              <span>🕒 8 H</span>
              <span>📍 Triveni Sangam</span>
            </div>
            <h3>Photography Tour | Magh Mela Prayagraj</h3>
            <p>
              Capture the world's largest spiritual gathering with exclusive
              photography access.
            </p>
            <div className="exp-footer">
              <strong>₹7,999</strong>
              <button>View Details</button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="experience-card">
            <img src="./src/assets/Images/e-card3.webp" />
            <div className="exp-meta">
              <span>🕒 3 H</span>
              <span>📍 Triveni Sangam</span>
            </div>
            <h3>Naga Baba Experience | Magh Mela Guide Tour</h3>
            <p>
              Witness the powerful traditions of Naga Sadhus and their spiritual
              lifestyle.
            </p>
            <div className="exp-footer">
              <strong>₹5,999</strong>
              <button>View Details</button>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="experience-card">
            <img src="./src/assets/Images/e-card4.jpeg" />
            <div className="exp-meta">
              <span>🕒 2 H</span>
              <span>📍 Prayag Sangam</span>
            </div>
            <h3>Akhara Experience | Magh Mela 2026</h3>
            <p>
              Explore Akharas – the spiritual centers of devotion during Mahakumbh.
            </p>
            <div className="exp-footer">
              <strong>₹2,499</strong>
              <button>View Details</button>
            </div>
          </div>

        </div>
      </section>



      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section">
        <div className="contact-overlay">

          <div className="contact-grid">

            {/* BRAND */}
            <div className="contact-col">
              <h3 className="contact-logo">GoWithTrip</h3>
              <p className="contact-desc">
                Mahakumbh & Magh Mela 2026 ke liye trusted spiritual travel platform.
                Safe, senior-friendly aur well-planned yatras.
              </p>

              <div className="social-icons">
                <a href="#">📘</a>
                <a href="#">📸</a>
                <a href="#">▶️</a>
                <a href="#">💬</a>
              </div>
            </div>

            {/* ABOUT LINKS */}
            <div className="contact-col">
              <h4>About</h4>
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Vendor Registration</li>
              </ul>

              <button className="vendor-btn">Vendor Login</button>
            </div>

            {/* POLICIES */}
            <div className="contact-col">
              <h4>Terms & Policies</h4>
              <ul>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Cancellation Policy</li>
              </ul>
            </div>

            {/* CONTACT INFO */}
            <div className="contact-col">
              <h4>Contact</h4>
              <p>📍Naini, Prayagraj, Uttar Pradesh, India</p>
              <p>✉️ info@gowithtrip.com</p>
              <p>📞 +91 9555431143</p>
            </div>

          </div>

          <div className="contact-bottom">
            © 2026 GoWithTrip • Spiritual Travel India
          </div>

        </div>
      </section>







    </>
  );
}

export default Home;

