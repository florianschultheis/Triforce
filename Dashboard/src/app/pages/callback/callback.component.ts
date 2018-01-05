import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'ngx-callback',
  templateUrl: '/callback.component.html'
  ,
})
export class CallbackComponent implements OnInit{
  ngOnInit(): void {
      this.login();
  }


  constructor(private auth: AuthService) {}
  login() {
    this.auth.handleAuthentication();
    this.auth.scheduleRenewal(); 
  }
  logout() {
    this.auth.logout();
  }
}
 
