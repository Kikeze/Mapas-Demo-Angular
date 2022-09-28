import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

import { PlacesService } from 'src/app/maps/services';


@Component({
    selector: 'app-search-bar',
    templateUrl: 'search-bar.component.html',
    styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

    debouncer: Subject<string> = new Subject<string>();

    constructor(
        private PlacesSvc: PlacesService
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        this.debouncer
            .pipe(debounceTime(300))
            .subscribe({
                next: (v) => {
                    this.ejecutaBusqueda(v);
                }
            });
    }

    onChanged(query: string) {
        this.debouncer.next(query);
    }

    ejecutaBusqueda(query: string) {
        this.PlacesSvc.searchPlaces(query);
    }

}
