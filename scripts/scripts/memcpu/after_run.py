from AndroidRunner.Device import Device


# noinspection PyUnusedLocal
def main(device: Device, *args: tuple, **kwargs: dict):
    device.shell('input tap 670 340')  # Prevent the device from sleeping
    pass
