import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { TempDeviceHomeModule } from "../../components/temp-device-home";

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        TranslateModule.forChild(),
        TempDeviceHomeModule
    ],
    exports: [
        HomePage
    ]
})
export class HomePageModule { }
