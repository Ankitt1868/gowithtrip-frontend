import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import attractions from "../Data/attractions";

function AttractionDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const attraction = attractions.find((item) => item.id === id);

    const [slide, setSlide] = useState(0);

    useEffect(() => {
        if (!attraction?.gallery) return;

        const timer = setInterval(() => {
            setSlide((prev) => (prev + 1) % attraction.gallery.length);
        }, 3500);

        return () => clearInterval(timer);
    }, [attraction]);

    if (!attraction) {
        return (
            <div style={{ padding: "100px", textAlign: "center" }}>
                <h2>Attraction not found</h2>
            </div>
        );
    }

    return (
        <>
            {/* ===== HERO ===== */}
            <section
                className="detail-hero"
                style={{ backgroundImage: `url(${attraction.image})` }}
            >
                <div className="detail-overlay">
                    <div className="detail-hero-content">
                        <p className="breadcrumb">
                            <span onClick={() => navigate("/")}>Home</span> / Attractions /{" "}
                            {attraction.title}
                        </p>

                        <h1>{attraction.title}</h1>

                        <button
                            className="primary-btn"
                            onClick={() => navigate("/book-slot")}
                        >
                            Book Yatra for This Place
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== CONTENT ===== */}
            <section className="detail-section">
                <div className="detail-container">
                    {/* LEFT CONTENT */}
                    <div className="detail-main">
                        <h2>About {attraction.title}</h2>
                        <p>{attraction.description}</p>

                        <div className="detail-highlights">
                            <div className="highlight-box">🛕 Spiritual Importance</div>
                            <div className="highlight-box">📍 Prayagraj Location</div>
                            <div className="highlight-box">🙏 Devotional Experience</div>
                            <div className="highlight-box">📸 Photography Friendly</div>
                        </div>

                        {/* ===== GALLERY SLIDER ===== */}
                        {attraction.gallery && attraction.gallery.length > 0 && (
                            <section className="gallery-section">
                                <h2>Photo Gallery</h2>

                                <div className="gallery-slider">
                                    <button
                                        className="nav-arrow left"
                                        onClick={() =>
                                            setSlide(
                                                (prev) =>
                                                    (prev - 1 + attraction.gallery.length) %
                                                    attraction.gallery.length
                                            )
                                        }
                                    >
                                        ‹
                                    </button>

                                    <img
                                        src={attraction.gallery[slide]}
                                        alt="Gallery"
                                        className="gallery-image"
                                    />

                                    <button
                                        className="nav-arrow right"
                                        onClick={() =>
                                            setSlide(
                                                (prev) => (prev + 1) % attraction.gallery.length
                                            )
                                        }
                                    >
                                        ›
                                    </button>
                                </div>

                                {/* THUMBNAILS */}
                                <div className="gallery-thumbs">
                                    {attraction.gallery.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt="thumb"
                                            className={slide === index ? "active" : ""}
                                            onClick={() => setSlide(index)}
                                        />
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* ===== MAP ===== */}
                        <div className="map-section">
                            <h2>Location</h2>

                            <div className="map-wrapper">
                                <iframe
                                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                                        attraction.locationQuery
                                    )}&output=embed`}
                                    width="100%"
                                    height="380"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    title="Google Map"
                                ></iframe>

                                <div className="map-marker">📍</div>
                            </div>

                            {/* DIRECTIONS */}
                            <div className="map-actions">
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                                        attraction.locationQuery
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="directions-btn"
                                >
                                    📍 Get Directions on Google Maps
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <aside className="detail-sidebar">
                        <div className="sidebar-card">
                            <h3>Need Help Planning?</h3>
                            <p>
                                Get personalized spiritual travel planning for Mahakumbh &
                                Prayagraj attractions.
                            </p>

                            <button
                                className="secondary-btn"
                                onClick={() => navigate("/contact")}
                            >
                                Contact Our Team
                            </button>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
}

export default AttractionDetail;
