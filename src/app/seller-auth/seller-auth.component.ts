// import { SellerService } from './../service/seller.service';
import { Component , OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit{
  constructor(private seller:SellerService, private router:Router) {}

    ngOnInit(): void{}

    signUp(data:object):void{
    
    this.seller.userSignUp(data).subscribe((result)=>{
     if(result){
      this.router.navigate(['seller-home'])
     }

    });
    }
    

    }
  


