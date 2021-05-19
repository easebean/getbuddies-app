import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export class Auth {
    authenticated: boolean = true
    public isAuth(): boolean {
        return this.authenticated
    }
}