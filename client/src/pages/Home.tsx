import { useState, useEffect } from "react";

// ============================================================
// POLYGRAPH – lügendetektortest.com
// Design: EXAKT wie die Präsentation
// Farben: Navy #102A43, Grün #48BB78, Orange #FF8C00, Hellgrau #F4F7F9
// Schrift: Roboto
// ============================================================

const HERO_BG = "/manus-storage/hero-bg_4d888f3a.jpg";
const LOGO = "/manus-storage/logo_9c5da03f.png";
const POLYGRAPH_TEST_IMG = "/manus-storage/polygraph-test_83348fa0.png";
const UNTREUE_IMG = "/manus-storage/untreue_52243a7a.png";
const ELTERN_IMG = "/manus-storage/eltern_8cecaa75.png";
const BUSINESS_IMG = "/manus-storage/business_eb6a52de.png";
const PERSONAL_IMG = "/manus-storage/personal_b216d8d8.png";

// ---- Data ----

const privateTopics = [
  {
    id: "untreue",
    icon: "fas fa-heart-broken",
    title: "Verdacht auf Untreue",
    short: "Klärung bei Verdacht auf Untreue in der Partnerschaft",
    details:
      "Wenn Sie den Verdacht haben, dass Ihr Partner untreu ist, kann ein Polygraphtest Klarheit schaffen. Der Test hilft dabei, die Wahrheit herauszufinden und die Beziehung auf eine ehrliche Grundlage zu stellen – oder einen Schlussstrich zu ziehen. Wir führen diese Tests mit größter Diskretion und Einfühlungsvermögen durch.",
    image: UNTREUE_IMG,
  },
  {
    id: "hauspersonal",
    icon: "fas fa-home",
    title: "Überprüfung von Hauspersonal",
    short: "Kindermädchen, Haushälterinnen, Fahrer und andere Angestellte",
    details:
      "Sie vertrauen Ihrem Hauspersonal Ihr Zuhause, Ihre Kinder und Ihre Wertsachen an. Ein Polygraphtest gibt Ihnen die Sicherheit, dass diese Personen vertrauenswürdig sind. Wir überprüfen Kindermädchen, Haushälterinnen, Fahrer und andere Hausangestellte diskret und professionell.",
    image: PERSONAL_IMG,
  },
  {
    id: "diebstahl",
    icon: "fas fa-search",
    title: "Aufklärung von Diebstählen",
    short: "Klärung von Diebstählen und Verlusten im privaten Umfeld",
    details:
      "Vermissen Sie Wertsachen oder Geld aus Ihrem Haushalt? Ein Polygraphtest kann helfen, den Täter zu identifizieren. Wir führen die Untersuchung diskret durch und liefern Ihnen ein offizielles Gutachten, das als Beweismittel verwendet werden kann.",
    image: null,
  },
  {
    id: "jugendliche",
    icon: "fas fa-child",
    title: "Überprüfung von Jugendlichen",
    short: "Ab 14 Jahren mit Zustimmung der Eltern",
    details:
      "Machen Sie sich Sorgen um das Verhalten Ihres Kindes? Ob Drogenkonsum, Schuleschwänzen oder andere problematische Verhaltensweisen – ein Polygraphtest kann Klarheit schaffen. Die Untersuchung wird mit besonderer Rücksicht auf das Wohlbefinden des Jugendlichen durchgeführt. Elterliche Zustimmung ist erforderlich.",
    image: ELTERN_IMG,
  },
];

