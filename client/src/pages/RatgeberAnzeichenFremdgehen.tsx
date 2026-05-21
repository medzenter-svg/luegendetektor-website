import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function RatgeberAnzeichenFremdgehen() {
  useEffect(() => {
    document.title = "Anzeichen von Fremdgehen – Wann ist ein Treuetest sinnvoll? | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Eine sachliche Einordnung: Welche Verhaltensänderungen können auf Untreue hinweisen – und wann ist ein Polygraphtest eine sinnvolle Option?");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: NAVY }}>
      <SharedNavbar />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #243d6b 100%)`, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ color: ORANGE, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>
            Privat & Partnerschaft &nbsp;·&nbsp; 6 Min. Lesezeit
          </p>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.18, marginBottom: "20px", letterSpacing: "-0.3px" }}>
            Anzeichen von Fremdgehen – Wann ist ein Treuetest sinnvoll?
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "18px", lineHeight: 1.75, maxWidth: "620px" }}>
            Eine sachliche Einordnung – ohne Dramatisierung, aber mit der nötigen Ernsthaftigkeit.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Misstrauen in einer Partnerschaft ist eine der belastendsten Erfahrungen, die Menschen machen können. Es entsteht selten aus dem Nichts – und es verschwindet selten von selbst. Dieser Artikel soll keine Panik schüren, sondern eine sachliche Orientierung bieten: Welche Beobachtungen können auf Untreue hinweisen, und ab wann ist ein Polygraphtest eine sinnvolle Option?
          </p>

          <div style={{ backgroundColor: "#fff8f0", border: `1px solid ${ORANGE}`, borderRadius: "8px", padding: "20px 24px", marginBottom: "36px" }}>
            <p style={{ color: NAVY, fontSize: "15px", lineHeight: 1.75, margin: 0 }}>
              <strong>Wichtiger Hinweis:</strong> Verhaltensänderungen können viele Ursachen haben – beruflicher Stress, persönliche Krisen, gesundheitliche Probleme. Die unten genannten Punkte sind keine Beweise, sondern Hinweise, die eine Klärung rechtfertigen können.
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "18px", marginTop: "40px" }}>Verhaltensänderungen, die Fragen aufwerfen können</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
            {[
              {
                title: "Veränderte Kommunikation",
                text: "Deutlich weniger Offenheit in Gesprächen, ausweichende Antworten auf direkte Fragen, oder umgekehrt: übermäßige Erklärungen und Rechtfertigungen ohne Anlass.",
              },
              {
                title: "Veränderter Umgang mit dem Mobiltelefon",
                text: "Erhöhte Diskretion beim Telefonieren, häufiges Löschen von Nachrichten, Passwortschutz wo vorher keiner war – oder eine plötzlich veränderte Nutzungsgewohnheit.",
              },
              {
                title: "Unklare zeitliche Abwesenheiten",
                text: "Regelmäßige Abwesenheiten, die sich nicht schlüssig erklären lassen, oder Diskrepanzen zwischen genannten und tatsächlichen Aufenthaltsorten.",
              },
              {
                title: "Emotionale Distanz",
                text: "Rückzug aus gemeinsamen Aktivitäten, verringerte körperliche Nähe, oder ein schwer greifbares Gefühl, dass die Verbindung sich verändert hat.",
              },
              {
                title: "Veränderte finanzielle Muster",
                text: "Unklare Ausgaben, Barabhebungen ohne nachvollziehbaren Zweck, oder neue Kreditkarten und Konten.",
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: "20px 24px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
                <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>{item.title}</p>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.8, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{ borderLeft: `3px solid ${ORANGE}`, paddingLeft: "24px", margin: "36px 0" }}>
            <p style={{ color: NAVY, fontSize: "17px", lineHeight: 1.85, fontStyle: "italic", margin: 0 }}>
              „Das Schlimmste an begründetem Misstrauen ist nicht die Möglichkeit, dass es zutrifft – sondern die Ungewissheit selbst. Ein Polygraphtest kann diese Ungewissheit beenden."
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Wann ist ein Treuetest sinnvoll?</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Ein Polygraphtest ist dann eine sinnvolle Option, wenn konkrete Verdachtsmomente bestehen, die durch Gespräche nicht aufgelöst werden konnten, und wenn beide Seiten bereit sind, das Ergebnis zu akzeptieren. Er ist kein Instrument der Kontrolle, sondern der Klärung.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "40px" }}>
            Wichtig: Die Teilnahme muss freiwillig sein. Eine Untersuchung gegen den Willen des Partners ist rechtlich nicht zulässig und liefert keine verwertbaren Ergebnisse. Wenn die Bereitschaft verweigert wird, ist das für sich genommen eine Information – aber keine, die ein Polygraphergebnis ersetzen kann.
          </p>

          <div style={{ backgroundColor: NAVY, borderRadius: "10px", padding: "36px 32px", marginBottom: "40px" }}>
            <h3 style={{ color: WHITE, fontSize: "19px", fontWeight: 700, marginBottom: "10px" }}>Vertrauliches Erstgespräch</h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px", lineHeight: 1.7, marginBottom: "22px" }}>
              Wir besprechen Ihre Situation diskret und ohne Verpflichtung. Mo–So 9:00–22:00 Uhr.
            </p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "11px 26px", borderRadius: "5px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", borderTop: `1px solid ${BORDER}`, paddingTop: "24px" }}>
            <Link href="/ratgeber" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>← Alle Artikel</Link>
            <Link href="/treuetest" style={{ color: TEXT_MID, fontWeight: 600, textDecoration: "none", fontSize: "14px" }}>Treuetest anfragen →</Link>
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
