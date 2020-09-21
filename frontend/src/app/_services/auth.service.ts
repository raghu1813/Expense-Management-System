import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = environment.apiUrl + 'auth/';
jwtHelper = new JwtHelperService();
decodedToken: any;
currentUser: User;

constructor(private http: HttpClient) { }

login(model: any){

  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
        this.currentUser = user.user;
      }
    })
  );


}
register(model: any) {
  return this.http.post(this.baseUrl + 'register', model);
}
loggedIn(){
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);

}
roleMatch(allowedRoles): boolean {
  let isMatch = false;
  const userRoles = this.decodedToken.role as Array<string>;
  allowedRoles.forEach(
    element => {
    if (userRoles.includes(element)) {
      isMatch = true;
      return;
    }
  });
  return isMatch;
}
}
