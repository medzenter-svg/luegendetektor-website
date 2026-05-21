import { useEffect } from "react";
import { Link } from "wouter";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function RatgeberJugendliche() {
  useEffect(() => {
    document.title = "Polygraphuntersuchung bei Jugendlichen – Was Eltern wissen sollten | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Können Jugendliche einen Polygraphtest machen? Rechtliche Voraussetzungen, methodische Besonderheiten und wann eine Untersuchung sinnvoll ist.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: NAVY }}>
      <nav style={{ backgroundColor: NAVY, padding: "0 24px", position: "sticky", top: 0, zIndex: 1000, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <Link href="/" style={{ color: WHITE, fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/manus-storage/logo_clean_f9c5298d.png" alt="Lügendetektor München Logo" style={{ width: "38px", height: "38px", objectFit: "contain" }} />
            luegendetektor-test-muenchen.de
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link href="/ratgeber" style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>← Ratgeber</Link>
            <Link href="/#contact" style={{ backgroundColor: ORANGE, color: WHITE, padding: "9px 20px", borderRadius: "6px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>Kontakt</Link>
          </div>
        </div>
      </nav>

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #243d6b 100%)`, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ color: ORANGE, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>
            Familie & Erziehung &nbsp;·&nbsp; 5 Min. Lesezeit
          </p>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.18, marginBottom: "20px", letterSpacing: "-0.3px" }}>
            Polygraphuntersuchung bei Jugendlichen – Was Eltern wissen sollten
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "18px", lineHeight: 1.75, maxWidth: "620px" }}>
            Eine sachliche Übersicht zu rechtlichen Voraussetzungen, methodischen Besonderheiten und der Frage, wann eine Untersuchung sinnvoll ist.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Eltern, die sich in einer Situation befinden, in der sie die Ehrlichkeit ihres Kindes nicht einschätzen können, stehen vor einer schwierigen Abwägung. Ein Polygraphtest kann in bestimmten Situationen eine Möglichkeit zur Klärung sein – er ist jedoch kein Standardinstrument für familiäre Konflikte und sollte mit Bedacht eingesetzt werden.
          </p>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "18px", marginTop: "40px" }}>Rechtliche Voraussetzungen</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
            <div style={{ padding: "20px 24px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
              <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>Unter 14 Jahren</p>
              <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.8, margin: 0 }}>
                Wir führen keine Polygraphuntersuchungen bei Kindern unter 14 Jahren durch. In diesem Alter sind die physiologischen Reaktionsmuster noch nicht ausreichend stabil, um zuverlässige Ergebnisse zu erzielen.
              </p>
            </div>
            <div style={{ padding: "20px 24px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
              <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>14 bis 17 Jahre</p>
              <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.8, margin: 0 }}>
                Eine Untersuchung ist möglich, erfordert jedoch die schriftliche Einwilligung beider Erziehungsberechtigten sowie die ausdrückliche Zustimmung des Jugendlichen selbst. Die Untersuchung findet in Anwesenheit eines Erziehungsberechtigten statt.
              </p>
            </div>
            <div style={{ padding: "20px 24px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
              <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>Ab 18 Jahren</p>
              <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.8, margin: 0 }}>
                Volljährige Personen entscheiden selbst über ihre Teilnahme. Die Einwilligung der Eltern ist nicht erforderlich.
              </p>
            </div>
          </div>

          <div style={{ borderLeft: `3px solid ${ORANGE}`, paddingLeft: "24px", margin: "36px 0" }}>
            <p style={{ color: NAVY, fontSize: "17px", lineHeight: 1.85, fontStyle: "italic", margin: 0 }}>
              „Ein Polygraphtest ist kein Erziehungsinstrument. Er ist ein Mittel zur Klärung konkreter, schwerwiegender Verdachtsmomente – nicht zur Kontrolle des Alltags."
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Situationen, in denen eine Untersuchung sinnvoll sein kann</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
            {[
              "Konkreter Verdacht auf Drogenkonsum, der durch Gespräche nicht aufgeklärt werden konnte",
              "Schwerwiegende Vorfälle in der Schule oder im sozialen Umfeld, bei denen die Wahrheit unklar ist",
              "Verdacht auf Kontakt zu gefährlichen Personen oder Gruppen",
              "Situationen, in denen ein falscher Verdacht das Kind ernsthaft belasten würde",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <i className="fas fa-minus" style={{ color: ORANGE, fontSize: "12px", marginTop: "6px", flexShrink: 0 }} />
                <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.7, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Methodische Besonderheiten bei Jugendlichen</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Die Vorbesprechung ist bei Jugendlichen besonders wichtig. Unser Spezialist nimmt sich die Zeit, das Verfahren verständlich zu erklären und eventuelle Ängste zu nehmen. Eine entspannte Ausgangssituation ist Voraussetzung für verwertbare Ergebnisse.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "40px" }}>
            Die Untersuchung selbst folgt dem gleichen Protokoll wie bei Erwachsenen – angepasst an das Alter und die Kommunikationsweise des Jugendlichen. Wir empfehlen, den Jugendlichen vorab in die Entscheidung einzubeziehen und die Untersuchung nicht als Strafe oder Kontrolle zu kommunizieren.
          </p>

          <div style={{ backgroundColor: NAVY, borderRadius: "10px", padding: "36px 32px", marginBottom: "40px" }}>
            <h3 style={{ color: WHITE, fontSize: "19px", fontWeight: 700, marginBottom: "10px" }}>Vertrauliches Erstgespräch für Eltern</h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px", lineHeight: 1.7, marginBottom: "22px" }}>
              Wir besprechen Ihre Situation diskret und helfen Ihnen, die richtige Entscheidung zu treffen.
            </p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "11px 26px", borderRadius: "5px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", borderTop: `1px solid ${BORDER}`, paddingTop: "24px" }}>
            <Link href="/ratgeber" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>← Alle Artikel</Link>
            <Link href="/ratgeber/luegendetektor-genauigkeit" style={{ color: TEXT_MID, fontWeight: 600, textDecoration: "none", fontSize: "14px" }}>Zur Zuverlässigkeit →</Link>
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
