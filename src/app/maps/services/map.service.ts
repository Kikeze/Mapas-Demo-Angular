import { Injectable } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';


@Injectable({
    providedIn: 'root'
})
export class MapService {

    private map?: Mapboxgl.Map;

    constructor() {
        // Do nothing
    }

    public isMapReady(): boolean {
        return !!this.map;
    }

    public setMap(map: Mapboxgl.Map) {
        this.map = map;
    }

    public flyTo(coords: Mapboxgl.LngLatLike) {
        if(this.isMapReady()) {
            this.map!.flyTo({
                center: coords,
                zoom: 16
            });
        }
    }

}
