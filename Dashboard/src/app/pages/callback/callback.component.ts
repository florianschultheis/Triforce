import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'ngx-callback',
  templateUrl: '/callback.component.html'
  ,
})
export class CallbackComponent {

getToken(){
    var hash = window.location.hash;
    var idx = hash.indexOf('#access_token');
    if (idx >= 0) {
      // has '#access_token' in URL
      var at_str = hash.substring(idx);
      var access_token = at_str.substring(at_str.indexOf('=') + 1).trim();
      if (access_token !== "") {
        // we're good to go
        window.location.href = "https://localhost:8000/#/callback#access_token=" + access_token;
        console.log(access_token);
      } else {
        console.error('This page found an empty access_token in the location hash.');
      }
    } else {
      console.error('This page expected an access_token in the location hash.');
    }

}
    
    constructor(public auth : AuthService){
        console.log("hier bin ich");
        this.getToken();
        auth.handleAuthentication();
        
      }
}
 