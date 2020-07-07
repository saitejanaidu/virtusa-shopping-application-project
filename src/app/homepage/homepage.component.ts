import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperserviceService } from '../helperservice.service';
import { Product } from './product';
import { Observable } from 'rxjs';
import { cart } from '../cart';
import { SignupRequest } from 'signup';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  pro: Observable<Product[]>;
k:string;
uk:String;
quantity:number=0;
p=new Product();
u=new SignupRequest();
car=new cart();
  constructor(private rt:Router,private hs:HelperserviceService) { }

  ngOnInit(): void {
    
    this.uk=JSON.parse(localStorage.getItem("uname"));
    this.hs.fetchproductlist().subscribe(
      data=>{
        console.log("product list fetched");
        this.pro=data;
      },
      error=>{
        console.log("failed to load products");
      }
    )
  }
  gotoviewprod(id:number){
    this.rt.navigate(['viewpro',id]);
  }
  addtocart(id:Number){
  let q=prompt("enter quntity",'');
    let qi=parseInt(q);
  this.hs.fetchpbid(id).subscribe(
    data=>{
this.p=data;
console.log("product with id fetched");
    },
    error=>{
      console.log("cant fetch prod");
    }
  )
  let un=JSON.parse(localStorage.getItem("uname"));
  
  this.hs.fetchubid(this.uk).subscribe(
    data=>{
      this.u=data;
      localStorage.setItem("userid",this.u.id);
      console.log("user details fetched");
    },
    error=>{
      console.log("cant get user object");
    }
  )


this.car.pro=this.p;
this.car.u=this.u;
this.car.quantity=qi;
this.car.cid=5;

this.hs.addtocart(this.car).subscribe(
  data=>{
    console.log("item added to cart");
  }
);



  }
  gotocartpage(){
    this.rt.navigate(['cartpage']);
  }

}
