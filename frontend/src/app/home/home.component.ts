import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  constructor(private authService: AuthService) { }
  loggedIn = this.authService.loggedIn();
  ngOnInit() {
  }
  registerToggle(){

    this.registerMode = true;
  }
 
cancelRegisterMode(registerMode: boolean){
    this.registerMode = registerMode;

  }

}
