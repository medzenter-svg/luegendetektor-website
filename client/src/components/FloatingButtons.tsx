import React from "react";

/**
 * FloatingButtons – WhatsApp, Teilen & E-Mail Floating-Buttons mit Tooltips.
 * Wird auf allen Unterseiten eingebunden.
 */

const GREEN_WA    = "#25D366";
const TEAL_SHARE  = "#128C7E";
const ORANGE      = "#FF8C00";
const WHITE       = "#ffffff";

const tooltipStyle: React.CSSProperties = {
  position: "absolute",
  right: "64px",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(15,25,50,0.92)",
  color: WHITE,
  fontSize: "13px",
  fontWeight: 600,
  whiteSpace: "nowrap",
  padding: "6px 12px",
  borderRadius: "6px",
  pointerEvents: "none",
  opacity: 0,
  transition: "opacity 0.2s ease",
  boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
};

const tooltipArrowStyle: React.CSSProperties = {
  position: "absolute",
  right: "-6px",
  top: "50%",
  transform: "translateY(-50%)",
  width: 0,
  height: 0,
  borderTop: "6px solid transparent",
  borderBottom: "6px solid transparent",
  borderLeft: "6px solid rgba(15,25,50,0.92)",
};

const btnWrapStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
};

export default function FloatingButtons() {
  const shareUrl  = encodeURIComponent("https://luegendetektor-test-muenchen.de");
  const shareText = encodeURIComponent("Lügendetektor Test München – Professionelle Polygraphuntersuchung. Genauigkeit 98–99%. Diskret & vertraulich. ");

  return (
    <>
      <style>{`
        .float-btn-wrap:hover .float-tooltip { opacity: 1 !important; }
        .float-btn-link { transition: transform 0.15s ease, box-shadow 0.15s ease; }
        .float-btn-link:hover { transform: scale(1.1); }
      `}</style>
      <div style={{ position: "fixed", bottom: "80px", right: "20px", display: "flex", flexDirection: "column", gap: "12px", zIndex: 1000 }}>

        {/* WhatsApp Kontakt */}
        <div className="float-btn-wrap" style={btnWrapStyle}>
          <span className="float-tooltip" style={tooltipStyle}>
            Experten anschreiben
            <span style={tooltipArrowStyle} />
          </span>
          <a
            className="float-btn-link"
            href="https://wa.me/491756036003"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp schreiben"
            style={{ width: "52px", height: "52px", backgroundColor: GREEN_WA, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: WHITE, fontSize: "24px", textDecoration: "none", boxShadow: "0 4px 14px rgba(37,211,102,0.4)" }}
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        {/* WhatsApp Teilen */}
        <div className="float-btn-wrap" style={btnWrapStyle}>
          <span className="float-tooltip" style={tooltipStyle}>
            Website teilen
            <span style={tooltipArrowStyle} />
          </span>
          <a
            className="float-btn-link"
            href={`https://wa.me/?text=${shareText}${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website per WhatsApp teilen"
            style={{ width: "52px", height: "52px", backgroundColor: TEAL_SHARE, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: WHITE, fontSize: "18px", textDecoration: "none", boxShadow: "0 4px 14px rgba(18,140,126,0.4)" }}
          >
            <i className="fas fa-share-alt"></i>
          </a>
        </div>

        {/* E-Mail */}
        <div className="float-btn-wrap" style={btnWrapStyle}>
          <span className="float-tooltip" style={tooltipStyle}>
            E-Mail senden
            <span style={tooltipArrowStyle} />
          </span>
          <a
            className="float-btn-link"
            href="mailto:info@luegendetektor-test-muenchen.de"
            aria-label="E-Mail senden"
            style={{ width: "52px", height: "52px", backgroundColor: ORANGE, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: WHITE, fontSize: "20px", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,140,0,0.4)" }}
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>

      </div>
    </>
  );
}
