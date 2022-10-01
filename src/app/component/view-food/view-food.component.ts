import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSharingService } from 'src/app/_service/data-sharing.service';
import { FoodService } from 'src/app/_service/food.service';
@Component({
  selector: 'app-view-food',
  templateUrl: './view-food.component.html',
  styleUrls: ['./view-food.component.css']
})
export class ViewFoodComponent implements OnInit {
  id:any;
  view:any
  constructor(
    private aroute: ActivatedRoute,
    public router:Router,
    public foodService:FoodService,
    public dataSharing:DataSharingService,
  ) { }

  ngOnInit(): void {
    this.aroute.queryParams.subscribe(params => {
      this.id = params.id
    })
    this.viewfood()

  }
  async viewfood()
  {
    let result = await this.foodService.viewFoods(this.id)
    this.view=result['meals'][0]
    console.log(this.view);
    
  }
  async addCart(id)
  {
    let result=await this.dataSharing.getFoodss(id)
    alert('Add To Cart')
  }
  back()
  {
     this.router.navigate(['/foodlist'])
  }
  

}
