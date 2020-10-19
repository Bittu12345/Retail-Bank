import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { DeleteAccountComponent } from './components/delete-account/delete-account.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { GetAccountsComponent } from './components/get-accounts/get-accounts.component';
import { GetStatementComponent } from './components/get-statement/get-statement.component';
import { LoginComponent } from './components/login/login.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { ViewAccountStatusComponent } from './components/view-account-status/view-account-status.component';
import { ViewCustomerStatusComponent } from './components/view-customer-status/view-customer-status.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {CashierHomeComponent} from './cashier-home/cashier-home.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createcustomer', component: CreateCustomerComponent},
  {path: 'updatecustomer', component: UpdateCustomerComponent},
  {path: 'deletecustomer', component: DeleteCustomerComponent},
  {path: 'createaccount', component: CreateAccountComponent},
  {path: 'deleteaccount', component: DeleteAccountComponent},
  {path: 'viewcustomer', component: ViewCustomerStatusComponent},
  {path: 'viewaccount', component: ViewAccountStatusComponent},
  {path: 'getaccount', component: GetAccountsComponent},
  {path: 'deposit', component: DepositComponent},
  {path: 'withdraw', component: WithdrawComponent},
  {path: 'transfer', component: TransferComponent},
  {path: 'getstatement', component: GetStatementComponent},
  {path: 'allcustomers', component: CustomerDetailsComponent},
  {path: 'cashier', component: CashierHomeComponent},
  {path: 'accountdetails',component:AccountDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
