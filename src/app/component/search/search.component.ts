import { AfterViewInit, Component, DoCheck, OnChanges, OnInit ,Input, ViewChild, SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/_service/food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit ,OnChanges{
   foodList:any;
   foodName:any;
   searchList:any
  constructor(private aroute: ActivatedRoute,
    public foodService:FoodService,) {
      
      // aroute.queryParams.subscribe(p => 
      //     console.log(p.myQueryParam));

          // this.aroute.queryParamMap
          // .pipe(
          //     Map(params => params.get('myQueryParam')),
          //     distinctUntilChanged()
          // )
          // .subscribe(myQueryParam => console.log(myQueryParam));

     if(this.foodName){
      console.log("const  ",this.foodName);
     }
     }

    ngDoCheck()
    {
      // this.aroute.queryParams.subscribe(params => {
      //   this.foodName = params.name
        
      // })
    // console.log('change');
    // this.searchFood()
        
    }
    ngOnChanges(changes: SimpleChanges): void {
      console.log("--",changes);
      
    }
  ngOnInit(): void {
    this.aroute.queryParams.subscribe(params => {
      this.foodName = params.name
    })
    // console.log('ng',this.foodName);
    // this.searchFood()

  }
  
  async searchFood()
  {
    console.log(this.foodName);
    let result=await this.foodService.searchFoods(this.foodName)
    console.log(result);
  }
}
function distinctUntilChanged(): import("rxjs").OperatorFunction<unknown, unknown> {
  throw new Error('Function not implemented.');
}

