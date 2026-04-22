import { useState, useEffect } from "react";

// ============================================================
// POLYGRAPH – lügendetektortest.com
// Design: exakt nach Screenshot
// Navy Navbar #1a2a4a, Hero mit Polygraph-Papier-Bild,
// Orange Akzente #FF8C00, weißer Titel, Feature-Badges
// ============================================================

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663526446116/98H8B7b2JtQkTeebFbhAkq/hero-polygraph-paper-MaAhbCa9xSEqKupKcjLp98.webp";

const NAVY = "#1a2a4a";
const NAVY_DARK = "#111d35";
const ORANGE = "#FF8C00";
const GREEN_WA = "#25D366";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";
const BLUE_LINE = "#2563eb";

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
    short: "Klärung von Verhaltensauffälligkeiten bei Jugendlichen",
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
    details: "Sie vertrauen Ihrem Hauspersonal Ihr Zuhause, Ihre Kinder und Ihre Wertsachen an. Ein Polygraphtest gibt Ihnen die Sicherheit, dass diese Personen vertrauenswürdig sind.",
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
    details: "Bei wichtigen privaten Transaktionen, Darlehen oder anderen Vereinbarungen kann ein Polygraphtest sicherstellen, dass alle Parteien ehrlich sind.",
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
    details: "Bei der Einstellung von Mitarbeitern für sensible Positionen kann ein Polygraphtest sicherstellen, dass die Bewerber ehrlich über ihre Vergangenheit und Qualifikationen sind.",
    features: ["Schnelle Abwicklung", "Mehrere Bewerber möglich", "Vertraulicher Bericht", "Rechtssicheres Gutachten"],
  },
  {
    id: "routine",
    icon: "fas fa-clipboard-check",
    title: "Planmäßige Überprüfung von Mitarbeitern",
    price: "ab 399 €",
    short: "Regelmäßige Überprüfungen zur Sicherung der Unternehmensintegrität",
    details: "Regelmäßige Polygraphtests für Mitarbeiter in sensiblen Positionen können dazu beitragen, Fehlverhalten zu verhindern und die Unternehmenskultur der Integrität zu stärken.",
    features: ["Maßgeschneiderte Programme", "Gruppenrabatte möglich", "Vertrauliche Berichte", "Regelmäßige Termine"],
  },
  {
    id: "ermittlung",
    icon: "fas fa-search",
    title: "Interne Ermittlungen",
    price: "ab 649 €",
    short: "Aufklärung von Vorfällen und Fehlverhalten im Unternehmen",
    details: "Wenn in Ihrem Unternehmen Waren verschwinden, Gelder veruntreut werden oder vertrauliche Informationen nach außen gelangen, kann ein Polygraphtest die Verantwortlichen identifizieren.",
    features: ["Diskrete Durchführung", "Mehrere Personen möglich", "Offizielles Gutachten", "Rechtlich verwertbar"],
  },
  {
    id: "mobil",
    icon: "fas fa-car",
    title: "Polygraph mit Hausbesuch",
    price: "auf Anfrage",
    short: "Wir kommen zu Ihnen – in Ihr Büro oder nach Hause",
    details: "Sie möchten die Untersuchung in Ihren eigenen Räumlichkeiten durchführen lassen? Kein Problem – unser Team kommt zu Ihnen. Wir bringen alle notwendigen Geräte mit.",
    features: ["Gesamtes Bayern möglich", "Professionelle Ausrüstung", "Diskrete Anreise", "Flexible Termingestaltung"],
  },
  {
    id: "ehre",
    icon: "fas fa-balance-scale",
    title: "Schutz von Ehre und Würde",
    price: "auf Anfrage",
    short: "Klärung von Verleumdungen und falschen Anschuldigungen",
    details: "Wurden Sie fälschlicherweise beschuldigt? Ein Polygraphtest kann Ihre Unschuld beweisen und Ihnen helfen, Ihren Ruf wiederherzustellen.",
    features: ["Offizielles Gutachten", "Rechtlich verwertbar", "Schnelle Terminvergabe", "Professionelle Beratung"],
  },
  {
    id: "partner",
    icon: "fas fa-building",
    title: "Überprüfung von Geschäftspartnern",
    price: "auf Anfrage",
    short: "Sicherheit bei wichtigen Geschäftspartnerschaften und Investitionen",
    details: "Bevor Sie eine wichtige Geschäftspartnerschaft eingehen oder eine größere Investition tätigen, kann ein Polygraphtest sicherstellen, dass Ihr potenzieller Partner ehrlich ist.",
    features: ["Vertrauliche Durchführung", "Offizielles Gutachten", "Rechtlich verwertbar", "Internationale Erfahrung"],
  },
  {
    id: "krypto",
    icon: "fas fa-coins",
    title: "Überprüfung im Kryptowährungssektor",
    price: "auf Anfrage",
    short: "Spezialisierte Tests für Blockchain- und Kryptounternehmen",
    details: "Der Kryptowährungssektor ist besonders anfällig für Betrug und Vertrauensmissbrauch. Unsere spezialisierten Tests helfen Ihnen, die Integrität Ihrer Mitarbeiter und Partner zu überprüfen.",
    features: ["Branchenspezifische Fragen", "Vertrauliche Durchführung", "Offizielles Gutachten", "Internationale Erfahrung"],
  },
];

