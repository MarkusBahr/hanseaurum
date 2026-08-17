import { NextRequest, NextResponse } from "next/server";
import getDb, { saveDb } from "@/lib/db";

function rowsToObjects(result: any[]) {
  if (!result.length) return [];
  const cols = result[0].columns;
  return result[0].values.map((row: any[]) => {
    const obj: any = {};
    cols.forEach((c: string, i: number) => { obj[c] = row[i]; });
    obj.renovations = obj.renovations ? JSON.parse(obj.renovations) : [];
    obj.vorher_images = obj.vorher_images ? JSON.parse(obj.vorher_images) : [];
    obj.nachher_images = obj.nachher_images ? JSON.parse(obj.nachher_images) : [];
    return obj;
  });
}

export async function GET() {
  const db = await getDb();
  const result = db.exec("SELECT * FROM referenzprojekte ORDER BY sort_order ASC");
  return NextResponse.json(rowsToObjects(result));
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const db = await getDb();
  db.run(`INSERT INTO referenzprojekte (id, title, subtitle, description, renovations, vorher_images, nachher_images, sort_order)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [data.id, data.title, data.subtitle || null, data.description || null,
     JSON.stringify(data.renovations || []), JSON.stringify(data.vorher_images || []),
     JSON.stringify(data.nachher_images || []), data.sort_order || 0]);
  saveDb();
  return NextResponse.json({ success: true }, { status: 201 });
}