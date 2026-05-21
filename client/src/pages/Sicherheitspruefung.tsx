import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import ServiceSchema from "../components/ServiceSchema";
import Breadcrumb from "../components/Breadcrumb";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function Sicherheitspruefung() {
  useEffect(() => {
    document.title = "Sicherheitsprüfung mit Polygraph | Zuverlässigkeitstest | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Professionelle Sicherheitsprüfung und Zuverlässigkeitstest mit Polygraph. Für Unternehmen, Behörden und sicherheitssensible Bereiche. Diskret und vertraulich. +49 175 6036003");
    window.scrollTo(0, 0);
  }, []);

  const useCases = [
    { icon: "fas fa-shield-alt", title: "Sicherheitspersonal", text: "Überprüfung von Wachleuten, Bodyguards und Sicherheitsbeamten vor und während der Anstellung." },
    { icon: "fas fa-building", title: "Sensible Unternehmensbereiche", text: "Mitarbeiter mit Zugang zu vertraulichen Daten, Finanzen oder strategischen Informationen." },
    { icon: "fas fa-key", title: "Schlüsselpositionen", text: "Führungskräfte, Treuhänder und Personen mit erhöhter Vertrauensstellung im Unternehmen." },
    { icon: "fas fa-user-shield", title: "Privathaushalt & Familie", text: "Hauspersonal, Kinderbetreuer und Personen mit Zugang zu Ihrem privaten Umfeld." },
  ];

  const faqs = [
    { q: "Was ist eine Sicherheitsprüfung mit Polygraph?", a: "Eine Sicherheitsprüfung mit dem Polygraphen ist eine strukturierte Befragung, bei der physiologische Reaktionen gemessen werden, um die Zuverlässigkeit und Integrität einer Person in sicherheitsrelevanten Bereichen zu beurteilen." },
    { q: "Für wen ist eine Sicherheitsprüfung geeignet?", a: "Für Unternehmen, die Mitarbeiter in sensiblen Positionen überprüfen möchten, sowie für Privatpersonen, die Hauspersonal oder Vertrauenspersonen testen lassen wollen." },
    { q: "Wie lange dauert die Untersuchung?", a: "Eine vollständige Sicherheitsprüfung dauert in der Regel 2–3 Stunden, inklusive Vorbesprechung, Untersuchung und Auswertung." },
    { q: "Ist das Ergebnis vertraulich?", a: "Ja. Alle Ergebnisse werden streng vertraulich behandelt und nur an den Auftraggeber weitergegeben." },
  ];

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: TEXT_DARK }}>
      <SharedNavbar />
      <ServiceSchema
        name="Sicherheitsprüfung – Polygraphuntersuchung"
        description="Polygraphbasierte Sicherheitsprüfung für sensible Positionen. Zuverlässige Überprüfung von Vertrauenswürdigkeit und Integrität."
        url="/sicherheitspruefung"
        serviceType="Sicherheitsprüfung"
        areaServed={["München", "Deutschland", "Österreich", "Schweiz"]}
        offers={{ priceRange: "ab 490 €", description: "Sicherheitsprüfung mit Polygraph inkl. offiziellem Gutachten" }}
      />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Sicherheitsprüfung" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d4a7a 100%)`, padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
            Sicherheit · Integrität · Vertrauen
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px" }}>
            Sicherheitsprüfung mit Polygraph
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "20px", lineHeight: 1.7, marginBottom: "36px" }}>
            Zuverlässigkeitstests für sicherheitssensible Positionen – professionell, diskret und mit <strong style={{ color: ORANGE }}>98–99% Genauigkeit</strong>.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
            <Link href="/#contact" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: `2px solid rgba(255,255,255,0.3)`, color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
              Termin anfragen
            </Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "60px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, marginBottom: "16px" }}>Wann ist eine Sicherheitsprüfung sinnvoll?</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.8, marginBottom: "40px" }}>
            In einer Welt, in der Vertrauen zur wertvollsten Ressource geworden ist, bieten wir professionelle Sicherheitsprüfungen für Unternehmen und Privatpersonen an. Ob bei der Neueinstellung von Sicherheitspersonal, der Überprüfung von Mitarbeitern in sensiblen Positionen oder der Kontrolle von Hauspersonal – unsere Polygraphuntersuchungen liefern verlässliche Ergebnisse.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "48px" }}>
            {useCases.map((u) => (
              <div key={u.title} style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "28px", border: `1px solid ${BORDER}` }}>
                <i className={u.icon} style={{ color: ORANGE, fontSize: "28px", marginBottom: "16px", display: "block" }} />
                <h3 style={{ color: NAVY, fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>{u.title}</h3>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{u.text}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: NAVY, borderRadius: "12px", padding: "40px", marginBottom: "48px", textAlign: "center" }}>
            <h2 style={{ color: WHITE, fontSize: "24px", fontWeight: 700, marginBottom: "12px" }}>Kostenlose Erstberatung</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", marginBottom: "24px" }}>Sprechen Sie mit unseren Experten über Ihre Anforderungen. Wir entwickeln ein maßgeschneidertes Prüfkonzept für Ihr Unternehmen.</p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, marginBottom: "24px" }}>Häufige Fragen zur Sicherheitsprüfung</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
            {faqs.map((f) => (
              <div key={f.q} style={{ backgroundColor: LIGHT_BG, borderRadius: "8px", padding: "24px", border: `1px solid ${BORDER}` }}>
                <h3 style={{ color: NAVY, fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>{f.q}</h3>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>← Zurück zur Startseite</Link>
            <Link href="/mitarbeiterueberpruefung" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Mitarbeiterüberprüfung</Link>
            <Link href="/interne-ermittlungen" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Interne Ermittlungen</Link>
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
