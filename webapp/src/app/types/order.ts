import { CartItem } from "./cartItem";

export interface Order{
    _id?: String;
    items:CartItem[];
    paymentType:String;
    address:any;
    date:Date;
    status?:string
}