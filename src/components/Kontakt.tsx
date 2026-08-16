"use client";

import { FormEvent } from "react";

export default function Kontakt() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="section section-alt" id="kontakt">
      <div className="container">
        <h2 className="section-title">Kontakt</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>J&amp;S Hanse Aurum GmbH</h3>
            <p>Gayens Weg 12b<br />22761 Hamburg</p>
            <p><strong>Telefon:</strong> <a href="tel:+494060774611">+49 40 / 607746611</a></p>
            <p><strong>E-Mail:</strong> <a href="mailto:info@hanseaurum.de">info@hanseaurum.de</a></p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Ihr Name" required />
            <input type="email" placeholder="Ihre E-Mail" required />
            <input type="text" placeholder="Betreff" />
            <textarea placeholder="Ihre Nachricht" rows={5} required></textarea>
            <button type="submit" className="btn btn-primary">Nachricht senden</button>
          </form>
        </div>
      </div>
    </section>
  );
}
