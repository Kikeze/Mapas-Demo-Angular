import { Component, OnInit } from '@angular/core';

import { PlacesService } from 'src/app/maps/services';


@Component({
    selector: 'app-map-screen',
    templateUrl: 'map-screen.component.html',
    styleUrls: ['map-screen.component.css']
})
export class MapScreenComponent implements OnInit {

    constructor(
        private PlacesSvc: PlacesService
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    isLocationReady(): boolean {
        return this.PlacesSvc.isLocationReady();
    }

}
