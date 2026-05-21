import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import Breadcrumb from "../components/Breadcrumb";
import { InlineCTA, BottomCTA } from "../components/ArticleCTA";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function RatgeberUnternehmen() {
  useEffect(() => {
    document.title = "Polygraphuntersuchungen im Unternehmenskontext | Ratgeber | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Einsatzmöglichkeiten der Polygraphie für Unternehmen: Einstellungsüberprüfung, interne Ermittlungen, Sicherheitsüberprüfungen. Sachliche Übersicht.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: NAVY }}>
      <SharedNavbar />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Polygraph für Unternehmen" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #243d6b 100%)`, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ color: ORANGE, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>
            Unternehmen & Organisationen &nbsp;·&nbsp; 6 Min. Lesezeit
          </p>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.18, marginBottom: "20px", letterSpacing: "-0.3px" }}>
            Polygraphuntersuchungen im Unternehmenskontext
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "18px", lineHeight: 1.75, maxWidth: "620px" }}>
            Wann und wie Unternehmen Polygraphuntersuchungen einsetzen – eine sachliche Übersicht zu Einsatzbereichen, Rahmenbedingungen und Grenzen.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Unternehmensinterner Betrug, Datenmissbrauch und Vertrauensbrüche sind keine Randphänomene. Klassische Sicherheitsmaßnahmen – Hintergrundprüfungen, Referenzgespräche, interne Audits – haben ihre Berechtigung, stoßen jedoch an methodische Grenzen, wenn es um die Klärung konkreter Verdachtsmomente geht.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "36px" }}>
            Die Polygraphie bietet in diesen Situationen eine objektive, wissenschaftlich fundierte Methode zur Klärung spezifischer Fragestellungen. Voraussetzung ist in jedem Fall die freiwillige und informierte Zustimmung der zu testenden Person.
          </p>
          <InlineCTA
            headline="Unternehmensspezifische Beratung"
            body="Wir entwickeln gemeinsam mit Ihnen ein Untersuchungskonzept, das zu den rechtlichen und organisatorischen Anforderungen Ihres Unternehmens passt."
          />


          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "18px", marginTop: "40px" }}>Typische Einsatzbereiche</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
            {[
              {
                title: "Interne Ermittlungen",
                link: "/interne-ermittlungen",
                text: "Bei konkretem Verdacht auf Diebstahl, Unterschlagung, Datenmissbrauch oder Weitergabe vertraulicher Informationen ermöglicht der Polygraphtest eine objektive Klärung – diskret und ohne öffentliche Verfahren.",
              },
              {
                title: "Einstellungsüberprüfung",
                link: "/mitarbeiterueberpruefung",
                text: "Für Positionen mit Zugang zu sensiblen Informationen, Finanzmitteln oder kritischer Infrastruktur kann eine Polygraphuntersuchung als Teil des Einstellungsprozesses eingesetzt werden – sofern der Bewerber zustimmt.",
              },
              {
                title: "Sicherheitsüberprüfungen",
                link: "/sicherheitspruefung",
                text: "Regelmäßige Überprüfungen von Mitarbeitern in sicherheitsrelevanten Positionen – etwa in Finanzdienstleistung, Pharma oder Technologie – können Teil eines strukturierten Integritätsprogramms sein.",
              },
              {
                title: "IT-Sicherheit",
                link: "/it-sektor",
                text: "Administratoren, Entwickler und Sicherheitsbeauftragte mit Zugang zu kritischen Systemen können bei begründetem Verdacht auf Datenmissbrauch oder Sabotage untersucht werden.",
              },
            ].map((item) => (
              <div key={item.title} style={{ padding: "22px 24px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap", marginBottom: "10px" }}>
                  <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", margin: 0 }}>{item.title}</p>
                  <Link href={item.link} style={{ color: ORANGE, fontSize: "13px", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>Mehr erfahren →</Link>
                </div>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.8, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{ borderLeft: `3px solid ${ORANGE}`, paddingLeft: "24px", margin: "36px 0" }}>
            <p style={{ color: NAVY, fontSize: "17px", lineHeight: 1.85, fontStyle: "italic", margin: 0 }}>
              „Der Polygraph ist kein Instrument der Kontrolle, sondern der Klärung. Er ist dann am wirkungsvollsten, wenn er als Teil eines strukturierten Integritätsprogramms eingesetzt wird."
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Rechtliche Rahmenbedingungen</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Polygraphuntersuchungen im Unternehmenskontext sind in Deutschland, Österreich und der Schweiz zulässig, sofern die Teilnahme freiwillig und die Einwilligung informiert ist. Eine erzwungene Teilnahme ist rechtlich nicht zulässig und würde die Ergebnisse entwerten.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "40px" }}>
            Im Arbeitsrecht gelten zusätzliche Einschränkungen, die von Fall zu Fall unterschiedlich sind. Wir empfehlen, vor einer Untersuchung im Arbeitsverhältnis rechtlichen Rat einzuholen. Unsere Spezialisten beraten Sie zu den Rahmenbedingungen in Ihrem konkreten Fall.
          </p>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Branchen mit besonderem Bedarf</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}>
            {["Finanzdienstleistung", "Pharmaindustrie", "IT & Technologie", "Logistik & Transport", "Sicherheitsunternehmen", "Luxusgüter", "Family Offices", "Kanzleien", "Gesundheitswesen", "Immobilien"].map((b) => (
              <span key={b} style={{ backgroundColor: LIGHT_BG, border: `1px solid ${BORDER}`, color: NAVY, padding: "6px 12px", borderRadius: "4px", fontSize: "13px", fontWeight: 600 }}>{b}</span>
            ))}
          </div>

          <div style={{ backgroundColor: NAVY, borderRadius: "10px", padding: "36px 32px", marginBottom: "40px" }}>
            <h3 style={{ color: WHITE, fontSize: "19px", fontWeight: 700, marginBottom: "10px" }}>Unternehmensanfrage</h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px", lineHeight: 1.7, marginBottom: "22px" }}>
              Wir erstellen ein maßgeschneidertes Angebot für Ihren Fall. Erstberatung kostenlos und vertraulich.
            </p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "11px 26px", borderRadius: "5px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", borderTop: `1px solid ${BORDER}`, paddingTop: "24px" }}>
            <Link href="/ratgeber" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>← Alle Artikel</Link>
            <Link href="/ratgeber/mitarbeiterdiebstahl" style={{ color: TEXT_MID, fontWeight: 600, textDecoration: "none", fontSize: "14px" }}>Mitarbeiterdiebstahl aufklären →</Link>
          </div>
        
          <BottomCTA
            headline="Unternehmensanfrage stellen"
            body="Wir beraten Unternehmen jeder Größe – von der Einzeluntersuchung bis zur strukturierten Mitarbeiterbefragung. Diskret, rechtssicher, professionell."
            prevLabel="← Ablauf & Dauer"
            prevHref="/ratgeber/dauer-polygraph-test"
            nextLabel="Mitarbeiterdiebstahl"
            nextHref="/ratgeber/mitarbeiterdiebstahl"
          />

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
