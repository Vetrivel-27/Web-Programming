import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';
import './Styles.css';
function App() {
  const [load, updateLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 120);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Preloader load={load} />
      <Navbar navigateTo={setCurrentPage} />
      {currentPage === 'home' ? <Home /> : currentPage === 'contact' ? <Contact /> : currentPage === 'about' ? <About /> : <Skills />}
      <Footer />
    </div>
  );
}

export default App;
