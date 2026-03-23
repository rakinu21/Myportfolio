import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Loader from './components/Loader/Loader.jsx'
import ThemeToggle from './components/ThemeToggle/ThemeToggle.jsx'

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
            <Route path="/graphics" element={<div><h2>Graphics Gallery Coming Soon</h2></div>} />
            <Route path="/contact" element={<div><h2>Contact Coming Soon</h2></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
