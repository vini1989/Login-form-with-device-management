import { WrappedComponentProps } from "react-intl";
import { Device } from "../../api/devices/devices.definitions";

export interface DeviceListItemProps extends WrappedComponentProps {
  device: Device;
  removeDevice(deviceId: number): Promise<void>;
}
