import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Transfer } from 'src/app/Models/Transfer';
import { BankService } from 'src/app/bank.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  t:Transfer[];
  isRecordEmpty: any;
  isSearched = false;
  errorMessage: string;
 // result = {};
  sourceid:'';
  targetid:'';
  amount:'';
  constructor(private _bankService:BankService) { }
  ngOnInit(): void {
  }
  onTransfer() {
    this._bankService.sendTransferRequest(this.sourceid,this.targetid,this.amount).subscribe(data => {
      this.t = data, 
      console.log(data);
      this.isSearched = true;
      alert('Transaction Completed Successfully');
      this.isRecordEmpty = data.length == 0,   
      console.log(this.isRecordEmpty)
    },
    error => (this.errorMessage = error)); 
    
  }

}
