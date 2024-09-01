import { Component, inject } from '@angular/core';
import { CabecalhoComponent } from "../../components/cabecalho/cabecalho.component";
import { ListagemComponent } from "../../components/listagem/listagem.component";
import { RodapeComponent } from "../../components/rodape/rodape.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-listar-automoveis',
  standalone: true,
  imports: [CabecalhoComponent, ListagemComponent, RodapeComponent, ReactiveFormsModule],
  templateUrl: './listar-automoveis.component.html',
  styleUrl: './listar-automoveis.component.css'
})
export class ListarAutomoveisComponent {
  appComponent = inject(AppComponent);
  form: FormGroup<any> = new FormGroup({automovel: new FormControl('')});
  filtrar() {
    if (this.form.value.automovel == '') {
      this.appComponent.listar();
    } else {
      this.appComponent.listar();
      setTimeout(() => {
        this.appComponent.automoveis = this.appComponent.automoveis.filter(automovel => automovel.name.toLocaleLowerCase().includes(this.form.value.automovel.toLocaleLowerCase()));
      }, 100);
    }
  }
}
