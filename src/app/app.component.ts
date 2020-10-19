import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authenticate.service';
import { User } from './Models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'retailBankMgmt';
  currentUser:User;
  isAdmin:boolean = false;
  isCashier:boolean = false;
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.currentUser.subscribe(x =>{ 
      console.log("IS THIS WOKRING?");
      this.currentUser = x
    if(this.currentUser?.login === "Admin")  
    {   
      this.isAdmin = true;
      //console.log(this.isAdmin + "he's ADMIN ");
      this.isCashier = false;
    }
    if(this.currentUser?.login === "Cashier")
    {
     this.isAdmin = false;
      this.isCashier = true;
    }
      
      });
    
}

logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}

}
