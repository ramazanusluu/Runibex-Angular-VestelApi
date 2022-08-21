import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  },
  {
    path: 'category/:category_id',
    component: SubCategoryComponent,
  },
  {
    path: 'products/:product_id',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
