import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../_services/expense.service';
import { Expense } from '../_models/Expense';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-rejected-state',
  templateUrl: './rejected-state.component.html',
  styleUrls: ['./rejected-state.component.css']
})
export class RejectedStateComponent implements OnInit {

  constructor(public expenseService: ExpenseService, private router: Router) { }

  ngOnInit() {
    this.expenseService.getExpenses();
  }

  updateRecord(expense){
    this.router.navigate(['/expense-submission']);
    this.expenseService.formDataU = expense;
    this.expenseService.updateId = this.expenseService.formDataU.id;
    this.expenseService.updation = true;
    console.log(this.expenseService.formDataU);
  }

}
