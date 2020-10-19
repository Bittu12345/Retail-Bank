import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from 'src/app/bank.service';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  searchForm: FormGroup;
  updateCustForm: FormGroup;
  isSearched = false;
  currentCustomer: any;
  getCustomerErrorMessage: any;
  customerUpdated: boolean;
  updateErrorMessage: string;
  message: string;
  currentBook: any;
  customerdDeleted: boolean;
  deleteErrorMessage: string;

  constructor(private router: Router,private _bankService:BankService) {
    this.searchForm = new FormGroup({
      ssn: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
    });

    this.updateCustForm = new FormGroup({
      ssn: new FormControl({value: '', disabled: true}),
      customerID: new FormControl({value: '', disabled: true}),
      name: new FormControl('', [Validators.required]),
      address1: new FormControl('', [Validators.required]),
      address2: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  isSearchDisabled(){
    if(this.searchForm.get('ssn').value){
      return false;
    }
    return true;
  }

  onSearch() {
    console.log(this.searchForm.value);
    this.isSearched = true;
    this._bankService.getCustomerByID(this.searchForm.value)
      .subscribe(
        data => {
          this.currentCustomer = data;
         // console.log(data);
        },
        error => {         
          this.getCustomerErrorMessage = error;
          this.isSearched = true;
          console.log(error);
        });
    // this.updateCustForm.setValue({});
  }

  onUpdate() {
    console.log(this.currentCustomer);
    
    this._bankService.updateCustomer(this.currentCustomer.customerSsnId, this.currentCustomer)
    .subscribe(
      response => {
        this.customerUpdated = true;
        this.updateErrorMessage = '';
        this.message = "Customer Updated! "+this.currentCustomer.customerName;
        //this.router.navigate(['/get']);
      },
      error => {
        this.customerUpdated = false;
        this.message = '';
        
        this.updateErrorMessage = error;
      });;
    //this.router.navigate(['/deletecustomer']);
  }

  deleteCustomer(){
    this._bankService.delete(this.currentCustomer.customerSsnId)
      .subscribe(
        response => {
          console.log(response);
          this.customerdDeleted = true;         
          this.router.navigate(['/allcustomers']);
        },
        error => {
          this.customerdDeleted = false;
          console.log(error);
          this.deleteErrorMessage = error;
        });
  }
  }


