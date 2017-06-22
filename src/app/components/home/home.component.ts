import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ProdutoService } from '../../services/produto.service';
import { CompraService } from '../../services/compra.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private produtoService: ProdutoService,
    private compraService: CompraService) { }

  ngOnInit() {
  }

  fetchData(){
    this.produtoService.fetchData(); 
    this.compraService.fetchData(); 
  }

  showProdutos(){
    this.router.navigate(['/produtos']);
  }

  showCompras(){
    this.router.navigate(['/compras']);    
  }

}
