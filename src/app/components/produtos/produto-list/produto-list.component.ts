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
    this.produtos = this.produtoService.getProdutos();
    this.produtoService.produtosChanged.subscribe(
      (produtos: Produto[]) => this.produtos = produtos
    );

  }

  delete(idx){

    if (confirm('Você tem certeza que deseja remover o item ' + this.produtos[idx].nome + '?')) {
      this.produtoService.deleteProduto(idx);
    }

  }

}