const processSteps = [
  { num: "01", title: "Anfrage & Beratung", desc: "Sie hinterlassen eine Anfrage auf der Webseite oder kontaktieren uns auf anderem Weg. Wir klären das Anliegen und definieren die Ziele für die bevorstehende Untersuchung." },
  { num: "02", title: "Aufgabenstellung", desc: "Wir konkretisieren das Ziel, stimmen die Fragen ab, klären die Rahmenbedingungen: Anzahl der Personen, Ort der Untersuchung, Zeitplan und Zahlungsmodalitäten." },
  { num: "03", title: "Testerstellung nach Methodik", desc: "Basierend auf Ihrer Aufgabe erstellen wir spezielle Tests für die zu prüfende Person. Genau nach diesen Tests wird die Untersuchung durchgeführt." },
  { num: "04", title: "Durchführung der Prüfung", desc: "Die durchschnittliche Testdauer beträgt 1,5–2,5 Stunden. Die zu prüfende Person antwortet nur mit Ja oder Nein. Das Verfahren ist vollständig sicher." },
  { num: "05", title: "Gutachten erstellen", desc: "Es wird ein schriftliches Gutachten erstellt und an Ihre angegebene E-Mail-Adresse gesendet. Alle Informationen sind streng vertraulich." },
  { num: "06", title: "Polygraph & Sensoren", desc: "Wir verwenden einen professionellen Computerpolygraphen der neuesten Generation mit Pneumo-Atemgurt, FPG-Sensor, GSR-Sensor, Blutdrucksensor und Aktivitätssensor." },
];

const faqItems = [
  { q: "Wer kann NICHT am Polygraphtest teilnehmen?", a: "Die Teilnahme wird nicht empfohlen für: schwangere Frauen, Kinder unter 14 Jahren, Personen mit psychischen Erkrankungen oder schweren Herzerkrankungen, Personen unter Alkohol- oder Drogeneinfluss sowie Personen, die Beruhigungsmittel oder Medikamente einnehmen, die das Nervensystem beeinflussen." },
  { q: "Welche Vor- und Nachteile hat der Einsatz eines Lügendetektors?", a: "Vorteile: Hohe Genauigkeit (98–99%), objektive Ergebnisse, offizielles Gutachten als Beweismittel, schnelle Klärung von Sachverhalten. Nachteile: Ergebnisse können durch bestimmte Medikamente oder Erkrankungen beeinflusst werden, nicht alle Fragen können getestet werden, die Teilnahme muss freiwillig sein." },
  { q: "Ist es möglich, den Lügendetektor zu täuschen?", a: "Moderne Polygraphtechnologie erkennt Versuche, den Test zu manipulieren. Unsere Experten sind speziell geschult, solche Versuche zu identifizieren. Techniken wie kontrolliertes Atmen oder Muskelanspannung werden durch die Kombination mehrerer Sensoren zuverlässig erkannt." },
  { q: "Wie bereitet man sich richtig auf einen Polygraphtest vor?", a: "Für eine optimale Vorbereitung empfehlen wir: Ausreichend schlafen (mindestens 7–8 Stunden), keinen Alkohol 24 Stunden vor dem Test, keine Beruhigungsmittel ohne ärztliche Notwendigkeit, normale Mahlzeiten einnehmen, bequeme Kleidung tragen und pünktlich erscheinen." },
  { q: "Wie genau ist ein Polygraphtest?", a: "Moderne Polygraphtests, die von zertifizierten Experten durchgeführt werden, erreichen eine Genauigkeit von 95–99%. Unsere Spezialisten verfügen über jahrzehntelange Erfahrung und nutzen modernste Geräte der neuesten Generation." },
  { q: "Ist der Polygraphtest legal in Deutschland?", a: "Ja, Polygraphtests sind in Deutschland legal, wenn die Teilnahme freiwillig ist. Das Ergebnis kann als Beweismittel in Zivilverfahren verwendet werden. Wir erstellen ein offizielles Gutachten, das rechtlich verwertbar ist." },
];

