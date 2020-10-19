import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { DeleteAccountComponent } from './components/delete-account/delete-account.component';
import { ViewCustomerStatusComponent } from './components/view-customer-status/view-customer-status.component';
import { ViewAccountStatusComponent } from './components/view-account-status/view-account-status.component';
import { GetAccountsComponent } from './components/get-accounts/get-accounts.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { GetStatementComponent } from './components/get-statement/get-statement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CashierHomeComponent } from './cashier-home/cashier-home.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    CreateAccountComponent,
    DeleteAccountComponent,
    ViewCustomerStatusComponent,
    ViewAccountStatusComponent,
    GetAccountsComponent,
    DepositComponent,
    WithdrawComponent,
    TransferComponent,
    GetStatementComponent,
    CustomerDetailsComponent,
    CashierHomeComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,    
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
