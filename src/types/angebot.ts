export interface Energieausweis {
  art?: string;
  endenergieverbrauch?: string;
  primaerenergieverbrauch?: string;
  energieeffizienzklasse?: string;
  energietraeger?: string;
  gebaeudebaujahr?: string;
  waermeerzeugerBaujahr?: string;
  gueltigBis?: string;
  registriernummer?: string;
}

export interface Angebot {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  address: string;
  price: string;
  size: string;
  rooms: string;
  objekttyp: string;
  baujahr: string;
  baederanzahl: string;
  hausgeld: string;
  provisionsfrei: boolean;
  uebergabe: string;
  lage: string;
  features: string[];
  images: string[];
  energieausweis: Energieausweis;
  raumaufteilung: Record<string, string>;
  status: string;
  created_at?: string;
  updated_at?: string;
}
