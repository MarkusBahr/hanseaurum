import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/api/auth/login", "/api/zapier/angebote"];

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const method = req.method;

  // Public GET on angebote/referenzprojekte (frontend)
  if (pathname.startsWith("/api/angebote") && method === "GET") return NextResponse.next();
  if (pathname.startsWith("/api/referenzprojekte") && method === "GET") return NextResponse.next();

  // Public paths (login, setup, zapier)
  if (PUBLIC_PATHS.some(p => pathname.startsWith(p))) return NextResponse.next();

  // All other API writes need auth cookie
  if (pathname.startsWith("/api/")) {
    const token = req.cookies.get("admin-token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};