import { SharedModule } from './../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadeMedidaCadastroComponent } from './unidade-medida-cadastro/unidade-medida-cadastro.component';
import { UnidadeMedidaComponent } from './unidade-medida/unidade-medida.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { VeiculoCadastroComponent } from './veiculo-cadastro/veiculo-cadastro.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { FormaPagamentoCadastroComponent } from './forma-pagamento-cadastro/forma-pagamento-cadastro.component';
import { StatusPedidoComponent } from './status-pedido/status-pedido.component';
import { StatusPedidoCadastroComponent } from './status-pedido-cadastro/status-pedido-cadastro.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { CidadeComponent } from './cidade/cidade.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';

const cadastrosRouters: Routes = [
  {
    path: 'unidade-medida', children: [
      {path: '', component: UnidadeMedidaComponent},
      {path: 'cadastro', component: UnidadeMedidaCadastroComponent},
      {path: 'cadastro/:id', component: UnidadeMedidaCadastroComponent}
    ],

  },
  {
    path: 'veiculo', children: [
      {path: '', component: VeiculoComponent},
      {path: 'cadastro', component: VeiculoCadastroComponent},
      {path: 'cadastro/:id', component: VeiculoCadastroComponent}
    ]
  },
  {
    path: 'forma-pagamento', children: [
      {path: '', component: FormaPagamentoComponent},
      {path: 'cadastro', component: FormaPagamentoCadastroComponent},
      {path: 'cadastro/:id', component: FormaPagamentoCadastroComponent}
    ]
  },
  {
    path: 'status-pedido', children: [
      {path: '', component: StatusPedidoComponent},
      {path: 'cadastro', component: StatusPedidoCadastroComponent},
      {path: 'cadastro/:id', component: StatusPedidoCadastroComponent}
    ]
  },
  {
    path: 'produto', children: [
      {path: '', component: ProdutoComponent},
      {path: 'cadastro', component: ProdutoCadastroComponent},
      {path: 'cadastro/:id', component: ProdutoCadastroComponent}
    ]
  },
  {
    path: 'cidade', children: [
      {path: '', component: CidadeComponent},
    ]
  },
  {
    path: 'pessoa', children: [
      {path: '', component: PessoaComponent},
      {path: 'cadastro', component: PessoaCadastroComponent},
      {path: 'cadastro/:id', component: PessoaCadastroComponent}
    ]
  },

];

@NgModule({
  declarations: [
    UnidadeMedidaComponent,
    UnidadeMedidaCadastroComponent,
    VeiculoComponent,
    VeiculoCadastroComponent,
    FormaPagamentoComponent,
    FormaPagamentoCadastroComponent,
    StatusPedidoComponent,
    StatusPedidoCadastroComponent,
    ProdutoComponent,
    ProdutoCadastroComponent,
    CidadeComponent,
    PessoaComponent,
    PessoaCadastroComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,



    RouterModule.forChild(cadastrosRouters)
  ]
})
export class CadastrosModule { }
