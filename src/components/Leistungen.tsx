"use client";

import { useState } from "react";

const services = [
  {
    title: "Ankauf",
    subtitle: "ANKAUFSPROFIL",
    paragraphs: [
      "Wir sind zuverl\u00e4ssige und seri\u00f6se Ansprechpartner f\u00fcr den Ankauf von Wohnungen und Mehrfamilienh\u00e4usern \u2013 unkompliziert, professionell und schnell.",
    ],
    subheading: "Fix & Flip mit Leidenschaft",
    subtext: "Mit unserer langj\u00e4hrigen Erfahrung in der Entwicklung und Sanierung von Immobilien suchen wir Objekte mit Potenzial.",
    details: [
      "Idealerweise leerstehend und renovierungs- oder sanierungsbed\u00fcrftige",
      "Mehrfamilienh\u00e4user ab 4 Parteien",
      "In Hamburg und Umgebung",
      "In St\u00e4dten und Gemeinden mit mindestens 10.000 Einwohnern",
      "Eigentumswohnungen",
    ],
    cta: "Sprechen Sie uns an \u2013 wir freuen uns auf Ihr Angebot!",
    img: "/assets/images/ec2bec_84b824973d5d4d8dbcd8e92f3ceddf8f.jpeg",
  },
  {
    title: "Sanierung & Modernisierung",
    subtitle: null,
    paragraphs: [
      "Wir modernisieren, renovieren und sanieren. Ob Wohnung, Haus oder gesamtes Mehrfamilienhaus. Wir schaffen Wohnraum mit Substanz und Qualit\u00e4tsanspruch. Bei unseren Sanierungen legen wir h\u00f6chsten Wert auf Qualit\u00e4t und Nachhaltigkeit:",
    ],
    subheading: null,
    subtext: null,
    details: [
      "Wasser- & Heizungsleitungen",
      "Elektroleitungen",
      "Heizungsanlage",
      "D\u00e4mmung von Au\u00dfenw\u00e4nden",
      "Dachbeschichtung",
      "Verlegung von hochwertigen Vinyldesign-B\u00f6den & Fliesen",
      "Hochwertige Sanit\u00e4robjekte und Armaturen",
      "Vorbereitung f\u00fcr mobile Wallboxen",
      "Neuverputzen und Wei\u00dfen von W\u00e4nden",
    ],
    cta: null,
    img: "/assets/images/ec2bec_3e387b0565854c748cebb2c44e4ce57e.jpeg",
  },
  {
    title: "Verkauf",
    subtitle: "VERKAUF",
    paragraphs: [
      "Die Hanse Aurum legt wert auf Qualit\u00e4t, Substanz und langfristigen Wert.",
      "Unser Anspruch: aus renovierungsbed\u00fcrftigen Objekten moderne, stilvolle und energetisch optimierte Wohnr\u00e4ume zu schaffen. Jedes Projekt wird mit Sorgfalt geplant, hochwertig saniert und mit einem feinen Gesp\u00fcr f\u00fcr Design und Funktionalit\u00e4t umgesetzt.",
      "Im Anschluss an die Modernisierung/Sanierungen verkaufen wir unsere Immobilien regelm\u00e4\u00dfig weiter, f\u00fcr alle die ein neues bezugsfertiges Zuhause suchen, oder an Kapitalanlegerinnen, die auf Substanz und nachhaltige Wertentwicklung setzen.",
    ],
    subheading: null,
    subtext: null,
    details: null,
    cta: "Wir schaffen Wohnraum mit Substanz, von dem unsere K\u00e4ufer*innen profitieren.",
    img: "/assets/images/ec2bec_c0c3af6a27f74794a4d08526172c6f10.jpeg",
  },
];

export default function Leistungen() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section className="section" id="leistungen">
      <div className="container">
        <div className="leistungen-intro">
          <h2 className="leistungen-intro__headline">Wir schaffen Wohnraum mit Substanz</h2>
          <p className="leistungen-intro__text">
            Hanse Aurum ist ein inhabergef&uuml;hrtes Unternehmen mit Sitz in Hamburg. Wir kaufen, sanieren
            und verkaufen Wohnimmobilien im norddeutschen Raum. Unser Anspruch: Wohnraum mit Substanz
            und Qualit&auml;t schaffen &ndash; nachhaltig, wertsteigernd und mit Blick f&uuml;r das Detail.
          </p>
          <p className="leistungen-intro__claim">Wir denken Immobilien neu.</p>
        </div>

        <div className="var-c-tabs">
          {services.map((srv, i) => (
            <button
              key={srv.title}
              className={"var-c-tab" + (i === active ? " var-c-tab--active" : "")}
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
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {s.subheading && <h4 className="var-c-subheading">{s.subheading}</h4>}
            {s.subtext && <p>{s.subtext}</p>}
            {s.details && (
              <ul className="var-c-details">
                {s.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
            {s.cta && <p className="var-c-cta">{s.cta}</p>}
            <a href="#kontakt" className="link-btn">Kontakt aufnehmen &gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
}