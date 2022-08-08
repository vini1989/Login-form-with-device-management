import { Router } from "express";
import {
  createDevice,
  deleteDevice,
  getAllDevices,
  getDevice,
  updateDevice,
} from "../controllers/device.controller";

function deviceRoute() {
  const router = Router();

  router.post("/devices", async (req, res) => {
    const { location, type, device_health, last_used, price, color } = req.body;
    const deviceCreated = await createDevice(
      location,
      type,
      device_health,
      last_used,
      price,
      color
    );
    return deviceCreated
      ? res.status(200).send(deviceCreated)
      : res.status(500).send("Unable to create device");
  });

  router.get("/devices", async (req, res) => {
    const devices = await getAllDevices();
    return res.status(200).send(devices);
  });

  router.get("/devices/:id", async (req, res) => {
    const { id } = req.params;
    const device = await getDevice(parseInt(id));
    return device
      ? res.status(200).send(device)
      : res.status(404).send(`Device with id ${id} not found.`);
  });

  router.patch("/devices/:id", async (req, res) => {
    const { id } = req.params;
    const { location, type, device_health, last_used, price, color } = req.body;
    const deviceUpdated = await updateDevice(
      parseInt(id),
      location,
      type,
      device_health,
      last_used,
      price,
      color
    );
    console.debug(deviceUpdated);
    return deviceUpdated
      ? res.status(200).send(deviceUpdated)
      : res
          .status(500)
          .send(`Unable to update device. Device with id ${id} not found.`);
  });

  router.delete("/devices/:id", async (req, res) => {
    const { id } = req.params;
    const result = await deleteDevice(parseInt(id));
    return result
      ? res.status(200).send("Device deleted succesfully")
      : res
          .status(500)
          .send(`Unable to delete device. Device with id ${id} not found.`);
  });

  return router;
}

export { deviceRoute };
