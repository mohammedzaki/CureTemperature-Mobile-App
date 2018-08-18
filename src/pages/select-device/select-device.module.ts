import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectDevicePage } from './select-device';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    SelectDevicePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectDevicePage),
    SelectSearchableModule
  ],
})
export class SelectDevicePageModule {}
