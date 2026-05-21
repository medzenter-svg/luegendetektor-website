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

export default function LuegendetekorMuenchen() {
  useEffect(() => {
    document.title = "Lügendetektor Test München | Professioneller Polygraph | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Professioneller Lügendetektor Test in München. Diskrete Polygraphuntersuchungen für Privatpersonen und Unternehmen. Genauigkeit 98–99%. Termin in 24 Stunden. +49 175 6036003");
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: "fas fa-map-marker-alt", title: "Zentral in München", text: "Unser Büro liegt zentral in München – gut erreichbar mit öffentlichen Verkehrsmitteln und PKW. Diskrete Lage, keine Außenwerbung." },
    { icon: "fas fa-clock", title: "Termin in 24 Stunden", text: "Wir bieten kurzfristige Termine – oft bereits am nächsten Tag. Für dringende Fälle auch Express-Termine möglich." },
    { icon: "fas fa-user-tie", title: "Zertifizierte Spezialisten", text: "Unsere Polygraphen-Experten verfügen über langjährige Erfahrung und internationale Zertifizierungen." },
    { icon: "fas fa-lock", title: "Absolute Diskretion", text: "Alle Untersuchungen werden streng vertraulich behandelt. Keine Weitergabe von Daten an Dritte." },
    { icon: "fas fa-home", title: "Hausbesuch möglich", text: "Auf Wunsch kommen wir zu Ihnen – ob Privathaushalt, Büro oder Hotel in München und Umgebung." },
    { icon: "fas fa-file-alt", title: "Schriftliche Auswertung", text: "Sie erhalten eine detaillierte schriftliche Dokumentation des Testergebnisses auf Wunsch." },
  ];

  const services = [
    { icon: "fas fa-heart-broken", label: "Treuetest" },
    { icon: "fas fa-ring", label: "Überprüfung vor der Hochzeit" },
    { icon: "fas fa-search", label: "Aufklärung von Diebstählen" },
    { icon: "fas fa-user-check", label: "Mitarbeiterüberprüfung" },
    { icon: "fas fa-home", label: "Überprüfung von Hauspersonal" },
    { icon: "fas fa-briefcase", label: "Interne Ermittlungen" },
  ];

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: TEXT_DARK }}>
      <SharedNavbar />
      {/* Navbar */}
      

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d4a7a 100%)`, padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
            München · Bayern · Bundesweit
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px" }}>
            Lügendetektor Test München
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "20px", lineHeight: 1.7, marginBottom: "36px" }}>
            Professionelle Polygraphuntersuchungen in München – diskret, zuverlässig und mit <strong style={{ color: ORANGE }}>98–99% Genauigkeit</strong>. Termine für Privatpersonen und Unternehmen.
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

      {/* Features */}
      <section style={{ backgroundColor: WHITE, padding: "60px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, textAlign: "center", marginBottom: "12px", textTransform: "uppercase" }}>
            Warum Lügendetektor Test München?
          </h2>
          <p style={{ color: TEXT_MID, textAlign: "center", fontSize: "17px", marginBottom: "48px", maxWidth: "600px", margin: "0 auto 48px" }}>
            Wir sind Ihr lokaler Ansprechpartner für professionelle Polygraphuntersuchungen in München und ganz Bayern.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="detail-grid">
            {features.map((f, i) => (
              <div key={i} style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "28px 24px", border: `1px solid ${BORDER}` }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: NAVY, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <i className={f.icon} style={{ color: ORANGE, fontSize: "20px" }} />
                </div>
                <h3 style={{ color: NAVY, fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>{f.title}</h3>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.6, margin: 0 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: LIGHT_BG, padding: "60px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase" }}>
            Unsere Leistungen in München
          </h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", marginBottom: "40px" }}>
            Wir bieten ein breites Spektrum an Polygraphuntersuchungen – für jeden Bedarf die passende Lösung.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} className="detail-grid">
            {services.map((s, i) => (
              <div key={i} style={{ backgroundColor: WHITE, borderRadius: "8px", padding: "20px 16px", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", gap: "12px" }}>
                <i className={s.icon} style={{ color: ORANGE, fontSize: "20px", flexShrink: 0 }} />
                <span style={{ color: TEXT_DARK, fontWeight: 600, fontSize: "15px" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Text */}
      <section style={{ backgroundColor: WHITE, padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, marginBottom: "20px" }}>
            Lügendetektor Test in München – Was Sie wissen sollten
          </h2>
          <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}>
            Ein <strong>Lügendetektor Test in München</strong> (auch Polygraphtest oder Polygraphuntersuchung genannt) ist eine wissenschaftlich fundierte Methode zur Überprüfung der Aussagewahrheit. Dabei werden physiologische Reaktionen wie Atemfrequenz, Hautleitwert, Blutdruck und Herzrate gemessen und ausgewertet.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}>
            Unsere Spezialisten in München führen Polygraphuntersuchungen nach internationalen Standards durch. Die Genauigkeit liegt bei <strong>98–99%</strong> – deutlich höher als bei anderen Methoden der Wahrheitsfindung.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "32px" }}>
            Ob Treuetest, Überprüfung vor der Hochzeit, interne Firmenermittlung oder Aufklärung von Diebstählen – wir bieten diskrete und professionelle Lösungen für alle Anliegen. Termine sind kurzfristig in München sowie auf Anfrage auch in ganz Bayern, Österreich und der Schweiz möglich.
          </p>
          <div style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "28px 32px", border: `1px solid ${BORDER}` }}>
            <p style={{ color: NAVY, fontWeight: 700, fontSize: "17px", marginBottom: "16px" }}>Jetzt Termin vereinbaren:</p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "12px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="fas fa-phone" /> +49 175 6036003
              </a>
              <Link href="/#contact" style={{ backgroundColor: NAVY, color: WHITE, padding: "12px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
                Online anfragen
              </Link>
            </div>
            <p style={{ color: TEXT_MID, fontSize: "13px", marginTop: "12px", margin: "12px 0 0" }}>Mo–So 9:00–22:00 Uhr · Diskret · Vertraulich</p>
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
