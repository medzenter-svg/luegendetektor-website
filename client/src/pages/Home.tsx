import { useState, useEffect, useRef } from "react";

// ============================================================
// POLYGRAPH – lügendetektortest.com
// Basiert auf: dl-polygraph.ru – vollständig auf Deutsch übersetzt
// Daten: München, Marienstr. 4 | 01756036003 | detektsiya@yandex.ru
// Design: Navy #102A43, Grün #48BB78, Orange #FF8C00, Hellgrau #F4F7F9
// Schrift: Roboto
// ============================================================

const HERO_BG = "/manus-storage/hero-bg_4d888f3a.jpg";
const LOGO = "/manus-storage/logo_9c5da03f.png";
const POLYGRAPH_TEST_IMG = "/manus-storage/polygraph-test_83348fa0.png";

const NAV_BG = "#102A43";
const SECTION_BG = "#F4F7F9";
const WHITE = "#ffffff";
const GREEN = "#48BB78";
const ORANGE = "#FF8C00";
const NAVY = "#102A43";
const TEXT_DARK = "#334E68";
const TEXT_MID = "#4A5568";
const BORDER = "#E2E8F0";
const BLUE_ACCENT = "#005A9C";
const DARK_BG = "#1a1a2e";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const privateServices = [
  {
    id: "untreue",
    icon: "fas fa-heart-broken",
    title: "Überprüfung auf Untreue",
    price: "ab 649 €",
    short: "Klärung bei Verdacht auf Untreue in der Partnerschaft",
    details: "Wenn Sie den Verdacht haben, dass Ihr Partner untreu ist, kann ein Polygraphtest Klarheit schaffen. Der Test hilft dabei, die Wahrheit herauszufinden und die Beziehung auf eine ehrliche Grundlage zu stellen – oder einen Schlussstrich zu ziehen. Wir führen diese Tests mit größter Diskretion und Einfühlungsvermögen durch.",
    features: ["Vertrauliches Vorgespräch", "Professionelle Testdurchführung", "Schriftliches Gutachten", "Nachberatung möglich"],
  },
  {
    id: "jugendliche",
    icon: "fas fa-child",
    title: "Überprüfung von Jugendlichen ab 14 Jahren",
    price: "ab 749 €",
    short: "Klärung von Verhaltensauffälligkeiten bei Jugendlichen ab 14 Jahren",
    details: "Machen Sie sich Sorgen um das Verhalten Ihres Kindes? Ob Drogenkonsum, Schuleschwänzen oder andere problematische Verhaltensweisen – ein Polygraphtest kann Klarheit schaffen. Die Untersuchung wird mit besonderer Rücksicht auf das Wohlbefinden des Jugendlichen durchgeführt. Elterliche Zustimmung ist erforderlich.",
    features: ["Elterliche Zustimmung erforderlich", "Einfühlsame Durchführung", "Psychologische Begleitung", "Schriftliches Gutachten"],
  },
  {
    id: "diebstahl",
    icon: "fas fa-search",
    title: "Aufklärung von Diebstählen",
    price: "ab 649 €",
    short: "Klärung von Diebstählen und Verlusten im privaten Umfeld",
    details: "Vermissen Sie Wertsachen oder Geld aus Ihrem Haushalt? Ein Polygraphtest kann helfen, den Täter zu identifizieren. Wir führen die Untersuchung diskret durch und liefern Ihnen ein offizielles Gutachten, das als Beweismittel verwendet werden kann.",
    features: ["Diskrete Durchführung", "Mehrere Personen möglich", "Offizielles Gutachten", "Rechtlich verwertbar"],
  },
  {
    id: "hauspersonal",
    icon: "fas fa-home",
    title: "Überprüfung von Hauspersonal",
    price: "ab 549 €",
    short: "Kindermädchen, Haushälterinnen, Fahrer und andere Angestellte",
    details: "Sie vertrauen Ihrem Hauspersonal Ihr Zuhause, Ihre Kinder und Ihre Wertsachen an. Ein Polygraphtest gibt Ihnen die Sicherheit, dass diese Personen vertrauenswürdig sind. Wir überprüfen Kindermädchen, Haushälterinnen, Fahrer und andere Hausangestellte diskret und professionell.",
    features: ["Schnelle Terminvergabe", "Diskrete Durchführung", "Schriftliches Ergebnis", "100% vertraulich"],
  },
  {
    id: "probetest",
    icon: "fas fa-flask",
    title: "Probetest am Polygraphen",
    price: "ab 299 €",
    short: "Kennenlernen des Verfahrens vor der eigentlichen Untersuchung",
    details: "Sie möchten wissen, wie sich ein Polygraphtest anfühlt, bevor Sie sich für eine vollständige Untersuchung entscheiden? Unser Probetest gibt Ihnen die Möglichkeit, das Verfahren kennenzulernen und eventuelle Ängste abzubauen.",
    features: ["Ca. 30–45 Minuten", "Keine Auswertung", "Ideal zur Vorbereitung", "Anrechnung auf Volltest möglich"],
  },
  {
    id: "hochzeit",
    icon: "fas fa-ring",
    title: "Überprüfung vor der Hochzeit",
    price: "ab 649 €",
    short: "Sicherheit vor dem wichtigsten Tag Ihres Lebens",
    details: "Bevor Sie den wichtigsten Schritt Ihres Lebens machen, möchten Sie sicher sein, dass Ihr Partner ehrlich zu Ihnen ist. Ein Polygraphtest vor der Hochzeit kann Ihnen die Gewissheit geben, die Sie für diesen bedeutenden Schritt benötigen.",
    features: ["Absolut vertraulich", "Gegenseitige Tests möglich", "Professionelle Beratung", "Schriftliches Gutachten"],
  },
  {
    id: "geschaefte",
    icon: "fas fa-handshake",
    title: "Überprüfung vor Geschäftsabschlüssen",
    price: "auf Anfrage",
    short: "Sicherheit bei privaten Transaktionen und Vereinbarungen",
    details: "Bei wichtigen privaten Transaktionen, Darlehen oder anderen Vereinbarungen kann ein Polygraphtest sicherstellen, dass alle Parteien ehrlich sind. Schützen Sie sich vor Betrug und falschen Versprechen.",
    features: ["Schnelle Terminvergabe", "Offizielles Gutachten", "Rechtlich verwertbar", "Diskrete Durchführung"],
  },
];

