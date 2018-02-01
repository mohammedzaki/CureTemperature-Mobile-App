import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';
import { UserAPIService } from './services/userAPI.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [],
    exports: [],
    providers: [
        UserAPIService
    ]
})
export class APIModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: APIModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory }]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: APIModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
