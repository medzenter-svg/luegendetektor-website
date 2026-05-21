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

export default function RatgeberTreuetest() {
  useEffect(() => {
    document.title = "Treuetest mit Polygraph – Was Sie vorab wissen sollten | Ratgeber | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Eine sachliche Orientierung für alle, die einen Treuetest in Betracht ziehen: Ablauf, Vorbereitung, Ergebnis und was danach zu bedenken ist.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: NAVY }}>
      <SharedNavbar />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Treuetest Vorbereitung" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #243d6b 100%)`, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ color: ORANGE, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>
            Privat & Partnerschaft &nbsp;·&nbsp; 7 Min. Lesezeit
          </p>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.18, marginBottom: "20px", letterSpacing: "-0.3px" }}>
            Treuetest mit Polygraph – Was Sie vorab wissen sollten
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "18px", lineHeight: 1.75, maxWidth: "620px" }}>
            Eine sachliche Orientierung für alle, die einen Treuetest in Betracht ziehen – ohne Dramatisierung, aber mit der nötigen Ernsthaftigkeit.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Die Entscheidung, einen Treuetest in Betracht zu ziehen, fällt selten leicht. Sie ist in der Regel das Ergebnis eines längeren Prozesses – von wachsendem Misstrauen, ungeklärten Fragen und dem Wunsch nach Klarheit, die auf anderem Weg nicht zu erreichen ist. Dieser Artikel soll Ihnen helfen, eine informierte Entscheidung zu treffen.
          </p>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Wann ist ein Treuetest sinnvoll?</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Ein Polygraphtest ist dann ein geeignetes Instrument, wenn konkrete Verdachtsmomente bestehen, die durch Gespräche nicht aufgelöst werden konnten, und wenn beide Seiten bereit sind, das Ergebnis zu akzeptieren. Er ist kein Instrument der Kontrolle, sondern der Klärung.
          </p>
          <InlineCTA
            headline="Diskrete Terminvereinbarung"
            body="Alle Anfragen werden streng vertraulich behandelt. Wir besprechen Ihr Anliegen telefonisch oder per WhatsApp – ohne Weitergabe von Details."
          />

          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Wichtig: Ein Treuetest setzt die freiwillige Zustimmung der zu testenden Person voraus. Eine Untersuchung gegen den Willen des Partners ist rechtlich nicht zulässig und liefert keine verwertbaren Ergebnisse. Wenn die Bereitschaft zur Untersuchung verweigert wird, ist das für sich genommen eine Information – aber keine, die ein Polygraphergebnis ersetzen kann.
          </p>

          <div style={{ borderLeft: `3px solid ${ORANGE}`, paddingLeft: "24px", margin: "36px 0" }}>
            <p style={{ color: NAVY, fontSize: "17px", lineHeight: 1.85, fontStyle: "italic", margin: 0 }}>
              „Eifersucht und Zweifel sind zerstörerische Kräfte – unabhängig davon, ob sie begründet sind. Ein Polygraphtest kann helfen, diese Ungewissheit aufzulösen und eine fundierte Entscheidung zu ermöglichen."
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "18px", marginTop: "40px" }}>Ablauf der Untersuchung</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0", marginBottom: "40px", border: `1px solid ${BORDER}`, borderRadius: "10px", overflow: "hidden" }}>
            {[
              { phase: "Vorbesprechung", dauer: "30–45 Min.", text: "Unser Spezialist erklärt den Ablauf und bespricht die geplanten Fragen mit Ihnen. Sie erhalten die Möglichkeit, Fragen zu ergänzen oder zu präzisieren. Die Einwilligungserklärung wird unterzeichnet." },
              { phase: "Kalibrierung", dauer: "15–20 Min.", text: "Die Sensoren werden angelegt. Einige neutrale Testfragen dienen dazu, die individuelle physiologische Baseline der zu testenden Person zu ermitteln." },
              { phase: "Untersuchung", dauer: "60–90 Min.", text: "Die strukturierte Befragung findet in einem ruhigen, privaten Raum statt. Jede Frage wird mehrfach in wechselnder Reihenfolge gestellt. Zwischen den Fragerunden gibt es kurze Pausen." },
              { phase: "Auswertung", dauer: "30–45 Min.", text: "Der Spezialist wertet die Daten aus und teilt das Ergebnis mit. Auf Wunsch erhalten Sie eine schriftliche Dokumentation." },
            ].map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "160px 1fr", backgroundColor: i % 2 === 0 ? LIGHT_BG : WHITE, borderBottom: i < 3 ? `1px solid ${BORDER}` : "none" }}>
                <div style={{ padding: "18px 20px", borderRight: `1px solid ${BORDER}` }}>
                  <p style={{ color: NAVY, fontWeight: 700, fontSize: "14px", marginBottom: "4px" }}>{item.phase}</p>
                  <p style={{ color: ORANGE, fontSize: "13px", fontWeight: 600, margin: 0 }}>{item.dauer}</p>
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <p style={{ color: TEXT_MID, fontSize: "14px", lineHeight: 1.75, margin: 0 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Praktische Hinweise zur Vorbereitung</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
            {[
              "Sorgen Sie für ausreichend Schlaf in der Nacht vor dem Termin.",
              "Reduzieren Sie Koffein am Tag der Untersuchung – übermäßiger Konsum kann Herzrate und Blutdruck beeinflussen.",
              "Informieren Sie uns vorab über Medikamente, die Sie regelmäßig einnehmen.",
              "Kommen Sie ausgeruht und ohne Zeitdruck zum Termin.",
              "Der wichtigste Hinweis: Seien Sie ehrlich. Versuche, das Ergebnis zu beeinflussen, sind erkennbar und führen zu keinem verwertbaren Ergebnis.",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <i className="fas fa-minus" style={{ color: ORANGE, fontSize: "12px", marginTop: "6px", flexShrink: 0 }} />
                <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.7, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Was nach dem Test zu bedenken ist</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Das Ergebnis eines Treuetests kann tiefgreifende Konsequenzen haben – in beide Richtungen. Wir empfehlen, sich vorab Gedanken darüber zu machen, wie Sie mit beiden möglichen Ergebnissen umgehen werden. Ein Polygraphtest ist ein Werkzeug zur Klärung – was aus dieser Klarheit folgt, liegt bei Ihnen.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "40px" }}>
            Unsere Spezialisten stehen Ihnen auch nach der Untersuchung für Rückfragen zur Verfügung. Auf Wunsch können wir Sie an geeignete Beratungsstellen verweisen.
          </p>

          <div style={{ backgroundColor: NAVY, borderRadius: "10px", padding: "36px 32px", marginBottom: "40px" }}>
            <h3 style={{ color: WHITE, fontSize: "19px", fontWeight: 700, marginBottom: "10px" }}>Vertrauliches Erstgespräch</h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px", lineHeight: 1.7, marginBottom: "22px" }}>
              Wir besprechen Ihre Situation diskret und ohne Verpflichtung. Mo–So 9:00–22:00 Uhr.
            </p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "11px 26px", borderRadius: "5px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", borderTop: `1px solid ${BORDER}`, paddingTop: "24px" }}>
            <Link href="/ratgeber" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>← Alle Artikel</Link>
            <Link href="/treuetest" style={{ color: TEXT_MID, fontWeight: 600, textDecoration: "none", fontSize: "14px" }}>Treuetest anfragen →</Link>
          </div>
        
          <BottomCTA
            headline="Treuetest diskret und professionell"
            body="Wir begleiten Sie durch den gesamten Prozess – von der ersten Frage bis zum offiziellen Gutachten. Vertraulich, sachlich, ohne Wertung."
            prevLabel="← Legalität"
            prevHref="/ratgeber/polygraph-legal-deutschland"
            nextLabel="Polygraph vs. Stresstest"
            nextHref="/ratgeber/polygraph-vs-stresstest"
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
