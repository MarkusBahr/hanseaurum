import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Leistungen from "@/components/Leistungen";
import Immobilien from "@/components/Immobilien";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Leistungen />
      <Immobilien />
      <Kontakt />
      <Footer />
    </>
  );
}
