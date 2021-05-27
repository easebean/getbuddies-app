import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Room } from "./room";

@Injectable({
    providedIn: 'root'
})
export class RoomService{
    private apiServerUrl=environment.apiBaseUrl;
    constructor(private http:HttpClient){}
    
    public createRoom(room:Room,userId:number):Observable<Room>{
        return this.http.post<Room>(`${this.apiServerUrl}/room/create/${userId}`,room)
    }

    public update(room:Room):Observable<Room>{
        return this.http.put<Room>(`${this.apiServerUrl}/room/update`,room)
    }

    public addUser(room:Room,userName:string):Observable<Room>{
        return this.http.put<Room>(`${this.apiServerUrl}/room/add/${userName}`,room)
    }

    public removeUser(room:Room,userId:number):Observable<Room>{
        return this.http.put<Room>(`${this.apiServerUrl}/room/remove/${userId}`,room)
    }

    public findByName(name:string):Observable<Room>{
        return this.http.get<Room>(`${this.apiServerUrl}/room/find/${name}`)
    }

    public delete(roomId:number):Observable<Room>{
        return this.http.delete<Room>(`${this.apiServerUrl}/room/delete/${roomId}`)
    }

    public allRooms():Observable<Room[]>{
        return this.http.get<Room[]>(`${this.apiServerUrl}/room/all`)
    }
    public getRoom(roomId:number):Observable<Room>{
        return this.http.get<Room>(`${this.apiServerUrl}/room/${roomId}`)
    }
}