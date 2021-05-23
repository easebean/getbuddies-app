import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "./user";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    private apiUrl = environment.apiBaseUrl;
    
    constructor(private http:HttpClient){}
    
    public create(user:User):Observable<User>{
        return this.http.post<User>(`${this.apiUrl}/user/add`,user)
    }
    public login(userName:string,password:string):Observable<User>{
        return this.http.get<User>(`${this.apiUrl}/user/login/${userName}/${password}`)
    }
}