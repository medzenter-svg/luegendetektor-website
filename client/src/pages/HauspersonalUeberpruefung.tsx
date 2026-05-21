import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function HauspersonalUeberpruefung() {
  useEffect(() => {
    document.title = "Hauspersonal Überprüfung | Lügendetektor Haushaltshilfe | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Hauspersonal überprüfen mit Polygraph. Haushaltshilfen, Kinderbetreuer, Reinigungskräfte und Pflegepersonal diskret und professionell testen. München & bundesweit. +49 175 6036003");
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { icon: "fas fa-baby", title: "Kinderbetreuer & Au-pairs", text: "Vertrauen Sie Ihre Kinder nur Personen an, deren Integrität und Vertrauenswürdigkeit geprüft wurde. Unsere Untersuchung gibt Ihnen die Gewissheit, die Sie benötigen." },
    { icon: "fas fa-broom", title: "Haushaltshilfen & Reinigungskräfte", text: "Haushaltshilfen haben Zugang zu Ihrem Zuhause, Ihren persönlichen Gegenständen und Wertsachen. Eine Überprüfung schützt Sie vor Diebstahl und Vertrauensbruch." },
    { icon: "fas fa-heart", title: "Pflegepersonal & Betreuer", text: "Pflegepersonal arbeitet in Ihrem Privatbereich und betreut vulnerable Personen. Stellen Sie sicher, dass nur vertrauenswürdige Menschen diese Verantwortung übernehmen." },
    { icon: "fas fa-utensils", title: "Köche & Haushälter", text: "Personen, die dauerhaft in Ihrem Haushalt tätig sind, sollten auf ihre Zuverlässigkeit und Ehrlichkeit geprüft werden." },
  ];

  const faqs = [
    { q: "Ist eine Überprüfung von Hauspersonal legal?", a: "Ja – eine Polygraphuntersuchung ist legal, sofern die zu testende Person freiwillig und informiert zustimmt. Wir klären alle Beteiligten vorab vollständig auf und holen die schriftliche Einwilligung ein." },
    { q: "Wann sollte ich mein Hauspersonal überprüfen lassen?", a: "Sowohl vor der Einstellung als auch bei konkretem Verdacht auf Diebstahl, Missbrauch oder Vertrauensbruch. Auch regelmäßige Überprüfungen bestehenden Personals sind möglich." },
    { q: "Wie läuft die Untersuchung ab?", a: "Wir kommen diskret zu Ihnen nach Hause oder führen die Untersuchung in unserem Büro in München durch. Die Untersuchung dauert ca. 2–3 Stunden und umfasst eine Vorbesprechung, die eigentliche Polygraphuntersuchung und eine Auswertung." },
    { q: "Was kostet die Überprüfung von Hauspersonal?", a: "Die Kosten hängen vom Umfang der Untersuchung ab. Kontaktieren Sie uns für ein individuelles Angebot – die Erstberatung ist kostenlos und unverbindlich." },
    { q: "Bleibt die Untersuchung vertraulich?", a: "Absolut. Alle Ergebnisse werden streng vertraulich behandelt und ausschließlich an den Auftraggeber weitergegeben. Wir unterliegen strengen Datenschutzrichtlinien." },
  ];

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: TEXT_DARK }}>
      <SharedNavbar />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d4a7a 100%)`, padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
            Privat · Diskret · Vertraulich
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 5vw, 46px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px" }}>
            Hauspersonal überprüfen mit Polygraph
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "19px", lineHeight: 1.7, marginBottom: "36px" }}>
            Schützen Sie Ihr Zuhause und Ihre Familie. Professionelle Polygraphuntersuchung für Haushaltshilfen, Kinderbetreuer, Pflegepersonal und andere Hausangestellte – <strong style={{ color: ORANGE }}>diskret und vertraulich</strong>.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
            <Link href="/#contact" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: `2px solid rgba(255,255,255,0.3)`, color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
              Termin anfragen
            </Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "60px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, marginBottom: "16px" }}>Welches Hauspersonal sollte überprüft werden?</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.8, marginBottom: "40px" }}>
            Hauspersonal hat Zugang zu den privatesten Bereichen Ihres Lebens – Ihrem Zuhause, Ihrer Familie und Ihren Wertsachen. Eine professionelle Polygraphuntersuchung gibt Ihnen die Sicherheit, dass Sie der richtigen Person vertrauen. Wir überprüfen alle Kategorien von Hausangestellten diskret und professionell.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "48px" }}>
            {categories.map((c) => (
              <div key={c.title} style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "28px", border: `1px solid ${BORDER}` }}>
                <i className={c.icon} style={{ color: ORANGE, fontSize: "28px", marginBottom: "16px", display: "block" }} />
                <h3 style={{ color: NAVY, fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>{c.title}</h3>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: LIGHT_BG, borderRadius: "12px", padding: "36px", marginBottom: "48px", borderLeft: `4px solid ${ORANGE}` }}>
            <h3 style={{ color: NAVY, fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>Warum eine Polygraphuntersuchung?</h3>
            <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              Herkömmliche Methoden wie Referenzprüfungen oder Bewerbungsgespräche sind oft unzureichend, um die wahre Integrität einer Person zu beurteilen. Ein Polygraphtest misst physiologische Reaktionen auf gezielte Fragen und liefert mit einer Genauigkeit von <strong>98–99%</strong> verlässliche Ergebnisse.
            </p>
            <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
              Unsere erfahrenen Spezialisten führen die Untersuchung einfühlsam und professionell durch – sowohl vor der Einstellung als auch bei bestehendem Verdacht auf Diebstahl, Missbrauch oder andere Verfehlungen.
            </p>
          </div>

          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, marginBottom: "24px" }}>Häufige Fragen</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
            {faqs.map((f) => (
              <div key={f.q} style={{ backgroundColor: LIGHT_BG, borderRadius: "8px", padding: "24px", border: `1px solid ${BORDER}` }}>
                <h3 style={{ color: NAVY, fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>{f.q}</h3>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: NAVY, borderRadius: "12px", padding: "40px", marginBottom: "40px", textAlign: "center" }}>
            <h2 style={{ color: WHITE, fontSize: "24px", fontWeight: 700, marginBottom: "12px" }}>Jetzt Hauspersonal überprüfen lassen</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", marginBottom: "24px" }}>Kostenlose Erstberatung – diskret, vertraulich, professionell. Mo–So 9:00–22:00 Uhr.</p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-phone" /> +49 175 6036003
              </a>
              <Link href="/#contact" style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)", color: WHITE, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
                Online anfragen
              </Link>
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: ORANGE, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>← Zurück zur Startseite</Link>
            <Link href="/treuetest" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Treuetest</Link>
            <Link href="/sicherheitspruefung" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Sicherheitsprüfung</Link>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: NAVY, padding: "32px 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", margin: 0 }}>
          © 2025 luegendetektor-test-muenchen.de · <a href="tel:+4917560360003" style={{ color: ORANGE, textDecoration: "none" }}>+49 175 6036003</a> · Mo–So 9:00–22:00 Uhr
        </p>
      </footer>
    </div>
  );
}
