import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter([{path:'', redirectTo : 'register',pathMatch :'full'},
{ path: 'register' , component : RegisterComponent}

]), provideClientHydration()]
};
