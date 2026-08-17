"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <p>
          Wir verwenden Cookies, um Ihnen die bestm&ouml;gliche Erfahrung auf unserer Website zu bieten.{" "}
          <Link href="/datenschutz">Mehr erfahren</Link>
        </p>
        <div className="cookie-banner-buttons">
          <button onClick={accept} className="cookie-btn cookie-btn-accept">Akzeptieren</button>
          <button onClick={decline} className="cookie-btn cookie-btn-decline">Ablehnen</button>
        </div>
      </div>
    </div>
  );
}