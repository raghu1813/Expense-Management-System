import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './_guards/auth.guard';
import { ExpenseSubmissionComponent } from './expense-submission/expense-submission.component';
import { PendingExpensesComponent } from './pending-expenses/pending-expenses.component';
import { SubmissionsListComponent } from './submissions-list/submissions-list.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { LoginComponent } from './login/login.component';
export const appRoutes: Routes = [
  
    {path: '', component: HomeComponent},
    {path: '', 
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children:[
        {path: 'pendingexpenses', component: PendingExpensesComponent},
        {path: 'expense-submission', component: ExpenseSubmissionComponent},
        {path: 'submissions', component: SubmissionsListComponent},
        {path: 'expensesdetails', component: ExpenseDetailComponent},
      

    ]
   
},
    {path: '**', redirectTo: '', pathMatch: 'full'},



];

