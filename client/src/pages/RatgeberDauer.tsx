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

export default function RatgeberDauer() {
  useEffect(() => {
    document.title = "Ablauf und Dauer einer Polygraphuntersuchung | Ratgeber | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Wie läuft eine Polygraphuntersuchung ab, und wie lange dauert sie? Eine sachliche Übersicht der vier Phasen mit Zeitangaben.");
    window.scrollTo(0, 0);
  }, []);

  const phases = [
    {
      number: "01",
      title: "Vorbesprechung",
      duration: "30–45 Minuten",
      text: "Der Spezialist erläutert den Ablauf, erklärt die Methodik und bespricht die geplanten Fragen. Die zu testende Person hat die Möglichkeit, Fragen zu präzisieren oder zu ergänzen. Eine schriftliche Einwilligungserklärung wird unterzeichnet. Diese Phase ist nicht optional – sie ist methodisch notwendig, um die Qualität der Untersuchung zu gewährleisten.",
    },
    {
      number: "02",
      title: "Kalibrierung",
      duration: "15–20 Minuten",
      text: "Die Sensoren werden angelegt: ein Brustgurt für die Atemfrequenz, Fingerelektroden für den galvanischen Hautwiderstand, eine Manschette für den Blutdruck. Einige neutrale Testfragen dienen dazu, die individuelle physiologische Baseline der Person zu ermitteln. Ohne diese Kalibrierung wäre eine valide Auswertung nicht möglich.",
    },
    {
      number: "03",
      title: "Untersuchung",
      duration: "60–90 Minuten",
      text: "Die strukturierte Befragung findet in einem ruhigen, privaten Raum statt. Jede Frage wird mehrfach in wechselnder Reihenfolge gestellt – das ist methodisch bedingt, um konsistente Reaktionsmuster zu erfassen. Zwischen den Fragerunden gibt es kurze Pausen. Die Anzahl der Themenbereiche beeinflusst die Gesamtdauer.",
    },
    {
      number: "04",
      title: "Auswertung und Ergebnis",
      duration: "30–45 Minuten",
      text: "Der Spezialist wertet die aufgezeichneten Daten aus und teilt das Ergebnis mit. Bei Bedarf werden einzelne Fragen besprochen. Auf Wunsch erhalten Sie eine schriftliche Dokumentation – die Erstellung verlängert den Termin entsprechend.",
    },
  ];

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: NAVY }}>
      <SharedNavbar />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Ablauf & Dauer" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #243d6b 100%)`, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ color: ORANGE, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>
            Ablauf & Vorbereitung &nbsp;·&nbsp; 4 Min. Lesezeit
          </p>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.18, marginBottom: "20px", letterSpacing: "-0.3px" }}>
            Ablauf und Dauer einer Polygraphuntersuchung
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "18px", lineHeight: 1.75, maxWidth: "620px" }}>
            Eine vollständige Untersuchung dauert in der Regel <strong style={{ color: ORANGE, fontWeight: 700 }}>2,5 bis 3,5 Stunden</strong>. Was in dieser Zeit geschieht, erläutern wir hier.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "40px" }}>
            Eine Polygraphuntersuchung ist kein kurzes Interview. Sie folgt einem strukturierten Protokoll, das aus vier Phasen besteht – jede davon ist methodisch notwendig und trägt zur Qualität des Ergebnisses bei. Wer gut vorbereitet zum Termin kommt, trägt wesentlich zur Verlässlichkeit der Untersuchung bei.
          </p>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "24px" }}>Die vier Phasen im Detail</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0", marginBottom: "40px", border: `1px solid ${BORDER}`, borderRadius: "10px", overflow: "hidden" }}>
            {phases.map((phase, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 1fr", backgroundColor: i % 2 === 0 ? LIGHT_BG : WHITE, borderBottom: i < phases.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                <div style={{ padding: "22px 20px", borderRight: `1px solid ${BORDER}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingTop: "24px" }}>
                  <span style={{ color: ORANGE, fontWeight: 800, fontSize: "24px", fontFamily: "monospace", display: "block", lineHeight: 1 }}>{phase.number}</span>
                  <span style={{ color: TEXT_MID, fontSize: "11px", fontWeight: 600, marginTop: "6px", textAlign: "center", lineHeight: 1.4 }}>{phase.duration}</span>
                </div>
                <div style={{ padding: "22px 24px" }}>
                  <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>{phase.title}</p>
          <InlineCTA
            headline="Termin in Ihrer Stadt vereinbaren"
            body="Untersuchungen finden in München und bundesweit statt – auch bei Ihnen vor Ort. Terminvereinbarung Mo–So 10–22 Uhr."
          />

                  <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.8, margin: 0 }}>{phase.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Was die Dauer beeinflusst</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "20px" }}>
            Die oben genannten Zeitangaben sind Richtwerte. Folgende Faktoren können die Gesamtdauer verlängern:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
            {[
              "Mehrere Themenbereiche oder eine größere Anzahl von Fragen",
              "Erstellung eines schriftlichen Gutachtens (zusätzlich 30–60 Minuten)",
              "Längere Kalibrierungsphase bei bestimmten physiologischen Ausgangswerten",
              "Wiederholung einzelner Fragerunden bei unklaren Reaktionsmustern",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <i className="fas fa-minus" style={{ color: ORANGE, fontSize: "12px", marginTop: "6px", flexShrink: 0 }} />
                <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.7, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Hinweise zur Vorbereitung</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Eine gute Vorbereitung verbessert die Qualität der Untersuchung – nicht das Ergebnis, sondern die Verwertbarkeit der Daten. Wir empfehlen:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
            {[
              "Ausreichend Schlaf in der Nacht vor dem Termin",
              "Reduktion von Koffein am Tag der Untersuchung",
              "Vorabinformation über regelmäßig eingenommene Medikamente",
              "Ausreichend Zeit einplanen – kein Termin unmittelbar danach",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <i className="fas fa-check" style={{ color: ORANGE, fontSize: "12px", marginTop: "6px", flexShrink: 0 }} />
                <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.7, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: NAVY, borderRadius: "10px", padding: "36px 32px", marginBottom: "40px" }}>
            <h3 style={{ color: WHITE, fontSize: "19px", fontWeight: 700, marginBottom: "10px" }}>Termin vereinbaren</h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px", lineHeight: 1.7, marginBottom: "22px" }}>
              Wir planen Ihren Termin flexibel – auch abends und am Wochenende. Mo–So 9:00–22:00 Uhr.
            </p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "11px 26px", borderRadius: "5px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", borderTop: `1px solid ${BORDER}`, paddingTop: "24px" }}>
            <Link href="/ratgeber" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>← Alle Artikel</Link>
            <Link href="/ratgeber/polygraph-fuer-unternehmen" style={{ color: TEXT_MID, fontWeight: 600, textDecoration: "none", fontSize: "14px" }}>Polygraph für Unternehmen →</Link>
          </div>
        
          <BottomCTA
            headline="Termin vereinbaren"
            body="Eine vollständige Untersuchung dauert 2,5 bis 3,5 Stunden. Wir planen gemeinsam mit Ihnen einen Termin, der zu Ihrem Zeitplan passt."
            prevLabel="← Polygraph vs. Stresstest"
            prevHref="/ratgeber/polygraph-vs-stresstest"
            nextLabel="Polygraph für Unternehmen"
            nextHref="/ratgeber/polygraph-fuer-unternehmen"
          />

        </div>
      </section>
      <SharedFooter />
      <FloatingButtons />
    </div>
  );
}
