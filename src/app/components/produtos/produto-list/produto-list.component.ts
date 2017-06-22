import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html'
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.getProdutos()
      .subscribe(produtos => {
        this.produtos = produtos;
        // console.log(produtos);
    });
  }

  delete(id){

    this.produtoService.deleteProduto(id)
      .subscribe(res => { 
        alert("Produto removido");
      },
        error => alert(error) 
      );
  }

}
