import mongoose from "mongoose";

const settingSchema = new mongoose.Schema({
  companyName: String,

  phone: String,

  email: String,

  shipmentPrefix: String
});

export default mongoose.model("Setting", settingSchema);