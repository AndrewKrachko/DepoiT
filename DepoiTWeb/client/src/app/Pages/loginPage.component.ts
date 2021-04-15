import { error } from "@angular/compiler/src/util";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import Dashboard from "../services/dashboard.service";
import { LoginRequest } from "../shared/LoginResults";

@Component({
    selector: "login-page",
    templateUrl: "loginPage.component.html"
})
export class LoginPage {
    constructor(
        private dashboard: Dashboard,
        private router: Router) {

    }

    public creds: LoginRequest = {
        name: "",
        password: "",
    };

    public errorMessage = "";

    onLogin() {
        this.dashboard.login(this.creds).subscribe(() => {
            this.router.navigate([""])
        }, error => {
            console.log(error);
            this.errorMessage = "Failed to login";
        });
    }
}