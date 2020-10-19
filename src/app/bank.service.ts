import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//import { Book } from './get-books/Books.model';
//import  'rxjs/add/operator/catch'
import { HttpParams } from "@angular/common/http";
import { Customer } from './Models/Customer';
import { User } from './Models/User';
import { Status } from './Models/Status';
import { Account } from './Models/Account';
import { Withdraw } from './Models/Withdraw';
import { Transfer } from './Models/Transfer';
@Injectable({
  providedIn: 'root'
})
export class BankService {

  currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) { }

  sendWithdrawRequest(id, amount, accounttype) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    let header = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${btoa(this.currentUserSubject.value.login + ":" + this.currentUserSubject.value.password)}`)
    }
    return this.http.put<Withdraw[]>(`https://localhost:44318/cashier/withdraw/${id}/${amount}/${accounttype}`, this.currentUserSubject, header)
      .pipe(catchError(error => throwError(error.message || 'Something bad happened,Try again!')));
  }
  sendDepositRequest(id, amount, accounttype) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    let header = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${btoa(this.currentUserSubject.value.login + ":" + this.currentUserSubject.value.password)}`)
    }
    return this.http.put<Withdraw[]>(`https://localhost:44318/cashier/deposit/${id}/${amount}/${accounttype}`, this.currentUserSubject, header)
      .pipe(catchError(error => throwError(error.message || 'Something bad happened,Try again!')));
  }
  sendTransferRequest(sourceid, targetid, amount) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    let header = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${btoa(this.currentUserSubject.value.login + ":" + this.currentUserSubject.value.password)}`)
    }
    return this.http.put<Transfer[]>(`https://localhost:44318/cashier/transfer/${sourceid}/${targetid}/${amount}`, this.currentUserSubject, header)
      .pipe(catchError(error => throwError(error.message || 'Something bad happened,Try again!')));
  }
  getAccountDetailsFromServer(id) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    let header = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${btoa(this.currentUserSubject.value.login + ":" + this.currentUserSubject.value.password)}`)
    }
    return this.http.get<Account[]>(`https://localhost:44318/cashier/${id}`, header)
      .pipe(catchError(error => throwError(error.message || 'Something bad happened,Try again!')));
  }

  getCustomersFromServer(): Observable<Customer[]> {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    let header = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${btoa(this.currentUserSubject.value.login + ":" + this.currentUserSubject.value.password)}`)
    }
    return this.http.get<Customer[]>('https://localhost:44318/customer', header)
      .pipe(catchError(error => throwError(error.message || 'Something bad happened,Try again!')));
  }


  CreateNewCustomer(value: any) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    let header = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${btoa(this.currentUserSubject.value.login + ":" + this.currentUserSubject.value.password)}`)
    }
    return this.http.post('https://localhost:44318/customer', value, header);
  }


  getCustomerByID(value: any) {
    let ssn = value.ssn;
    console.log(ssn);

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    let header = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${btoa(this.currentUserSubject.value.login + ":" + this.currentUserSubject.value.password)}`)
    }
    return this.http.get<Customer>(`https://localhost:44318/customer/${ssn}`, header)
      .pipe(catchError(error => throwError(error.message || 'Something bad happened,Try again!')));

  }

  updateCustomer(customerSsnId: any, currentCustomer: any) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    let header = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${btoa(this.currentUserSubject.value.login + ":" + this.currentUserSubject.value.password)}`)
    }
    currentCustomer.customerId = 0;
    return this.http.put(`https://localhost:44318/customer/${customerSsnId}`, currentCustomer, header);
  }


  delete(id: any) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    let header = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${btoa(this.currentUserSubject.value.login + ":" + this.currentUserSubject.value.password)}`)
    }
    return this.http.delete(`https://localhost:44318/customer/${id}`, header);
  }

  getCustomersStatusFromServer() {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    let header = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${btoa(this.currentUserSubject.value.login + ":" + this.currentUserSubject.value.password)}`)
    }
    return this.http.get<Status[]>('https://localhost:44318/status', header)
      .pipe(catchError(error => throwError(error.message || 'Something bad happened,Try again!')));
  }

  CreateNewAccountForCustomer(value: any) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    let header = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${btoa(this.currentUserSubject.value.login + ":" + this.currentUserSubject.value.password)}`)
    }
    console.log(this.currentUserSubject);
    console.log(header);
    return this.http.post('https://localhost:44318/account',value, header)
    .pipe(catchError(error => throwError(error.message || console.log(error.error))));

  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.message || 'Something bad happened,Try again!')
  }
}