const businessTopics = [
  {
    id: "diebstahl-firma",
    icon: "fas fa-lock",
    title: "Diebstahl & Informationslecks",
    short: "Aufklärung von Diebstahl, Bestechung und Datenlecks im Unternehmen",
    details:
      "Wenn in Ihrem Unternehmen Waren verschwinden, Gelder veruntreut werden oder vertrauliche Informationen nach außen gelangen, kann ein Polygraphtest die Verantwortlichen identifizieren. Wir arbeiten diskret und professionell, um den Schaden für Ihr Unternehmen zu minimieren.",
    image: BUSINESS_IMG,
  },
  {
    id: "einstellung",
    icon: "fas fa-user-check",
    title: "Personaleinstellung & Screening",
    short: "Überprüfung von Bewerbern und interne Ermittlungen",
    details:
      "Bei der Einstellung von Mitarbeitern für sensible Positionen kann ein Polygraphtest sicherstellen, dass die Bewerber ehrlich über ihre Vergangenheit und Qualifikationen sind. Wir bieten auch interne Ermittlungen bei Verdacht auf Fehlverhalten von Mitarbeitern an.",
    image: PERSONAL_IMG,
  },
  {
    id: "geschaeftspartner",
    icon: "fas fa-handshake",
    title: "Geschäftspartner & Führungskräfte",
    short: "Überprüfung von Geschäftspartnern und Führungspersonal",
    details:
      "Bevor Sie eine wichtige Geschäftspartnerschaft eingehen oder eine Führungskraft in eine Schlüsselposition befördern, kann ein Polygraphtest sicherstellen, dass diese Person vertrauenswürdig ist. Wir überprüfen Integrität, Loyalität und mögliche Interessenkonflikte.",
    image: BUSINESS_IMG,
  },
  {
    id: "routine",
    icon: "fas fa-clipboard-check",
    title: "Präventive Routineüberprüfungen",
    short: "Regelmäßige Überprüfungen zur Sicherung der Unternehmensintegrität",
    details:
      "Regelmäßige Polygraphtests für Mitarbeiter in sensiblen Positionen können dazu beitragen, Fehlverhalten zu verhindern und die Unternehmenskultur der Integrität zu stärken. Wir bieten maßgeschneiderte Überprüfungsprogramme für Unternehmen jeder Größe an.",
    image: null,
  },
];

const processSteps = [
  { num: "01", title: "Kontaktaufnahme", desc: "Sie nehmen telefonisch oder per E-Mail Kontakt auf. Wir beraten Sie kostenlos und diskret." },
  { num: "02", title: "Vorgespräch", desc: "Ein ausführliches Vorgespräch klärt den Sachverhalt und die zu prüfenden Fragen." },
  { num: "03", title: "Vorbereitung", desc: "Der Proband wird über den Ablauf informiert und die Fragen werden gemeinsam festgelegt." },
  { num: "04", title: "Durchführung", desc: "Die Untersuchung dauert ca. 2–3 Stunden und wird in angenehmer Atmosphäre durchgeführt." },
  { num: "05", title: "Auswertung", desc: "Die Ergebnisse werden von unserem Experten sorgfältig analysiert und interpretiert." },
  { num: "06", title: "Gutachten", desc: "Sie erhalten ein offizielles schriftliches Gutachten mit den Ergebnissen der Untersuchung." },
];

const faqItems = [
  { q: "Wie genau ist ein Polygraphtest?", a: "Moderne Polygraphtests erreichen eine Genauigkeit von 98–99%, wenn sie von zertifizierten Experten durchgeführt werden. Unsere Spezialisten verfügen über jahrzehntelange Erfahrung und nutzen modernste Geräte." },
  { q: "Ist der Test legal?", a: "Ja, Polygraphtests sind in Deutschland legal, wenn die Teilnahme freiwillig ist. Das Ergebnis kann als Beweismittel in Zivilverfahren verwendet werden." },
  { q: "Wie lange dauert der Test?", a: "Eine vollständige Untersuchung dauert in der Regel 2–3 Stunden, einschließlich Vorgespräch, eigentlichem Test und Auswertung." },
  { q: "Kann man den Test manipulieren?", a: "Moderne Polygraphtechnologie erkennt Versuche, den Test zu manipulieren. Unsere Experten sind geschult, solche Versuche zu identifizieren." },
  { q: "Wie diskret ist die Untersuchung?", a: "Absolute Vertraulichkeit ist unser oberstes Gebot. Alle Informationen werden streng vertraulich behandelt und nicht an Dritte weitergegeben." },
  { q: "Was kostet ein Polygraphtest?", a: "Die Kosten beginnen ab 649 € und hängen von der Komplexität des Falls ab. Wir beraten Sie gerne kostenlos über die Kosten für Ihren spezifischen Fall." },
];

// ---- Shared Styles (wie in der Präsentation) ----
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

