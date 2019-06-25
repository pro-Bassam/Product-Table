import { Product } from "./product.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor(private http: HttpClient, private router: Router) {}
  private products: Product[] = [];

  getProduct() {
    return this.products;
  }

  addPrduct(
    name: string,
    category: string,
    price: number,
    date: Date,
    image: string
  ) {
    const product: Product = {
      id: null,
      name: name,
      category: category,
      price: price,
      date: date,
      imagePath: image
    };
    this.products.push(product);
    this.router.navigate["/"];
  }
}
