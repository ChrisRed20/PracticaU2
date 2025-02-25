import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/ngsw-worker.js')
      .then(reg => console.log('Service Worker registrado:', reg))
      .catch(err => console.error('Error al registrar Service Worker:', err));
  }