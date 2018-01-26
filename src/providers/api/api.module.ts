import { NgModule } from '@angular/core';
import { LoginApi } from "./index";
import { APIConstants } from "./api-constants";
import { HttpModule } from "@angular/http";
import { UserProfileApi } from "./UserProfileApi";


@NgModule({
    imports: [
        HttpModule
    ],
    providers: [
        APIConstants,
        LoginApi,
        UserProfileApi
    ]
})
export class APIModule { }
