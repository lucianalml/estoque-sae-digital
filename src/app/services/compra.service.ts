import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Compra } from '../components/compras/compra';

import { environment } from '../../environments/environment';

@Injectable()
export class CompraService {

  comprasChanged = new EventEmitter<Compra[]>();

  private compras: Compra[] = [];
  private comprasUrl = environment.api_url + '/compras';

  constructor(private http: Http) { }

  getCompras() {
    return this.compras;
  }

  getCompra(id: number) {
    return this.compras[id];
  }

  deleteCompra(idx: number) {
    this.compras.splice(idx, 1);
  }

  addCompra(compra: Compra) {
    this.compras.push(compra);
    this.storeData(compra);
  }

  storeData(compra: Compra) {
    const body = JSON.stringify(compra);
    return this.http.post(this.comprasUrl, body)
      .map( (res: Response) => Compra.fromJSON(res.json()))
      .subscribe();
  }
  
  fetchData() {
    return this.http.get(this.comprasUrl)
      .map((response: Response) => response.json().map(compra => Compra.fromJSON(compra)))
      .subscribe(
        (data: Compra[]) => {
          this.compras = data;
          this.comprasChanged.emit(this.compras);
        }
      );
  }

}

//   getCompras() {
//     return this.http.get(this.comprasUrl)
//       .map( (res: Response) => 
//         res.json().map(compra => Compra.fromJSON(compra))
//       );

//   }

//   addCompra(compra){
//     var currentDate = new Date();
//     let dados : any;
//       dados = { quantidade : compra.quantidade,
//                 preco: compra.preco,
//                 data: currentDate.toTimeString(),
//                 compra: compra.compra };

//     return this.http.post(this.comprasUrl, dados)
//       .map( (res: Response) => Compra.fromJSON(res.json()));
//   }

//   deleteCompra(id){
//     let deleteComprasUrl = this.comprasUrl + '/' + id ;
//     return this.http.delete(deleteComprasUrl);
//   }
// }
