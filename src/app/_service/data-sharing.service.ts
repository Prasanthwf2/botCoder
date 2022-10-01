import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor(private http:HttpClient) { }
  public emptyArry
  public cartList=[]
  public userInfo
 
 async getFoodss(params)
 {
   let result= await this.http.post(environment.baseUrl+"/lookup.php?i="+params,Headers).toPromise();
   for(let cart of this.cartList)
   {
    if(cart.idMeal==result['meals'][0].idMeal)
    {
         cart.Qty=parseInt(cart.Qty)
        cart.Qty+=1
        console.log(cart.Qty);
     return   

    }
   }
   
   this.emptyArry=result['meals'][0]
   Object.assign(this.emptyArry, {"Qty": 1});
   this.cartList.push(this.emptyArry)
   console.log("cart",this.cartList);
 }
  deletFood(i)
  {
    this.cartList.splice(i,1)
  }

}
