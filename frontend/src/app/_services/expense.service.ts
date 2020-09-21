import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Expense } from '../_models/Expense';
import { ExpenseSubmissionComponent } from '../expense-submission/expense-submission.component';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  baseUrl = environment.apiUrl;
  list: Expense[];
  formData: Expense;
  formDataU: Expense;
  updation = false;
  updateId: number;
constructor(private authService: AuthService, private http: HttpClient) { }

submitExpense(){
  return this.http.post(this.baseUrl + this.authService.decodedToken.nameid  + '/expenses', this.formData);
}

getExpenses(){
  this.http.get(this.baseUrl + this.authService.decodedToken.nameid  + '/expenses')
    .toPromise()
    .then(res => this.list = res as Expense[]);
}

updateExpense(){
  this.formData.id = this.updateId;
  console.log(this.formData);

  return this.http.put(this.baseUrl + this.authService.decodedToken.nameid + '/expenses/' + this.updateId, this.formData );
}

}
