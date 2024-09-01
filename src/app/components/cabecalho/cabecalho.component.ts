import { Component, inject, Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  appComponent = inject(AppComponent);
  ngOnInit() {
    this.appComponent.atualizarFavoritos();
  }
}
