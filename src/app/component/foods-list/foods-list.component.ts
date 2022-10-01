import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from 'src/app/_service/data-sharing.service';
import { FoodService } from 'src/app/_service/food.service';

@Component({
  selector: 'app-foods-list',
  templateUrl: './foods-list.component.html',
  styleUrls: ['./foods-list.component.css']
})
export class FoodsListComponent implements OnInit {
  @Input()name:any
  constructor( public foodService:FoodService,
     public dataSharing:DataSharingService,) { }
   foodList:any;
   foodName:any;
   searchList:any
  ngOnInit(): void {
    if(this.name) 
    {
    console.log(this.name);

    }
    this.getFoods()
  }
 
  async getFoods()
  {
    let result=await this.foodService.getFoods()
    console.log(result);
      this.foodList=result['categories']
      console.log(this.foodList)
  }
  
  async search(params)
  {
    this.foodName=params? params:this.foodName
    console.log(this.foodName);

    if(this.foodName=='' || undefined)
    {
      this.getFoods()
      this.searchList=null
      return
    }
    console.log(this.foodName);
    this.foodList=null
    
    let result=await this.foodService.searchFoods(this.foodName)
      this.searchList=result['meals'].slice(0,11)
       console.log(this.searchList)
  }
  async addCart(id)
  {
    let result=await this.dataSharing.getFoodss(id)
    alert('Add To Cart')

  }
  back()
  {
    this.getFoods()
    this.searchList=null
  }

}
