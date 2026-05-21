import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import SharedFooter from "../components/SharedFooter";
import FloatingButtons from "../components/FloatingButtons";
import Breadcrumb from "../components/Breadcrumb";

const DARK_NAVY = "#0f1932";
const ORANGE = "#e67e00";
const WHITE = "#ffffff";

export default function AbsoluteVertraulichkeit() {
  useEffect(() => {
    document.title = "Absolute Vertraulichkeit | Polygraph München – Diskretion garantiert";
    const meta = document.querySelector("meta[name='description']");
    if (meta) meta.setAttribute("content", "Erfahren Sie, wie wir absolute Vertraulichkeit bei jedem Polygraphtest gewährleisten. Keine Datenweitergabe, keine Aufzeichnungen – diskrete Untersuchungen für Privatpersonen und Unternehmen.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", background: "#f8f9fb", minHeight: "100vh" }}>
      <SharedNavbar />
      <FloatingButtons />

      {/* Hero */}
      <section style={{ background: DARK_NAVY, padding: "100px 24px 60px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Absolute Vertraulichkeit" }]} />
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px", marginTop: "16px" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <i className="fas fa-lock" style={{ color: WHITE, fontSize: "24px" }}></i>
            </div>
            <h1 style={{ color: WHITE, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, margin: 0 }}>
              Absolute Vertraulichkeit
            </h1>
          </div>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", lineHeight: 1.7, maxWidth: "700px" }}>
            Diskretion ist keine Option – sie ist die Grundlage unserer Arbeit. Jede Untersuchung wird unter strengsten Vertraulichkeitsbedingungen durchgeführt.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "60px 24px" }}>

        <div style={{ background: WHITE, borderRadius: "8px", padding: "40px", marginBottom: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <h2 style={{ color: DARK_NAVY, fontSize: "1.5rem", fontWeight: 700, marginBottom: "20px" }}>
            Warum Vertraulichkeit bei uns oberste Priorität hat
          </h2>
          <p style={{ color: "#444", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
            Polygraphuntersuchungen berühren häufig sensible persönliche oder geschäftliche Sachverhalte. Unsere Mandanten vertrauen uns mit Informationen, die nirgendwo sonst besprochen werden. Dieses Vertrauen verpflichtet uns zu absoluter Diskretion – vor, während und nach jeder Untersuchung.
          </p>
          <p style={{ color: "#444", fontSize: "16px", lineHeight: 1.8 }}>
            Wir geben keinerlei Informationen über Anfragen, Untersuchungsinhalte oder Ergebnisse an Dritte weiter. Keine Ausnahmen.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "32px" }}>
          {[
            { icon: "fas fa-user-secret", title: "Anonyme Erstberatung", text: "Sie können uns kontaktieren, ohne Ihren Namen zu nennen. Wir besprechen Ihr Anliegen vollständig anonym." },
            { icon: "fas fa-file-shield", title: "Keine Datenspeicherung", text: "Untersuchungsdaten werden nicht dauerhaft gespeichert. Berichte erhalten ausschließlich Sie als Auftraggeber." },
            { icon: "fas fa-eye-slash", title: "Diskrete Termingestaltung", text: "Termine werden so geplant, dass keine ungewollten Begegnungen entstehen. Separate Ein- und Ausgänge auf Wunsch." },
            { icon: "fas fa-handshake", title: "Vertraulichkeitsvereinbarung", text: "Auf Wunsch schließen wir vor jeder Untersuchung eine rechtlich bindende Vertraulichkeitsvereinbarung ab." },
            { icon: "fas fa-phone-slash", title: "Keine Drittparteien", text: "Wir kommunizieren ausschließlich mit dem Auftraggeber. Keine Weitergabe an Behörden, Arbeitgeber oder andere Parteien ohne Ihre ausdrückliche Zustimmung." },
            { icon: "fas fa-lock", title: "Verschlüsselte Kommunikation", text: "Alle digitalen Kommunikationswege sind verschlüsselt. Berichte werden nur über gesicherte Kanäle übermittelt." },
          ].map(item => (
            <div key={item.title} style={{ background: WHITE, borderRadius: "8px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderTop: `3px solid ${ORANGE}` }}>
              <i className={item.icon} style={{ color: ORANGE, fontSize: "28px", marginBottom: "14px", display: "block" }}></i>
              <h3 style={{ color: DARK_NAVY, fontSize: "1rem", fontWeight: 700, marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>

        <div style={{ background: DARK_NAVY, borderRadius: "8px", padding: "40px", marginBottom: "32px" }}>
          <h2 style={{ color: WHITE, fontSize: "1.4rem", fontWeight: 700, marginBottom: "20px" }}>
            Unsere Vertraulichkeitsgarantie im Überblick
          </h2>
          {[
            "Keine Weitergabe von Anfragedetails an Dritte",
            "Keine Speicherung personenbezogener Daten über den Untersuchungszeitraum hinaus",
            "Berichte ausschließlich an den Auftraggeber",
            "Anonyme Erstberatung per Telefon oder WhatsApp möglich",
            "Vertraulichkeitsvereinbarung auf Wunsch",
            "Diskrete Rechnungsstellung ohne aufschlussreiche Beschreibungen",
          ].map(item => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
              <i className="fas fa-check" style={{ color: ORANGE, fontSize: "14px", marginTop: "4px", flexShrink: 0 }}></i>
              <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: WHITE, borderRadius: "8px", padding: "40px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", textAlign: "center" }}>
          <h2 style={{ color: DARK_NAVY, fontSize: "1.4rem", fontWeight: 700, marginBottom: "12px" }}>
            Diskrete Beratung anfragen
          </h2>
          <p style={{ color: "#555", fontSize: "15px", marginBottom: "28px" }}>
            Kontaktieren Sie uns vertraulich – ohne Angabe Ihres Namens, wenn Sie möchten.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
            <a href="tel:+4917560360030" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: ORANGE, color: WHITE, padding: "13px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
              <i className="fas fa-phone"></i> +49 175 6036003
            </a>
            <a href="https://wa.me/4917560360030" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25d366", color: WHITE, padding: "13px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
          <p style={{ color: "#888", fontSize: "13px", marginTop: "16px" }}>Mo–So 9:00–22:00 Uhr · 100% vertraulich</p>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
