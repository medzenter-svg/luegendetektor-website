/**
 * Breadcrumb – wiederverwendbare Breadcrumb-Navigation mit JSON-LD BreadcrumbList Schema.
 *
 * Design: Dezent, unter der Navbar, Navy/Orange Farbschema.
 * Automatisch eingeblendet, wenn mehr als 1 Crumb vorhanden ist.
 *
 * Verwendung:
 *   <Breadcrumb items={[
 *     { label: "Startseite", href: "/" },
 *     { label: "Ratgeber", href: "/ratgeber" },
 *     { label: "Kosten" },   // letztes Element ohne href
 *   ]} />
 */
import { useEffect } from "react";
import { Link } from "wouter";

const NAVY  = "#1a2a4a";
const ORANGE = "#FF8C00";
const BASE_URL = "https://luegendetektor-test-muenchen.de";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  // Inject JSON-LD BreadcrumbList schema
  useEffect(() => {
    const schemaId = "breadcrumb-jsonld";
    const existing = document.getElementById(schemaId);
    if (existing) existing.remove();

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": item.label,
        ...(item.href ? { "item": `${BASE_URL}${item.href}` } : {}),
      })),
    };

    const script = document.createElement("script");
    script.id = schemaId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, [items]);

  if (items.length <= 1) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        backgroundColor: "#f0f3f8",
        borderBottom: "1px solid #dde3ee",
        padding: "0 24px",
        fontFamily: "'Lato', sans-serif",
      }}
    >
      <ol
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0",
          listStyle: "none",
          padding: "10px 0",
        }}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={i}
              style={{ display: "flex", alignItems: "center" }}
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              {i > 0 && (
                <span
                  aria-hidden="true"
                  style={{
                    color: "#9aa5b8",
                    fontSize: "13px",
                    margin: "0 8px",
                    userSelect: "none",
                  }}
                >
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  itemProp="item"
                  style={{
                    color: NAVY,
                    fontSize: "13px",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = ORANGE)
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = NAVY)
                  }
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span
                  itemProp="name"
                  style={{
                    color: isLast ? "#6b7a94" : NAVY,
                    fontSize: "13px",
                    fontWeight: isLast ? 400 : 500,
                  }}
                >
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
