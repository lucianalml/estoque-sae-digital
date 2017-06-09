import { Component, OnInit } from '@angular/core';

import { CompraService } from '../../../services/compra.service';

@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.css']
})
export class CompraListComponent implements OnInit {

  compras: any[] = [];

  constructor(private compraService: CompraService) { }

  ngOnInit() {
    this.compraService.getCompras()
      .subscribe(compras => {
        this.compras = compras;
      });
  }
}
