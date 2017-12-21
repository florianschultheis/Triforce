import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { JwtHelper } from 'angular2-jwt';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Person, PersonService } from '../pages/datacomplete_consumer/services/person.service';

@Injectable()
export class AuthService {

  
constructor(private http:Http, public router : Router) { } 
id : number; 
jwtHelper: JwtHelper = new JwtHelper();
exists : boolean;


public getPeopleExist(i : number): Observable<any>{
  return this.http
 .get('http://localhost:49873/api/users/1')
 .map(r =>r.json());
}


public savePeople(people: Person[]): Observable<any>{
 return this.http
 .post('http://localhost:55372/api/people', people);
}

  private decode(authResult: any) {
    alert("in der methode: " + authResult.idToken);
    var token = this.jwtHelper.decodeToken(authResult.idToken);
    alert("unser dekodiertes token lautet: " + token.email);
    //http post sende mail und UserID 
    //http get ob datensatz vorhanden ist basierend auf e-mail
    this.getPeopleExist(token.id).subscribe(result => this.exists = result);
    alert(this.exists);
    
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
    this.decode(authResult); 
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }


}