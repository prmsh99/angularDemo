import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { EmployeeComponent } from './employee/employee.component';
import { FoodtruckComponent } from './foodtruck/foodtruck.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'admin', component: AdminComponent},
  {path:'user', component: EmployeeComponent},
  {path:'', component: FoodtruckComponent},
  {path:'login', component: LoginComponent},
  {path:'hello/:id', component: HelloWorldComponent},
  {path: 'food', component: FoodtruckComponent},
  {path: 'cart', component: CartComponent},
  {path:'**', component: HelloWorldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
