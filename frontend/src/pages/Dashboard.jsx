import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import StatCard from "../components/StatCard";
import ActivityFeed from "../components/ActivityFeed";

const statusData = [
  { name: "Completed",    value: 2100 },
  { name: "In Transit",  value: 650  },
  { name: "Ready Pickup", value: 495 },
];

const warehouseData = [
  { warehouse: "Tripoli",  shipments: 1400 },
  { warehouse: "Misrata",  shipments: 920  },
  { warehouse: "Benghazi", shipments: 870  },
  { warehouse: "Zawiya",   shipments: 620  },
];

const warehousePerformance = [
  { warehouse: "Tripoli",  shipments: 1420, delivered: 1378, performance: "97%" },
  { warehouse: "Misrata",  shipments: 920,  delivered: 885,  performance: "96%" },
  { warehouse: "Benghazi", shipments: 870,  delivered: 831,  performance: "95%" },
  { warehouse: "Zawiya",   shipments: 620,  delivered: 595,  performance: "96%" },
];

const recentShipments = [
  { shipment: "LIB25070001", sender: "Ahmed Ali",    receiver: "Omar Hassan",  status: "In Transit" },
  { shipment: "LIB25070002", sender: "Mohamed Ali",  receiver: "Yousef Salem", status: "Completed"  },
  { shipment: "LIB25070003", sender: "Khaled Omar",  receiver: "Salem Ahmed",  status: "Ready Pickup" },
];

// Clay chart colors
const PIE_COLORS  = ["#1a3a3a", "#e8b94a", "#b8a4ed"];
const BAR_COLOR   = "#ff4d8b";

// Inline mini stat for the hero band
function HeroStat({ label, value }) {
  return (
    <div>
      <p style={{ fontSize: "13px", fontWeight: 500, color: "var(--clay-muted)", margin: "0 0 4px 0" }}>
        {label}
      </p>
      <h2 style={{
        fontSize: "32px", fontWeight: 600,
        letterSpacing: "-1px", color: "var(--clay-ink)",
        margin: 0, lineHeight: 1,
      }}>
        {value}
      </h2>
    </div>
  );
}

