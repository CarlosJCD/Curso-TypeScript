import {faker} from "@faker-js/faker"

import Person from "./Person";
import GeopgraphicLocation from "../dtos/GeopgraphicLocation";


export class Passenger extends Person {
    constructor(){
        const passengerName = faker.person.firstName();
        const passengerLocation = new GeopgraphicLocation(faker.location.latitude(), faker.location.longitude())

        super(passengerName, passengerLocation)
    }

}