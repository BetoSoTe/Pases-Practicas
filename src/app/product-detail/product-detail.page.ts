import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CartService } from '../cart.service';
import { LocalStorageService } from '../local-storage.service'; // Importa el servicio de LocalStorage

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  id: any;
  finalId!: any;
  products: any = [];
  name!: string;
  image!: string;
  desc!: string;
  price!: string;
  hour!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService, // Inyecta el servicio de LocalStorage
    private cartServices: CartService
  ) { 
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.finalId = this.id - 1;
    console.log("id", this.id);

    this.getProducts().subscribe(res => {
      console.log("Res", res);
      this.products = res;
      const product = this.products[this.finalId];
      this.name = product.name;
      this.image = product.image;
      this.desc = product.desc;
      this.price = product.price;
      this.hour = product.hour;
    });
  }

  getProducts() {
    return this.http
      .get("assets/files/clases.json")
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  addReserve() {
    const productToAdd = {
      id: this.finalId,
      name: this.name,
      price: this.price,
      image: this.image // Añade más campos si son necesarios
    };
    this.localStorageService.addToCart(productToAdd);
  }

  goToCart() {
    this.router.navigate(["/cart"]);
  }

  return() {
    this.router.navigate(["/products"]);
  }
}
