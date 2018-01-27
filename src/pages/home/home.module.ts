import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';
import { GaugeModule } from "../../components/gauge";

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        TranslateModule.forChild(),
        GaugeModule
    ],
    entryComponents: [
        HomePage
    ],
    exports: [
        HomePage
    ]
})
export class HomePageModule { }