const businessServices = [
  {
    id: "einstellung",
    icon: "fas fa-user-check",
    title: "Überprüfung bei der Einstellung",
    price: "ab 399 €",
    short: "Sicherheit bei der Auswahl neuer Mitarbeiter für sensible Positionen",
    details: "Bei der Einstellung von Mitarbeitern für sensible Positionen kann ein Polygraphtest sicherstellen, dass die Bewerber ehrlich über ihre Vergangenheit und Qualifikationen sind. Wir helfen Ihnen, die richtigen Mitarbeiter für Ihr Unternehmen zu finden.",
    features: ["Schnelle Abwicklung", "Mehrere Bewerber möglich", "Vertraulicher Bericht", "Rechtssicheres Gutachten"],
  },
  {
    id: "routine",
    icon: "fas fa-clipboard-check",
    title: "Planmäßige Überprüfung von Mitarbeitern",
    price: "ab 399 €",
    short: "Regelmäßige Überprüfungen zur Sicherung der Unternehmensintegrität",
    details: "Regelmäßige Polygraphtests für Mitarbeiter in sensiblen Positionen können dazu beitragen, Fehlverhalten zu verhindern und die Unternehmenskultur der Integrität zu stärken. Wir bieten maßgeschneiderte Überprüfungsprogramme für Unternehmen jeder Größe an.",
    features: ["Maßgeschneiderte Programme", "Gruppenrabatte möglich", "Vertrauliche Berichte", "Regelmäßige Termine"],
  },
  {
    id: "ermittlung",
    icon: "fas fa-search",
    title: "Interne Ermittlungen",
    price: "ab 649 €",
    short: "Aufklärung von Vorfällen und Fehlverhalten im Unternehmen",
    details: "Wenn in Ihrem Unternehmen Waren verschwinden, Gelder veruntreut werden oder vertrauliche Informationen nach außen gelangen, kann ein Polygraphtest die Verantwortlichen identifizieren. Wir arbeiten diskret und professionell, um den Schaden für Ihr Unternehmen zu minimieren.",
    features: ["Diskrete Durchführung", "Mehrere Personen möglich", "Offizielles Gutachten", "Rechtlich verwertbar"],
  },
  {
    id: "mobil",
    icon: "fas fa-car",
    title: "Polygraph mit Hausbesuch",
    price: "auf Anfrage",
    short: "Wir kommen zu Ihnen – in Ihr Büro oder nach Hause",
    details: "Sie möchten die Untersuchung in Ihren eigenen Räumlichkeiten durchführen lassen? Kein Problem – unser Team kommt zu Ihnen. Wir bringen alle notwendigen Geräte mit und führen die Untersuchung in Ihrer gewohnten Umgebung durch.",
    features: ["Gesamtes Bayern möglich", "Professionelle Ausrüstung", "Diskrete Anreise", "Flexible Termingestaltung"],
  },
  {
    id: "ehre",
    icon: "fas fa-balance-scale",
    title: "Schutz von Ehre und Würde",
    price: "auf Anfrage",
    short: "Klärung von Verleumdungen und falschen Anschuldigungen",
    details: "Wurden Sie fälschlicherweise beschuldigt? Ein Polygraphtest kann Ihre Unschuld beweisen und Ihnen helfen, Ihren Ruf wiederherzustellen. Das offizielle Gutachten kann als Beweismittel in rechtlichen Verfahren verwendet werden.",
    features: ["Offizielles Gutachten", "Rechtlich verwertbar", "Schnelle Terminvergabe", "Professionelle Beratung"],
  },
  {
    id: "partner",
    icon: "fas fa-building",
    title: "Überprüfung von Geschäftspartnern",
    price: "auf Anfrage",
    short: "Sicherheit bei wichtigen Geschäftspartnerschaften und Investitionen",
    details: "Bevor Sie eine wichtige Geschäftspartnerschaft eingehen oder eine größere Investition tätigen, kann ein Polygraphtest sicherstellen, dass Ihr potenzieller Partner ehrlich ist. Schützen Sie Ihr Unternehmen vor Betrug und falschen Versprechen.",
    features: ["Vertrauliche Durchführung", "Offizielles Gutachten", "Rechtlich verwertbar", "Internationale Erfahrung"],
  },
  {
    id: "krypto",
    icon: "fas fa-coins",
    title: "Überprüfung im Kryptowährungssektor",
    price: "auf Anfrage",
    short: "Spezialisierte Tests für Blockchain- und Kryptounternehmen",
    details: "Der Kryptowährungssektor ist besonders anfällig für Betrug und Vertrauensmissbrauch. Unsere spezialisierten Tests helfen Ihnen, die Integrität Ihrer Mitarbeiter und Partner in diesem sensiblen Bereich zu überprüfen.",
    features: ["Branchenspezifische Fragen", "Vertrauliche Durchführung", "Offizielles Gutachten", "Internationale Erfahrung"],
  },
];

const processSteps = [
  { num: "01", title: "Anfrage & Beratung", desc: "Sie hinterlassen eine Anfrage auf der Webseite oder kontaktieren uns auf anderem Weg. Wir klären das Anliegen und definieren die Ziele für die bevorstehende Untersuchung." },
  { num: "02", title: "Aufgabenstellung", desc: "Wir konkretisieren das Ziel, stimmen die Fragen ab, klären die Rahmenbedingungen: Anzahl der Personen, Ort der Untersuchung, Zeitplan und Zahlungsmodalitäten." },
  { num: "03", title: "Testerstellung nach Methodik", desc: "Basierend auf Ihrer Aufgabe erstellen wir spezielle Tests für die zu prüfende Person. Genau nach diesen Tests wird die Untersuchung durchgeführt." },
  { num: "04", title: "Durchführung der Prüfung", desc: "Die durchschnittliche Testdauer beträgt 1,5–2,5 Stunden, je nach Aufgabe, Anzahl der Fragen und Physiologie der Person. Die zu prüfende Person antwortet nur mit Ja oder Nein. Das Verfahren ist vollständig sicher." },
  { num: "05", title: "Gutachten erstellen", desc: "Es wird ein schriftliches Gutachten erstellt und an Ihre angegebene E-Mail-Adresse gesendet. Alle Informationen sind streng vertraulich und nur für den Auftraggeber zugänglich." },
  { num: "06", title: "Polygraph & Sensoren", desc: "Wir verwenden einen professionellen Computerpolygraphen der neuesten Generation. Verwendete Sensoren: Pneumo-Atemgurt (2 Stk.), FPG-Sensor für Herz-Kreislauf-Aktivität, GSR-Sensor, Blutdrucksensor, Aktivitätssensor (Tremor)." },
];

