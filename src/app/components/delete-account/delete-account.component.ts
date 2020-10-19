import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})
export class DeleteAccountComponent implements OnInit {

  searchForm: FormGroup;
  isSearched = false;

  constructor(private router: Router) {
    this.searchForm = new FormGroup({
      ssn: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      customerID: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)])
    });
  }

  ngOnInit(): void {
  }

  isSearchDisabled(){
    if(this.searchForm.get('ssn').value || this.searchForm.get('customerID').value){
      return false;
    }
    return true;
  }

  onSearch() {
    console.log(this.searchForm.value);
    this.isSearched = true;
  }

  onDelete() {
    console.log("deleted");
    alert('Account deletion initiated successfully');
    this.router.navigate(['/viewcustomer']);
  }

}