// Mini tonal stat cards (quick stats row)
function QuickCard({ label, value, accent }) {
  return (
    <div style={{
      background: "var(--clay-surface-card)",
      borderRadius: "var(--r-lg)",
      padding: "20px 24px",
      borderLeft: `4px solid ${accent}`,
      display: "flex", flexDirection: "column", gap: "8px",
    }}>
      <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--clay-muted)", margin: 0 }}>
        {label}
      </p>
      <h2 style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-0.8px", color: "var(--clay-ink)", margin: 0 }}>
        {value}
      </h2>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

      {/* ── Hero Band (CTA-band-illustrated style) ─────────────────── */}
      <div
        className="clay-animate-fade-up"
        style={{
          background: "var(--clay-surface-soft)",
          borderRadius: "var(--r-xl)",
          padding: "40px 48px",
          border: "1.5px solid var(--clay-hairline)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: "absolute", right: "80px", top: "-40px",
          width: "220px", height: "220px", borderRadius: "50%",
          background: "var(--clay-ochre)", opacity: 0.12, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: "0px", bottom: "-60px",
          width: "180px", height: "180px", borderRadius: "50%",
          background: "var(--clay-pink)", opacity: 0.1, pointerEvents: "none",
        }} />

        {/* Section label */}
        <p style={{
          fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px",
          textTransform: "uppercase", color: "var(--clay-muted)", margin: "0 0 12px 0",
        }}>
          Operations Overview
        </p>

        {/* Display heading */}
        <h1 style={{
          fontSize: "40px", fontWeight: 500,
          lineHeight: 1.1, letterSpacing: "-1px",
          color: "var(--clay-ink)", margin: "0 0 8px 0",
          maxWidth: "640px",
        }}>
          Logistics Operations Overview
        </h1>

        <p style={{
          fontSize: "16px", fontWeight: 400,
          color: "var(--clay-muted)", margin: "0 0 36px 0",
        }}>
          3,245 active shipments across 7 warehouses today.
        </p>

        {/* Hero stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}>
          <HeroStat label="Warehouses"     value="7"     />
          <HeroStat label="Users"          value="23"    />
          <HeroStat label="Shipments Today" value="184"  />
          <HeroStat label="Success Rate"   value="97.4%" />
        </div>
      </div>

      {/* ── KPI Feature Cards ──────────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}>
        <StatCard title="Total Shipments" value="3,245" change="12.4%" icon="shipments" variantIndex={0} />
        <StatCard title="Pending"         value="154"   change="4.2%"  icon="pending"   variantIndex={1} />
        <StatCard title="In Transit"      value="650"   change="8.7%"  icon="transit"   variantIndex={2} />
        <StatCard title="Ready Pickup"    value="495"   change="5.1%"  icon="warehouse" variantIndex={3} />
        <StatCard title="Completed"       value="2,921" change="15.3%" icon="completed" variantIndex={4} />
      </div>

      {/* ── Quick Tonal Stats ──────────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
        <QuickCard label="Today's Shipments" value="184" accent="var(--clay-pink)"    />
        <QuickCard label="Completed Today"   value="162" accent="var(--clay-mint)"    />
        <QuickCard label="Pending Pickup"    value="72"  accent="var(--clay-peach)"   />
        <QuickCard label="Active Warehouses" value="7"   accent="var(--clay-lavender)" />
      </div>

      {/* ── Charts + Activity Feed ─────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 360px", gap: "20px" }}>

        {/* Pie Chart */}
        <div style={{
          background: "var(--clay-canvas)",
          borderRadius: "var(--r-lg)",
          border: "1.5px solid var(--clay-hairline)",
          padding: "24px",
          height: "340px",
        }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--clay-muted)", margin: "0 0 4px 0" }}>
            Distribution
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: 600, color: "var(--clay-ink)", margin: "0 0 20px 0", letterSpacing: "-0.2px" }}>
            Shipment Status
          </h3>
          <ResponsiveContainer width="100%" height="75%">
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                outerRadius={95}
                innerRadius={40}
                paddingAngle={3}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {statusData.map((entry, index) => (
                  <Cell key={index} fill={PIE_COLORS[index]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "var(--clay-canvas)",
                  border: "1.5px solid var(--clay-hairline)",
                  borderRadius: "var(--r-md)",
                  fontSize: "13px",
                  boxShadow: "none",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div style={{
          background: "var(--clay-canvas)",
          borderRadius: "var(--r-lg)",
          border: "1.5px solid var(--clay-hairline)",
          padding: "24px",
          height: "340px",
        }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--clay-muted)", margin: "0 0 4px 0" }}>
            Performance
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: 600, color: "var(--clay-ink)", margin: "0 0 20px 0", letterSpacing: "-0.2px" }}>
            Warehouse Shipments
          </h3>
          <ResponsiveContainer width="100%" height="75%">
            <BarChart data={warehouseData} barSize={28}>
              <XAxis dataKey="warehouse" tick={{ fontSize: 12, fill: "var(--clay-muted)" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "var(--clay-muted)" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  background: "var(--clay-canvas)",
                  border: "1.5px solid var(--clay-hairline)",
                  borderRadius: "var(--r-md)",
                  fontSize: "13px",
                  boxShadow: "none",
                }}
                cursor={{ fill: "var(--clay-surface-soft)" }}
              />
              <Bar dataKey="shipments" fill={BAR_COLOR} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Activity Feed */}
        <ActivityFeed />

      </div>

      {/* ── Analytics Cards Row ───────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>

        {[
          {
            label: "Best Performing Warehouse",
            value: "Tripoli Warehouse",
            accent: "var(--clay-teal)",
          },
          {
            label: "Average Delivery Time",
            value: "1.8 Days",
            accent: "var(--clay-pink)",
          },
          {
            label: "Pickup Success Rate",
            value: "97.4%",
            accent: "var(--clay-ochre)",
          },
        ].map(({ label, value, accent }) => (
          <div key={label} style={{
            background: "var(--clay-canvas)",
            borderRadius: "var(--r-lg)",
            border: "1.5px solid var(--clay-hairline)",
            padding: "24px",
            borderTop: `4px solid ${accent}`,
          }}>
            <p style={{ fontSize: "13px", fontWeight: 500, color: "var(--clay-muted)", margin: "0 0 8px 0" }}>
              {label}
            </p>
            <h2 style={{
              fontSize: "24px", fontWeight: 600,
              letterSpacing: "-0.5px", color: "var(--clay-ink)",
              margin: 0,
            }}>
              {value}
            </h2>
          </div>
        ))}

      </div>

      {/* ── Warehouse Performance Table ────────────────────────────── */}
      <div style={{
        background: "var(--clay-canvas)",
        borderRadius: "var(--r-lg)",
        border: "1.5px solid var(--clay-hairline)",
        overflow: "hidden",
      }}>
        <div style={{
          padding: "20px 24px",
          borderBottom: "1.5px solid var(--clay-hairline)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--clay-muted)", margin: "0 0 2px 0" }}>
              Summary
            </p>
            <h2 style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.2px", color: "var(--clay-ink)", margin: 0 }}>
              Warehouse Performance
            </h2>
          </div>
        </div>

        <table className="clay-table">
          <thead>
            <tr>
              <th>Warehouse</th>
              <th>Shipments</th>
              <th>Delivered</th>
              <th>Performance</th>
            </tr>
          </thead>
          <tbody>
            {warehousePerformance.map((w) => (
              <tr key={w.warehouse}>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "8px", height: "8px", borderRadius: "50%",
                      background: "var(--clay-mint)",
                    }} />
                    <span style={{ fontWeight: 500, color: "var(--clay-ink)" }}>
                      {w.warehouse}
                    </span>
                  </div>
                </td>
                <td>{w.shipments.toLocaleString()}</td>
                <td>{w.delivered.toLocaleString()}</td>
                <td>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    padding: "4px 12px",
                    background: "var(--clay-surface-card)",
                    borderRadius: "999px",
                    fontSize: "13px", fontWeight: 600,
                    color: "var(--clay-ink)",
                    border: "1px solid var(--clay-hairline)",
                  }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e" }} />
                    {w.performance}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Recent Shipments Table ─────────────────────────────────── */}
      <div style={{
        background: "var(--clay-canvas)",
        borderRadius: "var(--r-lg)",
        border: "1.5px solid var(--clay-hairline)",
        overflow: "hidden",
      }}>
        <div style={{
          padding: "20px 24px",
          borderBottom: "1.5px solid var(--clay-hairline)",
        }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--clay-muted)", margin: "0 0 2px 0" }}>
            Latest
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.2px", color: "var(--clay-ink)", margin: 0 }}>
            Recent Shipments
          </h3>
        </div>

        <table className="clay-table">
          <thead>
            <tr>
              <th>Shipment ID</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentShipments.map((item) => (
              <tr key={item.shipment}>
                <td>
                  <span style={{ fontWeight: 600, color: "var(--clay-ink)", fontFamily: "monospace", fontSize: "13px" }}>
                    {item.shipment}
                  </span>
                </td>
                <td>{item.sender}</td>
                <td>{item.receiver}</td>
                <td>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: "7px",
                    padding: "5px 12px",
                    background: "var(--clay-surface-card)",
                    borderRadius: "9999px",
                    fontSize: "13px", fontWeight: 500,
                    color: "var(--clay-ink)",
                    border: "1px solid var(--clay-hairline)",
                  }}>
                    <span style={{
                      width: "7px", height: "7px", borderRadius: "50%",
                      background: item.status === "Completed"
                        ? "#22c55e"
                        : item.status === "In Transit"
                        ? "var(--clay-ochre)"
                        : "var(--clay-lavender)",
                    }} />
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}