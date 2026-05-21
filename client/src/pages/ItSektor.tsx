import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import FloatingButtons from "../components/FloatingButtons";
import ServiceSchema from "../components/ServiceSchema";
import Breadcrumb from "../components/Breadcrumb";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function ItSektor() {
  useEffect(() => {
    document.title = "Polygraph IT-Sektor | Überprüfung von IT-Fachkräften | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Polygraphuntersuchung für IT-Fachkräfte, Entwickler und Systemadministratoren. Schutz sensibler Daten und IT-Infrastruktur. Diskret und professionell. +49 175 6036003");
    window.scrollTo(0, 0);
  }, []);

  const risks = [
    { icon: "fas fa-database", title: "Datenmissbrauch", text: "Unbefugter Zugriff auf Kundendaten, Geschäftsgeheimnisse oder personenbezogene Informationen." },
    { icon: "fas fa-code", title: "Sabotage von Systemen", text: "Absichtliche Beschädigung von Software, Infrastruktur oder kritischen Geschäftsprozessen." },
    { icon: "fas fa-user-secret", title: "Industriespionage", text: "Weitergabe von Quellcode, Algorithmen oder strategischen IT-Plänen an Wettbewerber." },
    { icon: "fas fa-lock-open", title: "Sicherheitslücken", text: "Bewusstes Einbauen von Backdoors oder das Ignorieren bekannter Sicherheitsprobleme." },
  ];

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: TEXT_DARK }}>
      <SharedNavbar />
      <ServiceSchema
        name="Polygraphuntersuchung IT-Sektor"
        description="Spezialisierte Polygraphuntersuchungen für IT-Unternehmen. Überprüfung bei Datenlecks, Industriespionage und Zugangsmissbrauch."
        url="/it-sektor"
        serviceType="Polygraphuntersuchung IT"
        areaServed={["München", "Berlin", "Hamburg", "Frankfurt", "Deutschland"]}
        offers={{ priceRange: "ab 490 €", description: "Polygraphuntersuchung IT-Sektor inkl. Gutachten" }}
      />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "IT-Sektor" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1e3a5f 100%)`, padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
            IT-Sicherheit · Datenschutz · Integrität
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px" }}>
            Polygraph-Überprüfung im IT-Sektor
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "19px", lineHeight: 1.7, marginBottom: "36px" }}>
            Schützen Sie Ihre digitale Infrastruktur und sensiblen Daten durch professionelle Überprüfung von IT-Fachkräften, Entwicklern und Systemadministratoren.
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
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, marginBottom: "16px" }}>Warum IT-Fachkräfte überprüfen?</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.8, marginBottom: "40px" }}>
            IT-Mitarbeiter haben oft privilegierten Zugang zu den sensibelsten Bereichen eines Unternehmens: Kundendaten, Finanzsysteme, Quellcode und kritische Infrastruktur. Eine Polygraphuntersuchung hilft Unternehmen, das Risiko von Datenmissbrauch, Sabotage und Industriespionage zu minimieren – besonders bei der Einstellung oder bei konkretem Verdacht.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "48px" }}>
            {risks.map((r) => (
              <div key={r.title} style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "28px", border: `1px solid ${BORDER}` }}>
                <i className={r.icon} style={{ color: ORANGE, fontSize: "28px", marginBottom: "16px", display: "block" }} />
                <h3 style={{ color: NAVY, fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>{r.title}</h3>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{r.text}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: LIGHT_BG, borderRadius: "12px", padding: "36px", marginBottom: "48px", borderLeft: `4px solid ${ORANGE}` }}>
            <h3 style={{ color: NAVY, fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>Unser Ansatz für IT-Unternehmen</h3>
            <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
              Wir entwickeln maßgeschneiderte Befragungskonzepte für IT-Unternehmen, die spezifische Risikobereiche adressieren. Unsere Spezialisten verstehen die technischen und organisatorischen Besonderheiten des IT-Sektors und führen die Untersuchungen mit höchster Professionalität und Diskretion durch.
            </p>
          </div>

          <div style={{ backgroundColor: NAVY, borderRadius: "12px", padding: "40px", marginBottom: "48px", textAlign: "center" }}>
            <h2 style={{ color: WHITE, fontSize: "24px", fontWeight: 700, marginBottom: "12px" }}>Jetzt Beratungsgespräch vereinbaren</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", marginBottom: "24px" }}>Wir analysieren Ihre spezifischen IT-Sicherheitsanforderungen und erstellen ein individuelles Prüfkonzept.</p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>← Zurück zur Startseite</Link>
            <Link href="/mitarbeiterueberpruefung" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Mitarbeiterüberprüfung</Link>
            <Link href="/sicherheitspruefung" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Sicherheitsprüfung</Link>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: NAVY, padding: "32px 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", margin: 0 }}>
          © 2025 luegendetektor-test-muenchen.de · <a href="tel:+4917560360003" style={{ color: ORANGE, textDecoration: "none" }}>+49 175 6036003</a> · Mo–So 9:00–22:00 Uhr
        </p>
      </footer>
      <FloatingButtons />
    </div>
  );
}
