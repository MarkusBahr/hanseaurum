import { NextRequest, NextResponse } from "next/server";
import getDb, { saveDb } from "@/lib/db";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await req.json();
  const db = await getDb();
  db.run(`UPDATE referenzprojekte SET title=?, subtitle=?, description=?, renovations=?, vorher_images=?, nachher_images=?, sort_order=?, updated_at=CURRENT_TIMESTAMP WHERE id=?`,
    [data.title, data.subtitle, data.description,
     JSON.stringify(data.renovations || []), JSON.stringify(data.vorher_images || []),
     JSON.stringify(data.nachher_images || []), data.sort_order || 0, id]);
  saveDb();
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const db = await getDb();
  db.run("DELETE FROM referenzprojekte WHERE id = ?", [id]);
  saveDb();
  return NextResponse.json({ success: true });
}