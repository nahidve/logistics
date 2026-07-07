import PageHeader from "../components/PageHeader";
import TableCard from "../components/TableCard";
import StatusBadge from "../components/StatusBadge";

const users = [
  { code: "TRP", name: "Tripoli Warehouse",  city: "Tripoli",  manager: "Ahmed",  status: "Active" },
  { code: "MIS", name: "Misrata Warehouse",  city: "Misrata",  manager: "Omar",   status: "Active" },
  { code: "BEN", name: "Benghazi Warehouse", city: "Benghazi", manager: "Khaled", status: "Active" },
];

export default function Users() {
  return (
    <>
      <PageHeader
        title="Users"
        subtitle="Manage system users and permissions"
        buttonText="Add User"
      />

      <TableCard>
        <div style={{
          padding: "16px 20px",
          borderBottom: "1.5px solid var(--clay-hairline)",
        }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--clay-muted)", margin: "0 0 2px 0" }}>
            Directory
          </p>
          <h2 style={{ fontSize: "18px", fontWeight: 600, color: "var(--clay-ink)", margin: 0, letterSpacing: "-0.2px" }}>
            System Users
          </h2>
        </div>
        <table className="clay-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>City</th>
              <th>Manager</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.code}>
                <td>
                  <span style={{
                    fontWeight: 700, fontSize: "12px",
                    letterSpacing: "1px", textTransform: "uppercase",
                    color: "var(--clay-muted)", fontFamily: "monospace",
                  }}>
                    {u.code}
                  </span>
                </td>
                <td style={{ fontWeight: 500, color: "var(--clay-ink)" }}>{u.name}</td>
                <td>{u.city}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{
                      width: "28px", height: "28px", borderRadius: "50%",
                      background: "var(--clay-lavender)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "11px", fontWeight: 700, color: "var(--clay-ink)",
                      flexShrink: 0,
                    }}>
                      {u.manager.charAt(0)}
                    </div>
                    {u.manager}
                  </div>
                </td>
                <td><StatusBadge status={u.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>
    </>
  );
}