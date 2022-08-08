import React, { FunctionComponentElement } from "react";
import { injectIntl } from "react-intl";
import DeviceService from "../../api/devices/devices-service";
import { Device } from "../../api/devices/devices.definitions";
import BasicTile from "../../components/basic-tile/basic-tile";
import ButtonWithIcon from "../../components/button-with-icon/button-with-icon";
import { DeviceListItemProps } from "./device-list-item.definitions";
import messages from "./device-list-item.intl";
import styles from "./device-list-item.module.scss";

function DeviceListItem({
  device,
  removeDevice,
  intl,
}: DeviceListItemProps): FunctionComponentElement<DeviceListItemProps> {
  const [internalDevice, setInternalDevice] = React.useState<Device>(device);

  function remove(): void {
    removeDevice(internalDevice.id);
  }

  async function updateDevice(): Promise<any> {
    const updateDevice: Device = {
      ...device,
      location: "Duesseldorf",
      price: "50.00",
    };
    DeviceService.update(updateDevice.id, updateDevice)
      .then((response: any) => {
        if (response.status === 200) {
          console.log(response.data);
          setInternalDevice(response.data);
        }
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }

  return (
    <div className={styles.item}>
      <BasicTile
        key={internalDevice.id}
        className={styles.basicTile}
        leftSlot={
          <div className={styles.health}>{internalDevice.device_health}</div>
        }
        middleSlot={
          <>
            <div className={styles.details}>
              {intl.formatMessage(messages.id)}: {internalDevice.id}
            </div>
            <div className={styles.details}>{internalDevice.location}</div>
            <div className={styles.details}>
              {internalDevice.price} {intl.formatMessage(messages.euro)}
            </div>
            <div className={styles.details}>
              {" "}
              {intl.formatMessage(messages.lastUsed)}:{" "}
              {internalDevice.last_used}
            </div>
          </>
        }
        rightSlot={<span>{internalDevice.type}</span>}
      ></BasicTile>
      <ButtonWithIcon
        iconName="edit"
        className={styles.button}
        onClick={updateDevice}
      />
      <ButtonWithIcon
        iconName="delete"
        className={styles.button}
        onClick={remove}
      />
    </div>
  );
}

export default injectIntl(DeviceListItem);
