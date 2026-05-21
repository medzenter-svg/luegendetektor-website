/**
 * RelatedContent – Dezente interne Verlinkung zwischen Leistungsseiten und Ratgebern.
 * Zeigt 2–3 thematisch verwandte Artikel oder Seiten als Hinweisblock.
 * Design: hell, kein Kartenrand, Premium-Stil.
 */

const NAVY   = "#1a2a4a";
const ORANGE = "#FF8C00";
const MID    = "#4a5568";
const LIGHT  = "#f5f7fa";
const BORDER = "#dde3ee";

interface RelatedItem {
  title: string;
  excerpt: string;
  href: string;
  type: "ratgeber" | "leistung" | "stadt";
}

interface Props {
  items: RelatedItem[];
  heading?: string;
}

const TYPE_LABEL: Record<RelatedItem["type"], string> = {
  ratgeber: "Ratgeber",
  leistung: "Leistung",
  stadt: "Standort",
};

export default function RelatedContent({ items, heading = "Weiterführende Informationen" }: Props) {
  if (!items.length) return null;

  return (
    <section style={{ backgroundColor: LIGHT, borderTop: `1px solid ${BORDER}`, padding: "40px 24px 48px" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <p style={{ color: ORANGE, fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>
          Verwandte Themen
        </p>
        <h2 style={{ color: NAVY, fontSize: "20px", fontWeight: 800, marginBottom: "28px" }}>
          {heading}
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(items.length, 3)}, 1fr)`,
          gap: "20px",
        }}>
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                display: "block",
                backgroundColor: "#ffffff",
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${ORANGE}`,
                borderRadius: "6px",
                padding: "20px 18px",
                textDecoration: "none",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(26,42,74,0.10)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <span style={{
                display: "inline-block",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: ORANGE,
                marginBottom: "8px",
              }}>
                {TYPE_LABEL[item.type]}
              </span>
              <h3 style={{ color: NAVY, fontSize: "15px", fontWeight: 700, lineHeight: 1.4, marginBottom: "8px" }}>
                {item.title}
              </h3>
              <p style={{ color: MID, fontSize: "13px", lineHeight: 1.65, margin: 0 }}>
                {item.excerpt}
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: ORANGE, fontSize: "13px", fontWeight: 600, marginTop: "14px" }}>
                Mehr erfahren <i className="fas fa-arrow-right" style={{ fontSize: "11px" }} />
              </span>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          section > div > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
