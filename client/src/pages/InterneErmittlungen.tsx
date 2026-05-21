import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import FloatingButtons from "../components/FloatingButtons";
import SharedFooter from "../components/SharedFooter";
import ServiceSchema from "../components/ServiceSchema";
import Breadcrumb from "../components/Breadcrumb";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function InterneErmittlungen() {
  useEffect(() => {
    document.title = "Interne Ermittlungen Polygraph | Unternehmensermittlung | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Interne Ermittlungen mit Polygraph für Unternehmen. Aufklärung von Diebstahl, Betrug, Datenlecks und Vertrauensbrüchen. Diskret, professionell, bundesweit. +49 175 6036003");
    window.scrollTo(0, 0);
  }, []);

  const useCases = [
    { icon: "fas fa-hand-holding-usd", title: "Diebstahl & Unterschlagung", text: "Klärung von Kassenfehlbeträgen, verschwundenen Waren oder unterschlagenen Geldern im Unternehmen." },
    { icon: "fas fa-database", title: "Datenlecks & Industriespionage", text: "Ermittlung bei Verdacht auf Weitergabe vertraulicher Unternehmensdaten an Wettbewerber." },
    { icon: "fas fa-user-slash", title: "Vertrauensbrüche", text: "Aufklärung bei Verdacht auf Sabotage, Loyalitätsverletzungen oder Verrat von Geschäftsgeheimnissen." },
    { icon: "fas fa-file-invoice-dollar", title: "Abrechnungsbetrug", text: "Überprüfung bei Verdacht auf manipulierte Spesenabrechnungen, falsche Zeiterfassung oder Betrug." },
    { icon: "fas fa-users", title: "Mitarbeiterüberprüfung", text: "Präventive Überprüfung von Mitarbeitern in Schlüsselpositionen oder vor Beförderungen." },
    { icon: "fas fa-gavel", title: "Vorbereitung rechtlicher Schritte", text: "Ergebnisse als Grundlage für arbeitsrechtliche Maßnahmen oder zur Vorbereitung rechtlicher Schritte." },
  ];

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: TEXT_DARK }}>
      <SharedNavbar />
      <ServiceSchema
        name="Interne Ermittlungen – Polygraphuntersuchung"
        description="Diskrete interne Ermittlungen mit dem Polygraphen. Aufklärung von Diebstahl, Datenmissbrauch und Vertrauensbrüchen in Unternehmen."
        url="/interne-ermittlungen"
        serviceType="Interne Ermittlungen"
        areaServed={["München", "Deutschland", "Österreich", "Schweiz"]}
        offers={{ priceRange: "ab 490 €", description: "Interne Ermittlung mit Polygraph inkl. Gutachten" }}
      />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Interne Ermittlungen" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d4a7a 100%)`, padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
            Für Unternehmen · Bundesweit
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px" }}>
            Interne Ermittlungen mit Polygraph
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "20px", lineHeight: 1.7, marginBottom: "36px" }}>
            Professionelle Polygraphuntersuchungen für Unternehmen – diskrete Aufklärung von Diebstahl, Betrug, Datenlecks und Vertrauensbrüchen. <strong style={{ color: ORANGE }}>Bundesweit verfügbar.</strong>
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
            Einsatzbereiche interner Ermittlungen
          </h2>
          <p style={{ color: TEXT_MID, textAlign: "center", fontSize: "17px", marginBottom: "48px" }}>
            Wir unterstützen Unternehmen bei der diskreten Aufklärung sensibler interner Vorfälle.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="detail-grid">
            {useCases.map((u, i) => (
              <div key={i} style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "28px 24px", border: `1px solid ${BORDER}` }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: NAVY, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <i className={u.icon} style={{ color: ORANGE, fontSize: "20px" }} />
                </div>
                <h3 style={{ color: NAVY, fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>{u.title}</h3>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.6, margin: 0 }}>{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: LIGHT_BG, padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, marginBottom: "20px" }}>
            Warum Polygraph bei internen Ermittlungen?
          </h2>
          <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}>
            Bei internen Ermittlungen in Unternehmen ist Diskretion oberstes Gebot. Ein <strong>Polygraphtest</strong> ermöglicht eine objektive, wissenschaftlich fundierte Überprüfung von Aussagen – ohne aufwendige und kostspielige Langzeitermittlungen.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}>
            Unsere Spezialisten kommen direkt zu Ihnen ins Unternehmen – ob in München, Berlin, Frankfurt, Hamburg oder anderen deutschen Städten. Alle Untersuchungen werden streng vertraulich behandelt, die Ergebnisse ausschließlich an autorisierte Personen weitergegeben.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "32px" }}>
            Die Genauigkeit unserer Polygraphuntersuchungen liegt bei <strong>98–99%</strong>. Auf Wunsch erhalten Sie eine detaillierte schriftliche Dokumentation der Ergebnisse.
          </p>
          <div style={{ backgroundColor: WHITE, borderRadius: "10px", padding: "28px 32px", border: `1px solid ${BORDER}` }}>
            <p style={{ color: NAVY, fontWeight: 700, fontSize: "17px", marginBottom: "16px" }}>Jetzt vertrauliche Beratung anfragen:</p>
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
      <SharedFooter />
      <FloatingButtons />
    </div>
  );
}
