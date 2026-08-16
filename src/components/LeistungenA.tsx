export default function LeistungenA() {
  const services = [
    {
      title: "Ankauf",
      text: "Unkompliziert, professionell und schnell. Wir kaufen Ein- und Mehrfamilienh\u00e4user und weitere Anlageimmobilien.",
      img: "/assets/images/ec2bec_84b824973d5d4d8dbcd8e92f3ceddf8f.jpeg",
    },
    {
      title: "Sanierung & Modernisierung",
      text: "Wir schaffen Wohnraum mit Substanz und Qualit\u00e4tsanspruch. Ob Wohnung, Haus oder ganze Mehrfamilienh\u00e4user.",
      img: "/assets/images/ec2bec_3e387b0565854c748cebb2c44e4ce57e.jpeg",
    },
    {
      title: "Verkauf",
      text: "Freuen Sie sich \u00fcber den Erwerb unserer sanierten Immobilien. Dies ist unser Anspruch!",
      img: "/assets/images/ec2bec_c0c3af6a27f74794a4d08526172c6f10.jpeg",
    },
  ];

  return (
    <section className="section" id="leistungen">
      <div className="container">
        <h2 className="section-title">LEISTUNGEN</h2>
        <div className="var-a-grid">
          {services.map((s) => (
            <div className="var-a-card" key={s.title}>
              <img src={s.img} alt={s.title} className="var-a-card__img" />
              <div className="var-a-card__overlay">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href="#kontakt" className="link-btn light">Mehr erfahren &gt;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
