"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import type { Angebot } from "@/types/angebot";

export default function AngeboteList() {
  const [items, setItems] = useState<Angebot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/angebote")
      .then(r => r.json())
      .then(data => { setItems(data.filter((a: Angebot) => a.status === "active")); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Laden...</p>;
  if (items.length === 0) return <p style={{ textAlign: "center", color: "#999" }}>Aktuell keine Angebote verfügbar. Schauen Sie bald wieder vorbei!</p>;

  return (
    <div className="angebote-grid">
      {items.map(item => (
        <Link href={`/angebote/${item.id}`} key={item.id} className="angebot-card">
          {item.images.length > 0 && (
            <div className="angebot-image">
              <img src={item.images[0]} alt={item.title} />
              {item.status === "sold" && <span className="angebot-badge-sold">Verkauft</span>}
            </div>
          )}
          <div className="angebot-content">
            <h3>{item.title}</h3>
            {item.subtitle && <p className="angebot-subtitle">{item.subtitle}</p>}
            <div className="angebot-details">
              {item.objekttyp && <span>{item.objekttyp}</span>}
              {item.size && <span>{item.size}</span>}
              {item.rooms && <span>{item.rooms} Zimmer</span>}
              {item.baujahr && <span>Bj. {item.baujahr}</span>}
              {item.address && <span>{item.address}</span>}
            </div>
            {item.price && <p className="angebot-price">{item.price}</p>}
            <span className="angebot-more-btn">Mehr erfahren &rarr;</span>
          </div>
        </Link>
      ))}
    </div>
  );
}