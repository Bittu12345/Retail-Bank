import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { Customer } from '../Models/Customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customer:Customer[];
  errorMessage:string = '';
  constructor(private _bankService:BankService) { }

  ngOnInit(): void {
    this._bankService.getCustomersFromServer()
    .subscribe(data => 
      {
        this.customer = data
        console.log(data)
      },
      error => (this.errorMessage = error))
      
  }

}
