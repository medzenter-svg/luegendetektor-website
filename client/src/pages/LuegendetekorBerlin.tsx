import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import Breadcrumb from "../components/Breadcrumb";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function LuegendetekorBerlin() {
  useEffect(() => {
    document.title = "Lügendetektor Berlin | Polygraph Test Berlin | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Lügendetektor & Polygraph-Tests in Berlin. Professionelle Polygraphuntersuchungen für Privatpersonen und Unternehmen in der Hauptstadt. Diskret & vertraulich. +49 175 6036003");
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { icon: "fas fa-heart-broken", title: "Treuetest", text: "Klarheit bei Verdacht auf Untreue – professionell, diskret und mit 98–99% Genauigkeit." },
    { icon: "fas fa-briefcase", title: "Mitarbeiterüberprüfung", text: "Einstellungstests und Sicherheitsüberprüfungen für Berliner Unternehmen jeder Größe." },
    { icon: "fas fa-search", title: "Interne Ermittlungen", text: "Aufklärung von Diebstahl, Betrug oder anderen Vergehen im Unternehmensumfeld." },
    { icon: "fas fa-home", title: "Hauspersonal", text: "Überprüfung von Haushaltshilfen, Kinderbetreuerinnen und Pflegepersonal in Berlin." },
    { icon: "fas fa-shield-alt", title: "Sicherheitsprüfung", text: "Zuverlässigkeitstests für sicherheitssensible Positionen und Schlüsselpersonal." },
    { icon: "fas fa-flask", title: "Probetest", text: "Erleben Sie einen Demonstrationstest, bevor Sie sich für eine vollständige Untersuchung entscheiden." },
  ];

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: TEXT_DARK }}>
      <SharedNavbar />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Städte" },
    { label: "Lügendetektor Berlin" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d4a7a 100%)`, padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
            Berlin · Diskret · Professionell
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 5vw, 46px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px" }}>
            Lügendetektor-Test in Berlin
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "19px", lineHeight: 1.7, marginBottom: "36px" }}>
            Professionelle Polygraphuntersuchungen in Berlin für Privatpersonen und Unternehmen. <strong style={{ color: ORANGE }}>98–99% Genauigkeit</strong> – diskret, vertraulich, rechtssicher.
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
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, marginBottom: "16px" }}>Polygraph-Services in Berlin</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.8, marginBottom: "40px" }}>
            Als führender Anbieter von Polygraphuntersuchungen im deutschsprachigen Raum sind wir auch in Berlin für Sie tätig. Unsere Spezialisten kommen direkt zu Ihnen – ob in Mitte, Charlottenburg, Prenzlauer Berg oder in anderen Berliner Stadtteilen. Alle Untersuchungen werden streng vertraulich und nach höchsten professionellen Standards durchgeführt.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "48px" }}>
            {services.map((s) => (
              <div key={s.title} style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "28px", border: `1px solid ${BORDER}` }}>
                <i className={s.icon} style={{ color: ORANGE, fontSize: "26px", marginBottom: "14px", display: "block" }} />
                <h3 style={{ color: NAVY, fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>{s.title}</h3>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: LIGHT_BG, borderRadius: "12px", padding: "36px", marginBottom: "48px", borderLeft: `4px solid ${ORANGE}` }}>
            <h3 style={{ color: NAVY, fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>Warum POLYGRAPH für Berlin wählen?</h3>
            <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              Unsere Spezialisten verfügen über jahrelange Erfahrung in der Polygraphie und sind nach internationalen Standards zertifiziert. Wir bieten Ihnen höchste Diskretion, professionelle Durchführung und verlässliche Ergebnisse mit einer Genauigkeit von 98–99%.
            </p>
            <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
              Alle Untersuchungen in Berlin werden auf Wunsch bei Ihnen zu Hause oder in einem diskreten Büro durchgeführt. Wir kommen zu Ihnen – ohne Aufwand für Sie.
            </p>
          </div>

          <div style={{ backgroundColor: NAVY, borderRadius: "12px", padding: "40px", marginBottom: "40px", textAlign: "center" }}>
            <h2 style={{ color: WHITE, fontSize: "24px", fontWeight: 700, marginBottom: "12px" }}>Termin in Berlin vereinbaren</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", marginBottom: "24px" }}>Kostenlose Erstberatung – Mo–So 9:00–22:00 Uhr. Wir kommen zu Ihnen nach Berlin.</p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-phone" /> +49 175 6036003
              </a>
              <Link href="/#contact" style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)", color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
                Online anfragen
              </Link>
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>← Zurück zur Startseite</Link>
            <Link href="/luegendetektor-muenchen" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Lügendetektor München</Link>
            <Link href="/luegendetektor-hamburg" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Lügendetektor Hamburg</Link>
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
