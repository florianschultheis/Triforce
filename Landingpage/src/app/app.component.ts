import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

/* The following Component displays the basic framework of our App.  
*/


@Component({ //<na-section-list></na-section-list> <na-header></na-header>
  selector: 'na-app',
  template:  
  `         <na-nav></na-nav>                                
            <router-outlet></router-outlet>
            <na-footer></na-footer>
             `
})
export class AppComponent { 
  


     

}
