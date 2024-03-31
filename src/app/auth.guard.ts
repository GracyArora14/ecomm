// import { CanActivateFn } from '@angular/router';


// export const authGuard: CanActivateFn = (route, state) => {
  
//   return true;
// };
import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
     const sellerService = inject(SellerService);
    
      if(localStorage.getItem('seller')){
       return true;
      }
      return sellerService.isSellerLoggedIn;
      
  }
