/**
 * ContactFormCompact – Kompaktes Kontaktformular für Leistungs- und Stadtseiten.
 * Sendet per EmailJS (gleiche Konfiguration wie Startseite) oder öffnet mailto-Fallback.
 * Design: Navy/Orange, dezent, kein Marketingsprech.
 */
import { useState } from "react";

const NAVY   = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE  = "#ffffff";
const LIGHT  = "#f5f7fa";
const BORDER = "#dde3ee";
const MID    = "#4a5568";
const GREEN  = "#25D366";

interface Props {
  context?: string; // z.B. "Treuetest" – wird im Betreff verwendet
}

export default function ContactFormCompact({ context = "Anfrage" }: Props) {
  const [name, setName]       = useState("");
  const [phone, setPhone]     = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent]       = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Fallback: mailto (works without backend)
    const subject = encodeURIComponent(`Anfrage: ${context}`);
    const body = encodeURIComponent(
      `Name: ${name}\nTelefon: ${phone}\nE-Mail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:info@luegendetektor-test-muenchen.de?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSent(true);
      setSending(false);
    }, 800);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    border: `1px solid ${BORDER}`,
    borderRadius: "6px",
    fontSize: "14px",
    fontFamily: "'Lato', sans-serif",
    color: NAVY,
    backgroundColor: WHITE,
    outline: "none",
    boxSizing: "border-box",
  };

  if (sent) {
    return (
      <div style={{ backgroundColor: LIGHT, border: `1px solid ${BORDER}`, borderRadius: "10px", padding: "32px 28px", textAlign: "center" }}>
        <i className="fas fa-check-circle" style={{ color: "#38a169", fontSize: "36px", marginBottom: "14px", display: "block" }} />
        <h3 style={{ color: NAVY, fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>Vielen Dank!</h3>
        <p style={{ color: MID, fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
          Ihre Anfrage wurde übermittelt. Wir melden uns schnellstmöglich bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <section style={{ backgroundColor: LIGHT, borderTop: `3px solid ${ORANGE}`, padding: "48px 24px 56px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "32px", flexWrap: "wrap" }}>

          {/* Left: Form */}
          <div style={{ flex: "1 1 340px" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
              Kostenlose Erstberatung
            </p>
            <h2 style={{ color: NAVY, fontSize: "22px", fontWeight: 800, marginBottom: "6px", lineHeight: 1.3 }}>
              Anfrage stellen
            </h2>
            <p style={{ color: MID, fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
              Schildern Sie uns Ihr Anliegen. Wir antworten diskret und ohne Verpflichtung.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <input
                  type="text"
                  placeholder="Ihr Name *"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="tel"
                  placeholder="Telefon"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <input
                type="email"
                placeholder="E-Mail-Adresse *"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
              <textarea
                placeholder="Kurze Beschreibung Ihres Anliegens..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ ...inputStyle, resize: "vertical" }}
              />
              <button
                type="submit"
                disabled={sending}
                style={{
                  backgroundColor: ORANGE,
                  color: WHITE,
                  padding: "13px 28px",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: "15px",
                  cursor: "pointer",
                  fontFamily: "'Lato', sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "flex-start",
                }}
              >
                <i className="fas fa-paper-plane" style={{ fontSize: "13px" }} />
                {sending ? "Wird gesendet..." : "Anfrage senden"}
              </button>
              <p style={{ color: "#9aa5b8", fontSize: "12px", margin: 0 }}>
                <i className="fas fa-lock" style={{ marginRight: "5px" }} />
                Ihre Daten werden vertraulich behandelt.
              </p>
            </form>
          </div>

          {/* Right: Direct contact */}
          <div style={{ flex: "0 1 220px", paddingTop: "52px" }}>
            <p style={{ color: MID, fontSize: "13px", fontWeight: 600, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Direkt erreichen
            </p>
            <a
              href="tel:+4917560360003"
              style={{ display: "flex", alignItems: "center", gap: "10px", color: NAVY, textDecoration: "none", fontSize: "15px", fontWeight: 700, marginBottom: "14px" }}
            >
              <span style={{ width: "36px", height: "36px", backgroundColor: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="fas fa-phone-alt" style={{ color: WHITE, fontSize: "14px" }} />
              </span>
              +49 175 6036003
            </a>
            <a
              href="https://wa.me/491756036003"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "10px", color: NAVY, textDecoration: "none", fontSize: "15px", fontWeight: 700, marginBottom: "20px" }}
            >
              <span style={{ width: "36px", height: "36px", backgroundColor: GREEN, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="fab fa-whatsapp" style={{ color: WHITE, fontSize: "16px" }} />
              </span>
              WhatsApp
            </a>
            <div style={{ backgroundColor: WHITE, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "14px 16px" }}>
              {[
                { icon: "fas fa-clock", text: "Täglich 10–22 Uhr" },
                { icon: "fas fa-map-marker-alt", text: "München & bundesweit" },
                { icon: "fas fa-file-alt", text: "Offizielles Gutachten" },
                { icon: "fas fa-shield-alt", text: "100% vertraulich" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px", color: MID, fontSize: "13px", marginBottom: "8px" }}>
                  <i className={icon} style={{ color: ORANGE, fontSize: "12px", width: "14px" }} />
                  {text}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
