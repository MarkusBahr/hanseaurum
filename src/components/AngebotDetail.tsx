"use client";
import { useState, useEffect } from "react";
import type { Angebot } from "@/types/angebot";

export default function AngebotDetail({ id }: { id: number }) {
  const [item, setItem] = useState<Angebot | null>(null);
  const [loading, setLoading] = useState(true);
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    fetch(`/api/angebote/${id}`)
      .then(r => r.json())
      .then(data => { setItem(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ textAlign: "center" }}>Laden...</p>;
  if (!item) return <p style={{ textAlign: "center", color: "#999" }}>Angebot nicht gefunden.</p>;

  const energieEntries = item.energieausweis ? Object.entries(item.energieausweis).filter(([, v]) => v) : [];
  const raumEntries = item.raumaufteilung ? Object.entries(item.raumaufteilung).filter(([, v]) => v) : [];
  const energieLabels: Record<string, string> = {
    art: "Art", endenergieverbrauch: "Endenergieverbrauch", primaerenergieverbrauch: "Primärenergieverbrauch",
    energieeffizienzklasse: "Energieeffizienzklasse", energietraeger: "Energieträger",
    gebaeudebaujahr: "Gebäudebaujahr", waermeerzeugerBaujahr: "Wärmeerzeuger Baujahr",
    gueltigBis: "Gültig bis", registriernummer: "Registriernummer"
  };

  return (
    <div className="angebot-detail">
      {/* Image Gallery */}
      {item.images.length > 0 && (
        <div className="angebot-detail-gallery">
          <div className="angebot-detail-main-image">
            <img src={item.images[imgIdx]} alt={item.title} />
            {item.status === "sold" && <span className="angebot-badge-sold">Verkauft</span>}
          </div>
          {item.images.length > 1 && (
            <div className="angebot-detail-thumbs">
              {item.images.map((img, i) => (
                <img key={i} src={img} alt="" className={i === imgIdx ? "active" : ""} onClick={() => setImgIdx(i)} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Header */}
      <div className="angebot-detail-header">
        <h1>{item.title}</h1>
        {item.objekttyp && <p className="angebot-detail-objekttyp">{item.objekttyp}</p>}
        {item.subtitle && <p className="angebot-subtitle">{item.subtitle}</p>}
        {item.address && <p className="angebot-detail-address">📍 {item.address}</p>}
      </div>

      {/* Price & Facts */}
      <div className="angebot-detail-section">
        <div className="angebot-detail-facts-grid">
          {item.price && (
            <div className="angebot-detail-fact">
              <span className="angebot-detail-fact-label">Kaufpreis</span>
              <span className="angebot-detail-fact-value angebot-detail-fact-price">{item.price}</span>
            </div>
          )}
          {item.hausgeld && (
            <div className="angebot-detail-fact">
              <span className="angebot-detail-fact-label">Hausgeld</span>
              <span className="angebot-detail-fact-value">{item.hausgeld}</span>
            </div>
          )}
          {item.provisionsfrei && (
            <div className="angebot-detail-fact">
              <span className="angebot-detail-fact-label">Provision</span>
              <span className="angebot-detail-fact-value" style={{ color: "#27ae60" }}>Provisionsfrei</span>
            </div>
          )}
          {item.size && (
            <div className="angebot-detail-fact">
              <span className="angebot-detail-fact-label">Wohnfläche</span>
              <span className="angebot-detail-fact-value">{item.size}</span>
            </div>
          )}
          {item.rooms && (
            <div className="angebot-detail-fact">
              <span className="angebot-detail-fact-label">Zimmer</span>
              <span className="angebot-detail-fact-value">{item.rooms}</span>
            </div>
          )}
          {item.baederanzahl && (
            <div className="angebot-detail-fact">
              <span className="angebot-detail-fact-label">Bäder</span>
              <span className="angebot-detail-fact-value">{item.baederanzahl}</span>
            </div>
          )}
          {item.baujahr && (
            <div className="angebot-detail-fact">
              <span className="angebot-detail-fact-label">Baujahr</span>
              <span className="angebot-detail-fact-value">{item.baujahr}</span>
            </div>
          )}
          {item.uebergabe && (
            <div className="angebot-detail-fact">
              <span className="angebot-detail-fact-label">Übergabe</span>
              <span className="angebot-detail-fact-value">{item.uebergabe}</span>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      {item.description && (
        <div className="angebot-detail-section">
          <h2>Beschreibung</h2>
          <p className="angebot-detail-text">{item.description}</p>
        </div>
      )}

      {/* Lage */}
      {item.lage && (
        <div className="angebot-detail-section">
          <h2>Lage</h2>
          <p className="angebot-detail-text">{item.lage}</p>
        </div>
      )}

      {/* Features */}
      {item.features.length > 0 && (
        <div className="angebot-detail-section">
          <h2>Ausstattung</h2>
          <ul className="angebot-features">
            {item.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
      )}

      {/* Raumaufteilung */}
      {raumEntries.length > 0 && (
        <div className="angebot-detail-section">
          <h2>Raumaufteilung</h2>
          <table className="angebot-detail-table">
            <tbody>
              {raumEntries.map(([room, size]) => (
                <tr key={room}>
                  <td>{room}</td>
                  <td>{size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Energieausweis */}
      {energieEntries.length > 0 && (
        <div className="angebot-detail-section">
          <h2>Energieausweis</h2>
          <table className="angebot-detail-table">
            <tbody>
              {energieEntries.map(([key, val]) => (
                <tr key={key}>
                  <td>{energieLabels[key] || key}</td>
                  <td>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
