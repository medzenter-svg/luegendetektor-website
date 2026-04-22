import { useState, useEffect } from "react";

// ============================================================
// POLYGRAPH – lügendetektortest.com
// Design: "Vertrauen durch Eleganz" – Navy + Cream + Gold
// Fonts: Playfair Display (Headlines) + Lato (Body)
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
  { num: "04", title: "Durchführung", desc: "Die Untersuchung dauert ca. 2-3 Stunden und wird in angenehmer Atmosphäre durchgeführt." },
  { num: "05", title: "Auswertung", desc: "Die Ergebnisse werden von unserem Experten sorgfältig analysiert und interpretiert." },
  { num: "06", title: "Gutachten", desc: "Sie erhalten ein offizielles schriftliches Gutachten mit den Ergebnissen der Untersuchung." },
];

const faqItems = [
  { q: "Wie genau ist ein Polygraphtest?", a: "Moderne Polygraphtests erreichen eine Genauigkeit von 98-99%, wenn sie von zertifizierten Experten durchgeführt werden. Unsere Spezialisten verfügen über jahrzehntelange Erfahrung und nutzen modernste Geräte." },
  { q: "Ist der Test legal?", a: "Ja, Polygraphtests sind in Deutschland legal, wenn die Teilnahme freiwillig ist. Das Ergebnis kann als Beweismittel in Zivilverfahren verwendet werden." },
  { q: "Wie lange dauert der Test?", a: "Eine vollständige Untersuchung dauert in der Regel 2-3 Stunden, einschließlich Vorgespräch, eigentlichem Test und Auswertung." },
  { q: "Kann man den Test manipulieren?", a: "Moderne Polygraphtechnologie erkennt Versuche, den Test zu manipulieren. Unsere Experten sind geschult, solche Versuche zu identifizieren." },
  { q: "Wie diskret ist die Untersuchung?", a: "Absolute Vertraulichkeit ist unser oberstes Gebot. Alle Informationen werden streng vertraulich behandelt und nicht an Dritte weitergegeben." },
  { q: "Was kostet ein Polygraphtest?", a: "Die Kosten beginnen ab 649 € und hängen von der Komplexität des Falls ab. Wir beraten Sie gerne kostenlos über die Kosten für Ihren spezifischen Fall." },
];

