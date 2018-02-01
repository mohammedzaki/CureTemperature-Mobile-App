import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";
//import {APIConstants} from "../../helpers/Constants/const-apis";
//import {NotificationService} from "../../serverApi/notification.service";

@Component({
    selector: 'notification-modal',
    templateUrl: 'notification-modal.html'
})
export class NotificationModal {

    //private  notifications:any =[];
    //private  pharmacyId:number;
    
    constructor(
        public viewCtrl: ViewController,
        //private apiConst: APIConstants,
        //private notificationService:NotificationService

    ) {

    }

    getNotifications() {
        /*this.pharmacyId = +localStorage.getItem(this.apiConst.pharmacyId);
        console.log('pharmacyId ',this.pharmacyId);
        this.notificationService.getNotifications(this.pharmacyId).subscribe(res => {
            if (res.success && res.returnObject !== null) {
                console.log('res ',res);
            }
        }, err => {
            console.log('error',err);
        });*/
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }


}