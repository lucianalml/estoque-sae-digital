import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Compra } from '../compra';
import { Produto } from '../../produtos/produto';

import { ProdutoService } from '../../../services/produto.service';
import { CompraService } from '../../../services/compra.service';

@Component({
  selector: 'app-compra-new',
  templateUrl: './compra-new.component.html'
})
export class CompraNewComponent implements OnInit {

  produtos: Produto[] = [];

  compra = new Compra();

  constructor(private compraService: CompraService,
    private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtos = this.produtoService.getProdutos();
    this.produtoService.produtosChanged.subscribe(
      (produtos: Produto[]) => 
      { this.produtos = produtos;
      }
    );
  }

  onSubmit(form: NgForm) {
    
    this.compra.produto = form.value.produto;
    this.compra.quantidade = form.value.quantidade;
    this.compra.preco = form.value.preco;

    const newCompra = new Compra(null,form.value.quantidade,form.value.preco,form.value.produto) ;
    this.compraService.addCompra(newCompra);
    this.compra = new Compra();

  }

}
