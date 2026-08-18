import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Impressum() {
  return (
    <>
      <Header />
      <section className="section legal-page" style={{ paddingTop: "140px" }}>
        <div className="container">
          <h1 className="section-title">IMPRESSUM</h1>
          <div className="legal-content">
            <h3>J&amp;S Hanse Aurum GmbH</h3>
            <p>Gayens Weg 12b<br />22761 Hamburg</p>

            <p>Handelsregister: 193371<br />Registergericht: Hamburg</p>

            <p><strong>Vertreten durch:</strong><br />Jonathan Schill und Eugen Jauk</p>

            <h3>Kontakt</h3>
            <p>Telefon: <a href="tel:+4940607746611">+49 (0)40 6077 46 611</a><br />E-Mail: <a href="mailto:info@hanseaurum.de">info@hanseaurum.de</a></p>

            <h3>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

            <p className="legal-source">Quelle: e-recht24.de</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}