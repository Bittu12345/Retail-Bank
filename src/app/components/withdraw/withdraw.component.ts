import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Withdraw } from 'src/app/Models/Withdraw';
import { BankService } from 'src/app/bank.service';
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {

  //withdrawForm: FormGroup;
  withdraw:Withdraw[];
  isRecordEmpty: any;
  isSearched = false;
  errorMessage: string;
 // result = {};
  id:'';
  amount:'';
  accounttype:'';
  constructor(private _bankService:BankService) {
  }
  ngOnInit(): void {
  }

  onWithdraw() {
   this._bankService.sendWithdrawRequest(this.id,this.amount,this.accounttype).subscribe(data => {
      this.withdraw = data, 
      this.isSearched = true;
      alert('Amount withdrawn successfully');
      this.isRecordEmpty = data.length == 0,   
      console.log(this.isRecordEmpty)
    },
    error => (this.errorMessage = error)); 
    
  }

}
