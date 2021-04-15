import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import Dashboard from "./dashboard.service";

@Injectable()
export class AuthActivator implements CanActivate {

    constructor(
        private dashboard: Dashboard,
        private router: Router) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        boolean {

        if (this.dashboard.loginRequred) {
            this.router.navigate(["login"]);
            return false;
        } else {
            return true;
        }
    }

}