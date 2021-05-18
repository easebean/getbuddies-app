import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { ChatMessage } from "./ChatMessage";

@Injectable({
    providedIn:'root'
})

export class ChatMessageService{
    private apiServerUrl=environment.apiBaseUrl;
    constructor(private http: HttpClient){}

    public getChats(roomId:Number):Observable<ChatMessage>{
        return this.http.get<ChatMessage>(`${this.apiServerUrl}/all/${roomId}`)
    }
}