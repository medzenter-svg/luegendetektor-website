import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function PolygraphWien() {
  useEffect(() => {
    document.title = "Polygraph Wien | Lügendetektor Test Österreich | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Professioneller Polygraph Test in Wien und ganz Österreich. Diskrete Lügendetektor-Untersuchungen für Privatpersonen und Unternehmen. Termin auf Anfrage. +49 175 6036003");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: TEXT_DARK }}>
      <SharedNavbar />
      {/* Navbar */}
      

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d4a7a 100%)`, padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
            Wien · Österreich · DACH-Region
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px" }}>
            Polygraph Test Wien & Österreich
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "20px", lineHeight: 1.7, marginBottom: "36px" }}>
            Diskrete Polygraphuntersuchungen in Wien und ganz Österreich. Unsere mobilen Spezialisten kommen zu Ihnen – <strong style={{ color: ORANGE }}>vertraulich und professionell</strong>.
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

      {/* Content */}
      <section style={{ backgroundColor: WHITE, padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, marginBottom: "20px" }}>
            Lügendetektor Test in Wien – Diskret & Professionell
          </h2>
          <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}>
            Unsere Zentrale in München koordiniert <strong>Polygraphuntersuchungen in Wien</strong> und ganz Österreich. Durch unser Netzwerk mobiler Spezialisten können wir Termine in Wien, Graz, Salzburg, Linz und weiteren österreichischen Städten organisieren.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}>
            Ein <strong>Polygraph Test in Wien</strong> eignet sich für Privatpersonen, die Klarheit in persönlichen Angelegenheiten suchen, sowie für Unternehmen, die interne Ermittlungen oder Mitarbeiterüberprüfungen durchführen möchten.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "32px" }}>
            Alle Untersuchungen werden mit modernster Computertechnologie durchgeführt und von zertifizierten Polygraphen-Experten ausgewertet. Die Genauigkeit liegt bei <strong>98–99%</strong>.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "40px" }}>
            {[
              { icon: "fas fa-map-marker-alt", text: "Vor-Ort-Termine in Wien möglich" },
              { icon: "fas fa-lock", text: "Absolute Diskretion garantiert" },
              { icon: "fas fa-certificate", text: "Zertifizierte Spezialisten" },
              { icon: "fas fa-file-alt", text: "Schriftliche Ergebnisdokumentation" },
              { icon: "fas fa-clock", text: "Flexible Terminvereinbarung" },
              { icon: "fas fa-phone", text: "Persönliche Beratung vorab" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", backgroundColor: LIGHT_BG, borderRadius: "8px", padding: "14px 16px", border: `1px solid ${BORDER}` }}>
                <i className={item.icon} style={{ color: ORANGE, fontSize: "18px", flexShrink: 0 }} />
                <span style={{ color: TEXT_DARK, fontSize: "15px", fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "28px 32px", border: `1px solid ${BORDER}` }}>
            <p style={{ color: NAVY, fontWeight: 700, fontSize: "17px", marginBottom: "16px" }}>Termin in Wien vereinbaren:</p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "12px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="fas fa-phone" /> +49 175 6036003
              </a>
              <Link href="/#contact" style={{ backgroundColor: NAVY, color: WHITE, padding: "12px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
                Online anfragen
              </Link>
            </div>
            <p style={{ color: TEXT_MID, fontSize: "13px", marginTop: "12px" }}>Mo–So 9:00–22:00 Uhr · Diskret · Vertraulich</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: NAVY, padding: "32px 24px", textAlign: "center" }}>
        <Link href="/" style={{ color: ORANGE, fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
          ← Zurück zur Startseite
        </Link>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginTop: "16px" }}>
          © 2025 luegendetektor-test-muenchen.de · Alle Rechte vorbehalten
        </p>
      </footer>
    </div>
  );
}
