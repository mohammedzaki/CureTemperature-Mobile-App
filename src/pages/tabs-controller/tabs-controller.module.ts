import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TabsControllerPage } from './tabs-controller';

@NgModule({
    declarations: [
        TabsControllerPage,
    ],
    imports: [
        IonicPageModule.forChild(TabsControllerPage)
    ],
    exports: [
        TabsControllerPage
    ]
})
export class TabsControllerPageModule { }
