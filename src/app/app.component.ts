import { Component, OnInit } from '@angular/core';

import * as Mapboxgl from 'mapbox-gl';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Mapas Demo';

    ngOnInit(): void {
        (Mapboxgl as any).accessToken = "pk.eyJ1Ijoia2lrZXplIiwiYSI6ImNrZ2h5MHl2MDBhdW8yeG8zN2ZxOG9za2MifQ.n-etXFEPq61dTmAY0IIoLw";
    }

}

