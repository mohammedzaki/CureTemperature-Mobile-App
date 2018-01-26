import {NgModule} from '@angular/core';
import {Settings, APIModule, AppNotification} from "./index";
import {IonicStorageModule, Storage} from '@ionic/storage';

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  imports: [
    APIModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    AppNotification,
    {provide: Settings, useFactory: provideSettings, deps: [Storage]},
  ]
})
export class ProvidersModule {}
