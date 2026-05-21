import { useEffect } from "react";
import { Link } from "wouter";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function RatgeberGenauigkeit() {
  useEffect(() => {
    document.title = "Zur Zuverlässigkeit der Polygraphie | Ratgeber | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Eine sachliche Einordnung der Genauigkeit polygraphischer Untersuchungen – Methodik, Forschungsstand und was die Zahl 98–99% tatsächlich bedeutet.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: NAVY }}>
      {/* Nav */}
      <nav style={{ backgroundColor: NAVY, padding: "0 24px", position: "sticky", top: 0, zIndex: 1000, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <Link href="/" style={{ color: WHITE, fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <i className="fas fa-wave-square" style={{ color: ORANGE }} />
            luegendetektor-test-muenchen.de
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link href="/ratgeber" style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>← Ratgeber</Link>
            <Link href="/#contact" style={{ backgroundColor: ORANGE, color: WHITE, padding: "9px 20px", borderRadius: "6px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>Kontakt</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #243d6b 100%)`, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ color: ORANGE, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>
            Technik & Wissenschaft &nbsp;·&nbsp; 5 Min. Lesezeit
          </p>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.18, marginBottom: "20px", letterSpacing: "-0.3px" }}>
            Zur Zuverlässigkeit der Polygraphie
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "18px", lineHeight: 1.75, maxWidth: "620px" }}>
            Eine sachliche Einordnung dessen, was die Genauigkeitsrate polygraphischer Untersuchungen bedeutet – und unter welchen Bedingungen sie gilt.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: WHITE, padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            In der Fachliteratur wird für professionell durchgeführte Polygraphuntersuchungen regelmäßig eine Genauigkeitsrate von 98 bis 99 Prozent genannt. Diese Zahl ist korrekt – sie bedarf jedoch einer Einordnung, die in der öffentlichen Wahrnehmung häufig fehlt.
          </p>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Was der Polygraph tatsächlich misst</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Ein Polygraph erfasst gleichzeitig vier physiologische Kanäle: die thorakale und abdominale Atemfrequenz, den systolischen Blutdruck sowie den galvanischen Hautwiderstand. Diese Parameter verändern sich unwillkürlich, wenn das autonome Nervensystem auf kognitive Belastung – etwa das Formulieren einer bewussten Unwahrheit – reagiert.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Das Gerät selbst trifft keine Aussage über Wahrheit oder Lüge. Es liefert Rohdaten. Die Interpretation dieser Daten erfordert einen ausgebildeten Spezialisten, der die individuelle physiologische Baseline der zu testenden Person kennt und die Reaktionsmuster im Kontext der gestellten Fragen bewertet.
          </p>

          <div style={{ borderLeft: `3px solid ${ORANGE}`, paddingLeft: "24px", margin: "36px 0" }}>
            <p style={{ color: NAVY, fontSize: "17px", lineHeight: 1.85, fontStyle: "italic", margin: 0 }}>
              „Die Qualität einer Polygraphuntersuchung steht und fällt mit der Qualifikation des Spezialisten. Ein Gerät allein liefert keine Aussage – es liefert Daten, die interpretiert werden müssen."
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Unter welchen Bedingungen gilt die 98–99%-Rate?</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "20px" }}>
            Die genannte Genauigkeitsrate bezieht sich auf Untersuchungen, die folgende Bedingungen erfüllen:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "36px" }}>
            {[
              { label: "Zertifizierter Spezialist", text: "Der Untersucher verfügt über eine anerkannte Ausbildung und nachweisbare Praxiserfahrung." },
              { label: "Standardisierte Fragetechnik", text: "Die Befragung folgt einem validierten Protokoll – etwa der Control Question Technique (CQT) oder der Zone Comparison Technique (ZCT)." },
              { label: "Geeignete Testumgebung", text: "Die Untersuchung findet in einer ruhigen, kontrollierten Umgebung ohne externe Störfaktoren statt." },
              { label: "Klare Fragestellung", text: "Jede Frage ist präzise formuliert, eindeutig und auf einen konkreten Sachverhalt bezogen." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 20px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
                <div style={{ flexShrink: 0, width: "28px", height: "28px", backgroundColor: NAVY, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-check" style={{ color: ORANGE, fontSize: "12px" }} />
                </div>
                <div>
                  <p style={{ color: NAVY, fontWeight: 700, fontSize: "15px", marginBottom: "4px" }}>{item.label}</p>
                  <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Häufige Missverständnisse</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "20px" }}>
            Zwei Annahmen begegnen uns in der Praxis besonders häufig – beide sind sachlich unzutreffend.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
            <div style={{ padding: "22px 24px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
              <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>„Nervöse Personen fallen automatisch durch den Test."</p>
              <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.75, margin: 0 }}>
                Nervosität als allgemeiner Zustand verändert die Messwerte gleichmäßig über alle Fragen hinweg. Ein erfahrener Spezialist berücksichtigt die individuelle Baseline und unterscheidet zwischen allgemeiner Anspannung und spezifischen Reaktionen auf einzelne Fragen.
              </p>
            </div>
            <div style={{ padding: "22px 24px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
              <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>„Den Polygraphen kann man durch Techniken austricksen."</p>
              <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.75, margin: 0 }}>
                Versuche, die Messwerte durch Atemtechniken, Muskelanspannungen oder mentale Ablenkung zu beeinflussen, erzeugen in der Regel charakteristische Muster, die für einen geschulten Untersucher erkennbar sind. Sie führen nicht zu einem unauffälligen Ergebnis, sondern zu einem nicht verwertbaren.
              </p>
            </div>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Einordnung im Vergleich zu anderen Methoden</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "40px" }}>
            Zum Vergleich: Klassische Befragungen ohne technische Hilfsmittel liegen in ihrer Treffsicherheit bei der Erkennung von Unwahrheiten im Bereich des statistischen Zufalls. Selbst erfahrene Ermittler erreichen in kontrollierten Studien selten mehr als 60 Prozent. Die Polygraphie ist damit – bei sachgemäßer Anwendung – die zuverlässigste verfügbare Methode zur Wahrheitsfindung im privaten und unternehmerischen Bereich.
          </p>

          {/* CTA */}
          <div style={{ backgroundColor: NAVY, borderRadius: "10px", padding: "36px 32px", marginBottom: "40px" }}>
            <h3 style={{ color: WHITE, fontSize: "19px", fontWeight: 700, marginBottom: "10px" }}>Fragen zur Methodik?</h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px", lineHeight: 1.7, marginBottom: "22px" }}>
              Wir erläutern Ihnen die Vorgehensweise in einem vertraulichen Erstgespräch – ohne Verpflichtung.
            </p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "11px 26px", borderRadius: "5px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", borderTop: `1px solid ${BORDER}`, paddingTop: "24px" }}>
            <Link href="/ratgeber" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>← Alle Artikel</Link>
            <Link href="/ratgeber/kosten-polygraph" style={{ color: TEXT_MID, fontWeight: 600, textDecoration: "none", fontSize: "14px" }}>Kosten & Preise →</Link>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: NAVY, padding: "28px 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", margin: 0 }}>
          © 2025 luegendetektor-test-muenchen.de &nbsp;·&nbsp; <a href="tel:+4917560360003" style={{ color: ORANGE, textDecoration: "none" }}>+49 175 6036003</a>
        </p>
      </footer>
    </div>
  );
}
