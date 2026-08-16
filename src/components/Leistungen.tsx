export default function Leistungen() {
  return (
    <section className="section" id="leistungen">
      <div className="container">
        <h2 className="section-title">LEISTUNGEN</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-img">
              <img src="/assets/images/ec2bec_bf7ef01f3b4c48b8993fdad1c3c87b48.jpeg" alt="Ankauf" />
            </div>
            <h3>Ankauf</h3>
            <p>Sie m&ouml;chten Ihre Immobilie verkaufen? Wir kaufen Ein- und Mehrfamilienh&auml;user und weitere Anlageimmobilien f&uuml;r unsere Kunden. Unkompliziert, professionell und schnell.</p>
            <a href="#kontakt" className="link-btn">mehr erfahren &gt;</a>
          </div>
          <div className="service-card">
            <div className="service-img">
              <img src="/assets/images/ec2bec_4eb81f496f794bdc83a222537b249124.jpeg" alt="Sanierung & Modernisierung" />
            </div>
            <h3>Sanierung &amp; Modernisierung</h3>
            <p>Wir modernisieren, renovieren und sanieren. Ob Wohnung, Haus oder ganze Mehrfamilienh&auml;user. Wir schaffen Wohnraum mit Substanz und Qualit&auml;tsanspruch.</p>
            <a href="#referenzprojekte" className="link-btn">mehr erfahren &gt;</a>
          </div>
          <div className="service-card">
            <div className="service-img">
              <img src="/assets/images/ec2bec_90d180a020b54331be543e59eccbf2c8.jpeg" alt="Verkauf" />
            </div>
            <h3>Verkauf</h3>
            <p>Viele Kaufinteressenten melden sich &uuml;ber mit Sanierungsfortschritten. Bewerben Sie sich und freuen sich &uuml;ber den Erwerb unserer sanierten Immobilien. Dies ist unser Anspruch!</p>
            <a href="#kontakt" className="link-btn">mehr erfahren &gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
