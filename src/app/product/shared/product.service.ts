import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { products } from "src/app/products";

@Injectable()  //サービスは必ずつける

export class ProductSerivice{

  constructor(private http: HttpClient) { }


  getProducts(): Observable<any>{
    // return products
    // ポストマンで行っていたGetリクエストと同じ処理がここで可能になった
    // return this.http.get('http://localhost:3001/api/v1/products') **localhost:4200ではないのでエラーになる(XSS?) → proxyを利用する
    return this.http.get('/api/v1/products') //jsonで渡すようにする
  }

  getProductById(productId: string): Observable<any>{
    return this.http.get('/api/v1/products/'+productId) //jsonで渡すようにする
  }

}