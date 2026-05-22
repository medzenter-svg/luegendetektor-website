import { useEffect } from "react";
import SharedNavbar from "../components/SharedNavbar";
import SharedFooter from "../components/SharedFooter";
import FloatingButtons from "../components/FloatingButtons";
import Breadcrumb from "../components/Breadcrumb";

const DARK_NAVY = "#0f1932";
const ORANGE = "#e67e00";
const WHITE = "#ffffff";

export default function DoppeltePruefung() {
  useEffect(() => {
    const BASE = "https://luegendetektor-test-muenchen.de";
    document.title = "Doppelte Prüfung durch 2 Experten | Polygraph München – Maximale Ergebnissicherheit";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) { el = document.createElement("link"); el.setAttribute("rel", rel); document.head.appendChild(el); }
      el.setAttribute("href", href);
    };
    setMeta("description", "Jedes Untersuchungsergebnis wird von zwei unabhängigen Polygraphexaminatoren ausgewertet. Das Vier-Augen-Prinzip garantiert maximale Objektivität und Zuverlässigkeit.");
    setMeta("og:title", "Doppelte Prüfung durch 2 Experten | Polygraph München", true);
    setMeta("og:description", "Vier-Augen-Prinzip: Jedes Ergebnis wird von zwei unabhängigen Examinatoren geprüft – für maximale Objektivität und Rechtssicherheit.", true);
    setMeta("og:url", `${BASE}/doppelte-pruefung`, true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Lügendetektor Test München", true);
    setMeta("twitter:card", "summary_large_image");
    setLink("canonical", `${BASE}/doppelte-pruefung`);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", background: "#f8f9fb", minHeight: "100vh" }}>
      <SharedNavbar />
      <FloatingButtons />

      {/* Hero */}
      <section style={{ background: DARK_NAVY, padding: "100px 24px 60px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Doppelte Prüfung" }]} />
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px", marginTop: "16px" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <i className="fas fa-user-check" style={{ color: WHITE, fontSize: "24px" }}></i>
            </div>
            <div>
              <h1 style={{ color: WHITE, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, margin: 0 }}>
                Doppelte Prüfung
              </h1>
              <p style={{ color: ORANGE, fontSize: "1rem", fontWeight: 600, margin: "4px 0 0" }}>Vier-Augen-Prinzip für maximale Ergebnissicherheit</p>
            </div>
          </div>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", lineHeight: 1.7, maxWidth: "700px" }}>
            Jedes Untersuchungsergebnis wird von zwei unabhängigen, zertifizierten Examinatoren ausgewertet. Nur bei übereinstimmendem Befund wird das Ergebnis bestätigt.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "60px 24px" }}>

        {/* Intro */}
        <div style={{ background: WHITE, borderRadius: "8px", padding: "40px", marginBottom: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <h2 style={{ color: DARK_NAVY, fontSize: "1.5rem", fontWeight: 700, marginBottom: "20px" }}>
            Was bedeutet doppelte Prüfung in der Praxis?
          </h2>
          <p style={{ color: "#444", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
            Bei einem Polygraphtest werden physiologische Reaktionen aufgezeichnet und anschließend durch den Examinator ausgewertet. Diese Auswertung erfordert Fachwissen und Erfahrung – aber auch die objektivste Fachkraft kann unbewusst von Vorannahmen beeinflusst werden.
          </p>
          <p style={{ color: "#444", fontSize: "16px", lineHeight: 1.8 }}>
            Deshalb lassen wir jede Auswertung von einem zweiten, unabhängigen Examinator wiederholen – ohne dass dieser das Ergebnis des ersten kennt. Nur wenn beide Examinatoren zu demselben Schluss gelangen, gilt das Ergebnis als gesichert.
          </p>
        </div>

        {/* Process steps */}
        <h2 style={{ color: DARK_NAVY, fontSize: "1.4rem", fontWeight: 700, marginBottom: "24px" }}>
          Der Ablauf der doppelten Prüfung
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0", marginBottom: "40px" }}>
          {[
            { step: "1", title: "Untersuchung durch Examinator A", text: "Der erste Examinator führt die vollständige Polygraphuntersuchung durch und wertet die Messdaten nach standardisierten numerischen Verfahren aus." },
            { step: "2", title: "Unabhängige Auswertung durch Examinator B", text: "Die aufgezeichneten Messdaten werden einem zweiten Examinator übergeben, der die Auswertung vollständig unabhängig und ohne Kenntnis des ersten Ergebnisses vornimmt." },
            { step: "3", title: "Abgleich der Ergebnisse", text: "Die Ergebnisse beider Examinatoren werden verglichen. Bei Übereinstimmung wird das Ergebnis als gesichert eingestuft und in den Abschlussbericht aufgenommen." },
            { step: "4", title: "Wiederholung bei Abweichung", text: "Sollten die Ergebnisse voneinander abweichen, wird die Untersuchung wiederholt. Das Endergebnis wird erst nach eindeutiger Übereinstimmung festgestellt." },
          ].map((item, idx) => (
            <div key={item.step} style={{ display: "flex", gap: "20px", background: WHITE, padding: "28px 32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderRadius: idx === 0 ? "8px 8px 0 0" : idx === 3 ? "0 0 8px 8px" : "0", borderBottom: idx < 3 ? "1px solid #f0f0f0" : "none" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: ORANGE, color: WHITE, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", flexShrink: 0 }}>
                {item.step}
              </div>
              <div>
                <h3 style={{ color: DARK_NAVY, fontSize: "1rem", fontWeight: 700, marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why it matters */}
        <div style={{ background: DARK_NAVY, borderRadius: "8px", padding: "40px", marginBottom: "32px" }}>
          <h2 style={{ color: WHITE, fontSize: "1.4rem", fontWeight: 700, marginBottom: "20px" }}>
            Warum das Vier-Augen-Prinzip entscheidend ist
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {[
              { icon: "fas fa-balance-scale", title: "Objektivität", text: "Zwei unabhängige Meinungen eliminieren subjektive Verzerrungen und persönliche Vorannahmen." },
              { icon: "fas fa-shield-alt", title: "Rechtssicherheit", text: "Doppelt geprüfte Ergebnisse haben eine stärkere Beweiskraft in rechtlichen und geschäftlichen Kontexten." },
              { icon: "fas fa-percentage", title: "Höhere Genauigkeit", text: "Die Fehlerquote sinkt signifikant, wenn zwei unabhängige Experten zum gleichen Ergebnis gelangen." },
              { icon: "fas fa-handshake", title: "Vertrauen", text: "Sie können dem Ergebnis vertrauen – weil es nicht von einer einzigen Person abhängt." },
            ].map(item => (
              <div key={item.title} style={{ background: "rgba(255,255,255,0.06)", borderRadius: "6px", padding: "24px" }}>
                <i className={item.icon} style={{ color: ORANGE, fontSize: "24px", marginBottom: "12px", display: "block" }}></i>
                <h3 style={{ color: WHITE, fontSize: "0.95rem", fontWeight: 700, marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Standards */}
        <div style={{ background: WHITE, borderRadius: "8px", padding: "40px", marginBottom: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <h2 style={{ color: DARK_NAVY, fontSize: "1.4rem", fontWeight: 700, marginBottom: "20px" }}>
            Internationale Standards der Polygraphauswertung
          </h2>
          <p style={{ color: "#444", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
            Die Auswertung von Polygraphaufzeichnungen folgt international anerkannten numerischen Bewertungssystemen. Unsere Examinatoren wurden in diesen Verfahren ausgebildet und wenden sie konsequent an.
          </p>
          {[
            "Numerische Auswertung nach dem 7-Punkte-System (±3 pro Kanal)",
            "Mindestanzahl von Fragen pro Thema für statistisch valide Ergebnisse",
            "Standardisierte Testformate: CQT (Comparison Question Test), GKT (Guilty Knowledge Test)",
            "Dokumentation aller Messdaten für spätere Nachprüfbarkeit",
          ].map(item => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
              <i className="fas fa-check-circle" style={{ color: ORANGE, fontSize: "14px", marginTop: "3px", flexShrink: 0 }}></i>
              <span style={{ color: "#444", fontSize: "14px", lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: WHITE, borderRadius: "8px", padding: "40px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", textAlign: "center" }}>
          <h2 style={{ color: DARK_NAVY, fontSize: "1.4rem", fontWeight: 700, marginBottom: "12px" }}>
            Untersuchung mit doppelter Prüfung anfragen
          </h2>
          <p style={{ color: "#555", fontSize: "15px", marginBottom: "28px" }}>
            Erhalten Sie ein Ergebnis, dem Sie vertrauen können – geprüft von zwei unabhängigen Experten.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
            <a href="tel:+4917560360030" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: ORANGE, color: WHITE, padding: "13px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
              <i className="fas fa-phone"></i> +49 175 6036003
            </a>
            <a href="https://wa.me/4917560360030" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25d366", color: WHITE, padding: "13px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
          <p style={{ color: "#888", fontSize: "13px", marginTop: "16px" }}>Mo–So 9:00–22:00 Uhr · Kostenlose Erstberatung</p>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
