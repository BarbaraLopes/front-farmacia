import { Status, Medicamento } from './../../core/model';
import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';
import { MedicamentoFiltro, MedicamentoService } from '../medicamento.service';
import { Validators, FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { ToastyService } from '../../../../node_modules/ng2-toasty';

@Component({
  selector: 'app-medicamentos-pesquisa',
  templateUrl: './medicamentos-pesquisa.component.html',
  styleUrls: ['./medicamentos-pesquisa.component.css']
})
export class MedicamentosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new MedicamentoFiltro();
  medicamentos = [];
  medicamento: Medicamento;
  display: Boolean = false;
  formulario: FormGroup;

  constructor(private medicamentoService: MedicamentoService, private formBuilder: FormBuilder, private toasty: ToastyService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      motivo: [ null, Validators.required ],
    });
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    //this.filtro.status = 'Disponível';
    this.medicamentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.medicamentos = resultado.medicamentos;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  solicitar(medicamento: any) {
    this.medicamento = medicamento;
    this.display = true;
  }

  excluir(medicamento: any) {
    this.medicamento = medicamento;
    this.display = true;
  }

  atualizarStatusParaExcluido() {
    this.medicamento.status.codigo = 5;
    this.medicamento.status.descricao = 'Excluído';
    this.medicamento.obsExclusao = this.formulario.get('motivo').value;
    this.medicamentoService.atualizar(this.medicamento)
      .then(medicamento => {
        this.medicamento = medicamento;
        this.toasty.success('Medicamento excluído com sucesso!');
      });
  }

}
