import { ne } from "@faker-js/faker";
import Driver  from "./entities/Driver";
import { Mapping } from "./entities/Mapa";
import { Passenger } from "./entities/Passenger";
import { MyHome } from "./entities/MyHome";


const googleMap = new Mapping('map');
const passenger = new Passenger();
const driver = new Driver();
const myHome = new MyHome(passenger);

googleMap.addMarker(passenger);
googleMap.addMarker(driver);
googleMap.addMarker(myHome);

googleMap.searchText(
    {
        input: <HTMLInputElement>document.getElementById('address')!,
        searchButton: <HTMLButtonElement>document.getElementById('searchButton')!,
    }
)