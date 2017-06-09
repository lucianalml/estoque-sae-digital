import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { ProdutoService } from '../../../services/produto.service';
import { CompraService } from '../../../services/compra.service';

@Component({
  selector: 'app-compra-new',
  templateUrl: './compra-new.component.html',
  styleUrls: ['./compra-new.component.css']
})
export class CompraNewComponent implements OnInit {

  private produtos: any[] = [];

  private compra = {
    "produto": "",
    "quantidade": 0,
    "preco": 0 }

  constructor(private compraService: CompraService,
    private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.getProdutos()
      .subscribe(produtos => this.produtos = produtos);
  }

  onSubmit(form: NgForm) {
    
    this.compra.produto = form.value.produto;
    this.compra.quantidade = form.value.quantidade;
    this.compra.preco = form.value.preco;

    this.compraService.addCompra(this.compra)
      .subscribe(res => { 
        alert("Compra adicionada");
      },
        error => alert(error) 
      );

  }

}
