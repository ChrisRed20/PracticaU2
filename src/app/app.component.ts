import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practica_1';
}

Notification.requestPermission().then(permission => {
  if(permission === 'granted') {
    console.log('Permiso para notificaciones concedido');
    alert('Ahora las notificaciones estan activadas');
  }
});

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log('Datos obtenidos:', data);
    localStorage.setItem('posts', JSON.stringify(data));
  })
  .catch(() => {
    console.log('Modo offline: cargando desde caché');
    const cachedData = localStorage.getItem('posts');
    if (cachedData) {
      console.log('Datos en caché:', JSON.parse(cachedData));
    }
  });
