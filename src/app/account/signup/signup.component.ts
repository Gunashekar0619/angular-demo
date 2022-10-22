import { Component } from "@angular/core";
import {AccountService} from "../account.service";
import {ContactModel} from "../../model/contact.model";

@Component({
    selector: 'auth-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent {

    constructor(
        public accountService: AccountService,
    ) {}

    userName: string = "username";
    password: string = "password";
    onSignup = () => {
        this.accountService.createUser(this.userName, this.userName, this.password);
    }

}
