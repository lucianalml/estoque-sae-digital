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
  }

  onSubmit(form: NgForm) {
    
    this.compra.produto = form.value.produto;
    this.compra.quantidade = form.value.quantidade;
    this.compra.preco = form.value.preco;

    this.compraService.addCompra(this.compra)
      .subscribe(res => { 
        alert("Compra adicionada");
        // console.log(res);
      },
        error => alert(error) 
      );

  }

}
