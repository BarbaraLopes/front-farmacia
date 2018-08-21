export class Medicamento {

  public lote: string;

  public principioAtivo: string;

  public dosagem: string;

  public dataVencimento: Date;

  public nomeComercial: string;

  public outrasEspecificacoes: string;

  public tipo: TipoMedicamento;

  public laboratorio: string;

  public status: Status;

  public obsExclusao: string;

  public usoVeterinario: string;
}

export class Status {
  codigo: number;
  descricao: string;
}

export class TipoMedicamento {
  codigo: number;
  descricao: string;
}
