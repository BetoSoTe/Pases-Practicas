import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: any = [];

  constructor(
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.getProducts().subscribe(res=>{
      console.log("Res",res)
      this.products = res;
    });
  }

  getProducts(){
    return this.http
    .get("assets/files/clases.json")
    .pipe(
      map((res:any)=>{
        return res.data;
      })
    )
  }
  goToDetails(){
    this.router.navigate(['/product-detail'])
  }

}
