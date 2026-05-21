import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import FloatingButtons from "../components/FloatingButtons";
import Breadcrumb from "../components/Breadcrumb";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

const articles = [
  {
    slug: "/ratgeber/luegendetektor-genauigkeit",
    icon: "fas fa-chart-line",
    category: "Technik & Wissenschaft",
    title: "Wie genau ist ein Lügendetektor? Fakten & Mythen",
    excerpt: "Polygraphen erreichen in professionellen Händen eine Genauigkeit von 98–99%. Was steckt hinter dieser Zahl, und wie unterscheidet sich ein seriöser Test von einem unseriösen?",
    readTime: "5 Min.",
  },
  {
    slug: "/ratgeber/kosten-polygraph",
    icon: "fas fa-euro-sign",
    category: "Kosten & Preise",
    title: "Was kostet ein Polygraph-Test? Preise & Pakete erklärt",
    excerpt: "Die Kosten für einen Lügendetektor-Test variieren je nach Umfang und Anbieter. Wir erklären, welche Faktoren den Preis beeinflussen und worauf Sie bei der Auswahl achten sollten.",
    readTime: "4 Min.",
  },
  {
    slug: "/ratgeber/polygraph-legal-deutschland",
    icon: "fas fa-gavel",
    category: "Recht & Legalität",
    title: "Ist ein Lügendetektor-Test in Deutschland legal?",
    excerpt: "Ja – unter bestimmten Bedingungen ist ein Polygraphtest in Deutschland vollkommen legal. Wir erklären die rechtlichen Grundlagen und was Sie beachten müssen.",
    readTime: "6 Min.",
  },
  {
    slug: "/ratgeber/treuetest-vorbereitung",
    icon: "fas fa-heart",
    category: "Ratgeber Privat",
    title: "Treuetest: Wie bereite ich mich vor? Alles Wichtige",
    excerpt: "Ein Treuetest ist eine emotionale Entscheidung. Wir erklären, wie Sie sich mental vorbereiten, was während der Untersuchung passiert und was danach zu erwarten ist.",
    readTime: "7 Min.",
  },
  {
    slug: "/ratgeber/polygraph-vs-stresstest",
    icon: "fas fa-balance-scale",
    category: "Technik & Wissenschaft",
    title: "Polygraph vs. Stresstest: Was ist der Unterschied?",
    excerpt: "Beide Verfahren messen physiologische Reaktionen – aber mit unterschiedlichen Zielen und Methoden. Eine sachliche Gegenüberstellung für fundierte Entscheidungen.",
    readTime: "5 Min.",
  },
  {
    slug: "/ratgeber/dauer-polygraph-test",
    icon: "fas fa-clock",
    category: "Ablauf & Vorbereitung",
    title: "Ablauf und Dauer einer Polygraphuntersuchung",
    excerpt: "Eine vollständige Untersuchung dauert 2,5 bis 3,5 Stunden. Was in dieser Zeit geschieht – eine Übersicht der vier Phasen mit Zeitangaben.",
    readTime: "4 Min.",
  },
  {
    slug: "/ratgeber/polygraph-fuer-unternehmen",
    icon: "fas fa-building",
    category: "Unternehmen & Organisationen",
    title: "Polygraphuntersuchungen im Unternehmenskontext",
    excerpt: "Wann und wie Unternehmen Polygraphuntersuchungen einsetzen – Einsatzbereiche, Rahmenbedingungen und Grenzen. Sachlich und ohne Übertreibung.",
    readTime: "6 Min.",
  },
  {
    slug: "/ratgeber/mitarbeiterdiebstahl",
    icon: "fas fa-user-secret",
    category: "Interne Ermittlungen",
    title: "Mitarbeiterdiebstahl aufklären – Polygraph als Ermittlungsinstrument",
    excerpt: "Wie Unternehmen bei Verdacht auf interne Entwendung strukturiert vorgehen können – und welche Rolle die Polygraphie dabei spielt.",
    readTime: "5 Min.",
  },
  {
    slug: "/ratgeber/anzeichen-fremdgehen",
    icon: "fas fa-heart-broken",
    category: "Ratgeber Privat",
    title: "Anzeichen von Fremdgehen – Wann ist ein Treuetest sinnvoll?",
    excerpt: "Eine sachliche Einordnung ohne Dramatisierung: Welche Verhaltensänderungen können auf Untreue hinweisen – und ab wann ist ein Polygraphtest eine sinnvolle Option?",
    readTime: "6 Min.",
  },
  {
    slug: "/ratgeber/polygraph-jugendliche",
    icon: "fas fa-child",
    category: "Familie & Erziehung",
    title: "Polygraphuntersuchung bei Jugendlichen – Was Eltern wissen sollten",
    excerpt: "Rechtliche Voraussetzungen, methodische Besonderheiten und die Frage, wann eine Untersuchung bei Minderjährigen sinnvoll ist.",
    readTime: "5 Min.",
  },
];

