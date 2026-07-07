import PageHeader from "../components/PageHeader";
import TableCard from "../components/TableCard";
import StatusBadge from "../components/StatusBadge";

const warehouses = [
  { code: "TRP", name: "Tripoli Warehouse",  city: "Tripoli",  manager: "Ahmed Ali",  status: "Active" },
  { code: "MIS", name: "Misrata Warehouse",  city: "Misrata",  manager: "Omar Salem", status: "Active" },
  { code: "BEN", name: "Benghazi Warehouse", city: "Benghazi", manager: "Khaled",     status: "Active" },
];

const ACCENT_COLORS = [
  "var(--clay-teal)",
  "var(--clay-ochre)",
  "var(--clay-lavender)",
];

export default function Warehouses() {
  return (
    <>
      <PageHeader
        title="Warehouses"
        subtitle="Manage warehouse locations and staff"
        buttonText="Add Warehouse"
      />

      {/* Warehouse cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "32px" }}>
        {warehouses.map(({ code, name, city, manager, status }, i) => (
          <div key={code} style={{
            background: "var(--clay-canvas)",
            borderRadius: "var(--r-lg)",
            border: "1.5px solid var(--clay-hairline)",
            padding: "24px",
            borderTop: `4px solid ${ACCENT_COLORS[i % ACCENT_COLORS.length]}`,
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "10px",
                background: ACCENT_COLORS[i % ACCENT_COLORS.length],
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 700, fontSize: "14px",
                color: i === 0 ? "#fff" : "var(--clay-ink)",
              }}>
                {code}
              </div>
              <StatusBadge status={status} />
            </div>
            <h3 style={{ fontSize: "16px", fontWeight: 600, color: "var(--clay-ink)", margin: "0 0 4px 0" }}>
              {name}
            </h3>
            <p style={{ fontSize: "14px", color: "var(--clay-muted)", margin: "0 0 2px 0" }}>
              {city}
            </p>
            <p style={{ fontSize: "13px", color: "var(--clay-muted-soft)", margin: 0 }}>
              Manager: {manager}
            </p>
          </div>
        ))}
      </div>

      {/* Full table */}
      <TableCard>
        <div style={{
          padding: "16px 20px",
          borderBottom: "1.5px solid var(--clay-hairline)",
        }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--clay-muted)", margin: "0 0 2px 0" }}>
            All Locations
          </p>
          <h2 style={{ fontSize: "18px", fontWeight: 600, color: "var(--clay-ink)", margin: 0, letterSpacing: "-0.2px" }}>
            Warehouse Directory
          </h2>
        </div>
        <table className="clay-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Warehouse</th>
              <th>City</th>
              <th>Manager</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {warehouses.map((w) => (
              <tr key={w.code}>
                <td>
                  <span style={{
                    fontWeight: 700, fontSize: "12px",
                    letterSpacing: "1px", textTransform: "uppercase",
                    color: "var(--clay-muted)",
                    fontFamily: "monospace",
                  }}>
                    {w.code}
                  </span>
                </td>
                <td style={{ fontWeight: 500, color: "var(--clay-ink)" }}>{w.name}</td>
                <td>{w.city}</td>
                <td>{w.manager}</td>
                <td><StatusBadge status={w.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>
    </>
  );
}