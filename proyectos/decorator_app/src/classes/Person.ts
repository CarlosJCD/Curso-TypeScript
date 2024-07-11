import { addValidation } from "../decorators/validator.js";

export default class Person {
    @addValidation(["required"])
    private _email: string;
    
    @addValidation(["required","password"])
    private _password: string;

    constructor( email: string, password: string) {
        this._email = email
        this._password = password
    }

    get email(){
        return this._email
    }
    
    get password(){
        return this._password
    }
     
}