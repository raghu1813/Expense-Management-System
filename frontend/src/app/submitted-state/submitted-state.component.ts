import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../_services/expense.service';

@Component({
  selector: 'app-submitted-state',
  templateUrl: './submitted-state.component.html',
  styleUrls: ['./submitted-state.component.css']
})
export class SubmittedStateComponent implements OnInit {

  constructor(public expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenseService.getExpenses();
  }

}
