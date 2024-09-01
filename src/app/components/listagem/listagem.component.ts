import { CommonModule } from '@angular/common';
import { Component, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent {
  appComponent = inject(AppComponent);
  router = inject(Router);
  ngOnInit() {
    this.appComponent.listar();
  }
  abrirDetalhes(id: number) {
    this.router.navigate(["automoveis", id]);
  }
}
