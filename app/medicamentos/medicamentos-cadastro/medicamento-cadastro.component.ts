import { MedicamentoService } from '../medicamento.service';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastyService } from 'ng2-toasty';
import { TipoService } from '../../tipo/tipo.service';

@Component({
  selector: 'app-medicamento-cadastro',
  templateUrl: './medicamento-cadastro.component.html',
  styleUrls: ['./medicamento-cadastro.component.css']
})
export class MedicamentoCadastroComponent implements OnInit {

  public nomesFiltrados: any[];
  tipos = [];
  formulario: FormGroup;

  constructor(
    private medicamentoService: MedicamentoService,
    private tipoService: TipoService,
    private formBuilder: FormBuilder,
    private toasty: ToastyService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.configurarFormulario();
    this.carregarTipos();
  }

  carregarTipos() {
    return this.tipoService.listarTodos()
      .then(tipos => {
        this.tipos = tipos
          .map(c => ({ label: c.descricao, value: c.id }));
      });
  }

  filteredMedicamentoSingle(event) {
    const query = event.query;
    this.medicamentoService.filtrarNomes(query)
      .then(resultado => {
        this.nomesFiltrados = resultado;
      });
  }

  salvar() {
    this.formulario.get('status').value.id = 1;
    this.formulario.get('status').value.descricao = 'Disponível';
    this.medicamentoService.salvar(this.formulario.value)
      .then(medicamentoAdicionado => {
        this.toasty.success('Medicamento adicionado com sucesso!');
        this.router.navigate(['/medicamentos']);
      });
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      principioAtivo: [null, this.validarObrigatoriedade],
      lote: [null, [this.validarObrigatoriedade, this.validarTamanhoMinimo(5)]],
      dosagem: [ null, this.validarObrigatoriedade ],
      tipo: this.formBuilder.group({
        id: [ null, Validators.required ],
        descricao: []
      }),
    //  qtd: [ null, this.validarObrigatoriedade ],
      dataVencimento: [ null, Validators.required ],
      outrasEspecificacoes: [],
      nomeComercial: [],
      laboratorio: [],
      status: this.formBuilder.group({
        id: [],
        descricao: []
      }),
    });
  }

  validarObrigatoriedade(input: FormControl) {
    return (input.value ? null : { obrigatoriedade: true });
  }

  validarTamanhoMinimo(valor: number) {
    return (input: FormControl) => {
      return (!input.value || input.value.length >= valor) ? null : { tamanhoMinimo: { tamanho: valor } };
    };
  }
}
