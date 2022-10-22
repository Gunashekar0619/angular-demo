import {Component, OnInit} from "@angular/core";
import {AccountService} from "../account/account.service";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

    userIsAuthenticated = false;
    constructor( private authservice: AccountService) {
    }
    ngOnInit() {
        this.authservice
            .getAuthStatusListener()
            .subscribe(isAuthenticated => {
                this.userIsAuthenticated = isAuthenticated;
            });
    }
}
