import { Component } from '@angular/core';

import { ProdutoService } from './services/produto.service';
import { CompraService } from './services/compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private produtoService: ProdutoService,
    private compraService: CompraService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.produtoService.fetchData(); 
    this.compraService.fetchData(); 
  }

}
