import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: '/login.component.html'
  ,
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    this.login();
  }


  constructor(private auth: AuthService) {}
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
 
