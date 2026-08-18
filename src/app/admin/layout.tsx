"use client";
import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const endpoint = "/api/auth/login";
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      onLogin();
    } else {
      const data = await res.json();
      setError(data.error || "Fehler");
    }
  };

  return (
    <div className="admin-login">
      <form onSubmit={handleSubmit} className="admin-login-form">
        <h1>Admin Login</h1>
        {error && <p className="admin-error">{error}</p>}
        <input type="text" placeholder="Benutzername" value={username} onChange={e => setUsername(e.target.value)} required />
        <input type="password" placeholder="Passwort" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Einloggen</button>
        
      </form>
    </div>
  );
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/check").then(r => {
      if (r.ok) setAuthed(true);
      setChecking(false);
    }).catch(() => setChecking(false));
  }, []);

  if (checking) return <div className="admin-loading">Laden...</div>;
  if (!authed) return <LoginForm onLogin={() => setAuthed(true)} />;

  return (
    <div className="admin-wrapper">
      <nav className="admin-nav">
        <h2>Hanse Aurum Admin</h2>
        <Link href="/admin" className={pathname === "/admin" ? "active" : ""}>Dashboard</Link>
        <Link href="/admin/angebote" className={pathname.startsWith("/admin/angebote") ? "active" : ""}>Angebote</Link>
        <Link href="/admin/referenzprojekte" className={pathname.startsWith("/admin/referenzprojekte") ? "active" : ""}>Referenzprojekte</Link>
        <hr />
        <Link href="/" target="_blank">Website ansehen</Link>
      </nav>
      <main className="admin-main">{children}</main>
    </div>
  );
}