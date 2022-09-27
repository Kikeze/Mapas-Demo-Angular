import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class PlacesService {

    public userLocation?: [number, number];

    constructor() {
        this.getUserLocation();
    }

    public isLocationReady(): boolean {
        return !!this.userLocation;
    }

    public async getUserLocation(): Promise<[number, number]> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    this.userLocation = [pos.coords.longitude, pos.coords.latitude];
                    resolve(this.userLocation);
                },
                (err) => {
                    console.log(err);
                    reject();
                }
            )
        });
    }

}
