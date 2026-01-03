import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AttractionDetail from "./pages/AttractionDetail";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import TrackTrip from "./pages/TrackTrip";
import BookSlot from "./pages/BookSlot";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/track-trip" element={<TrackTrip />} />
        <Route path="/book-slot" element={<BookSlot />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/attraction/:id" element={<AttractionDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
