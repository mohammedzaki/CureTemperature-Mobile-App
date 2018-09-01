import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceHistoryResultPage } from './device-history-result';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        DeviceHistoryResultPage,
    ],
    imports: [
        IonicPageModule.forChild(DeviceHistoryResultPage),
        TranslateModule.forChild()
    ],
    exports: [
        DeviceHistoryResultPage
    ]
})
export class DeviceHistoryResultPageModule { }
