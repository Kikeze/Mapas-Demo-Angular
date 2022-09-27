import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Geolocation
if( !navigator.geolocation ) {
    alert("El navegador no soporta geolocalizacion");
    throw new Error("El navegador no soporta geolocalizacion")
}

// Environment
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
