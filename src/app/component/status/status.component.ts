import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/_service/data-sharing.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
 uesrInfo:any
 OrderedFood:any
  constructor(
    public dataSharing:DataSharingService
  ) { }
   
  ngOnInit(): void {
     this.uesrInfo=this.dataSharing.userInfo
     console.log(this.uesrInfo);
     
     this.OrderedFood= this.dataSharing.cartList
  }


}
