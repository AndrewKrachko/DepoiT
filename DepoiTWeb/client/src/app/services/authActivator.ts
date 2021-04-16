import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
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
        Observable<boolean> {

        return this.dashboard.loginRequred.pipe(
            tap(isAuth => {
                if (!isAuth) {
                    this.router.navigate(["login"]);
                }
            })
        );
    }

}