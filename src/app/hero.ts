import { Address } from "./address";

export interface Hero{
    id:number;
    name?:string;
    power?:string;
    addresses?:Address[];
}