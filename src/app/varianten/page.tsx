"use client";

import { useState } from "react";
import LeistungenA from "@/components/LeistungenA";
import LeistungenB from "@/components/LeistungenB";
import LeistungenC from "@/components/LeistungenC";

export default function Varianten() {
  const [active, setActive] = useState<"A" | "B" | "C">("A");

  return (
    <div style={{ paddingTop: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
        <button onClick={() => setActive("A")} className={`link-btn${active === "A" ? " active-var" : ""}`}>Variante A: Overlay Cards</button>
        <button onClick={() => setActive("B")} className={`link-btn${active === "B" ? " active-var" : ""}`}>Variante B: Dunkel + Wei\u00dfer Text</button>
        <button onClick={() => setActive("C")} className={`link-btn${active === "C" ? " active-var" : ""}`}>Variante C: Full-Width Slider</button>
      </div>
      {active === "A" && <LeistungenA />}
      {active === "B" && <LeistungenB />}
      {active === "C" && <LeistungenC />}
    </div>
  );
}
