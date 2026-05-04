// Seite: Anzeichen für Fremdgehen – SEO-Landingpage für lügendetektortest.com
import { useEffect } from "react";
import { Link } from "wouter";

const NAVY = "#1a2a4a";
const ORANGE = "#FF8C00";
const WHITE = "#ffffff";
const LIGHT_BG = "#f5f7fa";
const TEXT_DARK = "#1a2a4a";
const TEXT_MID = "#4a5568";
const BORDER = "#e2e8f0";

const signs = [
  {
    num: "1",
    title: "Plötzliche Geheimhaltung beim Handy",
    text: "Der Partner schützt sein Smartphone auffällig, ändert Passwörter oder nimmt es überall mit.",
    icon: "fas fa-mobile-alt",
  },
  {
    num: "2",
    title: "Verändertes Kommunikationsverhalten",
    text: "Weniger Gespräche, ausweichende Antworten oder gereizte Reaktionen auf einfache Fragen.",
    icon: "fas fa-comment-slash",
  },
  {
    num: "3",
    title: "Ungewöhnlich häufige Überstunden",
    text: "Mehr Arbeit als sonst ohne klare Erklärung oder nachvollziehbare Gründe.",
    icon: "fas fa-clock",
  },
  {
    num: "4",
    title: "Neues Interesse am eigenen Aussehen",
    text: "Plötzliche Veränderung im Styling, neue Kleidung oder intensivere Körperpflege.",
    icon: "fas fa-tshirt",
  },
  {
    num: "5",
    title: "Weniger Nähe und Intimität",
    text: "Emotionale oder körperliche Distanz nimmt deutlich zu.",
    icon: "fas fa-heart-broken",
  },
  {
    num: "6",
    title: "Häufige Stimmungsschwankungen",
    text: "Schuldgefühle oder Stress können zu wechselhaften Emotionen führen.",
    icon: "fas fa-theater-masks",
  },
  {
    num: "7",
    title: "Unklare Ausgaben",
    text: "Unerklärliche Abbuchungen, Restaurantbesuche oder Hotelkosten.",
    icon: "fas fa-receipt",
  },
];

