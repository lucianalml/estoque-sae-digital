import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Produto } from '../produto';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-produto-new',
  templateUrl: './produto-new.component.html'
})
export class ProdutoNewComponent implements OnInit {

  produto = new Produto();

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {}

  onSubmit(form: NgForm) {

    const newProduto = form.value;
    this.produtoService.addProduto(newProduto);
    this.produto.nome = '';
  }

}
