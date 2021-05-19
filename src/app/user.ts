import { Room } from "./Room";

export interface User{
    id:number;
	name:string;
	userName:string;
	password:string;
	email:string;
	phoneNumber:string;
	city:string;
	rooms:Room[];
}