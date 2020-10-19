import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Withdraw } from 'src/app/Models/Withdraw';
import { BankService } from 'src/app/bank.service';
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {

  withdraw:Withdraw[];
  isRecordEmpty: any;
  isSearched = false;
  errorMessage: string;
 // result = {};
  id:'';
  amount:'';
  accounttype:'';

  constructor(private _bankService:BankService) { }

  ngOnInit(): void {
  }

  onDeposit() {
    this._bankService.sendDepositRequest(this.id,this.amount,this.accounttype).subscribe(data => {
      this.withdraw = data, 
      this.isSearched = true;
      alert('Amount Deposited successfully');
      this.isRecordEmpty = data.length == 0,   
      console.log(this.isRecordEmpty)
    },
    error => (this.errorMessage = error)); 
    
  }
}


