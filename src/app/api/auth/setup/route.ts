import { NextRequest, NextResponse } from "next/server";
import getDb, { saveDb } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const db = await getDb();
  const result = db.exec("SELECT COUNT(*) as count FROM admin_users");
  const count = result.length > 0 ? result[0].values[0][0] as number : 0;
  if (count > 0) {
    return NextResponse.json({ error: "Admin existiert bereits" }, { status: 400 });
  }
  const { username, password } = await req.json();
  const hash = bcrypt.hashSync(password, 10);
  db.run("INSERT INTO admin_users (username, password_hash) VALUES (?, ?)", [username, hash]);
  saveDb();
  return NextResponse.json({ success: true });
}