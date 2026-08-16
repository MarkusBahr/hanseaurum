export default function Leistungen() {
  const services = [
    {
      title: "Ankauf",
      text: "Sie m\u00f6chten Ihre Immobilie verkaufen? Wir kaufen Ein- und Mehrfamilienh\u00e4user und weitere Anlageimmobilien f\u00fcr unsere Kunden. Unkompliziert, professionell und schnell.",
      img: "/assets/images/ec2bec_bf7ef01f3b4c48b8993fdad1c3c87b48.jpeg",
      link: "#kontakt",
    },
    {
      title: "Sanierung & Modernisierung",
      text: "Wir modernisieren, renovieren und sanieren. Ob Wohnung, Haus oder ganze Mehrfamilienh\u00e4user. Wir schaffen Wohnraum mit Substanz und Qualit\u00e4tsanspruch.",
      img: "/assets/images/ec2bec_4eb81f496f794bdc83a222537b249124.jpeg",
      link: "#referenzprojekte",
    },
    {
      title: "Verkauf",
      text: "Viele Kaufinteressenten melden sich \u00fcber mit Sanierungsfortschritten. Bewerben Sie sich und freuen sich \u00fcber den Erwerb unserer sanierten Immobilien. Dies ist unser Anspruch!",
      img: "/assets/images/ec2bec_90d180a020b54331be543e59eccbf2c8.jpeg",
      link: "#kontakt",
    },
  ];

  return (
    <section className="section" id="leistungen">
      <div className="container">
        <h2 className="section-title">LEISTUNGEN</h2>
        <p className="services-subtitle">Von der ersten Besichtigung bis zum erfolgreichen Verkauf {"\u2013"} wir begleiten jedes Projekt mit h{"\u00f6"}chstem Anspruch.</p>
        <div className="services-steps">
          {services.map((s, i) => (
            <div className={`service-step ${i % 2 === 1 ? "service-step--reverse" : ""}`} key={s.title}>
              <div className="service-step__img">
                <img src={s.img} alt={s.title} />
              </div>
              <div className="service-step__content">
                <h3 className="service-step__title">{s.title}</h3>
                <p className="service-step__text">{s.text}</p>
                <a href={s.link} className="link-btn">mehr erfahren &gt;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
