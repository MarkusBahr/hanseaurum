"use client";

import { FormEvent } from "react";

export default function Kontakt() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="section" id="kontakt">
      <div className="container">
        <h2 className="section-title">KONTAKT</h2>
        <div className="contact-grid">
          <div className="contact-left">
            <h3>Fragen</h3>
            <p>F{"ü"}r Fragen rufen Sie uns unter <a href="tel:+4940607746611">+49 (0)40 6077 46 611</a> an oder f{"ü"}llen Sie das Kontaktformular aus.</p>
            <h3>Kontakt</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Vorname" />
              <input type="text" placeholder="Nachname" />
              <input type="email" placeholder="E-Mail" />
              <input type="text" placeholder="Betreff" />
              <textarea placeholder="Ihre Nachricht" rows={5}></textarea>
              <button type="submit" className="submit-btn">Absenden</button>
            </form>
          </div>
          <div className="contact-right">
            <h3>Adresse</h3>
            <p>B{"ü"}ro:<br />Luruper Ch 125, 22761 Hamburg<br />Geb{"ä"}ude 6</p>
            <p>Firmenanschrift:<br />Gayens Weg 12b, 22761 Hamburg</p>
            <p><a href="mailto:info@hanseaurum.de">info@hanseaurum.de</a><br /><a href="tel:+4940607746611">Tel.: +49 (0)40 6077 46 611</a></p>
            <h3>F{"ü"}r Angebote: <a href="tel:+4940607746611">+49 (0)40 6077 46 611</a></h3>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.8!2d9.8853!3d53.5672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b185e4a4c8e8a1%3A0x1234567890abcdef!2sLuruper%20Chaussee%20125%2C%2022761%20Hamburg!5e0!3m2!1sde!2sde!4v1692000000000"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "8px", marginTop: "1rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
