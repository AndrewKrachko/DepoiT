import { AppAddress } from "./AppAddress";
import { AppObject } from "./AppObject";
import { AppGeoCoordinates } from "./AppGeoCoordinates";
import { AppStorage } from "./AppStorage";

export class AppDepot extends AppObject{
    public address: AppAddress;
    public coordinates: AppGeoCoordinates;
    public storages: AppStorage[];
    public isPublic: boolean;
}