const faqItems = [
  {
    q: "Wer kann NICHT am Polygraphtest teilnehmen?",
    a: "Die Teilnahme am Polygraphtest wird nicht empfohlen für: schwangere Frauen (Stress kann schädlich sein, hormonelle Veränderungen können das Ergebnis verfälschen), Kinder unter 14 Jahren, Personen mit psychischen Erkrankungen oder schweren Herzerkrankungen, Personen mit körperlichen oder geistigen Behinderungen, Personen unter Alkohol- oder Drogeneinfluss sowie Personen, die Beruhigungsmittel oder Medikamente einnehmen, die das Nervensystem beeinflussen.",
  },
  {
    q: "Welche Vor- und Nachteile hat der Einsatz eines Lügendetektors?",
    a: "Vorteile: Hohe Genauigkeit (98–99%), objektive Ergebnisse, offizielles Gutachten als Beweismittel, schnelle Klärung von Sachverhalten, abschreckende Wirkung auf potenzielle Täter. Nachteile: Ergebnisse können durch bestimmte Medikamente oder Erkrankungen beeinflusst werden, nicht alle Fragen können getestet werden, die Teilnahme muss freiwillig sein.",
  },
  {
    q: "Ist es möglich, den Lügendetektor zu täuschen?",
    a: "Moderne Polygraphtechnologie erkennt Versuche, den Test zu manipulieren. Unsere Experten sind speziell geschult, solche Versuche zu identifizieren. Techniken wie kontrolliertes Atmen, Muskelanspannung oder mentale Ablenkung werden durch die Kombination mehrerer Sensoren und die Erfahrung unserer Spezialisten zuverlässig erkannt.",
  },
  {
    q: "Wie bereitet man sich richtig auf einen Polygraphtest vor?",
    a: "Für eine optimale Vorbereitung empfehlen wir: Ausreichend schlafen (mindestens 7–8 Stunden), keinen Alkohol 24 Stunden vor dem Test, keine Beruhigungsmittel ohne ärztliche Notwendigkeit, normale Mahlzeiten einnehmen (nicht nüchtern erscheinen), bequeme Kleidung tragen, pünktlich erscheinen und ruhig bleiben – der Test ist vollständig sicher.",
  },
  {
    q: "Wie genau ist ein Polygraphtest?",
    a: "Moderne Polygraphtests, die von zertifizierten Experten durchgeführt werden, erreichen eine Genauigkeit von 95–99%. Unsere Spezialisten verfügen über jahrzehntelange Erfahrung und nutzen modernste Geräte der neuesten Generation.",
  },
  {
    q: "Ist der Polygraphtest legal in Deutschland?",
    a: "Ja, Polygraphtests sind in Deutschland legal, wenn die Teilnahme freiwillig ist. Das Ergebnis kann als Beweismittel in Zivilverfahren verwendet werden. Wir erstellen ein offizielles Gutachten, das rechtlich verwertbar ist.",
  },
];

const tabItems = [
  {
    id: "situationen",
    title: "In welchen Situationen hilft der Lügendetektor?",
    content: `Der Polygraphtest in München ist eine beliebte Dienstleistung, die sowohl von Privatpersonen als auch von Unternehmen genutzt wird. Die Dienstleistung hilft dabei, die Wahrheit von Aussagen zu ermitteln und Informationen aufzudecken, die vor Ihnen verborgen werden sollen.

Der Lügendetektor wird in verschiedenen Bereichen eingesetzt: von rechtlichen Ermittlungen bis hin zur Überprüfung von Mitarbeitern in Unternehmen.

**In welchen Situationen hilft der Lügendetektor:**
• Verdacht auf Beteiligung an Diebstahl, Bestechung, Fälschungen und Datenlecks
• Beurteilung von Mitarbeitern bei der Einstellung und Überprüfung ihrer Loyalität
• Lösung familiärer Konflikte im Zusammenhang mit Diebstahl, Sucht oder Schulden
• Hilfe bei der Aufdeckung von Lügen bei Verdacht auf Untreue des Partners`,
  },
  {
    id: "zuverlaessig",
    title: "Wie zuverlässig ist der Polygraph?",
    content: `Der Polygraph ist ein wissenschaftlich anerkanntes Instrument zur Wahrheitsfindung. Moderne Geräte der neuesten Generation erreichen in den Händen erfahrener Spezialisten eine Genauigkeit von 95–99%.

**Faktoren, die die Genauigkeit beeinflussen:**
• Qualifikation und Erfahrung des Polygraphologen
• Qualität der verwendeten Ausrüstung
• Korrekte Formulierung der Fragen
• Physiologischer und psychologischer Zustand der zu prüfenden Person

Unsere Spezialisten verfügen über jahrzehntelange Erfahrung und nutzen ausschließlich professionelle Ausrüstung der neuesten Generation, was die höchstmögliche Genauigkeit der Ergebnisse gewährleistet.`,
  },
  {
    id: "notwendig",
    title: "In welchen Fällen ist ein Test am Lügendetektor notwendig?",
    content: `Ein Polygraphtest ist in folgenden Situationen besonders empfehlenswert:

**Für Privatpersonen:**
• Verdacht auf Untreue in der Partnerschaft
• Diebstahl oder Verluste im Haushalt
• Überprüfung von Hauspersonal
• Klärung von Familienstreitigkeiten

**Für Unternehmen:**
• Einstellung von Mitarbeitern für sensible Positionen
• Interne Ermittlungen bei Verdacht auf Fehlverhalten
• Regelmäßige Überprüfungen zur Prävention
• Schutz von Geschäftsgeheimnissen`,
  },
  {
    id: "vorteile",
    title: "Vorteile der Zusammenarbeit mit uns",
    content: `**Warum POLYGRAPH München wählen:**

• **Erfahrung:** Über 20 Jahre Erfahrung in der Polygraphologie
• **Genauigkeit:** 95–99% Genauigkeit dank modernster Ausrüstung
• **Diskretion:** Absolute Vertraulichkeit – wir unterzeichnen eine Geheimhaltungsvereinbarung
• **Legalität:** Alle Tests werden in Übereinstimmung mit deutschem Recht durchgeführt
• **Offizielles Gutachten:** Sie erhalten ein rechtlich verwertbares schriftliches Gutachten
• **Flexibilität:** Termine auch abends und am Wochenende möglich
• **Hausbesuche:** Wir kommen zu Ihnen nach Hause oder ins Büro`,
  },
  {
    id: "wichtig",
    title: "Wichtig! Besondere Hinweise",
    content: `**Bitte beachten Sie folgende wichtige Punkte:**

• Die Teilnahme am Polygraphtest muss **freiwillig** sein
• Der Test darf **nicht** unter Zwang oder Druck durchgeführt werden
• Informieren Sie uns im Voraus über alle Medikamente, die Sie einnehmen
• Erscheinen Sie ausgeruht und nüchtern zum Test
• Kinder unter 14 Jahren können **nicht** getestet werden
• Schwangere Frauen sollten **nicht** getestet werden
• Personen mit schweren Herzerkrankungen sollten **nicht** getestet werden

Bei Fragen zu Ihrer Eignung für den Test beraten wir Sie gerne kostenlos und unverbindlich.`,
  },
];

