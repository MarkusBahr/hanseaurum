"use client";

import { useState } from "react";

const services = [
  {
    title: "Ankauf",
    text: "Sie m\u00f6chten Ihre Immobilie verkaufen? Wir sind zuverl\u00e4ssige und seri\u00f6se Ansprechpartner f\u00fcr den Ankauf von Wohnungen und Mehrfamilienh\u00e4usern \u2013 unkompliziert, professionell und schnell.",
    img: "/assets/images/ec2bec_84b824973d5d4d8dbcd8e92f3ceddf8f.jpeg",
    details: null,
  },
  {
    title: "Sanierung & Modernisierung",
    text: "Wir modernisieren, renovieren und sanieren. Ob Wohnung, Haus oder gesamtes Mehrfamilienhaus. Wir schaffen Wohnraum mit Substanz und Qualit\u00e4tsanspruch. Bei unseren Sanierungen legen wir h\u00f6chsten Wert auf Qualit\u00e4t und Nachhaltigkeit:",
    img: "/assets/images/ec2bec_3e387b0565854c748cebb2c44e4ce57e.jpeg",
    details: [
      "Wasser- & Heizungsleitungen",
      "Elektroleitungen",
      "Heizungsanlage",
      "D\u00e4mmung von Au\u00dfenw\u00e4nden",
      "Dachbeschichtung",
      "Verlegung von hochwertigen Vinyldesign-B\u00f6den & Fliesen",
      "Hochwertige Sanit\u00e4robjekte und Armaturen von: B\u00e4chlein, Belaqua, Duravit, Geberit",
      "Installation von Starkstromsteckdose als Vorbereitung f\u00fcr mobile Wallboxen",
      "Neuverputzen und Wei\u00dfen von W\u00e4nden",
    ],
  },
  {
    title: "Verkauf",
    text: "Viele Kaufinteressenten m\u00f6chten sich nicht mit Sanierungsthematiken besch\u00e4ftigen und freuen sich \u00fcber den Erwerb einer sanierten Immobilie. Dies ist unser Anspruch!",
    img: "/assets/images/ec2bec_c0c3af6a27f74794a4d08526172c6f10.jpeg",
    details: null,
  },
];

export default function Leistungen() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section className="section" id="leistungen">
      <div className="container">
        <h2 className="section-title">LEISTUNGEN</h2>
        <div className="var-c-tabs">
          {services.map((srv, i) => (
            <button
              key={srv.title}
              className={`var-c-tab${i === active ? " var-c-tab--active" : ""}`}
              onClick={() => setActive(i)}
            >
              {srv.title}
            </button>
          ))}
        </div>
        <div className="var-c-content">
          <div className="var-c-content__img">
            <img src={s.img} alt={s.title} />
          </div>
          <div className="var-c-content__text">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            {s.details && (
              <ul className="var-c-details">
                {s.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
            <a href="#kontakt" className="link-btn">Kontakt aufnehmen &gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
