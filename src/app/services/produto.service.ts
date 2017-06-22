import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Produto } from '../components/produtos/produto';

import { environment } from '../../environments/environment';

@Injectable()
export class ProdutoService {

  private produtosUrl = environment.api_url + '/produtos';

  constructor(private http: Http) { }

  getProdutos() {
    return this.http.get(this.produtosUrl)
      .map( (res: Response) => 
        res.json().map(produto => Produto.fromJSON(produto))
      );
  }

  addProduto(produto){
    let dados : any;
      dados = { nome : produto.nome };

    return this.http.post(this.produtosUrl, dados)
      .map( (res: Response) => Produto.fromJSON(res.json()));
  }

  deleteProduto(id){
    let deleteProdutosUrl = this.produtosUrl + '/' + id ;
    return this.http.delete(deleteProdutosUrl);
  }
}
