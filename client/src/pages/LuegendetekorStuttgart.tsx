import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import FloatingButtons from "../components/FloatingButtons";
import Breadcrumb from "../components/Breadcrumb";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function LuegendetekorStuttgart() {
  useEffect(() => {
    document.title = "Lügendetektor-Test Stuttgart | Polygraph Baden-Württemberg | luegendetektor-test-muenchen.de";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Professionelle Polygraphuntersuchungen in Stuttgart und Baden-Württemberg. Diskret, zertifiziert, für Privat & Unternehmen. Kostenlose Erstberatung.");
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org", "@type": "Service",
      "name": "Polygraphuntersuchung Stuttgart",
      "areaServed": { "@type": "City", "name": "Stuttgart" },
      "provider": { "@type": "Organization", "name": "luegendetektor-test-muenchen.de", "telephone": "+4917560360003" }
    });
    document.head.appendChild(schema);
    window.scrollTo(0, 0);
    return () => { if (document.head.contains(schema)) document.head.removeChild(schema); };
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: NAVY }}>
      <SharedNavbar />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Städte" },
    { label: "Lügendetektor Stuttgart" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #243d6b 100%)`, padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ color: ORANGE, fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>Stuttgart & Baden-Württemberg</p>
          <h1 style={{ color: WHITE, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px" }}>
            Lügendetektor-Test in Stuttgart
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.75, maxWidth: "640px", marginBottom: "36px" }}>
            Professionelle Polygraphuntersuchungen für Privatpersonen und Unternehmen in Stuttgart und ganz Baden-Württemberg. Diskret, zertifiziert, mit nachgewiesener Methodik.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "13px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
            <Link href="/#contact" style={{ backgroundColor: "transparent", color: WHITE, padding: "13px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Anfrage stellen
            </Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: WHITE, padding: "56px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0", border: `1px solid ${BORDER}`, borderRadius: "10px", overflow: "hidden", marginBottom: "48px" }}>
            {[{ value: "98–99%", label: "Genauigkeit" }, { value: "2,5–3,5h", label: "Dauer" }, { value: "100%", label: "Vertraulich" }].map((s, i) => (
              <div key={i} style={{ padding: "28px 24px", textAlign: "center", backgroundColor: i % 2 === 0 ? LIGHT_BG : WHITE, borderRight: i < 2 ? `1px solid ${BORDER}` : "none" }}>
                <p style={{ color: ORANGE, fontSize: "32px", fontWeight: 800, margin: "0 0 4px 0" }}>{s.value}</p>
                <p style={{ color: TEXT_MID, fontSize: "14px", fontWeight: 600, margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>

          <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 700, marginBottom: "14px" }}>Stuttgart als Wirtschaftsstandort</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "24px" }}>
            Stuttgart ist einer der bedeutendsten Wirtschaftsstandorte Deutschlands – Heimat globaler Konzerne aus Automobil, Maschinenbau und Technologie. Entsprechend hoch sind die Anforderungen an diskrete Ermittlungsdienstleistungen im unternehmerischen Bereich.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.95, marginBottom: "40px" }}>
            Unsere Spezialisten kommen zu Ihnen nach Stuttgart oder Sie besuchen uns in München – beide Optionen sind möglich. Für Unternehmen bieten wir Untersuchungen direkt vor Ort an.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px", marginBottom: "48px" }}>
            {[
              { title: "Treuetest", link: "/treuetest", icon: "fas fa-heart-broken" },
              { title: "Interne Ermittlungen", link: "/interne-ermittlungen", icon: "fas fa-building" },
              { title: "Mitarbeiterüberprüfung", link: "/mitarbeiterueberpruefung", icon: "fas fa-user-check" },
              { title: "Sicherheitsüberprüfung", link: "/sicherheitspruefung", icon: "fas fa-shield-alt" },
            ].map((s) => (
              <Link key={s.title} href={s.link} style={{ textDecoration: "none", display: "block", padding: "20px", backgroundColor: LIGHT_BG, borderRadius: "8px", border: `1px solid ${BORDER}` }}>
                <i className={s.icon} style={{ color: ORANGE, fontSize: "20px", marginBottom: "10px", display: "block" }} />
                <p style={{ color: NAVY, fontWeight: 700, fontSize: "15px", margin: "0 0 6px 0" }}>{s.title}</p>
                <span style={{ color: ORANGE, fontSize: "13px", fontWeight: 700 }}>Mehr →</span>
              </Link>
            ))}
          </div>

          <div style={{ backgroundColor: NAVY, borderRadius: "10px", padding: "36px 32px", marginBottom: "40px" }}>
            <h3 style={{ color: WHITE, fontSize: "19px", fontWeight: 700, marginBottom: "10px" }}>Anfrage für Stuttgart</h3>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px", lineHeight: 1.7, marginBottom: "22px" }}>Kostenlose Erstberatung – Mo–So 9:00–22:00 Uhr.</p>
            <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "11px 26px", borderRadius: "5px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <i className="fas fa-phone" /> +49 175 6036003
            </a>
          </div>

          <h2 style={{ color: NAVY, fontSize: "20px", fontWeight: 700, marginBottom: "14px" }}>Weitere Standorte</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[{ city: "München", link: "/" }, { city: "Berlin", link: "/luegendetektor-berlin" }, { city: "Hamburg", link: "/luegendetektor-hamburg" }, { city: "Frankfurt", link: "/luegendetektor-frankfurt" }, { city: "Düsseldorf", link: "/luegendetektor-duesseldorf" }, { city: "Köln", link: "/luegendetektor-koeln" }, { city: "Wien", link: "/polygraph-wien" }, { city: "Zürich", link: "/polygraph-zuerich" }].map((item) => (
              <Link key={item.city} href={item.link} style={{ backgroundColor: LIGHT_BG, border: `1px solid ${BORDER}`, color: NAVY, padding: "7px 14px", borderRadius: "4px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>{item.city}</Link>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: NAVY, padding: "28px 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", margin: 0 }}>
          © 2025 luegendetektor-test-muenchen.de &nbsp;·&nbsp; <a href="tel:+4917560360003" style={{ color: ORANGE, textDecoration: "none" }}>+49 175 6036003</a>
        </p>
      </footer>
      <FloatingButtons />
    </div>
  );
}
