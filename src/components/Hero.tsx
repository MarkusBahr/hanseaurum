export default function Hero() {
  return (
    <section className="hero" id="home">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/assets/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">WOHNRAUM MIT<br />SUBSTANZ</h1>
      </div>
    </section>
  );
}
