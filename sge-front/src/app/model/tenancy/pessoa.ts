import { Cidade } from './cidade';
import { TipoPessoa } from './../enum/tipo-pessoa.enum';

export interface Pessoa {
  id?: number;
  nome?: string;
  tipoPessoa?: TipoPessoa;
  inscFederal?: string;
  endereco?: string;
  complemento?: string;
  cep?: string;
  numero?: string;
  bairro?: string;
  fone1?: string;
  fone2?: string;
  email?: string;
  funcionario?: boolean;

  idCidade?: Cidade;
}
