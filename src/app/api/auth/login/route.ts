import { NextRequest, NextResponse } from "next/server";
import { createToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  const validUser = process.env.ADMIN_USERNAME || "Admin";
  const validPass = process.env.ADMIN_PASSWORD || "changeme";

  if (username !== validUser || password !== validPass) {
    return NextResponse.json({ error: "Ung\u00fcltige Anmeldedaten" }, { status: 401 });
  }

  const token = createToken(1);
  const response = NextResponse.json({ success: true });
  response.cookies.set("admin-token", token, {
    httpOnly: true, secure: false, sameSite: "lax",
    maxAge: 7 * 24 * 3600, path: "/"
  });
  return response;
}