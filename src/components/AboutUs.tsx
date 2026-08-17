const founders = [
  {
    name: "Eugen Jauk",
    role: "Gr\u00fcnder & Gesch\u00e4ftsf\u00fchrer",
    img: "/assets/images/ec2bec_70d73700d94a433bbe566d709c0c6527.jpeg",
  },
  {
    name: "Jonathan Schill",
    role: "Gr\u00fcnder & Gesch\u00e4ftsf\u00fchrer",
    img: "/assets/images/ec2bec_496656a2d322413db0e59f441d51cd5f.jpeg",
  },
];

export default function AboutUs() {
  return (
    <section className="section section-dark" id="about">
      <div className="container">
        <div className="about-split">
          <div className="about-split__text">
            <h2 className="section-title light">{"\u00dcBER UNS"}</h2>
            <p><strong>Hanse Aurum</strong> steht f{"\u00fc"}r die professionelle Entwicklung, Sanierung und den An- u. Verkauf von Immobilien.</p>
            <p>Als erfahrene Gr{"\u00fc"}nder und Gesch{"\u00e4"}ftsf{"\u00fc"}hrer bringen wir, Eugen Jauk und Jonathan Schill, nicht nur Fachwissen sondern auch Leidenschaft f{"\u00fc"}r Immobilien mit.</p>
            <p>Was einst als gemeinsames Hobby begann, ist heute ein erfolgreiches Unternehmen mit klaren Werten: Zuverl{"\u00e4"}ssigkeit, Planbarkeit, Seriosit{"\u00e4"}t und ein respektvoller Umgang auf Augenh{"\u00f6"}he.</p>
            <p>Unser Ziel ist es, nachhaltige Werte zu schaffen und Immobilien in neuem Glanz erstrahlen zu lassen.</p>
          </div>
          <div className="about-split__founders">
            {founders.map((f) => (
              <div className="about-split__founder" key={f.name}>
                <img src={f.img} alt={f.name} />
                <span>{f.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat__number">2025</span>
            <span className="about-stat__label">gegr&uuml;ndet</span>
          </div>
          <div className="about-stat">
            <span className="about-stat__number">3</span>
            <span className="about-stat__label">aktuelle Projekte</span>
          </div>
          <div className="about-stat">
            <span className="about-stat__number">15</span>
            <span className="about-stat__label">abgeschlossene Projekte</span>
          </div>
        </div>
      </div>
    </section>
  );
}