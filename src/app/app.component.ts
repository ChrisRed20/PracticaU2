import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Practica_1';
  posts: any[] = [];
  fromCache = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Solicitar permiso para notificaciones
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Permiso para notificaciones concedido');
        alert('Ahora las notificaciones están activadas');
      }
    });

    // Obtener datos de la API
    this.fetchPosts();
  }

  fetchPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data: any) => {
        this.posts = data.slice(0, 10);
        localStorage.setItem('posts', JSON.stringify(this.posts));
      },
      () => {
        console.log('Modo offline: cargando desde caché');
        const cachedData = localStorage.getItem('posts');
        if (cachedData) {
          this.posts = JSON.parse(cachedData);
          this.fromCache = true;
        }
      }
    );
  }
}