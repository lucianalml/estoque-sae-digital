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
    this.storeData(produto);
  }

  storeData(produto: Produto) {
    const body = JSON.stringify(produto);
    return this.http.post(this.produtosUrl, body)
      .map( (res: Response) => Produto.fromJSON(res.json()))
      .subscribe();
  }

  fetchData() {
    return this.http.get(this.produtosUrl)
      .map((response: Response) => response.json().map(produto => Produto.fromJSON(produto)))
      .subscribe(
        (data: Produto[]) => {
          this.produtos = data;
          this.produtosChanged.emit(this.produtos);
        }
      );
  }

}
