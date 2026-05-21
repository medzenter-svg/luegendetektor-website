import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import FloatingButtons from "../components/FloatingButtons";
import SharedFooter from "../components/SharedFooter";
import RelatedContent from "../components/RelatedContent";
import Breadcrumb from "../components/Breadcrumb";
import { InlineCTA, BottomCTA } from "../components/ArticleCTA";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function RatgeberGenauigkeit() {
  useEffect(() => {

    // Meta tags
    document.title = "Wie genau ist ein Lügendetektor? – Ratgeber | luegendetektor-test-muenchen.de";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) { el = document.createElement("link"); el.setAttribute("rel", rel); document.head.appendChild(el); }
      el.setAttribute("href", href);
    };
    setMeta("description", "Sachliche Analyse der Genauigkeit moderner Polygraphsysteme. Wissenschaftliche Grundlagen, Fehlerquellen und was ein professionelles Gutachten wirklich aussagt.");
    setMeta("og:title", "Wie genau ist ein Lügendetektor? – Ratgeber | luegendetektor-test-muenchen.de", true);
    setMeta("og:description", "Sachliche Analyse der Genauigkeit moderner Polygraphsysteme. Wissenschaftliche Grundlagen, Fehlerquellen und was ein professionelles Gutachten wirklich aussagt.", true);
    setMeta("og:url", "https://luegendetektor-test-muenchen.de/ratgeber/luegendetektor-genauigkeit", true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Lügendetektor Test München", true);
    setMeta("og:image", "https://luegendetektor-test-muenchen.de/og-image.jpg", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Wie genau ist ein Lügendetektor? – Ratgeber | luegendetektor-test-muenchen.de");
    setMeta("twitter:description", "Sachliche Analyse der Genauigkeit moderner Polygraphsysteme. Wissenschaftliche Grundlagen, Fehlerquellen und was ein professionelles Gutachten wirklich aussagt.");
    setLink("canonical", "https://luegendetektor-test-muenchen.de/ratgeber/luegendetektor-genauigkeit");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Eine sachliche Einordnung der Genauigkeit polygraphischer Untersuchungen – Methodik, Forschungsstand und was die Zahl 98–99% tatsächlich bedeutet.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: NAVY }}>
      <SharedNavbar />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Genauigkeit des Polygraphen" }
  ]
} />
      {/* Nav */}
      

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #243d6b 100%)`, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ color: ORANGE, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>
            Technik & Wissenschaft &nbsp;·&nbsp; 5 Min. Lesezeit
          </p>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.18, marginBottom: "20px", letterSpacing: "-0.3px" }}>
            Zur Zuverlässigkeit der Polygraphie
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "18px", lineHeight: 1.75, maxWidth: "620px" }}>
            Eine sachliche Einordnung dessen, was die Genauigkeitsrate polygraphischer Untersuchungen bedeutet – und unter welchen Bedingungen sie gilt.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: WHITE, padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            In der Fachliteratur wird für professionell durchgeführte Polygraphuntersuchungen regelmäßig eine Genauigkeitsrate von 98 bis 99 Prozent genannt. Diese Zahl ist korrekt – sie bedarf jedoch einer Einordnung, die in der öffentlichen Wahrnehmung häufig fehlt.
          </p>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Was der Polygraph tatsächlich misst</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Ein Polygraph erfasst gleichzeitig vier physiologische Kanäle: die thorakale und abdominale Atemfrequenz, den systolischen Blutdruck sowie den galvanischen Hautwiderstand. Diese Parameter verändern sich unwillkürlich, wenn das autonome Nervensystem auf kognitive Belastung – etwa das Formulieren einer bewussten Unwahrheit – reagiert.
          </p>
          <InlineCTA
            headline="Unsicher über die Methodik?"
            body="Unsere Spezialisten erläutern Ihnen den wissenschaftlichen Hintergrund in einem vertraulichen Erstgespräch – kostenlos und ohne Verpflichtung."
          />

          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Das Gerät selbst trifft keine Aussage über Wahrheit oder Lüge. Es liefert Rohdaten. Die Interpretation dieser Daten erfordert einen ausgebildeten Spezialisten, der die individuelle physiologische Baseline der zu testenden Person kennt und die Reaktionsmuster im Kontext der gestellten Fragen bewertet.
          </p>

          <div style={{ borderLeft: `3px solid ${ORANGE}`, paddingLeft: "24px", margin: "36px 0" }}>
            <p style={{ color: NAVY, fontSize: "17px", lineHeight: 1.85, fontStyle: "italic", margin: 0 }}>
              „Die Qualität einer Polygraphuntersuchung steht und fällt mit der Qualifikation des Spezialisten. Ein Gerät allein liefert keine Aussage – es liefert Daten, die interpretiert werden müssen."
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Unter welchen Bedingungen gilt die 98–99%-Rate?</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "20px" }}>
            Die genannte Genauigkeitsrate bezieht sich auf Untersuchungen, die folgende Bedingungen erfüllen:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "36px" }}>
            {[
              { label: "Zertifizierter Spezialist", text: "Der Untersucher verfügt über eine anerkannte Ausbildung und nachweisbare Praxiserfahrung." },
              { label: "Standardisierte Fragetechnik", text: "Die Befragung folgt einem validierten Protokoll – etwa der Control Question Technique (CQT) oder der Zone Comparison Technique (ZCT)." },
              { label: "Geeignete Testumgebung", text: "Die Untersuchung findet in einer ruhigen, kontrollierten Umgebung ohne externe Störfaktoren statt." },
              { label: "Klare Fragestellung", text: "Jede Frage ist präzise formuliert, eindeutig und auf einen konkreten Sachverhalt bezogen." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 20px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
                <div style={{ flexShrink: 0, width: "28px", height: "28px", backgroundColor: NAVY, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-check" style={{ color: ORANGE, fontSize: "12px" }} />
                </div>
                <div>
                  <p style={{ color: NAVY, fontWeight: 700, fontSize: "15px", marginBottom: "4px" }}>{item.label}</p>
                  <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Häufige Missverständnisse</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "20px" }}>
            Zwei Annahmen begegnen uns in der Praxis besonders häufig – beide sind sachlich unzutreffend.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
            <div style={{ padding: "22px 24px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
              <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>„Nervöse Personen fallen automatisch durch den Test."</p>
              <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.75, margin: 0 }}>
                Nervosität als allgemeiner Zustand verändert die Messwerte gleichmäßig über alle Fragen hinweg. Ein erfahrener Spezialist berücksichtigt die individuelle Baseline und unterscheidet zwischen allgemeiner Anspannung und spezifischen Reaktionen auf einzelne Fragen.
              </p>
            </div>
            <div style={{ padding: "22px 24px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
              <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>„Den Polygraphen kann man durch Techniken austricksen."</p>
              <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.75, margin: 0 }}>
                Versuche, die Messwerte durch Atemtechniken, Muskelanspannungen oder mentale Ablenkung zu beeinflussen, erzeugen in der Regel charakteristische Muster, die für einen geschulten Untersucher erkennbar sind. Sie führen nicht zu einem unauffälligen Ergebnis, sondern zu einem nicht verwertbaren.
              </p>
            </div>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Einordnung im Vergleich zu anderen Methoden</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "40px" }}>
            Zum Vergleich: Klassische Befragungen ohne technische Hilfsmittel liegen in ihrer Treffsicherheit bei der Erkennung von Unwahrheiten im Bereich des statistischen Zufalls. Selbst erfahrene Ermittler erreichen in kontrollierten Studien selten mehr als 60 Prozent. Die Polygraphie ist damit – bei sachgemäßer Anwendung – die zuverlässigste verfügbare Methode zur Wahrheitsfindung im privaten und unternehmerischen Bereich.
          </p>
          <BottomCTA
            headline="Professionelle Untersuchung anfragen"
            body="Vereinbaren Sie ein unverbindliches Erstgespräch. Wir erläutern Ihnen die Methodik, klären Ihre Fragen und erstellen ein individuelles Angebot."
            prevLabel="← Alle Artikel"
            prevHref="/ratgeber"
            nextLabel="Kosten & Preise"
            nextHref="/ratgeber/kosten-polygraph"
          />

        </div>
      </section>
            <RelatedContent
        heading="Weitere Ratgeber-Artikel"
        items={[
        { title: "Kosten & Preise", excerpt: "Transparente Übersicht der Kosten für Polygraphuntersuchungen in der DACH-Region.", href: "/ratgeber/kosten-polygraph", type: "ratgeber" as const },
        { title: "Polygraph vs. Stresstest", excerpt: "Was unterscheidet einen Polygraphen von einem Stresstest?", href: "/ratgeber/polygraph-vs-stresstest", type: "ratgeber" as const },
        { title: "Ablauf & Dauer", excerpt: "Detaillierter Ablauf einer Polygraphuntersuchung – Vorgespräch, Test, Auswertung.", href: "/ratgeber/dauer-polygraph-test", type: "ratgeber" as const }
        ]}
      />
      <SharedFooter />
      <FloatingButtons />
    </div>
  );
}
