/**
 * ArticleCTA – Dezente, vertrauenserweckende Call-to-Action-Elemente für Ratgeber-Artikel.
 *
 * Drei Varianten:
 *   "inline"  – Schmaler Hinweisblock mitten im Artikel (nach 2–3 Abschnitten)
 *   "sidebar" – Kompakte Kontaktbox für die Seitenleiste
 *   "bottom"  – Abschließender CTA-Block am Ende des Artikels (ersetzt den alten einfachen Block)
 *
 * Design: Navy/Orange, Lato, kein Marketingsprech – sachlich und diskret.
 */

const NAVY    = "#1a2a4a";
const ORANGE  = "#FF8C00";
const WHITE   = "#ffffff";
const LIGHT   = "#f5f7fa";
const BORDER  = "#dde3ee";
const MID     = "#4a5568";

interface InlineCTAProps {
  headline?: string;
  body?: string;
}

/** Schmaler Hinweisblock – mitten im Artikel, nach 2–3 Abschnitten */
export function InlineCTA({
  headline = "Haben Sie eine konkrete Frage?",
  body = "Unsere Spezialisten beantworten Ihre Fragen in einem vertraulichen Erstgespräch – kostenlos und ohne Verpflichtung.",
}: InlineCTAProps) {
  return (
    <aside
      style={{
        borderLeft: `3px solid ${ORANGE}`,
        backgroundColor: LIGHT,
        borderRadius: "0 8px 8px 0",
        padding: "22px 26px",
        margin: "36px 0",
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: "1 1 260px" }}>
        <p
          style={{
            color: NAVY,
            fontWeight: 700,
            fontSize: "15px",
            marginBottom: "6px",
            lineHeight: 1.4,
          }}
        >
          {headline}
        </p>
        <p style={{ color: MID, fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
          {body}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flexShrink: 0,
          alignSelf: "center",
        }}
      >
        <a
          href="tel:+4917560360003"
          style={{
            backgroundColor: ORANGE,
            color: WHITE,
            padding: "9px 20px",
            borderRadius: "5px",
            fontWeight: 700,
            fontSize: "14px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            whiteSpace: "nowrap",
          }}
        >
          <i className="fas fa-phone" style={{ fontSize: "12px" }} />
          +49 175 6036003
        </a>
        <a
          href="https://wa.me/491756036003"
          style={{
            backgroundColor: "#25D366",
            color: WHITE,
            padding: "9px 20px",
            borderRadius: "5px",
            fontWeight: 700,
            fontSize: "14px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            whiteSpace: "nowrap",
          }}
        >
          <i className="fab fa-whatsapp" style={{ fontSize: "14px" }} />
          WhatsApp
        </a>
      </div>
    </aside>
  );
}

interface BottomCTAProps {
  headline?: string;
  body?: string;
  prevLabel?: string;
  prevHref?: string;
  nextLabel?: string;
  nextHref?: string;
}

/** Abschließender CTA-Block am Ende des Artikels */
export function BottomCTA({
  headline = "Bereit für den nächsten Schritt?",
  body = "Vereinbaren Sie ein unverbindliches Erstgespräch. Wir klären Ihre Fragen, erläutern den Ablauf und erstellen Ihnen ein individuelles Angebot – diskret und ohne Verpflichtung.",
  prevLabel,
  prevHref,
  nextLabel,
  nextHref,
}: BottomCTAProps) {
  return (
    <>
      {/* Main CTA block */}
      <div
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, #243d6b 100%)`,
          borderRadius: "12px",
          padding: "40px 36px",
          marginBottom: "40px",
          display: "flex",
          gap: "32px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "56px",
            height: "56px",
            backgroundColor: "rgba(255,140,0,0.15)",
            border: `1px solid rgba(255,140,0,0.4)`,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <i className="fas fa-shield-alt" style={{ color: ORANGE, fontSize: "22px" }} />
        </div>

        {/* Text */}
        <div style={{ flex: "1 1 280px" }}>
          <h3
            style={{
              color: WHITE,
              fontSize: "20px",
              fontWeight: 700,
              marginBottom: "10px",
              lineHeight: 1.3,
            }}
          >
            {headline}
          </h3>
          <p
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "15px",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {body}
          </p>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flexShrink: 0,
          }}
        >
          <a
            href="tel:+4917560360003"
            style={{
              backgroundColor: ORANGE,
              color: WHITE,
              padding: "12px 24px",
              borderRadius: "6px",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              whiteSpace: "nowrap",
            }}
          >
            <i className="fas fa-phone" style={{ fontSize: "13px" }} />
            +49 175 6036003
          </a>
          <a
            href="https://wa.me/491756036003"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: WHITE,
              padding: "11px 24px",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              whiteSpace: "nowrap",
            }}
          >
            <i className="fab fa-whatsapp" style={{ fontSize: "16px", color: "#25D366" }} />
            WhatsApp schreiben
          </a>
        </div>
      </div>

      {/* Trust signals */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
          marginBottom: "36px",
          padding: "20px 24px",
          backgroundColor: LIGHT,
          borderRadius: "8px",
          border: `1px solid ${BORDER}`,
        }}
      >
        {[
          { icon: "fas fa-lock", text: "100% vertraulich" },
          { icon: "fas fa-calendar-check", text: "Mo–So 10–22 Uhr" },
          { icon: "fas fa-file-alt", text: "Offizielles Gutachten" },
          { icon: "fas fa-map-marker-alt", text: "München & bundesweit" },
        ].map(({ icon, text }) => (
          <div
            key={text}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: MID,
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            <i className={icon} style={{ color: ORANGE, fontSize: "13px" }} />
            {text}
          </div>
        ))}
      </div>

      {/* Article navigation */}
      {(prevHref || nextHref) && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "24px",
          }}
        >
          {prevHref ? (
            <a
              href={prevHref}
              style={{
                color: ORANGE,
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              ← {prevLabel || "Vorheriger Artikel"}
            </a>
          ) : (
            <span />
          )}
          {nextHref && (
            <a
              href={nextHref}
              style={{
                color: MID,
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              {nextLabel || "Nächster Artikel"} →
            </a>
          )}
        </div>
      )}
    </>
  );
}
