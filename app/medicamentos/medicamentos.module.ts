import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import {DialogModule} from 'primeng/dialog';

import { MedicamentosRoutingModule } from './medicamentos-routing.module';
import { MedicamentosPesquisaComponent } from 'src/app/medicamentos/medicamentos-pesquisa/medicamentos-pesquisa.component';
import { MedicamentoCadastroComponent } from 'src/app/medicamentos/medicamentos-cadastro/medicamento-cadastro.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    InputTextModule,
    DataTableModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    FileUploadModule,
    ProgressSpinnerModule,
    AutoCompleteModule,
    DialogModule,

    SharedModule,
    MedicamentosRoutingModule
  ],
  declarations: [
    MedicamentoCadastroComponent,
    MedicamentosPesquisaComponent
  ],
  exports: []
})
export class MedicamentosModule { }
