import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from 'src/app/maps/maps-routing.module';
import { MapScreenComponent } from 'src/app/maps/screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ButtonLocationComponent } from './components/button-location/button-location.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';


@NgModule({
    declarations: [
        MapScreenComponent,
        MapViewComponent,
        LoadingComponent,
        ButtonLocationComponent,
        AngularLogoComponent,
        SearchBarComponent,
        SearchResultsComponent,
    ],
    imports: [
        CommonModule,
        MapsRoutingModule,
    ]
})
export class MapsModule { }
