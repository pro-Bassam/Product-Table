import { ProductsService } from "../product.service";
import { Product } from "./../product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  constructor(public productsService: ProductsService) {}

  products: Product[] = [];

  ngOnInit() {
    this.products = this.productsService.getProduct();
  }

  onRemove(product) {
    let index = this.products.indexOf(product);
    this.products.splice(index, 1);
    alert("Product Removed");
  }

  onChange(product) {
    product.name = "UPDATED";
    product.category = "UPDATED";
    product.price = "UPDATED";
    product.date = "UPDATED";
  }
}
