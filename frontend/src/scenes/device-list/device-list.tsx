import * as React from "react";
import { FunctionComponentElement } from "react";
import { injectIntl, WrappedComponentProps } from "react-intl";
import {
  Device,
  DeviceHealth,
  DeviceType,
} from "../../api/devices/devices.definitions";
import DeviceService from "../../api/devices/devices-service";
import styles from "./device-list.module.scss";
import DeviceListItem from "../../containers/device-list-item/device-list-item";
import ButtonWithIcon from "../../components/button-with-icon/button-with-icon";
import { v4 as uuidv4 } from "uuid";

function DeviceList({
  intl,
}: WrappedComponentProps): FunctionComponentElement<void> {
  const [devices, setDevices] = React.useState<Device[]>([]);
  const [error, setError] = React.useState<Error>();
  const [loading, setLoading] = React.useState<boolean>(true);

  async function getAllDevices(): Promise<void> {
    DeviceService.getAll()
      .then((response: any) => {
        setLoading(true);
        setDevices(response.data);
      })
      .catch((err: Error) => {
        setLoading(true);
        setError(err);
      })
      .finally(() => setLoading(false));
  }

  async function addDevice(): Promise<any> {
    const newDevice: Device = {
      id: +uuidv4(),
      device_health: DeviceHealth.good,
      type: DeviceType.freezer,
      color: "white",
      location: "Duesseldorf",
      price: "50.00",
      last_used: "08.08.2022",
    };

    DeviceService.create(newDevice)
      .then((response: any) => {
        getAllDevices();
      })
      .catch((err: Error) => {
        console.error(err);
        setError(err);
      });
  }

  async function deleteDevice(deviceId: number): Promise<void> {
    DeviceService.remove(deviceId)
      .then((response: any) => {
        if (response.status === 200) {
          getAllDevices();
        }
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }

  React.useEffect(() => {
    getAllDevices();
  }, []);

  if (error) {
    return <div>{error.message || "Unknown Error"}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <ButtonWithIcon
          iconName="add"
          className={styles.button}
          onClick={addDevice}
        />
        {devices.map((device) => (
          <DeviceListItem
            key={device.id}
            device={device}
            removeDevice={deleteDevice}
          />
        ))}
      </div>
    </div>
  );
}

export default injectIntl(DeviceList);
