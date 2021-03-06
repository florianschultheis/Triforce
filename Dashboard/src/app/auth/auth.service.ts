import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { JwtHelper } from 'angular2-jwt';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';
import { Person, PersonService } from '../pages/datacomplete_consumer/services/person.service';
import { PagesComponent } from '../pages/pages.component';

@Injectable()
export class AuthService {

  
constructor(private http:Http, public router : Router) { } 
id : string; 
jwtHelper: JwtHelper = new JwtHelper();
exists : boolean = false;
email : string; 
token : any; 



public getPeopleExist(i : number): Observable<any>{
  return this.http
 .get('http://localhost:49873/api/users/1')
 .map(r => r.json())
 .map(e => e.this.exists);
}

public savePeople(people: Person): Observable<any>{
 return this.http
 .post('http://localhost:49873/api/users', people);
}

  public decode(authResult: any) {
    var token = this.jwtHelper.decodeToken(authResult);
    this.token = token;
    this.id = token.sub;
    this.email = token.email; 
    
    this.http.get('http://localhost:49873/api/users/Get/' + token.sub).subscribe(res => {});
    return this.token.sub;
  }

public getToken(){
  return this.token; 
}

  auth0 = new auth0.WebAuth({
    clientID: 'u9ppezA7kI29KclGl7qlailQbwnwqu30',
    domain: 'lolocode.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://lolocode.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:8000/callback',     
    scope: 'openid email'
  });


  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        alert(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    this.decode(authResult.idToken); 
    this.scheduleRenewal();
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    location.replace("http://localhost:4200");
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public scheduleRenewal() {
    if(!this.isAuthenticated()) return;
    this.unscheduleRenewal();
  
    const expiresAt = JSON.parse(window.localStorage.getItem('expires_at'));
  
    const source = Observable.of(expiresAt).flatMap(
      expiresAt => {
  
        const now = Date.now();
  
        // Use the delay in a timer to
        // run the refresh at the proper time
        return Observable.timer(Math.max(1, expiresAt - now));
      });
  
    // Once the delay time from above is
    // reached, get a new JWT and schedule
    // additional refreshes
    this.auth0.refreshSubscription = source.subscribe(() => {
      this.renewToken();
      this.scheduleRenewal();
    });
  }
  
  public unscheduleRenewal() {
    if(!this.auth0.refreshSubscription) return;
    this.auth0.refreshSubscription.unsubscribe();
  }

  public renewToken() {
    this.auth0.checkSession({}, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        this.setSession(result);
      }
    });
  }




}