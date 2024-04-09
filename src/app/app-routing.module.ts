
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HomeComponent } from './home/home.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';


const routes: Routes = [
 {
  component:HomeComponent,
  path:'',
   },
 {
  component:SellerAuthComponent,
  path:'seller-auth',
  
 },
 {
  component:SellerHomeComponent,
  path:'seller-home',
  canActivate:[authGuard]
  
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 