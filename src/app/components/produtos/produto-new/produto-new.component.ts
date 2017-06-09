import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-produto-new',
  templateUrl: './produto-new.component.html',
  styleUrls: ['./produto-new.component.css']
})
export class ProdutoNewComponent implements OnInit {

  produto = { 
    "id" : null, 
    "nome": "" }

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {}

  onSubmit(form: NgForm) {

    this.produto.nome = form.value.nome;

    this.produtoService.addProduto(this.produto)
      .subscribe(res => { 
        alert("Produto adicionado");
        // console.log(res);
      },
        error => alert(error) 
      );

  }

}
