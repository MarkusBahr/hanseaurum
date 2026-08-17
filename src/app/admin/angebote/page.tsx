"use client";
import { useState, useEffect } from "react";

interface Angebot {
  id: number; title: string; subtitle: string; description: string;
  address: string; price: string; size: string; rooms: string;
  features: string[]; images: string[]; status: string;
}

export default function AdminAngebote() {
  const [items, setItems] = useState<Angebot[]>([]);
  const [editing, setEditing] = useState<Angebot | null>(null);
  const [form, setForm] = useState({ title: "", subtitle: "", description: "", address: "", price: "", size: "", rooms: "", features: "", images: [] as string[], status: "active" });

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
    setForm({ title: "", subtitle: "", description: "", address: "", price: "", size: "", rooms: "", features: "", images: [], status: "active" });
    load();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Wirklich löschen?")) return;
    await fetch(`/api/angebote/${id}`, { method: "DELETE" });
    load();
  };

  const handleEdit = (item: Angebot) => {
    setEditing(item);
    setForm({ ...item, features: item.features.join("\n") });
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

  return (
    <div className="admin-page">
      <h1>Angebote verwalten</h1>
      <div className="admin-form-section">
        <h2>{editing ? "Bearbeiten" : "Neues Angebot"}</h2>
        <div className="admin-form-grid">
          <input placeholder="Titel *" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
          <input placeholder="Untertitel" value={form.subtitle} onChange={e => setForm({...form, subtitle: e.target.value})} />
          <input placeholder="Adresse" value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
          <input placeholder="Preis" value={form.price} onChange={e => setForm({...form, price: e.target.value})} />
          <input placeholder="Größe (z.B. 77m²)" value={form.size} onChange={e => setForm({...form, size: e.target.value})} />
          <input placeholder="Zimmer" value={form.rooms} onChange={e => setForm({...form, rooms: e.target.value})} />
          <select value={form.status} onChange={e => setForm({...form, status: e.target.value})}>
            <option value="active">Aktiv</option>
            <option value="draft">Entwurf</option>
            <option value="sold">Verkauft</option>
          </select>
        </div>
        <textarea placeholder="Beschreibung" value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows={4} />
        <textarea placeholder="Ausstattungsmerkmale (eine pro Zeile)" value={form.features} onChange={e => setForm({...form, features: e.target.value})} rows={4} />
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
          {editing && <button onClick={() => { setEditing(null); setForm({ title: "", subtitle: "", description: "", address: "", price: "", size: "", rooms: "", features: "", images: [], status: "active" }); }} className="admin-btn-secondary">Abbrechen</button>}
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