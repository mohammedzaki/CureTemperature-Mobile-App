import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectDevicePage } from './select-device';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        SelectDevicePage,
    ],
    imports: [
        IonicPageModule.forChild(SelectDevicePage),
        SelectSearchableModule,
        TranslateModule.forChild(),
    ],
    exports: [
        SelectDevicePage
    ]
})
export class SelectDevicePageModule { }
