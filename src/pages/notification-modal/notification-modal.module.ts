import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {NotificationModal} from "./notification-modal";

@NgModule({
    declarations: [
        NotificationModal
    ],
    imports: [
        IonicPageModule.forChild( NotificationModal ),
    ],
    exports: [
        NotificationModal
    ]
})
export class NotificationModalModule {

}
