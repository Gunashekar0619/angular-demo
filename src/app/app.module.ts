import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenuComponent} from "./menu/menu.component";
import {AccountModule} from "./account/account.module";
import {CommonModule} from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent        ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        AccountModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [

    ]
})
export class AppModule { }
