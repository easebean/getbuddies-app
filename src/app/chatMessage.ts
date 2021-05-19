import { Room } from "./Room";

export interface ChatMessage{
    id:Number;
    text:string;
    author:string;
    createDate:Date;
    room:Room;
}