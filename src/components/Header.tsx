"use client";

import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="header" id="header">
      <div className="container nav-container">
        <a href="#" className="logo">
          <img src="/assets/images/ec2bec_04f7116ff8414db4b528e6c04824a3a3.jpeg" alt="Hanse Aurum" className="logo-img" />
        </a>
        <nav className={`nav${navOpen ? " active" : ""}`} id="nav">
          <a href="#leistungen" className="nav-link" onClick={() => setNavOpen(false)}>LEISTUNGEN</a>
          <a href="#about" className="nav-link" onClick={() => setNavOpen(false)}>{"\u00dcBER UNS"}</a>
          <a href="#referenzprojekte" className="nav-link" onClick={() => setNavOpen(false)}>REFERENZPROJEKTE</a>
          <a href="#kontakt" className="nav-link" onClick={() => setNavOpen(false)}>KONTAKT</a>
        </nav>
        <button className="nav-toggle" aria-label="Men\u00fc \u00f6ffnen" onClick={() => setNavOpen(!navOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
