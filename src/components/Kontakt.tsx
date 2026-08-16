"use client";

import { FormEvent } from "react";

export default function Kontakt() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Vielen Dank f\u00fcr Ihre Nachricht! Wir melden uns in K\u00fcrze bei Ihnen.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="section" id="kontakt">
      <div className="container">
        <h2 className="section-title">KONTAKT</h2>
        <div className="contact-grid">
          <div className="contact-left">
            <h3>Fragen</h3>
            <p>F{"\u00fc"}r Fragen rufen Sie uns unter +49 (0) 406 077 46 611 an oder f{"\u00fc"}llen Sie das Kontaktformular aus.</p>
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
            <p>B{"\u00fc"}ro:<br />Lusinger CH 125, 22761 Hamburg<br />Geflacker 6</p>
            <p>Firmenanschrift:<br />Gayens Weg 12b, 22761 Hamburg</p>
            <p>info@hanseaurum.de<br />Tel.: +49 (0) 406 077 46 611</p>
            <h3>F{"\u00fc"}r Angebote: +49 (0) 40607746611</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
