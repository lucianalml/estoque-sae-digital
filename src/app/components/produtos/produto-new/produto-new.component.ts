import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Produto } from '../produto';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-produto-new',
  templateUrl: './produto-new.component.html'
})
export class ProdutoNewComponent implements OnInit {

  nome: string;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const newProduto = new Produto('',form.value.nome) ;
    this.produtoService.addProduto(newProduto);
    this.nome = '';
  }

}
