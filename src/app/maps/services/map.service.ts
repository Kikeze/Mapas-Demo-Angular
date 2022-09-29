import { Injectable } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';

import { Feature } from 'src/app/maps/interfaces/maps.interfaces';
import { DirectionsApiClient } from 'src/app/maps/api/directionsApiClient';
import { DirectionsResponse, Route } from 'src/app/maps/interfaces/directions.interface';


@Injectable({
    providedIn: 'root'
})
export class MapService {

    private map?: Mapboxgl.Map;
    private markers: Mapboxgl.Marker[] = [];

    constructor(
        private dirApi: DirectionsApiClient
    ) {
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

    public createMarkers(places: Feature[], location: [number, number]) {
        if( this.markers.length >= 0 ) {
            this.markers.forEach((m) => {
                m.remove();
            });
            this.markers = [];
        }

        for(const place of places) {
            const [lng, lat] = place.center;

            const popup = new Mapboxgl.Popup()
                .setHTML(`
                    <h6>${place.text_es}</h6>
                    <span>${place.place_name_es}</span>
                `);

            const marker = new Mapboxgl.Marker()
                .setLngLat([lng, lat])
                .setPopup( popup )
                .addTo( this.map! );

            this.markers.push(marker);
        }

        if( places.length <= 0 ) {
            return;
        }

        const bounds = new Mapboxgl.LngLatBounds();
        bounds.extend( location );
        this.markers.forEach((m) => {
            bounds.extend(m.getLngLat());
        });

        this.map!.fitBounds(bounds, {
            padding: 200
        });
    }

    getRoute(start: [number, number], finish: [number, number]) {
        this.dirApi.get<DirectionsResponse>(`/${start.join(",")};${finish.join(",")}`)
            .subscribe({
                next: (v) => {
                    this.drawPolyline(v.routes[0]);
                }
            });
    }

    drawPolyline(route: Route) {
        console.log({kms: route.distance / 1000, duration: route.duration / 60});

        const coords = route.geometry.coordinates;
        const bounds = new Mapboxgl.LngLatBounds();

        coords.forEach(([lng, lat]) => {
            bounds.extend([lng, lat]);
        });

        this.map!.fitBounds(bounds, {
            padding: 200
        });

        // Polyline
        const source: Mapboxgl.AnySourceData = {
            type: "geojson",
            data: {
                type: "FeatureCollection",
                features: [
                    {
                        type: "Feature",
                        properties: {},
                        geometry: {
                            type: "LineString",
                            coordinates: coords
                        }
                    }
                ]
            }
        };

        if( this.map!.getLayer("RouteString") ) {
            this.map!.removeLayer("RouteString");
            this.map!.removeSource("RouteString");
        }

        this.map!.addSource("RouteString", source);

        this.map!.addLayer({
            id: "RouteString",
            type: "line",
            source: "RouteString",
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": "black",
                "line-width": 3
            }
        });
    }

}
