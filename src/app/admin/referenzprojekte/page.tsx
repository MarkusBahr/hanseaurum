"use client";
import { useState, useEffect } from "react";

interface Projekt {
  id: string; title: string; subtitle: string; description: string;
  renovations: string[]; vorher_images: string[]; nachher_images: string[]; sort_order: number;
}

export default function AdminReferenzprojekte() {
  const [items, setItems] = useState<Projekt[]>([]);
  const [editing, setEditing] = useState<Projekt | null>(null);
  const [form, setForm] = useState({ id: "", title: "", subtitle: "", description: "", renovations: "", vorher_images: [] as string[], nachher_images: [] as string[], sort_order: 0 });

  const load = () => fetch("/api/referenzprojekte").then(r => r.json()).then(setItems);
  useEffect(() => { load(); }, []);

  const handleSave = async () => {
    const body = { ...form, renovations: form.renovations.split("\n").filter(Boolean) };
    if (editing) {
      await fetch(`/api/referenzprojekte/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    } else {
      await fetch("/api/referenzprojekte", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    }
    setEditing(null);
    setForm({ id: "", title: "", subtitle: "", description: "", renovations: "", vorher_images: [], nachher_images: [], sort_order: 0 });
    load();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Wirklich löschen?")) return;
    await fetch(`/api/referenzprojekte/${id}`, { method: "DELETE" });
    load();
  };

  const handleEdit = (item: Projekt) => {
    setEditing(item);
    setForm({ ...item, renovations: item.renovations.join("\n") });
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: "vorher" | "nachher") => {
    const files = e.target.files;
    if (!files) return;
    for (const file of Array.from(files)) {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const { url } = await res.json();
      if (type === "vorher") setForm(f => ({ ...f, vorher_images: [...f.vorher_images, url] }));
      else setForm(f => ({ ...f, nachher_images: [...f.nachher_images, url] }));
    }
  };

  return (
    <div className="admin-page">
      <h1>Referenzprojekte verwalten</h1>
      <div className="admin-form-section">
        <h2>{editing ? "Bearbeiten" : "Neues Projekt"}</h2>
        <div className="admin-form-grid">
          <input placeholder="ID (z.B. mein-projekt)" value={form.id} onChange={e => setForm({...form, id: e.target.value})} disabled={!!editing} />
          <input placeholder="Titel *" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
          <input placeholder="Untertitel" value={form.subtitle} onChange={e => setForm({...form, subtitle: e.target.value})} />
          <input placeholder="Sortierung" type="number" value={form.sort_order} onChange={e => setForm({...form, sort_order: parseInt(e.target.value) || 0})} />
        </div>
        <textarea placeholder="Beschreibung" value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows={4} />
        <textarea placeholder="Durchgeführte Maßnahmen (eine pro Zeile)" value={form.renovations} onChange={e => setForm({...form, renovations: e.target.value})} rows={4} />

        <div className="admin-images">
          <h4>Vorher-Bilder</h4>
          <label className="admin-upload-btn">Bilder hochladen <input type="file" multiple accept="image/*" onChange={e => handleUpload(e, "vorher")} hidden /></label>
          <div className="admin-image-preview">
            {form.vorher_images.map((img, i) => (
              <div key={i} className="admin-img-thumb">
                <img src={img} alt="" />
                <button onClick={() => setForm(f => ({...f, vorher_images: f.vorher_images.filter((_, j) => j !== i)}))}>×</button>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-images">
          <h4>Nachher-Bilder</h4>
          <label className="admin-upload-btn">Bilder hochladen <input type="file" multiple accept="image/*" onChange={e => handleUpload(e, "nachher")} hidden /></label>
          <div className="admin-image-preview">
            {form.nachher_images.map((img, i) => (
              <div key={i} className="admin-img-thumb">
                <img src={img} alt="" />
                <button onClick={() => setForm(f => ({...f, nachher_images: f.nachher_images.filter((_, j) => j !== i)}))}>×</button>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-form-actions">
          <button onClick={handleSave} className="admin-btn-primary">{editing ? "Speichern" : "Erstellen"}</button>
          {editing && <button onClick={() => { setEditing(null); setForm({ id: "", title: "", subtitle: "", description: "", renovations: "", vorher_images: [], nachher_images: [], sort_order: 0 }); }} className="admin-btn-secondary">Abbrechen</button>}
        </div>
      </div>

      <div className="admin-list">
        <h2>Alle Projekte ({items.length})</h2>
        {items.map(item => (
          <div key={item.id} className="admin-list-item">
            <div>
              <strong>{item.title}</strong> <small>({item.id})</small>
              <br /><small>{item.subtitle} | {item.vorher_images.length} Vorher / {item.nachher_images.length} Nachher Bilder</small>
            </div>
            <div className="admin-list-actions">
              <button onClick={() => handleEdit(item)}>Bearbeiten</button>
              <button onClick={() => handleDelete(item.id)} className="admin-btn-danger">Löschen</button>
            </div>
          </div>
        ))}
        {items.length === 0 && <p className="admin-empty">Noch keine Projekte. Importiere bestehende Daten oder erstelle neue.</p>}
      </div>
    </div>
  );
}