// ─────────────────────────────────────────────
// NAVBAR – exakt wie Screenshot
// ─────────────────────────────────────────────
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  const links = [
    ["DIENSTLEISTUNGEN", "services"],
    ["PREISE", "prices"],
    ["ÜBER UNS", "about"],
    ["AUSRÜSTUNG", "equipment"],
    ["BLOG", "blog"],
    ["KONTAKTE", "contact"],
  ];

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: NAVY, fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", height: "60px", gap: "32px" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", flexShrink: 0 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255,255,255,0.08)" }}>
            <i className="fas fa-wave-square" style={{ color: ORANGE, fontSize: "16px" }}></i>
          </div>
          <span style={{ color: WHITE, fontWeight: 700, fontSize: "18px", letterSpacing: "2px", textTransform: "uppercase" }}>POLYGRAPH</span>
        </div>

        {/* Nav links */}
        <div className="hidden lg:flex" style={{ flex: 1, gap: "28px", alignItems: "center" }}>
          {links.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}
              style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", fontWeight: 500, letterSpacing: "0.3px", background: "none", border: "none", cursor: "pointer", padding: "4px 0", whiteSpace: "nowrap" }}
              onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}>{label}</button>
          ))}
        </div>

        {/* CTA Button */}
        <button onClick={() => scrollTo("contact")}
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "6px", backgroundColor: ORANGE, color: WHITE, border: "none", padding: "9px 18px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", cursor: "pointer", whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "0.5px" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
          KONTAKTIEREN SIE UNS
        </button>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: WHITE, background: "none", border: "none", fontSize: "20px", cursor: "pointer", marginLeft: "auto" }}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: NAVY_DARK, padding: "12px 24px 20px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {links.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ display: "block", width: "100%", textAlign: "left", color: "rgba(255,255,255,0.85)", fontSize: "14px", padding: "10px 0", background: "none", border: "none", cursor: "pointer", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>{label}</button>
          ))}
          <button onClick={() => scrollTo("contact")} style={{ marginTop: "12px", width: "100%", backgroundColor: ORANGE, color: WHITE, border: "none", padding: "11px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", cursor: "pointer", textTransform: "uppercase" }}>KONTAKTIEREN SIE UNS</button>
        </div>
      )}
    </nav>
  );
}

