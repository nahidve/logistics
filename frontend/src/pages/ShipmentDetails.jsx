import { useParams } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";

const timeline = [
  { status: "Booked",        warehouse: "Tripoli Warehouse",  date: "07 Jul 2026 – 09:15 AM" },
  { status: "Stored",        warehouse: "Tripoli Warehouse",  date: "07 Jul 2026 – 09:30 AM" },
  { status: "Ready Dispatch",warehouse: "Tripoli Warehouse",  date: "07 Jul 2026 – 03:45 PM" },
  { status: "In Transit",    warehouse: "Transit Vehicle",     date: "08 Jul 2026 – 08:10 AM" },
  { status: "Received",      warehouse: "Benghazi Warehouse", date: "08 Jul 2026 – 04:20 PM" },
  { status: "Ready Pickup",  warehouse: "Benghazi Warehouse", date: "08 Jul 2026 – 04:45 PM" },
];

const DOT_COLORS = [
  "var(--clay-lavender)",
  "var(--clay-mint)",
  "var(--clay-peach)",
  "var(--clay-ochre)",
  "var(--clay-teal)",
  "var(--clay-pink)",
];

const INFO_CARDS = [
  { label: "Origin",      value: "Tripoli" },
  { label: "Destination", value: "Benghazi" },
  { label: "Sender",      value: "Ahmed Ali" },
  { label: "Receiver",    value: "Omar Hassan" },
];

export default function ShipmentDetails() {
  const { id } = useParams();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

      {/* ── Header Card ───────────────────────────────────────────── */}
      <div
        className="clay-animate-fade-up"
        style={{
          background: "var(--clay-surface-soft)",
          borderRadius: "var(--r-xl)",
          border: "1.5px solid var(--clay-hairline)",
          padding: "36px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          position: "relative", overflow: "hidden",
        }}
      >
        {/* Decorative blob */}
        <div style={{
          position: "absolute", right: "-30px", top: "-40px",
          width: "180px", height: "180px", borderRadius: "50%",
          background: "var(--clay-ochre)", opacity: 0.15, pointerEvents: "none",
        }} />

        <div>
          <p style={{
            fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px",
            textTransform: "uppercase", color: "var(--clay-muted)", margin: "0 0 10px 0",
          }}>
            Shipment Details
          </p>
          <h1 style={{
            fontSize: "32px", fontWeight: 500,
            letterSpacing: "-0.5px", lineHeight: 1.15,
            color: "var(--clay-ink)", margin: "0 0 6px 0",
            fontFamily: "monospace",
          }}>
            {id}
          </h1>
          <p style={{ fontSize: "16px", color: "var(--clay-muted)", margin: 0 }}>
            Shipment Tracking Details
          </p>
        </div>

        <StatusBadge status="Ready Pickup" />
      </div>

      {/* ── Info Cards ────────────────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
        {INFO_CARDS.map(({ label, value }, i) => (
          <div key={label} style={{
            background: "var(--clay-canvas)",
            borderRadius: "var(--r-lg)",
            border: "1.5px solid var(--clay-hairline)",
            padding: "20px 24px",
            borderTop: `4px solid ${DOT_COLORS[i]}`,
          }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--clay-muted)", margin: "0 0 8px 0" }}>
              {label}
            </p>
            <h3 style={{ fontSize: "18px", fontWeight: 600, color: "var(--clay-ink)", margin: 0, letterSpacing: "-0.2px" }}>
              {value}
            </h3>
          </div>
        ))}
      </div>

      {/* ── Movement History Timeline ──────────────────────────────── */}
      <div style={{
        background: "var(--clay-canvas)",
        borderRadius: "var(--r-lg)",
        border: "1.5px solid var(--clay-hairline)",
        padding: "28px 32px",
      }}>
        <p style={{
          fontSize: "12px", fontWeight: 600, letterSpacing: "1.2px",
          textTransform: "uppercase", color: "var(--clay-muted)", margin: "0 0 6px 0",
        }}>
          Tracking
        </p>
        <h2 style={{
          fontSize: "24px", fontWeight: 600,
          letterSpacing: "-0.3px", color: "var(--clay-ink)",
          margin: "0 0 32px 0",
        }}>
          Movement History
        </h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {timeline.map((item, index) => (
            <div key={index} style={{ display: "flex", gap: "20px" }}>

              {/* Dot + connector */}
              <div style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", flexShrink: 0, width: "20px",
              }}>
                <div style={{
                  width: "14px", height: "14px", borderRadius: "50%",
                  background: DOT_COLORS[index % DOT_COLORS.length],
                  border: "2.5px solid var(--clay-canvas)",
                  boxShadow: `0 0 0 2px ${DOT_COLORS[index % DOT_COLORS.length]}`,
                  flexShrink: 0,
                  zIndex: 1,
                }} />
                {index < timeline.length - 1 && (
                  <div style={{
                    flex: 1, width: "2px",
                    background: "var(--clay-hairline)",
                    minHeight: "40px", marginTop: "4px",
                  }} />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: index < timeline.length - 1 ? "28px" : "0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
                  <h3 style={{
                    fontSize: "16px", fontWeight: 600,
                    color: "var(--clay-ink)", margin: 0,
                  }}>
                    {item.status}
                  </h3>
                  <StatusBadge status={item.status} />
                </div>
                <p style={{ fontSize: "14px", color: "var(--clay-muted)", margin: "0 0 2px 0" }}>
                  {item.warehouse}
                </p>
                <p style={{ fontSize: "12px", color: "var(--clay-muted-soft)", margin: 0 }}>
                  {item.date}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}