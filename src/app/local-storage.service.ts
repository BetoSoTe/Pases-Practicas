import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private cartKey = 'cartItems';

  constructor() { }

  addToCart(product: any) {
    let items = this.getCartItems();
    items.push(product);
    localStorage.setItem(this.cartKey, JSON.stringify(items));
  }

  getCartItems(): any[] {
    let items = localStorage.getItem(this.cartKey);
    return items ? JSON.parse(items) : [];
  }

  clearCart() {
    localStorage.removeItem(this.cartKey);
  }
}
