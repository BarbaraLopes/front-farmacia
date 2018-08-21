import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

export class MedicamentoFiltro {
  descricao: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class TipoService {

  tiposUrl = 'http://localhost:8080/tipos';

  constructor(private http: Http) { }

  listarTodos(): Promise<any> {
    return this.http.get(this.tiposUrl)
      .toPromise()
      .then(response => response.json());
  }

}
