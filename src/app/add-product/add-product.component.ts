import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ProductsService } from "../product.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Product } from "../product.model";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  selectedFile = null;
  product: Product;
  private mode = "creat";
  private postId: string;

  constructor(
    public productsService: ProductsService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.mode = "edit";
        this.postId = paramMap.get("postId");
      } else {
        this.mode = "creat";
        this.postId = null;
      }
    });
  }

  onImagePicked(event) {
    this.selectedFile = event.target.files[0];
    // const image = (event.target as HTMLInputElement).files[0];
  }

  onAdd(form: NgForm) {
    form.value.image = this.selectedFile;
    if (form.invalid) {
      return;
    } else {
      this.productsService.addPrduct(
        form.value.name,
        form.value.category,
        form.value.price,
        form.value.date,
        form.value.image
      );
      form.resetForm();
      console.log(this.selectedFile);
    }
  }
}
