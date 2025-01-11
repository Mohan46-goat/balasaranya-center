import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Expertise from './components/Expertise';
import About from './components/About';
import Resources from './components/Resources';
import FAQs from './components/FAQs';
import Ourfocus from './components/Ourfocus';
import Contact from './components/Contact';
import Admission from './components/Admission';
import Home from './components/Home';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/ourfocus" element={<Ourfocus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/expertise" element={<Expertise />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;