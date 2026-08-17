import { NextRequest, NextResponse } from "next/server";
import getDb, { saveDb } from "@/lib/db";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  const db = await getDb();
  const stmt = db.prepare("SELECT * FROM admin_users WHERE username = ?");
  stmt.bind([username]);
  if (!stmt.step()) { stmt.free(); return NextResponse.json({ error: "Ungültige Anmeldedaten" }, { status: 401 }); }
  const user = stmt.getAsObject();
  stmt.free();
  if (!bcrypt.compareSync(password, user.password_hash as string)) {
    return NextResponse.json({ error: "Ungültige Anmeldedaten" }, { status: 401 });
  }
  const token = createToken(user.id as number);
  const response = NextResponse.json({ success: true });
  response.cookies.set("admin-token", token, { httpOnly: true, secure: false, sameSite: "lax", maxAge: 7 * 24 * 3600, path: "/" });
  return response;
}