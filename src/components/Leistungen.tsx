const services = [
  { icon: "🔧", title: "Wasser- & Heizungsleitungen", desc: "Komplette Erneuerung aller Wasser- und Heizungsleitungen" },
  { icon: "⚡", title: "Elektroleitungen", desc: "Fachgerechte Neuverlegung der gesamten Elektrik" },
  { icon: "🌡️", title: "Heizungsanlage", desc: "Installation moderner, energieeffizienter Heizsysteme" },
  { icon: "🏠", title: "Dämmung von Außenwänden", desc: "Professionelle Wärmedämmung für optimale Energieeffizienz" },
  { icon: "🏗️", title: "Dachbeschichtung", desc: "Hochwertige Dachbeschichtung für langfristigen Schutz" },
  { icon: "🪵", title: "Böden & Fliesen", desc: "Verlegung von hochwertigen Vinyldesign-Böden und Fliesen" },
  { icon: "🚿", title: "Sanitär", desc: "Hochwertige Sanitärobjekte und Armaturen von Bächlein, Belaqua, Duravit, Geberit" },
  { icon: "🔌", title: "E-Mobilität", desc: "Installation von Starkstromsteckdosen als Vorbereitung für mobile Wallboxen" },
  { icon: "🖌️", title: "Wände & Putz", desc: "Neuverputzen und Weißen von Wänden für ein frisches Erscheinungsbild" },
];

export default function Leistungen() {
  return (
    <section className="section section-alt" id="leistungen">
      <div className="container">
        <h2 className="section-title">Unsere Leistungen</h2>
        <p className="section-intro">
          Bei unseren Sanierungen legen wir höchsten Wert auf Qualität und Nachhaltigkeit. Folgende Arbeiten gehören zu unserem Standard:
        </p>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
