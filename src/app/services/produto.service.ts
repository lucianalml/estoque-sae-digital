import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Produto } from '../components/produtos/produto';

import { environment } from '../../environments/environment';

@Injectable()
export class ProdutoService {
  produtosChanged = new EventEmitter<Produto[]>();

  private produtos: Produto[] = [];
  private produtosUrl = environment.api_url + '/produtos';

  constructor(private http: Http) { }

  getProdutos() {
    return this.produtos;
  }

  getProduto(id: number) {
    return this.produtos[id];
  }

  deleteProduto(idx: number) {
    this.produtos.splice(idx, 1);
  }

  addProduto(produto: Produto) {
    this.produtos.push(produto);
    console.log("produto service");
    console.log(this.produtos);
  }

  editProduto(oldProduto: Produto, newProduto: Produto) {
    this.produtos[this.produtos.indexOf(oldProduto)] = newProduto;
  }

  storeData() {
    const body = JSON.stringify(this.produtos);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.produtosUrl, body, { headers: headers});

    // let dados : any;
    //   dados = { nome : produto.nome };

    // return this.http.post(this.produtosUrl, dados)
    //   .map( (res: Response) => Produto.fromJSON(res.json()));
  }

  fetchData() {
    return this.http.get(this.produtosUrl)
      .map((response: Response) => response.json())
      .subscribe(
        (data: Produto[]) => {
          this.produtos = data;
          this.produtosChanged.emit(this.produtos);
        }
      );
  }
  // getProdutos() {
  //   return this.http.get(this.produtosUrl)
  //     .map( (res: Response) => 
  //       res.json().map(produto => Produto.fromJSON(produto))
  //     );
  // }

  // addProduto(produto){
  //   let dados : any;
  //     dados = { nome : produto.nome };

  //   return this.http.post(this.produtosUrl, dados)
  //     .map( (res: Response) => Produto.fromJSON(res.json()));
  // }

  // deleteProduto(id){
  //   let deleteProdutosUrl = this.produtosUrl + '/' + id ;
  //   return this.http.delete(deleteProdutosUrl);
  // }
}
