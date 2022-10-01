import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { FoodsListComponent } from './component/foods-list/foods-list.component';
import { SearchComponent } from './component/search/search.component';
import { StatusComponent } from './component/status/status.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { ViewFoodComponent } from './component/view-food/view-food.component';


const routes: Routes = [
  {path:'',component:FoodsListComponent},
  {path:'foodlist',component:FoodsListComponent},
  {path:'search',component:SearchComponent},
  {path:'cart',component:CartComponent},
  {path:'viewfood',component:ViewFoodComponent},
  {path:'userform',component:UserFormComponent},
  {path:'status',component:StatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
