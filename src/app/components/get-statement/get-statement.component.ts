import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-statement',
  templateUrl: './get-statement.component.html',
  styleUrls: ['./get-statement.component.scss']
})
export class GetStatementComponent implements OnInit {

  searchForm: FormGroup;
  isSearched = false;
  options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  headers = ["Date", "Description", "Type", "Balance"];
  rows = [
    {
      "Balance" : "2548",
      "Type" : "Credit",
      "Description" : "test",
      "Date" : "21-08-2020"
    },
    {
      "Balance" : "2548",
      "Type" : "Debit",
      "Description" : "test",
      "Date" : "15-08-2020"
    },
    {
      "Balance" : "2548",
      "Type" : "Credit",
      "Description" : "test",
      "Date" : "21-08-2020"
    },
    {
      "Balance" : "2548",
      "Type" : "Debit",
      "Description" : "test",
      "Date" : "15-08-2020"
    },
    {
      "Balance" : "2548",
      "Type" : "Credit",
      "Description" : "test",
      "Date" : "21-08-2020"
    },
    {
      "Balance" : "2548",
      "Type" : "Debit",
      "Description" : "test",
      "Date" : "15-08-2020"
    }
  ]

  constructor(private router: Router) {
    this.searchForm = new FormGroup({
      accountID: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      lastTransaction: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  isSearchDisabled() {
    if (this.searchForm.get('accountID').value && (this.searchForm.get('lastTransaction').value ||
      (this.searchForm.get('startDate').value) && this.searchForm.get('endDate').value)) {
      return false;
    }
    return true;
  }

  onSearch() {
    console.log(this.searchForm.value);
    this.isSearched = true;
  }

}
