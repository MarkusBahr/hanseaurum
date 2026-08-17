import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-links">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
        <p className="footer-copy">&copy; 2025 J&amp;S Hanse Aurum GmbH</p>
      </div>
    </footer>
  );
}