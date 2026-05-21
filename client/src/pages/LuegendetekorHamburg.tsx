import { useEffect } from "react";
import { Link } from "wouter";
import SharedNavbar from "../components/SharedNavbar";
import FloatingButtons from "../components/FloatingButtons";
import SharedFooter from "../components/SharedFooter";
import ContactFormCompact from "../components/ContactFormCompact";
import Breadcrumb from "../components/Breadcrumb";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

export default function LuegendetekorHamburg() {
  useEffect(() => {

    // Meta tags
    document.title = "Lügendetektor Test Hamburg – Polygraph | luegendetektor-test-muenchen.de";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) { el = document.createElement("link"); el.setAttribute("rel", rel); document.head.appendChild(el); }
      el.setAttribute("href", href);
    };
    setMeta("description", "Professionelle Lügendetektor-Tests in Hamburg. Polygraphuntersuchung mit offiziellem Gutachten – diskret, zertifiziert, bundesweit.");
    setMeta("og:title", "Lügendetektor Test Hamburg – Polygraph | luegendetektor-test-muenchen.de", true);
    setMeta("og:description", "Professionelle Lügendetektor-Tests in Hamburg. Polygraphuntersuchung mit offiziellem Gutachten – diskret, zertifiziert, bundesweit.", true);
    setMeta("og:url", "https://luegendetektor-test-muenchen.de/luegendetektor-hamburg", true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Lügendetektor Test München", true);
    setMeta("og:image", "https://luegendetektor-test-muenchen.de/og-image.jpg", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Lügendetektor Test Hamburg – Polygraph | luegendetektor-test-muenchen.de");
    setMeta("twitter:description", "Professionelle Lügendetektor-Tests in Hamburg. Polygraphuntersuchung mit offiziellem Gutachten – diskret, zertifiziert, bundesweit.");
    setLink("canonical", "https://luegendetektor-test-muenchen.de/luegendetektor-hamburg");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Lügendetektor & Polygraph-Tests in Hamburg. Professionelle Polygraphuntersuchungen für Privatpersonen und Unternehmen in der Hansestadt. Diskret & vertraulich. +49 175 6036003");
    window.scrollTo(0, 0);

    // City LocalBusiness Schema
    const citySchema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://luegendetektor-test-muenchen.de/luegendetektor-hamburg#business",
      "name": "Lügendetektor Test Hamburg – Polygraph Untersuchungen",
      "description": "Professionelle Polygraphuntersuchungen in Hamburg. Diskreter Lügendetektor-Test mit offiziellem Gutachten.",
      "url": "https://luegendetektor-test-muenchen.de/luegendetektor-hamburg",
      "telephone": "+4917560360003",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Auf Anfrage",
        "addressLocality": "Hamburg",
        "postalCode": "20095",
        "addressRegion": "Hamburg",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 53.5511,
        "longitude": 9.9937
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "10:00",
        "closes": "22:00"
      }],
      "priceRange": "€€",
      "parentOrganization": {
        "@type": "LocalBusiness",
        "@id": "https://luegendetektor-test-muenchen.de/#business"
      }
    };
    const existingCity = document.getElementById("schema-city-lb");
    if (existingCity) existingCity.remove();
    const cityScript = document.createElement("script");
    cityScript.id = "schema-city-lb";
    cityScript.type = "application/ld+json";
    cityScript.textContent = JSON.stringify(citySchema);
    document.head.appendChild(cityScript);
    return () => { document.getElementById("schema-city-lb")?.remove(); };
  }, []);

  const services = [
    { icon: "fas fa-heart-broken", title: "Treuetest", text: "Klarheit bei Verdacht auf Untreue – professionell, diskret und mit 98–99% Genauigkeit." },
    { icon: "fas fa-briefcase", title: "Mitarbeiterüberprüfung", text: "Einstellungstests und Sicherheitsüberprüfungen für Hamburger Unternehmen jeder Größe." },
    { icon: "fas fa-search", title: "Interne Ermittlungen", text: "Aufklärung von Diebstahl, Betrug oder anderen Vergehen im Unternehmensumfeld." },
    { icon: "fas fa-home", title: "Hauspersonal", text: "Überprüfung von Haushaltshilfen, Kinderbetreuerinnen und Pflegepersonal in Hamburg." },
    { icon: "fas fa-ship", title: "Maritime Wirtschaft", text: "Spezialisierte Überprüfungen für die Schifffahrts- und Hafenwirtschaft in Hamburg." },
    { icon: "fas fa-shield-alt", title: "Sicherheitsprüfung", text: "Zuverlässigkeitstests für sicherheitssensible Positionen und Schlüsselpersonal." },
  ];

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: TEXT_DARK }}>
      <SharedNavbar />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Städte" },
    { label: "Lügendetektor Hamburg" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1e3a5f 100%)`, padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
            Hamburg · Diskret · Professionell
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(26px, 5vw, 46px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px" }}>
            Lügendetektor-Test in Hamburg
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "19px", lineHeight: 1.7, marginBottom: "36px" }}>
            Professionelle Polygraphuntersuchungen in Hamburg für Privatpersonen und Unternehmen. <strong style={{ color: ORANGE }}>98–99% Genauigkeit</strong> – diskret, vertraulich, rechtssicher.
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
          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, marginBottom: "16px" }}>Polygraph-Services in Hamburg</h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.8, marginBottom: "40px" }}>
            Als führender Anbieter von Polygraphuntersuchungen im deutschsprachigen Raum sind wir auch in Hamburg für Sie tätig. Unsere Spezialisten kommen direkt zu Ihnen – ob in der HafenCity, in Altona, Eimsbüttel oder in anderen Hamburger Stadtteilen. Alle Untersuchungen werden streng vertraulich und nach höchsten professionellen Standards durchgeführt.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "48px" }}>
            {services.map((s) => (
              <div key={s.title} style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "28px", border: `1px solid ${BORDER}` }}>
                <i className={s.icon} style={{ color: ORANGE, fontSize: "26px", marginBottom: "14px", display: "block" }} />
                <h3 style={{ color: NAVY, fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>{s.title}</h3>
                <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: NAVY, borderRadius: "12px", padding: "40px", marginBottom: "40px", textAlign: "center" }}>
            <h2 style={{ color: WHITE, fontSize: "24px", fontWeight: 700, marginBottom: "12px" }}>Termin in Hamburg vereinbaren</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", marginBottom: "24px" }}>Kostenlose Erstberatung – Mo–So 9:00–22:00 Uhr. Wir kommen zu Ihnen nach Hamburg.</p>
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
            <Link href="/luegendetektor-berlin" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Lügendetektor Berlin</Link>
            <Link href="/luegendetektor-frankfurt" style={{ color: NAVY, fontWeight: 700, textDecoration: "none", fontSize: "15px" }}>→ Lügendetektor Frankfurt</Link>
          </div>
        </div>
      </section>
      <ContactFormCompact context="Lügendetektor Hamburg" />
      <SharedFooter />
      <FloatingButtons />
    </div>
  );
}
