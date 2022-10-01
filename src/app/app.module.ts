import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FoodsListComponent } from './component/foods-list/foods-list.component';
import { CartComponent } from './component/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './component/search/search.component';
import { ViewFoodComponent } from './component/view-food/view-food.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { StatusComponent } from './component/status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodsListComponent,
    CartComponent,
    SearchComponent,
    ViewFoodComponent,
    UserFormComponent,
    StatusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  entryComponents:[SearchComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
