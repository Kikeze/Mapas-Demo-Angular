import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';

import { PlacesService } from 'src/app/maps/services';


@Component({
    selector: 'app-map-view',
    templateUrl: 'map-view.component.html',
    styleUrls: ['map-view.component.css']
})
export class MapViewComponent implements OnInit, AfterViewInit {

    @ViewChild("mainMapDiv") mainMapDiv!: ElementRef<HTMLElement>;
    mainMap!: Mapboxgl.Map;

    constructor(
        private PlacesSvc: PlacesService
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    ngAfterViewInit(): void {
        this.mainMap = new Mapboxgl.Map({
            container: this.mainMapDiv.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: this.PlacesSvc.userLocation,
            zoom: 16
        });
    }

}
