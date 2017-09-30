import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubProvider } from '../../providers/mercadoLibre/mercadoLibre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  informationProd:any = [];
  product:string = ""
  repos:any = HomePage
  exist:boolean = false

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private github: GithubProvider) {

  }

  myFunction() {
    this.github.buscarProducto(this.product)
        .then((data) => {
          this.exist = true;
          this.informationProd = data;
          console.log(this.informationProd);
        }).catch( (err) => {
          console.log(err);
        });
  }


}
