import { useState } from "react";
import { Link } from "react-router-dom";

import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";

const initialShipments = Array.from({ length: 25 }, (_, i) => ({
  shipmentNo: `LIB2507${String(i + 1).padStart(4, "0")}`,
  sender:      `Sender ${i + 1}`,
  receiver:    `Receiver ${i + 1}`,
  origin:      "Tripoli",
  destination: "Benghazi",
  status:
    i % 5 === 0 ? "Completed"
    : i % 4 === 0 ? "Ready Pickup"
    : i % 3 === 0 ? "In Transit"
    : "Booked",
}));

export default function Shipments() {
  const [shipments, setShipments] = useState(initialShipments);

  const handleStatusChange = (shipmentNo, newStatus) => {
    setShipments((prev) =>
      prev.map((s) => s.shipmentNo === shipmentNo ? { ...s, status: newStatus } : s)
    );
  };

  return (
    <>
      <PageHeader
        title="Shipments"
        subtitle="Manage and track all active shipments"
        buttonText="Create Shipment"
      />

      {/* Table */}
      <div style={{
        background: "var(--clay-canvas)",
        borderRadius: "var(--r-lg)",
        border: "1.5px solid var(--clay-hairline)",
        overflow: "hidden",
      }}>

        <table className="clay-table">
          <thead>
            <tr>
              <th>Shipment No</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment.shipmentNo}>

                <td>
                  <Link
                    to={`/shipments/${shipment.shipmentNo}`}
                    style={{
                      fontWeight: 600,
                      color: "var(--clay-ink)",
                      textDecoration: "none",
                      fontFamily: "monospace",
                      fontSize: "13px",
                      borderBottom: "1px solid var(--clay-hairline)",
                    }}
                  >
                    {shipment.shipmentNo}
                  </Link>
                </td>

                <td>{shipment.sender}</td>
                <td>{shipment.receiver}</td>
                <td>{shipment.origin}</td>
                <td>{shipment.destination}</td>

                <td>
                  <StatusBadge status={shipment.status} />
                </td>

                <td>
                  <select
                    value={shipment.status}
                    onChange={(e) => handleStatusChange(shipment.shipmentNo, e.target.value)}
                    className="clay-select"
                    style={{ width: "160px" }}
                  >
                    <option>Booked</option>
                    <option>Stored</option>
                    <option>Ready Dispatch</option>
                    <option>In Transit</option>
                    <option>Received</option>
                    <option>Ready Pickup</option>
                    <option>Completed</option>
                  </select>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  );
}