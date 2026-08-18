"use client";
import { useState, useEffect } from "react";
import type { Angebot, Energieausweis } from "@/types/angebot";

interface FormState {
  title: string;
  subtitle: string;
  description: string;
  address: string;
  price: string;
  size: string;
  rooms: string;
  objekttyp: string;
  baujahr: string;
  baederanzahl: string;
  hausgeld: string;
  provisionsfrei: boolean;
  uebergabe: string;
  lage: string;
  features: string;
  images: string[];
  energieausweis: Energieausweis;
  raumaufteilung: Record<string, string>;
  status: string;
}

const emptyForm: FormState = {
  title: "", subtitle: "", description: "", address: "", price: "", size: "", rooms: "",
  objekttyp: "", baujahr: "", baederanzahl: "", hausgeld: "", provisionsfrei: false,
  uebergabe: "", lage: "", features: "", images: [], energieausweis: {}, raumaufteilung: {}, status: "active"
};

export default function AdminAngebote() {
  const [items, setItems] = useState<Angebot[]>([]);
  const [editing, setEditing] = useState<Angebot | null>(null);
  const [form, setForm] = useState<FormState>({ ...emptyForm });
  const [newRaumKey, setNewRaumKey] = useState("");
  const [newRaumValue, setNewRaumValue] = useState("");

  const load = () => fetch("/api/angebote").then(r => r.json()).then(setItems);
  useEffect(() => { load(); }, []);

  const handleSave = async () => {
    const body = { ...form, features: form.features.split("\n").filter(Boolean) };
    if (editing) {
      await fetch(`/api/angebote/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    } else {
      await fetch("/api/angebote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    }
    setEditing(null);
    setForm({ ...emptyForm });
    load();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Wirklich löschen?")) return;
    await fetch(`/api/angebote/${id}`, { method: "DELETE" });
    load();
  };

  const handleEdit = (item: Angebot) => {
    setEditing(item);
    setForm({
      ...item,
      features: item.features.join("\n"),
      energieausweis: item.energieausweis || {},
      raumaufteilung: item.raumaufteilung || {},
    });
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    for (const file of Array.from(files)) {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const { url } = await res.json();
      setForm(f => ({ ...f, images: [...f.images, url] }));
    }
  };

  const updateEnergieausweis = (key: keyof Energieausweis, value: string) => {
    setForm(f => ({ ...f, energieausweis: { ...f.energieausweis, [key]: value } }));
  };

  const addRaum = () => {
    if (!newRaumKey.trim()) return;
    setForm(f => ({ ...f, raumaufteilung: { ...f.raumaufteilung, [newRaumKey.trim()]: newRaumValue.trim() } }));
    setNewRaumKey("");
    setNewRaumValue("");
  };

  const removeRaum = (key: string) => {
    setForm(f => {
      const copy = { ...f.raumaufteilung };
      delete copy[key];
      return { ...f, raumaufteilung: copy };
    });
  };

  return (
    <div className="admin-page">
      <h1>Angebote verwalten</h1>
      <div className="admin-form-section">
        <h2>{editing ? "Bearbeiten" : "Neues Angebot"}</h2>

        <h3 style={{ marginTop: "1rem", marginBottom: "0.5rem", fontSize: "0.95rem", color: "#666" }}>Grunddaten</h3>
        <div className="admin-form-grid">
          <input placeholder="Titel *" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
          <input placeholder="Untertitel" value={form.subtitle} onChange={e => setForm({...form, subtitle: e.target.value})} />
          <input placeholder="Adresse" value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
          <input placeholder="Preis" value={form.price} onChange={e => setForm({...form, price: e.target.value})} />
          <input placeholder="Größe (z.B. 77m²)" value={form.size} onChange={e => setForm({...form, size: e.target.value})} />
          <input placeholder="Zimmer" value={form.rooms} onChange={e => setForm({...form, rooms: e.target.value})} />
          <input placeholder="Objekttyp (z.B. Etagenwohnung)" value={form.objekttyp} onChange={e => setForm({...form, objekttyp: e.target.value})} />
          <input placeholder="Baujahr" value={form.baujahr} onChange={e => setForm({...form, baujahr: e.target.value})} />
          <input placeholder="Anzahl Bäder" value={form.baederanzahl} onChange={e => setForm({...form, baederanzahl: e.target.value})} />
          <input placeholder="Hausgeld (z.B. 544,19 €)" value={form.hausgeld} onChange={e => setForm({...form, hausgeld: e.target.value})} />
          <input placeholder="Übergabe (z.B. Frei geliefert)" value={form.uebergabe} onChange={e => setForm({...form, uebergabe: e.target.value})} />
          <select value={form.status} onChange={e => setForm({...form, status: e.target.value})}>
            <option value="active">Aktiv</option>
            <option value="draft">Entwurf</option>
            <option value="sold">Verkauft</option>
          </select>
        </div>
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", margin: "0.5rem 0" }}>
          <input type="checkbox" checked={form.provisionsfrei} onChange={e => setForm({...form, provisionsfrei: e.target.checked})} />
          Provisionsfrei
        </label>
        <textarea placeholder="Beschreibung" value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows={4} />
        <textarea placeholder="Lage" value={form.lage} onChange={e => setForm({...form, lage: e.target.value})} rows={4} />
        <textarea placeholder="Ausstattungsmerkmale (eine pro Zeile)" value={form.features} onChange={e => setForm({...form, features: e.target.value})} rows={4} />

        <h3 style={{ marginTop: "1.5rem", marginBottom: "0.5rem", fontSize: "0.95rem", color: "#666" }}>Energieausweis</h3>
        <div className="admin-form-grid">
          <input placeholder="Art (z.B. Verbrauchsausweis)" value={form.energieausweis.art || ""} onChange={e => updateEnergieausweis("art", e.target.value)} />
          <input placeholder="Endenergieverbrauch" value={form.energieausweis.endenergieverbrauch || ""} onChange={e => updateEnergieausweis("endenergieverbrauch", e.target.value)} />
          <input placeholder="Primärenergieverbrauch" value={form.energieausweis.primaerenergieverbrauch || ""} onChange={e => updateEnergieausweis("primaerenergieverbrauch", e.target.value)} />
          <input placeholder="Energieeffizienzklasse" value={form.energieausweis.energieeffizienzklasse || ""} onChange={e => updateEnergieausweis("energieeffizienzklasse", e.target.value)} />
          <input placeholder="Energieträger" value={form.energieausweis.energietraeger || ""} onChange={e => updateEnergieausweis("energietraeger", e.target.value)} />
          <input placeholder="Gebäudebaujahr" value={form.energieausweis.gebaeudebaujahr || ""} onChange={e => updateEnergieausweis("gebaeudebaujahr", e.target.value)} />
          <input placeholder="Wärmeerzeuger Baujahr" value={form.energieausweis.waermeerzeugerBaujahr || ""} onChange={e => updateEnergieausweis("waermeerzeugerBaujahr", e.target.value)} />
          <input placeholder="Gültig bis" value={form.energieausweis.gueltigBis || ""} onChange={e => updateEnergieausweis("gueltigBis", e.target.value)} />
          <input placeholder="Registriernummer" value={form.energieausweis.registriernummer || ""} onChange={e => updateEnergieausweis("registriernummer", e.target.value)} />
        </div>

        <h3 style={{ marginTop: "1.5rem", marginBottom: "0.5rem", fontSize: "0.95rem", color: "#666" }}>Raumaufteilung</h3>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
          <input placeholder="Raum (z.B. Wohnzimmer)" value={newRaumKey} onChange={e => setNewRaumKey(e.target.value)} style={{ flex: 1 }} />
          <input placeholder="Größe (z.B. 25,5 m²)" value={newRaumValue} onChange={e => setNewRaumValue(e.target.value)} style={{ flex: 1 }} />
          <button onClick={addRaum} className="admin-btn-secondary" type="button">+</button>
        </div>
        {Object.entries(form.raumaufteilung).length > 0 && (
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1rem" }}>
            <tbody>
              {Object.entries(form.raumaufteilung).map(([key, val]) => (
                <tr key={key} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "0.3rem 0.5rem" }}>{key}</td>
                  <td style={{ padding: "0.3rem 0.5rem" }}>{val}</td>
                  <td style={{ padding: "0.3rem 0.5rem", width: "2rem" }}>
                    <button onClick={() => removeRaum(key)} style={{ color: "red", cursor: "pointer", background: "none", border: "none" }}>×</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="admin-images">
          <label className="admin-upload-btn">Bilder hochladen <input type="file" multiple accept="image/*" onChange={handleUpload} hidden /></label>
          <div className="admin-image-preview">
            {form.images.map((img, i) => (
              <div key={i} className="admin-img-thumb">
                <img src={img} alt="" />
                <button onClick={() => setForm(f => ({...f, images: f.images.filter((_, j) => j !== i)}))}>×</button>
              </div>
            ))}
          </div>
        </div>
        <div className="admin-form-actions">
          <button onClick={handleSave} className="admin-btn-primary">{editing ? "Speichern" : "Erstellen"}</button>
          {editing && <button onClick={() => { setEditing(null); setForm({ ...emptyForm }); }} className="admin-btn-secondary">Abbrechen</button>}
        </div>
      </div>

      <div className="admin-list">
        <h2>Alle Angebote ({items.length})</h2>
        {items.map(item => (
          <div key={item.id} className="admin-list-item">
            <div>
              <strong>{item.title}</strong>
              <span className={`admin-badge admin-badge-${item.status}`}>{item.status}</span>
              <br /><small>{item.address} | {item.size} | {item.price}</small>
            </div>
            <div className="admin-list-actions">
              <button onClick={() => handleEdit(item)}>Bearbeiten</button>
              <button onClick={() => handleDelete(item.id)} className="admin-btn-danger">Löschen</button>
            </div>
          </div>
        ))}
        {items.length === 0 && <p className="admin-empty">Noch keine Angebote vorhanden.</p>}
      </div>
    </div>
  );
}