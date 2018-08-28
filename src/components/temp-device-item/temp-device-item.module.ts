import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempDeviceItemComponent } from "./temp-device-item";
import { IonicModule } from "ionic-angular";
import { DeviceGaugeModule } from '../shared/device-gauge';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        TempDeviceItemComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        DeviceGaugeModule,
        TranslateModule.forChild(),
    ],
    exports: [
        TempDeviceItemComponent
    ]
})
export class TempDeviceItemModule { }
