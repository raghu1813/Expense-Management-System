import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../_services/manager.service';
import { AlertifyService } from '../_services/alertify.service';
import {NameFilterPipe} from '../name-filter.pipe';
@Component({
  selector: 'app-pending-expenses',
  templateUrl: './pending-expenses.component.html',
  styleUrls: ['./pending-expenses.component.scss']
})
export class PendingExpensesComponent implements OnInit {

  constructor(public managerService: ManagerService, private alertify: AlertifyService) { }
searchText = '';
  ngOnInit() {
    this.managerService.getExpenses();
  }

  approvePhoto(expenseId) {
    this.managerService.approveExpense(expenseId)
      .subscribe(res => { 
        this.managerService.list.splice(this.managerService.list.findIndex(p => p.id === expenseId), 1);
        this.alertify.success('Approved')},
      err => this.alertify.error(err)
      );

  }

  rejectPhoto(expenseId) {
    this.managerService.rejectExpense(expenseId)
    .subscribe(res => {
      this.managerService.list.splice(this.managerService.list.findIndex(p => p.id === expenseId), 1);
      this.alertify.warning('Rejected')},
    err => this.alertify.error(err));
  }

}
