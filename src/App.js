import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
import OurTeam from "./pages/OurTeam";
//import Services from './pages/Services';
import Footer from './components/Footer';
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";


function App() {

return (
 <Router>
      <Header />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
export default App;
