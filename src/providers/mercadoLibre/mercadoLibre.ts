import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GithubProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GithubProvider {

    apiLink:any = "https://api.mercadolibre.com/sites/MCO/search?q="

    constructor(public http: Http) {}

    buscarProducto(product:string){
        return new Promise((resolve, reject)=> {
          var link:string = this.apiLink + product
          this.http.get(link).map(res=>res.json()).subscribe(
            (data) => {
              resolve(data)
            },
            (error) => {
              reject("Error: "+ error)
            })
    })}


}
