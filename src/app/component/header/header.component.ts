import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   
  foodName:any;
  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {

  }
  search()
  {
    this.router.navigate(['/search'],{ queryParams:{name:this.foodName } })
  }
}
