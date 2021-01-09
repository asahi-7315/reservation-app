import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
// import { products } from '../../products';
import { ProductSerivice } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product

  constructor(
    private route: ActivatedRoute,
    private productService: ProductSerivice,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      //this.product = products[+param.get('productId')] サービス経由で取得するため削除
      //this.product = this.productService.getProductById(param.get('productId'))
      const productObservable = this.productService.getProductById(param.get('productId'))
      productObservable.subscribe(
        (data) => {
          this.product = data.foundProduct
        },
        (error) =>{

        },
        )
      
    })
  }

}
