import { Component, OnInit } from '@angular/core';


import { ProductSerivice } from '../shared/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any[]

  constructor(private productService: ProductSerivice) { }

  ngOnInit() {
    //this.products = this.productService.getProducts()

    const productsObservable = this.productService.getProducts()
    productsObservable.subscribe(
      (data) => {
        this.products = data.foundProducts;
      },
      (err) => {console.log('次のエラーが発生しました'+err)},
    )
    
    /*
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
      });
      */
  }

}
