import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "./table/table.component";
import { AddProductComponent } from "./add-product/add-product.component";

const routes: Routes = [
  { path: "", component: TableComponent },
  { path: "create", component: AddProductComponent },
  { path: "edit/:productId", component: AddProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
