import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceHistoryPage } from './device-history';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        DeviceHistoryPage,
    ],
    imports: [
        IonicPageModule.forChild(DeviceHistoryPage),
        TranslateModule.forChild()
    ],
    exports: [
        DeviceHistoryPage
    ]
})
export class DeviceHistoryPageModule { }
