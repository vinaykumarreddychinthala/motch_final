import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Results from './pages/Results';
import About from './pages/About';
import Contact from './pages/Contact';
import VSL from './pages/VSL';
import ScrollToTop from './components/ScrollToTop';
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vsl" element={<VSL />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/results" element={<Results />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
