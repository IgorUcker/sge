import { NavigationStart, Router } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Menu, cliente } from 'src/app/menus/service/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  treeControl = new NestedTreeControl<Menu>(node => node.items as any);
  dataSource = new MatTreeNestedDataSource<Menu>();

  menus: Menu[];

  hasChild = (_: number, node: Menu) => !!node.items && node.items.length > 0;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.dataSource.data = cliente;

    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
      }
    });
  }


}
