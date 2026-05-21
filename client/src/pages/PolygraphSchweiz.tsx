import { useEffect } from "react";
import { Link } from "wouter";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function PolygraphSchweiz() {
  useEffect(() => {
    document.title = "Polygraph Schweiz | Lügendetektor Test Schweiz | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Polygraph & Lügendetektor-Tests in der Schweiz. Professionelle Untersuchungen in Zürich, Bern, Basel und weiteren Schweizer Städten. Diskret & vertraulich. +49 175 6036003");
    window.scrollTo(0, 0);
  }, []);

  const cities = [
    { name: "Zürich", desc: "Schweizer Wirtschaftszentrum – unser wichtigster Standort in der Schweiz mit regelmäßigen Terminen." },
    { name: "Bern", desc: "Bundeshauptstadt – Polygraphuntersuchungen für Behörden, Unternehmen und Privatpersonen." },
    { name: "Basel", desc: "Grenznahe Lage zu Deutschland – besonders günstige Anreise für unsere Spezialisten." },
    { name: "Genf", desc: "Internationales Zentrum – diskrete Untersuchungen für internationale Klientel auf Anfrage." },
    { name: "Lausanne", desc: "Westschweiz – Polygraphuntersuchungen auf Anfrage, auch auf Französisch verfügbar." },
    { name: "Luzern", desc: "Zentralschweiz – professionelle Untersuchungen für Privat- und Unternehmenskunden." },
  ];

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: TEXT_DARK }}>
      <nav style={{ backgroundColor: NAVY, padding: "0 24px", position: "sticky", top: 0, zIndex: 1000, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <Link href="/" style={{ color: WHITE, fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/manus-storage/logo_clean_f9c5298d.png" alt="Lügendetektor München Logo" style={{ width: "38px", height: "38px", objectFit: "contain" }} />
            luegendetektor-test-muenchen.de
          </Link>
          <Link href="/#contact" style={{ backgroundColor: ORANGE, color: WHITE, padding: "9px 20px", borderRadius: "6px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
            Jetzt anfragen
          </Link>
        </div>
      </nav>

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1e3a5f 100%)`, padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
            Schweiz · Diskret · Professionell
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 5vw, 46px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px" }}>
            Polygraph & Lügendetektor in der Schweiz
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "19px", lineHeight: 1.7, marginBottom: "36px" }}>
            Professionelle Polygraphuntersuchungen in Zürich, Bern, Basel und weiteren Schweizer Städten. <strong style={{ color: ORANGE }}>98–99% Genauigkeit</strong> – für Privatpersonen und Unternehmen.
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
          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, marginBottom: "16px" }}>Polygraphuntersuchungen in der ganzen Schweiz</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.8, marginBottom: "40px" }}>
            Unser Team aus erfahrenen Polygraphspezialisten ist in der gesamten Schweiz tätig. Ob in Zürich, Bern, Basel oder anderen Schweizer Städten – wir kommen zu Ihnen oder empfangen Sie in unserem Büro. Alle Untersuchungen werden nach höchsten professionellen Standards durchgeführt und sind streng vertraulich.
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
            <h3 style={{ color: NAVY, fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>Unsere Leistungen in der Schweiz</h3>
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
            <h2 style={{ color: WHITE, fontSize: "24px", fontWeight: 700, marginBottom: "12px" }}>Termin in der Schweiz vereinbaren</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", marginBottom: "24px" }}>Kostenlose Erstberatung – in der Schweiz und im gesamten deutschsprachigen Raum verfügbar. Mo–So 9:00–22:00 Uhr.</p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>← Zurück zur Startseite</Link>
            <Link href="/polygraph-zuerich" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Polygraph Zürich</Link>
            <Link href="/polygraph-oesterreich" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Polygraph Österreich</Link>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: NAVY, padding: "32px 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", margin: 0 }}>
          © 2025 luegendetektor-test-muenchen.de · <a href="tel:+4917560360003" style={{ color: ORANGE, textDecoration: "none" }}>+49 175 6036003</a> · Mo–So 9:00–22:00 Uhr
        </p>
      </footer>
    </div>
  );
}
