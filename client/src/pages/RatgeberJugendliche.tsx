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

export default function RatgeberJugendliche() {
  useEffect(() => {

    // Meta tags
    document.title = "Polygraph bei Jugendlichen – Was Eltern wissen müssen | luegendetektor-test-muenchen.de";
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
    setMeta("description", "Rechtliche und ethische Grundlagen für Polygraphuntersuchungen bei Minderjährigen. Was ist erlaubt, was sinnvoll – sachlich erklärt.");
    setMeta("og:title", "Polygraph bei Jugendlichen – Was Eltern wissen müssen | luegendetektor-test-muenchen.de", true);
    setMeta("og:description", "Rechtliche und ethische Grundlagen für Polygraphuntersuchungen bei Minderjährigen. Was ist erlaubt, was sinnvoll – sachlich erklärt.", true);
    setMeta("og:url", "https://luegendetektor-test-muenchen.de/ratgeber/polygraph-jugendliche", true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Lügendetektor Test München", true);
    setMeta("og:image", "https://luegendetektor-test-muenchen.de/og-image.jpg", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Polygraph bei Jugendlichen – Was Eltern wissen müssen | luegendetektor-test-muenchen.de");
    setMeta("twitter:description", "Rechtliche und ethische Grundlagen für Polygraphuntersuchungen bei Minderjährigen. Was ist erlaubt, was sinnvoll – sachlich erklärt.");
    setLink("canonical", "https://luegendetektor-test-muenchen.de/ratgeber/polygraph-jugendliche");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Können Jugendliche einen Polygraphtest machen? Rechtliche Voraussetzungen, methodische Besonderheiten und wann eine Untersuchung sinnvoll ist.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: NAVY }}>
      <SharedNavbar />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Polygraph bei Jugendlichen" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #243d6b 100%)`, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ color: ORANGE, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>
            Familie & Erziehung &nbsp;·&nbsp; 5 Min. Lesezeit
          </p>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.18, marginBottom: "20px", letterSpacing: "-0.3px" }}>
            Polygraphuntersuchung bei Jugendlichen – Was Eltern wissen sollten
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "18px", lineHeight: 1.75, maxWidth: "620px" }}>
            Eine sachliche Übersicht zu rechtlichen Voraussetzungen, methodischen Besonderheiten und der Frage, wann eine Untersuchung sinnvoll ist.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Eltern, die sich in einer Situation befinden, in der sie die Ehrlichkeit ihres Kindes nicht einschätzen können, stehen vor einer schwierigen Abwägung. Ein Polygraphtest kann in bestimmten Situationen eine Möglichkeit zur Klärung sein – er ist jedoch kein Standardinstrument für familiäre Konflikte und sollte mit Bedacht eingesetzt werden.
          </p>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "18px", marginTop: "40px" }}>Rechtliche Voraussetzungen</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
            <div style={{ padding: "20px 24px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
              <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>Unter 14 Jahren</p>
          <InlineCTA
            headline="Beratung für Eltern"
            body="Wir besprechen Ihren Fall vertraulich und erläutern, ob und unter welchen Bedingungen eine Untersuchung sinnvoll und möglich ist."
          />

              <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.8, margin: 0 }}>
                Wir führen keine Polygraphuntersuchungen bei Kindern unter 14 Jahren durch. In diesem Alter sind die physiologischen Reaktionsmuster noch nicht ausreichend stabil, um zuverlässige Ergebnisse zu erzielen.
              </p>
            </div>
            <div style={{ padding: "20px 24px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
              <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>14 bis 17 Jahre</p>
              <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.8, margin: 0 }}>
                Eine Untersuchung ist möglich, erfordert jedoch die schriftliche Einwilligung beider Erziehungsberechtigten sowie die ausdrückliche Zustimmung des Jugendlichen selbst. Die Untersuchung findet in Anwesenheit eines Erziehungsberechtigten statt.
              </p>
            </div>
            <div style={{ padding: "20px 24px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
              <p style={{ color: NAVY, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>Ab 18 Jahren</p>
              <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.8, margin: 0 }}>
                Volljährige Personen entscheiden selbst über ihre Teilnahme. Die Einwilligung der Eltern ist nicht erforderlich.
              </p>
            </div>
          </div>

          <div style={{ borderLeft: `3px solid ${ORANGE}`, paddingLeft: "24px", margin: "36px 0" }}>
            <p style={{ color: NAVY, fontSize: "17px", lineHeight: 1.85, fontStyle: "italic", margin: 0 }}>
              „Ein Polygraphtest ist kein Erziehungsinstrument. Er ist ein Mittel zur Klärung konkreter, schwerwiegender Verdachtsmomente – nicht zur Kontrolle des Alltags."
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Situationen, in denen eine Untersuchung sinnvoll sein kann</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
            {[
              "Konkreter Verdacht auf Drogenkonsum, der durch Gespräche nicht aufgeklärt werden konnte",
              "Schwerwiegende Vorfälle in der Schule oder im sozialen Umfeld, bei denen die Wahrheit unklar ist",
              "Verdacht auf Kontakt zu gefährlichen Personen oder Gruppen",
              "Situationen, in denen ein falscher Verdacht das Kind ernsthaft belasten würde",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <i className="fas fa-minus" style={{ color: ORANGE, fontSize: "12px", marginTop: "6px", flexShrink: 0 }} />
                <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.7, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Methodische Besonderheiten bei Jugendlichen</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Die Vorbesprechung ist bei Jugendlichen besonders wichtig. Unser Spezialist nimmt sich die Zeit, das Verfahren verständlich zu erklären und eventuelle Ängste zu nehmen. Eine entspannte Ausgangssituation ist Voraussetzung für verwertbare Ergebnisse.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "40px" }}>
            Die Untersuchung selbst folgt dem gleichen Protokoll wie bei Erwachsenen – angepasst an das Alter und die Kommunikationsweise des Jugendlichen. Wir empfehlen, den Jugendlichen vorab in die Entscheidung einzubeziehen und die Untersuchung nicht als Strafe oder Kontrolle zu kommunizieren.
          </p>

          <div style={{ backgroundColor: NAVY, borderRadius: "10px", padding: "36px 32px", marginBottom: "40px" }}>
            <h3 style={{ color: WHITE, fontSize: "19px", fontWeight: 700, marginBottom: "10px" }}>Vertrauliches Erstgespräch für Eltern</h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px", lineHeight: 1.7, marginBottom: "22px" }}>
              Wir besprechen Ihre Situation diskret und helfen Ihnen, die richtige Entscheidung zu treffen.
            </p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "11px 26px", borderRadius: "5px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", borderTop: `1px solid ${BORDER}`, paddingTop: "24px" }}>
            <Link href="/ratgeber" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>← Alle Artikel</Link>
            <Link href="/ratgeber/luegendetektor-genauigkeit" style={{ color: TEXT_MID, fontWeight: 600, textDecoration: "none", fontSize: "14px" }}>Zur Zuverlässigkeit →</Link>
          </div>
        
          <BottomCTA
            headline="Vertrauliches Elterngespräch"
            body="Wir nehmen uns Zeit für Ihre Situation und beraten Sie sachlich zu den Möglichkeiten – ohne Druck und ohne vorschnelle Empfehlungen."
            prevLabel="← Anzeichen Fremdgehen"
            prevHref="/ratgeber/anzeichen-fremdgehen"
            nextLabel="← Alle Artikel"
            nextHref="/ratgeber"
          />

        </div>
      </section>
            <RelatedContent
        heading="Verwandte Themen"
        items={[
        { title: "Ist ein Lügendetektor legal?", excerpt: "Rechtliche Einordnung in Deutschland, Österreich und der Schweiz.", href: "/ratgeber/polygraph-legal-deutschland", type: "ratgeber" as const },
        { title: "Wie genau ist ein Lügendetektor?", excerpt: "Wissenschaftliche Grundlagen und Aussagekraft moderner Polygraphsysteme.", href: "/ratgeber/luegendetektor-genauigkeit", type: "ratgeber" as const },
        { title: "Ablauf & Dauer", excerpt: "Detaillierter Ablauf einer Polygraphuntersuchung.", href: "/ratgeber/dauer-polygraph-test", type: "ratgeber" as const }
        ]}
      />
      <SharedFooter />
      <FloatingButtons />
    </div>
  );
}
