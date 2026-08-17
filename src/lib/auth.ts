import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "hanseaurum-admin-secret-change-in-production";

export function createToken(userId: number) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: number };
  } catch {
    return null;
  }
}