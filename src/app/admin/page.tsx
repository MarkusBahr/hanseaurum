"use client";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ angebote: 0, referenzprojekte: 0 });

  useEffect(() => {
    Promise.all([
      fetch("/api/angebote").then(r => r.json()),
      fetch("/api/referenzprojekte").then(r => r.json()),
    ]).then(([a, r]) => {
      setStats({ angebote: a.length, referenzprojekte: r.length });
    });
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Dashboard</h1>
      <div className="admin-stats">
        <div className="admin-stat-card">
          <h3>{stats.angebote}</h3>
          <p>Angebote</p>
        </div>
        <div className="admin-stat-card">
          <h3>{stats.referenzprojekte}</h3>
          <p>Referenzprojekte</p>
        </div>
      </div>
    </div>
  );
}