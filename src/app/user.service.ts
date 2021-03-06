import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Room } from "./room";
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

    public find(userId:number):Observable<User>{
        return this.http.get<User>(`${this.apiUrl}/user/${userId}`)
    }

    public update(user:User):Observable<User>{
        return this.http.put<User>(`${this.apiUrl}/user/update`,user)
    }

    public rooms(userId:number):Observable<Room>{
        return this.http.get<Room>(`${this.apiUrl}/user/room/${userId}/`)
    }

    public allUsers():Observable<User>{
        return this.http.get<User>(`${this.apiUrl}/user/all`)
    }

    public delete(userId:number):Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/user/delete/${userId}`)
    }

}