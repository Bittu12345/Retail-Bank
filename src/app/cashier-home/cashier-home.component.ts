import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cashier-home',
  templateUrl: './cashier-home.component.html',
  styleUrls: ['./cashier-home.component.scss']
})
export class CashierHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  accountdetails = function(){
    this.router.navigateByUrl('/accountdetails');
  }
  withdraw = function() {
    this.router.navigateByUrl('/withdraw');
  }
  deposit = function() {
    this.router.navigateByUrl('/deposit');
  }
  transfer = function() {
    this.router.navigateByUrl('/transfer');
  }
  statements = function() {
    this.router.navigateByUrl('/statement');
  }
}
