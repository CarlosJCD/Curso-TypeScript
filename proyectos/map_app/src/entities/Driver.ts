import {faker} from "@faker-js/faker"

import Person from "./Person";
import GeopgraphicLocation from "../dtos/GeopgraphicLocation";

export default class Driver extends Person {

    constructor(){
        const driverName = faker.person.firstName();
        const driverLocation = new GeopgraphicLocation(faker.location.latitude(), faker.location.longitude())

        super(driverName, driverLocation)
    }

}