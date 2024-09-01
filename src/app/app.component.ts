import { Component, inject, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutomoveisService } from './services/automoveis.service';
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'm3s02-front';
  numeroFavoritos: number = 0;
  automoveis: any[] = [];
  automoveisService = inject(AutomoveisService);
  atualizarFavoritos() {
    let arrayFavoritos = JSON.parse(localStorage.getItem('favoritos') || "[]");
    this.numeroFavoritos = arrayFavoritos.length;
  }
  listar() {
    this.automoveisService.list().subscribe({
      next: (data: any) => {
        let arrayFavoritos = JSON.parse(localStorage.getItem('favoritos') || "[]");
        data.forEach((element: any) => {
          let eFavorito = arrayFavoritos.some((favorito: any) => favorito.id === element.id);
          if (eFavorito) {
            element.favorito = "Sim";
          } else {
            element.favorito = "Não";
          }
        });
        this.automoveis = data;
      },
      error: (error) => {console.error("Erro ao listar automóveis: ", error)}
    })
  }
}
