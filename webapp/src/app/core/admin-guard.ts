import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";

export const adminGaurd:CanActivateFn=(route, state) =>{
    const authService=inject(AuthService);
    const router=inject(Router);
    if (authService.isLoggedIn){
        if (authService.isAdmin){
            return true;
        }else{
            router.navigateByUrl('/');
            return false;
        }
    }else{
        router.navigateByUrl('/login');
        return false;
    }
}