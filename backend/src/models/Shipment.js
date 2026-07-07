import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema(
  {
    shipmentNo: String,

    origin: String,

    destination: String,

    sender: String,

    receiver: String,

    status: String
  },
  { timestamps: true }
);

export default mongoose.model("Shipment", shipmentSchema);