// ---- Navbar (exakt wie in der Präsentation) ----
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

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      backgroundColor: NAV_BG,
      boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.3)" : "0 2px 10px rgba(0,0,0,0.1)",
      fontFamily: "'Roboto', sans-serif",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={LOGO} alt="Logo" style={{ height: "36px", width: "36px", borderRadius: "50%", objectFit: "cover" }} />
          <span style={{ color: "white", fontSize: "22px", fontWeight: 700, letterSpacing: "2px" }}>POLYGRAPH</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex" style={{ gap: "28px" }}>
          {[["Dienstleistungen", "services"], ["Ablauf", "process"], ["Preise", "prices"], ["Spezialisten", "specialists"], ["FAQ", "faq"], ["Kontakte", "contact"]].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}
              style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
            >{label}</button>
          ))}
        </div>

        {/* Phone */}
        <a href="tel:01756036003" style={{ display: "flex", alignItems: "center", gap: "8px", color: GREEN, fontWeight: 700, fontSize: "15px", textDecoration: "none" }}
          className="hidden md:flex">
          <i className="fas fa-phone-alt"></i> 01756036003
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "white", background: "none", border: "none", fontSize: "22px" }}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ backgroundColor: NAV_BG, padding: "12px 40px 20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {[["Dienstleistungen", "services"], ["Ablauf", "process"], ["Preise", "prices"], ["Spezialisten", "specialists"], ["FAQ", "faq"], ["Kontakte", "contact"]].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ display: "block", width: "100%", textAlign: "left", color: "rgba(255,255,255,0.9)", fontSize: "15px", fontWeight: 700, textTransform: "uppercase", padding: "10px 0", background: "none", border: "none", cursor: "pointer" }}>{label}</button>
          ))}
          <a href="tel:01756036003" style={{ display: "flex", alignItems: "center", gap: "8px", color: GREEN, fontWeight: 700, fontSize: "15px", textDecoration: "none", marginTop: "10px" }}>
            <i className="fas fa-phone-alt"></i> 01756036003
          </a>
        </div>
      )}
    </nav>
  );
}

