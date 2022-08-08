import fetch from "../base-service";
import { Device } from "./devices.definitions";

const getAll = () => {
  return fetch.get<Array<Device>>("/devices");
};
const get = (id: any) => {
  return fetch.get<Device>(`/devices/${id}`);
};
const create = (data: Device) => {
  return fetch.post<Device>("/devices", data);
};
const update = (id: number, data: Device) => {
  return fetch.patch<Device>(`/devices/${id}`, data);
};
const remove = (id: any) => {
  return fetch.delete<any>(`/devices/${id}`);
};
const removeAll = () => {
  return fetch.delete<any>(`/devices`);
};

const DeviceService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};
export default DeviceService;
