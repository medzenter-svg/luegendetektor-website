import { useEffect } from "react";
import { Link } from "wouter";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function RatgeberTreuetest() {
  useEffect(() => {
    document.title = "Treuetest: Wie bereite ich mich vor? | Ratgeber | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Treuetest mit Lügendetektor: Wie bereite ich mich vor? Was passiert während der Untersuchung? Was ist danach zu erwarten? Alles Wichtige erklärt.");
    window.scrollTo(0, 0);
  }, []);

  const tips = [
    { icon: "fas fa-moon", title: "Ausreichend schlafen", text: "Sorgen Sie für eine gute Nachtruhe vor dem Test. Schlafmangel kann die physiologischen Messwerte beeinflussen." },
    { icon: "fas fa-coffee", title: "Koffein reduzieren", text: "Vermeiden Sie übermäßigen Koffeinkonsum am Tag des Tests. Koffein kann Herzrate und Blutdruck erhöhen." },
    { icon: "fas fa-pills", title: "Medikamente melden", text: "Informieren Sie uns vorab über alle Medikamente, die Sie einnehmen. Einige können die Messwerte beeinflussen." },
    { icon: "fas fa-brain", title: "Ehrlich sein", text: "Der wichtigste Tipp: Seien Sie ehrlich. Versuche, den Test zu täuschen, sind erkennbar und führen zu keinem verwertbaren Ergebnis." },
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
            Ratgeber Privat · 7 Min. Lesezeit
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 800, lineHeight: 1.2, marginBottom: "16px" }}>
            Treuetest: Wie bereite ich mich vor? Alles Wichtige
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", lineHeight: 1.7 }}>
            Ein Treuetest ist eine emotionale Entscheidung. Wir erklären, wie Sie sich vorbereiten und was Sie erwartet.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "60px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          <h2 style={{ color: NAVY, fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>Warum ein Treuetest?</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.9, marginBottom: "24px" }}>
            Verdacht auf Untreue ist eine der belastendsten Situationen in einer Partnerschaft. Unsicherheit und Zweifel können eine Beziehung zerstören – auch wenn der Verdacht unbegründet ist. Ein professioneller Treuetest mit Polygraph kann Klarheit schaffen und damit entweder die Beziehung retten oder eine fundierte Entscheidung ermöglichen.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.9, marginBottom: "32px" }}>
            Wichtig: Ein Treuetest sollte immer mit dem Einverständnis beider Partner durchgeführt werden. Heimliche Tests sind nicht nur rechtlich problematisch, sondern liefern auch keine verwertbaren Ergebnisse.
          </p>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "20px" }}>Tipps zur Vorbereitung</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {tips.map((t) => (
              <div key={t.title} style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "24px", border: `1px solid ${BORDER}` }}>
                <i className={t.icon} style={{ color: ORANGE, fontSize: "24px", marginBottom: "12px", display: "block" }} />
                <h3 style={{ color: NAVY, fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>{t.title}</h3>
                <p style={{ color: TEXT_MID, fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>Ablauf des Treuetests</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
            {[
              { phase: "Vorbesprechung (30–45 Min.)", text: "Unser Spezialist erklärt Ihnen den Ablauf, beantwortet alle Fragen und bespricht die geplanten Fragen mit Ihnen. Sie haben die Möglichkeit, Fragen zu ergänzen oder zu präzisieren." },
              { phase: "Polygraphuntersuchung (60–90 Min.)", text: "Die eigentliche Untersuchung findet in einem ruhigen, privaten Raum statt. Sensoren werden an Ihrem Körper befestigt, und der Spezialist stellt die vorher besprochenen Fragen." },
              { phase: "Auswertung & Ergebnis (30–45 Min.)", text: "Der Spezialist wertet die Daten aus und teilt Ihnen das Ergebnis mit. Auf Wunsch erhalten Sie eine schriftliche Dokumentation." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: LIGHT_BG, borderRadius: "8px", padding: "20px 24px", border: `1px solid ${BORDER}` }}>
                <p style={{ color: ORANGE, fontWeight: 700, fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>Phase {i + 1}</p>
                <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>{item.phase}</p>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>Was passiert nach dem Treuetest?</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.9, marginBottom: "24px" }}>
            Das Ergebnis eines Treuetests kann tiefgreifende Konsequenzen haben – in beide Richtungen. Wir empfehlen, sich vorab Gedanken darüber zu machen, wie Sie mit dem Ergebnis umgehen werden, und gegebenenfalls professionelle Unterstützung (z.B. Paartherapie) in Betracht zu ziehen.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.9, marginBottom: "32px" }}>
            Unsere Spezialisten stehen Ihnen auch nach dem Test für Fragen zur Verfügung und können Sie bei Bedarf an geeignete Beratungsstellen verweisen.
          </p>

          <div style={{ backgroundColor: NAVY, borderRadius: "12px", padding: "36px", marginBottom: "40px", textAlign: "center" }}>
            <h3 style={{ color: WHITE, fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>Treuetest anfragen</h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", marginBottom: "20px" }}>Kostenlose, vertrauliche Erstberatung – Mo–So 9:00–22:00 Uhr.</p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "12px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/ratgeber" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>← Alle Ratgeber-Artikel</Link>
            <Link href="/treuetest" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Treuetest buchen</Link>
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
