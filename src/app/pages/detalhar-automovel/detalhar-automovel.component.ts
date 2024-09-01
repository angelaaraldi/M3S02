import { Component, inject } from '@angular/core';
import { CabecalhoComponent } from "../../components/cabecalho/cabecalho.component";
import { AutomoveisService } from '../../services/automoveis.service';
import { ActivatedRoute } from '@angular/router';
import { RodapeComponent } from "../../components/rodape/rodape.component";
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-detalhar-automovel',
  standalone: true,
  imports: [CabecalhoComponent, RodapeComponent],
  templateUrl: './detalhar-automovel.component.html',
  styleUrl: './detalhar-automovel.component.css'
})
export class DetalharAutomovelComponent {
  appComponent = inject(AppComponent);
  automoveisService = inject(AutomoveisService);
  activatedRoute = inject(ActivatedRoute);
  automovel: any = {id: 0, name: "", year: 0, type: "", pricePerDay: 0, image: "", description: ""};
  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: (params: any) => {
        this.automoveisService.detail(params.id).subscribe({
          next: (data) => {
            this.automovel = data;
          },
          error: (error) => {console.log("Erro do detail", error)}
        })
      },
      error: (error) => {console.log("Erro do params", error)}
    })
  }
  favoritar() {
    let favoritos = localStorage.getItem('favoritos');
    if (favoritos) {
      let arrayFavoritos = JSON.parse(favoritos);
      let favorito = undefined;
      arrayFavoritos.forEach((element: { id: any; }) => {
        if (element.id == this.automovel.id) {
          favorito = element;
        }
      });
      if (favorito != undefined) {
        arrayFavoritos.splice(arrayFavoritos.indexOf(favorito), 1);
        localStorage.setItem('favoritos', JSON.stringify(arrayFavoritos));
        this.appComponent.atualizarFavoritos();
        alert("Automóvel desfavoritado");
      } else {
        arrayFavoritos.push(this.automovel);
        localStorage.setItem('favoritos', JSON.stringify(arrayFavoritos));
        this.appComponent.atualizarFavoritos();
        alert("Automóvel favoritado");
      }
    } else {
      localStorage.setItem('favoritos', "[]");
      this.favoritar();
    }
  }
}
