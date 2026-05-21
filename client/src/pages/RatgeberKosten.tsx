import { useEffect } from "react";
import { Link } from "wouter";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function RatgeberKosten() {
  useEffect(() => {
    document.title = "Was kostet ein Polygraph-Test? Preise erklärt | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Kosten für einen Lügendetektor-Test: Was beeinflusst den Preis? Welche Pakete gibt es? Alles zu Preisen und Faktoren beim Polygraph-Test erklärt.");
    window.scrollTo(0, 0);
  }, []);

  const factors = [
    { icon: "fas fa-clock", title: "Dauer der Untersuchung", text: "Eine vollständige Polygraphuntersuchung dauert 2–3 Stunden. Kürzere Probetest-Pakete sind günstiger als umfangreiche Untersuchungen." },
    { icon: "fas fa-list-ol", title: "Anzahl der Fragen", text: "Je mehr Themenbereiche abgedeckt werden sollen, desto umfangreicher und damit kostspieliger wird die Untersuchung." },
    { icon: "fas fa-map-marker-alt", title: "Anreise & Standort", text: "Untersuchungen in unserem Büro in München sind günstiger als Hausbesuche oder Reisen in andere Städte." },
    { icon: "fas fa-file-alt", title: "Schriftliche Dokumentation", text: "Ein detaillierter schriftlicher Bericht ist optional und erhöht den Preis, bietet aber wertvolle Dokumentation." },
  ];

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
            Kosten & Preise · 4 Min. Lesezeit
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 800, lineHeight: 1.2, marginBottom: "16px" }}>
            Was kostet ein Polygraph-Test? Preise & Pakete erklärt
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", lineHeight: 1.7 }}>
            Die Kosten für einen Lügendetektor-Test variieren je nach Umfang und Anbieter. Wir erklären, worauf Sie achten sollten.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "60px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          <h2 style={{ color: NAVY, fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>Preisrahmen für Polygraphuntersuchungen</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.9, marginBottom: "24px" }}>
            Die Kosten für eine professionelle Polygraphuntersuchung hängen von verschiedenen Faktoren ab. Als grobe Orientierung: Ein einfacher Probetest beginnt bei einem niedrigeren Preisniveau, während umfangreiche Untersuchungen mit schriftlicher Dokumentation entsprechend mehr kosten.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.9, marginBottom: "32px" }}>
            Wir empfehlen, immer ein individuelles Angebot anzufordern – denn jede Situation ist anders, und wir passen unsere Leistungen genau an Ihre Bedürfnisse an. Die <strong>Erstberatung ist kostenlos und unverbindlich</strong>.
          </p>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "20px" }}>Faktoren, die den Preis beeinflussen</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {factors.map((f) => (
              <div key={f.title} style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "24px", border: `1px solid ${BORDER}` }}>
                <i className={f.icon} style={{ color: ORANGE, fontSize: "24px", marginBottom: "12px", display: "block" }} />
                <h3 style={{ color: NAVY, fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>{f.title}</h3>
                <p style={{ color: TEXT_MID, fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{f.text}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: LIGHT_BG, borderRadius: "12px", padding: "32px", marginBottom: "32px", borderLeft: `4px solid ${ORANGE}` }}>
            <h3 style={{ color: NAVY, fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>Warum günstige Anbieter riskant sind</h3>
            <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              Ein Polygraphtest ist nur so gut wie der Spezialist, der ihn durchführt. Günstige Anbieter ohne nachgewiesene Qualifikation und Erfahrung liefern oft unzuverlässige Ergebnisse – was in sensiblen Situationen fatale Folgen haben kann.
            </p>
            <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
              Achten Sie auf: zertifizierte Spezialisten, transparente Methodik, klare Kommunikation und nachweisbare Erfahrung. Unser Team erfüllt alle diese Kriterien.
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>Unsere Pakete im Überblick</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.9, marginBottom: "24px" }}>
            Wir bieten verschiedene Pakete für unterschiedliche Bedürfnisse an – vom einfachen Probetest bis zur umfangreichen Unternehmensüberprüfung. Alle Pakete beinhalten eine kostenlose Erstberatung, die eigentliche Polygraphuntersuchung und eine mündliche Auswertung. Schriftliche Dokumentation ist optional erhältlich.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.9, marginBottom: "32px" }}>
            Für genaue Preisangaben kontaktieren Sie uns bitte direkt – wir erstellen Ihnen ein maßgeschneidertes Angebot basierend auf Ihrer spezifischen Situation.
          </p>

          <div style={{ backgroundColor: NAVY, borderRadius: "12px", padding: "36px", marginBottom: "40px", textAlign: "center" }}>
            <h3 style={{ color: WHITE, fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>Kostenloses Angebot anfragen</h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", marginBottom: "20px" }}>Wir beraten Sie kostenlos und erstellen ein individuelles Angebot – Mo–So 9:00–22:00 Uhr.</p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "12px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/ratgeber" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>← Alle Ratgeber-Artikel</Link>
            <Link href="/ratgeber/polygraph-legal-deutschland" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Ist ein Polygraphtest legal?</Link>
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
