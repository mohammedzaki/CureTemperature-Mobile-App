import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        TranslateModule.forChild()
    ],
    entryComponents: [
        HomePage
    ],
    exports: [
        HomePage
    ]
})
export class HomePageModule { }
