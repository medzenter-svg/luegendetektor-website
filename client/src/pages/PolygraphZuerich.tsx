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

export default function PolygraphZuerich() {
  useEffect(() => {

    // Meta tags
    document.title = "Polygraph Test Zürich – Lügendetektor Schweiz | luegendetektor-test-muenchen.de";
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
    setMeta("description", "Professionelle Polygraphuntersuchungen in Zürich. Diskreter Lügendetektor-Test mit offiziellem Gutachten für die Schweiz.");
    setMeta("og:title", "Polygraph Test Zürich – Lügendetektor Schweiz | luegendetektor-test-muenchen.de", true);
    setMeta("og:description", "Professionelle Polygraphuntersuchungen in Zürich. Diskreter Lügendetektor-Test mit offiziellem Gutachten für die Schweiz.", true);
    setMeta("og:url", "https://luegendetektor-test-muenchen.de/polygraph-zuerich", true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Lügendetektor Test München", true);
    setMeta("og:image", "https://luegendetektor-test-muenchen.de/og-image.jpg", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Polygraph Test Zürich – Lügendetektor Schweiz | luegendetektor-test-muenchen.de");
    setMeta("twitter:description", "Professionelle Polygraphuntersuchungen in Zürich. Diskreter Lügendetektor-Test mit offiziellem Gutachten für die Schweiz.");
    setLink("canonical", "https://luegendetektor-test-muenchen.de/polygraph-zuerich");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Professioneller Polygraph Test in Zürich und der Schweiz. Diskrete Lügendetektor-Untersuchungen für Privatpersonen und Unternehmen. Termin auf Anfrage. +49 175 6036003");
    window.scrollTo(0, 0);

    // City LocalBusiness Schema
    const citySchema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://luegendetektor-test-muenchen.de/polygraph-zuerich#business",
      "name": "Polygraph Test Zürich – Lügendetektor Untersuchungen",
      "description": "Professionelle Polygraphuntersuchungen in Zürich. Diskreter Lügendetektor-Test mit offiziellem Gutachten für die Schweiz.",
      "url": "https://luegendetektor-test-muenchen.de/polygraph-zuerich",
      "telephone": "+4917560360003",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Auf Anfrage",
        "addressLocality": "Zürich",
        "postalCode": "8001",
        "addressRegion": "Zürich",
        "addressCountry": "CH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 47.3769,
        "longitude": 8.5417
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

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: TEXT_DARK }}>
      <SharedNavbar />
      <Breadcrumb items={
  [
    { label: "Startseite", href: "/" },
    { label: "Polygraph Schweiz", href: "/polygraph-schweiz" },
    { label: "Zürich" }
  ]
} />
      

      <section style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2d4a7a 100%)`, padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,140,0,0.15)", border: `1px solid ${ORANGE}`, borderRadius: "4px", padding: "6px 16px", color: ORANGE, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
            Zürich · Schweiz · DACH-Region
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "20px" }}>
            Polygraph Test Zürich & Schweiz
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "20px", lineHeight: 1.7, marginBottom: "36px" }}>
            Diskrete Polygraphuntersuchungen in Zürich, Basel, Bern und der gesamten Schweiz. Mobile Spezialisten – <strong style={{ color: ORANGE }}>vertraulich und präzise</strong>.
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
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ color: NAVY, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, marginBottom: "20px" }}>
            Lügendetektor Test in der Schweiz – Diskret & Zuverlässig
          </h2>
          <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}>
            Unsere Zentrale in München koordiniert <strong>Polygraphuntersuchungen in Zürich</strong>, Basel, Bern, Genf und weiteren Schweizer Städten. Dank unseres Netzwerks mobiler Experten sind Vor-Ort-Termine in der gesamten Schweiz möglich.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}>
            Ein <strong>Polygraph Test in Zürich</strong> ist ideal für Privatpersonen, die in sensiblen persönlichen Situationen Klarheit benötigen, sowie für Schweizer Unternehmen, die interne Untersuchungen oder Mitarbeiterüberprüfungen durchführen möchten.
          </p>
          <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.8, marginBottom: "32px" }}>
            Alle Untersuchungen werden mit modernster Computertechnologie der neuesten Generation durchgeführt. Die Genauigkeit liegt bei <strong>98–99%</strong>. Ergebnisse werden schriftlich dokumentiert.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "40px" }}>
            {[
              { icon: "fas fa-map-marker-alt", text: "Vor-Ort-Termine in der Schweiz" },
              { icon: "fas fa-lock", text: "Absolute Diskretion garantiert" },
              { icon: "fas fa-certificate", text: "International zertifizierte Experten" },
              { icon: "fas fa-file-alt", text: "Schriftliche Ergebnisdokumentation" },
              { icon: "fas fa-globe", text: "Deutsch, Englisch, Russisch" },
              { icon: "fas fa-phone", text: "Persönliche Beratung vorab" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", backgroundColor: LIGHT_BG, borderRadius: "8px", padding: "14px 16px", border: `1px solid ${BORDER}` }}>
                <i className={item.icon} style={{ color: ORANGE, fontSize: "18px", flexShrink: 0 }} />
                <span style={{ color: TEXT_DARK, fontSize: "15px", fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: LIGHT_BG, borderRadius: "10px", padding: "28px 32px", border: `1px solid ${BORDER}` }}>
            <p style={{ color: NAVY, fontWeight: 700, fontSize: "17px", marginBottom: "16px" }}>Termin in der Schweiz vereinbaren:</p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="tel:+4917560360003" style={{ backgroundColor: ORANGE, color: WHITE, padding: "12px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="fas fa-phone" /> +49 175 6036003
              </a>
              <Link href="/#contact" style={{ backgroundColor: NAVY, color: WHITE, padding: "12px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
                Online anfragen
              </Link>
            </div>
            <p style={{ color: TEXT_MID, fontSize: "13px", marginTop: "12px" }}>Mo–So 9:00–22:00 Uhr · Diskret · Vertraulich</p>
          </div>
        </div>
      </section>
      <ContactFormCompact context="Polygraph Zürich" />
      <SharedFooter />
      <FloatingButtons />
    </div>
  );
}
