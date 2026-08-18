import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AngebotDetail from "@/components/AngebotDetail";

export default async function AngebotPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <Header />
      <section className="section" style={{ paddingTop: "140px" }}>
        <div className="container">
          <AngebotDetail id={id} />
        </div>
      </section>
      <Footer />
    </>
  );
}