import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import SocialButtons from "@/components/SocialButtons";

export const metadata: Metadata = {
  title: "J&S Hanse Aurum GmbH",
  description: "Hanse Aurum \u2013 Professionelle Entwicklung, Sanierung und An- & Verkauf von Immobilien in Hamburg und Umgebung.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/assets/images/ec2bec_04f7116ff8414db4b528e6c04824a3a3.jpeg" type="image/jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}<SocialButtons /><CookieBanner /></body>
    </html>
  );
}
