// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes)]
// };
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig = [
  provideRouter(routes),
  // Add other global providers here if needed
];
