import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = [];

  getCart(){
    return this.cart;
  }

  /**addClass(products){
    this.cart.push(products);
  }**/

  removeCart(){
    this.cart = [];
  }


  constructor() { }
}
