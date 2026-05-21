import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import Breadcrumb from "../components/Breadcrumb";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function RatgeberKosten() {
  useEffect(() => {
    document.title = "Was kostet eine Polygraphuntersuchung? | Ratgeber | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Welche Faktoren bestimmen den Preis einer Polygraphuntersuchung? Eine sachliche Übersicht zu Leistungsumfang, Qualitätsmerkmalen und Preisgestaltung.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: NAVY }}>
      <SharedNavbar />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Kosten & Preise" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #243d6b 100%)`, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ color: ORANGE, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>
            Kosten & Leistungsumfang &nbsp;·&nbsp; 4 Min. Lesezeit
          </p>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.18, marginBottom: "20px", letterSpacing: "-0.3px" }}>
            Was kostet eine Polygraphuntersuchung?
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "18px", lineHeight: 1.75, maxWidth: "620px" }}>
            Eine sachliche Übersicht zu den Faktoren, die den Preis bestimmen – und warum die Wahl des Anbieters wichtiger ist als der Preis selbst.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "28px" }}>
            Die Kosten einer Polygraphuntersuchung sind kein Standardpreis, der sich pauschal nennen lässt. Sie ergeben sich aus dem konkreten Leistungsumfang, der Komplexität der Fragestellung und dem logistischen Aufwand. Transparenz in diesem Punkt ist uns wichtig – deshalb erläutern wir hier, welche Faktoren die Kalkulation beeinflussen.
          </p>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "18px", marginTop: "40px" }}>Faktoren, die den Preis bestimmen</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "40px", border: `1px solid ${BORDER}`, borderRadius: "10px", overflow: "hidden" }}>
            {[
              { factor: "Untersuchungsdauer", detail: "Eine vollständige Untersuchung mit Vorbesprechung, Kalibrierung und Auswertung dauert 2,5 bis 3,5 Stunden. Kürzere Formate für spezifische Einzelfragen sind möglich." },
              { factor: "Anzahl der Themenbereiche", detail: "Jeder zusätzliche Themenblock verlängert die Untersuchung und erhöht den Auswertungsaufwand. Wir empfehlen, sich auf die wesentlichen Fragen zu konzentrieren." },
              { factor: "Schriftliche Dokumentation", detail: "Ein formelles Gutachten mit detaillierter Auswertung ist optional und wird separat berechnet. Es ist insbesondere für rechtlich relevante Situationen sinnvoll." },
              { factor: "Anreise und Ort", detail: "Untersuchungen in unseren Räumlichkeiten in München sind in der Regel günstiger als Einsätze vor Ort – in anderen Städten oder im Ausland fallen Reisekosten an." },
              { factor: "Unternehmensvolumen", detail: "Für Unternehmen, die mehrere Untersuchungen beauftragen, erstellen wir individuelle Rahmenvereinbarungen." },
            ].map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "0", backgroundColor: i % 2 === 0 ? LIGHT_BG : WHITE }}>
                <div style={{ padding: "16px 20px", borderRight: `1px solid ${BORDER}` }}>
                  <p style={{ color: NAVY, fontWeight: 700, fontSize: "14px", margin: 0 }}>{item.factor}</p>
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <p style={{ color: TEXT_MID, fontSize: "14px", lineHeight: 1.75, margin: 0 }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderLeft: `3px solid ${ORANGE}`, paddingLeft: "24px", margin: "36px 0" }}>
            <p style={{ color: NAVY, fontSize: "17px", lineHeight: 1.85, fontStyle: "italic", margin: 0 }}>
              „Eine Polygraphuntersuchung ist eine Investition in Klarheit. Der Preis sollte nicht das primäre Auswahlkriterium sein – die Qualifikation des Spezialisten ist entscheidend."
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Worauf Sie bei der Anbieterwahl achten sollten</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "20px" }}>
            Der Markt für Polygraphdienstleistungen ist in Deutschland wenig reguliert. Das bedeutet, dass Anbieter ohne nachgewiesene Qualifikation tätig sein können. Folgende Kriterien helfen bei der Einschätzung:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
            {[
              "Nachweisbare Ausbildung und Zertifizierung des Spezialisten",
              "Transparente Kommunikation über Methodik und Ablauf",
              "Klare Datenschutzregelungen und Vertraulichkeitsvereinbarung",
              "Referenzen oder nachweisbare Erfahrung im jeweiligen Anwendungsbereich",
              "Bereitschaft zur kostenlosen Erstberatung ohne Verpflichtung",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <i className="fas fa-check" style={{ color: ORANGE, fontSize: "14px", marginTop: "4px", flexShrink: 0 }} />
                <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.7, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px", marginTop: "40px" }}>Individuelle Preisauskunft</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "36px" }}>
            Da jede Situation andere Anforderungen stellt, nennen wir Ihnen den genauen Preis nach einem kurzen Erstgespräch. Die Beratung ist kostenlos und unverbindlich. Wir sind täglich von 9 bis 22 Uhr erreichbar.
          </p>

          <div style={{ backgroundColor: NAVY, borderRadius: "10px", padding: "36px 32px", marginBottom: "40px" }}>
            <h3 style={{ color: WHITE, fontSize: "19px", fontWeight: 700, marginBottom: "10px" }}>Erstberatung anfragen</h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px", lineHeight: 1.7, marginBottom: "22px" }}>
              Wir besprechen Ihren Fall vertraulich und erstellen ein individuelles Angebot.
            </p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "11px 26px", borderRadius: "5px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", borderTop: `1px solid ${BORDER}`, paddingTop: "24px" }}>
            <Link href="/ratgeber" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>← Alle Artikel</Link>
            <Link href="/ratgeber/polygraph-legal-deutschland" style={{ color: TEXT_MID, fontWeight: 600, textDecoration: "none", fontSize: "14px" }}>Rechtliche Grundlagen →</Link>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: NAVY, padding: "28px 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", margin: 0 }}>
          © 2025 luegendetektor-test-muenchen.de &nbsp;·&nbsp; <a href="tel:+4917560360003" style={{ color: ORANGE, textDecoration: "none" }}>+49 175 6036003</a>
        </p>
      </footer>
    </div>
  );
}
