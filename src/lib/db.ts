import initSqlJs, { Database } from "sql.js";
import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "data", "hanseaurum.db");
let db: Database | null = null;

export default async function getDb(): Promise<Database> {
  if (db) return db;

  const SQL = await initSqlJs();

  if (fs.existsSync(dbPath)) {
    const buffer = fs.readFileSync(dbPath);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }

  db.run(`
    CREATE TABLE IF NOT EXISTS angebote (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      subtitle TEXT,
      description TEXT,
      address TEXT,
      price TEXT,
      size TEXT,
      rooms TEXT,
      objekttyp TEXT,
      baujahr TEXT,
      baederanzahl TEXT,
      hausgeld TEXT,
      provisionsfrei INTEGER DEFAULT 0,
      uebergabe TEXT,
      lage TEXT,
      energieausweis TEXT,
      raumaufteilung TEXT,
      features TEXT,
      images TEXT,
      status TEXT DEFAULT 'active',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Migrate existing databases: add new columns if they don't exist
  const newColumns = [
    "objekttyp TEXT",
    "baujahr TEXT",
    "baederanzahl TEXT",
    "hausgeld TEXT",
    "provisionsfrei INTEGER DEFAULT 0",
    "uebergabe TEXT",
    "lage TEXT",
    "energieausweis TEXT",
    "raumaufteilung TEXT",
  ];
  for (const col of newColumns) {
    try {
      db.run(`ALTER TABLE angebote ADD COLUMN ${col}`);
    } catch {
      // Column already exists
    }
  }

  db.run(`
    CREATE TABLE IF NOT EXISTS referenzprojekte (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      subtitle TEXT,
      description TEXT,
      renovations TEXT,
      vorher_images TEXT,
      nachher_images TEXT,
      sort_order INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL
    );
  `);

  saveDb();
  return db;
}

export function saveDb() {
  if (!db) return;
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const data = db.export();
  fs.writeFileSync(dbPath, Buffer.from(data));
}