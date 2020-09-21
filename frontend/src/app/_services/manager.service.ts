import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Expense } from '../_models/Expense';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
 baseUrl = environment.apiUrl;
 list: Expense[];

constructor(private http: HttpClient) { }

getExpenses(){
  this.http.get(this.baseUrl + 'manager')
  .toPromise()
  .then(res => this.list = res as Expense[], err => console.log('Problem returned by backend'));
}
approveExpense(expenseId) {
  return this.http.post(this.baseUrl + 'manager/approveExpense/' + expenseId, {});
}

rejectExpense(expenseId) {
  return this.http.post(this.baseUrl + 'manager/rejectExpense/' + expenseId, {});
}

getFExpenses(expenseParams){
 
  this.http.get(this.baseUrl + 'manager', expenseParams);

}

}
