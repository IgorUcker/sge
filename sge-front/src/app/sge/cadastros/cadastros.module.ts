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
  }

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
    StatusPedidoCadastroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,



    RouterModule.forChild(cadastrosRouters)
  ]
})
export class CadastrosModule { }
