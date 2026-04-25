import { useState } from "react";
import { legalDocs } from "../data/legalDocs";

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

const allServices = [
  // ── PRIVAT ──
  {
    id: "untreue",
    category: "private",
    icon: "fas fa-heart-broken",
    title: "Überprüfung auf Untreue",
    price: "ab 649 €",
    short: "Klärung bei Verdacht auf Untreue in der Partnerschaft",
    img: "/manus-storage/img_untreue_new_ec6a03cd.png",
    features: ["Vertrauliches Vorgespräch", "Professionelle Testdurchführung", "Schriftliches Gutachten", "Nachberatung möglich"],
    sections: [
      {
        heading: "TREUETESTS PER LÜGENDETEKTOR: KLARHEIT FÜR DIE BEZIEHUNG",
        text: `Mit der Eheschließung schwören sich Ehepartner Treue. Doch Beziehungen sind zerbrechlich, und das Leben schreibt oft andere Geschichten. Manchmal ist ein Lügendetektortest auf Untreue der einzige effektive Weg, eine Familie zu retten oder – im Gegenteil – Gewissheit über einen Betrug zu erlangen. In jedem Fall hilft das Ergebnis dabei, quälendes Misstrauen, Zweifel und Unsicherheit gegenüber sich selbst und dem Partner zu überwinden.`,
      },
      {
        heading: "PRÜFUNG DER PARTNERSTREUE MIT DEM POLYGRAPHEN",
        text: `Wer seinen Partner betrügt, setzt oft alles daran, die Untreue zu verbergen. Solche Partner werden extrem vorsichtig: Sie bemerken Beschattungen oder vermeiden es, am Telefon über sensible Themen zu sprechen. Daher ist der Lügendetektortest oft die einzige schnelle und effektive Möglichkeit, jemanden zu entlarven.\n\nWir stehen beiden Seiten offen: Sowohl dem Partner, der des Betrugs verdächtigt wird, als auch demjenigen, der die Vermutung hegt. Eifersucht und Zweifel sind zerstörerische Gefühle. Durch einen Polygraph-Test können Paare verlorenes Vertrauen wiederherstellen oder entscheiden, ob die Beziehung beendet werden muss. Unbegründete Verdächtigungen können sonst zu Neurosen und unerträglichen Lebensbedingungen für die gesamte Familie führen.\n\nDie Ergebnisse liefern Fakten, die das Risiko drastischer Fehlentscheidungen minimieren. Wenn der Verdacht des Ehebruchs durch den Experten nicht bestätigt wird, können Trennungen, psychische Traumata sowie finanzielle und materielle Verluste verhindert werden.`,
      },
    ],
  },
  {
    id: "jugendliche",
    category: "private",
    icon: "fas fa-child",
    title: "Überprüfung von Jugendlichen ab 14 Jahren",
    price: "ab 749 €",
    short: "Klärung von Verhaltensauffälligkeiten bei Jugendlichen",
    img: "/manus-storage/img_jugendliche_71d37249.png",
    features: ["Elterliche Zustimmung erforderlich", "Einfühlsame Durchführung", "Psychologische Begleitung", "Schriftliches Gutachten"],
    sections: [
      {
        heading: "DIE PUBERTÄT: HERAUSFORDERUNGEN MEISTERN",
        text: `Die Pubertät ist oft eine Phase der Verunsicherung für Eltern und Lehrkräfte. Jugendliche befinden sich in einem Übergangszustand, in dem sie weder Kind noch vollständig erwachsen sind. Verhaltensweisen können provokant wirken oder durch sozialen Rückzug geprägt sein. Während dies oft Teil der normalen Identitätsfindung ist, können in manchen Fällen auch tiefere Konflikte vorliegen.\n\nAnstatt auf technische Überprüfungsverfahren zu setzen, empfehlen Fachleute in der Regel den Aufbau von Vertrauen und den offenen Dialog. Wenn der Verdacht auf ernsthafte Probleme wie Substanzmissbrauch oder psychische Belastungen besteht, ist die Beratung durch qualifizierte Psychologen oder spezialisierte Beratungsstellen ein bewährter Weg. Diese unterstützen Familien dabei, die Ursachen für Verhaltensänderungen zu verstehen und gemeinsam Lösungen zu erarbeiten.\n\nDie Förderung einer gesunden Entwicklung basiert auf gegenseitigem Respekt und Unterstützung, um Jugendlichen Sicherheit zu geben und Eltern die notwendige Orientierung in dieser herausfordernden Zeit zu ermöglichen.`,
      },
    ],
  },
  {
    id: "diebstahl",
    category: "private",
    icon: "fas fa-search",
    title: "Aufklärung von Diebstählen",
    price: "ab 649 €",
    short: "Klärung von Diebstählen und Verlusten im privaten Umfeld",
    img: "/manus-storage/img_diebstahl_new_08c72d3b.png",
    features: ["Diskrete Durchführung", "Mehrere Personen möglich", "Offizielles Gutachten", "Rechtlich verwertbar"],
    sections: [
      {
        heading: "AUFKLÄRUNG VON KRIMINELLEN HANDLUNGEN MIT DEM LÜGENDETEKTOR",
        text: `Kriminelle Aktivitäten führen unweigerlich zu finanziellen Verlusten. Dabei geht es nicht nur um den Diebstahl von Geld oder Wertsachen aus Privaträumen, sondern auch um den Raub von Datenbanken und vertraulichen Informationen in Unternehmen. Täter innerhalb einer Firma können sich illegal Vermögenswerte aneignen, Betrug, Erpressung oder Korruption betreiben.\n\nDer Einsatz eines Lügendetektors ist der schnellste und effektivste Weg, um Täter zu identifizieren. Unsere erfahrenen Experten helfen Ihnen dabei, Rechtsverletzer ausfindig zu machen und weitere kriminelle Handlungen zu verhindern.`,
      },
      {
        heading: "POLYGRAPHEN-TESTS BEI UNTERSCHLAGUNG, DIEBSTAHL UND VERRAT VON GESCHÄFTSGEHEIMNISSEN",
        text: `Schwerwiegende Verluste durch Mitarbeiterdiebstahl sind oft die Folge unzureichender Personalkontrolle. Der Polygraph hat seine Wirksamkeit im Rahmen von Ermittlungsmaßnahmen bewiesen. Er dient dazu, Haupttäter und Komplizen zu identifizieren.`,
        bullets: [
          "Rollenverteilung: Bestimmung der Rolle jeder beteiligten Person an der Tat",
          "Informationsfluss: Motivierung von Verdächtigen zur Offenlegung von Informationen",
          "Rekonstruktion: Feststellung des chronologischen Ablaufs der Ereignisse",
          "Sachverhaltsaufklärung: Ermittlung der tatsächlichen Umstände des Falls",
          "Beweissicherung: Sammeln zusätzlicher Erkenntnisse und Details",
          "Verschwörung: Aufdeckung von Absprachen zwischen mehreren Personen",
          "Entlastung: Ausschluss unschuldiger Personen aus dem Kreis der Verdächtigen",
          "Verbleib: Ermittlung des Standorts von gestohlenen Gütern oder Werten",
        ],
      },
    ],
  },
  {
    id: "hauspersonal",
    category: "private",
    icon: "fas fa-home",
    title: "Überprüfung von Hauspersonal",
    price: "ab 549 €",
    short: "Kindermädchen, Haushälterinnen, Fahrer und andere Angestellte",
    img: "/manus-storage/img_hauspersonal_new_cc672d0c.png",
    features: ["Schnelle Terminvergabe", "Diskrete Durchführung", "Schriftliches Ergebnis", "100% vertraulich"],
    sections: [
      {
        heading: "ÜBERPRÜFUNG VON HAUSPERSONAL: SICHERHEIT FÜR IHR ZUHAUSE",
        text: `Ein Test mit dem Polygraphen darf nur mit der freiwilligen Zustimmung des Hauspersonals durchgeführt werden. Es gibt zudem Themenbereiche (wie die Intimsphäre), die nicht Gegenstand der Befragung sein dürfen. Unsere Experten berücksichtigen bei der Erstellung des Fragenkatalogs strikt Ihre individuellen Wünsche.\n\nSeien Sie besonders aufmerksam gegenüber Personen, die einen Test kategorisch ablehnen. Ehrliche und gewissenhafte Mitarbeiter haben in der Regel nichts zu verbergen – für sie ist das Verfahren eine zusätzliche Chance, ihre Loyalität und Integrität unter Beweis zu stellen.`,
      },
      {
        heading: "ASPEKTE, DIE BEI HAUSPERSONAL GEKLÄRT WERDEN KÖNNEN:",
        text: "",
        bullets: [
          "Umgang mit Schutzbefohlenen: Aufdeckung von Misshandlungen an Kindern oder Haustieren",
          "Qualifikation: Bestätigung der tatsächlichen Berufserfahrung und Echtheit von Empfehlungsschreiben",
          "Zuverlässigkeit: Prüfung, ob die vereinbarten Aufgaben gewissenhaft erfüllt werden",
          "Ehrlichkeit: Aufdeckung von Diebstahl oder Betrug bei Haushaltsausgaben",
          "Umgang mit Eigentum: Unachtsamer oder mutwilliger Missbrauch von Möbeln, Geräten oder Fahrzeugen",
          "Diskretion: Unbefugtes Einladen fremder Personen in die Privaträume des Arbeitgebers",
          "Hygiene & Sorgfalt: Mängel bei der Lebensmittelzubereitung oder absichtliche Sachbeschädigung",
          "Geheimhaltung: Weitergabe oder Verkauf von vertraulichen Informationen über die Familie an Dritte",
        ],
      },
    ],
  },
  {
    id: "probetest",
    category: "private",
    icon: "fas fa-flask",
    title: "Probetest am Polygraphen",
    price: "ab 299 €",
    short: "Kennenlernen des Verfahrens vor der eigentlichen Untersuchung",
    img: "/manus-storage/img_probetest2_d69e4e5f.png",
    features: ["Ca. 30–45 Minuten", "Keine Auswertung", "Ideal zur Vorbereitung", "Anrechnung auf Volltest möglich"],
    sections: [
      {
        heading: "DER PROBELAUF: VORBEREITUNG AUF DEN LÜGENDETEKTOR-TEST",
        text: `Polygraphen-Untersuchungen werden immer häufiger eingesetzt, um Informationen über eine Person zu gewinnen. Sie dienen nicht nur dazu, die Ehrlichkeit zu prüfen, sondern helfen auch dabei, komplexe Situationen ohne offensichtliche Beweise zu klären. Wenn Ihnen ein Test angeboten wurde und Sie mit dem Verfahren nicht vertraut sind, gibt es keinen Grund zur Sorge. Eine sofortige Ablehnung könnte unnötige Zweifel an Ihrer Integrität wecken und Misstrauen schüren.`,
      },
      {
        heading: "ZIELE EINES PROBELAUFS (TEST-CHECK)",
        text: `Ein Probelauf dient dazu, die zu untersuchende Person an die Atmosphäre und die Bedingungen des Tests zu gewöhnen. Er wird durchgeführt, wenn jemand genau wissen möchte, wie die Prozedur abläuft, welche Fragen gestellt werden und um sich von der Sicherheit des Verfahrens zu überzeugen.`,
        bullets: [
          "Detaillierte Einweisung: Umfassende Aufklärung des Teilnehmers über den Ablauf",
          "Gewöhnung: Anpassung der Testperson an die angelegten Sensoren",
          "Individuelle Kalibrierung: Feinabstimmung des Geräts auf die spezifischen physiologischen Reaktionen",
          "Reaktionsanalyse: Erfassung von Mustern bei unterschiedlichen Fragen",
          "Sicherheitscheck: Feststellung, ob die Ergebnisse durch Alkohol oder Medikamente verfälscht sein könnten",
        ],
      },
    ],
  },
  {
    id: "hochzeit",
    category: "private",
    icon: "fas fa-ring",
    title: "Überprüfung vor der Hochzeit",
    price: "ab 649 €",
    short: "Sicherheit vor dem wichtigsten Tag Ihres Lebens",
    img: "/manus-storage/img_hochzeit_new_1c27e9d7.png",
    features: ["Absolut vertraulich", "Gegenseitige Tests möglich", "Professionelle Beratung", "Schriftliches Gutachten"],
    sections: [
      {
        heading: "HOCHZEIT UND VERTRAUEN: DER POLYGRAPH-CHECK VOR DEM JA-WORT",
        text: `Eine Hochzeit ist ein entscheidender Schritt für jedes Paar. Dieses festliche Ereignis markiert den Beginn eines gemeinsamen Lebensweges, der auf Ehrlichkeit und gegenseitigem Vertrauen basieren sollte. Besteht jedoch auch nur der geringste Zweifel am Partner, bietet ein Lügendetektortest vor der Vermählung Sicherheit. Unsere qualifizierten und erfahrenen Experten setzen modernste, hochpräzise Computertechnik ein. Die Ergebnisse helfen Ihnen dabei, Antworten auf die Fragen zu finden, die Ihre Beziehung belasten.`,
      },
      {
        heading: "LÜGENDETEKTOR VOR DER HOCHZEIT: VORTEILE",
        text: `Bevor Sie den Bund fürs Leben schließen, ist es ratsam, mögliche Risiken im Vorfeld auszuräumen. So schützen Sie Ihre zukünftige Familie vor Misstrauen, Zweifeln, Verschwiegenheit und anderen belastenden Situationen. Ein Polygraph-Test hilft dabei, Probleme rechtzeitig zu identifizieren und sie für die gemeinsame Zukunft auszuschließen.`,
        bullets: [
          "Klarheit: Beseitigung unbegründeter Ängste und Zweifel",
          "Ehrlichkeit: Bestätigung der Aufrichtigkeit des Partners in Bezug auf die Vergangenheit oder Absichten",
          "Prävention: Schutz vor unangenehmen Überraschungen nach der Hochzeit",
        ],
      },
    ],
  },
  // ── BUSINESS ──
  {
    id: "einstellung",
    category: "business",
    icon: "fas fa-user-check",
    title: "Überprüfung bei der Einstellung",
    price: "ab 399 €",
    short: "Sicherheit bei der Auswahl neuer Mitarbeiter für sensible Positionen",
    img: "/manus-storage/img_einstellung_new_019d6631.png",
    features: ["Schnelle Abwicklung", "Mehrere Bewerber möglich", "Vertraulicher Bericht", "Rechtssicheres Gutachten"],
    sections: [
      {
        heading: "ÜBERPRÜFUNG BEI DER EINSTELLUNG",
        text: `Bei der Auswahl neuer Mitarbeiter sucht jedes Unternehmen nach Zuverlässigkeit. Wie identifiziert man wirklich verantwortungsbewusste und loyale Profis? Erfahrene Experten sieben mit einer Genauigkeit von 99 % unzuverlässige Kandidaten aus und minimieren so Ihre Geschäftsrisiken.\n\nDie Prüfung bei der Einstellung hilft dabei, folgende Ziele zu erreichen:`,
        bullets: [
          "Passgenauigkeit: Auswahl von Spezialisten, deren psychologische und moralische Qualitäten exakt zur Stelle passen",
          "Wahrheitsgehalt: Aufdeckung verborgener Fakten, Lücken im Lebenslauf oder möglicher Vorstrafen",
          "Risikoprävention: Identifizierung von Faktoren, die gegen eine Einstellung sprechen",
          "Effizienz: Senkung von Kosten und Zeitaufwand für mehrstufige Hintergrundchecks",
          "Ehrlichkeit: Erkennung von Tendenzen zu Diebstahl oder unlauterem Verhalten",
          "Prognose: Objektive Vorhersage des künftigen Verhaltens des Bewerbers",
        ],
      },
      {
        heading: "",
        text: `Die Überprüfung bei der Einstellung wird mit maximaler Genauigkeit durchgeführt, was durch die Korrektur der Themen sichergestellt wird. Häufig möchten Arbeitgeber die Echtheit der vorgelegten Dokumente, Empfehlungen und Registrierungen überprüfen. Der Polygraph hilft auch dabei, die Kredithistorie zu prüfen, verschiedene Risikofaktoren sowie Alkohol-, Drogen- oder Spielsucht zu ermitteln. Das Verfahren deckt kriminelle Hintergründe auf und zeigt, ob gesundheitliche Einschränkungen für die Ausübung der Tätigkeit vorliegen.`,
      },
    ],
  },
  {
    id: "routine",
    category: "business",
    icon: "fas fa-clipboard-check",
    title: "Planmäßige Überprüfung von Mitarbeitern",
    price: "ab 399 €",
    short: "Regelmäßige Überprüfungen zur Sicherung der Unternehmensintegrität",
    img: "/manus-storage/img_routine_new_ae08702d.png",
    features: ["Maßgeschneiderte Programme", "Gruppenrabatte möglich", "Vertrauliche Berichte", "Regelmäßige Termine"],
    sections: [
      {
        heading: "BRANCHEN, IN DENEN REGELMÄSSIGE POLYGRAPHEN-TESTS FÜR MITARBEITER ERFORDERLICH SIND",
        text: `Regelmäßige Tests des Personals helfen dabei, zahlreiche potenzielle Probleme zu vermeiden und Risiken im Zusammenhang mit materiellen oder immateriellen Werten erheblich zu senken. Wenn die Geschäftsführung plant, einen Mitarbeiter zu befördern oder seinen Aufgabenbereich zu ändern, ist es wichtig, sich seiner Ehrlichkeit zu vergewissern. Eine planmäßige Überprüfung ist insbesondere dann notwendig, wenn Mitarbeiter Zugang zu schwer kontrollierbaren Finanzen haben.`,
      },
      {
        heading: "GESCHÄFTSBEREICHE, IN DENEN REGELMÄSSIGE LÜGENDETEKTOR-TESTS BESONDERS GEFRAGT SIND:",
        text: "",
        bullets: [
          "Private Sicherheitsdienste: Zum Schutz der Integrität des Wachpersonals",
          "Einzelhandel: Überall dort, wo Mitarbeiter direkten Zugriff auf Waren und Sachwerte haben",
          "Logistik und Transport: Insbesondere für Fahrer, Spediteure und Lagerarbeiter",
          "Geheimnisträger: Unternehmen, deren Tätigkeit mit streng vertraulichen Informationen verbunden ist",
          "Autohäuser und Werkstätten: Wo Kundenfahrzeuge für die Mitarbeiter frei zugänglich sind",
          "Produktionsstätten: Betriebe mit wertvollen Rohstoffen und teuren Maschinen",
          "Finanz- und Bankensektor: Zum Schutz vor Unterschlagung und Finanzdelikten",
        ],
      },
    ],
  },
  {
    id: "intern",
    category: "business",
    icon: "fas fa-search",
    title: "Interne Ermittlungen",
    price: "ab 649 €",
    short: "Aufklärung von Vorfällen und Fehlverhalten im Unternehmen",
    img: "/manus-storage/img_intern_new_cc041727.png",
    features: ["Diskrete Durchführung", "Mehrere Personen möglich", "Offizielles Gutachten", "Rechtlich verwertbar"],
    sections: [
      {
        heading: "INTERNE ERMITTLUNGEN: EFFIZIENTE AUFKLÄRUNG DURCH POLYGRAPHEN-TESTS",
        text: `Wenn in Unternehmen Zwischenfälle mit erheblichem Sachschaden auftreten, sind interne Dienstuntersuchungen unumgänglich. Ziel ist es, Mitarbeiter zu identifizieren, die Straftaten begangen oder ihre Befugnisse zur eigenen Bereicherung missbraucht haben. Qualifizierte Polygraphologen garantieren maximale Präzision und absolute Vertraulichkeit. Nach Abschluss der Tests erhalten Sie objektive und belastbare Informationen über den tatsächlichen Tathergang.\n\nDienstuntersuchungen erzeugen oft Spannungen und Stress innerhalb der Belegschaft. Der Einsatz eines Polygraphen verkürzt die Dauer der Ermittlungen erheblich. Sobald die Schuldigen überführt sind, stabilisiert sich das Mikroklima im Team.`,
      },
      {
        heading: "DURCH EINE POLYGRAPH-UNTERSUCHUNG LASSEN SICH KLÄREN:",
        text: "",
        bullets: [
          "Tathandlungen: Fakten über begangene rechtswidrige Aktivitäten",
          "Glaubwürdigkeit: Wahrheitsgehalt der Aussagen der befragten Personen",
          "Hintergrundinformationen: Zusätzliche Daten, die für den Fall relevant sind",
          "Beteiligte: Identifizierung aller involvierten Personen und ihrer jeweiligen Rollen",
          "Ursachen: Klärung der Gründe für den außerordentlichen Vorfall",
          "Schadensausmaß: Ermittlung der Schadenshöhe und Möglichkeiten zur Schadensminimierung",
          "Prävention: Entwicklung von Gegenmaßnahmen, um ähnliche Vorfälle künftig zu verhindern",
        ],
      },
    ],
  },
  {
    id: "mobil",
    category: "business",
    icon: "fas fa-car",
    title: "Polygraph mit Hausbesuch",
    price: "auf Anfrage",
    short: "Wir kommen zu Ihnen – in Ihr Büro oder nach Hause",
    img: "/manus-storage/img_mobil_new_786ef233.png",
    features: ["Gesamtes Bayern möglich", "Professionelle Ausrüstung", "Diskrete Anreise", "Flexible Termingestaltung"],
    sections: [
      {
        heading: "DIE WAHRHEIT ANS LICHT BRINGEN: POLYGRAPH-TESTS VOR ORT",
        text: `Die Wahrheit lässt sich oft leicht hinter Täuschungen verbergen. Heute gehört der Lügendetektortest zu den gefragtesten Dienstleistungen, um Klarheit zu schaffen – sei es für Ehepartner, Jugendliche, Hauspersonal oder Büroangestellte. Moderne Geräte sind in der Lage, eine Vielzahl chemischer und physiologischer Prozesse im menschlichen Körper präzise zu erfassen. Unsere erfahrenen Experten erstellen Gutachten zu den vom Kunden gewünschten Themen mit einer Genauigkeit von rund 99 %.`,
      },
      {
        heading: "DURCHFÜHRUNG VON MOBILEN POLYGRAPH-TESTS (VOR-ORT-SERVICE)",
        text: `Wenn Sie Mitarbeiter, Geschäftspartner oder Hauspersonal testen möchten, kommen unsere Experten mit dem erforderlichen Equipment direkt an die von Ihnen angegebene Adresse. Die Durchführung in einer vertrauten und komfortablen Umgebung sorgt dafür, dass sich die Testpersonen natürlicher verhalten und weniger nervös sind.`,
        bullets: [
          "Diskretion: Keine Anreise der Testpersonen zu einem externen Institut notwendig",
          "Komfort: Tests in der gewohnten Umgebung reduzieren Stressfaktoren",
          "Zeitersparnis: Minimale Ausfallzeiten für Unternehmen und Privatpersonen",
        ],
      },
    ],
  },
  {
    id: "ehre",
    category: "business",
    icon: "fas fa-balance-scale",
    title: "Schutz von Ehre und Würde",
    price: "auf Anfrage",
    short: "Klärung von Verleumdungen und falschen Anschuldigungen",
    img: "/manus-storage/img_ehre_new_23a0c453.png",
    features: ["Offizielles Gutachten", "Rechtlich verwertbar", "Schnelle Terminvergabe", "Professionelle Beratung"],
    sections: [
      {
        heading: "REPUTATIONSSCHUTZ: DIE EIGENE UNSCHULD MIT DEM LÜGENDETEKTOR BEWEISEN",
        text: `Menschen, die im Beruf Zugang zu Sachwerten, Finanzen oder geheimen Informationen haben, wissen, wie entscheidend ein tadelloser Ruf für eine erfolgreiche Karriere ist. Dies gilt für alle Ebenen – vom einfachen Angestellten über Führungskräfte bis hin zu Abgeordneten. Der berufliche Aufstieg kann jäh gestoppt werden, wenn unberechtigte Anschuldigungen über Taten laut werden, die man in der Realität nie begangen hat.\n\nDoch wie lassen sich solche haltlosen Behauptungen entkräften? Die Firma bietet Ihnen die Möglichkeit, Ihre Unschuld zu belegen und Nachstellungen oder falsche Verdächtigungen mittels eines Lügendetektortests zu beenden.`,
      },
      {
        heading: "VORTEILE DER ENTLASTUNGSPRÜFUNG:",
        text: "",
        bullets: [
          "Wiederherstellung des Rufes: Effektive Abwehr von Verleumdungen",
          "Karrieresicherung: Schutz vor beruflichen Nachteilen durch falsche Anschuldigungen",
          "Offizielles Dokument: Ein fundierter Expertenbericht als Beweismittel für Ihre Integrität",
        ],
      },
    ],
  },
  {
    id: "geschaefte",
    category: "business",
    icon: "fas fa-handshake",
    title: "Sicherheit bei großen Geschäften",
    price: "auf Anfrage",
    short: "Risiken minimieren bei privaten Transaktionen und Vereinbarungen",
    img: "/manus-storage/img_geschaefte_new_7e315cd3.png",
    features: ["Schnelle Terminvergabe", "Offizielles Gutachten", "Rechtlich verwertbar", "Diskrete Durchführung"],
    sections: [
      {
        heading: "SICHERHEIT BEI GROSSEN GESCHÄFTEN: RISIKEN MINIMIEREN MIT DEM POLYGRAPHEN",
        text: `Bei geplanten Großgeschäften mit Unbekannten ist Vorsicht geboten. Um versteckte Mängel, Unredlichkeit oder Betrug auszuschließen, können Sie Ihrem Geschäftspartner einen Lügendetektortest vorschlagen. Wir garantieren eine schnelle Auswertung, absolute Vertraulichkeit und hochpräzise Ergebnisse.`,
      },
      {
        heading: "HÄUFIGE ANWENDUNGSBEREICHE:",
        text: `Besonders bei Vereinbarungen „per Handschlag", ohne umfassende rechtliche Absicherung, besteht das Risiko von Täuschungen. Probleme entstehen oft durch verborgene Motive, Falschinformationen oder betrügerische Absichten.`,
        bullets: [
          "Große Geldbeträge: Private Darlehen oder Investitionen",
          "Immobilienkauf/-verkauf: Transaktionen zwischen Privatleuten",
          "Fahrzeuge und Technik: Übergabe von teuren Autos, Maschinen oder Wertgegenständen",
          "Finanzielle Verpflichtungen: Absicherung von Rückzahlungen und Schulden",
        ],
      },
      {
        heading: "WARNSIGNALE, BEI DENEN EIN TEST RATSAM IST:",
        text: "",
        bullets: [
          "Ausweichende Antworten: Der Verkäufer macht unklare Angaben zum Zustand der Ware",
          "Zu verlockende Angebote: Extrem günstige Preise, die eine hohe Vorabinvestition erfordern",
          "Erstkontakt: Wenn Sie zum ersten Mal mit dieser Person Geschäfte machen",
        ],
      },
    ],
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
// NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  const links = [
    ["DIENSTLEISTUNGEN", "services"],
    ["PREISE", "prices"],
    ["ÜBER UNS", "about"],
    ["AUSRÜSTUNG", "equipment"],
    ["KONTAKTE", "contact"],
  ];

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: NAVY, fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", height: "60px", gap: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", flexShrink: 0 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/manus-storage/logo_clean_f9c5298d.png" alt="POLYGRAPH Logo" style={{ width: "42px", height: "42px", objectFit: "contain" }} />
          <span style={{ color: WHITE, fontWeight: 700, fontSize: "20px", letterSpacing: "1px" }}>lügendetektortest.com</span>
        </div>
        <div className="hidden lg:flex" style={{ flex: 1, gap: "28px", alignItems: "center" }}>
          {links.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}
              style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", fontWeight: 500, letterSpacing: "0.3px", background: "none", border: "none", cursor: "pointer", padding: "4px 0", whiteSpace: "nowrap" }}
              onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}>{label}</button>
          ))}
        </div>
        <button onClick={() => scrollTo("contact")} className="hidden md:flex"
          style={{ alignItems: "center", gap: "6px", backgroundColor: ORANGE, color: WHITE, border: "none", padding: "9px 18px", borderRadius: "4px", fontWeight: 700, fontSize: "15px", cursor: "pointer", whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "0.5px" }}
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
// HERO
// ─────────────────────────────────────────────
function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 40%", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,25,50,0.88) 0%, rgba(15,25,50,0.72) 50%, rgba(15,25,50,0.45) 100%)" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "80px 24px 60px", width: "100%" }}>
        <div style={{ maxWidth: "620px" }}>
          <h1 style={{ color: WHITE, fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
            LÜGENDETEKTOR-TEST<br />IN MÜNCHEN
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "18px", fontWeight: 400, marginBottom: "14px" }}>Premium-Prüfung zum fairen Preis</p>
          <p style={{ color: ORANGE, fontSize: "16px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>GENAUIGKEIT 98–99%</p>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "26px", marginBottom: "36px" }}>100% anonym, vertraulich und ohne Weitergabe von Anfragedetails</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
            {[{ icon: "fas fa-lock", label: "Absolute Vertraulichkeit" }, { icon: "fas fa-user-tie", label: "Erfahrene Experten" }, { icon: "fas fa-desktop", label: "Moderne Ausrüstung" }].map(b => (
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
              <i className="fas fa-paper-plane"></i> Jetzt anfragen
            </button>
            <a href="tel:+4917560360003"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "transparent", border: "2px solid rgba(255,255,255,0.5)", color: WHITE, padding: "13px 28px", borderRadius: "4px", fontWeight: 700, fontSize: "14px", textDecoration: "none", textTransform: "uppercase" }}>
              <i className="fas fa-phone-alt"></i> +49 175 6036003
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
    <div style={{ backgroundColor: NAVY_DARK, fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="stats-grid">
        {[{ val: "98–99%", label: "Genauigkeit", icon: "fas fa-crosshairs" }, { val: "20+", label: "Jahre Erfahrung", icon: "fas fa-award" }, { val: "500+", label: "Abgeschlossene Fälle", icon: "fas fa-check-double" }, { val: "100%", label: "Vertraulich", icon: "fas fa-user-secret" }].map((s, i) => (
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
// SERVICE DETAIL PANEL
// ─────────────────────────────────────────────
function ServiceDetailPanel({ svc, onClose }: { svc: typeof allServices[0]; onClose: () => void }) {
  return (
    <div style={{ backgroundColor: WHITE, border: `2px solid ${NAVY}`, borderTop: "none", borderRadius: "0 0 8px 8px", overflow: "hidden" }}>
      {/* Image centered */}
      <div style={{ display: "flex", justifyContent: "center", padding: "24px 24px 0" }}>
        <img src={svc.img} alt={svc.title} style={{ width: "100%", maxWidth: "784px", height: "448px", objectFit: "cover", display: "block", borderRadius: "6px" }} />
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
            {svc.sections[0].heading && <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>{svc.sections[0].heading}</h3>}
            <p style={{ color: TEXT_DARK, fontSize: "19px", lineHeight: 1.9 }}>{svc.sections[0].text}</p>
          </>
        )}
      </div>

      {/* Additional sections */}
      {svc.sections.slice(1).map((sec, i) => (
        <div key={i} style={{ padding: "0 28px 24px", borderTop: i === 0 ? `1px solid ${BORDER}` : "none" }}>
          {sec.heading && <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.5px", margin: "20px 0 12px" }}>{sec.heading}</h3>}
          {sec.text && <p style={{ color: TEXT_DARK, fontSize: "19px", lineHeight: 1.9, marginBottom: "12px", whiteSpace: "pre-line" }}>{sec.text}</p>}
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
  const [openService, setOpenService] = useState<string | null>(null);
  const services = allServices;

  return (
    <section id="services" style={{ backgroundColor: LIGHT_BG, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
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
              <button onClick={() => setOpenService(openService === svc.id ? null : svc.id)}
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
                  <div style={{ fontWeight: 700, fontSize: "21px", marginBottom: "4px" }}>{svc.title}</div>
                  <div style={{ fontSize: "16px", color: openService === svc.id ? "rgba(255,255,255,0.65)" : TEXT_MID }}>{svc.short}</div>
                </div>
                {/* Price + chevron */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px", flexShrink: 0 }}>
                  <span style={{ color: ORANGE, fontWeight: 700, fontSize: "17px" }}>{svc.price}</span>
                  <i className={`fas fa-chevron-${openService === svc.id ? "up" : "down"}`} style={{ color: openService === svc.id ? "rgba(255,255,255,0.5)" : "#A0AEC0", fontSize: "11px" }}></i>
                </div>
              </button>

              {/* Detail Panel */}
              {openService === svc.id && (
                <ServiceDetailPanel svc={svc} onClose={() => setOpenService(null)} />
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
            <p style={{ color: ORANGE, fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Über unss</p>
            <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>POLYGRAPH MÜNCHEN</h2>
            <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, marginBottom: "22px" }} />
            <p style={{ color: TEXT_DARK, fontSize: "18px", lineHeight: 1.8, marginBottom: "14px" }}><strong>POLYGRAPH München</strong> – professionelle Polygraphuntersuchungen für Unternehmen und Privatpersonen.</p>
            <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.8, marginBottom: "14px" }}>Wir helfen dabei, die Wahrheit dort aufzudecken, wo Worte täuschen können. Unsere Experten mit langjähriger Erfahrung führen präzise und objektive Untersuchungen am Lügendetektor durch.</p>
            <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.8, marginBottom: "28px" }}>Vertrauen Sie den Profis – gewinnen Sie Sicherheit in Menschen und Entscheidungen!</p>
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
  return (
    <section id="process" style={{ backgroundColor: NAVY, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ color: ORANGE, fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Unser Verfahren</p>
          <h2 style={{ color: WHITE, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>WIE LÄUFT DIE PRÜFUNG AB?</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: ORANGE, margin: "0 auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "18px" }}>
          {processSteps.map((step, i) => (
            <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "26px", borderTop: `3px solid ${ORANGE}` }}>
              <div style={{ fontSize: "3.5rem", fontWeight: 700, color: "rgba(255,140,0,0.15)", lineHeight: 1, marginBottom: "12px", fontFamily: "monospace" }}>{step.num}</div>
              <h3 style={{ color: WHITE, fontWeight: 700, fontSize: "15px", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{step.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", lineHeight: 1.75 }}>{step.desc}</p>
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
          <p style={{ color: ORANGE, fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Technologie</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>AUSRÜSTUNG</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, margin: "0 auto 14px" }} />
          <p style={{ color: TEXT_MID, fontSize: "17px", maxWidth: "600px", margin: "0 auto" }}>Wir verwenden ausschließlich professionelle Computerpolygraphen der neuesten Generation</p>
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
  return (
    <section style={{ backgroundColor: ORANGE, padding: "48px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
        <div>
          <h2 style={{ color: WHITE, fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>BEREIT ANZUFANGEN?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "17px" }}>Täglich 10:00 – 22:00 Uhr · Marienstr. 4, München</p>
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
  return (
    <section id="specialists" style={{ backgroundColor: WHITE, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: ORANGE, fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Unser Team</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>SPEZIALISTEN</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, margin: "0 auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px", maxWidth: "800px", margin: "0 auto" }}>
          {[
            { name: "Dimitri Razarenov", role: "Polygraphologe", exp: "20 Jahre Erfahrung", edu: "Höhere Bildung, Praktische Psychologie", icon: "fas fa-user-tie" },
            { name: "Tatjana Neubauer", role: "Psychologin", exp: "23 Jahre Erfahrung", edu: "Höhere Bildung, Diplompsychologin", icon: "fas fa-user-graduate" },
          ].map(s => (
            <div key={s.name} style={{ backgroundColor: LIGHT_BG, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "36px 28px", textAlign: "center", borderTop: `4px solid ${ORANGE}` }}>
              <div style={{ width: "90px", height: "90px", borderRadius: "50%", backgroundColor: NAVY, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <i className={s.icon} style={{ fontSize: "36px", color: ORANGE }}></i>
              </div>
              <h3 style={{ color: NAVY, fontWeight: 700, fontSize: "22px", marginBottom: "4px" }}>{s.name}</h3>
              <p style={{ color: ORANGE, fontWeight: 700, fontSize: "16px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>{s.role}</p>
              <p style={{ color: "#22c55e", fontWeight: 700, fontSize: "16px", marginBottom: "10px" }}><i className="fas fa-award mr-1"></i>{s.exp}</p>
              <p style={{ color: TEXT_MID, fontSize: "16px" }}>{s.edu}</p>
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
          <p style={{ color: ORANGE, fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Transparente Preise</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>PREISE</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, margin: "0 auto 12px" }} />
          <p style={{ color: TEXT_MID, fontSize: "17px" }}>Keine versteckten Kosten – transparente und faire Preisgestaltung</p>
        </div>
        <div style={{ backgroundColor: WHITE, border: `1px solid ${BORDER}`, borderRadius: "8px", overflow: "hidden", maxWidth: "800px", margin: "0 auto 24px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
          <div style={{ backgroundColor: NAVY, padding: "14px 24px", display: "grid", gridTemplateColumns: "1fr auto" }}>
            <span style={{ color: WHITE, fontWeight: 700, fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Leistung</span>
            <span style={{ color: ORANGE, fontWeight: 700, fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Preis</span>
          </div>
          {allServices.map((svc, i) => (
            <div key={svc.id} style={{ padding: "13px 24px", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", borderBottom: `1px solid ${BORDER}`, backgroundColor: i % 2 === 0 ? WHITE : "#FAFBFC" }}>
              <span style={{ color: TEXT_DARK, fontSize: "16px" }}>
                <i className="fas fa-check-circle mr-2" style={{ color: "#22c55e", fontSize: "11px" }}></i>{svc.title}
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
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faq" style={{ backgroundColor: WHITE, padding: "80px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: ORANGE, fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Fragen & Antworten</p>
          <h2 style={{ color: NAVY, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>HÄUFIGE FRAGEN</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: BLUE_LINE, margin: "0 auto 12px" }} />
          <p style={{ color: TEXT_MID, fontSize: "17px", maxWidth: "600px", margin: "0 auto" }}>Basierend auf unserer Erfahrung haben wir eine Liste der häufigsten Fragen zusammengestellt</p>
        </div>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faqItems.map((item, i) => (
            <div key={i} style={{ backgroundColor: LIGHT_BG, border: `1px solid ${BORDER}`, borderRadius: "6px", marginBottom: "8px", overflow: "hidden" }}>
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{ width: "100%", textAlign: "left", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", background: "none", border: "none", cursor: "pointer" }}>
                <span style={{ fontWeight: 700, fontSize: "17px", color: NAVY, lineHeight: 1.4 }}>{item.q}</span>
                <i className={`fas fa-chevron-${openIdx === i ? "up" : "down"}`} style={{ color: ORANGE, flexShrink: 0 }}></i>
              </button>
              {openIdx === i && (
                <div style={{ padding: "0 20px 16px", borderTop: `1px solid ${BORDER}` }}>
                  <p style={{ color: TEXT_DARK, fontSize: "17px", lineHeight: 1.8, paddingTop: "12px" }}>{item.a}</p>
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
          <p style={{ color: ORANGE, fontSize: "15px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Kostenlose Erstberatung</p>
          <h2 style={{ color: WHITE, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>KONTAKT AUFNEHMEN</h2>
          <div style={{ height: "3px", width: "60px", backgroundColor: ORANGE, margin: "0 auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", maxWidth: "960px", margin: "0 auto", alignItems: "stretch" }} className="grid-2col">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 style={{ color: WHITE, fontWeight: 700, fontSize: "17px", marginBottom: "24px", textTransform: "uppercase" }}>Kontaktinformationen</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: "fas fa-map-marker-alt", label: "Adresse", val: "Marienstr. 4, 80331 München", href: undefined },
                { icon: "fas fa-phone-alt", label: "Telefon", val: "+49 175 6036003", href: "tel:+4917560360003" },
                { icon: "fas fa-envelope", label: "E-Mail", val: "beratung@lügendetektortest.com", href: "mailto:beratung@lügendetektortest.com" },
                { icon: "fab fa-whatsapp", label: "WhatsApp", val: "+49 175 6036003", href: "https://wa.me/491756036003" },
                { icon: "fas fa-clock", label: "Öffnungszeiten", val: "Täglich 10:00 – 22:00 Uhr", sub: "Termine auch am Wochenende möglich", href: undefined },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(255,140,0,0.12)", color: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "14px" }}>
                    <i className={c.icon}></i>
                  </div>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} style={{ color: WHITE, fontWeight: 700, fontSize: "17px", textDecoration: "none" }}
                        onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                        onMouseLeave={e => (e.currentTarget.style.color = WHITE)}>{c.val}</a>
                    ) : (
                      <span style={{ color: WHITE, fontWeight: 700, fontSize: "17px" }}>{c.val}</span>
                    )}
                    {(c as any).sub && <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", marginTop: "3px" }}>{(c as any).sub}</div>}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", gap: "10px" }}>
              <a href="https://wa.me/491756036003" target="_blank" rel="noopener noreferrer"
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: GREEN_WA, color: WHITE, padding: "11px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", textDecoration: "none", textTransform: "uppercase" }}>
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
              <a href="mailto:beratung@lügendetektortest.com"
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: ORANGE, color: WHITE, padding: "11px", borderRadius: "4px", fontWeight: 700, fontSize: "13px", textDecoration: "none", textTransform: "uppercase" }}>
                <i className="fas fa-envelope"></i> E-Mail
              </a>
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px", textAlign: "center", marginTop: "8px" }}>
              <i className="fas fa-lock" style={{ marginRight: "4px" }}></i>Ihre Daten werden vertraulich behandelt
            </p>
          </div>
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
                    <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "15px", fontWeight: 700, marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} required={f.required}
                      value={form[f.name as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.name]: e.target.value })}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: "4px", fontSize: "16px", outline: "none", backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: WHITE, boxSizing: "border-box" }}
                      onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")} />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "15px", fontWeight: 700, marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Ihre Nachricht</label>
                  <textarea rows={4} placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "4px", fontSize: "16px", outline: "none", backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: WHITE, resize: "none", boxSizing: "border-box" }}
                    onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")} />
                </div>
                <button type="submit"
                  style={{ padding: "11px", borderRadius: "4px", backgroundColor: ORANGE, color: WHITE, fontWeight: 700, fontSize: "17px", textTransform: "uppercase", border: "none", cursor: "pointer", marginTop: "16px" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e07b00")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
                  <i className="fas fa-paper-plane mr-2"></i>Anfrage senden
                </button>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px", textAlign: "center" }}>
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
function Footer({ onLegalOpen, docKeyMap }: { onLegalOpen: (key: string) => void; docKeyMap: Record<string, string> }) {
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
              <a href="mailto:beratung@lügendetektortest.com" style={{ width: "34px", height: "34px", backgroundColor: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: WHITE, textDecoration: "none", fontSize: "13px" }}>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ color: WHITE, fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "14px" }}>Navigation</h4>
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
            {["Allgemeine Geschäftsbedingungen", "Datenschutzerklärung", "Impressum", "Vertraulichkeitsvereinbarung", "Freiwillige Einwilligung", "Merkblatt für Probanden"].map(d => (
              <button key={d} onClick={() => onLegalOpen(docKeyMap[d])} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "13px", background: "none", border: "none", cursor: "pointer", padding: "3px 0", textAlign: "left" }}
                onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>{d}</button>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "18px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>© 2014 – 2026 POLYGRAPH München. Alle Rechte vorbehalten.</p>
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
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
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
      <FAQSection />
      <ContactSection />
      <Footer onLegalOpen={(key) => setLegalDoc(key)} docKeyMap={docKeyMap} />
      <FloatingWidgets />
      {legalDoc && <LegalModal docKey={legalDoc} onClose={() => setLegalDoc(null)} />}
    </div>
  );
}
