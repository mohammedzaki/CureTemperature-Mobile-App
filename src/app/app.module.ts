import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { PagesModule } from "../pages/pages.module";
import { ComponentsModule } from "../components/components.module";
import { ProvidersModule } from "../providers/providers.module";
import { Firebase } from "@ionic-native/firebase";

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ProvidersModule,

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [ HttpClient ]
            }
        }),
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        PagesModule,
        ComponentsModule
    ],
    bootstrap: [ IonicApp ],
    entryComponents: [
        MyApp
    ],
    providers: [
        Camera,
        SplashScreen,
        StatusBar,
        Firebase,
        // Keep this to enable Ionic's runtime error handling during development
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
