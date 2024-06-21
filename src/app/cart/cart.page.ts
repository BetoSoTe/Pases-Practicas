import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  products: any[] = [];
  total: number = 0;
  taxRate: number = 0.16; // Tasa de impuesto del 16%
  totalWithTax: number = 0;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.products = this.localStorageService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.total += parseFloat(this.products[i].price);
    }

    this.totalWithTax = this.total + (this.total * this.taxRate);
  }

  checkout() {
    alert('Reservar clase exitosa!');
    this.localStorageService.clearCart();
    this.loadCart();
  }

  remove() {
    this.localStorageService.clearCart();
    this.loadCart();
  }
}
