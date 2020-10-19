import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from 'src/app/bank.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  createAccForm: FormGroup;
  errorMessage: string;
  submitted: boolean;
  accountAdded: string;
  message: any;

  constructor(private router: Router,private _bankService:BankService) {
    this.createAccForm = new FormGroup({
      customerID: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      accountType: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.createAccForm.value);
    this._bankService.CreateNewAccountForCustomer(this.createAccForm.value).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        this.errorMessage = '';
        this.message = "Account Added Succesfully for CustomerID "+this.createAccForm.value.customerID
        this.accountAdded = 'Account Added Sucessfully';
      },
      error => {       
       
        this.errorMessage = 'The Account could not be added.This might be because'+ 
        'the account type you are trying to add is already present. Or the customerID is present';
       // this.message = error;
      });
    alert('Account creation initiated successfully');
    //this.router.navigate(['/deleteaccount']);
  }

}
