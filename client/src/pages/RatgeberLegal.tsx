import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import Breadcrumb from "../components/Breadcrumb";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function RatgeberLegal() {
  useEffect(() => {
    document.title = "Rechtliche Grundlagen der Polygraphie in Deutschland | Ratgeber | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Private Polygraphuntersuchungen sind in Deutschland, Österreich und der Schweiz legal. Eine sachliche Darstellung der rechtlichen Rahmenbedingungen.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: NAVY }}>
      <SharedNavbar />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Legalität in Deutschland" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #243d6b 100%)`, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ color: ORANGE, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>
            Recht & Rahmenbedingungen &nbsp;·&nbsp; 6 Min. Lesezeit
          </p>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.18, marginBottom: "20px", letterSpacing: "-0.3px" }}>
            Rechtliche Grundlagen der Polygraphie in Deutschland
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "18px", lineHeight: 1.75, maxWidth: "620px" }}>
            Private Polygraphuntersuchungen sind in Deutschland zulässig. Eine sachliche Darstellung der Rechtslage – ohne Vereinfachungen.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <div style={{ backgroundColor: "#f0faf4", border: "1px solid #b7e4c7", borderRadius: "8px", padding: "20px 24px", marginBottom: "36px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
            <i className="fas fa-check-circle" style={{ color: "#2d6a4f", fontSize: "20px", flexShrink: 0, marginTop: "2px" }} />
            <p style={{ color: "#1b4332", fontSize: "15px", lineHeight: 1.75, margin: 0 }}>
              <strong>Zusammenfassung:</strong> Private Polygraphuntersuchungen sind in Deutschland, Österreich und der Schweiz rechtlich zulässig, sofern die zu testende Person freiwillig und informiert zustimmt.
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Die Entscheidung des Bundesverfassungsgerichts – richtig eingeordnet</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Das Bundesverfassungsgericht hat in seiner Entscheidung von 1998 (BVerfGE 98, 169) festgestellt, dass Polygraphtests im staatlichen Strafprozess nicht als Beweismittel zugelassen sind. Diese Entscheidung wird häufig missverstanden als allgemeines Verbot der Polygraphie in Deutschland – das ist sie nicht.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Die Entscheidung betrifft ausschließlich den Einsatz durch staatliche Strafverfolgungsbehörden im Rahmen eines Strafverfahrens. Sie trifft keine Aussage über die Zulässigkeit privater Polygraphuntersuchungen, die von Privatpersonen oder Unternehmen in Auftrag gegeben werden.
          </p>

          <div style={{ borderLeft: `3px solid ${ORANGE}`, paddingLeft: "24px", margin: "36px 0" }}>
            <p style={{ color: NAVY, fontSize: "17px", lineHeight: 1.85, fontStyle: "italic", margin: 0 }}>
              „Was im staatlichen Strafprozess nicht zulässig ist, ist im privaten Bereich nicht automatisch verboten. Die Rechtslage für private Polygraphuntersuchungen ist klar: Sie sind legal."
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "18px", marginTop: "40px" }}>Die drei rechtlichen Grundvoraussetzungen</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
            {[
              {
                num: "01",
                title: "Freiwillige Teilnahme",
                text: "Die zu testende Person muss ohne Zwang, Druck oder Täuschung an der Untersuchung teilnehmen. Eine erzwungene Teilnahme ist nicht nur rechtlich problematisch, sondern verfälscht auch die physiologischen Messwerte und macht das Ergebnis unverwertbar.",
              },
              {
                num: "02",
                title: "Informierte Einwilligung",
                text: "Die Person muss vorab vollständig über Ablauf, Methodik, die konkreten Fragen und die geplante Verwendung der Ergebnisse informiert werden. Wir holen in jedem Fall eine schriftliche Einwilligungserklärung ein, bevor die Untersuchung beginnt.",
              },
              {
                num: "03",
                title: "Datenschutz und Vertraulichkeit",
                text: "Die Ergebnisse unterliegen strengen Datenschutzbestimmungen. Sie dürfen nur an den Auftraggeber weitergegeben werden und sind vertraulich zu behandeln. Wir schließen mit jedem Mandanten eine Vertraulichkeitsvereinbarung ab.",
              },
            ].map((item) => (
              <div key={item.num} style={{ display: "flex", gap: "20px", alignItems: "flex-start", padding: "22px 24px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
                <div style={{ flexShrink: 0 }}>
                  <span style={{ color: ORANGE, fontWeight: 800, fontSize: "22px", fontFamily: "monospace" }}>{item.num}</span>
                </div>
                <div>
                  <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>{item.title}</p>
                  <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.8, margin: 0 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Rechtslage in Österreich und der Schweiz</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            In Österreich und der Schweiz gilt eine vergleichbare Rechtslage: Private Polygraphuntersuchungen sind zulässig, sofern Freiwilligkeit und informierte Einwilligung gewährleistet sind. Auch hier gilt, dass die Entscheidungen der jeweiligen Höchstgerichte zur Unzulässigkeit im Strafprozess nicht auf den privaten Bereich übertragen werden können.
          </p>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Hinweis zu arbeitsrechtlichen Fragen</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "40px" }}>
            Im Unternehmenskontext – insbesondere bei Mitarbeiterüberprüfungen – empfehlen wir, vorab rechtlichen Rat einzuholen. Das Arbeitsrecht setzt der Verwendung von Polygraphergebnissen im Arbeitsverhältnis bestimmte Grenzen, die von Fall zu Fall unterschiedlich sind. Unsere Spezialisten beraten Sie zu den Rahmenbedingungen in Ihrem konkreten Fall.
          </p>

          <div style={{ backgroundColor: NAVY, borderRadius: "10px", padding: "36px 32px", marginBottom: "40px" }}>
            <h3 style={{ color: WHITE, fontSize: "19px", fontWeight: 700, marginBottom: "10px" }}>Rechtliche Fragen besprechen</h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px", lineHeight: 1.7, marginBottom: "22px" }}>
              Wir erläutern Ihnen die Rahmenbedingungen für Ihren spezifischen Fall – vertraulich und ohne Verpflichtung.
            </p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "11px 26px", borderRadius: "5px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", borderTop: `1px solid ${BORDER}`, paddingTop: "24px" }}>
            <Link href="/ratgeber" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>← Alle Artikel</Link>
            <Link href="/ratgeber/treuetest-vorbereitung" style={{ color: TEXT_MID, fontWeight: 600, textDecoration: "none", fontSize: "14px" }}>Treuetest: Vorbereitung →</Link>
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
