# noinspection PyUnusedLocal,PyUnusedLocal
def main(device, *args, **kwargs):
   # Enable for Web Experiments using Chrome
    # Enable permissions for Chrome
    #  device.shell('pm grant com.android.chrome android.permission.RECORD_AUDIO')
    # device.shell('pm grant com.android.chrome android.permission.CAMERA')
    device.shell('pm grant com.android.chrome android.permission.WRITE_EXTERNAL_STORAGE')
    device.shell('pm grant com.android.chrome android.permission.READ_EXTERNAL_STORAGE')
    
    pass
