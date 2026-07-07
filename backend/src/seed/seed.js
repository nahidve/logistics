import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
import connectDB from "../config/db.js";

import {
  seedWarehouses,
} from "./warehouseSeeder.js";

import {
  seedCustomers,
} from "./customerSeeder.js";

import {
  seedUsers,
} from "./userSeeder.js";

import {
  seedShipments,
} from "./shipmentSeeder.js";

import Role from "../models/Role.js";

async function run() {
  await connectDB();

  const warehouses =
    await seedWarehouses();

  let role = await Role.findOne();

if (!role) {
  role = await Role.create({
    name: "Super Admin",
    description: "System Administrator",
  });
}

  const users =
    await seedUsers(
      role._id,
      warehouses[0]._id
    );

  const customers =
    await seedCustomers();

  await seedShipments(
    warehouses,
    customers,
    users
  );

  console.log(
    "Seed completed"
  );

  mongoose.disconnect();
}

run();