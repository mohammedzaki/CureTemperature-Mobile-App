import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevicesPage } from './devices';
import { TempDeviceItemModule } from "../../components/temp-device-item";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        DevicesPage,
    ],
    imports: [
        IonicPageModule.forChild(DevicesPage),
        TempDeviceItemModule,
        TranslateModule.forChild()
    ],
    exports: [
        DevicesPage
    ]
})
export class DevicesPageModule { }
