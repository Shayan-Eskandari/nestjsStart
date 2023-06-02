import {valueOf} from "config";

function password(target:any,key:string){
    let value = target[key];
const getter=()=>{return value}
const setter=(password:String)=>{
    if (password.length<8){
        throw new Error("Invalid password")
    }
   else value=password
}
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        configurable: true,
        enumerable: true,
    });
}
class user{
    @password
    password:string;
    constructor(pass:string) {
    this.password=pass
    }
}
const ali= new user("0926950088")
console.log(ali.password)