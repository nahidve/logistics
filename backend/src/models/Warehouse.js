import mongoose from "mongoose";

const warehouseSchema = new mongoose.Schema(
  {
    code: String,
    name: String,
    city: String,
    manager: String,
    active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Warehouse", warehouseSchema);