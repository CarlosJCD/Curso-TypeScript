import GeopgraphicLocation from "../dtos/GeopgraphicLocation";

export interface Mappable {
    getLocation: GeopgraphicLocation;

    markerTitle(address: () => string) : string;
}