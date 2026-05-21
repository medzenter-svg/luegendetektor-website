import { useEffect } from "react";
import { Link } from "wouter";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function RatgeberLegal() {
  useEffect(() => {
    document.title = "Ist ein Lügendetektor-Test in Deutschland legal? | Ratgeber | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Ja, ein Polygraphtest ist in Deutschland legal – unter bestimmten Bedingungen. Erfahren Sie die rechtlichen Grundlagen und was Sie beachten müssen.");
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
            Recht & Legalität · 6 Min. Lesezeit
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 800, lineHeight: 1.2, marginBottom: "16px" }}>
            Ist ein Lügendetektor-Test in Deutschland legal?
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", lineHeight: 1.7 }}>
            Ja – unter bestimmten Bedingungen ist ein Polygraphtest vollkommen legal. Wir erklären die rechtlichen Grundlagen.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "60px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          <div style={{ backgroundColor: "#e8f5e9", borderRadius: "10px", padding: "24px 28px", marginBottom: "32px", border: "1px solid #c8e6c9", display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <i className="fas fa-check-circle" style={{ color: "#2e7d32", fontSize: "24px", flexShrink: 0, marginTop: "2px" }} />
            <div>
              <p style={{ color: "#1b5e20", fontWeight: 700, fontSize: "17px", marginBottom: "6px" }}>Kurze Antwort: Ja, es ist legal</p>
              <p style={{ color: "#2e7d32", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>Ein Polygraphtest ist in Deutschland legal, sofern die zu testende Person freiwillig und informiert zustimmt. Wir holen immer eine schriftliche Einwilligung ein.</p>
            </div>
          </div>

          <h2 style={{ color: NAVY, fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>Die rechtliche Grundlage</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.9, marginBottom: "24px" }}>
            In Deutschland gibt es kein ausdrückliches Verbot von Polygraphuntersuchungen für private Zwecke. Das Bundesverfassungsgericht hat zwar entschieden, dass Polygraphtests im Strafprozess nicht als Beweismittel zugelassen sind – dies betrifft jedoch ausschließlich den staatlichen Strafprozess, nicht private Untersuchungen.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.9, marginBottom: "32px" }}>
            Für private Polygraphuntersuchungen – also solche, die von Privatpersonen oder Unternehmen in Auftrag gegeben werden – gilt: Sie sind vollkommen legal, solange die Grundsätze der freiwilligen Teilnahme und der informierten Einwilligung eingehalten werden.
          </p>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>Die drei Grundvoraussetzungen</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
            {[
              { num: "1", title: "Freiwillige Teilnahme", text: "Die zu testende Person muss freiwillig und ohne Zwang an der Untersuchung teilnehmen. Eine erzwungene Teilnahme ist nicht nur rechtlich problematisch, sondern verfälscht auch die Ergebnisse." },
              { num: "2", title: "Informierte Einwilligung", text: "Die Person muss vorab vollständig über den Ablauf, die Methodik und die Verwendung der Ergebnisse informiert werden. Wir holen immer eine schriftliche Einwilligung ein." },
              { num: "3", title: "Datenschutz & Vertraulichkeit", text: "Die Ergebnisse dürfen nur an den Auftraggeber weitergegeben werden und müssen nach den Datenschutzbestimmungen behandelt werden." },
            ].map((item) => (
              <div key={item.num} style={{ display: "flex", gap: "16px", alignItems: "flex-start", backgroundColor: LIGHT_BG, borderRadius: "8px", padding: "20px 24px", border: `1px solid ${BORDER}` }}>
                <div style={{ flexShrink: 0, width: "36px", height: "36px", backgroundColor: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, fontWeight: 700, fontSize: "16px" }}>{item.num}</div>
                <div>
                  <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "6px" }}>{item.title}</p>
                  <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>Österreich & Schweiz</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.9, marginBottom: "32px" }}>
            Auch in Österreich und der Schweiz sind private Polygraphuntersuchungen unter denselben Grundvoraussetzungen legal. Die Rechtslage ist vergleichbar mit Deutschland: Freiwilligkeit und informierte Einwilligung sind die entscheidenden Kriterien.
          </p>

          <div style={{ backgroundColor: NAVY, borderRadius: "12px", padding: "36px", marginBottom: "40px", textAlign: "center" }}>
            <h3 style={{ color: WHITE, fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>Rechtssichere Untersuchung anfragen</h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", marginBottom: "20px" }}>Wir führen alle Untersuchungen rechtssicher durch und beraten Sie vorab kostenlos.</p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "12px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/ratgeber" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>← Alle Ratgeber-Artikel</Link>
            <Link href="/ratgeber/treuetest-vorbereitung" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Treuetest: Wie vorbereiten?</Link>
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
