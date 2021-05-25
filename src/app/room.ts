import { ChatsComponent } from "./chats/chats.component";
import { User } from "./user";

export interface Room{
    id:number;
    name:string;
    category:string;
    createdBy:string;
    created:Date;
    endTime:Date;
    details:string;
    users:User[];
    chat:ChatsComponent[];
}