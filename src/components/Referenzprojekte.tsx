import { projects } from "@/data/projects";
import Link from "next/link";

export default function Referenzprojekte() {
  const featured = projects.slice(0, 3);

  return (
    <section className="section" id="referenzprojekte">
      <div className="container">
        <h2 className="section-title">REFERENZPROJEKTE</h2>
        <p className="ref-subtitle">Unsere bisherigen Erfolgsprojekte</p>
        <div className="ref-grid">
          {featured.map((p) => (
            <Link href={`/referenzprojekte#${p.id}`} key={p.id} className="ref-card">
              <img src={p.nachher[0]} alt={p.title} className="ref-card__img" />
              <div className="ref-card__overlay">
                <h3>{p.title}</h3>
                <p>{p.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/referenzprojekte" className="link-btn">
            Alle Projekte ansehen &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}