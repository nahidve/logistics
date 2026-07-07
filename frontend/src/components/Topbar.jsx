import { FaSearch, FaBell } from "react-icons/fa";

export default function Topbar() {
  return (
    <header style={{
      background: "var(--clay-canvas)",
      borderBottom: "1.5px solid var(--clay-hairline)",
      padding: "0 40px",
      height: "68px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 40,
    }}>

      {/* Left — Breadcrumb / Title */}
      <div>
        <p style={{
          fontSize: "12px", fontWeight: 600,
          letterSpacing: "1.2px", textTransform: "uppercase",
          color: "var(--clay-muted)", margin: 0,
        }}>
          Libya Logistics
        </p>
        <h2 style={{
          fontSize: "18px", fontWeight: 600,
          letterSpacing: "-0.3px", color: "var(--clay-ink)",
          margin: "2px 0 0 0", lineHeight: 1.3,
        }}>
          Super Admin Dashboard
        </h2>
      </div>

      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>

        {/* Search */}
        <div style={{ position: "relative" }}>
          <FaSearch style={{
            position: "absolute", left: "14px",
            top: "50%", transform: "translateY(-50%)",
            color: "var(--clay-muted-soft)", fontSize: "13px",
            pointerEvents: "none",
          }} />
          <input
            type="text"
            placeholder="Search shipment, warehouse..."
            style={{
              height: "40px",
              width: "300px",
              paddingLeft: "38px",
              paddingRight: "16px",
              background: "var(--clay-surface-soft)",
              color: "var(--clay-ink)",
              fontSize: "14px",
              fontWeight: 400,
              borderRadius: "var(--r-md)",
              border: "1.5px solid var(--clay-hairline)",
              outline: "none",
              fontFamily: "inherit",
            }}
            onFocus={e => e.target.style.borderColor = "var(--clay-ink)"}
            onBlur={e => e.target.style.borderColor = "var(--clay-hairline)"}
          />
        </div>

        {/* Notification Bell */}
        <button
          style={{
            position: "relative",
            height: "40px", width: "40px",
            borderRadius: "var(--r-md)",
            border: "1.5px solid var(--clay-hairline)",
            background: "var(--clay-canvas)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            color: "var(--clay-muted)",
            transition: "background 0.15s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "var(--clay-surface-soft)"}
          onMouseLeave={e => e.currentTarget.style.background = "var(--clay-canvas)"}
        >
          <FaBell size={15} />
          {/* Notification dot */}
          <span style={{
            position: "absolute", top: "9px", right: "9px",
            width: "7px", height: "7px",
            borderRadius: "50%",
            background: "var(--clay-coral)",
            border: "1.5px solid var(--clay-canvas)",
          }} />
        </button>

        {/* Divider */}
        <div style={{
          width: "1.5px", height: "32px",
          background: "var(--clay-hairline)",
        }} />

        {/* User */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

          <div style={{
            height: "38px", width: "38px",
            borderRadius: "50%",
            background: "var(--clay-lavender)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: "13px",
            color: "var(--clay-ink)",
            flexShrink: 0,
          }}>
            SA
          </div>

          <div>
            <p style={{
              fontWeight: 600, fontSize: "14px",
              color: "var(--clay-ink)", margin: 0, lineHeight: 1.2,
            }}>
              Super Admin
            </p>
            <p style={{
              fontSize: "12px", color: "var(--clay-muted)",
              margin: 0, lineHeight: 1.4,
            }}>
              admin@libya.com
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}