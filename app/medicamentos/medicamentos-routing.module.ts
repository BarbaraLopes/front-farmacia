import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { MedicamentoCadastroComponent } from './medicamentos-cadastro/medicamento-cadastro.component';
import { MedicamentosPesquisaComponent } from './medicamentos-pesquisa/medicamentos-pesquisa.component';

const routes: Routes = [
  {
    path: '',
    component: MedicamentosPesquisaComponent,
    data: { }
  },
  {
    path: 'novo',
    component: MedicamentoCadastroComponent,
    data: { }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule {}
