import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from 'src/app/bank.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  createCustForm: FormGroup;
  errorMessage: string;
  customerAdded: string;
  submitted: boolean;
  message: any;

  constructor(private router: Router,private _bankService:BankService) {
    this.createCustForm = new FormGroup({
      customerSsnId: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      customerName: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      addressLine1: new FormControl('', [Validators.required]),
      addressLine2: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.createCustForm.value);
    this._bankService.CreateNewCustomer(this.createCustForm.value).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        this.errorMessage = '';
        this.customerAdded = 'Customer Added Sucessfully';
      },
      error => {
        console.log(error);
        this.errorMessage = '';
        this.message = error;
      });
    alert('Customer creation initiated successfully');
   // this.router.navigate(['/updatecustomer']);
  }

}
