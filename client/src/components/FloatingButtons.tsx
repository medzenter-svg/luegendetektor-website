/**
 * FloatingButtons – WhatsApp & E-Mail Floating-Buttons.
 * Identisch mit der FloatingWidgets-Komponente auf der Startseite.
 * Wird auf allen Unterseiten eingebunden.
 */

const GREEN_WA = "#25D366";
const TEAL_SHARE = "#128C7E";
const ORANGE   = "#FF8C00";
const WHITE    = "#ffffff";

export default function FloatingButtons() {
  const shareUrl = encodeURIComponent("https://luegendetektor-test-muenchen.de");
  const shareText = encodeURIComponent("Lügendetektor Test München – Professionelle Polygraphuntersuchung. Genauigkeit 98–99%. Diskret & vertraulich. ");
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
        title="WhatsApp schreiben"
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
        href={`https://wa.me/?text=${shareText}${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Website per WhatsApp teilen"
        style={{
          width: "52px",
          height: "52px",
          backgroundColor: TEAL_SHARE,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: WHITE,
          fontSize: "18px",
          textDecoration: "none",
          boxShadow: "0 4px 14px rgba(18,140,126,0.4)",
        }}
        aria-label="Website per WhatsApp teilen"
      >
        <i className="fas fa-share-alt"></i>
      </a>
      <a
        href="mailto:info@luegendetektor-test-muenchen.de"
        title="E-Mail senden"
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
