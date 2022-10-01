import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FoodsListComponent } from './component/foods-list/foods-list.component';
import { SearchComponent } from './component/search/search.component';
import { DataSharingService } from './_service/data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 
  title = 'foodOrder';
  @ViewChild(FoodsListComponent) comp:Component


  foodName:any;
  constructor(
    public router: Router,
    public dataService:DataSharingService
  ) { }

  search()
  {
    // this.dataService.searchFoods(this.foodName)
    // console.log('op');
    
    // console.log(this.comp);
     this.router.navigate(['/search'],{ queryParams:{name:this.foodName } })
    
  }
}

