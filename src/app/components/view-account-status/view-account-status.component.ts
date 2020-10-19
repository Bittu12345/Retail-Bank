import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-account-status',
  templateUrl: './view-account-status.component.html',
  styleUrls: ['./view-account-status.component.scss']
})
export class ViewAccountStatusComponent implements OnInit {

  headers = ["Customer ID", "Account Type", "Status", "Message", "Last Updated"];
  rows = [
    {
      "Customer ID" : "123456789",
      "Account Type" : "Savings",
      "Status" : "In Progress",
      "Message" : "test",
      "Last Updated" : "21-08-2020"
    },
    {
      "Customer ID" : "123456789",
      "Account Type" : "Current",
      "Status" : "Complete",
      "Message" : "test",
      "Last Updated" : "15-08-2020"
    },
    {
      "Customer ID" : "123456789",
      "Account Type" : "Savings",
      "Status" : "In Progress",
      "Message" : "test",
      "Last Updated" : "21-08-2020"
    },
    {
      "Customer ID" : "123456789",
      "Account Type" : "Current",
      "Status" : "Complete",
      "Message" : "test",
      "Last Updated" : "15-08-2020"
    },
    {
      "Customer ID" : "123456789",
      "Account Type" : "Savings",
      "Status" : "In Progress",
      "Message" : "test",
      "Last Updated" : "21-08-2020"
    },
    {
      "Customer ID" : "123456789",
      "Account Type" : "Current",
      "Status" : "Complete",
      "Message" : "test",
      "Last Updated" : "15-08-2020"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRefresh(item) {
    console.log(item);
  }

}
