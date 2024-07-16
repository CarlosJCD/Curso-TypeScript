import GeopgraphicLocation from "../dtos/GeopgraphicLocation";
import { Mappable } from "../interfaces/Mappable";
import { Passenger } from "./Passenger";

export class MyHome implements Mappable{
    private _location : GeopgraphicLocation

    constructor(passenger : Passenger){
        this._location = {
            lat: passenger.location.lat + 0.0002,
            lng: passenger.location.lng + 0.0001
        }
    }

    get getLocation(){
        return this._location;
    }

    markerTitle(address: () => string): string {
        return `La dirección de mi casa es ${address()}`;
    }
}