const reportSections = [
  { title: "Einleitung", items: ["Ziel der Überprüfung", "Angaben zur überprüften Person", "Gründe für die Untersuchung"] },
  { title: "Methodik", items: ["Liste der gestellten Fragen", "Beschreibung des Testverfahrens", "Verwendete Ausrüstung"] },
  { title: "Ergebnisanalyse", items: ["Beschreibung der Reaktionen auf jede Frage", "Interpretation der Ergebnisse", "Schlussfolgerungen"] },
];

// ─────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    ["Dienstleistungen", "services"],
    ["Ablauf", "process"],
    ["Über uns", "about"],
    ["Preise", "prices"],
    ["Spezialisten", "specialists"],
    ["FAQ", "faq"],
    ["Kontakt", "contact"],
  ];

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: NAV_BG, boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.3)" : "0 2px 4px rgba(0,0,0,0.1)", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={LOGO} alt="Logo" style={{ height: "34px", width: "34px", borderRadius: "50%", objectFit: "cover" }} />
          <div>
            <div style={{ color: "white", fontSize: "18px", fontWeight: 700, letterSpacing: "2px", lineHeight: 1 }}>POLYGRAPH</div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "10px", letterSpacing: "1px" }}>Genau. Zuverlässig. Objektiv.</div>
          </div>
        </div>

        <div className="hidden lg:flex" style={{ gap: "20px" }}>
          {navLinks.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}
              style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", background: "none", border: "none", cursor: "pointer", padding: "4px 0", borderBottom: "2px solid transparent", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = GREEN; e.currentTarget.style.borderBottomColor = GREEN; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.85)"; e.currentTarget.style.borderBottomColor = "transparent"; }}
            >{label}</button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="tel:01756036003" className="hidden md:flex" style={{ alignItems: "center", gap: "6px", color: GREEN, fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
            <i className="fas fa-phone-alt"></i> 01756036003
          </a>
          <button onClick={() => scrollTo("contact")}
            style={{ backgroundColor: ORANGE, color: "white", border: "none", padding: "9px 20px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.5px", cursor: "pointer" }}
            className="hidden md:block"
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
            Anfragen
          </button>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "white", background: "none", border: "none", fontSize: "20px", cursor: "pointer" }}>
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: NAV_BG, padding: "12px 24px 20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {navLinks.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ display: "block", width: "100%", textAlign: "left", color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 700, textTransform: "uppercase", padding: "10px 0", background: "none", border: "none", cursor: "pointer", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>{label}</button>
          ))}
          <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <a href="tel:01756036003" style={{ color: GREEN, fontWeight: 700, fontSize: "15px", textDecoration: "none" }}><i className="fas fa-phone-alt mr-2"></i>01756036003</a>
            <a href="mailto:detektsiya@yandex.ru" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", textDecoration: "none" }}><i className="fas fa-envelope mr-2"></i>detektsiya@yandex.ru</a>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(16,42,67,0.95) 0%, rgba(16,42,67,0.82) 55%, rgba(16,42,67,0.55) 100%)" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "100px 24px 60px", width: "100%" }}>
        <div style={{ maxWidth: "700px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,140,0,0.12)", border: `1px solid ${ORANGE}`, color: ORANGE, padding: "8px 18px", borderRadius: "4px", fontSize: "13px", fontWeight: 700, marginBottom: "24px", textTransform: "uppercase", letterSpacing: "1px" }}>
            <i className="fas fa-shield-alt"></i> Genauigkeit 95–99% · Zertifiziert · Diskret
          </div>

          <h1 style={{ color: "white", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
            LÜGENDETEKTOR-TEST<br />
            <span style={{ color: ORANGE }}>(POLYGRAPH) IN MÜNCHEN</span>
          </h1>

          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "18px", lineHeight: 1.7, marginBottom: "12px", maxWidth: "560px" }}>
            Professionelle Polygraphuntersuchungen für Privatpersonen und Unternehmen.
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginBottom: "32px", display: "flex", alignItems: "center", gap: "6px" }}>
            <i className="fas fa-lock" style={{ color: GREEN }}></i>
            100% anonym, vertraulich und ohne Weitergabe von Details
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <button onClick={() => scrollTo("contact")}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: ORANGE, color: "white", padding: "14px 32px", borderRadius: "4px", fontWeight: 700, fontSize: "15px", border: "none", cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.5px" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
              <i className="fas fa-comments"></i> Beratung anfragen
            </button>
            <button onClick={() => scrollTo("services")}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "transparent", border: "2px solid rgba(255,255,255,0.5)", color: "white", padding: "14px 32px", borderRadius: "4px", fontWeight: 700, fontSize: "15px", cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.5px" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "white"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.backgroundColor = "transparent"; }}>
              <i className="fas fa-list"></i> Alle Leistungen
            </button>
          </div>

          {/* Trust badges */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.15)", maxWidth: "500px" }}>
            {[
              { icon: "fas fa-user-secret", title: "ANONYMITÄT", desc: "Wir unterzeichnen eine Geheimhaltungsvereinbarung und tragen die volle rechtliche Verantwortung" },
              { icon: "fas fa-balance-scale", title: "OBJEKTIVITÄT", desc: "Wir arbeiten mit professioneller Hochpräzisionsausrüstung, die Fehler minimiert" },
              { icon: "fas fa-crosshairs", title: "GENAUIGKEIT", desc: "Hohe Genauigkeitsergebnisse helfen Ihnen, die richtigen Schlüsse zu ziehen" },
            ].map(b => (
              <div key={b.title} style={{ textAlign: "center" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "rgba(72,187,120,0.15)", border: `1px solid rgba(72,187,120,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", fontSize: "20px", color: GREEN }}>
                  <i className={b.icon}></i>
                </div>
                <div style={{ color: "white", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", marginBottom: "4px" }}>{b.title}</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "11px", lineHeight: 1.5 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" style={{ backgroundColor: WHITE, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="grid-about">
          <div>
            <div style={{ color: ORANGE, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Über uns</div>
            <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px", lineHeight: 1.2 }}>POLYGRAPH MÜNCHEN</h2>
            <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_ACCENT, marginBottom: "24px" }} />
            <p style={{ color: TEXT_DARK, fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              <strong>POLYGRAPH München</strong> – professionelle Polygraphuntersuchungen für Unternehmen und Privatpersonen.
            </p>
            <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
              Wir helfen dabei, die Wahrheit dort aufzudecken, wo Worte täuschen können. Unsere Experten mit langjähriger Erfahrung führen präzise und objektive Untersuchungen am Lügendetektor durch und helfen Ihnen, Ihr Unternehmen, Ihre Beziehungen und Ihren Ruf zu schützen.
            </p>
            <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.8, marginBottom: "28px" }}>
              Vertrauen Sie den Profis – gewinnen Sie Sicherheit in Menschen und Entscheidungen!
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {[{ val: "95–99%", label: "Genauigkeit" }, { val: "20+", label: "Jahre Erfahrung" }, { val: "500+", label: "Abgeschlossene Fälle" }, { val: "100%", label: "Vertraulich" }].map(s => (
                <div key={s.val} style={{ textAlign: "center", minWidth: "90px" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 700, color: NAVY }}>{s.val}</div>
                  <div style={{ color: TEXT_MID, fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <img src={POLYGRAPH_TEST_IMG} alt="Polygraphtest" style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "8px", display: "block" }} />
            <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px", backgroundColor: "rgba(16,42,67,0.92)", borderRadius: "6px", padding: "16px 20px" }}>
              <p style={{ color: "white", fontWeight: 700, fontSize: "15px", marginBottom: "4px" }}>Täglich 08:00 – 20:00 Uhr</p>
              <p style={{ color: GREEN, fontSize: "14px" }}><i className="fas fa-map-marker-alt mr-2"></i>München, Marienstr. 4, 80331</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"private" | "business">("private");
  const [openService, setOpenService] = useState<string | null>(null);
  const services = activeTab === "private" ? privateServices : businessServices;

  return (
    <section id="services" style={{ backgroundColor: SECTION_BG, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ color: ORANGE, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Unsere Leistungen</div>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>Einsatzgebiete des Polygraphen</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_ACCENT, margin: "0 auto 14px" }} />
          <p style={{ color: TEXT_MID, fontSize: "15px", maxWidth: "560px", margin: "0 auto" }}>Klicken Sie auf eine Leistung, um mehr Informationen zu erhalten</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "32px" }}>
          {[["private", "fas fa-user-friends", "Privatpersonen"], ["business", "fas fa-building", "Unternehmen"]].map(([tab, icon, label]) => (
            <button key={tab} onClick={() => { setActiveTab(tab as "private" | "business"); setOpenService(null); }}
              style={{ padding: "11px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.5px", cursor: "pointer", transition: "all 0.2s", backgroundColor: activeTab === tab ? NAVY : WHITE, color: activeTab === tab ? "white" : NAVY, border: `2px solid ${NAVY}` }}>
              <i className={`${icon} mr-2`}></i>{label}
            </button>
          ))}
        </div>

        {/* Service Buttons */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))", gap: "12px" }}>
          {services.map(svc => (
            <div key={svc.id}>
              <button onClick={() => setOpenService(openService === svc.id ? null : svc.id)}
                style={{
                  width: "100%", textAlign: "left", padding: "18px 22px", borderRadius: openService === svc.id ? "8px 8px 0 0" : "8px", cursor: "pointer", display: "flex", alignItems: "flex-start", gap: "14px", transition: "all 0.2s",
                  backgroundColor: openService === svc.id ? NAVY : WHITE,
                  color: openService === svc.id ? "white" : NAVY,
                  border: openService === svc.id ? `2px solid ${NAVY}` : `2px solid ${BORDER}`,
                  boxShadow: openService === svc.id ? "0 6px 20px rgba(16,42,67,0.2)" : "0 2px 6px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={e => { if (openService !== svc.id) { e.currentTarget.style.borderColor = NAVY; e.currentTarget.style.boxShadow = "0 4px 12px rgba(16,42,67,0.1)"; } }}
                onMouseLeave={e => { if (openService !== svc.id) { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.04)"; } }}
              >
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, backgroundColor: openService === svc.id ? "rgba(72,187,120,0.2)" : "#EEF2F7", color: openService === svc.id ? GREEN : BLUE_ACCENT, fontSize: "17px" }}>
                  <i className={svc.icon}></i>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "3px" }}>{svc.title}</div>
                  <div style={{ fontSize: "12px", color: openService === svc.id ? "rgba(255,255,255,0.7)" : TEXT_MID }}>{svc.short}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px", flexShrink: 0 }}>
                  <span style={{ color: ORANGE, fontWeight: 700, fontSize: "13px" }}>{svc.price}</span>
                  <i className={`fas fa-chevron-${openService === svc.id ? "up" : "down"}`} style={{ color: openService === svc.id ? GREEN : "#A0AEC0", fontSize: "12px" }}></i>
                </div>
              </button>

              {openService === svc.id && (
                <div style={{ backgroundColor: "#EEF2F7", border: `2px solid ${NAVY}`, borderTop: "none", borderRadius: "0 0 8px 8px", padding: "22px" }}>
                  <p style={{ color: TEXT_DARK, fontSize: "14px", lineHeight: 1.75, marginBottom: "16px" }}>{svc.details}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "18px" }}>
                    {svc.features.map(f => (
                      <span key={f} style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: WHITE, border: `1px solid ${BORDER}`, color: TEXT_DARK, padding: "5px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 700 }}>
                        <i className="fas fa-check" style={{ color: GREEN, fontSize: "10px" }}></i>{f}
                      </span>
                    ))}
                  </div>
                  <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: ORANGE, color: "white", padding: "10px 22px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", border: "none", cursor: "pointer", textTransform: "uppercase" }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
                    <i className="fas fa-calendar-check"></i> Jetzt anfragen
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "transparent", border: `2px solid ${NAVY}`, color: NAVY, padding: "12px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "14px", cursor: "pointer", textTransform: "uppercase" }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = NAVY; e.currentTarget.style.color = "white"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = NAVY; }}>
            <i className="fas fa-phone-alt"></i> Kostenlose Beratung anfragen
          </button>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" style={{ backgroundColor: NAVY, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ color: GREEN, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Unser Verfahren</div>
          <h2 style={{ color: "white", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>WIE LÄUFT DIE PRÜFUNG AB?</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: GREEN, margin: "0 auto" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {processSteps.map((step, i) => (
            <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "28px", position: "relative", overflow: "hidden" }}>
              <div style={{ fontSize: "4rem", fontWeight: 700, color: "rgba(72,187,120,0.15)", lineHeight: 1, marginBottom: "14px", fontFamily: "monospace" }}>{step.num}</div>
              <h3 style={{ color: "white", fontWeight: 700, fontSize: "16px", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{step.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", lineHeight: 1.75 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoTabsSection() {
  const [activeTab, setActiveTab] = useState("situationen");
  const active = tabItems.find(t => t.id === activeTab)!;

  return (
    <section id="info" style={{ backgroundColor: SECTION_BG, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>POLYGRAPHTEST IN MÜNCHEN</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_ACCENT, margin: "0 auto" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "24px" }} className="grid-tabs">
          {/* Tab Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {tabItems.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                style={{
                  textAlign: "left", padding: "14px 18px", borderRadius: "6px", fontWeight: 700, fontSize: "13px", cursor: "pointer", transition: "all 0.2s", border: "none",
                  backgroundColor: activeTab === tab.id ? NAVY : WHITE,
                  color: activeTab === tab.id ? "white" : TEXT_DARK,
                  borderLeft: activeTab === tab.id ? `4px solid ${GREEN}` : `4px solid transparent`,
                  boxShadow: activeTab === tab.id ? "0 4px 12px rgba(16,42,67,0.15)" : "0 1px 4px rgba(0,0,0,0.05)",
                }}>
                {tab.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ backgroundColor: WHITE, borderRadius: "8px", padding: "32px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", border: `1px solid ${BORDER}` }}>
            <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "18px", marginBottom: "20px" }}>{active.title}</h3>
            <div style={{ color: TEXT_DARK, fontSize: "14px", lineHeight: 1.85, whiteSpace: "pre-line" }}>
              {active.content.split("**").map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>)}
            </div>
            <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: `1px solid ${BORDER}` }}>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: ORANGE, color: "white", padding: "11px 24px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", border: "none", cursor: "pointer", textTransform: "uppercase" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
                <i className="fas fa-comments"></i> Kostenlose Beratung
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section style={{ backgroundColor: NAVY, padding: "60px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <h2 style={{ color: "white", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>BEREIT ANZUFANGEN?</h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", marginBottom: "8px" }}>MÖCHTEN SIE DIE WAHRHEIT JETZT ERFAHREN?</p>
        <p style={{ color: GREEN, fontSize: "14px", marginBottom: "28px" }}>
          <i className="fas fa-clock mr-2"></i>Täglich 08:00 – 20:00 Uhr
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
          <a href="tel:01756036003"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: GREEN, color: "white", padding: "14px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "15px", textDecoration: "none", textTransform: "uppercase" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3da866")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = GREEN)}>
            <i className="fas fa-phone-alt"></i> 01756036003
          </a>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: ORANGE, color: "white", padding: "14px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "15px", border: "none", cursor: "pointer", textTransform: "uppercase" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
            <i className="fas fa-envelope"></i> Nachricht senden
          </button>
        </div>
      </div>
    </section>
  );
}

function SpecialistsSection() {
  return (
    <section id="specialists" style={{ backgroundColor: WHITE, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ color: ORANGE, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Unser Team</div>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>SPEZIALISTEN</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_ACCENT, margin: "0 auto" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px", maxWidth: "900px", margin: "0 auto" }}>
          {[
            { name: "Dimitri", role: "Polygraphologe", exp: "20 Jahre Erfahrung", edu: "Höhere Bildung, Praktische Psychologie", icon: "fas fa-user-tie", color: NAVY },
            { name: "Tatjana Neubauer", role: "Psychologin", exp: "23 Jahre Erfahrung", edu: "Höhere Bildung, Diplompsychologin", icon: "fas fa-user-graduate", color: BLUE_ACCENT },
          ].map(s => (
            <div key={s.name} style={{ backgroundColor: SECTION_BG, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "36px 28px", textAlign: "center", borderTop: `4px solid ${s.color}` }}>
              <div style={{ width: "90px", height: "90px", borderRadius: "50%", backgroundColor: s.color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <i className={s.icon} style={{ fontSize: "36px", color: ORANGE }}></i>
              </div>
              <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "20px", marginBottom: "4px" }}>{s.name}</h3>
              <p style={{ color: BLUE_ACCENT, fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>{s.role}</p>
              <p style={{ color: GREEN, fontWeight: 700, fontSize: "13px", marginBottom: "10px" }}>
                <i className="fas fa-award mr-1"></i>{s.exp}
              </p>
              <p style={{ color: TEXT_MID, fontSize: "13px" }}>{s.edu}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricesSection() {
  return (
    <section id="prices" style={{ backgroundColor: SECTION_BG, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ color: ORANGE, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Transparente Preise</div>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>PREISE</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_ACCENT, margin: "0 auto 14px" }} />
          <p style={{ color: TEXT_MID, fontSize: "15px", maxWidth: "500px", margin: "0 auto" }}>Keine versteckten Kosten – transparente und faire Preisgestaltung</p>
        </div>

        {/* Price Table */}
        <div style={{ backgroundColor: WHITE, border: `1px solid ${BORDER}`, borderRadius: "8px", overflow: "hidden", maxWidth: "800px", margin: "0 auto 32px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
          <div style={{ backgroundColor: NAVY, padding: "16px 24px", display: "grid", gridTemplateColumns: "1fr auto", gap: "16px" }}>
            <span style={{ color: "white", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Leistung</span>
            <span style={{ color: GREEN, fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Preis</span>
          </div>
          {[
            { service: "Überprüfung auf Untreue", price: "ab 649 €" },
            { service: "Überprüfung von Jugendlichen ab 14 Jahren", price: "ab 749 €" },
            { service: "Aufklärung von Diebstählen", price: "ab 649 €" },
            { service: "Überprüfung von Hauspersonal", price: "ab 549 €" },
            { service: "Probetest am Polygraphen", price: "ab 299 €" },
            { service: "Überprüfung vor der Hochzeit", price: "ab 649 €" },
            { service: "Überprüfung bei der Einstellung", price: "ab 399 €" },
            { service: "Planmäßige Überprüfung von Mitarbeitern", price: "ab 399 €" },
            { service: "Interne Ermittlungen", price: "ab 649 €" },
            { service: "Polygraph mit Hausbesuch", price: "auf Anfrage" },
            { service: "Schutz von Ehre und Würde", price: "auf Anfrage" },
            { service: "Überprüfung von Geschäftspartnern", price: "auf Anfrage" },
          ].map((row, i) => (
            <div key={i} style={{ padding: "14px 24px", display: "grid", gridTemplateColumns: "1fr auto", gap: "16px", alignItems: "center", borderBottom: `1px solid ${BORDER}`, backgroundColor: i % 2 === 0 ? WHITE : "#FAFBFC" }}>
              <span style={{ color: TEXT_DARK, fontSize: "14px" }}>
                <i className="fas fa-check-circle mr-2" style={{ color: GREEN, fontSize: "12px" }}></i>{row.service}
              </span>
              <span style={{ color: ORANGE, fontWeight: 700, fontSize: "15px", whiteSpace: "nowrap" }}>{row.price}</span>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: "13px", color: TEXT_MID, marginBottom: "20px" }}>
          <i className="fas fa-info-circle mr-1" style={{ color: BLUE_ACCENT }}></i>
          Der genaue Preis wird nach dem kostenlosen Erstgespräch festgelegt. Gruppenrabatte möglich.
        </p>
        <div style={{ textAlign: "center" }}>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: ORANGE, color: "white", padding: "13px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "14px", border: "none", cursor: "pointer", textTransform: "uppercase" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
            <i className="fas fa-paper-plane"></i> Anfrage senden
          </button>
        </div>
      </div>
    </section>
  );
}

function ReportSection() {
  return (
    <section id="report" style={{ backgroundColor: DARK_BG, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="grid-report">
          <div>
            <div style={{ color: GREEN, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Dokumentation</div>
            <h2 style={{ color: "white", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>BEISPIEL EINES GUTACHTENS</h2>
            <div style={{ height: "3px", width: "60px", backgroundColor: GREEN, marginBottom: "20px" }} />
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.8, marginBottom: "24px" }}>
              Das Ergebnis der Prüfung ist ein detaillierter Bericht mit zahlreichen Indikatoren. Das Gutachten des Polygraphologen muss mehrere Pflichtabschnitte enthalten:
            </p>
            {reportSections.map(section => (
              <div key={section.title} style={{ marginBottom: "20px" }}>
                <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>{section.title}</h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {section.items.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.7)", fontSize: "13px", marginBottom: "6px" }}>
                      <i className="fas fa-angle-right" style={{ color: ORANGE, flexShrink: 0 }}></i>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px", paddingBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ width: "50px", height: "50px", backgroundColor: "rgba(72,187,120,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-file-alt" style={{ fontSize: "20px", color: GREEN }}></i>
                </div>
                <div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: "16px" }}>Gutachten – Beispiel</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>2,4 MB · PDF-Dokument</div>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.75, marginBottom: "24px" }}>
                Das Gutachten enthält eine detaillierte Analyse der physiologischen Reaktionen auf jede Frage sowie die Schlussfolgerungen des Polygraphologen. Es ist rechtlich verwertbar und kann als Beweismittel in Zivilverfahren eingesetzt werden.
              </p>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{ width: "100%", padding: "13px", borderRadius: "4px", backgroundColor: ORANGE, color: "white", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", border: "none", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
                <i className="fas fa-paper-plane mr-2"></i>Anfrage senden
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faq" style={{ backgroundColor: SECTION_BG, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ color: ORANGE, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Fragen & Antworten</div>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>HÄUFIGE FRAGEN</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_ACCENT, margin: "0 auto 14px" }} />
          <p style={{ color: TEXT_MID, fontSize: "15px", maxWidth: "600px", margin: "0 auto" }}>
            Basierend auf unserer Erfahrung haben wir eine Liste der häufigsten Fragen zusammengestellt, die uns Kunden bei persönlichen Treffen oder während des Tests stellen.
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faqItems.map((item, i) => (
            <div key={i} style={{ backgroundColor: WHITE, border: `1px solid ${BORDER}`, borderRadius: "6px", marginBottom: "10px", overflow: "hidden" }}>
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{ width: "100%", textAlign: "left", padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", background: "none", border: "none", cursor: "pointer" }}>
                <span style={{ fontWeight: 700, fontSize: "14px", color: NAVY, lineHeight: 1.4 }}>{item.q}</span>
                <i className={`fas fa-chevron-${openIdx === i ? "up" : "down"}`} style={{ color: BLUE_ACCENT, flexShrink: 0 }}></i>
              </button>
              {openIdx === i && (
                <div style={{ padding: "0 22px 18px", borderTop: `1px solid ${BORDER}` }}>
                  <p style={{ color: TEXT_DARK, fontSize: "14px", lineHeight: 1.8, paddingTop: "14px" }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <p style={{ color: TEXT_MID, fontSize: "14px", marginBottom: "16px" }}>Haben Sie weitere Fragen?</p>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: NAVY, color: "white", padding: "12px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", border: "none", cursor: "pointer", textTransform: "uppercase" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1a3a5c")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = NAVY)}>
            <i className="fas fa-question-circle"></i> Frage stellen
          </button>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" style={{ backgroundColor: NAVY, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ color: GREEN, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Kostenlose Erstberatung</div>
          <h2 style={{ color: "white", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>KONTAKT AUFNEHMEN</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: GREEN, margin: "0 auto" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", maxWidth: "960px", margin: "0 auto" }} className="grid-contact">
          {/* Info */}
          <div>
            <h3 style={{ color: "white", fontWeight: 700, fontSize: "18px", marginBottom: "28px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Kontaktinformationen</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {[
                { icon: "fas fa-map-marker-alt", label: "Adresse", val: "Marienstr. 4, 80331 München", href: undefined },
                { icon: "fas fa-phone-alt", label: "Telefon", val: "01756036003", href: "tel:01756036003" },
                { icon: "fas fa-envelope", label: "E-Mail", val: "detektsiya@yandex.ru", href: "mailto:detektsiya@yandex.ru" },
                { icon: "fab fa-whatsapp", label: "WhatsApp", val: "+49 175 6036003", href: "https://wa.me/491756036003" },
                { icon: "fas fa-clock", label: "Öffnungszeiten", val: "Täglich 08:00 – 20:00 Uhr", href: undefined },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", backgroundColor: "rgba(72,187,120,0.12)", color: GREEN, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "15px" }}>
                    <i className={c.icon}></i>
                  </div>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} style={{ color: "white", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}
                        onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                        onMouseLeave={e => (e.currentTarget.style.color = "white")}>{c.val}</a>
                    ) : (
                      <span style={{ color: "white", fontWeight: 700, fontSize: "14px" }}>{c.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "28px", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "18px" }}>
              <p style={{ color: GREEN, fontWeight: 700, fontSize: "13px", marginBottom: "6px" }}>
                <i className="fas fa-shield-alt mr-2"></i>Absolute Vertraulichkeit
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", lineHeight: 1.7 }}>
                Wir unterzeichnen eine Geheimhaltungsvereinbarung und tragen die volle rechtliche Verantwortung für die Nichtoffenbarung der Prüfungsergebnisse.
              </p>
            </div>

            <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
              <a href="https://wa.me/491756036003" target="_blank" rel="noopener noreferrer"
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "#25D366", color: "white", padding: "12px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", textDecoration: "none", textTransform: "uppercase" }}>
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
              <a href="mailto:detektsiya@yandex.ru"
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: ORANGE, color: "white", padding: "12px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", textDecoration: "none", textTransform: "uppercase" }}>
                <i className="fas fa-envelope"></i> E-Mail
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "40px" }}>
                <i className="fas fa-check-circle" style={{ fontSize: "52px", color: GREEN, marginBottom: "16px" }}></i>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "20px", marginBottom: "10px" }}>Vielen Dank!</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.7 }}>Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { name: "name", label: "Ihr Name *", type: "text", placeholder: "Max Mustermann", required: true },
                  { name: "phone", label: "Telefonnummer", type: "tel", placeholder: "+49 ...", required: false },
                  { name: "email", label: "E-Mail-Adresse *", type: "email", placeholder: "ihre@email.de", required: true },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: "block", color: "rgba(255,255,255,0.75)", fontSize: "12px", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} required={f.required}
                      value={form[f.name as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.name]: e.target.value })}
                      style={{ width: "100%", padding: "11px 14px", borderRadius: "4px", fontSize: "14px", outline: "none", backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "white", boxSizing: "border-box" }}
                      onFocus={e => (e.currentTarget.style.borderColor = GREEN)}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")} />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.75)", fontSize: "12px", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Ihre Nachricht</label>
                  <textarea rows={4} placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "11px 14px", borderRadius: "4px", fontSize: "14px", outline: "none", backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "white", resize: "none", boxSizing: "border-box" }}
                    onFocus={e => (e.currentTarget.style.borderColor = GREEN)}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")} />
                </div>
                <button type="submit"
                  style={{ padding: "13px", borderRadius: "4px", backgroundColor: ORANGE, color: "white", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.5px", border: "none", cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
                  <i className="fas fa-paper-plane mr-2"></i>Anfrage senden
                </button>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", textAlign: "center" }}>
                  <i className="fas fa-lock mr-1"></i>Ihre Daten werden vertraulich behandelt
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ backgroundColor: "#0a1929", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 24px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "40px" }} className="grid-footer">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <img src={LOGO} alt="POLYGRAPH" style={{ width: "36px", height: "36px", borderRadius: "50%" }} />
              <div>
                <div style={{ color: "white", fontWeight: 700, fontSize: "18px", letterSpacing: "2px" }}>POLYGRAPH</div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px", letterSpacing: "1px" }}>lügendetektortest.com</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: 1.75, marginBottom: "16px" }}>
              Professionelle Polygraphuntersuchungen in München. Genau. Zuverlässig. Objektiv.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href="https://wa.me/491756036003" target="_blank" rel="noopener noreferrer" style={{ width: "36px", height: "36px", backgroundColor: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textDecoration: "none", fontSize: "16px" }}>
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="mailto:detektsiya@yandex.ru" style={{ width: "36px", height: "36px", backgroundColor: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textDecoration: "none", fontSize: "14px" }}>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Kunden */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>Für Kunden</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[["Dienstleistungen", "services"], ["Preise", "prices"], ["Über uns", "about"], ["Spezialisten", "specialists"], ["Blog", ""], ["Kontakt", "contact"]].map(([label, id]) => (
                <button key={label} onClick={() => id && scrollTo(id)} style={{ textAlign: "left", color: "rgba(255,255,255,0.55)", fontSize: "13px", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>{label}</button>
              ))}
            </div>
          </div>

          {/* Populäre Leistungen */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>Beliebte Leistungen</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Überprüfung auf Untreue", "Überprüfung von Jugendlichen", "Überprüfung bei der Einstellung", "Planmäßige Überprüfung", "Interne Ermittlungen", "Aufklärung von Diebstählen"].map(s => (
                <button key={s} onClick={() => scrollTo("services")} style={{ textAlign: "left", color: "rgba(255,255,255,0.55)", fontSize: "13px", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>{s}</button>
              ))}
            </div>
          </div>

          {/* Dokumente */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>Dokumente</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Freiwillige Einwilligung", "Vertraulichkeitsvereinbarung", "Merkblatt für Probanden", "Datenschutzerklärung", "Impressum"].map(d => (
                <button key={d} style={{ textAlign: "left", color: "rgba(255,255,255,0.55)", fontSize: "13px", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>{d}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px" }}>© 2014 – 2026 POLYGRAPH München. Alle Rechte vorbehalten.</p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Datenschutzerklärung", "Impressum", "Sitemap"].map(l => (
              <button key={l} style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", background: "none", border: "none", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>{l}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWidgets() {
  return (
    <div style={{ position: "fixed", bottom: "80px", right: "24px", display: "flex", flexDirection: "column", gap: "12px", zIndex: 1000 }}>
      <a href="https://wa.me/491756036003" target="_blank" rel="noopener noreferrer"
        style={{ width: "56px", height: "56px", backgroundColor: "#25D366", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "26px", textDecoration: "none", boxShadow: "0 4px 15px rgba(37,211,102,0.4)", transition: "transform 0.2s" }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="mailto:detektsiya@yandex.ru"
        style={{ width: "56px", height: "56px", backgroundColor: ORANGE, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "22px", textDecoration: "none", boxShadow: "0 4px 15px rgba(255,140,0,0.4)", transition: "transform 0.2s" }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
      <style>{`
        @media (max-width: 768px) {
          .grid-about { grid-template-columns: 1fr !important; }
          .grid-tabs { grid-template-columns: 1fr !important; }
          .grid-contact { grid-template-columns: 1fr !important; }
          .grid-report { grid-template-columns: 1fr !important; }
          .grid-footer { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .grid-footer { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <InfoTabsSection />
      <CtaBanner />
      <SpecialistsSection />
      <PricesSection />
      <ReportSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
