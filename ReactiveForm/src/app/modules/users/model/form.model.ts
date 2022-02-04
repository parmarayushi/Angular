import { Data } from "@angular/router";

export interface Department{
    id:number;
    name:string;
}

export interface User{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    gender:number;
    date:Date;
    department:number;
}