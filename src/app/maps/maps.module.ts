import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from 'src/app/maps/maps-routing.module';
import { MapScreenComponent } from 'src/app/maps/screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
    declarations: [
        MapScreenComponent,
        MapViewComponent,
        LoadingComponent,
    ],
    imports: [
        CommonModule,
        MapsRoutingModule,
    ]
})
export class MapsModule { }
