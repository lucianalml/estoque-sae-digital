import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private produtoService: ProdutoService) { }

  ngOnInit() {
  }

  fetchData(){
    this.produtoService.fetchData();

  }

  showProdutos(){
    this.router.navigate(['/produtos']);
  }

  showCompras(){
    this.router.navigate(['/compras']);    
  }

}
