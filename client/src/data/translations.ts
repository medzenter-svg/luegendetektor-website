// ============================================================
// TRANSLATIONS – DE / EN
// ============================================================

export type Lang = "de" | "en";

export const t = {
  // ── NAVBAR ──
  nav: {
    services:   { de: "DIENSTLEISTUNGEN", en: "SERVICES" },
    prices:     { de: "PREISE",           en: "PRICES" },
    about:      { de: "ÜBER UNS",         en: "ABOUT US" },
    equipment:  { de: "AUSRÜSTUNG",       en: "EQUIPMENT" },
    contact:    { de: "KONTAKTE",         en: "CONTACTS" },
    cta:        { de: "KONTAKTIEREN SIE UNS", en: "CONTACT US" },
  },

  // ── HERO ──
  hero: {
    title1:     { de: "LÜGENDETEKTOR-TEST", en: "LIE DETECTOR TEST" },
    title2:     { de: "IN MÜNCHEN",         en: "IN MUNICH" },
    subtitle:   { de: "Premium-Prüfung zum fairen Preis", en: "Premium examination at a fair price" },
    accuracy:   { de: "GENAUIGKEIT 98–99%", en: "ACCURACY 98–99%" },
    anon:       { de: "100% anonym, vertraulich und ohne Weitergabe von Anfragedetails", en: "100% anonymous, confidential and without disclosure of inquiry details" },
    badge1:     { de: "Absolute Vertraulichkeit", en: "Absolute Confidentiality" },
    badge2:     { de: "Erfahrene Experten",       en: "Experienced Experts" },
    badge3:     { de: "Moderne Ausrüstung",       en: "Modern Equipment" },
    btnRequest: { de: "JETZT ANFRAGEN",           en: "REQUEST NOW" },
    btnPhone:   { de: "+49 175 6036003",          en: "+49 175 6036003" },
  },

  // ── STATS ──
  stats: {
    s1v: { de: "98–99%", en: "98–99%" },
    s1l: { de: "Genauigkeit", en: "Accuracy" },
    s2v: { de: "15+",    en: "15+" },
    s2l: { de: "Jahre Erfahrung", en: "Years of Experience" },
    s3v: { de: "2.000+", en: "2,000+" },
    s3l: { de: "Abgeschlossene Tests", en: "Completed Tests" },
    s4v: { de: "100%",   en: "100%" },
    s4l: { de: "Vertraulichkeit", en: "Confidentiality" },
  },

  // ── SERVICES SECTION ──
  services: {
    heading:  { de: "UNSERE DIENSTLEISTUNGEN", en: "OUR SERVICES" },
    sub:      { de: "Professionelle Polygraphuntersuchungen für jeden Bedarf", en: "Professional polygraph examinations for every need" },
    tabPriv:  { de: "PRIVAT", en: "PRIVATE" },
    tabBiz:   { de: "GESCHÄFTLICH", en: "BUSINESS" },
    btnBook:  { de: "Termin buchen", en: "Book appointment" },
    btnMore:  { de: "Mehr erfahren", en: "Learn more" },
    from:     { de: "ab",           en: "from" },
  },

  // ── ABOUT ──
  about: {
    heading:  { de: "ÜBER UNS", en: "ABOUT US" },
    sub:      { de: "Ihr vertrauenswürdiger Partner für Polygraphuntersuchungen", en: "Your trusted partner for polygraph examinations" },
    p1:       { de: "POLYGRAPH München – professionelle Polygraphuntersuchungen für Unternehmen und Privatpersonen.", en: "POLYGRAPH Munich – professional polygraph examinations for businesses and private individuals." },
    p2:       { de: "Unser Team besteht aus zertifizierten Polygraphologen mit über 15 Jahren Erfahrung. Wir verwenden modernste Ausrüstung und wissenschaftlich anerkannte Methoden.", en: "Our team consists of certified polygraphers with over 15 years of experience. We use state-of-the-art equipment and scientifically recognized methods." },
    p3:       { de: "Jede Untersuchung wird streng vertraulich behandelt. Ihre Privatsphäre hat für uns höchste Priorität.", en: "Every examination is treated with strict confidentiality. Your privacy is our highest priority." },
    whyTitle: { de: "Warum POLYGRAPH München?", en: "Why POLYGRAPH Munich?" },
    r1:       { de: "Zertifizierte Experten mit internationaler Ausbildung", en: "Certified experts with international training" },
    r2:       { de: "Modernste Polygraph-Technologie (Lafayette LX6)", en: "State-of-the-art polygraph technology (Lafayette LX6)" },
    r3:       { de: "Streng vertraulich – keine Datenweitergabe", en: "Strictly confidential – no data sharing" },
    r4:       { de: "Flexible Termine, auch am Wochenende", en: "Flexible appointments, including weekends" },
    r5:       { de: "Schriftliches Gutachten mit Rechtsgültigkeit", en: "Written report with legal validity" },
    r6:       { de: "Hausbesuche und mobile Tests möglich", en: "Home visits and mobile tests available" },
  },

  // ── PROCESS ──
  process: {
    heading: { de: "WIE LÄUFT EIN TEST AB?", en: "HOW DOES A TEST WORK?" },
    sub:     { de: "Einfach, diskret und professionell", en: "Simple, discreet and professional" },
    steps: [
      { title: { de: "Erstberatung",       en: "Initial Consultation" }, desc: { de: "Kostenlose telefonische Beratung und Terminvereinbarung", en: "Free telephone consultation and appointment scheduling" } },
      { title: { de: "Vorgespräch",        en: "Pre-Interview" },        desc: { de: "Ausführliche Besprechung der Fragen und des Ablaufs", en: "Detailed discussion of questions and procedure" } },
      { title: { de: "Testdurchführung",   en: "Test Execution" },       desc: { de: "Professionelle Polygraphuntersuchung (60–90 Min.)", en: "Professional polygraph examination (60–90 min.)" } },
      { title: { de: "Auswertung",         en: "Evaluation" },           desc: { de: "Wissenschaftliche Analyse der Messdaten", en: "Scientific analysis of measurement data" } },
      { title: { de: "Ergebnisbericht",    en: "Results Report" },       desc: { de: "Schriftliches Gutachten mit detaillierten Ergebnissen", en: "Written report with detailed results" } },
    ],
  },

  // ── EQUIPMENT ──
  equipment: {
    heading: { de: "UNSERE AUSRÜSTUNG", en: "OUR EQUIPMENT" },
    sub:     { de: "Modernste Polygraph-Technologie für präzise Ergebnisse", en: "State-of-the-art polygraph technology for precise results" },
    mainTitle: { de: "Lafayette LX6 – Professioneller Polygraph", en: "Lafayette LX6 – Professional Polygraph" },
    mainDesc:  { de: "Das Lafayette LX6 ist das weltweit führende Polygraphsystem, das von Strafverfolgungsbehörden und Geheimdiensten eingesetzt wird.", en: "The Lafayette LX6 is the world's leading polygraph system used by law enforcement agencies and intelligence services." },
  },

  // ── SPECIALISTS ──
  specialists: {
    heading: { de: "UNSERE SPEZIALISTEN", en: "OUR SPECIALISTS" },
    sub:     { de: "Zertifizierte Experten mit internationaler Erfahrung", en: "Certified experts with international experience" },
    s1name:  { de: "Dimitri Razarenov", en: "Dimitri Razarenov" },
    s1role:  { de: "Leitender Polygraphologe", en: "Senior Polygrapher" },
    s1desc:  { de: "Zertifizierter Polygraphologe mit über 15 Jahren Erfahrung. Ausgebildet nach internationalen Standards (APA). Spezialist für Unternehmens- und Privatuntersuchungen.", en: "Certified polygrapher with over 15 years of experience. Trained to international standards (APA). Specialist in corporate and private examinations." },
    s2name:  { de: "Tatjana Neubauer", en: "Tatjana Neubauer" },
    s2role:  { de: "Psychologin & Polygraphologin", en: "Psychologist & Polygraphologist" },
    s2desc:  { de: "Diplompsychologin mit Spezialisierung auf Stressanalyse und Verhaltenspsychologie. Unterstützt bei sensiblen Untersuchungen.", en: "Graduate psychologist specializing in stress analysis and behavioral psychology. Supports sensitive examinations." },
  },

  // ── PRICES ──
  prices: {
    heading: { de: "PREISE", en: "PRICES" },
    sub:     { de: "Transparente Preise ohne versteckte Kosten", en: "Transparent prices with no hidden costs" },
    from:    { de: "ab", en: "from" },
    book:    { de: "Jetzt buchen", en: "Book now" },
    note:    { de: "Alle Preise inkl. MwSt. Kostenlose Erstberatung.", en: "All prices incl. VAT. Free initial consultation." },
  },

  // ── FAQ ──
  faq: {
    heading: { de: "HÄUFIGE FRAGEN", en: "FREQUENTLY ASKED QUESTIONS" },
    sub:     { de: "Antworten auf die wichtigsten Fragen", en: "Answers to the most important questions" },
  },

  // ── CONTACT ──
  contact: {
    heading:   { de: "KONTAKT AUFNEHMEN", en: "GET IN TOUCH" },
    sub:       { de: "Kostenlose Erstberatung", en: "Free Initial Consultation" },
    infoTitle: { de: "Kontaktinformationen", en: "Contact Information" },
    address:   { de: "Adresse",        en: "Address" },
    phone:     { de: "Telefon",        en: "Phone" },
    email:     { de: "E-Mail",         en: "Email" },
    whatsapp:  { de: "WhatsApp",       en: "WhatsApp" },
    hours:     { de: "Öffnungszeiten", en: "Opening Hours" },
    hoursVal:  { de: "Täglich 10:00 – 22:00 Uhr", en: "Daily 10:00 – 22:00" },
    hoursSub:  { de: "Termine auch am Wochenende möglich", en: "Appointments also available on weekends" },
    formName:  { de: "Ihr Name *",        en: "Your Name *" },
    formPhone: { de: "Telefonnummer",     en: "Phone Number" },
    formEmail: { de: "E-Mail-Adresse *",  en: "Email Address *" },
    formMsg:   { de: "Ihre Nachricht",    en: "Your Message" },
    formPh1:   { de: "Max Mustermann",    en: "John Smith" },
    formPh2:   { de: "+49 ...",           en: "+49 ..." },
    formPh3:   { de: "ihre@email.de",     en: "your@email.com" },
    formPh4:   { de: "Beschreiben Sie kurz Ihr Anliegen...", en: "Briefly describe your concern..." },
    btnSend:   { de: "Anfrage senden",    en: "Send Request" },
    privacy:   { de: "Ihre Daten werden vertraulich behandelt", en: "Your data will be treated confidentially" },
    thankYou:  { de: "Vielen Dank!",      en: "Thank you!" },
    thankMsg:  { de: "Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.", en: "Your request has been sent successfully. We will get back to you as soon as possible." },
    btnWA:     { de: "WhatsApp",          en: "WhatsApp" },
    btnEmail:  { de: "E-Mail",            en: "Email" },
  },

  // ── FOOTER ──
  footer: {
    desc:    { de: "Professionelle Polygraphuntersuchungen in München. Genau. Zuverlässig. Objektiv.", en: "Professional polygraph examinations in Munich. Precise. Reliable. Objective." },
    navTitle: { de: "Navigation", en: "Navigation" },
    nav: [
      { de: "Dienstleistungen", en: "Services",  id: "services" },
      { de: "Preise",           en: "Prices",    id: "prices" },
      { de: "Über uns",         en: "About us",  id: "about" },
      { de: "Ausrüstung",       en: "Equipment", id: "equipment" },
      { de: "Kontakt",          en: "Contact",   id: "contact" },
    ],
    servTitle: { de: "Dienstleistungen", en: "Services" },
    legalTitle: { de: "Rechtliches",    en: "Legal" },
    copyright: { de: "Alle Rechte vorbehalten.", en: "All rights reserved." },
  },

  // ── CTA BANNER ──
  cta: {
    heading: { de: "BEREIT FÜR DIE WAHRHEIT?", en: "READY FOR THE TRUTH?" },
    sub:     { de: "Kontaktieren Sie uns noch heute für eine kostenlose Erstberatung", en: "Contact us today for a free initial consultation" },
    btn1:    { de: "JETZT ANFRAGEN",     en: "REQUEST NOW" },
    btn2:    { de: "+49 175 6036003",    en: "+49 175 6036003" },
  },
};
