import { NextRequest, NextResponse } from "next/server";
import getDb, { saveDb } from "@/lib/db";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const db = await getDb();
  const result = db.exec("SELECT * FROM angebote WHERE id = ?", [id]);
  if (!result.length || !result[0].values.length) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const cols = result[0].columns;
  const row = result[0].values[0];
  const obj: any = {};
  cols.forEach((c: string, i: number) => { obj[c] = row[i]; });
  obj.features = JSON.parse(obj.features || "[]");
  obj.images = JSON.parse(obj.images || "[]");
  obj.energieausweis = obj.energieausweis ? JSON.parse(obj.energieausweis) : {};
  obj.raumaufteilung = obj.raumaufteilung ? JSON.parse(obj.raumaufteilung) : {};
  obj.provisionsfrei = !!obj.provisionsfrei;
  return NextResponse.json(obj);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await req.json();
  const db = await getDb();
  db.run(`UPDATE angebote SET title=?, subtitle=?, description=?, address=?, price=?, size=?, rooms=?, objekttyp=?, baujahr=?, baederanzahl=?, hausgeld=?, provisionsfrei=?, uebergabe=?, lage=?, energieausweis=?, raumaufteilung=?, features=?, images=?, status=?, updated_at=CURRENT_TIMESTAMP WHERE id=?`,
    [data.title, data.subtitle, data.description, data.address, data.price, data.size, data.rooms,
     data.objekttyp || null, data.baujahr || null, data.baederanzahl || null,
     data.hausgeld || null, data.provisionsfrei ? 1 : 0, data.uebergabe || null,
     data.lage || null, JSON.stringify(data.energieausweis || {}),
     JSON.stringify(data.raumaufteilung || {}),
     JSON.stringify(data.features || []), JSON.stringify(data.images || []), data.status, id]);
  saveDb();
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const db = await getDb();
  db.run("DELETE FROM angebote WHERE id = ?", [id]);
  saveDb();
  return NextResponse.json({ success: true });
}