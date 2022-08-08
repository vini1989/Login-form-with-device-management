export enum DeviceHealth {
  good = "good",
  ok = "ok",
  mediocre = "mediocre",
  broken = "broken",
  bad = "bad",
}

export enum DeviceType {
  centrifuge = "centrifuge",
  freezer = "freezer",
  cycler = "cycler",
  shaker = "shaker",
  pipette = "pipette",
}

export interface Device {
  id: number;
  location: string;
  type: DeviceType;
  device_health: DeviceHealth;
  last_used: string;
  price: string;
  color: string;
}
