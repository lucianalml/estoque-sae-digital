import { Component, OnInit } from '@angular/core';

import { Compra } from '../compra';
import { CompraService } from '../../../services/compra.service';

@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html'
})
export class CompraListComponent implements OnInit {

  compras: Compra[] = [];

  constructor(private compraService: CompraService) { }

  ngOnInit() {
    this.compras = this.compraService.getCompras();
    this.compraService.comprasChanged.subscribe(
      (compras: Compra[]) => this.compras = compras
    );
  }
}
