import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Compra } from '../components/compras/compra';

import { environment } from '../../environments/environment';

@Injectable()
export class CompraService {
  private comprasUrl = environment.api_url + '/compras';

  constructor(private http: Http) { }

  getCompras() {
    return this.http.get(this.comprasUrl)
      .map( (res: Response) => 
        res.json().map(compra => Compra.fromJSON(compra))
      );

  }

  addCompra(compra){
    var currentDate = new Date();
    let dados : any;
      dados = { quantidade : compra.quantidade,
                preco: compra.preco,
                data: currentDate.toTimeString(),
                produto: compra.produto };

    return this.http.post(this.comprasUrl, dados)
      .map( (res: Response) => Compra.fromJSON(res.json()));
  }

  deleteCompra(id){
    let deleteComprasUrl = this.comprasUrl + '/' + id ;
    return this.http.delete(deleteComprasUrl);
  }
}
