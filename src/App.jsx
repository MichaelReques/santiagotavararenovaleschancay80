import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Vehiculos from "./pages/Vehiculos";
import Organigrama from "./pages/Organigrama";
import Postula from "./pages/Postula";
import Admin from "./pages/Admin";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


  

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/organigrama" element={<Organigrama />} />
          <Route path="/postula" element={<Postula />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}