"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="header"
      style={{ boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.1)" : undefined }}
    >
      <div className="container nav-container">
        <a href="#" className="logo">
          <span className="logo-text">HANSE AURUM</span>
        </a>
        <nav className={`nav${navOpen ? " active" : ""}`}>
          <a href="#home" className="nav-link" onClick={() => setNavOpen(false)}>Start</a>
          <a href="#about" className="nav-link" onClick={() => setNavOpen(false)}>Über uns</a>
          <a href="#leistungen" className="nav-link" onClick={() => setNavOpen(false)}>Leistungen</a>
          <a href="#immobilien" className="nav-link" onClick={() => setNavOpen(false)}>Immobilien</a>
          <a href="#kontakt" className="nav-link" onClick={() => setNavOpen(false)}>Kontakt</a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Menü öffnen"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
