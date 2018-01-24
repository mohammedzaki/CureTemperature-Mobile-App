import { NgModule } from '@angular/core';

import { HomePageModule } from "./home/home.module";
import { DevicesPageModule } from "./devices/devices.module";
import { DeviceHistoryPageModule } from "./device-history/device-history.module";
import { LoadingPageModule } from "./loading/loading.module";
import { AboutPageModule } from "./about/about.module";
import { LoginPageModule } from "./login/login.module";
import { TabsControllerPageModule } from "./tabs-controller/tabs-controller.module";
import { NotificationModalModule } from "./notification-modal/notification-modal.module";

@NgModule({
    imports: [
        LoadingPageModule,
        HomePageModule,
        DevicesPageModule,
        DeviceHistoryPageModule,
        AboutPageModule,
        LoginPageModule,
        TabsControllerPageModule,
        NotificationModalModule
    ]
})
export class PagesModule { }
