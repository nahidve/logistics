import Shipment from "../models/Shipment.js";

export const getDashboardStats = async (req, res) => {
  const total = await Shipment.countDocuments();

  const completed = await Shipment.countDocuments({
    status: "Completed"
  });

  const transit = await Shipment.countDocuments({
    status: "In Transit"
  });

  const pickup = await Shipment.countDocuments({
    status: "Ready Pickup"
  });

  const pending = total - completed;

  res.json({
    total,
    completed,
    transit,
    pickup,
    pending
  });
};