import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import FloatingButtons from "../components/FloatingButtons";
import SharedFooter from "../components/SharedFooter";
import Breadcrumb from "../components/Breadcrumb";
import { InlineCTA, BottomCTA } from "../components/ArticleCTA";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function RatgeberMitarbeiterdiebstahl() {
  useEffect(() => {
    document.title = "Mitarbeiterdiebstahl aufklären – Polygraph als Ermittlungsinstrument | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Wie Unternehmen bei Verdacht auf Mitarbeiterdiebstahl vorgehen können – und welche Rolle die Polygraphie bei internen Ermittlungen spielt.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: NAVY }}>
      <SharedNavbar />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Mitarbeiterdiebstahl" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #243d6b 100%)`, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ color: ORANGE, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>
            Interne Ermittlungen &nbsp;·&nbsp; 5 Min. Lesezeit
          </p>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.18, marginBottom: "20px", letterSpacing: "-0.3px" }}>
            Mitarbeiterdiebstahl aufklären
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "18px", lineHeight: 1.75, maxWidth: "620px" }}>
            Wie Unternehmen bei Verdacht auf interne Entwendung oder Unterschlagung strukturiert vorgehen können – und welche Rolle die Polygraphie dabei spielt.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Verdacht auf Mitarbeiterdiebstahl gehört zu den schwierigsten Situationen, mit denen Unternehmen konfrontiert werden können. Er belastet das Betriebsklima, erzeugt Misstrauen und stellt Führungskräfte vor die Frage: Wie geht man mit einem Verdacht um, der sich weder beweisen noch ausräumen lässt?
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "36px" }}>
            Klassische Maßnahmen – Videoüberwachung, Inventurprüfungen, interne Befragungen – können Hinweise liefern, aber selten Gewissheit. Die Polygraphie bietet in dieser Situation eine Möglichkeit zur objektiven Klärung, die diskret und ohne öffentliche Verfahren durchgeführt werden kann.
          </p>
          <InlineCTA
            headline="Vertrauliche Erstberatung für Unternehmen"
            body="Wir besprechen Ihren Fall diskret und entwickeln eine strukturierte Vorgehensweise – ohne Eskalation, ohne öffentlichen Druck."
          />


          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "18px", marginTop: "40px" }}>Typische Situationen</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
            {[
              "Wiederholte Inventurdifferenzen ohne nachvollziehbare Erklärung",
              "Verdacht auf Entwendung von Bargeld aus der Kasse oder dem Tresor",
              "Verschwinden von Waren, Materialien oder Betriebsmitteln",
              "Verdacht auf Weitergabe vertraulicher Informationen an Wettbewerber",
              "Unklare Buchungen oder Abweichungen in der Finanzbuchhaltung",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <i className="fas fa-minus" style={{ color: ORANGE, fontSize: "12px", marginTop: "6px", flexShrink: 0 }} />
                <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.7, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <div style={{ borderLeft: `3px solid ${ORANGE}`, paddingLeft: "24px", margin: "36px 0" }}>
            <p style={{ color: NAVY, fontSize: "17px", lineHeight: 1.85, fontStyle: "italic", margin: 0 }}>
              „Ein Polygraphtest kann in diesen Situationen zwei Dinge leisten: Er kann einen unschuldig Verdächtigten entlasten – und er kann dazu beitragen, dass ein tatsächlicher Täter geständig wird."
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Wie die Untersuchung abläuft</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Bei internen Ermittlungen arbeiten wir eng mit dem Auftraggeber zusammen, um die relevanten Fragen präzise zu formulieren. Die Untersuchung selbst findet in einem neutralen Umfeld statt – auf Wunsch auch in Ihren Räumlichkeiten. Alle Beteiligten werden vorab über Ablauf und Methodik informiert.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "36px" }}>
            Die Teilnahme ist freiwillig. Erfahrungsgemäß ist die Bereitschaft zur Untersuchung bei unschuldigen Personen hoch – was für sich genommen bereits eine wichtige Information ist.
          </p>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Diskretion als Grundprinzip</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "40px" }}>
            Interne Ermittlungen erfordern absolute Diskretion – gegenüber anderen Mitarbeitern, der Öffentlichkeit und gegebenenfalls auch gegenüber Behörden. Wir unterzeichnen in jedem Fall eine Vertraulichkeitsvereinbarung und geben Ergebnisse ausschließlich an den Auftraggeber weiter. Die Untersuchung hinterlässt keine öffentlichen Spuren.
          </p>

          <div style={{ backgroundColor: NAVY, borderRadius: "10px", padding: "36px 32px", marginBottom: "40px" }}>
            <h3 style={{ color: WHITE, fontSize: "19px", fontWeight: 700, marginBottom: "10px" }}>Vertrauliche Erstberatung</h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px", lineHeight: 1.7, marginBottom: "22px" }}>
              Wir besprechen Ihren Fall diskret und entwickeln eine geeignete Vorgehensweise.
            </p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "11px 26px", borderRadius: "5px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", borderTop: `1px solid ${BORDER}`, paddingTop: "24px" }}>
            <Link href="/ratgeber" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>← Alle Artikel</Link>
            <Link href="/interne-ermittlungen" style={{ color: TEXT_MID, fontWeight: 600, textDecoration: "none", fontSize: "14px" }}>Interne Ermittlungen →</Link>
          </div>
        
          <BottomCTA
            headline="Interne Ermittlung professionell begleiten"
            body="Unsere Experten unterstützen Unternehmen bei der sachlichen Aufklärung interner Vorfälle – mit rechtssicherem Gutachten und absoluter Vertraulichkeit."
            prevLabel="← Polygraph für Unternehmen"
            prevHref="/ratgeber/polygraph-fuer-unternehmen"
            nextLabel="Anzeichen Fremdgehen"
            nextHref="/ratgeber/anzeichen-fremdgehen"
          />

        </div>
      </section>
      <SharedFooter />
      <FloatingButtons />
    </div>
  );
}