// ---- Hero (Folie 1 Stil) ----
function HeroSection() {
  return (
    <section id="hero" style={{
      position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
      backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center",
      fontFamily: "'Roboto', sans-serif",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(16,42,67,0.93) 0%, rgba(16,42,67,0.78) 60%, rgba(16,42,67,0.5) 100%)" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "100px 40px 60px", width: "100%" }}>
        <div style={{ maxWidth: "680px" }}>
          {/* Orange badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, color: ORANGE, padding: "8px 18px", borderRadius: "4px", fontSize: "14px", fontWeight: 700, marginBottom: "28px", textTransform: "uppercase", letterSpacing: "1px" }}>
            <i className="fas fa-shield-alt"></i> Genauigkeit 98–99% · Zertifiziert
          </div>

          <h1 style={{ color: "white", fontSize: "clamp(2.8rem, 5vw, 4.5rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>
            LÜGENDETEKTOR-TEST<br />
            <span style={{ color: ORANGE }}>IN MÜNCHEN</span>
          </h1>

          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "18px", lineHeight: 1.7, marginBottom: "36px", maxWidth: "540px" }}>
            Professionelle Polygraphuntersuchungen für Privatpersonen und Unternehmen. Diskret, vertraulich und mit offiziell anerkanntem Gutachten.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: ORANGE, color: "white", padding: "14px 32px", borderRadius: "4px", fontWeight: 700, fontSize: "15px", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.5px" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
              <i className="fas fa-calendar-check"></i> Termin vereinbaren
            </a>
            <a href="#services" onClick={e => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "transparent", border: "2px solid rgba(255,255,255,0.6)", color: "white", padding: "14px 32px", borderRadius: "4px", fontWeight: 700, fontSize: "15px", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.5px" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "white"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; e.currentTarget.style.backgroundColor = "transparent"; }}>
              <i className="fas fa-info-circle"></i> Mehr erfahren
            </a>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
            {[{ val: "98–99%", label: "Genauigkeit" }, { val: "20+", label: "Jahre Erfahrung" }, { val: "100%", label: "Vertraulich" }, { val: "ab 649 €", label: "Preise" }].map(s => (
              <div key={s.val}>
                <div style={{ fontSize: "2rem", fontWeight: 700, color: GREEN }}>{s.val}</div>
                <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Section Header (wie in der Präsentation) ----
function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Roboto', sans-serif", marginBottom: "10px" }}>{title}</h2>
      <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_ACCENT, margin: "0 auto 12px" }} />
      {subtitle && <p style={{ color: TEXT_MID, fontSize: "16px", maxWidth: "580px", margin: "0 auto" }}>{subtitle}</p>}
    </div>
  );
}

// ---- Einsatzgebiete (Folie 4 Stil – interaktive Buttons) ----
function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"private" | "business">("private");
  const [openTopic, setOpenTopic] = useState<string | null>(null);
  const topics = activeTab === "private" ? privateTopics : businessTopics;

  return (
    <section id="services" style={{ backgroundColor: SECTION_BG, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
        <SectionHeader title="Einsatzgebiete des Polygraphen" subtitle="Klicken Sie auf ein Thema, um mehr Informationen zu erhalten." />

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "36px" }}>
          {[["private", "fas fa-user-friends", "Privatpersonen"], ["business", "fas fa-building", "Unternehmen"]].map(([tab, icon, label]) => (
            <button key={tab} onClick={() => { setActiveTab(tab as "private" | "business"); setOpenTopic(null); }}
              style={{
                padding: "12px 32px", borderRadius: "4px", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.5px", cursor: "pointer", transition: "all 0.2s",
                backgroundColor: activeTab === tab ? NAVY : WHITE,
                color: activeTab === tab ? "white" : NAVY,
                border: `2px solid ${NAVY}`,
              }}>
              <i className={`${icon} mr-2`}></i>{label}
            </button>
          ))}
        </div>

        {/* Topic Buttons */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))", gap: "16px" }}>
          {topics.map(topic => (
            <div key={topic.id}>
              {/* Button */}
              <button onClick={() => setOpenTopic(openTopic === topic.id ? null : topic.id)}
                style={{
                  width: "100%", textAlign: "left", padding: "20px 24px", borderRadius: "8px", cursor: "pointer", display: "flex", alignItems: "flex-start", gap: "16px", transition: "all 0.2s",
                  backgroundColor: openTopic === topic.id ? NAVY : WHITE,
                  color: openTopic === topic.id ? "white" : NAVY,
                  border: openTopic === topic.id ? `2px solid ${NAVY}` : `2px solid ${BORDER}`,
                  boxShadow: openTopic === topic.id ? "0 8px 25px rgba(16,42,67,0.2)" : "0 2px 8px rgba(0,0,0,0.05)",
                  borderBottomLeftRadius: openTopic === topic.id ? "0" : "8px",
                  borderBottomRightRadius: openTopic === topic.id ? "0" : "8px",
                }}
                onMouseEnter={e => { if (openTopic !== topic.id) { e.currentTarget.style.borderColor = NAVY; e.currentTarget.style.boxShadow = "0 4px 15px rgba(16,42,67,0.12)"; } }}
                onMouseLeave={e => { if (openTopic !== topic.id) { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)"; } }}
              >
                {/* Icon */}
                <div style={{
                  width: "46px", height: "46px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  backgroundColor: openTopic === topic.id ? "rgba(72,187,120,0.2)" : "#EEF2F7",
                  color: openTopic === topic.id ? GREEN : BLUE_ACCENT,
                  fontSize: "18px",
                }}>
                  <i className={topic.icon}></i>
                </div>
                {/* Text */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>{topic.title}</div>
                  <div style={{ fontSize: "13px", color: openTopic === topic.id ? "rgba(255,255,255,0.75)" : TEXT_MID }}>{topic.short}</div>
                </div>
                {/* Arrow */}
                <i className={`fas fa-chevron-${openTopic === topic.id ? "up" : "down"}`} style={{ color: openTopic === topic.id ? GREEN : "#A0AEC0", marginTop: "4px", flexShrink: 0 }}></i>
              </button>

              {/* Detail Panel */}
              {openTopic === topic.id && (
                <div style={{
                  backgroundColor: "#EEF2F7", border: `2px solid ${NAVY}`, borderTop: "none",
                  borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px",
                  padding: "24px",
                }}>
                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap" }}>
                    {topic.image && (
                      <img src={topic.image} alt={topic.title} style={{ width: "180px", height: "130px", objectFit: "cover", borderRadius: "6px", flexShrink: 0 }} />
                    )}
                    <div style={{ flex: 1, minWidth: "200px" }}>
                      <p style={{ color: TEXT_DARK, fontSize: "15px", lineHeight: 1.7, marginBottom: "16px" }}>{topic.details}</p>
                      <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                        style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: ORANGE, color: "white", padding: "10px 22px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", textDecoration: "none", textTransform: "uppercase" }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
                        <i className="fas fa-calendar-check"></i> Jetzt Termin vereinbaren
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Ablauf (Folie 3 Stil) ----
function ProcessSection() {
  return (
    <section id="process" style={{ backgroundColor: NAVY, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ color: "white", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>Wie läuft die Prüfung ab?</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: GREEN, margin: "0 auto" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "48px" }}>
          {processSteps.map((step, i) => (
            <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "28px" }}>
              <div style={{ fontSize: "3rem", fontWeight: 700, color: "rgba(72,187,120,0.3)", lineHeight: 1, marginBottom: "12px" }}>{step.num}</div>
              <h3 style={{ color: "white", fontWeight: 700, fontSize: "17px", marginBottom: "8px" }}>{step.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", borderRadius: "10px", overflow: "hidden", maxWidth: "700px", width: "100%" }}>
            <img src={POLYGRAPH_TEST_IMG} alt="Polygraphtest" style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(16,42,67,0.85) 0%, transparent 60%)" }} />
            <div style={{ position: "absolute", bottom: "20px", left: "24px", right: "24px" }}>
              <p style={{ color: "white", fontWeight: 700, fontSize: "17px" }}>Professionelle Untersuchung in angenehmer Atmosphäre</p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>München, Marienstr. 4, 80331</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Preise (Folie 7 Stil) ----
function PricesSection() {
  return (
    <section id="prices" style={{ backgroundColor: SECTION_BG, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
        <SectionHeader title="Die Investition in Klarheit" subtitle="Transparente Preisgestaltung – keine versteckten Kosten." />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", maxWidth: "900px", margin: "0 auto" }}>
          {[
            { title: "Basis", price: "ab 649 €", desc: "Standarduntersuchung für Privatpersonen", features: ["Vorgespräch", "Polygraphtest (1–2 Std.)", "Mündliche Auswertung", "Schriftliches Gutachten"], highlight: false },
            { title: "Professional", price: "auf Anfrage", desc: "Umfassende Untersuchung für komplexe Fälle", features: ["Ausführliches Vorgespräch", "Polygraphtest (2–3 Std.)", "Detaillierte Auswertung", "Offizielles Gutachten", "Nachberatung"], highlight: true },
            { title: "Business", price: "auf Anfrage", desc: "Maßgeschneiderte Lösungen für Unternehmen", features: ["Beratungsgespräch", "Mehrere Probanden möglich", "Vertraulicher Bericht", "Rechtssicheres Gutachten", "Folgebetreuung"], highlight: false },
          ].map(pkg => (
            <div key={pkg.title} style={{
              backgroundColor: pkg.highlight ? NAVY : WHITE,
              border: pkg.highlight ? `2px solid ${GREEN}` : `2px solid ${BORDER}`,
              borderRadius: "8px", padding: "36px 28px",
              boxShadow: pkg.highlight ? "0 12px 30px rgba(16,42,67,0.2)" : "0 4px 12px rgba(0,0,0,0.05)",
              transform: pkg.highlight ? "scale(1.03)" : "scale(1)",
              display: "flex", flexDirection: "column",
            }}>
              {pkg.highlight && (
                <div style={{ textAlign: "center", marginBottom: "12px" }}>
                  <span style={{ backgroundColor: GREEN, color: "white", padding: "4px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>Empfohlen</span>
                </div>
              )}
              <h3 style={{ color: pkg.highlight ? "white" : NAVY, fontWeight: 700, fontSize: "22px", marginBottom: "6px" }}>{pkg.title}</h3>
              <div style={{ color: ORANGE, fontSize: "2.2rem", fontWeight: 700, marginBottom: "6px" }}>{pkg.price}</div>
              <p style={{ color: pkg.highlight ? "rgba(255,255,255,0.65)" : TEXT_MID, fontSize: "13px", marginBottom: "20px" }}>{pkg.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "24px", flex: 1 }}>
                {pkg.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", color: pkg.highlight ? "rgba(255,255,255,0.85)" : TEXT_DARK, fontSize: "14px", marginBottom: "10px" }}>
                    <i className="fas fa-check-circle" style={{ color: GREEN, flexShrink: 0 }}></i>{f}
                  </li>
                ))}
              </ul>
              <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  display: "block", textAlign: "center", padding: "12px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.5px", textDecoration: "none", transition: "all 0.2s",
                  backgroundColor: pkg.highlight ? ORANGE : "transparent",
                  color: pkg.highlight ? "white" : NAVY,
                  border: pkg.highlight ? "none" : `2px solid ${NAVY}`,
                }}
                onMouseEnter={e => { if (pkg.highlight) e.currentTarget.style.backgroundColor = "#e07b00"; else { e.currentTarget.style.backgroundColor = NAVY; e.currentTarget.style.color = "white"; } }}
                onMouseLeave={e => { if (pkg.highlight) e.currentTarget.style.backgroundColor = ORANGE; else { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = NAVY; } }}
              >Anfragen</a>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: "24px", fontSize: "13px", color: TEXT_MID }}>
          <i className="fas fa-lock mr-2" style={{ color: GREEN }}></i>Alle Informationen werden streng vertraulich behandelt.
        </p>
      </div>
    </section>
  );
}

// ---- Spezialisten (slide_specialists Stil) ----
function SpecialistsSection() {
  return (
    <section id="specialists" style={{ backgroundColor: WHITE, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
        <SectionHeader title="Unsere Spezialisten" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", maxWidth: "800px", margin: "0 auto" }}>
          {[
            { name: "Dimitri", role: "Polygraphologe", exp: "20 Jahre Erfahrung", desc: "Zertifizierter Polygraphologe mit über 20 Jahren Berufserfahrung. Spezialist für komplexe Untersuchungen im privaten und unternehmerischen Bereich.", icon: "fas fa-user-tie" },
            { name: "Tatjana Neubauer", role: "Psychologin", exp: "23 Jahre Erfahrung", desc: "Diplompsychologin mit 23 Jahren Erfahrung in der forensischen Psychologie. Spezialisiert auf die psychologische Vorbereitung und Nachbetreuung der Probanden.", icon: "fas fa-user-graduate" },
          ].map(s => (
            <div key={s.name} style={{ backgroundColor: SECTION_BG, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "36px 28px", textAlign: "center" }}>
              <div style={{ width: "90px", height: "90px", borderRadius: "50%", backgroundColor: NAVY, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <i className={`${s.icon}`} style={{ fontSize: "36px", color: ORANGE }}></i>
              </div>
              <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "22px", marginBottom: "4px" }}>{s.name}</h3>
              <p style={{ color: BLUE_ACCENT, fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>{s.role}</p>
              <p style={{ color: GREEN, fontWeight: 700, fontSize: "13px", marginBottom: "14px" }}>
                <i className="fas fa-award mr-1"></i>{s.exp}
              </p>
              <p style={{ color: TEXT_MID, fontSize: "14px", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- FAQ ----
function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faq" style={{ backgroundColor: SECTION_BG, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
        <SectionHeader title="Häufig gestellte Fragen" />
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faqItems.map((item, i) => (
            <div key={i} style={{ backgroundColor: WHITE, border: `1px solid ${BORDER}`, borderRadius: "6px", marginBottom: "10px", overflow: "hidden" }}>
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{ width: "100%", textAlign: "left", padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", background: "none", border: "none", cursor: "pointer" }}>
                <span style={{ fontWeight: 700, fontSize: "15px", color: NAVY }}>{item.q}</span>
                <i className={`fas fa-chevron-${openIdx === i ? "up" : "down"}`} style={{ color: BLUE_ACCENT, flexShrink: 0 }}></i>
              </button>
              {openIdx === i && (
                <div style={{ padding: "0 24px 18px", borderTop: `1px solid ${BORDER}` }}>
                  <p style={{ color: TEXT_DARK, fontSize: "14px", lineHeight: 1.7, paddingTop: "14px" }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Kontakt ----
function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" style={{ backgroundColor: NAVY, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ color: "white", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>Kontakt aufnehmen</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: GREEN, margin: "0 auto 14px" }} />
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px" }}>Kostenlose und unverbindliche Erstberatung</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", maxWidth: "900px", margin: "0 auto" }} className="grid-cols-contact">
          {/* Info */}
          <div>
            <h3 style={{ color: "white", fontWeight: 700, fontSize: "18px", marginBottom: "28px" }}>Kontaktinformationen</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { icon: "fas fa-map-marker-alt", label: "Adresse", val: "Marienstr. 4, 80331 München", href: undefined },
                { icon: "fas fa-phone-alt", label: "Telefon", val: "01756036003", href: "tel:01756036003" },
                { icon: "fas fa-envelope", label: "E-Mail", val: "detektsiya@yandex.ru", href: "mailto:detektsiya@yandex.ru" },
                { icon: "fab fa-whatsapp", label: "WhatsApp", val: "+49 175 6036003", href: "https://wa.me/491756036003" },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(72,187,120,0.15)", color: GREEN, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={c.icon}></i>
                  </div>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "3px" }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} style={{ color: "white", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}
                        onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
                        onMouseLeave={e => (e.currentTarget.style.color = "white")}>{c.val}</a>
                    ) : (
                      <span style={{ color: "white", fontWeight: 700, fontSize: "15px" }}>{c.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "28px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "18px" }}>
              <p style={{ color: GREEN, fontWeight: 700, fontSize: "13px", marginBottom: "6px" }}>
                <i className="fas fa-shield-alt mr-2"></i>Absolute Vertraulichkeit
              </p>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", lineHeight: 1.6 }}>Alle Informationen werden streng vertraulich behandelt und nicht an Dritte weitergegeben.</p>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "40px" }}>
                <i className="fas fa-check-circle" style={{ fontSize: "48px", color: GREEN, marginBottom: "16px" }}></i>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "20px", marginBottom: "10px" }}>Vielen Dank!</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>Wir melden uns schnellstmöglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { name: "name", label: "Ihr Name", type: "text", placeholder: "Max Mustermann", required: true },
                  { name: "phone", label: "Telefonnummer", type: "tel", placeholder: "+49 ...", required: false },
                  { name: "email", label: "E-Mail-Adresse", type: "email", placeholder: "ihre@email.de", required: true },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: "13px", fontWeight: 700, marginBottom: "6px" }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} required={f.required}
                      value={form[f.name as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.name]: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", fontSize: "14px", outline: "none", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
                      onFocus={e => (e.currentTarget.style.borderColor = GREEN)}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")} />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: "13px", fontWeight: 700, marginBottom: "6px" }}>Ihre Nachricht</label>
                  <textarea rows={4} placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "4px", fontSize: "14px", outline: "none", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "white", resize: "none" }}
                    onFocus={e => (e.currentTarget.style.borderColor = GREEN)}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")} />
                </div>
                <button type="submit"
                  style={{ padding: "14px", borderRadius: "4px", backgroundColor: ORANGE, color: "white", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.5px", border: "none", cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
                  <i className="fas fa-paper-plane mr-2"></i>Anfrage senden
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Footer (wie in der Präsentation) ----
function Footer() {
  return (
    <footer style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid #E2E8F0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "16px 40px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={LOGO} alt="POLYGRAPH" style={{ width: "32px", height: "32px", borderRadius: "50%" }} />
          <span style={{ color: NAVY, fontWeight: 700, fontSize: "16px" }}>POLYGRAPH</span>
          <span style={{ color: "#A0AEC0", fontSize: "13px" }}>· lügendetektortest.com</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["AGB", "Datenschutz", "Geschäftsbedingungen", "Cookies Zustimmung"].map(l => (
            <button key={l} style={{ backgroundColor: WHITE, border: `1px solid #CBD5E0`, color: "#4A5568", padding: "6px 12px", borderRadius: "4px", fontSize: "13px", fontWeight: 700, cursor: "pointer", textTransform: "uppercase" }}>
              {l === "AGB" && <i className="fas fa-file-contract mr-1"></i>}
              {l === "Datenschutz" && <i className="fas fa-user-shield mr-1"></i>}
              {l === "Geschäftsbedingungen" && <i className="fas fa-balance-scale mr-1"></i>}
              {l === "Cookies Zustimmung" && <i className="fas fa-cookie-bite mr-1"></i>}
              {l}
            </button>
          ))}
        </div>
        <div style={{ color: "#A0AEC0", fontSize: "12px" }}>© 2026 POLYGRAPH München</div>
      </div>
    </footer>
  );
}

// ---- Floating Widget (wie in der Präsentation) ----
function FloatingWidget() {
  return (
    <div style={{ position: "fixed", bottom: "80px", right: "30px", display: "flex", flexDirection: "column", gap: "15px", zIndex: 1000 }}>
      <a href="https://wa.me/491756036003" target="_blank" rel="noopener noreferrer"
        style={{ width: "60px", height: "60px", backgroundColor: "#25D366", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "30px", textDecoration: "none", boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="mailto:detektsiya@yandex.ru"
        style={{ width: "60px", height: "60px", backgroundColor: ORANGE, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "24px", textDecoration: "none", boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
}

// ---- Main ----
export default function Home() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PricesSection />
      <SpecialistsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingWidget />
    </div>
  );
}
