import { NextRequest, NextResponse } from "next/server";
import getDb, { saveDb } from "@/lib/db";

function rowsToObjects(result: any[]) {
  if (!result.length) return [];
  const cols = result[0].columns;
  return result[0].values.map((row: any[]) => {
    const obj: any = {};
    cols.forEach((c: string, i: number) => { obj[c] = row[i]; });
    obj.features = obj.features ? JSON.parse(obj.features) : [];
    obj.images = obj.images ? JSON.parse(obj.images) : [];
    return obj;
  });
}

export async function GET() {
  const db = await getDb();
  const result = db.exec("SELECT * FROM angebote ORDER BY created_at DESC");
  return NextResponse.json(rowsToObjects(result));
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const db = await getDb();
  db.run(`INSERT INTO angebote (title, subtitle, description, address, price, size, rooms, features, images, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [data.title, data.subtitle || null, data.description || null, data.address || null,
     data.price || null, data.size || null, data.rooms || null,
     JSON.stringify(data.features || []), JSON.stringify(data.images || []), data.status || "active"]);
  saveDb();
  const id = db.exec("SELECT last_insert_rowid() as id")[0].values[0][0];
  return NextResponse.json({ id }, { status: 201 });
}