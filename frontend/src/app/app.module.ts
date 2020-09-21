import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { NgModule } from '@angular/core';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {AuthService} from './_services/auth.service';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FileUploadModule } from 'ng2-file-upload';
import {FormsModule} from '@angular/forms';
import {appRoutes} from './routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HasRoleDirective} from './_directives/hasRole.directive';
import { ExpenseSubmissionComponent } from './expense-submission/expense-submission.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule} from '@angular/router';
import { SubmissionsListComponent } from './submissions-list/submissions-list.component';
import { PendingExpensesComponent } from './pending-expenses/pending-expenses.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { SubmittedStateComponent } from './submitted-state/submitted-state.component';
import { ApprovedStateComponent } from './approved-state/approved-state.component';
import { RejectedStateComponent } from './rejected-state/rejected-state.component';
import { NameFilterPipe } from './name-filter.pipe';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [					
    AppComponent,
      NavComponent,
      HasRoleDirective,
      HomeComponent,
      RegisterComponent,
      ExpenseSubmissionComponent,
      SubmissionsListComponent,
      PendingExpensesComponent,
      ExpenseDetailComponent,
      SubmittedStateComponent,
      ApprovedStateComponent,
      RejectedStateComponent,
      NameFilterPipe,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDXwIy-f-RId3uJXB3HJH71qswbIbjKD1s',
      authDomain: 'expensemanagement-98681.firebaseapp.com',
      storageBucket: 'expensemanagement-98681.appspot.com',
      projectId: 'expensemanagement-98681',
    }),
    AngularFireStorageModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot(),
    FileUploadModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
