import { useState, useRef } from "react";
import { legalDocs } from "../data/legalDocs";
import { useLang } from "../contexts/LanguageContext";
import { t } from "../data/translations";

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
// DATA – 12 Buttons mit vollständigen Texten & Fotos
// ─────────────────────────────────────────────

const getServices = (lang: string) => [
  // ── PRIVAT ──
  {
    id: "untreue",
    category: "private",
    icon: "fas fa-heart-broken",
    title: { de: "Überprüfung auf Untreue", en: "Infidelity Check" },
    price: "550 €",
    short: { de: "Klärung bei Verdacht auf Untreue in der Partnerschaft", en: "Clarification when infidelity is suspected in a relationship" },
    img: "/manus-storage/img_untreue_new_opt_aa63860c.jpg",
    features: ["Vertrauliches Vorgespräch", "Professionelle Testdurchführung", "Schriftliches Gutachten", "Nachberatung möglich"],
    sections: [
      {
        heading: { de: "TREUETESTS PER LÜGENDETEKTOR: KLARHEIT FÜR DIE BEZIEHUNG", en: "FIDELITY TESTS WITH LIE DETECTOR: CLARITY FOR YOUR RELATIONSHIP" },
        text: lang === "en" ? "When couples marry, they vow fidelity. But relationships are fragile, and life often tells different stories. Sometimes a lie detector test for infidelity is the only effective way to save a family – or, on the contrary, to gain certainty about a betrayal. In any case, the result helps overcome tormenting mistrust, doubt and insecurity toward oneself and one's partner." : `Mit der Eheschließung schwören sich Ehepartner Treue. Doch Beziehungen sind zerbrechlich, und das Leben schreibt oft andere Geschichten. Manchmal ist ein Lügendetektortest auf Untreue der einzige effektive Weg, eine Familie zu retten oder – im Gegenteil – Gewissheit über einen Betrug zu erlangen. In jedem Fall hilft das Ergebnis dabei, quälendes Misstrauen, Zweifel und Unsicherheit gegenüber sich selbst und dem Partner zu überwinden.`,
      },
      {
        heading: { de: "PRÜFUNG DER PARTNERSTREUE MIT DEM POLYGRAPHEN", en: "TESTING PARTNER FIDELITY WITH THE POLYGRAPH" },
        text: lang === "en" ? "Those who cheat on their partner often do everything to conceal the infidelity. Such partners become extremely cautious: they notice surveillance or avoid discussing sensitive topics on the phone. Therefore, the lie detector test is often the only quick and effective way to expose someone.\n\nWe are open to both sides: both the partner suspected of cheating and the one who has suspicions. Jealousy and doubt are destructive feelings. Through a polygraph test, couples can restore lost trust or decide whether the relationship must end. Unfounded suspicions can otherwise lead to neuroses and unbearable living conditions for the entire family.\n\nThe results provide facts that minimize the risk of drastic wrong decisions. If the suspicion of infidelity is not confirmed by the expert, separations, psychological trauma and financial losses can be prevented." : `Wer seinen Partner betrügt, setzt oft alles daran, die Untreue zu verbergen. Solche Partner werden extrem vorsichtig: Sie bemerken Beschattungen oder vermeiden es, am Telefon über sensible Themen zu sprechen. Daher ist der Lügendetektortest oft die einzige schnelle und effektive Möglichkeit, jemanden zu entlarven.\n\nWir stehen beiden Seiten offen: Sowohl dem Partner, der des Betrugs verdächtigt wird, als auch demjenigen, der die Vermutung hegt. Eifersucht und Zweifel sind zerstörerische Gefühle. Durch einen Polygraph-Test können Paare verlorenes Vertrauen wiederherstellen oder entscheiden, ob die Beziehung beendet werden muss. Unbegründete Verdächtigungen können sonst zu Neurosen und unerträglichen Lebensbedingungen für die gesamte Familie führen.\n\nDie Ergebnisse liefern Fakten, die das Risiko drastischer Fehlentscheidungen minimieren. Wenn der Verdacht des Ehebruchs durch den Experten nicht bestätigt wird, können Trennungen, psychische Traumata sowie finanzielle und materielle Verluste verhindert werden.`,
      },
    ],
  },
  {
    id: "jugendliche",
    category: "private",
    icon: "fas fa-child",
    title: { de: "Überprüfung von Jugendlichen ab 14 Jahren", en: "Testing of Minors (14+)" },
    price: "auf Anfrage",
    short: { de: "Klärung von Verhaltensauffälligkeiten bei Jugendlichen", en: "Clarification of behavioral issues in adolescents" },
    img: "/manus-storage/img_jugendliche_opt_b0f6ab3a.jpg",
    features: ["Elterliche Zustimmung erforderlich", "Einfühlsame Durchführung", "Psychologische Begleitung", "Schriftliches Gutachten"],
    sections: [
      {
        heading: { de: "DIE PUBERTÄT: HERAUSFORDERUNGEN MEISTERN", en: "ADOLESCENCE: OVERCOMING CHALLENGES" },
        text: lang === "en" ? "Adolescence is often a phase of uncertainty for parents and teachers. Teenagers are in a transitional state, being neither children nor fully adults. Behaviors can seem provocative or be marked by social withdrawal. While this is often part of normal identity formation, deeper conflicts may sometimes be present.\n\nRather than relying on technical verification procedures, experts generally recommend building trust and open dialogue. If there is suspicion of serious problems such as substance abuse or psychological stress, consultation with qualified psychologists or specialized counseling centers is a proven approach. These support families in understanding the causes of behavioral changes and developing solutions together.\n\nPromoting healthy development is based on mutual respect and support, to give young people security and enable parents to find the necessary orientation during this challenging time." : `Die Pubertät ist oft eine Phase der Verunsicherung für Eltern und Lehrkräfte. Jugendliche befinden sich in einem Übergangszustand, in dem sie weder Kind noch vollständig erwachsen sind. Verhaltensweisen können provokant wirken oder durch sozialen Rückzug geprägt sein. Während dies oft Teil der normalen Identitätsfindung ist, können in manchen Fällen auch tiefere Konflikte vorliegen.\n\nAnstatt auf technische Überprüfungsverfahren zu setzen, empfehlen Fachleute in der Regel den Aufbau von Vertrauen und den offenen Dialog. Wenn der Verdacht auf ernsthafte Probleme wie Substanzmissbrauch oder psychische Belastungen besteht, ist die Beratung durch qualifizierte Psychologen oder spezialisierte Beratungsstellen ein bewährter Weg. Diese unterstützen Familien dabei, die Ursachen für Verhaltensänderungen zu verstehen und gemeinsam Lösungen zu erarbeiten.\n\nDie Förderung einer gesunden Entwicklung basiert auf gegenseitigem Respekt und Unterstützung, um Jugendlichen Sicherheit zu geben und Eltern die notwendige Orientierung in dieser herausfordernden Zeit zu ermöglichen.`,
      },
    ],
  },
  {
    id: "diebstahl",
    category: "private",
    icon: "fas fa-search",
    title: { de: "Aufklärung von Diebstählen", en: "Theft Investigation" },
    price: "auf Anfrage",
    short: { de: "Klärung von Diebstählen und Verlusten im privaten Umfeld", en: "Clarification of thefts and losses in the private environment" },
    img: "/manus-storage/img_diebstahl_new_opt_d8da6fb7.jpg",
    features: ["Diskrete Durchführung", "Mehrere Personen möglich", "Offizielles Gutachten", "Rechtlich verwertbar"],
    sections: [
      {
        heading: { de: "AUFKLÄRUNG VON KRIMINELLEN HANDLUNGEN MIT DEM LÜGENDETEKTOR", en: "INVESTIGATING CRIMINAL ACTS WITH THE LIE DETECTOR" },
        text: lang === "en" ? "Criminal activities inevitably lead to financial losses. This involves not only the theft of money or valuables from private premises, but also the theft of databases and confidential information within companies. Perpetrators inside a company can illegally appropriate assets, commit fraud, extortion or corruption.\n\nUsing a lie detector is the fastest and most effective way to identify perpetrators. Our experienced experts help you track down offenders and prevent further criminal acts." : `Kriminelle Aktivitäten führen unweigerlich zu finanziellen Verlusten. Dabei geht es nicht nur um den Diebstahl von Geld oder Wertsachen aus Privaträumen, sondern auch um den Raub von Datenbanken und vertraulichen Informationen in Unternehmen. Täter innerhalb einer Firma können sich illegal Vermögenswerte aneignen, Betrug, Erpressung oder Korruption betreiben.\n\nDer Einsatz eines Lügendetektors ist der schnellste und effektivste Weg, um Täter zu identifizieren. Unsere erfahrenen Experten helfen Ihnen dabei, Rechtsverletzer ausfindig zu machen und weitere kriminelle Handlungen zu verhindern.`,
      },
      {
        heading: { de: "POLYGRAPHEN-TESTS BEI UNTERSCHLAGUNG, DIEBSTAHL UND VERRAT VON GESCHÄFTSGEHEIMNISSEN", en: "POLYGRAPH TESTS FOR EMBEZZLEMENT, THEFT AND TRADE SECRET VIOLATIONS" },
        text: lang === "en" ? "Serious losses due to employee theft are often the result of inadequate personnel control. The polygraph has proven its effectiveness in the context of investigative measures. It serves to identify main perpetrators and accomplices." : `Schwerwiegende Verluste durch Mitarbeiterdiebstahl sind oft die Folge unzureichender Personalkontrolle. Der Polygraph hat seine Wirksamkeit im Rahmen von Ermittlungsmaßnahmen bewiesen. Er dient dazu, Haupttäter und Komplizen zu identifizieren.`,
        bullets: [
          lang === "en" ? "Role distribution: Determining the role of each person involved in the act" : "Rollenverteilung: Bestimmung der Rolle jeder beteiligten Person an der Tat",
          lang === "en" ? "Information flow: Motivating suspects to disclose information" : "Informationsfluss: Motivierung von Verdächtigen zur Offenlegung von Informationen",
          lang === "en" ? "Reconstruction: Establishing the chronological sequence of events" : "Rekonstruktion: Feststellung des chronologischen Ablaufs der Ereignisse",
          lang === "en" ? "Fact clarification: Determining the actual circumstances of the case" : "Sachverhaltsaufklärung: Ermittlung der tatsächlichen Umstände des Falls",
          lang === "en" ? "Evidence gathering: Collecting additional findings and details" : "Beweissicherung: Sammeln zusätzlicher Erkenntnisse und Details",
          lang === "en" ? "Conspiracy: Uncovering agreements between multiple persons" : "Verschwörung: Aufdeckung von Absprachen zwischen mehreren Personen",
          lang === "en" ? "Exoneration: Excluding innocent persons from the circle of suspects" : "Entlastung: Ausschluss unschuldiger Personen aus dem Kreis der Verdächtigen",
          lang === "en" ? "Location: Determining the whereabouts of stolen goods or valuables" : "Verbleib: Ermittlung des Standorts von gestohlenen Gütern oder Werten",
        ],
      },
    ],
  },
  {
    id: "hauspersonal",
    category: "private",
    icon: "fas fa-home",
    title: { de: "Überprüfung von Hauspersonal", en: "Domestic Staff Screening" },
    price: "auf Anfrage",
    short: { de: "Kindermädchen, Haushälterinnen, Fahrer und andere Angestellte", en: "Nannies, housekeepers, drivers and other household employees" },
    img: "/manus-storage/hauspersonal_new_3f0d7b62.jpg",
    features: ["Schnelle Terminvergabe", "Diskrete Durchführung", "Schriftliches Ergebnis", "100% vertraulich"],
    sections: [
      {
        heading: { de: "ÜBERPRÜFUNG VON HAUSPERSONAL: SICHERHEIT FÜR IHR ZUHAUSE", en: "DOMESTIC STAFF SCREENING: SECURITY FOR YOUR HOME" },
        text: lang === "en" ? "A polygraph test may only be conducted with the voluntary consent of domestic staff. There are also subject areas (such as private life) that may not be the subject of questioning. Our experts strictly take your individual wishes into account when compiling the list of questions.\n\nBe particularly attentive to persons who categorically refuse a test. Honest and conscientious employees generally have nothing to hide – for them, the procedure is an additional opportunity to prove their loyalty and integrity." : `Ein Test mit dem Polygraphen darf nur mit der freiwilligen Zustimmung des Hauspersonals durchgeführt werden. Es gibt zudem Themenbereiche (wie die Intimsphäre), die nicht Gegenstand der Befragung sein dürfen. Unsere Experten berücksichtigen bei der Erstellung des Fragenkatalogs strikt Ihre individuellen Wünsche.\n\nSeien Sie besonders aufmerksam gegenüber Personen, die einen Test kategorisch ablehnen. Ehrliche und gewissenhafte Mitarbeiter haben in der Regel nichts zu verbergen – für sie ist das Verfahren eine zusätzliche Chance, ihre Loyalität und Integrität unter Beweis zu stellen.`,
      },
      {
        heading: { de: "ASPEKTE, DIE BEI HAUSPERSONAL GEKLÄRT WERDEN KÖNNEN:", en: "ASPECTS THAT CAN BE CLARIFIED FOR DOMESTIC STAFF:" },
        text: "",
        bullets: [
          lang === "en" ? "Care for dependents: Detection of abuse of children or pets" : "Umgang mit Schutzbefohlenen: Aufdeckung von Misshandlungen an Kindern oder Haustieren",
          lang === "en" ? "Qualifications: Confirmation of actual work experience and authenticity of references" : "Qualifikation: Bestätigung der tatsächlichen Berufserfahrung und Echtheit von Empfehlungsschreiben",
          lang === "en" ? "Reliability: Checking whether agreed tasks are performed conscientiously" : "Zuverlässigkeit: Prüfung, ob die vereinbarten Aufgaben gewissenhaft erfüllt werden",
          lang === "en" ? "Honesty: Detection of theft or fraud in household expenses" : "Ehrlichkeit: Aufdeckung von Diebstahl oder Betrug bei Haushaltsausgaben",
          lang === "en" ? "Property handling: Careless or willful misuse of furniture, appliances or vehicles" : "Umgang mit Eigentum: Unachtsamer oder mutwilliger Missbrauch von Möbeln, Geräten oder Fahrzeugen",
          lang === "en" ? "Discretion: Unauthorized invitation of strangers into the employer's private premises" : "Diskretion: Unbefugtes Einladen fremder Personen in die Privaträume des Arbeitgebers",
          lang === "en" ? "Hygiene & care: Deficiencies in food preparation or intentional property damage" : "Hygiene & Sorgfalt: Mängel bei der Lebensmittelzubereitung oder absichtliche Sachbeschädigung",
          lang === "en" ? "Confidentiality: Sharing or selling confidential family information to third parties" : "Geheimhaltung: Weitergabe oder Verkauf von vertraulichen Informationen über die Familie an Dritte",
        ],
      },
    ],
  },
  {
    id: "probetest",
    category: "private",
    icon: "fas fa-flask",
    title: { de: "Probetest am Polygraphen", en: "Trial Polygraph Test" },
    price: "auf Anfrage",
    short: { de: "Kennenlernen des Verfahrens vor der eigentlichen Untersuchung", en: "Getting familiar with the procedure before the actual examination" },
    img: "/manus-storage/img_probetest2_opt_ebca96e5.jpg",
    features: ["Ca. 30–45 Minuten", "Keine Auswertung", "Ideal zur Vorbereitung", "Anrechnung auf Volltest möglich"],
    sections: [
      {
        heading: { de: "DER PROBELAUF: VORBEREITUNG AUF DEN LÜGENDETEKTOR-TEST", en: "THE TRIAL RUN: PREPARATION FOR THE LIE DETECTOR TEST" },
        text: lang === "en" ? "Polygraph examinations are increasingly used to obtain information about a person. They serve not only to check honesty, but also help to clarify complex situations without obvious evidence. If you have been offered a test and are not familiar with the procedure, there is no reason to worry. An immediate refusal could raise unnecessary doubts about your integrity and create mistrust." : `Polygraphen-Untersuchungen werden immer häufiger eingesetzt, um Informationen über eine Person zu gewinnen. Sie dienen nicht nur dazu, die Ehrlichkeit zu prüfen, sondern helfen auch dabei, komplexe Situationen ohne offensichtliche Beweise zu klären. Wenn Ihnen ein Test angeboten wurde und Sie mit dem Verfahren nicht vertraut sind, gibt es keinen Grund zur Sorge. Eine sofortige Ablehnung könnte unnötige Zweifel an Ihrer Integrität wecken und Misstrauen schüren.`,
      },
      {
        heading: { de: "ZIELE EINES PROBELAUFS (TEST-CHECK)", en: "GOALS OF A TRIAL RUN (TEST-CHECK)" },
        text: lang === "en" ? "A trial run serves to familiarize the person being examined with the atmosphere and conditions of the test. It is conducted when someone wants to know exactly how the procedure works, what questions will be asked, and to convince themselves of the safety of the procedure." : `Ein Probelauf dient dazu, die zu untersuchende Person an die Atmosphäre und die Bedingungen des Tests zu gewöhnen. Er wird durchgeführt, wenn jemand genau wissen möchte, wie die Prozedur abläuft, welche Fragen gestellt werden und um sich von der Sicherheit des Verfahrens zu überzeugen.`,
        bullets: [
          lang === "en" ? "Detailed briefing: Comprehensive explanation of the procedure to the participant" : "Detaillierte Einweisung: Umfassende Aufklärung des Teilnehmers über den Ablauf",
          lang === "en" ? "Acclimatization: Familiarizing the test subject with the attached sensors" : "Gewöhnung: Anpassung der Testperson an die angelegten Sensoren",
          lang === "en" ? "Individual calibration: Fine-tuning the device to specific physiological responses" : "Individuelle Kalibrierung: Feinabstimmung des Geräts auf die spezifischen physiologischen Reaktionen",
          lang === "en" ? "Response analysis: Recording patterns with different questions" : "Reaktionsanalyse: Erfassung von Mustern bei unterschiedlichen Fragen",
          lang === "en" ? "Safety check: Determining whether results could be distorted by alcohol or medication" : "Sicherheitscheck: Feststellung, ob die Ergebnisse durch Alkohol oder Medikamente verfälscht sein könnten",
        ],
      },
    ],
  },
  {
    id: "hochzeit",
    category: "private",
    icon: "fas fa-ring",
    title: { de: "Überprüfung vor der Hochzeit", en: "Pre-Wedding Check" },
    price: "auf Anfrage",
    short: { de: "Sicherheit vor dem wichtigsten Tag Ihres Lebens", en: "Security before the most important day of your life" },
    img: "/manus-storage/img_hochzeit_new_opt_6c3351a2.jpg",
    features: ["Absolut vertraulich", "Gegenseitige Tests möglich", "Professionelle Beratung", "Schriftliches Gutachten"],
    sections: [
      {
        heading: { de: "HOCHZEIT UND VERTRAUEN: DER POLYGRAPH-CHECK VOR DEM JA-WORT", en: "WEDDING AND TRUST: THE POLYGRAPH CHECK BEFORE SAYING YES" },
        text: `Eine Hochzeit ist ein entscheidender Schritt für jedes Paar. Dieses festliche Ereignis markiert den Beginn eines gemeinsamen Lebensweges, der auf Ehrlichkeit und gegenseitigem Vertrauen basieren sollte. Besteht jedoch auch nur der geringste Zweifel am Partner, bietet ein Lügendetektortest vor der Vermählung Sicherheit. Unsere qualifizierten und erfahrenen Experten setzen modernste, hochpräzise Computertechnik ein. Die Ergebnisse helfen Ihnen dabei, Antworten auf die Fragen zu finden, die Ihre Beziehung belasten.`,
      },
      {
        heading: { de: "LÜGENDETEKTOR VOR DER HOCHZEIT: VORTEILE", en: "LIE DETECTOR BEFORE THE WEDDING: ADVANTAGES" },
        text: lang === "en" ? "Before you tie the knot for life, it is advisable to eliminate possible risks in advance. This protects your future family from mistrust, doubts, secrecy and other stressful situations. A polygraph test helps to identify problems in time and exclude them for your shared future." : `Bevor Sie den Bund fürs Leben schließen, ist es ratsam, mögliche Risiken im Vorfeld auszuräumen. So schützen Sie Ihre zukünftige Familie vor Misstrauen, Zweifeln, Verschwiegenheit und anderen belastenden Situationen. Ein Polygraph-Test hilft dabei, Probleme rechtzeitig zu identifizieren und sie für die gemeinsame Zukunft auszuschließen.`,
        bullets: [
          lang === "en" ? "Clarity: Elimination of unfounded fears and doubts" : "Klarheit: Beseitigung unbegründeter Ängste und Zweifel",
          lang === "en" ? "Honesty: Confirmation of the partner's sincerity regarding the past or intentions" : "Ehrlichkeit: Bestätigung der Aufrichtigkeit des Partners in Bezug auf die Vergangenheit oder Absichten",
          lang === "en" ? "Prevention: Protection against unpleasant surprises after the wedding" : "Prävention: Schutz vor unangenehmen Überraschungen nach der Hochzeit",
        ],
      },
    ],
  },
  // ── BUSINESS ──
  {
    id: "einstellung",
    category: "business",
    icon: "fas fa-user-check",
    title: { de: "Überprüfung bei der Einstellung", en: "Pre-Employment Screening" },
    price: "auf Anfrage",
    short: { de: "Sicherheit bei der Auswahl neuer Mitarbeiter für sensible Positionen", en: "Security when selecting new employees for sensitive positions" },
    img: "/manus-storage/img_einstellung_new_opt_640c0e16.jpg",
    features: ["Schnelle Abwicklung", "Mehrere Bewerber möglich", "Vertraulicher Bericht", "Rechtssicheres Gutachten"],
    sections: [
      {
        heading: { de: "ÜBERPRÜFUNG BEI DER EINSTELLUNG", en: "PRE-EMPLOYMENT SCREENING" },
        text: lang === "en" ? "When selecting new employees, every company looks for reliability. How do you identify truly responsible and loyal professionals? Experienced experts filter out unreliable candidates with 99% accuracy, minimizing your business risks.\n\nPre-employment screening helps achieve the following goals:" : `Bei der Auswahl neuer Mitarbeiter sucht jedes Unternehmen nach Zuverlässigkeit. Wie identifiziert man wirklich verantwortungsbewusste und loyale Profis? Erfahrene Experten sieben mit einer Genauigkeit von 99 % unzuverlässige Kandidaten aus und minimieren so Ihre Geschäftsrisiken.\n\nDie Prüfung bei der Einstellung hilft dabei, folgende Ziele zu erreichen:`,
        bullets: [
          lang === "en" ? "Fit: Selection of specialists whose psychological and moral qualities exactly match the position" : "Passgenauigkeit: Auswahl von Spezialisten, deren psychologische und moralische Qualitäten exakt zur Stelle passen",
          lang === "en" ? "Truthfulness: Uncovering hidden facts, gaps in the CV or possible criminal records" : "Wahrheitsgehalt: Aufdeckung verborgener Fakten, Lücken im Lebenslauf oder möglicher Vorstrafen",
          lang === "en" ? "Risk prevention: Identifying factors that speak against hiring" : "Risikoprävention: Identifizierung von Faktoren, die gegen eine Einstellung sprechen",
          lang === "en" ? "Efficiency: Reducing costs and time for multi-stage background checks" : "Effizienz: Senkung von Kosten und Zeitaufwand für mehrstufige Hintergrundchecks",
          lang === "en" ? "Honesty: Detecting tendencies toward theft or dishonest behavior" : "Ehrlichkeit: Erkennung von Tendenzen zu Diebstahl oder unlauterem Verhalten",
          lang === "en" ? "Prognosis: Objective prediction of the applicant's future behavior" : "Prognose: Objektive Vorhersage des künftigen Verhaltens des Bewerbers",
        ],
      },
      {
        heading: "",
        text: lang === "en" ? "Pre-employment screening is conducted with maximum accuracy, ensured through the correction of topics. Employers often want to verify the authenticity of submitted documents, references and registrations. The polygraph also helps to check credit history, identify various risk factors as well as alcohol, drug or gambling addiction. The procedure uncovers criminal backgrounds and reveals whether health restrictions exist for performing the job." : `Die Überprüfung bei der Einstellung wird mit maximaler Genauigkeit durchgeführt, was durch die Korrektur der Themen sichergestellt wird. Häufig möchten Arbeitgeber die Echtheit der vorgelegten Dokumente, Empfehlungen und Registrierungen überprüfen. Der Polygraph hilft auch dabei, die Kredithistorie zu prüfen, verschiedene Risikofaktoren sowie Alkohol-, Drogen- oder Spielsucht zu ermitteln. Das Verfahren deckt kriminelle Hintergründe auf und zeigt, ob gesundheitliche Einschränkungen für die Ausübung der Tätigkeit vorliegen.`,
      },
    ],
  },
  {
    id: "routine",
    category: "business",
    icon: "fas fa-clipboard-check",
    title: { de: "Planmäßige Überprüfung von Mitarbeitern", en: "Scheduled Employee Screening" },
    price: "auf Anfrage",
    short: { de: "Regelmäßige Überprüfungen zur Sicherung der Unternehmensintegrität", en: "Regular screenings to ensure corporate integrity" },
    img: "/manus-storage/img_routine_new_opt_5e44dc06.jpg",
    features: ["Maßgeschneiderte Programme", "Gruppenrabatte möglich", "Vertrauliche Berichte", "Regelmäßige Termine"],
    sections: [
      {
        heading: { de: "BRANCHEN, IN DENEN REGELMÄSSIGE POLYGRAPHEN-TESTS FÜR MITARBEITER ERFORDERLICH SIND", en: "INDUSTRIES WHERE REGULAR POLYGRAPH TESTS FOR EMPLOYEES ARE REQUIRED" },
        text: lang === "en" ? "Regular staff testing helps prevent numerous potential problems and significantly reduces risks associated with material or intangible assets. When management plans to promote an employee or change their responsibilities, it is important to verify their honesty. Scheduled screening is particularly necessary when employees have access to finances that are difficult to control." : `Regelmäßige Tests des Personals helfen dabei, zahlreiche potenzielle Probleme zu vermeiden und Risiken im Zusammenhang mit materiellen oder immateriellen Werten erheblich zu senken. Wenn die Geschäftsführung plant, einen Mitarbeiter zu befördern oder seinen Aufgabenbereich zu ändern, ist es wichtig, sich seiner Ehrlichkeit zu vergewissern. Eine planmäßige Überprüfung ist insbesondere dann notwendig, wenn Mitarbeiter Zugang zu schwer kontrollierbaren Finanzen haben.`,
      },
      {
        heading: { de: "GESCHÄFTSBEREICHE, IN DENEN REGELMÄSSIGE LÜGENDETEKTOR-TESTS BESONDERS GEFRAGT SIND:", en: "BUSINESS AREAS WHERE REGULAR LIE DETECTOR TESTS ARE PARTICULARLY IN DEMAND:" },
        text: "",
        bullets: [
          lang === "en" ? "Private security services: To protect the integrity of security staff" : "Private Sicherheitsdienste: Zum Schutz der Integrität des Wachpersonals",
          lang === "en" ? "Retail: Wherever employees have direct access to goods and assets" : "Einzelhandel: Überall dort, wo Mitarbeiter direkten Zugriff auf Waren und Sachwerte haben",
          lang === "en" ? "Logistics and transport: Especially for drivers, freight forwarders and warehouse workers" : "Logistik und Transport: Insbesondere für Fahrer, Spediteure und Lagerarbeiter",
          lang === "en" ? "Confidential information holders: Companies whose activities involve strictly confidential information" : "Geheimnisträger: Unternehmen, deren Tätigkeit mit streng vertraulichen Informationen verbunden ist",
          lang === "en" ? "Car dealerships and workshops: Where customer vehicles are freely accessible to employees" : "Autohäuser und Werkstätten: Wo Kundenfahrzeuge für die Mitarbeiter frei zugänglich sind",
          lang === "en" ? "Production facilities: Companies with valuable raw materials and expensive machinery" : "Produktionsstätten: Betriebe mit wertvollen Rohstoffen und teuren Maschinen",
          lang === "en" ? "Finance and banking sector: To protect against embezzlement and financial crimes" : "Finanz- und Bankensektor: Zum Schutz vor Unterschlagung und Finanzdelikten",
        ],
      },
    ],
  },
  {
    id: "intern",
    category: "business",
    icon: "fas fa-search",
    title: { de: "Interne Ermittlungen", en: "Internal Investigations" },
    price: "auf Anfrage",
    short: { de: "Aufklärung von Vorfällen und Fehlverhalten im Unternehmen", en: "Investigation of incidents and misconduct within the company" },
    img: "/manus-storage/interne_ermittlungen_new_9a22ff48.jpg",
    features: ["Diskrete Durchführung", "Mehrere Personen möglich", "Offizielles Gutachten", "Rechtlich verwertbar"],
    sections: [
      {
        heading: { de: "INTERNE ERMITTLUNGEN: EFFIZIENTE AUFKLÄRUNG DURCH POLYGRAPHEN-TESTS", en: "INTERNAL INVESTIGATIONS: EFFICIENT RESOLUTION THROUGH POLYGRAPH TESTS" },
        text: lang === "en" ? "When incidents with significant material damage occur in companies, internal investigations are indispensable. The goal is to identify employees who have committed offenses or abused their authority for personal gain. Qualified polygraph examiners guarantee maximum precision and absolute confidentiality. After the tests are completed, you receive objective and reliable information about the actual course of events.\n\nInternal investigations often create tension and stress within the workforce. The use of a polygraph significantly shortens the duration of investigations. Once the guilty parties are identified, the team's working atmosphere stabilizes." : `Wenn in Unternehmen Zwischenfälle mit erheblichem Sachschaden auftreten, sind interne Dienstuntersuchungen unumgänglich. Ziel ist es, Mitarbeiter zu identifizieren, die Straftaten begangen oder ihre Befugnisse zur eigenen Bereicherung missbraucht haben. Qualifizierte Polygraphologen garantieren maximale Präzision und absolute Vertraulichkeit. Nach Abschluss der Tests erhalten Sie objektive und belastbare Informationen über den tatsächlichen Tathergang.\n\nDienstuntersuchungen erzeugen oft Spannungen und Stress innerhalb der Belegschaft. Der Einsatz eines Polygraphen verkürzt die Dauer der Ermittlungen erheblich. Sobald die Schuldigen überführt sind, stabilisiert sich das Mikroklima im Team.`,
      },
      {
        heading: { de: "DURCH EINE POLYGRAPH-UNTERSUCHUNG LASSEN SICH KLÄREN:", en: "ISSUES THAT CAN BE RESOLVED THROUGH A POLYGRAPH EXAMINATION:" },
        text: "",
        bullets: [
          lang === "en" ? "Criminal acts: Facts about committed unlawful activities" : "Tathandlungen: Fakten über begangene rechtswidrige Aktivitäten",
          lang === "en" ? "Credibility: Truthfulness of the statements of the persons questioned" : "Glaubwürdigkeit: Wahrheitsgehalt der Aussagen der befragten Personen",
          lang === "en" ? "Background information: Additional data relevant to the case" : "Hintergrundinformationen: Zusätzliche Daten, die für den Fall relevant sind",
          lang === "en" ? "Parties involved: Identification of all involved persons and their respective roles" : "Beteiligte: Identifizierung aller involvierten Personen und ihrer jeweiligen Rollen",
          lang === "en" ? "Causes: Clarification of the reasons for the extraordinary incident" : "Ursachen: Klärung der Gründe für den außerordentlichen Vorfall",
          lang === "en" ? "Extent of damage: Determining the amount of damage and possibilities for minimization" : "Schadensausmaß: Ermittlung der Schadenshöhe und Möglichkeiten zur Schadensminimierung",
          lang === "en" ? "Prevention: Developing countermeasures to prevent similar incidents in the future" : "Prävention: Entwicklung von Gegenmaßnahmen, um ähnliche Vorfälle künftig zu verhindern",
        ],
      },
    ],
  },
  {
    id: "mobil",
    category: "business",
    icon: "fas fa-car",
    title: { de: "Polygraph mit Hausbesuch", en: "Mobile Polygraph Service" },
    price: "auf Anfrage",
    short: { de: "Wir kommen zu Ihnen – in Ihr Büro oder nach Hause", en: "We come to you – to your office or home" },
    img: "/manus-storage/hausbesuch_new2_dc64ce34.png",
    features: ["Gesamtes Bayern möglich", "Professionelle Ausrüstung", "Diskrete Anreise", "Flexible Termingestaltung"],
    sections: [
      {
        heading: { de: "DIE WAHRHEIT ANS LICHT BRINGEN: POLYGRAPH-TESTS VOR ORT", en: "BRINGING TRUTH TO LIGHT: ON-SITE POLYGRAPH TESTS" },
        text: lang === "en" ? "The truth can often easily be hidden behind deceptions. Today, the lie detector test is one of the most sought-after services for bringing clarity – whether for spouses, teenagers, domestic staff or office employees. Modern devices are capable of precisely recording a variety of chemical and physiological processes in the human body. Our experienced experts prepare reports on topics requested by the client with an accuracy of around 99%." : `Die Wahrheit lässt sich oft leicht hinter Täuschungen verbergen. Heute gehört der Lügendetektortest zu den gefragtesten Dienstleistungen, um Klarheit zu schaffen – sei es für Ehepartner, Jugendliche, Hauspersonal oder Büroangestellte. Moderne Geräte sind in der Lage, eine Vielzahl chemischer und physiologischer Prozesse im menschlichen Körper präzise zu erfassen. Unsere erfahrenen Experten erstellen Gutachten zu den vom Kunden gewünschten Themen mit einer Genauigkeit von rund 99 %.`,
      },
      {
        heading: { de: "DURCHFÜHRUNG VON MOBILEN POLYGRAPH-TESTS (VOR-ORT-SERVICE)", en: "CONDUCTING MOBILE POLYGRAPH TESTS (ON-SITE SERVICE)" },
        text: lang === "en" ? "If you want to test employees, business partners or domestic staff, our experts come directly to the address you specify with the necessary equipment. Conducting the test in a familiar and comfortable environment ensures that the test subjects behave more naturally and are less nervous." : `Wenn Sie Mitarbeiter, Geschäftspartner oder Hauspersonal testen möchten, kommen unsere Experten mit dem erforderlichen Equipment direkt an die von Ihnen angegebene Adresse. Die Durchführung in einer vertrauten und komfortablen Umgebung sorgt dafür, dass sich die Testpersonen natürlicher verhalten und weniger nervös sind.`,
        bullets: [
          lang === "en" ? "Discretion: No need for test subjects to travel to an external institute" : "Diskretion: Keine Anreise der Testpersonen zu einem externen Institut notwendig",
          lang === "en" ? "Comfort: Tests in a familiar environment reduce stress factors" : "Komfort: Tests in der gewohnten Umgebung reduzieren Stressfaktoren",
          lang === "en" ? "Time savings: Minimal downtime for companies and private individuals" : "Zeitersparnis: Minimale Ausfallzeiten für Unternehmen und Privatpersonen",
        ],
      },
    ],
  },
  {
    id: "ehre",
    category: "business",
    icon: "fas fa-balance-scale",
    title: { de: "Schutz von Ehre und Würde", en: "Protection of Honor and Dignity" },
    price: "auf Anfrage",
    short: { de: "Klärung von Verleumdungen und falschen Anschuldigungen", en: "Clarification of defamation and false accusations" },
    img: "/manus-storage/img_ehre_new_opt_28a5f364.jpg",
    features: ["Offizielles Gutachten", "Rechtlich verwertbar", "Schnelle Terminvergabe", "Professionelle Beratung"],
    sections: [
      {
        heading: { de: "REPUTATIONSSCHUTZ: DIE EIGENE UNSCHULD MIT DEM LÜGENDETEKTOR BEWEISEN", en: "REPUTATION PROTECTION: PROVING YOUR INNOCENCE WITH THE LIE DETECTOR" },
        text: lang === "en" ? "People who have access to assets, finances or confidential information in their profession know how crucial an impeccable reputation is for a successful career. This applies at all levels – from ordinary employees to executives and politicians. Career advancement can be abruptly halted when unfounded accusations arise about acts that were never committed in reality.\n\nBut how can such baseless claims be refuted? Our company offers you the opportunity to prove your innocence and put an end to harassment or false suspicions through a lie detector test." : `Menschen, die im Beruf Zugang zu Sachwerten, Finanzen oder geheimen Informationen haben, wissen, wie entscheidend ein tadelloser Ruf für eine erfolgreiche Karriere ist. Dies gilt für alle Ebenen – vom einfachen Angestellten über Führungskräfte bis hin zu Abgeordneten. Der berufliche Aufstieg kann jäh gestoppt werden, wenn unberechtigte Anschuldigungen über Taten laut werden, die man in der Realität nie begangen hat.\n\nDoch wie lassen sich solche haltlosen Behauptungen entkräften? Die Firma bietet Ihnen die Möglichkeit, Ihre Unschuld zu belegen und Nachstellungen oder falsche Verdächtigungen mittels eines Lügendetektortests zu beenden.`,
      },
      {
        heading: { de: "VORTEILE DER ENTLASTUNGSPRÜFUNG:", en: "ADVANTAGES OF THE EXONERATION EXAMINATION:" },
        text: "",
        bullets: [
          lang === "en" ? "Reputation restoration: Effective defense against defamation" : "Wiederherstellung des Rufes: Effektive Abwehr von Verleumdungen",
          lang === "en" ? "Career protection: Protection against professional disadvantages from false accusations" : "Karrieresicherung: Schutz vor beruflichen Nachteilen durch falsche Anschuldigungen",
          lang === "en" ? "Official document: A well-founded expert report as evidence of your integrity" : "Offizielles Dokument: Ein fundierter Expertenbericht als Beweismittel für Ihre Integrität",
        ],
      },
    ],
  },
  {
    id: "geschaefte",
    category: "business",
    icon: "fas fa-handshake",
    title: { de: "Sicherheit bei großen Geschäften", en: "Security in Major Transactions" },
    price: "auf Anfrage",
    short: { de: "Risiken minimieren bei privaten Transaktionen und Vereinbarungen", en: "Minimizing risks in private transactions and agreements" },
    img: "/manus-storage/geschaefte_new2_879fcd94.png",
    features: ["Schnelle Terminvergabe", "Offizielles Gutachten", "Rechtlich verwertbar", "Diskrete Durchführung"],
    sections: [
      {
        heading: { de: "SICHERHEIT BEI GROSSEN GESCHÄFTEN: RISIKEN MINIMIEREN MIT DEM POLYGRAPHEN", en: "SECURITY IN MAJOR TRANSACTIONS: MINIMIZING RISKS WITH THE POLYGRAPH" },
        text: lang === "en" ? "Caution is advised when planning major transactions with unknown parties. To rule out hidden defects, dishonesty or fraud, you can suggest a lie detector test to your business partner. We guarantee fast evaluation, absolute confidentiality and highly precise results." : `Bei geplanten Großgeschäften mit Unbekannten ist Vorsicht geboten. Um versteckte Mängel, Unredlichkeit oder Betrug auszuschließen, können Sie Ihrem Geschäftspartner einen Lügendetektortest vorschlagen. Wir garantieren eine schnelle Auswertung, absolute Vertraulichkeit und hochpräzise Ergebnisse.`,
      },
      {
        heading: { de: "HÄUFIGE ANWENDUNGSBEREICHE:", en: "COMMON AREAS OF APPLICATION:" },
        text: lang === "en" ? "Especially with 'handshake' agreements, without comprehensive legal protection, there is a risk of deception. Problems often arise from hidden motives, false information or fraudulent intentions." : `Besonders bei Vereinbarungen „per Handschlag", ohne umfassende rechtliche Absicherung, besteht das Risiko von Täuschungen. Probleme entstehen oft durch verborgene Motive, Falschinformationen oder betrügerische Absichten.`,
        bullets: [
          lang === "en" ? "Large sums of money: Private loans or investments" : "Große Geldbeträge: Private Darlehen oder Investitionen",
          lang === "en" ? "Real estate purchase/sale: Transactions between private individuals" : "Immobilienkauf/-verkauf: Transaktionen zwischen Privatleuten",
          lang === "en" ? "Vehicles and technology: Transfer of expensive cars, machinery or valuables" : "Fahrzeuge und Technik: Übergabe von teuren Autos, Maschinen oder Wertgegenständen",
          lang === "en" ? "Financial obligations: Securing repayments and debts" : "Finanzielle Verpflichtungen: Absicherung von Rückzahlungen und Schulden",
        ],
      },
      {
        heading: { de: "WARNSIGNALE, BEI DENEN EIN TEST RATSAM IST:", en: "WARNING SIGNS WHERE A TEST IS ADVISABLE:" },
        text: "",
        bullets: [
          lang === "en" ? "Evasive answers: The seller makes unclear statements about the condition of the goods" : "Ausweichende Antworten: Der Verkäufer macht unklare Angaben zum Zustand der Ware",
          lang === "en" ? "Too tempting offers: Extremely low prices that require a high upfront investment" : "Zu verlockende Angebote: Extrem günstige Preise, die eine hohe Vorabinvestition erfordern",
          lang === "en" ? "First contact: When you are doing business with this person for the first time" : "Erstkontakt: Wenn Sie zum ersten Mal mit dieser Person Geschäfte machen",
        ],
      },
    ],
  },
  {
    id: "hausmaedchen",
    icon: "fas fa-broom",
    title: { de: "Überprüfung von Hausmädchen", en: "Housemaid Screening" },
    price: "auf Anfrage",
    short: { de: "Haushälterinnen, Reinigungskräfte und Hauspersonal", en: "Housekeepers, cleaning staff and domestic personnel" },
    img: "/manus-storage/img_hausmaedchen_opt_f3866fbb.jpg",
    features: ["Schnelle Terminvergabe", "Offizielles Gutachten", "Diskrete Durchführung", "Freiwillige Zustimmung"],
    sections: [
      {
        heading: { de: "ÜBERPRÜFUNG VON HAUSMÄDCHEN AUF DEM POLYGRAPHEN", en: "POLYGRAPH SCREENING OF HOUSEMAIDS" },
        text: lang === "en" ? "Housemaids and housekeepers have access to your home, your valuables and your family. A polygraph examination gives you the certainty that you are trusting the right person. We check honesty, reliability and possible risk factors with an accuracy of 98–99%." : `Hausmädchen und Haushälterinnen haben Zugang zu Ihrem Zuhause, Ihren Wertsachen und Ihrer Familie. Eine Polygraphenprüfung gibt Ihnen die Gewissheit, dass Sie der richtigen Person vertrauen. Wir überprüfen Ehrlichkeit, Verlässlichkeit und mögliche Risikofaktoren mit einer Genauigkeit von 98–99 %.`,
      },
      {
        heading: { de: "WAS WIRD GEPRÜFT:", en: "WHAT IS BEING CHECKED:" },
        text: "",
        bullets: [
          lang === "en" ? "Honesty: Detection of theft or fraud" : "Ehrlichkeit: Aufdeckung von Diebstahl oder Betrug",
          lang === "en" ? "Reliability: Checking for alcohol or drug problems" : "Zuverlässigkeit: Überprüfung auf Alkohol- oder Drogenprobleme",
          lang === "en" ? "Background: Criminal history or prior convictions" : "Hintergrund: Kriminelle Vergangenheit oder Vorstrafen",
          lang === "en" ? "Loyalty: Passing on private information to third parties" : "Loyalität: Weitergabe privater Informationen an Dritte",
        ],
      },
    ],
  },
  {
    id: "it-sektor",
    icon: "fas fa-laptop-code",
    title: { de: "Überprüfung im IT-Sektor", en: "IT Sector Screening" },
    price: "auf Anfrage",
    short: { de: "Entwickler, Systemadministratoren und IT-Fachkräfte", en: "Developers, system administrators and IT professionals" },
    img: "/manus-storage/img_it_sektor_opt_435b1468.jpg",
    features: ["Datenschutz sicherstellen", "Offizielles Gutachten", "Vertraulich", "Schnelle Abwicklung"],
    sections: [
      {
        heading: { de: "POLYGRAPHENPRÜFUNG IM IT-SEKTOR", en: "POLYGRAPH EXAMINATION IN THE IT SECTOR" },
        text: lang === "en" ? "IT employees have access to sensitive company data, passwords and critical infrastructure. A polygraph examination helps uncover data leaks, insider threats and unauthorized access. Protect your company from digital risks." : `IT-Mitarbeiter haben Zugang zu sensiblen Unternehmensdaten, Passwörtern und kritischer Infrastruktur. Eine Polygraphenprüfung hilft, Datenlecks, Insider-Bedrohungen und unautorisierten Zugriff aufzudecken. Schützen Sie Ihr Unternehmen vor digitalen Risiken.`,
      },
      {
        heading: { de: "TYPISCHE PRÜFUNGSBEREICHE:", en: "TYPICAL SCREENING AREAS:" },
        text: "",
        bullets: [
          lang === "en" ? "Data leaks: Sharing confidential information with competitors" : "Datenlecks: Weitergabe vertraulicher Informationen an Wettbewerber",
          lang === "en" ? "Sabotage: Intentional damage to systems or data" : "Sabotage: Absichtliche Beschädigung von Systemen oder Daten",
          lang === "en" ? "Insider threats: Abuse of access rights" : "Insider-Bedrohungen: Missbrauch von Zugriffsrechten",
          lang === "en" ? "Loyalty: Secondary employment for competitors" : "Loyalität: Nebentätigkeiten für Konkurrenten",
        ],
      },
    ],
  },
  {
    id: "fahrer",
    icon: "fas fa-car",
    title: { de: "Überprüfung von Fahrern", en: "Driver Screening" },
    price: "auf Anfrage",
    short: { de: "Privat- und Unternehmensfahrer, Kuriere", en: "Private and corporate drivers, couriers" },
    img: "/manus-storage/img_lagerarbeiter_ad34a120.jpg",
    features: ["Sicherheit gewährleisten", "Offizielles Gutachten", "Diskrete Durchführung", "Schnelle Terminvergabe"],
    sections: [
      {
        heading: { de: "POLYGRAPHENPRÜFUNG FÜR FAHRER", en: "POLYGRAPH EXAMINATION FOR DRIVERS" },
        text: lang === "en" ? "Drivers have direct access to persons, vehicles and goods. A polygraph examination gives you certainty about the reliability of your driver – whether a private driver, corporate driver or courier." : `Fahrer haben direkten Zugang zu Personen, Fahrzeugen und Gütern. Eine Polygraphenprüfung gibt Ihnen Sicherheit über die Zuverlässigkeit Ihres Fahrers – ob Privatfahrer, Unternehmensfahrer oder Kurier.`,
      },
      {
        heading: { de: "WAS WIRD GEPRÜFT:", en: "WHAT IS BEING CHECKED:" },
        text: "",
        bullets: [
          lang === "en" ? "Alcohol and drug problems: Risks in road traffic" : "Alkohol- und Drogenprobleme: Risiken im Straßenverkehr",
          lang === "en" ? "Criminal history: Prior convictions or ongoing proceedings" : "Kriminelle Vergangenheit: Vorstrafen oder laufende Verfahren",
          lang === "en" ? "Honesty: Manipulation of logbooks or billing" : "Ehrlichkeit: Manipulation von Fahrtenbüchern oder Abrechnungen",
          lang === "en" ? "Loyalty: Sharing information about routes and persons" : "Loyalität: Weitergabe von Informationen über Routen und Personen",
        ],
      },
    ],
  },
  {
    id: "sicherheitspersonal",
    icon: "fas fa-shield-alt",
    title: { de: "Überprüfung von Sicherheitspersonal", en: "Security Personnel Screening" },
    price: "auf Anfrage",
    short: { de: "Wachleute, Sicherheitsbeamte und Bodyguards", en: "Guards, security officers and bodyguards" },
    img: "/manus-storage/img_sicherheit_opt_b5100c44.jpg",
    features: ["Höchste Sicherheit", "Offizielles Gutachten", "Vertraulich", "Schnelle Abwicklung"],
    sections: [
      {
        heading: { de: "POLYGRAPHENPRÜFUNG FÜR SICHERHEITSPERSONAL", en: "POLYGRAPH EXAMINATION FOR SECURITY PERSONNEL" },
        text: lang === "en" ? "Security personnel bear special responsibility for the protection of persons and property. A polygraph examination ensures that your security forces are honest, reliable and trustworthy." : `Sicherheitspersonal trägt besondere Verantwortung für den Schutz von Personen und Eigentum. Eine Polygraphenprüfung stellt sicher, dass Ihre Sicherheitskräfte integer, zuverlässig und vertrauenswürdig sind.`,
      },
      {
        heading: { de: "PRÜFUNGSSCHWERPUNKTE:", en: "EXAMINATION FOCUS AREAS:" },
        text: "",
        bullets: [
          lang === "en" ? "Integrity: No cooperation with criminal elements" : "Integrität: Keine Zusammenarbeit mit kriminellen Elementen",
          lang === "en" ? "Reliability: No alcohol or drug problems on duty" : "Zuverlässigkeit: Keine Alkohol- oder Drogenprobleme im Dienst",
          lang === "en" ? "Loyalty: Sharing security information with third parties" : "Loyalität: Weitergabe von Sicherheitsinformationen an Dritte",
          lang === "en" ? "Background: Checking for criminal history" : "Hintergrund: Überprüfung auf kriminelle Vergangenheit",
        ],
      },
    ],
  },
  {
    id: "lagerarbeiter",
    icon: "fas fa-warehouse",
    title: { de: "Überprüfung von Lagerarbeitern", en: "Warehouse Worker Screening" },
    price: "auf Anfrage",
    short: { de: "Lagermitarbeiter, Logistik und Versandpersonal", en: "Warehouse staff, logistics and shipping personnel" },
    img: "/manus-storage/img_lagerarbeiter2_715773fd.jpg",
    features: ["Diebstahl verhindern", "Offizielles Gutachten", "Diskrete Durchführung", "Schnelle Terminvergabe"],
    sections: [
      {
        heading: { de: "POLYGRAPHENPRÜFUNG FÜR LAGERARBEITER", en: "POLYGRAPH EXAMINATION FOR WAREHOUSE WORKERS" },
        text: lang === "en" ? "Warehouse workers have direct access to goods, inventory and shipping items. Theft and embezzlement in the warehouse cause significant economic damage. A polygraph examination helps identify perpetrators and act preventively." : `Lagerarbeiter haben direkten Zugang zu Waren, Inventar und Versandgütern. Diebstahl und Unterschlagung im Lager verursachen erhebliche wirtschaftliche Schäden. Eine Polygraphenprüfung hilft, Täter zu identifizieren und präventiv zu wirken.`,
      },
      {
        heading: { de: "TYPISCHE PRÜFUNGSBEREICHE:", en: "TYPICAL SCREENING AREAS:" },
        text: "",
        bullets: [
          lang === "en" ? "Goods theft: Theft of warehouse stock" : "Warendiebstahl: Entwendung von Lagerbeständen",
          lang === "en" ? "Manipulation: Falsification of delivery notes or inventory lists" : "Manipulation: Fälschung von Lieferscheinen oder Inventarlisten",
          lang === "en" ? "Collusion: Cooperation with external thieves" : "Zusammenarbeit: Kooperation mit externen Dieben",
          lang === "en" ? "Honesty: Verification in case of inventory discrepancies" : "Ehrlichkeit: Überprüfung bei Inventurdifferenzen",
        ],
      },
    ],
  },
];
const processSteps = [
  { num: "01", title: { de: "Anfrage & Beratung", en: "Request & Consultation" }, desc: { de: "Sie hinterlassen eine Anfrage auf der Webseite oder kontaktieren uns auf anderem Weg. Wir klären das Anliegen und definieren die Ziele für die bevorstehende Untersuchung.", en: "You submit a request on the website or contact us by another means. We clarify your concern and define the objectives for the upcoming examination." } },
  { num: "02", title: { de: "Aufgabenstellung", en: "Task Definition" }, desc: { de: "Wir konkretisieren das Ziel, stimmen die Fragen ab, klären die Rahmenbedingungen: Anzahl der Personen, Ort der Untersuchung, Zeitplan und Zahlungsmodalitäten.", en: "We specify the objective, agree on the questions, and clarify the framework: number of persons, location, schedule and payment terms." } },
  { num: "03", title: { de: "Testerstellung nach Methodik", en: "Test Design" }, desc: { de: "Basierend auf Ihrer Aufgabe erstellen wir spezielle Tests für die zu prüfende Person. Genau nach diesen Tests wird die Untersuchung durchgeführt.", en: "Based on your task, we create specific tests for the person to be examined. The examination is conducted exactly according to these tests." } },
  { num: "04", title: { de: "Durchführung der Prüfung", en: "Examination" }, desc: { de: "Die durchschnittliche Testdauer beträgt 1,5–2,5 Stunden. Die zu prüfende Person antwortet nur mit Ja oder Nein. Das Verfahren ist vollständig sicher.", en: "The average test duration is 1.5–2.5 hours. The person being tested answers only yes or no. The procedure is completely safe." } },
  { num: "05", title: { de: "Gutachten erstellen", en: "Report Preparation" }, desc: { de: "Es wird ein schriftliches Gutachten erstellt und an Ihre angegebene E-Mail-Adresse gesendet. Alle Informationen sind streng vertraulich.", en: "A written report is prepared and sent to your specified email address. All information is strictly confidential." } },
  { num: "06", title: { de: "Polygraph & Sensoren", en: "Polygraph & Sensors" }, desc: { de: "Wir verwenden einen professionellen Computerpolygraphen der neuesten Generation mit Pneumo-Atemgurt, FPG-Sensor, GSR-Sensor, Blutdrucksensor und Aktivitätssensor.", en: "We use a professional computer polygraph of the latest generation with pneumo breathing belt, FPG sensor, GSR sensor, blood pressure sensor and activity sensor." } },
];

