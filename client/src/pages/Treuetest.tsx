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

export default function Treuetest() {
  useEffect(() => {
    document.title = "Treuetest München | Lügendetektor Untreue | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Treuetest mit Lügendetektor in München. Professionelle Polygraphuntersuchung bei Verdacht auf Untreue. Diskret, vertraulich, 98–99% Genauigkeit. +49 175 6036003");
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    { num: "1", icon: "fas fa-phone", title: "Kostenlose Erstberatung", text: "Schildern Sie uns Ihre Situation in einem vertraulichen Gespräch. Wir beraten Sie über den Ablauf und beantworten alle Fragen." },
    { num: "2", icon: "fas fa-calendar-check", title: "Terminvereinbarung", text: "Wir vereinbaren einen diskreten Termin – in unserem Büro in München oder auf Wunsch bei Ihnen zu Hause." },
    { num: "3", icon: "fas fa-wave-square", title: "Polygraphuntersuchung", text: "Die Untersuchung dauert ca. 2–3 Stunden. Erfahrene Spezialisten führen die Befragung professionell und einfühlsam durch." },
    { num: "4", icon: "fas fa-file-alt", title: "Ergebnis & Auswertung", text: "Sie erhalten eine klare Auswertung. Auf Wunsch auch als schriftliche Dokumentation für Ihre Unterlagen." },
  ];

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: TEXT_DARK }}>
      <SharedNavbar />
      <ServiceSchema
        name="Treuetest – Polygraphuntersuchung München"
        description="Professioneller Treuetest mit dem Polygraphen. Diskrete Untersuchung für Privatpersonen in München und bundesweit. Zertifizierte Experten, offizielles Gutachten."
        url="/treuetest"
        serviceType="Treuetest"
        areaServed={["München", "Berlin", "Hamburg", "Frankfurt", "Deutschland", "Österreich", "Schweiz"]}
        offers={{ priceRange: "ab 490 €", description: "Polygraphuntersuchung inkl. schriftlichem Gutachten" }}
      />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Treuetest" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d4a7a 100%)`, padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
            Privat · Diskret · Vertraulich
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px" }}>
            Treuetest mit Lügendetektor
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "20px", lineHeight: 1.7, marginBottom: "36px" }}>
            Klarheit bei Verdacht auf Untreue – professionell, diskret und mit <strong style={{ color: ORANGE }}>98–99% Genauigkeit</strong>. Wir helfen Ihnen, die Wahrheit zu erfahren.
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
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, marginBottom: "20px" }}>
            So läuft ein Treuetest ab
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "48px" }}>
            {steps.map((s) => (
              <div key={s.num} style={{ display: "flex", gap: "20px", alignItems: "flex-start", backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "24px", border: `1px solid ${BORDER}` }}>
                <div style={{ flexShrink: 0, width: "52px", height: "52px", backgroundColor: NAVY, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className={s.icon} style={{ color: ORANGE, fontSize: "20px" }} />
                </div>
                <div>
                  <div style={{ color: ORANGE, fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "4px" }}>Schritt {s.num}</div>
                  <h3 style={{ color: NAVY, fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>{s.title}</h3>
                  <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 700, marginBottom: "16px" }}>
            Treuetest München – Häufige Fragen
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
            {[
              { q: "Ist ein Treuetest mit Lügendetektor legal?", a: "Ja – ein Polygraphtest ist in Deutschland legal, sofern die zu testende Person freiwillig und informiert zustimmt. Wir klären Sie vorab vollständig über den Ablauf auf." },
              { q: "Wie genau ist der Treuetest?", a: "Unsere Polygraphuntersuchungen erreichen eine Genauigkeit von 98–99%. Dies ist deutlich zuverlässiger als andere Methoden der Wahrheitsfindung." },
              { q: "Bleibt der Test vertraulich?", a: "Absolut. Alle Untersuchungen werden streng vertraulich behandelt. Keine Daten werden an Dritte weitergegeben." },
              { q: "Was kostet ein Treuetest?", a: "Die Kosten hängen vom gewählten Paket ab. Kontaktieren Sie uns für ein individuelles Angebot – die Erstberatung ist kostenlos." },
            ].map((faq, i) => (
              <div key={i} style={{ backgroundColor: LIGHT_BG, borderRadius: "8px", padding: "20px 24px", border: `1px solid ${BORDER}` }}>
                <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>{faq.q}</p>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "28px 32px", border: `1px solid ${BORDER}` }}>
            <p style={{ color: NAVY, fontWeight: 700, fontSize: "17px", marginBottom: "16px" }}>Jetzt Treuetest anfragen:</p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "12px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="fas fa-phone" /> +49 175 6036003
              </a>
              <Link href="/#contact" style={{ backgroundColor: NAVY, color: WHITE, padding: "12px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
                Online anfragen
              </Link>
            </div>
            <p style={{ color: TEXT_MID, fontSize: "13px", marginTop: "12px" }}>Mo–So 9:00–22:00 Uhr · Diskret · Vertraulich</p>
          </div>
        </div>
      </section>
      <SharedFooter />
      <FloatingButtons />
    </div>
  );
}
