export default function LeistungenB() {
  const services = [
    {
      title: "Ankauf",
      text: "Sie m\u00f6chten Ihre Immobilie verkaufen? Wir sind zuverl\u00e4ssige und seri\u00f6se Ansprechpartner f\u00fcr den Ankauf von Wohnungen und Mehrfamilienh\u00e4usern \u2013 unkompliziert, professionell und schnell.",
      img: "/assets/images/ec2bec_84b824973d5d4d8dbcd8e92f3ceddf8f.jpeg",
    },
    {
      title: "Sanierung & Modernisierung",
      text: "Wir modernisieren, renovieren und sanieren. Ob Wohnung, Haus oder gesamtes Mehrfamilienhaus. Wir schaffen Wohnraum mit Substanz und Qualit\u00e4tsanspruch.",
      img: "/assets/images/ec2bec_3e387b0565854c748cebb2c44e4ce57e.jpeg",
    },
    {
      title: "Verkauf",
      text: "Viele Kaufinteressenten m\u00f6chten sich nicht mit Sanierungsthematiken besch\u00e4ftigen und freuen sich \u00fcber den Erwerb einer sanierten Immobilie. Dies ist unser Anspruch!",
      img: "/assets/images/ec2bec_c0c3af6a27f74794a4d08526172c6f10.jpeg",
    },
  ];

  return (
    <section className="section" id="leistungen">
      <div className="container">
        <h2 className="section-title">LEISTUNGEN</h2>
        <div className="var-b-grid">
          {services.map((s) => (
            <div className="var-b-card" key={s.title}>
              <div className="var-b-card__img">
                <img src={s.img} alt={s.title} />
              </div>
              <div className="var-b-card__body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <a href="#kontakt" className="link-btn">Mehr erfahren &gt;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
