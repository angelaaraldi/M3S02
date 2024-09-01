import { Routes } from '@angular/router';
import { ListarAutomoveisComponent } from './pages/listar-automoveis/listar-automoveis.component';
import { DetalharAutomovelComponent } from './pages/detalhar-automovel/detalhar-automovel.component';

export const routes: Routes = [
    {path: '', redirectTo: 'automoveis', pathMatch: 'full'},
    {
        path: 'automoveis',
        children: [
            {path: '', component: ListarAutomoveisComponent},
            {path: ':id', component: DetalharAutomovelComponent}
        ]
    }
];
