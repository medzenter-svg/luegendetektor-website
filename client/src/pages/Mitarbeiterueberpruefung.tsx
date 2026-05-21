import { useEffect } from "react";
import { Link } from "wouter";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function Mitarbeiterueberpruefung() {
  useEffect(() => {
    document.title = "Mitarbeiterüberprüfung Polygraph | Einstellungstest | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Mitarbeiterüberprüfung mit Polygraph für Unternehmen. Einstellungstests, Zuverlässigkeitsprüfungen und Sicherheitsüberprüfungen. Bundesweit. +49 175 6036003");
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    { icon: "fas fa-shield-alt", title: "Sicherheitsüberprüfung", text: "Überprüfung von Mitarbeitern in sicherheitsrelevanten Positionen – Zugang zu sensiblen Daten, Finanzen oder Infrastruktur." },
    { icon: "fas fa-user-check", title: "Einstellungstest", text: "Überprüfung von Bewerbern vor der Einstellung – Ehrlichkeit, Zuverlässigkeit und Integrität objektiv feststellen." },
    { icon: "fas fa-sync-alt", title: "Regelmäßige Kontrollen", text: "Planmäßige Überprüfungen bestehender Mitarbeiter in Schlüsselpositionen zur Aufrechterhaltung von Vertrauen und Sicherheit." },
    { icon: "fas fa-arrow-up", title: "Vor Beförderungen", text: "Überprüfung von Mitarbeitern vor der Übertragung erweiterter Verantwortlichkeiten oder Zugriffsrechte." },
    { icon: "fas fa-building", title: "Für alle Branchen", text: "Geeignet für Finanzdienstleister, Logistik, Einzelhandel, IT-Unternehmen, Kanzleien und alle anderen Branchen." },
    { icon: "fas fa-handshake", title: "Rechtssichere Durchführung", text: "Alle Untersuchungen erfolgen mit ausdrücklicher Zustimmung der Mitarbeiter und im Einklang mit deutschem Arbeitsrecht." },
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

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d4a7a 100%)`, padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
            Für Unternehmen · Bundesweit
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px" }}>
            Mitarbeiterüberprüfung mit Polygraph
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "20px", lineHeight: 1.7, marginBottom: "36px" }}>
            Stellen Sie nur ein, wem Sie wirklich vertrauen können. Professionelle Polygraphuntersuchungen für Einstellungstests, Sicherheitsüberprüfungen und planmäßige Kontrollen. <strong style={{ color: ORANGE }}>Bundesweit verfügbar.</strong>
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
            <Link href="/#contact" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: `2px solid rgba(255,255,255,0.3)`, color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
              Beratung anfragen
            </Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "60px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, textAlign: "center", marginBottom: "12px", textTransform: "uppercase" }}>
            Einsatzbereiche der Mitarbeiterüberprüfung
          </h2>
          <p style={{ color: TEXT_MID, textAlign: "center", fontSize: "17px", marginBottom: "48px" }}>
            Von der Einstellung bis zur regelmäßigen Kontrolle – wir bieten maßgeschneiderte Lösungen für Unternehmen jeder Größe.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="detail-grid">
            {benefits.map((b, i) => (
              <div key={i} style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "28px 24px", border: `1px solid ${BORDER}` }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: NAVY, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <i className={b.icon} style={{ color: ORANGE, fontSize: "20px" }} />
                </div>
                <h3 style={{ color: NAVY, fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>{b.title}</h3>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.6, margin: 0 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: LIGHT_BG, padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, marginBottom: "20px" }}>
            Warum Polygraph bei der Mitarbeiterüberprüfung?
          </h2>
          <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}>
            Traditionelle Einstellungsverfahren wie Bewerbungsgespräche und Referenzprüfungen geben nur begrenzte Einblicke in die tatsächliche Integrität eines Bewerbers. Ein <strong>Polygraphtest</strong> ermöglicht eine objektive, wissenschaftlich fundierte Überprüfung von Aussagen zu Vorstrafen, Drogenmissbrauch, früheren Verfehlungen oder Loyalitätsfragen.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}>
            Unsere Spezialisten kommen direkt zu Ihnen ins Unternehmen – ob in München, Berlin, Frankfurt, Hamburg oder anderen deutschen Städten. Alle Untersuchungen werden mit ausdrücklicher Zustimmung der Mitarbeiter und im Einklang mit deutschem Arbeitsrecht durchgeführt.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "32px" }}>
            Die Genauigkeit unserer Polygraphuntersuchungen liegt bei <strong>98–99%</strong>. Auf Wunsch erhalten Sie eine detaillierte schriftliche Dokumentation der Ergebnisse.
          </p>
          <div style={{ backgroundColor: WHITE, borderRadius: "10px", padding: "28px 32px", border: `1px solid ${BORDER}` }}>
            <p style={{ color: NAVY, fontWeight: 700, fontSize: "17px", marginBottom: "16px" }}>Jetzt Beratung anfragen:</p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "12px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="fas fa-phone" /> +49 175 6036003
              </a>
              <Link href="/#contact" style={{ backgroundColor: NAVY, color: WHITE, padding: "12px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
                Online anfragen
              </Link>
            </div>
            <p style={{ color: TEXT_MID, fontSize: "13px", marginTop: "12px" }}>Mo–So 9:00–22:00 Uhr · Streng vertraulich</p>
          </div>
        </div>
      </section>

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
