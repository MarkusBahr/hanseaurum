import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Leistungen from "@/components/Leistungen";
import AboutUs from "@/components/AboutUs";
import Referenzprojekte from "@/components/Referenzprojekte";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Leistungen />
      <AboutUs />
      <Referenzprojekte />
      <Kontakt />
      <Footer />
    </>
  );
}
