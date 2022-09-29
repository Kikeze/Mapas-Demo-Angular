import { Injectable } from "@angular/core";
import { HttpHandler, HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: "root"
})
export class DirectionsApiClient extends HttpClient {

    public apiUrl: string = "https://api.mapbox.com/directions/v5/mapbox/driving";

    constructor(
        handler: HttpHandler
    ) {
        super(handler);
    }

    public override get<T>(url: string) {
        const getUrl = this.apiUrl + url;
        const params = new HttpParams()
            .set("alternatives", true)
            .set("geometries", "geojson")
            .set("language", "es")
            .set("overview", "simplified")
            .set("steps", true)
            .set("access_token", environment.apiKey);

        return super.get<T>(getUrl, {params});
    }

}
