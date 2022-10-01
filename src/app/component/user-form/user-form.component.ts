import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/_service/data-sharing.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
 
 
  name; number; email;address; pincode; city;
  constructor(
    public router:Router,
    public dataSharing:DataSharingService
            ) { }
  userData=[]
  ngOnInit(): void {
  }
  
  onSubmit()
  {
    // Object.assign(this.userData, {"name": this.name},{number})
    Object.assign(this.userData,{'name':this.name},{'number':this.number},
     {'email':this.email},{'address':this.address},{'pincode':this.pincode},{'city':this.city})
    console.log(this.userData)
    
     this.dataSharing.userInfo=this.userData
     this.router.navigate(['/status'])

         
  }
}
