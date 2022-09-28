import { Component, OnInit } from '@angular/core';

import { PlacesService, MapService } from 'src/app/maps/services';
import { Feature } from 'src/app/maps/interfaces/maps.interfaces';


@Component({
    selector: 'app-search-results',
    templateUrl: 'search-results.component.html',
    styleUrls: ['search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

    public selectedId: string = "";

    constructor(
        private PlacesSvc: PlacesService,
        private MapSvc: MapService
    ) {
        // Do nothing
    }

    get isLoading(): boolean {
        return this.PlacesSvc.isLoading;
    }

    get places(): Feature[] {
        return this.PlacesSvc.features;
    }

    ngOnInit(): void {
        // Do nothing
    }

    flyTo(place: Feature) {
        this.selectedId = place.id;
        const [lng, lat] = place.center;
        this.MapSvc.flyTo([lng, lat]);
    }

}

