import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../_services/manager.service';
import { Expense } from '../_models/Expense';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.scss']
})
export class ExpenseDetailComponent implements OnInit {
expenseParams: any = {};
statusList = [
  { value: 'Approved', display: 'Approved' },
  {value: 'Rejected', display: 'Rejected'}
];
  constructor(public managerService: ManagerService) { }
  searchText: string;
  ngOnInit() {
    this.managerService.getExpenses();
    this.expenseParams.status = "Approved";
    this.expenseParams.fromDate = new Date('01/01/2020');
    this.expenseParams.toDate = new Date();
    this.expenseParams.submitterName = '';
  }

  search(){
    if (this.searchText != ''){
    this.managerService.list =  this.managerService.list.filter(res => {
        return res.submitterName.toLowerCase().match(this.searchText.toLowerCase() );
            });
    }
    else if (this.searchText == ''){
      this.ngOnInit();
    }
  }

  loadExpenses(){

    this.managerService.list = this.managerService.list.filter(res => {
      var d1 = new Date(res.incurredDate);
      var d2 = new Date(this.expenseParams.fromDate);
      var d3 = new Date(this.expenseParams.toDate);
      return (d1 >= d2 && d1 <= d3);
    });


    this.managerService.list = this.managerService.list.filter(res => {
      return res.status.toLowerCase().match(this.expenseParams.status.toLowerCase());
    });

    if (this.expenseParams.submitterName != ''){
      this.managerService.list = this.managerService.list.filter(res => {
        return res.submitterName.toLowerCase().match(this.expenseParams.submitterName.toLowerCase());
      });
    }



  }

  resetFilters(){
    this.ngOnInit();

  }

}
