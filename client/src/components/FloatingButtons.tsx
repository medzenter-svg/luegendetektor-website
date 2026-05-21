/**
 * FloatingButtons – WhatsApp & E-Mail Floating-Buttons.
 * Identisch mit der FloatingWidgets-Komponente auf der Startseite.
 * Wird auf allen Unterseiten eingebunden.
 */

const GREEN_WA = "#25D366";
const ORANGE   = "#FF8C00";
const WHITE    = "#ffffff";

export default function FloatingButtons() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "80px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        zIndex: 1000,
      }}
    >
      <a
        href="https://wa.me/491756036003"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "52px",
          height: "52px",
          backgroundColor: GREEN_WA,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: WHITE,
          fontSize: "24px",
          textDecoration: "none",
          boxShadow: "0 4px 14px rgba(37,211,102,0.4)",
        }}
        aria-label="WhatsApp schreiben"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a
        href="mailto:info@luegendetektor-test-muenchen.de"
        style={{
          width: "52px",
          height: "52px",
          backgroundColor: ORANGE,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: WHITE,
          fontSize: "20px",
          textDecoration: "none",
          boxShadow: "0 4px 14px rgba(255,140,0,0.4)",
        }}
        aria-label="E-Mail senden"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
}
