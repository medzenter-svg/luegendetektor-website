import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import FloatingButtons from "../components/FloatingButtons";
import SharedFooter from "../components/SharedFooter";
import Breadcrumb from "../components/Breadcrumb";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function PolygraphOesterreich() {
  useEffect(() => {
    document.title = "Polygraph Österreich | Lügendetektor Test Österreich | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Polygraph & Lügendetektor-Tests in Österreich. Professionelle Polygraphuntersuchungen in Wien, Graz, Linz und weiteren österreichischen Städten. Diskret & vertraulich. +49 175 6036003");
    window.scrollTo(0, 0);
  }, []);

  const cities = [
    { name: "Wien", desc: "Österreichs Hauptstadt – unser wichtigster Standort in Österreich mit regelmäßigen Terminen." },
    { name: "Graz", desc: "Steiermarks Landeshauptstadt – Untersuchungen auf Anfrage, Anreise oder Vor-Ort-Service." },
    { name: "Linz", desc: "Oberösterreichs Zentrum – professionelle Polygraphuntersuchungen auf Anfrage." },
    { name: "Salzburg", desc: "Grenznahe Lage zu Bayern – besonders günstige Anreise für unsere Spezialisten." },
    { name: "Innsbruck", desc: "Tirol – Polygraphuntersuchungen für Privat- und Unternehmenskunden auf Anfrage." },
    { name: "Klagenfurt", desc: "Kärnten – diskrete Untersuchungen für Privatpersonen und Unternehmen." },
  ];

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: TEXT_DARK }}>
      <SharedNavbar />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Polygraph Österreich" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d4a7a 100%)`, padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
            Österreich · Diskret · Professionell
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 5vw, 46px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px" }}>
            Polygraph & Lügendetektor in Österreich
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "19px", lineHeight: 1.7, marginBottom: "36px" }}>
            Professionelle Polygraphuntersuchungen in Wien, Graz, Linz und weiteren österreichischen Städten. <strong style={{ color: ORANGE }}>98–99% Genauigkeit</strong> – für Privatpersonen und Unternehmen.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
            <Link href="/#contact" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: `2px solid rgba(255,255,255,0.3)`, color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
              Termin anfragen
            </Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "60px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, marginBottom: "16px" }}>Polygraphuntersuchungen in ganz Österreich</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.8, marginBottom: "40px" }}>
            Unser Team aus erfahrenen Polygraphspezialisten ist in ganz Österreich tätig. Ob in Wien, Graz, Linz oder anderen österreichischen Städten – wir kommen zu Ihnen oder empfangen Sie in unserem Büro. Alle Untersuchungen werden nach höchsten professionellen Standards durchgeführt und sind streng vertraulich.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "48px" }}>
            {cities.map((c) => (
              <div key={c.name} style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "24px", border: `1px solid ${BORDER}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                  <i className="fas fa-map-marker-alt" style={{ color: ORANGE, fontSize: "18px" }} />
                  <h3 style={{ color: NAVY, fontSize: "18px", fontWeight: 700, margin: 0 }}>{c.name}</h3>
                </div>
                <p style={{ color: TEXT_MID, fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: LIGHT_BG, borderRadius: "12px", padding: "36px", marginBottom: "48px", borderLeft: `4px solid ${ORANGE}` }}>
            <h3 style={{ color: NAVY, fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>Unsere Leistungen in Österreich</h3>
            <ul style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 2, paddingLeft: "20px", margin: 0 }}>
              <li>Treuetest und Partnerschaftsüberprüfungen</li>
              <li>Mitarbeiterüberprüfung und Einstellungstests</li>
              <li>Interne Ermittlungen bei Diebstahl oder Betrug</li>
              <li>Sicherheitsprüfungen für sensible Positionen</li>
              <li>Hauspersonal-Überprüfungen</li>
              <li>Probetest / Demonstrationstest</li>
            </ul>
          </div>

          <div style={{ backgroundColor: NAVY, borderRadius: "12px", padding: "40px", marginBottom: "40px", textAlign: "center" }}>
            <h2 style={{ color: WHITE, fontSize: "24px", fontWeight: 700, marginBottom: "12px" }}>Termin in Österreich vereinbaren</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", marginBottom: "24px" }}>Kostenlose Erstberatung – bundesweit und in Österreich verfügbar. Mo–So 9:00–22:00 Uhr.</p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>← Zurück zur Startseite</Link>
            <Link href="/polygraph-wien" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Polygraph Wien</Link>
            <Link href="/polygraph-schweiz" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Polygraph Schweiz</Link>
          </div>
        </div>
      </section>
      <SharedFooter />
      <FloatingButtons />
    </div>
  );
}
