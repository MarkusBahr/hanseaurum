import { NextResponse } from "next/server";

export async function GET() {
  // Middleware already checks the cookie for non-public routes
  return NextResponse.json({ authenticated: true });
}