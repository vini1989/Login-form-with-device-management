import { default as devices } from "../data/data.json";
import { Device } from "../model/device.model";
import fs from "fs";

export async function getAllDevices(): Promise<Device[]> {
  return devices;
}

export async function getDevice(id: number): Promise<Device | undefined> {
  const device = devices.find((d) => d.id === id);
  return device;
}

export async function createDevice(
  location: string,
  type: string,
  device_health: string,
  last_used: string,
  price: string,
  color: string
): Promise<Device | undefined> {
  const newId = devices[devices.length - 1].id + 1;
  const newDevice: Device = {
    id: newId,
    location,
    type,
    device_health,
    last_used,
    price,
    color,
  };
  devices.push(newDevice);
  fs.writeFile("src/data/data.json", JSON.stringify(devices), (err) => {
    if (err) throw err;
    console.log("Device added to file successfully");
  });
  return devices.find((d) => d.id === newId);
}

export async function updateDevice(
  id: number,
  location: string,
  type: string,
  device_health: string,
  last_used: string,
  price: string,
  color: string
): Promise<Device | undefined> {
  const deviceToBeUpdated = devices.find((d) => d.id === id);
  if (!deviceToBeUpdated) return undefined;
  const deviceToBeUpdatedIndex = devices.indexOf(deviceToBeUpdated);
  devices[deviceToBeUpdatedIndex] = {
    id,
    location,
    type,
    device_health,
    last_used,
    price,
    color,
  };
  fs.writeFile("src/data/data.json", JSON.stringify(devices), (err) => {
    if (err) throw err;
    console.log("Device updated to file successfully");
  });
  return devices[deviceToBeUpdatedIndex];
}

export async function deleteDevice(id: number): Promise<boolean> {
  const deviceToBeDeleted = devices.find((d) => d.id === id);
  if (!deviceToBeDeleted) return false;
  const deviceToBeDeletedIndex = devices.indexOf(deviceToBeDeleted);
  devices.splice(deviceToBeDeletedIndex, 1);
  return true;
}
