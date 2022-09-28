import { Component, OnInit } from '@angular/core';

import { PlacesService, MapService } from 'src/app/maps/services';


@Component({
    selector: 'app-button-location',
    templateUrl: 'button-location.component.html',
    styleUrls: ['button-location.component.css']
})
export class ButtonLocationComponent implements OnInit {

    constructor(
        private PlacesSvc: PlacesService,
        private MapSvc: MapService
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    ubicacion() {
        this.MapSvc.flyTo(this.PlacesSvc.userLocation!);
    }

}
