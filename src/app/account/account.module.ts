import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {SignupComponent} from "./signup/signup.component";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
    declarations: [LoginComponent, SignupComponent],
    imports: [
        FormsModule,
        AppRoutingModule
    ]
})

export class AccountModule {}
