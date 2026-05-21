import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function Fahrerpruefung() {
  useEffect(() => {
    document.title = "Fahrerüberprüfung Polygraph | Chauffeur & Fahrer testen | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Fahrerüberprüfung mit Polygraph für Chauffeure, Lieferfahrer und Berufskraftfahrer. Zuverlässigkeit, Ehrlichkeit und Sicherheit professionell testen. München & bundesweit. +49 175 6036003");
    window.scrollTo(0, 0);
  }, []);

  const useCases = [
    { icon: "fas fa-car", title: "Privatchauffeure", text: "Personen, die Sie oder Ihre Familie regelmäßig fahren, sollten auf Zuverlässigkeit, Diskretion und Vertrauenswürdigkeit geprüft werden." },
    { icon: "fas fa-truck", title: "Lieferfahrer & Kuriere", text: "Fahrer, die wertvolle Güter oder vertrauliche Dokumente transportieren, müssen auf Ehrlichkeit und Integrität überprüft werden." },
    { icon: "fas fa-bus", title: "Berufskraftfahrer", text: "Unternehmen können ihre Fahrer auf Drogenkonsum, frühere Vergehen oder andere sicherheitsrelevante Aspekte überprüfen lassen." },
    { icon: "fas fa-shield-alt", title: "Sicherheitsfahrer", text: "Fahrer für VIPs, Diplomaten oder Personen mit erhöhtem Schutzbedarf müssen besonders gründlich überprüft werden." },
  ];

  const steps = [
    { num: "1", icon: "fas fa-phone", title: "Kostenlose Erstberatung", text: "Schildern Sie uns Ihre Anforderungen. Wir beraten Sie über den Ablauf und die spezifischen Prüfpunkte für Ihren Fahrer." },
    { num: "2", icon: "fas fa-calendar-check", title: "Terminvereinbarung", text: "Wir vereinbaren einen diskreten Termin – in unserem Büro in München oder bei Ihnen vor Ort." },
    { num: "3", icon: "fas fa-wave-square", title: "Polygraphuntersuchung", text: "Die Untersuchung dauert ca. 2–3 Stunden. Unsere Spezialisten prüfen alle relevanten Aspekte professionell und diskret." },
    { num: "4", icon: "fas fa-file-alt", title: "Ergebnis & Dokumentation", text: "Sie erhalten eine klare Auswertung. Auf Wunsch als schriftliche Dokumentation für Ihre Unterlagen." },
  ];

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: TEXT_DARK }}>
      <SharedNavbar />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d4a7a 100%)`, padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
            Sicherheit · Zuverlässigkeit · Vertrauen
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 5vw, 46px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px" }}>
            Fahrerüberprüfung mit Polygraph
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "19px", lineHeight: 1.7, marginBottom: "36px" }}>
            Vertrauen Sie Ihre Sicherheit nur geprüften Fahrern. Professionelle Polygraphuntersuchung für Chauffeure, Lieferfahrer und Berufskraftfahrer – <strong style={{ color: ORANGE }}>diskret und vertraulich</strong>.
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
          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, marginBottom: "16px" }}>Wann ist eine Fahrerüberprüfung sinnvoll?</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.8, marginBottom: "40px" }}>
            Fahrer haben eine besondere Vertrauensstellung – sie transportieren nicht nur Personen und Güter, sondern haben oft auch Einblick in private und geschäftliche Abläufe. Eine Polygraphuntersuchung gibt Ihnen die Sicherheit, dass Ihr Fahrer integer, zuverlässig und vertrauenswürdig ist.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "48px" }}>
            {useCases.map((u) => (
              <div key={u.title} style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "28px", border: `1px solid ${BORDER}` }}>
                <i className={u.icon} style={{ color: ORANGE, fontSize: "28px", marginBottom: "16px", display: "block" }} />
                <h3 style={{ color: NAVY, fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>{u.title}</h3>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{u.text}</p>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, marginBottom: "24px" }}>Ablauf der Fahrerüberprüfung</h2>
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

          <div style={{ backgroundColor: NAVY, borderRadius: "12px", padding: "40px", marginBottom: "40px", textAlign: "center" }}>
            <h2 style={{ color: WHITE, fontSize: "24px", fontWeight: 700, marginBottom: "12px" }}>Fahrer jetzt überprüfen lassen</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", marginBottom: "24px" }}>Kostenlose Erstberatung – diskret, vertraulich, professionell. Mo–So 9:00–22:00 Uhr.</p>
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
            <Link href="/hauspersonal-ueberpruefung" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Hauspersonal-Überprüfung</Link>
            <Link href="/mitarbeiterueberpruefung" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Mitarbeiterüberprüfung</Link>
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
