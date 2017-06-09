import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';

@Injectable()
export class ProdutoService {

  constructor(private http: Http) { }

  getProdutos() {
    var getProdutosUrl = environment.api_url + '/produtos';
    return this.http.get(getProdutosUrl)
            .map(res => res.json() );
            // .map(res => this.toProdutos(res) );
  }


}
