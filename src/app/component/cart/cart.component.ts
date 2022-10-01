import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSharingService } from 'src/app/_service/data-sharing.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 id:any;
 cartLists:any
 foodList:any
  constructor(
    private aroute: ActivatedRoute,
    public dataSharing:DataSharingService,
    public router:Router

  ) { }

  ngOnInit(): void {
    this.aroute.queryParams.subscribe(params => {
      this.id = params.id
    })
    console.log(this.id);
    if(this.id)
    {
      this.getfood()
    }
     this.getcartData()
  }
  async getfood()
    {
      let result=await this.dataSharing.getFoodss(this.id)
      console.log(result);
      
      this.foodList=result
      if(this.foodList)
      {
        this.getcartData()
      }
    }
  
  getcartData()
  {
   let result= this.dataSharing.cartList
   this.cartLists=result
   console.log("data",result);
  }
  delete(i){
    alert(i)
    console.log(this.cartLists,i);
    
     this.cartLists.splice(i,1);
    console.log(this.cartLists);

     this.dataSharing.deletFood(i)
     this.getcartData()
    
  }
  checkOut()
  {
     this.router.navigate(['/userform'])
  }
}
