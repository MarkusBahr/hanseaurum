import { NextRequest, NextResponse } from "next/server";
import getDb, { saveDb } from "@/lib/db";

const ZAPIER_API_KEY = process.env.ZAPIER_API_KEY || "hanseaurum-zapier-key-change-me";

export async function POST(req: NextRequest) {
  const apiKey = req.headers.get("x-api-key");
  if (apiKey !== ZAPIER_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const data = await req.json();
  const db = await getDb();
  db.run(`INSERT INTO angebote (title, subtitle, description, address, price, size, rooms, objekttyp, baujahr, baederanzahl, hausgeld, provisionsfrei, uebergabe, lage, energieausweis, raumaufteilung, features, images, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [data.title || "Neues Angebot", data.subtitle || null, data.description || null,
     data.address || null, data.price || null, data.size || null, data.rooms || null,
     data.objekttyp || null, data.baujahr || null, data.baederanzahl || null,
     data.hausgeld || null, data.provisionsfrei ? 1 : 0, data.uebergabe || null,
     data.lage || null, JSON.stringify(data.energieausweis || {}),
     JSON.stringify(data.raumaufteilung || {}),
     JSON.stringify(data.features || []), JSON.stringify(data.images || []), "active"]);
  saveDb();
  const id = db.exec("SELECT last_insert_rowid() as id")[0].values[0][0];
  return NextResponse.json({ id, success: true }, { status: 201 });
}