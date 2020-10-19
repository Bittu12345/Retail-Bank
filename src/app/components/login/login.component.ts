import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authenticate.service';
import { BankService } from 'src/app/bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  data:any;
  errorMessage:string = "";

  constructor(private router: Router,private _bankService:BankService,private _authentiCateService:AuthenticationService) {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginForm.value);
    let userName = this.loginForm.value.login;
    let passWord = this.loginForm.value.password;
    this._authentiCateService.Login(userName,passWord).subscribe(
      data => {
        this.data = data;
        sessionStorage.setItem("user",this.data);
        localStorage.setItem('currentUser', JSON.stringify(data));
        console.log(data);
        if(data.login === "Admin"){
        this.router.navigate(['/allcustomers']);
        }
        if(data.login == "Cashier"){
          this.router.navigate(['/cashier']);
        }
      },
      error => {   
      
        console.log(error);
        this.errorMessage = "Unable to Log you in! Status: "+error.status;
      });;
 
  }

}
