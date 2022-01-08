import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./shared/login.service";

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router, private loginService: LoginService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let loggedIn : boolean | undefined = this.loginService.isLoggedIn();
        if (!loggedIn) {
            console.log("gotologin");
            this.router.navigate(['login']);
            return false;
        } else {
            console.log("gotoshots");
            return true;
        }
    }
}