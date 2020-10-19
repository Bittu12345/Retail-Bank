import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { Account } from '../Models/Account';
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
    account:Account[];
    id: '';
    isSearched = false;
    submitted = false;
    isRecordEmpty:any;
    errorMessage:string;
    
  constructor(private _bankService:BankService) { }
  ngOnInit(): void {}

  getAccountDetailsById(){

    this._bankService.getAccountDetailsFromServer(this.id)
    .subscribe( data => 
      {
        
        this.account = data,
        console.log(this.account);
        this.isSearched = true;
        //console.log(data),
        this.isRecordEmpty = data.length == 0,
        console.log(this.isRecordEmpty)
        
      },
      error => (this.errorMessage = error))
  }

}
