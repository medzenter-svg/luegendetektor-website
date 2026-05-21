import { useEffect } from "react";
import { Link } from "wouter";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function RatgeberGenauigkeit() {
  useEffect(() => {
    document.title = "Wie genau ist ein Lügendetektor? | Ratgeber Polygraph | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Polygraphen erreichen in professionellen Händen eine Genauigkeit von 98–99%. Erfahren Sie, was hinter dieser Zahl steckt und wie ein seriöser Test funktioniert.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: TEXT_DARK }}>
      <nav style={{ backgroundColor: NAVY, padding: "0 24px", position: "sticky", top: 0, zIndex: 1000, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <Link href="/" style={{ color: WHITE, fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <i className="fas fa-wave-square" style={{ color: ORANGE }} />
            luegendetektor-test-muenchen.de
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link href="/ratgeber" style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>← Ratgeber</Link>
            <Link href="/#contact" style={{ backgroundColor: ORANGE, color: WHITE, padding: "9px 20px", borderRadius: "6px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
              Jetzt anfragen
            </Link>
          </div>
        </div>
      </nav>

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d4a7a 100%)`, padding: "70px 24px 50px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>
            Technik & Wissenschaft · 5 Min. Lesezeit
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 800, lineHeight: 1.2, marginBottom: "16px" }}>
            Wie genau ist ein Lügendetektor? Fakten & Mythen
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", lineHeight: 1.7 }}>
            Polygraphen erreichen in professionellen Händen eine Genauigkeit von 98–99%. Was steckt hinter dieser Zahl?
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "60px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          <h2 style={{ color: NAVY, fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>Was misst ein Polygraph?</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.9, marginBottom: "24px" }}>
            Ein Polygraph – auch Lügendetektor genannt – misst gleichzeitig mehrere physiologische Parameter: Atemfrequenz, Herzrate, Blutdruck und den galvanischen Hautwiderstand (Schweißproduktion). Diese Werte verändern sich unwillkürlich, wenn eine Person lügt oder unter Stress steht.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.9, marginBottom: "32px" }}>
            Der Polygraph selbst lügt nicht – er misst nur die körperlichen Reaktionen. Die Interpretation dieser Daten erfordert jedoch einen erfahrenen Spezialisten mit fundierter Ausbildung und jahrelanger Praxis.
          </p>

          <div style={{ backgroundColor: LIGHT_BG, borderRadius: "12px", padding: "32px", marginBottom: "32px", borderLeft: `4px solid ${ORANGE}` }}>
            <h3 style={{ color: NAVY, fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>Die 98–99% Genauigkeit erklärt</h3>
            <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              Die Genauigkeitsrate von 98–99% bezieht sich auf professionell durchgeführte Untersuchungen durch zertifizierte Polygraphspezialisten. Diese Zahl basiert auf wissenschaftlichen Studien und der praktischen Erfahrung von Experten weltweit.
            </p>
            <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
              Wichtig: Diese Genauigkeit ist nur bei korrekter Durchführung erreichbar – mit standardisierten Fragen, professioneller Auswertung und einem erfahrenen Spezialisten.
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>Mythen über den Lügendetektor</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
            {[
              { myth: "Mythos: Man kann den Polygraphen austricksen", fact: "Fakt: Versuche, den Polygraphen zu täuschen, sind in der Regel erkennbar und führen zu auffälligen Mustern in den Messdaten. Erfahrene Spezialisten erkennen solche Versuche zuverlässig." },
              { myth: "Mythos: Polygraphen sind unzuverlässig", fact: "Fakt: Bei professioneller Durchführung durch zertifizierte Spezialisten erreichen Polygraphuntersuchungen eine Genauigkeit von 98–99% – deutlich höher als andere Methoden der Wahrheitsfindung." },
              { myth: "Mythos: Nervöse Menschen fallen immer durch", fact: "Fakt: Nervosität allein verändert die Messwerte nicht in einer Weise, die als Lüge interpretiert wird. Erfahrene Spezialisten berücksichtigen den individuellen Grundzustand jeder Person." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: LIGHT_BG, borderRadius: "8px", padding: "24px", border: `1px solid ${BORDER}` }}>
                <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>{item.myth}</p>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{item.fact}</p>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>Wann ist ein Polygraphtest sinnvoll?</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.9, marginBottom: "24px" }}>
            Ein Polygraphtest ist dann sinnvoll, wenn andere Methoden der Wahrheitsfindung nicht ausreichen oder wenn eine objektive, wissenschaftlich fundierte Überprüfung benötigt wird. Typische Anwendungsfälle sind Treuetests, Mitarbeiterüberprüfungen, interne Ermittlungen und Sicherheitsprüfungen.
          </p>

          <div style={{ backgroundColor: NAVY, borderRadius: "12px", padding: "36px", marginBottom: "40px", textAlign: "center" }}>
            <h3 style={{ color: WHITE, fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>Kostenlose Beratung anfragen</h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", marginBottom: "20px" }}>Unsere Experten beantworten alle Ihre Fragen – diskret und unverbindlich.</p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "12px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/ratgeber" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>← Alle Ratgeber-Artikel</Link>
            <Link href="/ratgeber/kosten-polygraph" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Was kostet ein Polygraph-Test?</Link>
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
