import { Injectable } from "@angular/core";
import { ContactModel } from "../model/contact.model"
import {environment} from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";
import {map, Subject} from "rxjs";

const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn : 'root'})
export class AccountService {
    private isAuthenticated = false;
    private userToken: String | undefined;
    private userData: ContactModel | undefined;
    constructor(private http: HttpClient, private router: Router) {}
    private authStatusListener = new Subject<boolean>();

    getIsAuth() {
        return this.isAuthenticated;
    }

    getUserToken() {
        return this.userToken;
    }

    getUserData() {
        return this.userData;
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    createUser(name: String, email: String, password: String) {
        this.http.post(
            BACKEND_URL + "/users",
            { "name" : name,
                    "email": email,
                    "password": password
            }).subscribe( data => {
            this.router.navigate(["/login"]);
        })
    }

    userLogin(email: String, password: String) {
        const authData = {email: email, password: password};
        const userLogin = this.http.post<{
            user: ContactModel,
            token: String
        }>(BACKEND_URL + "/users/login", authData );
        userLogin.pipe().subscribe(data => {
            this.userToken = data.token;
            this.userData = data.user;
            this.authStatusListener.next(true);
            this.router.navigate(["/dashboard"])
        }, error => {
            this.authStatusListener.next(false);
        })
        return userLogin;
    }
}