const faqItems = [
  { q: { de: "Wer kann NICHT am Polygraphtest teilnehmen?", en: "Who CANNOT participate in a polygraph test?" }, a: { de: "Die Teilnahme wird nicht empfohlen für: schwangere Frauen, Kinder unter 14 Jahren, Personen mit psychischen Erkrankungen oder schweren Herzerkrankungen, Personen unter Alkohol- oder Drogeneinfluss sowie Personen, die Beruhigungsmittel oder Medikamente einnehmen, die das Nervensystem beeinflussen.", en: "Participation is not recommended for: pregnant women, children under 14 years, persons with mental illnesses or severe heart conditions, persons under the influence of alcohol or drugs, and persons taking sedatives or medications that affect the nervous system." } },
  { q: { de: "Welche Vor- und Nachteile hat der Einsatz eines Lügendetektors?", en: "What are the advantages and disadvantages of using a lie detector?" }, a: { de: "Vorteile: Hohe Genauigkeit (98–99%), objektive Ergebnisse, offizielles Gutachten als Beweismittel, schnelle Klärung von Sachverhalten. Nachteile: Ergebnisse können durch bestimmte Medikamente oder Erkrankungen beeinflusst werden, nicht alle Fragen können getestet werden, die Teilnahme muss freiwillig sein.", en: "Advantages: High accuracy (98–99%), objective results, official report as evidence, quick clarification of facts. Disadvantages: Results can be influenced by certain medications or conditions, not all questions can be tested, participation must be voluntary." } },
  { q: { de: "Wie wird die Ergebnisqualität sichergestellt?", en: "How is result quality ensured?" }, a: { de: "Bei uns wird jeder Test von mindestens zwei unabhängigen Polygraphologen ausgewertet. Erst wenn beide Experten zum gleichen Ergebnis kommen, wird das Gutachten erstellt. Diese doppelte Prüfung macht unsere Ergebnisse besonders zuverlässig und rechtssicher.", en: "Every test at our practice is evaluated by at least two independent polygraph experts. Only when both experts reach the same conclusion is the report issued. This double-check makes our results especially reliable and legally sound." } },
  { q: { de: "Ist es möglich, den Lügendetektor zu täuschen?", en: "Is it possible to fool the lie detector?" }, a: { de: "Moderne Polygraphtechnologie erkennt Versuche, den Test zu manipulieren. Unsere Experten sind speziell geschult, solche Versuche zu identifizieren. Techniken wie kontrolliertes Atmen oder Muskelanspannung werden durch die Kombination mehrerer Sensoren zuverlässig erkannt.", en: "Modern polygraph technology detects attempts to manipulate the test. Our experts are specially trained to identify such attempts. Techniques such as controlled breathing or muscle tension are reliably detected through the combination of multiple sensors." } },
  { q: { de: "Wie bereitet man sich richtig auf einen Polygraphtest vor?", en: "How do you properly prepare for a polygraph test?" }, a: { de: "Für eine optimale Vorbereitung empfehlen wir: Ausreichend schlafen (mindestens 7–8 Stunden), keinen Alkohol 24 Stunden vor dem Test, keine Beruhigungsmittel ohne ärztliche Notwendigkeit, normale Mahlzeiten einnehmen, bequeme Kleidung tragen und pünktlich erscheinen.", en: "For optimal preparation we recommend: Get sufficient sleep (at least 7–8 hours), no alcohol 24 hours before the test, no sedatives unless medically necessary, eat normal meals, wear comfortable clothing and arrive on time." } },
  { q: { de: "Wie genau ist ein Polygraphtest?", en: "How accurate is a polygraph test?" }, a: { de: "Moderne Polygraphtests, die von zertifizierten Experten durchgeführt werden, erreichen eine Genauigkeit von 95–99%. Unsere Spezialisten verfügen über jahrzehntelange Erfahrung und nutzen modernste Geräte der neuesten Generation.", en: "Modern polygraph tests conducted by certified experts achieve an accuracy of 95–99%. Our specialists have decades of experience and use state-of-the-art equipment of the latest generation." } },
  { q: { de: "Ist der Polygraphtest legal in Deutschland?", en: "Is the polygraph test legal in Germany?" }, a: { de: "Ja, Polygraphtests sind in Deutschland legal, wenn die Teilnahme freiwillig ist. Das Ergebnis kann als Beweismittel in Zivilverfahren verwendet werden. Wir erstellen ein offizielles Gutachten, das rechtlich verwertbar ist.", en: "Yes, polygraph tests are legal in Germany when participation is voluntary. The result can be used as evidence in civil proceedings. We prepare an official report that is legally admissible." } },
];

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  const links = [
    [t.nav.services[lang], "services"],
    [t.nav.prices[lang],   "prices"],
    [t.nav.about[lang],    "about"],
    [t.nav.equipment[lang],"equipment"],
    [t.nav.contact[lang],  "contact"],
  ];

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: NAVY, fontFamily: "'Lato', sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", height: "60px", gap: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", flexShrink: 0 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/manus-storage/logo_clean_f9c5298d.png" alt="POLYGRAPH Logo" style={{ width: "42px", height: "42px", objectFit: "contain" }} />
          <span style={{ color: WHITE, fontWeight: 700, fontSize: "20px", letterSpacing: "1px" }}>luegendetektor-test-muenchen.de</span>
        </div>
        <div className="hidden lg:flex" style={{ flex: 1, gap: "22px", alignItems: "center" }}>
          {links.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}
              style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", fontWeight: 500, letterSpacing: "0.3px", background: "none", border: "none", cursor: "pointer", padding: "4px 0", whiteSpace: "nowrap" }}
              onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}>{label}</button>
          ))}
        </div>
        {/* Language switcher */}
        <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <button onClick={() => setLang("de")}
            style={{ padding: "5px 10px", borderRadius: "3px 0 0 3px", border: "1px solid rgba(255,255,255,0.35)", background: lang === "de" ? ORANGE : "transparent", color: WHITE, fontWeight: 700, fontSize: "13px", cursor: "pointer", letterSpacing: "0.5px" }}>DE</button>
          <button onClick={() => setLang("en")}
            style={{ padding: "5px 10px", borderRadius: "0 3px 3px 0", border: "1px solid rgba(255,255,255,0.35)", borderLeft: "none", background: lang === "en" ? ORANGE : "transparent", color: WHITE, fontWeight: 700, fontSize: "13px", cursor: "pointer", letterSpacing: "0.5px" }}>EN</button>
        </div>
        <button onClick={() => scrollTo("contact")} className="hidden md:flex"
          style={{ alignItems: "center", gap: "6px", backgroundColor: ORANGE, color: WHITE, border: "none", padding: "9px 14px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", cursor: "pointer", whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "0.5px", flexShrink: 0 }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
          {t.nav.cta[lang]}
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
          <div style={{ display: "flex", gap: "8px", marginTop: "12px", marginBottom: "8px" }}>
            <button onClick={() => setLang("de")} style={{ flex: 1, padding: "8px", border: "1px solid rgba(255,255,255,0.3)", background: lang === "de" ? ORANGE : "transparent", color: WHITE, fontWeight: 700, fontSize: "13px", cursor: "pointer", borderRadius: "4px" }}>DE – Deutsch</button>
            <button onClick={() => setLang("en")} style={{ flex: 1, padding: "8px", border: "1px solid rgba(255,255,255,0.3)", background: lang === "en" ? ORANGE : "transparent", color: WHITE, fontWeight: 700, fontSize: "13px", cursor: "pointer", borderRadius: "4px" }}>EN – English</button>
          </div>
          <button onClick={() => scrollTo("contact")} style={{ width: "100%", backgroundColor: ORANGE, color: WHITE, border: "none", padding: "11px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", cursor: "pointer", textTransform: "uppercase" }}>{t.nav.cta[lang]}</button>
        </div>
      )}
    </nav>
  );
}
// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
function HeroSection() {
  const { lang } = useLang();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 40%", fontFamily: "'Lato', sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,25,50,0.88) 0%, rgba(15,25,50,0.72) 50%, rgba(15,25,50,0.45) 100%)" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "80px 24px 60px", width: "100%" }}>
        <div style={{ maxWidth: "620px" }}>
          <h1 style={{ color: WHITE, fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
            {t.hero.title1[lang]}<br />{t.hero.title2[lang]}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "18px", fontWeight: 400, marginBottom: "14px" }}>{t.hero.subtitle[lang]}</p>
          <p style={{ color: ORANGE, fontSize: "16px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>{t.hero.accuracy[lang]}</p>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "26px", marginBottom: "36px" }}>{t.hero.anon[lang]}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
            {[{ icon: "fas fa-lock", label: t.hero.badge1[lang] }, { icon: "fas fa-user-tie", label: t.hero.badge2[lang] }, { icon: "fas fa-desktop", label: t.hero.badge3[lang] }, { icon: "fas fa-user-check", label: lang === "de" ? "Doppelte Prüfung durch 2 Experten" : "Double-checked by 2 experts" }].map(b => (
              <div key={b.label} style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.18)", padding: "12px 20px", borderRadius: "6px", minWidth: "170px" }}>
                <i className={b.icon} style={{ color: ORANGE, fontSize: "18px" }}></i>
                <span style={{ color: WHITE, fontSize: "13px", fontWeight: 500 }}>{b.label}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <button onClick={() => scrollTo("contact")}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: ORANGE, color: WHITE, padding: "13px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "14px", border: "none", cursor: "pointer", textTransform: "uppercase" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
              <i className="fas fa-paper-plane"></i> {t.hero.btnRequest[lang]}
            </button>
             <a href="tel:+4917560360003"
               style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "transparent", border: "2px solid rgba(255,255,255,0.5)", color: WHITE, padding: "13px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "14px", textDecoration: "none", textTransform: "uppercase" }}>
               <i className="fas fa-phone-alt"></i> {t.hero.btnPhone[lang]}
             </a>
             <a href="/fremdgehen-beweisen"
               style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.4)", color: WHITE, padding: "13px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "14px", textDecoration: "none", textTransform: "uppercase", backdropFilter: "blur(4px)" }}
               onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.22)"; }}
               onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.12)"; }}>
               <i className="fas fa-balance-scale"></i> Fremdgehen beweisen
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
  const { lang } = useLang();
  return (
    <div style={{ backgroundColor: NAVY, fontFamily: "'Lato', sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="stats-grid">
        {[{ val: t.stats.s1v[lang], label: t.stats.s1l[lang], icon: "fas fa-crosshairs" }, { val: t.stats.s2v[lang], label: t.stats.s2l[lang], icon: "fas fa-award" }, { val: t.stats.s3v[lang], label: t.stats.s3l[lang], icon: "fas fa-check-double" }, { val: t.stats.s4v[lang], label: t.stats.s4l[lang], icon: "fas fa-user-secret" }].map((s, i) => (
          <div key={i} style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: "14px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
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
// SERVICE DETAIL PANEL
// ─────────────────────────────────────────────
function ServiceDetailPanel({ svc, onClose }: { svc: ReturnType<typeof getServices>[0]; onClose: () => void }) {
  const { lang } = useLang();
  return (
    <div style={{ backgroundColor: WHITE, border: `2px solid ${NAVY}`, borderTop: "none", borderRadius: "0 0 8px 8px", overflow: "hidden" }}>
      {/* Image centered */}
      <div style={{ display: "flex", justifyContent: "center", padding: "24px 24px 0" }}>
        <img src={svc.img} alt={typeof svc.title === "object" ? svc.title[lang] : svc.title} style={{ width: "100%", maxWidth: "784px", height: "448px", objectFit: "cover", display: "block", borderRadius: "6px" }} />
      </div>
      {/* Features + intro */}
      <div style={{ padding: "24px 28px 16px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
          {svc.features.map(f => (
            <span key={f} style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: LIGHT_BG, border: `1px solid ${BORDER}`, color: TEXT_DARK, padding: "6px 16px", borderRadius: "20px", fontSize: "15px", fontWeight: 600 }}>
              <i className="fas fa-check" style={{ color: "#22c55e", fontSize: "13px" }}></i>{f}
            </span>
          ))}
        </div>
        {svc.sections[0] && (
          <>
            {svc.sections[0].heading && <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>{typeof svc.sections[0].heading === "object" ? (svc.sections[0].heading as any)[lang] : svc.sections[0].heading}</h3>}
            <p style={{ color: TEXT_DARK, fontSize: "19px", lineHeight: 1.9 }}>{typeof svc.sections[0].text === "object" ? (svc.sections[0].text as any)[lang] : svc.sections[0].text}</p>
          </>
        )}
      </div>

      {/* Additional sections */}
      {svc.sections.slice(1).map((sec, i) => (
        <div key={i} style={{ padding: "0 28px 24px", borderTop: i === 0 ? `1px solid ${BORDER}` : "none" }}>
          {sec.heading && <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.5px", margin: "20px 0 12px" }}>{typeof sec.heading === "object" ? (sec.heading as any)[lang] : sec.heading}</h3>}
          {sec.text && <p style={{ color: TEXT_DARK, fontSize: "19px", lineHeight: 1.9, marginBottom: "12px", whiteSpace: "pre-line" }}>{typeof sec.text === "object" ? (sec.text as any)[lang] : sec.text}</p>}
          {sec.bullets && (
            <ul style={{ margin: "0 0 8px", paddingLeft: "0", listStyle: "none" }}>
              {sec.bullets.map((b, bi) => (
                <li key={bi} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px", fontSize: "19px", color: TEXT_DARK, lineHeight: 1.75 }}>
                  <i className="fas fa-check-circle" style={{ color: ORANGE, fontSize: "16px", marginTop: "3px", flexShrink: 0 }}></i>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* Anzeichen-Link nur für Untreue-Service */}
      {svc.id === "untreue" && (
        <div style={{ padding: "0 24px 16px" }}>
          <a href="/anzeichen-fremdgehen"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: ORANGE, fontWeight: 700, fontSize: "15px", textDecoration: "none", border: `1px solid ${ORANGE}`, borderRadius: "6px", padding: "10px 20px" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,140,0,0.08)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}>
            <i className="fas fa-search"></i>
            Anzeichen für Fremdgehen erkennen →
          </a>
          <a href="/fremdgehen-beweisen"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: NAVY, fontWeight: 700, fontSize: "15px", textDecoration: "none", border: `1px solid ${NAVY}`, borderRadius: "6px", padding: "10px 20px", marginTop: "10px" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(26,42,74,0.06)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}>
            <i className="fas fa-balance-scale"></i>
            Fremdgehen beweisen – legale Möglichkeiten →
          </a>
        </div>
      )}

      {/* CTA */}
      <div style={{ padding: "16px 24px 24px", borderTop: `1px solid ${BORDER}`, display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: ORANGE, color: WHITE, padding: "12px 26px", borderRadius: "4px", fontWeight: 700, fontSize: "15px", border: "none", cursor: "pointer", textTransform: "uppercase" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
            <i className="fas fa-calendar-check"></i> Jetzt anfragen
          </button>
          <a href="tel:+4917560360003"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: NAVY, color: WHITE, padding: "12px 26px", borderRadius: "4px", fontWeight: 700, fontSize: "15px", textDecoration: "none", textTransform: "uppercase" }}>
            <i className="fas fa-phone-alt"></i> +49 175 6036003
          </a>
        </div>
        <button onClick={onClose} style={{ color: TEXT_MID, fontSize: "15px", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}>
          <i className="fas fa-times"></i> Schließen
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// SERVICES SECTION
// ─────────────────────────────────────────────
function ServicesSection() {
  const { lang } = useLang();
  const [openService, setOpenService] = useState<string | null>(null);
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleToggle = (id: string) => {
    const next = openService === id ? null : id;
    setOpenService(next);
    if (next) {
      setTimeout(() => {
        panelRefs.current[next]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  };
  const services = getServices(lang);

  return (
    <section id="services" style={{ backgroundColor: LIGHT_BG, padding: "80px 0", fontFamily: "'Lato', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: ORANGE, fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Unsere Leistungen</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>EINSATZGEBIETE DES POLYGRAPHEN</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, margin: "0 auto 12px" }} />
          <p style={{ color: TEXT_MID, fontSize: "17px" }}>Klicken Sie auf eine Leistung, um mehr Informationen zu erhalten</p>
        </div>



        {/* Service Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {services.map(svc => (
            <div key={svc.id}>
              {/* Button */}
              <button onClick={() => handleToggle(svc.id)}
                style={{
                  width: "100%", textAlign: "left", padding: "16px 20px",
                  borderRadius: openService === svc.id ? "6px 6px 0 0" : "6px",
                  cursor: "pointer", display: "flex", alignItems: "center", gap: "14px",
                  backgroundColor: openService === svc.id ? NAVY : WHITE,
                  color: openService === svc.id ? WHITE : TEXT_DARK,
                  border: openService === svc.id ? `2px solid ${NAVY}` : `2px solid ${BORDER}`,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={e => { if (openService !== svc.id) { e.currentTarget.style.borderColor = NAVY; e.currentTarget.style.boxShadow = "0 4px 12px rgba(26,42,74,0.1)"; } }}
                onMouseLeave={e => { if (openService !== svc.id) { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.04)"; } }}
              >
                {/* Icon */}
                <div style={{ width: "42px", height: "42px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, backgroundColor: openService === svc.id ? "rgba(255,140,0,0.15)" : "#EEF2F7", color: openService === svc.id ? ORANGE : NAVY, fontSize: "16px" }}>
                  <i className={svc.icon}></i>
                </div>
                {/* Text */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: "21px", marginBottom: "4px" }}>{typeof svc.title === "object" ? svc.title[lang] : svc.title}</div>
                  <div style={{ fontSize: "16px", color: openService === svc.id ? "rgba(255,255,255,0.65)" : TEXT_MID }}>{typeof svc.short === "object" ? svc.short[lang] : svc.short}</div>
                </div>
                {/* Price + chevron */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px", flexShrink: 0 }}>
                  <span style={{ color: ORANGE, fontWeight: 700, fontSize: "17px" }}>{svc.price}</span>
                  <i className={`fas fa-chevron-${openService === svc.id ? "up" : "down"}`} style={{ color: openService === svc.id ? "rgba(255,255,255,0.5)" : "#A0AEC0", fontSize: "11px" }}></i>
                </div>
              </button>

              {/* Detail Panel */}
              {openService === svc.id && (
                <div ref={el => { panelRefs.current[svc.id] = el; }}>
                  <ServiceDetailPanel svc={svc} onClose={() => setOpenService(null)} />
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
  const { lang } = useLang();
  return (
    <section id="about" style={{ backgroundColor: WHITE, padding: "80px 0", fontFamily: "'Lato', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="grid-2col">
          <div>
            <p style={{ color: ORANGE, fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Über unss</p>
            <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>POLYGRAPH MÜNCHEN</h2>
            <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, marginBottom: "22px" }} />
            <p style={{ color: TEXT_DARK, fontSize: "18px", lineHeight: 1.8, marginBottom: "14px" }}><strong>POLYGRAPH München</strong> – professionelle Polygraphuntersuchungen für Unternehmen und Privatpersonen.</p>
            <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.8, marginBottom: "14px" }}>Wir helfen dabei, die Wahrheit dort aufzudecken, wo Worte täuschen können. Unsere Experten mit langjähriger Erfahrung führen präzise und objektive Untersuchungen am Lügendetektor durch.</p>
            <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.8, marginBottom: "28px" }}>Vertrauen Sie den Profis – gewinnen Sie Sicherheit in Menschen und Entscheidungen!</p>
            {/* Quality highlight box */}
            <div style={{ background: `linear-gradient(135deg, rgba(255,140,0,0.08) 0%, rgba(26,42,74,0.06) 100%)`, border: `2px solid ${ORANGE}`, borderRadius: "10px", padding: "22px 28px", marginBottom: "28px", display: "flex", alignItems: "flex-start", gap: "18px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="fas fa-user-check" style={{ color: WHITE, fontSize: "20px" }}></i>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: NAVY, fontSize: "17px", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{lang === "de" ? "Doppelte Qualitätssicherung" : "Double Quality Assurance"}</div>
                <div style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.65 }}>{lang === "de" ? "Jeder Test wird von mindestens zwei unabhängigen Polygraphologen ausgewertet – so stimmen die Ergebnisse immer überein und sind wasserdicht." : "Every test is evaluated by at least two independent polygraph experts – this ensures results are always consistent and airtight."}</div>
              </div>
            </div>
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
              { icon: "fas fa-map-marker-alt", title: "München", desc: "Marienstr. 4, 80331 München – täglich 10:00–22:00 Uhr" },
            ].map(item => (
              <div key={item.title} style={{ display: "flex", gap: "14px", marginBottom: "18px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(255,140,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className={item.icon} style={{ color: ORANGE, fontSize: "16px" }}></i>
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: NAVY, fontSize: "18px", marginBottom: "8px" }}>{item.title}</div>
                  <div style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.6 }}>{item.desc}</div>
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
  const { lang } = useLang();
  return (
    <section id="process" style={{ backgroundColor: "#f8fafc", padding: "80px 0", fontFamily: "'Lato', sans-serif", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ color: ORANGE, fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>{lang === "de" ? "Unser Verfahren" : "Our Process"}</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>{t.process.heading[lang]}</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: ORANGE, margin: "0 auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px" }}>
          {processSteps.map((step, i) => (
            <div key={i} style={{ backgroundColor: WHITE, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "26px", borderTop: `3px solid ${ORANGE}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: "3.5rem", fontWeight: 700, color: "rgba(255,140,0,0.2)", lineHeight: 1, marginBottom: "12px", fontFamily: "monospace" }}>{step.num}</div>
              <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "15px", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{typeof step.title === "object" ? (step.title as any)[lang] : step.title}</h3>
              <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.75 }}>{typeof step.desc === "object" ? (step.desc as any)[lang] : step.desc}</p>
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
  const { lang } = useLang();
  return (
    <section id="equipment" style={{ backgroundColor: LIGHT_BG, padding: "80px 0", fontFamily: "'Lato', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: ORANGE, fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Technologie</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>{t.equipment.heading[lang]}</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, margin: "0 auto 14px" }} />
          <p style={{ color: TEXT_MID, fontSize: "17px", maxWidth: "600px", margin: "0 auto" }}>{lang === "de" ? "Wir verwenden ausschließlich professionelle Computerpolygraphen der neuesten Generation" : "We use exclusively professional computer polygraphs of the latest generation"}</p>
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
              <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "18px", marginBottom: "8px" }}>{item.title}</h3>
              <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.7 }}>{item.desc}</p>
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
  const { lang } = useLang();
  return (
    <section style={{ backgroundColor: ORANGE, padding: "48px 0", fontFamily: "'Lato', sans-serif" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
        <div>
          <h2 style={{ color: WHITE, fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>{t.cta.heading[lang]}</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "17px" }}>{t.contact.hoursVal[lang]} · Marienstr. 4, München</p>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="tel:+4917560360003" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: WHITE, color: ORANGE, padding: "12px 24px", borderRadius: "4px", fontWeight: 700, fontSize: "16px", textDecoration: "none", textTransform: "uppercase" }}>
            <i className="fas fa-phone-alt"></i> +49 175 6036003
          </a>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "transparent", border: "2px solid white", color: WHITE, padding: "12px 24px", borderRadius: "4px", fontWeight: 700, fontSize: "16px", cursor: "pointer", textTransform: "uppercase" }}>
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
  const { lang } = useLang();
  return (
    <section id="specialists" style={{ backgroundColor: WHITE, padding: "80px 0", fontFamily: "'Lato', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: ORANGE, fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>{lang === "de" ? "Unser Team" : "Our Team"}</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>{t.specialists.heading[lang]}</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, margin: "0 auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px", maxWidth: "800px", margin: "0 auto" }}>
          {[
            { name: t.specialists.s1name[lang], role: t.specialists.s1role[lang], exp: lang === "de" ? "20 Jahre Erfahrung" : "20 years of experience", edu: lang === "de" ? "Höhere Bildung, Praktische Psychologie" : "Higher Education, Practical Psychology", photo: "/manus-storage/dimitri_razarenov_small_81cada6d.jpg" },
            { name: t.specialists.s2name[lang], role: t.specialists.s2role[lang], exp: lang === "de" ? "23 Jahre Erfahrung" : "23 years of experience", edu: lang === "de" ? "Höhere Bildung, Diplompsychologin" : "Higher Education, Graduate Psychologist", photo: "/manus-storage/tatjana_neubauer_small_10444990.jpg" },
          ].map(s => (
            <div key={s.name} style={{ backgroundColor: LIGHT_BG, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "36px 28px", textAlign: "center", borderTop: `4px solid ${ORANGE}` }}>
              <div style={{ width: "120px", height: "120px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 20px", border: `3px solid ${ORANGE}` }}>
                <img src={s.photo} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "22px", marginBottom: "4px" }}>{s.name}</h3>
              <p style={{ color: ORANGE, fontWeight: 700, fontSize: "16px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>{s.role}</p>
              <p style={{ color: "#22c55e", fontWeight: 700, fontSize: "14px", marginBottom: "10px" }}><i className="fas fa-award mr-1"></i>{s.exp}</p>
              <p style={{ color: TEXT_MID, fontSize: "14px" }}>{s.edu}</p>
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
  const { lang } = useLang();
  return (
    <section id="prices" style={{ backgroundColor: LIGHT_BG, padding: "80px 0", fontFamily: "'Lato', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: ORANGE, fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>{lang === "de" ? "Transparente Preise" : "Transparent Prices"}</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>{t.prices.heading[lang]}</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, margin: "0 auto 12px" }} />
          <p style={{ color: TEXT_MID, fontSize: "17px" }}>Keine versteckten Kosten – transparente und faire Preisgestaltung</p>
        </div>
        <div style={{ backgroundColor: WHITE, border: `1px solid ${BORDER}`, borderRadius: "8px", overflow: "hidden", maxWidth: "800px", margin: "0 auto 24px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
          <div style={{ backgroundColor: NAVY, padding: "14px 24px", display: "grid", gridTemplateColumns: "1fr auto" }}>
            <span style={{ color: WHITE, fontWeight: 700, fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Leistung</span>
            <span style={{ color: ORANGE, fontWeight: 700, fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Preis</span>
          </div>
          {getServices(lang).map((svc, i) => (
            <div key={svc.id} style={{ padding: "13px 24px", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", borderBottom: `1px solid ${BORDER}`, backgroundColor: i % 2 === 0 ? WHITE : "#FAFBFC" }}>
              <span style={{ color: TEXT_DARK, fontSize: "16px" }}>
                <i className="fas fa-check-circle mr-2" style={{ color: "#22c55e", fontSize: "11px" }}></i>{typeof svc.title === "object" ? (svc.title as any)[lang] : svc.title}
              </span>
              <span style={{ color: ORANGE, fontWeight: 700, fontSize: "17px", whiteSpace: "nowrap" }}>{svc.price}</span>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: "15px", color: TEXT_MID, marginBottom: "18px" }}>
          <i className="fas fa-info-circle mr-1" style={{ color: BLUE_LINE }}></i>
          Der genaue Preis wird nach dem kostenlosen Erstgespräch festgelegt. Gruppenrabatte möglich.
        </p>
        <div style={{ textAlign: "center" }}>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: ORANGE, color: WHITE, padding: "12px 26px", borderRadius: "4px", fontWeight: 700, fontSize: "16px", border: "none", cursor: "pointer", textTransform: "uppercase" }}
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
  const { lang } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faq" style={{ backgroundColor: WHITE, padding: "80px 0", fontFamily: "'Lato', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: ORANGE, fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Fragen & Antworten</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>{t.faq.heading[lang]}</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, margin: "0 auto 12px" }} />
          <p style={{ color: TEXT_MID, fontSize: "17px", maxWidth: "600px", margin: "0 auto" }}>Basierend auf unserer Erfahrung haben wir eine Liste der häufigsten Fragen zusammengestellt</p>
        </div>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faqItems.map((item, i) => (
            <div key={i} style={{ backgroundColor: LIGHT_BG, border: `1px solid ${BORDER}`, borderRadius: "6px", marginBottom: "8px", overflow: "hidden" }}>
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{ width: "100%", textAlign: "left", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", background: "none", border: "none", cursor: "pointer" }}>
                <span style={{ fontWeight: 700, fontSize: "17px", color: NAVY, lineHeight: 1.4 }}>{typeof item.q === "object" ? (item.q as any)[lang] : item.q}</span>
                <i className={`fas fa-chevron-${openIdx === i ? "up" : "down"}`} style={{ color: ORANGE, flexShrink: 0 }}></i>
              </button>
              {openIdx === i && (
                <div style={{ padding: "0 20px 16px", borderTop: `1px solid ${BORDER}` }}>
                  <p style={{ color: TEXT_DARK, fontSize: "17px", lineHeight: 1.8, paddingTop: "12px" }}>{typeof item.a === "object" ? (item.a as any)[lang] : item.a}</p>
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
  const { lang } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <>
    <section id="contact" style={{ backgroundColor: WHITE, padding: "80px 0", fontFamily: "'Lato', sans-serif", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ color: ORANGE, fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>{t.contact.sub[lang]}</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>{t.contact.heading[lang]}</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: ORANGE, margin: "0 auto" }} />
        </div>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          {/* FORM oben */}
          <div style={{ marginBottom: "56px" }}>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: LIGHT_BG, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "40px" }}>
                <i className="fas fa-check-circle" style={{ fontSize: "52px", color: "#22c55e", marginBottom: "16px" }}></i>
                <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "20px", marginBottom: "10px" }}>{t.contact.thankYou[lang]}</h3>
                <p style={{ color: TEXT_MID, fontSize: "14px", lineHeight: 1.7 }}>{t.contact.thankMsg[lang]}</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { name: "name", label: t.contact.formName[lang], type: "text", placeholder: t.contact.formPh1[lang], required: true },
                  { name: "phone", label: t.contact.formPhone[lang], type: "tel", placeholder: t.contact.formPh2[lang], required: false },
                  { name: "email", label: t.contact.formEmail[lang], type: "email", placeholder: t.contact.formPh3[lang], required: true },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: "block", color: TEXT_DARK, fontSize: "15px", fontWeight: 700, marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} required={f.required}
                      value={form[f.name as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.name]: e.target.value })}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: "4px", fontSize: "16px", outline: "none", backgroundColor: WHITE, border: `1px solid ${BORDER}`, color: TEXT_DARK, boxSizing: "border-box" }}
                      onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                      onBlur={e => (e.currentTarget.style.borderColor = BORDER)} />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", color: TEXT_DARK, fontSize: "15px", fontWeight: 700, marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{t.contact.formMsg[lang].toUpperCase()}</label>
                  <textarea rows={4} placeholder={t.contact.formPh4[lang]}
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "4px", fontSize: "16px", outline: "none", backgroundColor: WHITE, border: `1px solid ${BORDER}`, color: TEXT_DARK, resize: "none", boxSizing: "border-box" }}
                    onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                    onBlur={e => (e.currentTarget.style.borderColor = BORDER)} />
                </div>
                <button type="submit"
                  style={{ padding: "11px", borderRadius: "4px", backgroundColor: ORANGE, color: WHITE, fontWeight: 700, fontSize: "17px", textTransform: "uppercase", border: "none", cursor: "pointer", marginTop: "28px" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
                  <i className="fas fa-paper-plane" style={{ marginRight: "8px" }}></i>{t.contact.btnSend[lang]}
                </button>
                <p style={{ color: TEXT_MID, fontSize: "14px", textAlign: "center", marginTop: "8px" }}>
                  <i className="fas fa-lock" style={{ marginRight: "4px" }}></i>{t.contact.privacy[lang]}
                </p>
              </form>
            )}
          </div>

          {/* KONTAKTINFORMATIONEN unten */}
          <div style={{ borderTop: `2px solid ${BORDER}`, paddingTop: "40px" }}>
            <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "17px", marginBottom: "24px", textTransform: "uppercase" }}>{t.contact.infoTitle[lang].toUpperCase()}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 32px" }} className="grid-2col">
              {[
                { icon: "fas fa-map-marker-alt", label: lang === "de" ? "Adresse" : "Address", val: "Marienstr. 4, 80331 München", href: undefined },
                { icon: "fas fa-phone-alt", label: lang === "de" ? "Telefon" : "Phone", val: "+49 175 6036003", href: "tel:+4917560360003" },
                { icon: "fas fa-envelope", label: lang === "de" ? "E-Mail" : "Email", val: "beratung@lügendetektortest.com", href: "mailto:beratung@lügendetektortest.com" },
                { icon: "fab fa-whatsapp", label: "WhatsApp", val: "+49 175 6036003", href: "https://wa.me/491756036003" },
                { icon: "fas fa-clock", label: lang === "de" ? "Öffnungszeiten" : "Opening Hours", val: t.contact.hoursVal[lang], sub: t.contact.hoursSub[lang], href: undefined },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(255,140,0,0.12)", color: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "14px" }}>
                    <i className={c.icon}></i>
                  </div>
                  <div>
                    <div style={{ color: TEXT_MID, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} style={{ color: NAVY, fontWeight: 700, fontSize: "16px", textDecoration: "none" }}
                        onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                        onMouseLeave={e => (e.currentTarget.style.color = NAVY)}>{c.val}</a>
                    ) : (
                      <span style={{ color: NAVY, fontWeight: 700, fontSize: "16px" }}>{c.val}</span>
                    )}
                    {(c as any).sub && <div style={{ color: TEXT_MID, fontSize: "13px", marginTop: "3px" }}>{(c as any).sub}</div>}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "28px", display: "flex", gap: "10px" }}>
              <a href="https://wa.me/491756036003" target="_blank" rel="noopener noreferrer"
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: GREEN_WA, color: WHITE, padding: "11px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", textDecoration: "none", textTransform: "uppercase" }}>
                <i className="fab fa-whatsapp"></i> {t.contact.btnWA[lang]}
              </a>
              <a href="mailto:beratung@lügendetektortest.com"
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: ORANGE, color: WHITE, padding: "11px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", textDecoration: "none", textTransform: "uppercase" }}>
                <i className="fas fa-envelope"></i> {t.contact.btnEmail[lang]}
              </a>
            </div>
            <p style={{ color: TEXT_MID, fontSize: "14px", textAlign: "center", marginTop: "8px" }}>
              <i className="fas fa-lock" style={{ marginRight: "4px" }}></i>{t.contact.privacy[lang]}
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
function Footer({ onLegalOpen, docKeyMap }: { onLegalOpen: (key: string) => void; docKeyMap: Record<string, string> }) {
  const { lang } = useLang();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer style={{ backgroundColor: NAVY_DARK, fontFamily: "'Lato', sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 24px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "36px" }} className="grid-footer">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <img src="/manus-storage/logo_clean_f9c5298d.png" alt="Logo" style={{ width: "38px", height: "38px", objectFit: "contain" }} />
              <div>
                <div style={{ color: WHITE, fontWeight: 700, fontSize: "15px", letterSpacing: "1px" }}>luegendetektor-test-muenchen.de</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.75, marginBottom: "14px" }}>{t.footer.desc[lang]}</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href="https://wa.me/491756036003" target="_blank" rel="noopener noreferrer" style={{ width: "34px", height: "34px", backgroundColor: GREEN_WA, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, textDecoration: "none", fontSize: "15px" }}>
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="mailto:beratung@lügendetektortest.com" style={{ width: "34px", height: "34px", backgroundColor: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, textDecoration: "none", fontSize: "13px" }}>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ color: WHITE, fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "14px" }}>{t.footer.navTitle[lang]}</h4>
            {t.footer.nav.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "13px", background: "none", border: "none", cursor: "pointer", padding: "3px 0", textAlign: "left" }}
                onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>{item[lang]}</button>
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
            {["Allgemeine Geschäftsbedingungen", "Datenschutzerklärung", "Impressum", "Vertraulichkeitsvereinbarung", "Freiwillige Einwilligung", "Merkblatt für Probanden"].map(d => (
              <button key={d} onClick={() => onLegalOpen(docKeyMap[d])} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "13px", background: "none", border: "none", cursor: "pointer", padding: "3px 0", textAlign: "left" }}
                onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>{d}</button>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "18px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>© 2014 – 2026 POLYGRAPH München. {t.footer.copyright[lang]}</p>
          <div style={{ display: "flex", gap: "18px" }}>
            {["Datenschutzerklärung", "Impressum", "AGB"].map(l => {
              const keyMap: Record<string, string> = { "Datenschutzerklärung": "datenschutz", "Impressum": "impressum", "AGB": "agb" };
              return (
                <button key={l} onClick={() => onLegalOpen(keyMap[l])} style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", background: "none", border: "none", cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}>{l}</button>
              );
            })}
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
        style={{ width: "52px", height: "52px", backgroundColor: GREEN_WA, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: WHITE, fontSize: "24px", textDecoration: "none", boxShadow: "0 4px 14px rgba(37,211,102,0.4)" }}>
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="mailto:beratung@lügendetektortest.com"
        style={{ width: "52px", height: "52px", backgroundColor: ORANGE, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: WHITE, fontSize: "20px", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,140,0,0.4)" }}>
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// LEGAL MODAL
// ─────────────────────────────────────────────
function LegalModal({ docKey, onClose }: { docKey: string; onClose: () => void }) {
  const doc = legalDocs[docKey as keyof typeof legalDocs];
  if (!doc) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        backgroundColor: "rgba(0,0,0,0.75)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          backgroundColor: "#fff", borderRadius: "10px",
          maxWidth: "760px", width: "100%",
          maxHeight: "85vh", display: "flex", flexDirection: "column",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 28px", borderBottom: "1px solid #e5e7eb",
          backgroundColor: "#1a2a4a", borderRadius: "10px 10px 0 0",
        }}>
          <h2 style={{ color: "#fff", fontSize: "20px", fontWeight: 700, margin: 0 }}>{doc.title}</h2>
          <button
            onClick={onClose}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(255,255,255,0.7)", fontSize: "26px", lineHeight: 1,
              padding: "0 4px",
            }}
          >×</button>
        </div>
        {/* Scrollable Content */}
        <div
          style={{ overflowY: "auto", padding: "28px", flex: 1 }}
          dangerouslySetInnerHTML={{ __html: doc.content }}
        />
        {/* Footer */}
        <div style={{ padding: "16px 28px", borderTop: "1px solid #e5e7eb", textAlign: "right" }}>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "#FF8C00", color: "#fff",
              border: "none", borderRadius: "6px",
              padding: "10px 28px", fontSize: "15px", fontWeight: 600,
              cursor: "pointer",
            }}
          >Schließen</button>
        </div>
      </div>
    </div>
  );
}

// ── REPORT SECTION ──
function ReportSection() {
  const { lang } = useLang();
  const r = t.report;
  const L = lang as "de" | "en";
  const accent = "#f59e0b";
  const bg = "#f8fafc";
  const cardBg = WHITE;
  return (
    <div id="report" style={{ background: bg, padding: "80px 0", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ color: NAVY, fontSize: 32, fontWeight: 800, letterSpacing: 2, margin: 0 }}>{r.heading[L]}</h2>
          <div style={{ width: 60, height: 3, background: accent, margin: "12px auto 0" }} />
          <p style={{ color: TEXT_MID, marginTop: 12 }}>{r.sub[L]}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }} className="grid-2col">
          {/* Left: intro + sections */}
          <div>
            <p style={{ color: TEXT_MID, marginBottom: 28, lineHeight: 1.8, fontSize: 16 }}>{r.intro[L]}</p>
            {[
              { title: r.section1Title[L], items: r.section1Items.map(i => i[L]) },
              { title: r.section2Title[L], items: r.section2Items.map(i => i[L]) },
              { title: r.section3Title[L], items: r.section3Items.map(i => i[L]) },
            ].map((sec, idx) => (
              <div key={idx} style={{ background: cardBg, borderRadius: 10, padding: "24px 28px", marginBottom: 16, border: `1px solid ${BORDER}`, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                <h4 style={{ color: accent, fontWeight: 700, margin: "0 0 14px", fontSize: 17 }}>{sec.title}</h4>
                <ul style={{ margin: 0, paddingLeft: 22 }}>
                  {sec.items.map((item, i) => (
                    <li key={i} style={{ color: TEXT_MID, marginBottom: 8, fontSize: 15, lineHeight: 1.6 }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{ marginTop: 16, background: accent, color: "#000", border: "none", borderRadius: 6, padding: "16px 36px", fontWeight: 700, fontSize: 15, letterSpacing: 1, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}
            >
              {r.btnRequest[L]}
            </button>
          </div>
          {/* Right: info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Report structure card */}
            <div style={{ background: cardBg, borderRadius: 12, padding: "32px 28px", border: `2px solid ${accent}44`, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                <div style={{ background: accent, borderRadius: 8, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 24 }}>📄</span>
                </div>
                <div style={{ color: NAVY, fontWeight: 700, fontSize: 18 }}>{lang === "de" ? "Polygraph-Gutachten" : "Polygraph Report"}</div>
              </div>
              {[r.section1Title[L], r.section2Title[L], r.section3Title[L]].map((sec, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: i < 2 ? `1px solid ${BORDER}` : "none" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: accent, flexShrink: 0 }} />
                  <span style={{ color: TEXT_DARK, fontSize: 16 }}>{sec}</span>
                </div>
              ))}
            </div>
            {/* Double verification card */}
            <div style={{ background: cardBg, borderRadius: 12, padding: "28px", border: `1px solid ${BORDER}`, boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ background: "#eff6ff", borderRadius: 8, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 24 }}>👥</span>
                </div>
                <div>
                  <div style={{ color: NAVY, fontWeight: 700, fontSize: 17, marginBottom: 8 }}>
                    {lang === "de" ? "Doppelte Überprüfung durch 2 Spezialisten" : "Double verification by 2 specialists"}
                  </div>
                  <p style={{ color: TEXT_MID, fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                    {lang === "de"
                      ? "Das Ergebnis wird von zwei unabhängigen Polygraphologen geprüft und analysiert. Erst nach dieser doppelten Kontrolle wird der vollständige Bericht erstellt."
                      : "The result is reviewed and analyzed by two independent polygraphers. Only after this double verification is the complete report prepared."}
                  </p>
                </div>
              </div>
            </div>
            {/* Written report price card */}
            <div style={{ background: cardBg, borderRadius: 12, padding: "28px", border: `2px solid ${accent}`, boxShadow: "0 2px 8px rgba(245,158,11,0.12)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ background: "#fffbeb", borderRadius: 8, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 24 }}>📋</span>
                </div>
                <div>
                  <div style={{ color: NAVY, fontWeight: 700, fontSize: 17, marginBottom: 8 }}>
                    {lang === "de" ? "Schriftlicher Bericht" : "Written Report"}
                  </div>
                  <p style={{ color: TEXT_MID, fontSize: 15, lineHeight: 1.7, margin: "0 0 12px" }}>
                    {lang === "de"
                      ? "Der vollständige schriftliche Bericht kann auf Wunsch gegen einen Aufpreis ausgestellt werden."
                      : "The complete written report can be issued on request for an additional fee."}
                  </p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: accent, borderRadius: 6, padding: "8px 18px" }}>
                    <span style={{ color: "#000", fontWeight: 800, fontSize: 20 }}>150 €</span>
                    <span style={{ color: "#000", fontSize: 14, fontWeight: 600 }}>{lang === "de" ? "Aufpreis" : "additional fee"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── CASE STUDIES SECTION ──
function CasesSection() {
  const { lang } = useLang();
  const c = t.cases;
  const L = lang as "de" | "en";
  const accent = "#f59e0b";
  const bg = WHITE;
  const cardBg = "#f8fafc";
  return (
    <div id="cases" style={{ background: bg, padding: "80px 0", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ color: NAVY, fontSize: 32, fontWeight: 800, letterSpacing: 2, margin: 0 }}>{c.heading[L]}</h2>
          <div style={{ width: 60, height: 3, background: accent, margin: "12px auto 0" }} />
          <p style={{ color: TEXT_MID, marginTop: 12 }}>{c.sub[L]}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="detail-grid">
          {c.items.map((item, idx) => {
            const lines = item[L].split("\n\n");
            const title = lines[0] || "";
            const body = lines.slice(1).join("\n\n");
            return (
              <div key={idx} style={{ background: cardBg, borderRadius: 10, padding: "28px 24px", borderLeft: `4px solid ${accent}`, border: `1px solid ${BORDER}`, borderLeftWidth: 4, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <div style={{ color: TEXT_MID, fontSize: 12, marginBottom: 10 }}>{c.dates[idx]}</div>
                <div style={{ color: NAVY, fontWeight: 700, fontSize: 15, marginBottom: 12, lineHeight: 1.4 }}>{title}</div>
                <p style={{ color: TEXT_DARK, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{body}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default function Home() {
  const [legalDoc, setLegalDoc] = useState<string | null>(null);

  const docKeyMap: Record<string, string> = {
    "Allgemeine Geschäftsbedingungen": "agb",
    "Datenschutzerklärung": "datenschutz",
    "Impressum": "impressum",
    "Vertraulichkeitsvereinbarung": "vertraulichkeit",
    "Freiwillige Einwilligung": "einwilligung",
    "Merkblatt für Probanden": "merkblatt",
  };

  return (
    <div style={{ fontFamily: "'Lato', sans-serif" }}>
      <style>{`
        @media (max-width: 768px) {
          .grid-2col { grid-template-columns: 1fr !important; }
          .grid-footer { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .detail-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .grid-footer { grid-template-columns: 1fr !important; }
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
      <ReportSection />
      <CasesSection />
      <FAQSection />
      <ContactSection />
      <Footer onLegalOpen={(key) => setLegalDoc(key)} docKeyMap={docKeyMap} />
      <FloatingWidgets />
      {legalDoc && <LegalModal docKey={legalDoc} onClose={() => setLegalDoc(null)} />}
    </div>
  );
}
