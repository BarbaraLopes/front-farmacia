import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'medicamentos', loadChildren: 'src/app/medicamentos/medicamentos.module#MedicamentosModule' },

  { path: '', redirectTo: 'medicamentos', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
