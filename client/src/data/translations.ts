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

  // ── REPORT SECTION ──
  report: {
    heading: { de: "ERGEBNIS DER PRÜFUNG", en: "EXAMINATION RESULT" },
    sub:     { de: "Ein detaillierter Bericht zu allen Parametern", en: "A detailed report on all parameters" },
    intro:   { de: "Das Gutachten des Polygraphologen muss mehrere Pflichtabschnitte enthalten:", en: "The polygraph expert's report must contain several mandatory sections:" },
    section1Title: { de: "1. Allgemeine Informationen", en: "1. General Information" },
    section1Items: [
      { de: "Daten der geprüften Person",     en: "Data of the examined person" },
      { de: "Gründe für die Untersuchung",   en: "Reasons for the examination" },
      { de: "Datum und Ort der Durchführung", en: "Date and place of examination" },
    ],
    section2Title: { de: "2. Methodik der Durchführung", en: "2. Methodology" },
    section2Items: [
      { de: "Liste der gestellten Fragen",       en: "List of questions asked" },
      { de: "Beschreibung des Testverfahrens",   en: "Description of the testing procedure" },
      { de: "Verwendete Ausrüstung",            en: "Equipment used" },
    ],
    section3Title: { de: "3. Analyseergebnisse", en: "3. Analysis Results" },
    section3Items: [
      { de: "Reaktionen der geprüften Person auf jede Frage", en: "Reactions of the examined person to each question" },
      { de: "Interpretation der erhaltenen Ergebnisse",       en: "Interpretation of the results obtained" },
      { de: "Schlussfolgerungen aus dem Test",                en: "Conclusions from the test" },
    ],
    btnRequest: { de: "ANFRAGE SENDEN",  en: "SEND REQUEST" },
  },

  // ── CASE STUDIES ──
  cases: {
    heading: { de: "FALLSTUDIEN", en: "CASE STUDIES" },
    sub:     { de: "Echte Fälle aus unserer Praxis", en: "Real cases from our practice" },
    items: [
      {
        de: `Fall Nr. 1: Mitarbeiter identifiziert, der die Kundendatenbank an Konkurrenten weitergegeben hat

Ein mittelständisches Unternehmen bemerkte ungewöhnliche Abwanderungen von Stammkunden zu einem direkten Wettbewerber. Interne Analysen zeigten keinen klaren technischen Datenabfluss, weshalb der Verdacht auf einen Insider entstand. Mehrere Mitarbeiter mit Zugang zur Kundendatenbank wurden im Rahmen einer internen Untersuchung überprüft. Ein Verdächtiger zeigte widersprüchliche Aussagen zu seinem Zugriff auf sensible Daten. Im anschließenden Polygraphentest wurden deutliche Stressreaktionen bei relevanten Fragen festgestellt. Die Ergebnisse deuteten klar darauf hin, dass er Informationen unbefugt weitergegeben hatte. Nach Konfrontation mit den Ergebnissen gestand der Mitarbeiter die Weitergabe der Daten gegen Bezahlung. Das Unternehmen konnte daraufhin schnell Maßnahmen ergreifen und weitere Schäden verhindern.`,
        en: `Case No. 1: Identified the employee who leaked the customer database to competitors

A mid-sized company noticed unusual departures of regular customers to a direct competitor. Internal analyses showed no clear technical data leak, which led to suspicion of an insider. Several employees with access to the customer database were examined as part of an internal investigation. One suspect showed contradictory statements about his access to sensitive data. The subsequent polygraph test revealed clear stress reactions to relevant questions. The results clearly indicated that he had passed on information without authorization. When confronted with the results, the employee confessed to selling the data for payment. The company was then able to act quickly and prevent further damage.`,
      },
      {
        de: `Fall Nr. 2: Festgestellt, wer ein Rückvergütungssystem mit Lieferanten organisiert hat

Ein Handelsunternehmen stellte fest, dass bestimmte Lieferantenverträge zu ungewöhnlich hohen Preisen abgeschlossen wurden, ohne erkennbaren Mehrwert für das Unternehmen. Der Verdacht fiel auf mehrere Einkäufer, die regelmäßig mit denselben Lieferanten zusammenarbeiteten. Eine interne Revision konnte keine eindeutigen Belege finden, da die Absprachen offenbar außerhalb der offiziellen Kommunikationskanäle stattfanden. Im Rahmen der Polygraphenuntersuchung wurden alle betroffenen Mitarbeiter befragt. Bei zwei Personen zeigten sich signifikante physiologische Reaktionen auf Fragen zu persönlichen Vorteilen und Gegenleistungen. Einer der Befragten räumte nach dem Test ein, regelmäßig Provisionen von einem Lieferanten erhalten zu haben. Das Unternehmen leitete daraufhin rechtliche Schritte ein und überarbeitete seine Einkaufsrichtlinien grundlegend.`,
        en: `Case No. 2: Determined who organized a kickback scheme with suppliers

A trading company discovered that certain supplier contracts were concluded at unusually high prices without any recognizable added value. Suspicion fell on several buyers who regularly worked with the same suppliers. An internal audit found no clear evidence, as the arrangements apparently took place outside official communication channels. All affected employees were interviewed as part of the polygraph examination. Two individuals showed significant physiological reactions to questions about personal benefits and kickbacks. One of those questioned admitted after the test to having regularly received commissions from a supplier. The company subsequently initiated legal proceedings and fundamentally revised its purchasing policies.`,
      },
      {
        de: `Fall Nr. 3: Mitarbeiter gefunden, der systematisch Waren aus Internetretouren unterschlagen hat

Ein Online-Händler verzeichnete über mehrere Monate hinweg erhebliche Differenzen zwischen den registrierten Retouren und dem tatsächlich eingelagerten Warenbestand. Trotz Videoüberwachung im Lager ließen sich keine eindeutigen Beweise sichern, da die Manipulationen offenbar gezielt in blinden Winkeln stattfanden. Mehrere Lagermitarbeiter gerieten in den Fokus der Ermittlungen. Im Polygraphentest zeigte ein Mitarbeiter, der für die Bearbeitung von Retouren zuständig war, deutliche Stressreaktionen bei Fragen zur Warenentnahme und zur privaten Nutzung von Firmenware. Konfrontiert mit den Testergebnissen gab er zu, hochwertige Artikel aus dem Retourenbestand regelmäßig entnommen und weiterverkauft zu haben. Der entstandene Schaden belief sich auf mehrere tausend Euro. Das Unternehmen erstattete Strafanzeige und optimierte seine internen Kontrollprozesse.`,
        en: `Case No. 3: Found the employee who systematically embezzled goods from internet returns

An online retailer recorded significant discrepancies over several months between registered returns and the actual warehouse inventory. Despite video surveillance in the warehouse, no clear evidence could be secured, as the manipulations apparently took place in blind spots. Several warehouse employees came under scrutiny. In the polygraph test, an employee responsible for processing returns showed clear stress reactions to questions about removing goods and personal use of company merchandise. Confronted with the test results, he admitted to regularly removing high-value items from the returns inventory and reselling them. The resulting damage amounted to several thousand euros. The company filed a criminal complaint and optimized its internal control processes.`,
      },
      {
        de: `Fall Nr. 4: Manager entlarvt, der Unterschriften in Verträgen gefälscht hat

Ein mittelständisches Dienstleistungsunternehmen bemerkte Unstimmigkeiten in mehreren Vertragsunterlagen, bei denen Unterschriften von Geschäftsführern und Kunden nicht mit den Originalen übereinstimmten. Schriftgutachten bestätigten den Verdacht der Fälschung, konnten jedoch den Verursacher nicht eindeutig identifizieren. Mehrere Führungskräfte mit Zugang zu den betreffenden Dokumenten wurden befragt. Im Polygraphentest zeigte ein leitender Manager ausgeprägte physiologische Reaktionen auf Fragen zur Dokumentenmanipulation und zur eigenmächtigen Vertragsgestaltung. Nach dem Test räumte er ein, in mehreren Fällen Unterschriften gefälscht zu haben, um Verträge ohne Genehmigung der Geschäftsführung abzuschließen. Das Unternehmen erstattete Anzeige und überprüfte alle von ihm bearbeiteten Verträge der letzten zwei Jahre.`,
        en: `Case No. 4: Exposed the manager who forged signatures in contracts

A mid-sized service company noticed discrepancies in several contract documents where signatures of managing directors and clients did not match the originals. Handwriting analyses confirmed the suspicion of forgery but could not clearly identify the perpetrator. Several executives with access to the relevant documents were interviewed. In the polygraph test, a senior manager showed pronounced physiological reactions to questions about document manipulation and unauthorized contract arrangements. After the test, he admitted to having forged signatures in several cases in order to conclude contracts without management approval. The company filed a complaint and reviewed all contracts he had handled over the past two years.`,
      },
      {
        de: `Fall Nr. 5: Kassierer ermittelt, der systematisch keine Quittungen ausstellte und Einnahmen stahl

Ein Einzelhandelsunternehmen mit mehreren Filialen stellte fest, dass in einer bestimmten Filiale die Tageseinnahmen regelmäßig unter dem Durchschnitt vergleichbarer Standorte lagen, ohne dass dies durch geringere Kundenfrequenz erklärbar war. Kassensystemprotokolle zeigten auffällig viele Transaktionen ohne Belegausdruck. Da mehrere Kassierer in Schichten arbeiteten, war eine direkte Zuordnung schwierig. Im Rahmen der Polygraphenuntersuchung wurden alle betroffenen Mitarbeiter einzeln befragt. Ein Kassierer zeigte bei Fragen zu nicht verbuchten Einnahmen und zur persönlichen Bereicherung deutliche Stressreaktionen. Nach dem Test gestand er, über einen Zeitraum von mehreren Monaten systematisch Bargeld aus der Kasse entnommen zu haben, indem er bei bestimmten Transaktionen bewusst keinen Beleg ausdruckte. Der Gesamtschaden wurde auf über 8.000 Euro geschätzt.`,
        en: `Case No. 5: Determined which cashier systematically failed to issue receipts and stole revenue

A retail company with several branches found that daily revenues at one particular branch were consistently below the average of comparable locations, without this being explainable by lower customer traffic. Cash register system logs showed an unusually high number of transactions without receipt printouts. Since several cashiers worked in shifts, direct attribution was difficult. All affected employees were individually interviewed as part of the polygraph examination. One cashier showed clear stress reactions to questions about unrecorded revenues and personal enrichment. After the test, he confessed to having systematically withdrawn cash from the register over a period of several months by deliberately not printing receipts for certain transactions. The total damage was estimated at over 8,000 euros.`,
      },
      {
        de: `Fall Nr. 6: Ermittelt, wer im Team eine falsche anonyme Beschwerde gegen den Vorgesetzten verbreitet hat

In einem mittelständischen Unternehmen wurde eine anonyme Beschwerde bei der Personalabteilung eingereicht, in der einem Abteilungsleiter schwerwiegendes Fehlverhalten vorgeworfen wurde. Eine interne Prüfung ergab, dass die geschilderten Vorfälle nicht stattgefunden hatten und die Beschwerde offensichtlich erfunden war. Der betroffene Vorgesetzte erlitt erheblichen Reputationsschaden. Da die Beschwerde detaillierte interne Informationen enthielt, musste der Verfasser aus dem engsten Kollegenkreis stammen. Alle Teammitglieder wurden im Rahmen einer Polygraphenuntersuchung befragt. Eine Mitarbeiterin zeigte bei Fragen zur Urheberschaft der Beschwerde und zu ihrer Motivation deutliche physiologische Reaktionen. Nach dem Test gab sie zu, die Beschwerde verfasst zu haben, um den Vorgesetzten aus persönlichen Gründen zu schädigen. Das Unternehmen leitete arbeitsrechtliche Konsequenzen ein und rehabilitierte den betroffenen Abteilungsleiter offiziell.`,
        en: `Case No. 6: Determined who in the team spread a false anonymous complaint against the manager

At a mid-sized company, an anonymous complaint was submitted to the HR department accusing a department head of serious misconduct. An internal review revealed that the described incidents had not taken place and that the complaint was obviously fabricated. The affected manager suffered significant reputational damage. Since the complaint contained detailed internal information, the author had to come from the immediate team. All team members were interviewed as part of a polygraph examination. One employee showed clear physiological reactions to questions about authorship of the complaint and her motivation. After the test, she admitted to having written the complaint to harm the manager for personal reasons. The company initiated employment law consequences and officially rehabilitated the affected department head.`,
      },
    ],
    dates: ["13.02.2026", "10.02.2026", "07.02.2026", "04.02.2026", "01.02.2026", "28.01.2026"],
    btnAll: { de: "ALLE FÄLLE ANSEHEN", en: "VIEW ALL CASES" },
  },

  // ── CTA BANNER ──
  cta: {
    heading: { de: "BEREIT FÜR DIE WAHRHEIT?", en: "READY FOR THE TRUTH?" },
    sub:     { de: "Kontaktieren Sie uns noch heute für eine kostenlose Erstberatung", en: "Contact us today for a free initial consultation" },
    btn1:    { de: "JETZT ANFRAGEN",     en: "REQUEST NOW" },
    btn2:    { de: "+49 175 6036003",    en: "+49 175 6036003" },
  },
};
