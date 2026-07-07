import Shipment from "../models/Shipment.js";

import { generateShipmentNumber }
from "../utils/generateShipmentNumber.js";

export async function createShipment(
  req,
  res
) {
  try {
    const shipmentNumber =
      await generateShipmentNumber();

    const shipment =
      await Shipment.create({
        ...req.body,

        shipmentNumber,

        currentStatus: "BOOKED",

        statusHistory: [
          {
            status: "BOOKED",

            warehouse:
              req.body.originWarehouse,

            remarks:
              "Shipment created"
          }
        ]
      });

    res.status(201).json({
      success: true,
      shipment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

export async function getShipments(
  req,
  res
) {
  const shipments =
    await Shipment.find()

      .populate(
        "originWarehouse",
        "name city"
      )

      .populate(
        "destinationWarehouse",
        "name city"
      )

      .populate(
        "senderCustomer",
        "name mobile"
      )

      .populate(
        "receiverCustomer",
        "name mobile"
      )

      .sort({
        createdAt: -1
      });

  res.json(shipments);
}

export async function getShipmentById(
  req,
  res
) {
  const shipment =
    await Shipment.findById(
      req.params.id
    )

      .populate(
        "originWarehouse"
      )

      .populate(
        "destinationWarehouse"
      )

      .populate(
        "currentWarehouse"
      )

      .populate(
        "senderCustomer"
      )

      .populate(
        "receiverCustomer"
      )

      .populate(
        "statusHistory.updatedBy",
        "name"
      )

      .populate(
        "statusHistory.warehouse",
        "name"
      );

  res.json(shipment);
}

export async function updateStatus(
  req,
  res
) {
  const {
    status,
    warehouse,
    remarks
  } = req.body;

  const shipment =
    await Shipment.findById(
      req.params.id
    );

  shipment.currentStatus =
    status;

  shipment.currentWarehouse =
    warehouse;

  shipment.statusHistory.push({
    status,

    warehouse,

    remarks
  });

  await shipment.save();

  res.json({
    success: true,
    shipment
  });
}