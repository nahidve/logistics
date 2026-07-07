import bcrypt from "bcryptjs";

import User from "../models/User.js";

export async function seedUsers(
  roleId,
  warehouseId
) {
  await User.deleteMany({});

  const password =
    await bcrypt.hash(
      "password123",
      10
    );

  const users = [];

  for (let i = 0; i < 23; i++) {
    users.push({
      name: `Operator ${i + 1}`,

      email: `user${
        i + 1
      }@libya.com`,

      password,

      role: roleId,

      warehouse: warehouseId,

      status: "ACTIVE",
    });
  }

  return User.insertMany(users);
}