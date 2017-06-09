import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  produtos: any[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {


    this.produtoService.getProdutos()
      .subscribe(produtos => {
        this.produtos = produtos;
        console.log(produtos);
    });

  }

}
