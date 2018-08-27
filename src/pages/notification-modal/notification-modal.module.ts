import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationModal } from "./notification-modal";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        NotificationModal
    ],
    imports: [
        IonicPageModule.forChild(NotificationModal),
        TranslateModule.forChild(),
    ],
    exports: [
        NotificationModal
    ]
})
export class NotificationModalModule {

}
