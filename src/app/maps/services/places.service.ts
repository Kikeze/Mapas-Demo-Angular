import { Injectable } from '@angular/core';

import { PlacesApiClient } from 'src/app/maps/api/placesApiClient';
import { SearchResult, Feature } from 'src/app/maps/interfaces/maps.interfaces';


@Injectable({
    providedIn: 'root'
})
export class PlacesService {

    public userLocation?: [number, number];

    public isLoading: boolean = false;
    public features: Feature[] = [];

    constructor(
        private PlaceApi: PlacesApiClient
    ) {
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

    searchPlaces(query: string) {
        if( !(query && query.length >= 1) ) {
            this.features = [];
            this.isLoading = false;
            return;
        }

        this.isLoading = true;

        this.PlaceApi.proximity = this.userLocation!;
        this.PlaceApi.get<SearchResult>(`/${query}.json`).subscribe({
            next: (v) => {
                this.features = v.features;
                this.isLoading = false;
            }
        });
    }

}
