import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos: any[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.getProdutos()
      .subscribe(produtos => {
        this.produtos = produtos;
        console.log(produtos);
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
