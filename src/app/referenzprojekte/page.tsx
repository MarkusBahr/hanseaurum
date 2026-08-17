"use client";

import { projects } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/ProjectDetail";

export default function Referenzprojekte() {
  return (
    <>
      <Header />
      <section className="section" style={{ paddingTop: "140px" }}>
        <div className="container">
          <h1 className="section-title">REFERENZPROJEKTE</h1>
          <p className="ref-page-intro">Unsere bisherigen Erfolgsprojekte</p>
          {projects.map((p) => (
            <ProjectDetail key={p.id} project={p} variant="slider" />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}