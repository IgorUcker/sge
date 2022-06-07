export interface Menu {
  label?: string;
  icon?: string;
  command?: (event?: any) => void;
  url?: string;
  routerLink?: any;
  queryParams?: {
    [k: string]: any;
  };
  items?: Menu[] | Menu[][];
  expanded?: boolean;
  disabled?: boolean;
  visible?: boolean;
  target?: string;
  routerLinkActiveOptions?: any;
  separator?: boolean;
  badge?: string;
  badgeStyleClass?: string;
  style?: any;
  styleClass?: string;
  title?: string;
  id?: string;
  automationId?: any;
}

export const cliente: Menu[] = [
  {
    label: 'Cadastros',
    items: [
      {label: 'Produtos', routerLink: '/sge/cadastros/produto'},
      { label: 'Cadastros Auxiliares',
      items: [
      {label: 'Cidades', routerLink: '/sge/cadastros/cidade'},
      {label: 'Formas de Pagamento', routerLink: '/sge/cadastros/forma-pagamento'},
      {label: 'Status do Pedido', routerLink: '/sge/cadastros/status-pedido'},
      {label: 'Unidades de Medida', routerLink: '/sge/cadastros/unidade-medida'},
      {label: 'Veículos', routerLink: '/sge/cadastros/veiculo'},
      ]}
    ]
  }
];
