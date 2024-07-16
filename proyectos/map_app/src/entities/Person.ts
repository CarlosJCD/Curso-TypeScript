import GeopgraphicLocation from "../dtos/GeopgraphicLocation";
import { Mappable } from "../interfaces/Mappable";

export default abstract class Person implements Mappable {
    
    constructor(
        protected _name: string,
        protected readonly _location: GeopgraphicLocation
    ) {}

    get name(){
        return this._name
    }

    get location(){
        return this._location;
    }

    get getLocation(){
        return this.location;
    }

    markerTitle(address: () => string): string {
        return `La dirección de ${this.name} es ${address()}`;
    }
}