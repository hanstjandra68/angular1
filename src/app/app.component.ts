import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Hans';
  itembuah = [{
    nama : 'Kelengkeng',
    harga: 1000
  },{
    nama: 'Jeruk',
    harga: 10000
  }];
  itemArr=['aa','bb','cc','dd'];

  show: boolean =true;
  
  user="";

  pesan='';
  klikButton(){
    this.pesan = 'Tombol ditekan';
  }
}
