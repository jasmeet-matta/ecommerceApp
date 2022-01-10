import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AddProductComponent} from './add-product/add-product.component';
import { ViewProductComponent} from './view-product/view-product.component';
import { ViewAllProductComponent} from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent} from './view-product-by-category/view-product-by-category.component';
import { ViewProductByDateComponent} from './view-product-by-date/view-product-by-date.component';
import { DeleteProductComponent} from './delete-product/delete-product.component';
import { UpdateProductComponent} from './update-product/update-product.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';





const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'add-product', component: AddProductComponent },
  // { path: 'list-product', component:  ViewAllProductComponent},
  { path: 'category/:id', component:  ViewProductByCategoryComponent},
  { path: 'search-date', component:  ViewProductByDateComponent},
  { path: 'delete-product', component:  DeleteProductComponent},
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'update-product/:id', component:  UpdateProductComponent},
  { path: 'signupPage', component:  SignupComponent},
  { path: 'loginPage', component:  LoginComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
