import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../_services/expense.service';

@Component({
  selector: 'app-approved-state',
  templateUrl: './approved-state.component.html',
  styleUrls: ['./approved-state.component.css']
})
export class ApprovedStateComponent implements OnInit {

  constructor(public expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenseService.getExpenses();
  }

}
