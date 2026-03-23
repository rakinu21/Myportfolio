import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Loader from './components/Loader/Loader.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import GraphicDesign from './pages/GraphicDesign.jsx'
import Contact from './pages/Contact.jsx'
import AIChat from './components/AIChat/AIChat.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000); // 2s loader
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return <Loader loaded={loaded} />;
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/graphics" element={<GraphicDesign />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <AIChat />
        <Footer />
      </div>
    </Router>
  )
}

export default App
