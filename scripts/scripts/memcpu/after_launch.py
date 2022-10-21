from AndroidRunner.Device import Device


# noinspection PyUnusedLocal
def main(device: Device, *args: tuple, **kwargs: dict):
    device.shell('pm grant com.android.chrome android.permission.WRITE_EXTERNAL_STORAGE')
    device.shell('pm grant com.android.chrome android.permission.READ_EXTERNAL_STORAGE')
    pass
