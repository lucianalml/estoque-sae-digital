import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';

@Injectable()
export class ProdutoService {

  private produtosUrl = environment.api_url + '/produtos';

  constructor(private http: Http) { }

  getProdutos() {
    return this.http.get(this.produtosUrl)
            .map(res => res.json() );
  }

  addProduto(produto){
    let dados : any;
      dados = { nome : produto.nome };

    return this.http.post(this.produtosUrl, dados)
      .map(res => res.json() );
  }

  deleteProduto(id){
    let deleteProdutosUrl = this.produtosUrl + '/' + id ;
    return this.http.delete(deleteProdutosUrl);
  }
}
