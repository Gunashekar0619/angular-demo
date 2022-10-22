import { Component } from "@angular/core";
import {AccountService} from "../account.service";

@Component({
    selector: 'auth-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    constructor(public accountService: AccountService) {
    }

    userName: string = "username";
    password: string = "password";

    onLogin = () => {
        this.accountService.userLogin(this.userName, this.password).subscribe( (data: any) => {
            console.log(data)
        })
    }

}
