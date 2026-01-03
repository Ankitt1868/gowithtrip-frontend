
import { useState } from "react";
import emailjs from "@emailjs/browser";
// import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_4mzkcbh",
      "template_dnwlfyt",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      },
      "JmmY9D8KRCEhE1lUD"
    )
    .then(() => {
      alert("Message sent successfully 🙏");
      setFormData({ name:"", email:"", phone:"", subject:"", message:"" });
    })
    .catch(() => alert("Failed to send message ❌"));
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT FORM */}
        <form className="contact-form" onSubmit={sendEmail}>
          <h2>Send Us a Message</h2>

          <input name="name" placeholder="Your Name *" required
            value={formData.name} onChange={handleChange} />

          <input name="email" type="email" placeholder="Your Email *" required
            value={formData.email} onChange={handleChange} />

          <input name="phone" placeholder="Phone Number"
            value={formData.phone} onChange={handleChange} />

          <input name="subject" placeholder="Subject *" required
            value={formData.subject} onChange={handleChange} />

          <textarea name="message" placeholder="Your Message *" required
            value={formData.message} onChange={handleChange} />

          <button type="submit">Send Message</button>
        </form>

        {/* RIGHT INFO */}
        <div className="contact-info">
          <div className="info-card">
            <span>📧</span>
            <div>
              <h4>Email</h4>
              <p>info@gowithtrip.com</p>
            </div>
          </div>

          <div className="info-card">
            <span>📞</span>
            <div>
              <h4>Phone</h4>
              <p>+91 9555431143</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;


