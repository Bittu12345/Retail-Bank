import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/bank.service';
import { Status } from 'src/app/Models/Status';

@Component({
  selector: 'app-view-customer-status',
  templateUrl: './view-customer-status.component.html',
  styleUrls: ['./view-customer-status.component.scss']
})
export class ViewCustomerStatusComponent implements OnInit {

  customerStatus:Status[];
  errorMessage:string = '';
  constructor(private _bankService:BankService) { }

  ngOnInit(): void {
    this._bankService.getCustomersStatusFromServer().subscribe(data => {this.customerStatus = data
    console.log(data)},
      error => (this.errorMessage = error))
      
  }
}
