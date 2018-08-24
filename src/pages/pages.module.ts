import { NgModule } from '@angular/core';

import { HomePageModule } from "./home/home.module";
import { DevicesPageModule } from "./devices/devices.module";
import { DeviceHistoryPageModule } from "./device-history/device-history.module";
import { LoadingPageModule } from "./loading/loading.module";
import { AboutPageModule } from "./about/about.module";
import { LoginPageModule } from "./login/login.module";
import { TabsControllerPageModule } from "./tabs-controller/tabs-controller.module";
import { NotificationModalModule } from "./notification-modal/notification-modal.module";
import { SelectDevicePageModule } from "./select-device/select-device.module";
import { SettingsPageModule } from './settings/settings.module';

@NgModule({
    imports: [
        LoadingPageModule,
        HomePageModule,
        DevicesPageModule,
        DeviceHistoryPageModule,
        AboutPageModule,
        LoginPageModule,
        TabsControllerPageModule,
        NotificationModalModule,
        SelectDevicePageModule,
        SettingsPageModule
    ]
})
export class PagesModule { }
