import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }


  async getFoods()
 {
   return await this.http.post(environment.baseUrl+"/categories.php",Headers).toPromise();
 }
 async searchFoods(params)
 {
  // console.log(environment.baseUrl+"/search.php?s="+params)
   return await this.http.post(environment.baseUrl+"/search.php?s="+params,Headers).toPromise();

 }
 async viewFoods(params)
 {
    // console.log(environment.baseUrl+"/search.php?s="+params)
   return await this.http.post(environment.baseUrl+"/lookup.php?i="+params,Headers).toPromise();
 }
}