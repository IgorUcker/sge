import { UnidadeMedida } from './unidade-medida';
export interface Produto {
  id?: number;
  nome?: string;
  codUnidadeMedida?: UnidadeMedida;
}