// ---- Components ----

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(16,42,67,0.98)" : "rgba(16,42,67,0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="POLYGRAPH Logo" className="w-9 h-9 rounded-full object-cover" />
            <span style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: "22px", fontWeight: 700, letterSpacing: "2px" }}>
              POLYGRAPH
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              ["Dienstleistungen", "services"],
              ["Ablauf", "process"],
              ["Preise", "prices"],
              ["Spezialisten", "specialists"],
              ["FAQ", "faq"],
              ["Kontakt", "contact"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm font-bold uppercase tracking-wider transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.85)", letterSpacing: "1px" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Phone */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="tel:01756036003"
              className="flex items-center gap-2 px-4 py-2 rounded font-bold text-sm transition-all duration-200"
              style={{ backgroundColor: "#48BB78", color: "white" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#38A169")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#48BB78")}
            >
              <i className="fas fa-phone-alt"></i> 01756036003
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {[
              ["Dienstleistungen", "services"],
              ["Ablauf", "process"],
              ["Preise", "prices"],
              ["Spezialisten", "specialists"],
              ["FAQ", "faq"],
              ["Kontakt", "contact"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left py-2 px-4 text-sm font-bold uppercase tracking-wider"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {label}
              </button>
            ))}
            <a href="tel:01756036003" className="flex items-center gap-2 px-4 py-2 rounded font-bold text-sm w-fit" style={{ backgroundColor: "#48BB78", color: "white" }}>
              <i className="fas fa-phone-alt"></i> 01756036003
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(16,42,67,0.92) 0%, rgba(16,42,67,0.75) 60%, rgba(16,42,67,0.5) 100%)" }} />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
            style={{ backgroundColor: "rgba(201,168,76,0.2)", border: "1px solid #C9A84C", color: "#C9A84C" }}
          >
            <i className="fas fa-shield-alt"></i> Genauigkeit 98–99% · Zertifiziert · Diskret
          </div>

          <h1
            className="text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900 }}
          >
            Lügendetektor-Test
            <br />
            <span style={{ color: "#C9A84C" }}>in München</span>
          </h1>

          <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "560px" }}>
            Professionelle Polygraphuntersuchungen für Privatpersonen und Unternehmen. Diskret, vertraulich und mit offiziell anerkanntem Gutachten.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-4 rounded font-bold text-base transition-all duration-200 inline-flex items-center gap-2"
              style={{ backgroundColor: "#C9A84C", color: "#102A43" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b8943e")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A84C")}
            >
              <i className="fas fa-calendar-check"></i> Termin vereinbaren
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-4 rounded font-bold text-base transition-all duration-200 inline-flex items-center gap-2"
              style={{ backgroundColor: "transparent", border: "2px solid rgba(255,255,255,0.6)", color: "white" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "white"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; e.currentTarget.style.backgroundColor = "transparent"; }}
            >
              <i className="fas fa-info-circle"></i> Mehr erfahren
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}>
            {[
              { val: "98–99%", label: "Genauigkeit" },
              { val: "20+", label: "Jahre Erfahrung" },
              { val: "100%", label: "Vertraulich" },
              { val: "ab 649 €", label: "Preise" },
            ].map((s) => (
              <div key={s.val}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#C9A84C" }}>{s.val}</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.5)" }}>
        <span style={{ fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase" }}>Scrollen</span>
        <i className="fas fa-chevron-down animate-bounce"></i>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"private" | "business">("private");
  const [openTopic, setOpenTopic] = useState<string | null>(null);

  const topics = activeTab === "private" ? privateTopics : businessTopics;

  return (
    <section id="services" className="py-24" style={{ backgroundColor: "#F9F7F4" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#C9A84C" }}>Einsatzgebiete</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#102A43", fontWeight: 700 }}>
            Wann ist ein Polygraphtest sinnvoll?
          </h2>
          <div className="gold-divider mt-4" />
          <p className="mt-4 text-lg" style={{ color: "#4A5568", maxWidth: "600px", margin: "1rem auto 0" }}>
            Klicken Sie auf ein Thema, um mehr Informationen zu erhalten.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => { setActiveTab("private"); setOpenTopic(null); }}
            className="px-8 py-3 rounded font-bold text-sm uppercase tracking-wider transition-all duration-200"
            style={{
              backgroundColor: activeTab === "private" ? "#102A43" : "transparent",
              color: activeTab === "private" ? "white" : "#102A43",
              border: "2px solid #102A43",
            }}
          >
            <i className="fas fa-user-friends mr-2"></i> Privatpersonen
          </button>
          <button
            onClick={() => { setActiveTab("business"); setOpenTopic(null); }}
            className="px-8 py-3 rounded font-bold text-sm uppercase tracking-wider transition-all duration-200"
            style={{
              backgroundColor: activeTab === "business" ? "#102A43" : "transparent",
              color: activeTab === "business" ? "white" : "#102A43",
              border: "2px solid #102A43",
            }}
          >
            <i className="fas fa-building mr-2"></i> Unternehmen
          </button>
        </div>

        {/* Topic Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {topics.map((topic) => (
            <div key={topic.id}>
              {/* Button */}
              <button
                onClick={() => setOpenTopic(openTopic === topic.id ? null : topic.id)}
                className="w-full text-left p-5 rounded-lg transition-all duration-200 flex items-start gap-4"
                style={{
                  backgroundColor: openTopic === topic.id ? "#102A43" : "white",
                  color: openTopic === topic.id ? "white" : "#102A43",
                  border: openTopic === topic.id ? "2px solid #102A43" : "2px solid #E2E8F0",
                  boxShadow: openTopic === topic.id ? "0 8px 25px rgba(16,42,67,0.2)" : "0 2px 8px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  if (openTopic !== topic.id) {
                    e.currentTarget.style.borderColor = "#102A43";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(16,42,67,0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (openTopic !== topic.id) {
                    e.currentTarget.style.borderColor = "#E2E8F0";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                  }
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: openTopic === topic.id ? "rgba(201,168,76,0.2)" : "#EEF2F7",
                    color: openTopic === topic.id ? "#C9A84C" : "#102A43",
                  }}
                >
                  <i className={`${topic.icon} text-lg`}></i>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-base mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{topic.title}</div>
                  <div className="text-sm" style={{ color: openTopic === topic.id ? "rgba(255,255,255,0.8)" : "#718096" }}>{topic.short}</div>
                </div>
                <div className="flex-shrink-0 mt-1">
                  <i className={`fas fa-chevron-${openTopic === topic.id ? "up" : "down"} text-sm`} style={{ color: openTopic === topic.id ? "#C9A84C" : "#A0AEC0" }}></i>
                </div>
              </button>

              {/* Expanded Detail */}
              {openTopic === topic.id && (
                <div
                  className="rounded-b-lg p-6 -mt-1"
                  style={{ backgroundColor: "#F0F4F8", border: "2px solid #102A43", borderTop: "none" }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {topic.image && (
                      <img
                        src={topic.image}
                        alt={topic.title}
                        className="rounded-lg object-cover flex-shrink-0"
                        style={{ width: "180px", height: "130px" }}
                      />
                    )}
                    <div>
                      <p className="text-base leading-relaxed mb-4" style={{ color: "#334E68" }}>{topic.details}</p>
                      <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded font-bold text-sm transition-all duration-200"
                        style={{ backgroundColor: "#C9A84C", color: "#102A43" }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b8943e")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A84C")}
                      >
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

function ProcessSection() {
  return (
    <section id="process" className="py-24" style={{ backgroundColor: "#102A43" }}>
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#C9A84C" }}>Ablauf</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", fontWeight: 700 }}>
            Wie läuft die Prüfung ab?
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-lg relative"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className="text-5xl font-black mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: "rgba(201,168,76,0.25)", lineHeight: 1 }}
              >
                {step.num}
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "white", fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="mt-14 flex justify-center">
          <div className="relative rounded-xl overflow-hidden" style={{ maxWidth: "700px", width: "100%" }}>
            <img src={POLYGRAPH_TEST_IMG} alt="Polygraphtest Durchführung" className="w-full object-cover" style={{ height: "320px" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(16,42,67,0.8) 0%, transparent 60%)" }} />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Professionelle Untersuchung in angenehmer Atmosphäre</p>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem" }}>München, Marienstr. 4, 80331</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricesSection() {
  return (
    <section id="prices" className="py-24" style={{ backgroundColor: "#F9F7F4" }}>
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#C9A84C" }}>Preise</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#102A43", fontWeight: 700 }}>
            Transparente Preisgestaltung
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Basis",
                price: "ab 649 €",
                desc: "Standarduntersuchung für Privatpersonen",
                features: ["Vorgespräch", "Polygraphtest (1-2 Std.)", "Mündliche Auswertung", "Schriftliches Gutachten"],
                highlight: false,
              },
              {
                title: "Professional",
                price: "auf Anfrage",
                desc: "Umfassende Untersuchung für komplexe Fälle",
                features: ["Ausführliches Vorgespräch", "Polygraphtest (2-3 Std.)", "Detaillierte Auswertung", "Offizielles Gutachten", "Nachberatung"],
                highlight: true,
              },
              {
                title: "Business",
                price: "auf Anfrage",
                desc: "Maßgeschneiderte Lösungen für Unternehmen",
                features: ["Beratungsgespräch", "Mehrere Probanden möglich", "Vertraulicher Bericht", "Rechtssicheres Gutachten", "Folgebetreuung"],
                highlight: false,
              },
            ].map((pkg) => (
              <div
                key={pkg.title}
                className="rounded-xl p-8 flex flex-col"
                style={{
                  backgroundColor: pkg.highlight ? "#102A43" : "white",
                  border: pkg.highlight ? "2px solid #C9A84C" : "2px solid #E2E8F0",
                  boxShadow: pkg.highlight ? "0 20px 40px rgba(16,42,67,0.2)" : "0 4px 12px rgba(0,0,0,0.05)",
                  transform: pkg.highlight ? "scale(1.03)" : "scale(1)",
                }}
              >
                {pkg.highlight && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: "#C9A84C", color: "#102A43" }}>
                      Empfohlen
                    </span>
                  </div>
                )}
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: pkg.highlight ? "white" : "#102A43", marginBottom: "0.5rem" }}>{pkg.title}</h3>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 900, color: "#C9A84C", marginBottom: "0.5rem" }}>{pkg.price}</div>
                <p className="text-sm mb-6" style={{ color: pkg.highlight ? "rgba(255,255,255,0.7)" : "#718096" }}>{pkg.desc}</p>
                <ul className="flex-1 space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm" style={{ color: pkg.highlight ? "rgba(255,255,255,0.85)" : "#4A5568" }}>
                      <i className="fas fa-check-circle" style={{ color: "#48BB78", flexShrink: 0 }}></i>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="block text-center py-3 rounded font-bold text-sm uppercase tracking-wider transition-all duration-200"
                  style={{
                    backgroundColor: pkg.highlight ? "#C9A84C" : "transparent",
                    color: pkg.highlight ? "#102A43" : "#102A43",
                    border: pkg.highlight ? "none" : "2px solid #102A43",
                  }}
                  onMouseEnter={(e) => {
                    if (pkg.highlight) e.currentTarget.style.backgroundColor = "#b8943e";
                    else e.currentTarget.style.backgroundColor = "#102A43", e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    if (pkg.highlight) e.currentTarget.style.backgroundColor = "#C9A84C";
                    else e.currentTarget.style.backgroundColor = "transparent", e.currentTarget.style.color = "#102A43";
                  }}
                >
                  Anfragen
                </a>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm" style={{ color: "#718096" }}>
            <i className="fas fa-info-circle mr-2" style={{ color: "#C9A84C" }}></i>
            Alle Preise auf Anfrage. Kostenlose Erstberatung per Telefon oder E-Mail.
          </p>
        </div>
      </div>
    </section>
  );
}

function SpecialistsSection() {
  return (
    <section id="specialists" className="py-24" style={{ backgroundColor: "white" }}>
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#C9A84C" }}>Unser Team</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#102A43", fontWeight: 700 }}>
            Unsere Spezialisten
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {[
            {
              name: "Dimitri",
              role: "Polygraphologe",
              exp: "20 Jahre Erfahrung",
              desc: "Zertifizierter Polygraphologe mit über 20 Jahren Berufserfahrung. Spezialist für komplexe Untersuchungen im privaten und unternehmerischen Bereich.",
              icon: "fas fa-user-tie",
            },
            {
              name: "Tatjana Neubauer",
              role: "Psychologin",
              exp: "23 Jahre Erfahrung",
              desc: "Diplompsychologin mit 23 Jahren Erfahrung in der forensischen Psychologie. Spezialisiert auf die psychologische Vorbereitung und Nachbetreuung der Probanden.",
              icon: "fas fa-user-graduate",
            },
          ].map((s) => (
            <div
              key={s.name}
              className="p-8 rounded-xl flex flex-col items-center text-center"
              style={{ backgroundColor: "#F9F7F4", border: "1px solid #E2E8F0" }}
            >
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mb-5"
                style={{ backgroundColor: "#102A43" }}
              >
                <i className={`${s.icon} text-4xl`} style={{ color: "#C9A84C" }}></i>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "#102A43", marginBottom: "0.25rem" }}>{s.name}</h3>
              <p className="font-bold text-sm uppercase tracking-wider mb-1" style={{ color: "#C9A84C" }}>{s.role}</p>
              <p className="text-sm mb-4" style={{ color: "#48BB78", fontWeight: 700 }}>
                <i className="fas fa-award mr-1"></i> {s.exp}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "#F9F7F4" }}>
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#C9A84C" }}>FAQ</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#102A43", fontWeight: 700 }}>
            Häufig gestellte Fragen
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden"
              style={{ border: "1px solid #E2E8F0", backgroundColor: "white" }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              >
                <span className="font-bold text-base" style={{ color: "#102A43", fontFamily: "'Playfair Display', serif" }}>{item.q}</span>
                <i
                  className={`fas fa-chevron-${openIdx === i ? "up" : "down"} flex-shrink-0`}
                  style={{ color: "#C9A84C" }}
                ></i>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5">
                  <div style={{ height: "1px", backgroundColor: "#E2E8F0", marginBottom: "1rem" }} />
                  <p className="text-base leading-relaxed" style={{ color: "#4A5568" }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "#102A43" }}>
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#C9A84C" }}>Kontakt</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", fontWeight: 700 }}>
            Termin vereinbaren
          </h2>
          <div className="gold-divider mt-4" />
          <p className="mt-4" style={{ color: "rgba(255,255,255,0.7)", maxWidth: "500px", margin: "1rem auto 0" }}>
            Kontaktieren Sie uns für eine kostenlose und unverbindliche Erstberatung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem" }}>
              Kontaktinformationen
            </h3>
            <div className="space-y-6">
              {[
                { icon: "fas fa-map-marker-alt", label: "Adresse", val: "Marienstr. 4, 80331 München" },
                { icon: "fas fa-phone-alt", label: "Telefon", val: "01756036003", href: "tel:01756036003" },
                { icon: "fas fa-envelope", label: "E-Mail", val: "detektsiya@yandex.ru", href: "mailto:detektsiya@yandex.ru" },
                { icon: "fab fa-whatsapp", label: "WhatsApp", val: "+49 175 6036003", href: "https://wa.me/491756036003" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>
                    <i className={c.icon}></i>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="font-bold" style={{ color: "white" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")} onMouseLeave={(e) => (e.currentTarget.style.color = "white")}>{c.val}</a>
                    ) : (
                      <span className="font-bold" style={{ color: "white" }}>{c.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#C9A84C" }}>
                <i className="fas fa-shield-alt mr-2"></i> Absolute Vertraulichkeit
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                Alle Informationen werden streng vertraulich behandelt. Ihre Daten werden nicht an Dritte weitergegeben.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-10 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <i className="fas fa-check-circle text-5xl mb-4" style={{ color: "#48BB78" }}></i>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Vielen Dank!</h3>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Wir werden uns schnellstmöglich bei Ihnen melden.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", label: "Ihr Name", type: "text", placeholder: "Max Mustermann", required: true },
                  { name: "phone", label: "Telefonnummer", type: "tel", placeholder: "+49 ...", required: false },
                  { name: "email", label: "E-Mail-Adresse", type: "email", placeholder: "ihre@email.de", required: true },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-bold mb-2" style={{ color: "rgba(255,255,255,0.8)" }}>{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      required={f.required}
                      value={form[f.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "white",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A84C")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: "rgba(255,255,255,0.8)" }}>Ihre Nachricht</label>
                  <textarea
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "white",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A84C")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-lg font-bold text-base uppercase tracking-wider transition-all duration-200"
                  style={{ backgroundColor: "#C9A84C", color: "#102A43" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b8943e")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A84C")}
                >
                  <i className="fas fa-paper-plane mr-2"></i> Anfrage senden
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A1929", color: "rgba(255,255,255,0.6)" }}>
      <div className="container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="POLYGRAPH" className="w-8 h-8 rounded-full" />
            <span style={{ fontFamily: "'Playfair Display', serif", color: "white", fontWeight: 700, fontSize: "1.1rem" }}>POLYGRAPH</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["AGB", "Datenschutz", "Impressum", "Cookies"].map((l) => (
              <a key={l} href="#" className="transition-colors duration-200" style={{ color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >{l}</a>
            ))}
          </div>
          <div className="text-sm text-center" style={{ color: "rgba(255,255,255,0.4)" }}>
            © 2026 POLYGRAPH · lügendetektortest.com
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWidget() {
  return (
    <div className="fixed bottom-8 right-6 flex flex-col gap-3 z-50">
      <a
        href="https://wa.me/491756036003"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl transition-all duration-200"
        style={{ backgroundColor: "#25D366", boxShadow: "0 4px 15px rgba(37,211,102,0.4)" }}
        title="WhatsApp"
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a
        href="mailto:detektsiya@yandex.ru"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl transition-all duration-200"
        style={{ backgroundColor: "#FF8C00", boxShadow: "0 4px 15px rgba(255,140,0,0.4)" }}
        title="E-Mail"
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      >
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
}

// ---- Main Page ----

export default function Home() {
  return (
    <div className="min-h-screen">
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