// ─────────────────────────────────────────────
// HERO – exakt wie Screenshot
// ─────────────────────────────────────────────
function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 40%", fontFamily: "'Roboto', sans-serif" }}>
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,25,50,0.88) 0%, rgba(15,25,50,0.72) 50%, rgba(15,25,50,0.45) 100%)" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "80px 24px 60px", width: "100%" }}>
        <div style={{ maxWidth: "620px" }}>
          {/* Title */}
          <h1 style={{ color: WHITE, fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
            LÜGENDETEKTOR-TEST<br />IN MÜNCHEN
          </h1>

          {/* Subtitle */}
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "18px", fontWeight: 400, marginBottom: "14px" }}>
            Premium-Prüfung zum fairen Preis
          </p>

          {/* Accuracy badge */}
          <p style={{ color: ORANGE, fontSize: "16px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
            GENAUIGKEIT 98–99%
          </p>

          {/* Anon note */}
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", marginBottom: "36px" }}>
            100% anonym, vertraulich und ohne Weitergabe von Anfragedetails
          </p>

          {/* Feature badges – exactly like screenshot */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
            {[
              { icon: "fas fa-lock", label: "Absolute Vertraulichkeit" },
              { icon: "fas fa-user-tie", label: "Erfahrene Experten" },
              { icon: "fas fa-desktop", label: "Moderne Ausrüstung" },
            ].map(b => (
              <div key={b.label} style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.18)", padding: "12px 20px", borderRadius: "6px", minWidth: "170px" }}>
                <i className={b.icon} style={{ color: ORANGE, fontSize: "18px" }}></i>
                <span style={{ color: WHITE, fontSize: "13px", fontWeight: 500 }}>{b.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <button onClick={() => scrollTo("contact")}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: ORANGE, color: WHITE, padding: "13px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "14px", border: "none", cursor: "pointer", textTransform: "uppercase" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
              <i className="fas fa-paper-plane"></i> Jetzt anfragen
            </button>
            <a href="tel:01756036003"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "transparent", border: "2px solid rgba(255,255,255,0.5)", color: WHITE, padding: "13px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "14px", textDecoration: "none", textTransform: "uppercase" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = WHITE; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.backgroundColor = "transparent"; }}>
              <i className="fas fa-phone-alt"></i> 01756036003
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// STATS BAR
// ─────────────────────────────────────────────
function StatsBar() {
  return (
    <div style={{ backgroundColor: NAVY_DARK, padding: "0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="stats-grid">
        {[
          { val: "98–99%", label: "Genauigkeit", icon: "fas fa-crosshairs" },
          { val: "20+", label: "Jahre Erfahrung", icon: "fas fa-award" },
          { val: "500+", label: "Abgeschlossene Fälle", icon: "fas fa-check-double" },
          { val: "100%", label: "Vertraulich", icon: "fas fa-user-secret" },
        ].map((s, i) => (
          <div key={i} style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: "14px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
            <i className={s.icon} style={{ color: ORANGE, fontSize: "22px", flexShrink: 0 }}></i>
            <div>
              <div style={{ color: WHITE, fontWeight: 700, fontSize: "20px", lineHeight: 1 }}>{s.val}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────
function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"private" | "business">("private");
  const [openService, setOpenService] = useState<string | null>(null);
  const services = activeTab === "private" ? privateServices : businessServices;

  return (
    <section id="services" style={{ backgroundColor: LIGHT_BG, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: ORANGE, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Unsere Leistungen</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>EINSATZGEBIETE DES POLYGRAPHEN</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, margin: "0 auto 12px" }} />
          <p style={{ color: TEXT_MID, fontSize: "15px" }}>Klicken Sie auf eine Leistung, um mehr Informationen zu erhalten</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "28px" }}>
          {[["private", "fas fa-user-friends", "Privatpersonen"], ["business", "fas fa-building", "Unternehmen"]].map(([tab, icon, label]) => (
            <button key={tab} onClick={() => { setActiveTab(tab as "private" | "business"); setOpenService(null); }}
              style={{ padding: "10px 26px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s", backgroundColor: activeTab === tab ? NAVY : WHITE, color: activeTab === tab ? WHITE : NAVY, border: `2px solid ${NAVY}` }}>
              <i className={`${icon} mr-2`}></i>{label}
            </button>
          ))}
        </div>

        {/* Service Buttons Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: "10px" }}>
          {services.map(svc => (
            <div key={svc.id}>
              <button onClick={() => setOpenService(openService === svc.id ? null : svc.id)}
                style={{
                  width: "100%", textAlign: "left", padding: "16px 20px", borderRadius: openService === svc.id ? "6px 6px 0 0" : "6px", cursor: "pointer", display: "flex", alignItems: "center", gap: "14px", transition: "all 0.2s",
                  backgroundColor: openService === svc.id ? NAVY : WHITE,
                  color: openService === svc.id ? WHITE : TEXT_DARK,
                  border: openService === svc.id ? `2px solid ${NAVY}` : `2px solid ${BORDER}`,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={e => { if (openService !== svc.id) { e.currentTarget.style.borderColor = NAVY; e.currentTarget.style.boxShadow = "0 4px 12px rgba(26,42,74,0.1)"; } }}
                onMouseLeave={e => { if (openService !== svc.id) { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.04)"; } }}
              >
                <div style={{ width: "42px", height: "42px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, backgroundColor: openService === svc.id ? "rgba(255,140,0,0.15)" : "#EEF2F7", color: openService === svc.id ? ORANGE : NAVY, fontSize: "16px" }}>
                  <i className={svc.icon}></i>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "2px" }}>{svc.title}</div>
                  <div style={{ fontSize: "12px", color: openService === svc.id ? "rgba(255,255,255,0.65)" : TEXT_MID }}>{svc.short}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px", flexShrink: 0 }}>
                  <span style={{ color: ORANGE, fontWeight: 700, fontSize: "13px" }}>{svc.price}</span>
                  <i className={`fas fa-chevron-${openService === svc.id ? "up" : "down"}`} style={{ color: openService === svc.id ? "rgba(255,255,255,0.5)" : "#A0AEC0", fontSize: "11px" }}></i>
                </div>
              </button>

              {openService === svc.id && (
                <div style={{ backgroundColor: "#EEF2F7", border: `2px solid ${NAVY}`, borderTop: "none", borderRadius: "0 0 6px 6px", padding: "20px" }}>
                  <p style={{ color: TEXT_DARK, fontSize: "14px", lineHeight: 1.75, marginBottom: "14px" }}>{svc.details}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
                    {svc.features.map(f => (
                      <span key={f} style={{ display: "inline-flex", alignItems: "center", gap: "5px", backgroundColor: WHITE, border: `1px solid ${BORDER}`, color: TEXT_DARK, padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 600 }}>
                        <i className="fas fa-check" style={{ color: "#22c55e", fontSize: "10px" }}></i>{f}
                      </span>
                    ))}
                  </div>
                  <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: ORANGE, color: WHITE, padding: "9px 20px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", border: "none", cursor: "pointer", textTransform: "uppercase" }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
                    <i className="fas fa-calendar-check"></i> Jetzt anfragen
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" style={{ backgroundColor: WHITE, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="grid-2col">
          <div>
            <p style={{ color: ORANGE, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Über uns</p>
            <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>POLYGRAPH MÜNCHEN</h2>
            <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, marginBottom: "22px" }} />
            <p style={{ color: TEXT_DARK, fontSize: "16px", lineHeight: 1.8, marginBottom: "14px" }}>
              <strong>POLYGRAPH München</strong> – professionelle Polygraphuntersuchungen für Unternehmen und Privatpersonen.
            </p>
            <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.8, marginBottom: "14px" }}>
              Wir helfen dabei, die Wahrheit dort aufzudecken, wo Worte täuschen können. Unsere Experten mit langjähriger Erfahrung führen präzise und objektive Untersuchungen am Lügendetektor durch.
            </p>
            <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.8, marginBottom: "28px" }}>
              Vertrauen Sie den Profis – gewinnen Sie Sicherheit in Menschen und Entscheidungen!
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
              {[{ val: "95–99%", label: "Genauigkeit" }, { val: "20+", label: "Jahre Erfahrung" }, { val: "500+", label: "Fälle" }, { val: "100%", label: "Vertraulich" }].map(s => (
                <div key={s.val} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 700, color: NAVY }}>{s.val}</div>
                  <div style={{ color: TEXT_MID, fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor: LIGHT_BG, borderRadius: "8px", padding: "36px", border: `1px solid ${BORDER}` }}>
            <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "18px", marginBottom: "20px", textTransform: "uppercase" }}>Warum POLYGRAPH München?</h3>
            {[
              { icon: "fas fa-user-secret", title: "Anonymität", desc: "Wir unterzeichnen eine Geheimhaltungsvereinbarung und tragen die volle rechtliche Verantwortung" },
              { icon: "fas fa-balance-scale", title: "Objektivität", desc: "Wir arbeiten mit professioneller Hochpräzisionsausrüstung, die Fehler minimiert" },
              { icon: "fas fa-crosshairs", title: "Genauigkeit", desc: "Hohe Genauigkeitsergebnisse helfen Ihnen, die richtigen Schlüsse zu ziehen" },
              { icon: "fas fa-map-marker-alt", title: "München", desc: "Marienstr. 4, 80331 München – täglich 08:00–20:00 Uhr" },
            ].map(item => (
              <div key={item.title} style={{ display: "flex", gap: "14px", marginBottom: "18px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(255,140,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className={item.icon} style={{ color: ORANGE, fontSize: "16px" }}></i>
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: NAVY, fontSize: "14px", marginBottom: "2px" }}>{item.title}</div>
                  <div style={{ color: TEXT_MID, fontSize: "13px", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PROCESS
// ─────────────────────────────────────────────
function ProcessSection() {
  return (
    <section id="process" style={{ backgroundColor: NAVY, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ color: ORANGE, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Unser Verfahren</p>
          <h2 style={{ color: WHITE, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>WIE LÄUFT DIE PRÜFUNG AB?</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: ORANGE, margin: "0 auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px" }}>
          {processSteps.map((step, i) => (
            <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "26px", borderTop: `3px solid ${ORANGE}` }}>
              <div style={{ fontSize: "3.5rem", fontWeight: 700, color: "rgba(255,140,0,0.15)", lineHeight: 1, marginBottom: "12px", fontFamily: "monospace" }}>{step.num}</div>
              <h3 style={{ color: WHITE, fontWeight: 700, fontSize: "15px", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{step.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", lineHeight: 1.75 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// EQUIPMENT
// ─────────────────────────────────────────────
function EquipmentSection() {
  return (
    <section id="equipment" style={{ backgroundColor: LIGHT_BG, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: ORANGE, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Technologie</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>AUSRÜSTUNG</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, margin: "0 auto 14px" }} />
          <p style={{ color: TEXT_MID, fontSize: "15px", maxWidth: "600px", margin: "0 auto" }}>Wir verwenden ausschließlich professionelle Computerpolygraphen der neuesten Generation</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {[
            { icon: "fas fa-lungs", title: "Pneumo-Atemgurt", desc: "2 Sensoren messen die Atemaktivität – sowohl Brust- als auch Bauchatmung" },
            { icon: "fas fa-heartbeat", title: "FPG-Sensor", desc: "Misst die kardiovaskuläre Aktivität und Herzfrequenz in Echtzeit" },
            { icon: "fas fa-bolt", title: "GSR-Sensor", desc: "Galvanischer Hautwiderstand – misst die elektrodermale Aktivität" },
            { icon: "fas fa-tachometer-alt", title: "Blutdrucksensor", desc: "Kontinuierliche Überwachung des Blutdrucks während der gesamten Untersuchung" },
            { icon: "fas fa-hand-paper", title: "Aktivitätssensor", desc: "Erkennt Tremor und Bewegungen, die das Ergebnis beeinflussen könnten" },
            { icon: "fas fa-laptop", title: "Computeranalyse", desc: "Alle Daten werden in Echtzeit digital erfasst und von spezieller Software analysiert" },
          ].map(item => (
            <div key={item.title} style={{ backgroundColor: WHITE, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "24px", borderTop: `3px solid ${ORANGE}` }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "rgba(255,140,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                <i className={item.icon} style={{ color: ORANGE, fontSize: "20px" }}></i>
              </div>
              <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "15px", marginBottom: "8px" }}>{item.title}</h3>
              <p style={{ color: TEXT_MID, fontSize: "13px", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// CTA BANNER
// ─────────────────────────────────────────────
function CtaBanner() {
  return (
    <section style={{ backgroundColor: ORANGE, padding: "48px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
        <div>
          <h2 style={{ color: WHITE, fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>BEREIT ANZUFANGEN?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px" }}>Täglich 08:00 – 20:00 Uhr · Marienstr. 4, München</p>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="tel:01756036003"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: WHITE, color: ORANGE, padding: "12px 24px", borderRadius: "4px", fontWeight: 700, fontSize: "14px", textDecoration: "none", textTransform: "uppercase" }}>
            <i className="fas fa-phone-alt"></i> 01756036003
          </a>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "transparent", border: "2px solid white", color: WHITE, padding: "12px 24px", borderRadius: "4px", fontWeight: 700, fontSize: "14px", cursor: "pointer", textTransform: "uppercase" }}>
            <i className="fas fa-envelope"></i> Nachricht senden
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SPECIALISTS
// ─────────────────────────────────────────────
function SpecialistsSection() {
  return (
    <section id="specialists" style={{ backgroundColor: WHITE, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: ORANGE, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Unser Team</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>SPEZIALISTEN</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, margin: "0 auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px", maxWidth: "800px", margin: "0 auto" }}>
          {[
            { name: "Dimitri", role: "Polygraphologe", exp: "20 Jahre Erfahrung", edu: "Höhere Bildung, Praktische Psychologie", icon: "fas fa-user-tie" },
            { name: "Tatjana Neubauer", role: "Psychologin", exp: "23 Jahre Erfahrung", edu: "Höhere Bildung, Diplompsychologin", icon: "fas fa-user-graduate" },
          ].map(s => (
            <div key={s.name} style={{ backgroundColor: LIGHT_BG, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "36px 28px", textAlign: "center", borderTop: `4px solid ${ORANGE}` }}>
              <div style={{ width: "90px", height: "90px", borderRadius: "50%", backgroundColor: NAVY, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <i className={s.icon} style={{ fontSize: "36px", color: ORANGE }}></i>
              </div>
              <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "20px", marginBottom: "4px" }}>{s.name}</h3>
              <p style={{ color: ORANGE, fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>{s.role}</p>
              <p style={{ color: "#22c55e", fontWeight: 700, fontSize: "13px", marginBottom: "10px" }}>
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

// ─────────────────────────────────────────────
// PRICES
// ─────────────────────────────────────────────
function PricesSection() {
  return (
    <section id="prices" style={{ backgroundColor: LIGHT_BG, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: ORANGE, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Transparente Preise</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>PREISE</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, margin: "0 auto 12px" }} />
          <p style={{ color: TEXT_MID, fontSize: "15px" }}>Keine versteckten Kosten – transparente und faire Preisgestaltung</p>
        </div>
        <div style={{ backgroundColor: WHITE, border: `1px solid ${BORDER}`, borderRadius: "8px", overflow: "hidden", maxWidth: "800px", margin: "0 auto 24px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
          <div style={{ backgroundColor: NAVY, padding: "14px 24px", display: "grid", gridTemplateColumns: "1fr auto" }}>
            <span style={{ color: WHITE, fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Leistung</span>
            <span style={{ color: ORANGE, fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Preis</span>
          </div>
          {[
            ["Überprüfung auf Untreue", "ab 649 €"],
            ["Überprüfung von Jugendlichen ab 14 Jahren", "ab 749 €"],
            ["Aufklärung von Diebstählen", "ab 649 €"],
            ["Überprüfung von Hauspersonal", "ab 549 €"],
            ["Probetest am Polygraphen", "ab 299 €"],
            ["Überprüfung vor der Hochzeit", "ab 649 €"],
            ["Überprüfung bei der Einstellung", "ab 399 €"],
            ["Planmäßige Überprüfung von Mitarbeitern", "ab 399 €"],
            ["Interne Ermittlungen", "ab 649 €"],
            ["Polygraph mit Hausbesuch", "auf Anfrage"],
            ["Schutz von Ehre und Würde", "auf Anfrage"],
            ["Überprüfung von Geschäftspartnern", "auf Anfrage"],
          ].map(([service, price], i) => (
            <div key={i} style={{ padding: "13px 24px", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", borderBottom: `1px solid ${BORDER}`, backgroundColor: i % 2 === 0 ? WHITE : "#FAFBFC" }}>
              <span style={{ color: TEXT_DARK, fontSize: "14px" }}>
                <i className="fas fa-check-circle mr-2" style={{ color: "#22c55e", fontSize: "11px" }}></i>{service}
              </span>
              <span style={{ color: ORANGE, fontWeight: 700, fontSize: "14px", whiteSpace: "nowrap" }}>{price}</span>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: "13px", color: TEXT_MID, marginBottom: "18px" }}>
          <i className="fas fa-info-circle mr-1" style={{ color: BLUE_LINE }}></i>
          Der genaue Preis wird nach dem kostenlosen Erstgespräch festgelegt. Gruppenrabatte möglich.
        </p>
        <div style={{ textAlign: "center" }}>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: ORANGE, color: WHITE, padding: "12px 26px", borderRadius: "4px", fontWeight: 700, fontSize: "14px", border: "none", cursor: "pointer", textTransform: "uppercase" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
            <i className="fas fa-paper-plane"></i> Anfrage senden
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────
function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faq" style={{ backgroundColor: WHITE, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: ORANGE, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Fragen & Antworten</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>HÄUFIGE FRAGEN</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, margin: "0 auto 12px" }} />
          <p style={{ color: TEXT_MID, fontSize: "15px", maxWidth: "600px", margin: "0 auto" }}>Basierend auf unserer Erfahrung haben wir eine Liste der häufigsten Fragen zusammengestellt</p>
        </div>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faqItems.map((item, i) => (
            <div key={i} style={{ backgroundColor: LIGHT_BG, border: `1px solid ${BORDER}`, borderRadius: "6px", marginBottom: "8px", overflow: "hidden" }}>
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{ width: "100%", textAlign: "left", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", background: "none", border: "none", cursor: "pointer" }}>
                <span style={{ fontWeight: 700, fontSize: "14px", color: NAVY, lineHeight: 1.4 }}>{item.q}</span>
                <i className={`fas fa-chevron-${openIdx === i ? "up" : "down"}`} style={{ color: ORANGE, flexShrink: 0 }}></i>
              </button>
              {openIdx === i && (
                <div style={{ padding: "0 20px 16px", borderTop: `1px solid ${BORDER}` }}>
                  <p style={{ color: TEXT_DARK, fontSize: "14px", lineHeight: 1.8, paddingTop: "12px" }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" style={{ backgroundColor: NAVY, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ color: ORANGE, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Kostenlose Erstberatung</p>
          <h2 style={{ color: WHITE, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>KONTAKT AUFNEHMEN</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: ORANGE, margin: "0 auto" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", maxWidth: "960px", margin: "0 auto" }} className="grid-2col">
          {/* Info */}
          <div>
            <h3 style={{ color: WHITE, fontWeight: 700, fontSize: "17px", marginBottom: "24px", textTransform: "uppercase" }}>Kontaktinformationen</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: "fas fa-map-marker-alt", label: "Adresse", val: "Marienstr. 4, 80331 München", href: undefined },
                { icon: "fas fa-phone-alt", label: "Telefon", val: "01756036003", href: "tel:01756036003" },
                { icon: "fas fa-envelope", label: "E-Mail", val: "detektsiya@yandex.ru", href: "mailto:detektsiya@yandex.ru" },
                { icon: "fab fa-whatsapp", label: "WhatsApp", val: "+49 175 6036003", href: "https://wa.me/491756036003" },
                { icon: "fas fa-clock", label: "Öffnungszeiten", val: "Täglich 08:00 – 20:00 Uhr", href: undefined },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(255,140,0,0.12)", color: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "14px" }}>
                    <i className={c.icon}></i>
                  </div>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} style={{ color: WHITE, fontWeight: 700, fontSize: "14px", textDecoration: "none" }}
                        onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                        onMouseLeave={e => (e.currentTarget.style.color = WHITE)}>{c.val}</a>
                    ) : (
                      <span style={{ color: WHITE, fontWeight: 700, fontSize: "14px" }}>{c.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "24px", display: "flex", gap: "10px" }}>
              <a href="https://wa.me/491756036003" target="_blank" rel="noopener noreferrer"
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: GREEN_WA, color: WHITE, padding: "11px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", textDecoration: "none", textTransform: "uppercase" }}>
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
              <a href="mailto:detektsiya@yandex.ru"
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: ORANGE, color: WHITE, padding: "11px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", textDecoration: "none", textTransform: "uppercase" }}>
                <i className="fas fa-envelope"></i> E-Mail
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "40px" }}>
                <i className="fas fa-check-circle" style={{ fontSize: "52px", color: "#22c55e", marginBottom: "16px" }}></i>
                <h3 style={{ color: WHITE, fontWeight: 700, fontSize: "20px", marginBottom: "10px" }}>Vielen Dank!</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.7 }}>Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { name: "name", label: "Ihr Name *", type: "text", placeholder: "Max Mustermann", required: true },
                  { name: "phone", label: "Telefonnummer", type: "tel", placeholder: "+49 ...", required: false },
                  { name: "email", label: "E-Mail-Adresse *", type: "email", placeholder: "ihre@email.de", required: true },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "12px", fontWeight: 700, marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} required={f.required}
                      value={form[f.name as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.name]: e.target.value })}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: "4px", fontSize: "14px", outline: "none", backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: WHITE, boxSizing: "border-box" }}
                      onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")} />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "12px", fontWeight: 700, marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Ihre Nachricht</label>
                  <textarea rows={4} placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "4px", fontSize: "14px", outline: "none", backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: WHITE, resize: "none", boxSizing: "border-box" }}
                    onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")} />
                </div>
                <button type="submit"
                  style={{ padding: "12px", borderRadius: "4px", backgroundColor: ORANGE, color: WHITE, fontWeight: 700, fontSize: "14px", textTransform: "uppercase", border: "none", cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
                  <i className="fas fa-paper-plane mr-2"></i>Anfrage senden
                </button>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", textAlign: "center" }}>
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

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ backgroundColor: NAVY_DARK, fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 24px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "36px" }} className="grid-footer">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "34px", height: "34px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-wave-square" style={{ color: ORANGE, fontSize: "14px" }}></i>
              </div>
              <div>
                <div style={{ color: WHITE, fontWeight: 700, fontSize: "16px", letterSpacing: "2px" }}>POLYGRAPH</div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px", letterSpacing: "1px" }}>lügendetektortest.com</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.75, marginBottom: "14px" }}>Professionelle Polygraphuntersuchungen in München. Genau. Zuverlässig. Objektiv.</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href="https://wa.me/491756036003" target="_blank" rel="noopener noreferrer" style={{ width: "34px", height: "34px", backgroundColor: GREEN_WA, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, textDecoration: "none", fontSize: "15px" }}>
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="mailto:detektsiya@yandex.ru" style={{ width: "34px", height: "34px", backgroundColor: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, textDecoration: "none", fontSize: "13px" }}>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ color: WHITE, fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "14px" }}>Für Kunden</h4>
            {[["Dienstleistungen", "services"], ["Preise", "prices"], ["Über uns", "about"], ["Ausrüstung", "equipment"], ["Kontakt", "contact"]].map(([label, id]) => (
              <button key={label} onClick={() => scrollTo(id)} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "13px", background: "none", border: "none", cursor: "pointer", padding: "3px 0", textAlign: "left" }}
                onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>{label}</button>
            ))}
          </div>

          <div>
            <h4 style={{ color: WHITE, fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "14px" }}>Beliebte Leistungen</h4>
            {["Überprüfung auf Untreue", "Überprüfung von Jugendlichen", "Überprüfung bei der Einstellung", "Interne Ermittlungen", "Aufklärung von Diebstählen"].map(s => (
              <button key={s} onClick={() => scrollTo("services")} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "13px", background: "none", border: "none", cursor: "pointer", padding: "3px 0", textAlign: "left" }}
                onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>{s}</button>
            ))}
          </div>

          <div>
            <h4 style={{ color: WHITE, fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "14px" }}>Dokumente</h4>
            {["Freiwillige Einwilligung", "Vertraulichkeitsvereinbarung", "Merkblatt für Probanden", "Datenschutzerklärung", "Impressum"].map(d => (
              <button key={d} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "13px", background: "none", border: "none", cursor: "pointer", padding: "3px 0", textAlign: "left" }}
                onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>{d}</button>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "18px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>© 2014 – 2026 POLYGRAPH München. Alle Rechte vorbehalten.</p>
          <div style={{ display: "flex", gap: "18px" }}>
            {["Datenschutzerklärung", "Impressum", "Sitemap"].map(l => (
              <button key={l} style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", background: "none", border: "none", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}>{l}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────
// FLOATING WIDGETS
// ─────────────────────────────────────────────
function FloatingWidgets() {
  return (
    <div style={{ position: "fixed", bottom: "80px", right: "20px", display: "flex", flexDirection: "column", gap: "12px", zIndex: 1000 }}>
      <a href="https://wa.me/491756036003" target="_blank" rel="noopener noreferrer"
        style={{ width: "52px", height: "52px", backgroundColor: GREEN_WA, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: WHITE, fontSize: "24px", textDecoration: "none", boxShadow: "0 4px 14px rgba(37,211,102,0.4)", transition: "transform 0.2s" }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="mailto:detektsiya@yandex.ru"
        style={{ width: "52px", height: "52px", backgroundColor: ORANGE, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: WHITE, fontSize: "20px", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,140,0,0.4)", transition: "transform 0.2s" }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
      <style>{`
        @media (max-width: 768px) {
          .grid-2col { grid-template-columns: 1fr !important; }
          .grid-footer { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .grid-footer { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <EquipmentSection />
      <CtaBanner />
      <SpecialistsSection />
      <PricesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
