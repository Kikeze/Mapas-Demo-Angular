import { Injectable } from "@angular/core";
import { HttpHandler, HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: "root"
})
export class PlacesApiClient extends HttpClient {

    public apiUrl: string = "https://api.mapbox.com/geocoding/v5/mapbox.places";
    public proximity: [number, number] = [0,0];

    constructor(
        handler: HttpHandler
    ) {
        super(handler);
    }

    public override get<T>(url: string) {
        const getUrl = this.apiUrl + url;
        const params = new HttpParams()
            .set("proximity", this.proximity.toString())
            .set("country", "mx")
            .set("types", "place,poi")
            .set("language", "es")
            .set("limit", "5")
            .set("access_token", environment.apiKey);

        return super.get<T>(getUrl, {params});
    }

}
