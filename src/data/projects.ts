export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  renovations: string[];
  vorher: string[];
  nachher: string[];
}

export const projects: Project[] = [
  {
    id: "hamburg-tonndorf",
    title: "Wohnung in Hamburg Tonndorf",
    subtitle: "Renovierte 3-Zimmer-Wohnung in ausgezeichneter Lage",
    description: "Diese Eigentumswohnung ca. 77m² im 2. Obergeschoss besticht durch einen durchdachten Grundriss und eine umfassende Sanierung, die den Wohnwert nachhaltig steigert. Das Badezimmer wurde vollständig erneuert. Elektrische Rollläden, zwei Balkone und ein Tiefgaragenstellplatz runden das Paket ab.",
    renovations: ["Heizkörper", "Designvinylboden in Eichenholzoptik", "Sanitärobjekte von Bächlein, Duravit, Geberit", "Wandoberfläche Feinputz", "Badezimmer mit Wandfliesen 30x60cm, Bodenfliesen 60x60cm", "Neue Türen", "Hochwertige moderne Einbauküche", "Erneuerung des Sicherungskasten", "Wasserleitungen im Badezimmer"],
    vorher: [
      "/assets/images/ec2bec_5f03eff29e834f12be090927b673e96e.jpeg",
      "/assets/images/ec2bec_2a5f5affe6aa4f00bc93cacfc0bbc4c5.jpeg",
      "/assets/images/ec2bec_d19f4237521e416ebb36c7bd07ebeeb5.jpeg",
      "/assets/images/ec2bec_d5c13866b1d84aaf9bd6d2fe26b658b2.jpeg",
      "/assets/images/ec2bec_11fcbc7f54eb4414aaa5877176e87400.jpeg",
    ],
    nachher: [
      "/assets/images/ec2bec_26d15fe413554fe98eed06b5668c09e9.jpeg",
      "/assets/images/ec2bec_7d7e547fae764c1a92096667c890a0ef.jpeg",
      "/assets/images/ec2bec_e132b1f735004a9fa6754e6f5a4cca0e.jpeg",
      "/assets/images/ec2bec_b54f5bcdb76c441f81074632f605010a.jpeg",
      "/assets/images/ec2bec_fd4a90fa89a84738ba92101f73459803.jpeg",
    ],
  },
  {
    id: "buxtehude",
    title: "Etagenwohnung in Buxtehude",
    subtitle: "Renovierte 2-Zimmer-Wohnung in Buxtehuder Altstadt",
    description: "Diese außerordentlich großzügige 2-Zimmer-Wohnung im Herzen der Buxtehuder Altstadt wurde umfassend modernisiert. Auf ca. 92 m² erwartet Sie ein modernes Wohnkonzept mit zeitloser Eleganz. Das originale Stäbchenparkett wurde aufwendig aufgearbeitet.",
    renovations: ["Aufarbeitung und Versiegelung des Stäbchenparketts", "Aufarbeitung und Lackierung von Türen und Zargen", "Neugestaltung Hauptbad mit Mikrozement und mattschwarzen Armaturen", "Modernisierung Gäste-WC", "Neue Einbauküche mit 100cm Induktionskochfeld", "Erneuerung des Sicherungskastens"],
    vorher: [
      "/assets/images/ec2bec_7f979fa4b40340da8c7b3bb496e88a33.jpeg",
      "/assets/images/ec2bec_dfd70c5ca8894d4d854433d0f2ed3fbf.jpeg",
      "/assets/images/ec2bec_519477b3ace94c38bf0c45506e16cbb9.jpeg",
    ],
    nachher: [
      "/assets/images/ec2bec_950566a8349d406b990ab47618a935f7.jpeg",
      "/assets/images/ec2bec_b5455584378d4849af82a1d285b88f4a.jpeg",
      "/assets/images/ec2bec_d36a6599b0984554b0dfc9c62b0ba7a7.jpeg",
    ],
  },
  {
    id: "pinneberg",
    title: "Doppelhaushälfte in Pinneberg",
    subtitle: "Frisch sanierte Doppelhaushälfte mit 4,5 Zimmern und großem Grundstück",
    description: "Mit ca. 115 m² Wohnfläche und großzügigem Garten. Das 1937 erbaute Haus wurde umfassend modernisiert. Fugenlose Bäder mit Mikrozement, komfortable 4,5-Zimmer-Aufteilung auf 2 Etagen.",
    renovations: ["Sämtliche Wasser- & Heizungsleitungen", "Elektroleitungen", "Gasheizung von Wolf mit Wasserspeicher", "Dämmung der Außenwände WDVS", "Designvinylboden in Eichenholzoptik", "Terrassenbelag aus WPC-Dielen", "Sanitärobjekte von Bächlein, Belaqua, Duravit, Geberit", "Badezimmer fugenlos mit Mikrozement", "Einfahrt mit Anthrazit Pflastersteinen", "Starkstromsteckdose für Wallbox"],
    vorher: [
      "/assets/images/ec2bec_ee68cfc5b23747019fcc7708396ecafe.jpeg",
      "/assets/images/ec2bec_b399e9170a744afbb3149daf7240fb8a.jpeg",
      "/assets/images/ec2bec_2a7358612dd342a492818767fa2ab45d.jpeg",
    ],
    nachher: [
      "/assets/images/ec2bec_e1819251a2a549a9a2b4e9445e411d1e.jpeg",
      "/assets/images/ec2bec_1cb87bb761d24250a0433fa41366d272.jpeg",
      "/assets/images/ec2bec_8559465370ef417b8ab93dbe5f8fe566.jpeg",
    ],
  },
  {
    id: "barmstedt",
    title: "Etagenwohnung in Barmstedt",
    subtitle: "Renovierte 3-Zimmer-Wohnung mit moderner Einbauküche und hochwertiger Ausstattung",
    description: "Das gepflegte Rotklinker-Mehrfamilienhaus aus 1964 in zentraler Lage. Hochwertig renovierte 54 m² mit stilvollem Designvinylboden in Eichenholzoptik und platzsparender Schiebetür.",
    renovations: ["Elektroleitungen", "Wasserleitungen", "Heizkörper", "Designvinylboden in Eichenholzoptik", "Sanitärobjekte von Bächlein, Duravit, Geberit", "Wandoberfläche Feinputz", "Badezimmer fugenlos mit Mikrozement", "Neue Türzargen und Türen", "Hochwertige moderne Einbauküche"],
    vorher: [
      "/assets/images/ec2bec_1a3d545105174964a4d65da8d65c5f33.jpeg",
      "/assets/images/ec2bec_566680d815194924876165197c5e2aea.jpeg",
      "/assets/images/ec2bec_897d8ec6a5ac420d9d72c1606811d105.jpeg",
    ],
    nachher: [
      "/assets/images/ec2bec_d5953cdae3cd450ca60b27ad9cbbac3c.jpeg",
      "/assets/images/ec2bec_184f9ae153c44219b27f06372d8a2191.jpeg",
      "/assets/images/ec2bec_65adff6e29b84a709d3320581469fe04.jpeg",
    ],
  },
  {
    id: "elstorf",
    title: "Mehrfamilienhaus in Elstorf",
    subtitle: "Aus drei werden vier: Mehrfamilienhaus umfassend saniert",
    description: "Mehrfamilienhaus von drei auf vier Wohneinheiten erweitert. Jede Einheit wurde individuell modernisiert mit hochwertigen Materialien und zeitgemäßer Technik.",
    renovations: ["Designvinylboden in Eichenholzoptik", "Wände verputzt und gestrichen", "Neue Einbauküchen", "Erneuerung der Schaltkästen mit Blitzschutz", "Neue Duschwand, WC und LED Badspiegel", "Gira Steckdosen und Schalter"],
    vorher: [
      "/assets/images/ec2bec_ffd8052714b948a4a101d437e996c92b.jpeg",
      "/assets/images/ec2bec_e46bbbe837f3498aa83780bf1444c197.jpeg",
      "/assets/images/ec2bec_6030198c18f04a2984b5cd6f7d916779.jpeg",
      "/assets/images/ec2bec_9d115c5b0a744ec8ad019a3d1e7f9631.jpeg",
      "/assets/images/ec2bec_9f0e7bbfc08848959199657646ccaac3.jpeg",
      "/assets/images/ec2bec_8606e89462b6472ca8dadd140f830a78.jpeg",
    ],
    nachher: [
      "/assets/images/ec2bec_90d180a020b54331be543e59eccbf2c8.jpeg",
      "/assets/images/ec2bec_4eb81f496f794bdc83a222537b249124.jpeg",
      "/assets/images/ec2bec_e702b84ac0e4494888e2b251ed7dd88b.jpeg",
      "/assets/images/ec2bec_feedb483b1784909b401aa20b1de9fbc.jpeg",
      "/assets/images/ec2bec_0273b01cb661489a9f51a51b95d60f91.jpeg",
      "/assets/images/ec2bec_298aa3f336cc448a8f453113eb85509b.jpeg",
    ],
  },
];