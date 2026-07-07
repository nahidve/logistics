import { create } from "zustand";

const initialShipments = Array.from(
  { length: 250 },
  (_, i) => ({
    id: i + 1,
    shipmentNo: `LIB2507${String(i + 1).padStart(4, "0")}`,
    sender: `Sender ${i + 1}`,
    receiver: `Receiver ${i + 1}`,
    origin: "Tripoli",
    destination: "Benghazi",
    status:
      i % 5 === 0
        ? "Completed"
        : i % 4 === 0
        ? "Ready Pickup"
        : i % 3 === 0
        ? "In Transit"
        : "Booked",
    createdAt: new Date()
  })
);

const useShipmentStore = create((set) => ({
  shipments: initialShipments,

  activities: [
    {
      id: 1,
      text: "System initialized"
    }
  ],

  addShipment: (shipment) =>
    set((state) => ({
      shipments: [
        shipment,
        ...state.shipments
      ],

      activities: [
        {
          id: Date.now(),
          text: `Shipment ${shipment.shipmentNo} created`
        },
        ...state.activities
      ]
    })),

  updateStatus: (id, status) =>
    set((state) => ({
      shipments: state.shipments.map((s) =>
        s.id === id
          ? { ...s, status }
          : s
      ),

      activities: [
        {
          id: Date.now(),
          text: `Shipment #${id} updated to ${status}`
        },
        ...state.activities
      ]
    }))
}));

export default useShipmentStore;