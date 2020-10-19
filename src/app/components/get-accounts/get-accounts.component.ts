import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-accounts',
  templateUrl: './get-accounts.component.html',
  styleUrls: ['./get-accounts.component.scss']
})
export class GetAccountsComponent implements OnInit {

  searchForm: FormGroup;
  isSearched = false;
  accounts=[];

  constructor(private router: Router) {
    this.searchForm = new FormGroup({
      ssn: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      customerID: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      accountID: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)])
    });
  }

  ngOnInit(): void {
  }

  isSearchDisabled(){
    if(this.searchForm.get('ssn').value || this.searchForm.get('customerID').value || this.searchForm.get('accountID').value){
      return false;
    }
    return true;
  }

  onSearch() {
    console.log(this.searchForm.value);
    this.isSearched = true;
  }

}