export default function AnzeichenFremdgehen() {
  useEffect(() => {
    document.title = "Anzeichen für Fremdgehen – häufigste Hinweise | lügendetektortest.com";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: WHITE, minHeight: "100vh" }}>
      {/* Navbar */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: NAVY }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "32px", height: "32px", backgroundColor: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="fas fa-wave-square" style={{ color: WHITE, fontSize: "14px" }} />
            </div>
            <span style={{ color: WHITE, fontWeight: 700, fontSize: "18px", letterSpacing: "0.5px" }}>lügendetektortest.com</span>
          </Link>
          <Link href="/" style={{ textDecoration: "none" }}>
            <button style={{ backgroundColor: ORANGE, color: WHITE, border: "none", borderRadius: "6px", padding: "10px 20px", fontWeight: 700, fontSize: "14px", cursor: "pointer", fontFamily: "'Lato', sans-serif", letterSpacing: "0.5px" }}>
              ← ZURÜCK ZUR STARTSEITE
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: NAVY, paddingTop: "100px", paddingBottom: "60px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{ display: "inline-block", backgroundColor: ORANGE, color: WHITE, fontSize: "12px", fontWeight: 700, letterSpacing: "2px", padding: "6px 16px", borderRadius: "4px", marginBottom: "20px" }}>
            RATGEBER
          </div>
          <h1 style={{ color: WHITE, fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800, lineHeight: 1.2, marginBottom: "20px", letterSpacing: "-0.5px" }}>
            Anzeichen für Fremdgehen –<br />die häufigsten Hinweise
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", lineHeight: 1.7, marginBottom: "32px" }}>
            Viele Menschen spüren intuitiv, dass etwas nicht stimmt. Doch welche Anzeichen deuten wirklich auf Fremdgehen hin? Die folgenden Hinweise treten besonders häufig auf.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "8px", padding: "10px 18px", color: WHITE, fontSize: "14px" }}>
              <i className="fas fa-list-ol" style={{ marginRight: "8px", color: ORANGE }} />
              7 Anzeichen
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "8px", padding: "10px 18px", color: WHITE, fontSize: "14px" }}>
              <i className="fas fa-clock" style={{ marginRight: "8px", color: ORANGE }} />
              3 Min. Lesezeit
            </div>
          </div>
        </div>
      </section>

      {/* Anzeichen Liste */}
      <section style={{ backgroundColor: LIGHT_BG, padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {signs.map((sign) => (
              <div key={sign.num} style={{ backgroundColor: WHITE, borderRadius: "12px", border: `1px solid ${BORDER}`, padding: "28px 32px", display: "flex", gap: "24px", alignItems: "flex-start", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ flexShrink: 0, width: "52px", height: "52px", backgroundColor: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className={sign.icon} style={{ color: WHITE, fontSize: "20px" }} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ color: ORANGE, fontWeight: 800, fontSize: "14px", letterSpacing: "1px" }}>{sign.num}.</span>
                    <h2 style={{ color: TEXT_DARK, fontSize: "18px", fontWeight: 700, margin: 0 }}>{sign.title}</h2>
                  </div>
                  <p style={{ color: TEXT_MID, fontSize: "16px", lineHeight: 1.7, margin: 0 }}>{sign.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Sektion */}
      <section style={{ backgroundColor: WHITE, padding: "60px 24px", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: "60px", height: "60px", backgroundColor: "rgba(255,140,0,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <i className="fas fa-search" style={{ color: ORANGE, fontSize: "24px" }} />
          </div>
          <h2 style={{ color: TEXT_DARK, fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, marginBottom: "16px" }}>
            Gewissheit statt Vermutungen
          </h2>
          <p style={{ color: TEXT_MID, fontSize: "17px", lineHeight: 1.7, marginBottom: "32px" }}>
            Wenn Sie mehrere dieser Anzeichen bemerken, kann ein professioneller Polygraphentest Klarheit schaffen. Unsere zertifizierten Experten begleiten Sie diskret und vertraulich durch den gesamten Prozess.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/#contact">
              <button style={{ backgroundColor: ORANGE, color: WHITE, border: "none", borderRadius: "8px", padding: "16px 32px", fontWeight: 800, fontSize: "16px", cursor: "pointer", fontFamily: "'Lato', sans-serif", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-paper-plane" />
                JETZT ANFRAGEN
              </button>
            </Link>
            <a href="tel:+4917560360003" style={{ textDecoration: "none" }}>
              <button style={{ backgroundColor: "transparent", color: NAVY, border: `2px solid ${NAVY}`, borderRadius: "8px", padding: "16px 32px", fontWeight: 700, fontSize: "16px", cursor: "pointer", fontFamily: "'Lato', sans-serif", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fas fa-phone" />
                +49 175 6036003
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Info-Box */}
      <section style={{ backgroundColor: LIGHT_BG, padding: "40px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ backgroundColor: WHITE, borderRadius: "12px", border: `1px solid ${BORDER}`, padding: "28px 32px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ flexShrink: 0, width: "44px", height: "44px", backgroundColor: "rgba(255,140,0,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="fas fa-shield-alt" style={{ color: ORANGE, fontSize: "18px" }} />
            </div>
            <div>
              <h3 style={{ color: TEXT_DARK, fontSize: "17px", fontWeight: 700, marginBottom: "8px" }}>100% anonym und vertraulich</h3>
              <p style={{ color: TEXT_MID, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                Alle Anfragen und Untersuchungen werden absolut diskret behandelt. Ihre Daten werden nicht an Dritte weitergegeben. Die Ergebnisse erhalten ausschließlich Sie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: NAVY, padding: "32px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ color: WHITE, fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>lügendetektortest.com</div>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginBottom: "16px" }}>
            Marienstr. 4, 80331 München · +49 175 6036003 · beratung@lügendetektortest.com
          </div>
          <Link href="/" style={{ color: ORANGE, textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>
            ← Zurück zur Startseite
          </Link>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/4917560360003" target="_blank" rel="noopener noreferrer"
        style={{ position: "fixed", bottom: "80px", right: "20px", width: "52px", height: "52px", backgroundColor: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.2)", zIndex: 999, textDecoration: "none" }}>
        <i className="fab fa-whatsapp" style={{ color: WHITE, fontSize: "24px" }} />
      </a>
    </div>
  );
}
