import mongoose from "mongoose";
import dotenv from "dotenv";

import Shipment from "../models/Shipment.js";
import Warehouse from "../models/Warehouse.js";
import User from "../models/User.js";
import Setting from "../models/Setting.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await Shipment.deleteMany();
await Warehouse.deleteMany();
await User.deleteMany();
await Setting.deleteMany();

await Warehouse.insertMany([
  {
    code: "TRP",
    name: "Tripoli Warehouse",
    city: "Tripoli",
    manager: "Ahmed"
  },
  {
    code: "MIS",
    name: "Misrata Warehouse",
    city: "Misrata",
    manager: "Ali"
  },
  {
    code: "BEN",
    name: "Benghazi Warehouse",
    city: "Benghazi",
    manager: "Omar"
  }
]);

for (let i = 1; i <= 50; i++) {
  await Shipment.create({
    shipmentNo: `LIB2507${1000 + i}`,
    sender: `Sender ${i}`,
    receiver: `Receiver ${i}`,
    origin: "Tripoli",
    destination: "Benghazi",
    status:
      i % 3 === 0
        ? "Completed"
        : i % 2 === 0
        ? "In Transit"
        : "Ready Pickup"
  });
}

await Setting.create({
  companyName: "Libya Logistics",
  phone: "2180000000",
  email: "admin@libya.com",
  shipmentPrefix: "LIB"
});

console.log("Seed Completed");

process.exit();