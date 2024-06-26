import MapGeocoder from "./MapGeocoder";
import { Mappable } from "../interfaces/Mappable";
import { SearchOptions } from "../interfaces/SearchOptions";

export class Mapping {
    private googleMap: google.maps.Map;
    private geocoder: MapGeocoder; 
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
        zoom: 1,
        center: {
            lat: 0,
            lng: 0,
        },
        });

        this.geocoder = new MapGeocoder(this.googleMap); 

    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: { ...mappable.getLocation },
        });

        this.geocoder.addMarkerInfo(marker, mappable);
    }

    searchText(options: SearchOptions): void{
        this.geocoder.searchText(options); 
    }
}