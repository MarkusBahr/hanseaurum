import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AngeboteList from "@/components/AngeboteList";

export default function AngebotePage() {
  return (
    <>
      <Header />
      <section className="section" style={{ paddingTop: "140px" }}>
        <div className="container">
          <h1 className="section-title">AKTUELLE ANGEBOTE</h1>
          <p style={{ textAlign: "center", color: "#666", marginBottom: "3rem" }}>
            Entdecken Sie unsere aktuellen Immobilienangebote in Hamburg und Umgebung.
          </p>
          <AngeboteList />
        </div>
      </section>
      <Footer />
    </>
  );
}