export default function Ratgeber() {
  useEffect(() => {
    document.title = "Ratgeber Lügendetektor | Polygraph Magazin | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Ratgeber und Magazin rund um Polygraph & Lügendetektor. Expertenwissen zu Genauigkeit, Kosten, Legalität und Vorbereitung. Fundiert, sachlich, verständlich.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: TEXT_DARK }}>
      <SharedNavbar />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Ratgeber" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d4a7a 100%)`, padding: "70px 24px 50px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>
            Wissen · Ratgeber · Magazin
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 800, lineHeight: 1.2, marginBottom: "16px" }}>
            Ratgeber: Polygraph & Lügendetektor
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", lineHeight: 1.7 }}>
            Fundiertes Expertenwissen rund um Polygraphuntersuchungen – verständlich erklärt für Privatpersonen und Unternehmen.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "60px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, marginBottom: "8px" }}>Alle Ratgeber-Artikel</h2>
          <p style={{ color: TEXT_MID, fontSize: "16px", marginBottom: "40px" }}>
            Unsere Experten beantworten die häufigsten Fragen rund um Polygraphuntersuchungen – sachlich, fundiert und ohne Fachjargon.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "28px", marginBottom: "48px" }}>
            {articles.map((a) => (
              <Link key={a.slug} href={a.slug} style={{ textDecoration: "none", display: "block" }}>
                <div style={{ backgroundColor: LIGHT_BG, borderRadius: "12px", padding: "32px", border: `1px solid ${BORDER}`, height: "100%", transition: "border-color 0.2s" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <div style={{ width: "44px", height: "44px", backgroundColor: NAVY, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className={a.icon} style={{ color: ORANGE, fontSize: "18px" }} />
                    </div>
                    <div>
                      <span style={{ color: ORANGE, fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>{a.category}</span>
                      <span style={{ color: TEXT_MID, fontSize: "12px", marginLeft: "12px" }}>{a.readTime} Lesezeit</span>
                    </div>
                  </div>
                  <h3 style={{ color: NAVY, fontSize: "18px", fontWeight: 700, marginBottom: "12px", lineHeight: 1.4 }}>{a.title}</h3>
                  <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: "0 0 16px 0" }}>{a.excerpt}</p>
                  <span style={{ color: ORANGE, fontWeight: 700, fontSize: "14px" }}>Artikel lesen →</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ backgroundColor: NAVY, borderRadius: "12px", padding: "40px", textAlign: "center" }}>
            <h2 style={{ color: WHITE, fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>Haben Sie weitere Fragen?</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", marginBottom: "24px" }}>Unsere Experten beraten Sie kostenlos und unverbindlich – Mo–So 9:00–22:00 Uhr.</p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: NAVY, padding: "32px 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", margin: 0 }}>
          © 2025 luegendetektor-test-muenchen.de · <a href="tel:+4917560360003" style={{ color: ORANGE, textDecoration: "none" }}>+49 175 6036003</a> · Mo–So 9:00–22:00 Uhr
        </p>
      </footer>
      <FloatingButtons />
    </div>
  );
}
