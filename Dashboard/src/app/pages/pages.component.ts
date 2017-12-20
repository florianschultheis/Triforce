import { Component } from '@angular/core';

import { MENU_ITEMS, MENU_ITEMS_SELLER } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="hallo" *ngIf="getSC()"></nb-menu>
      <nb-menu [items]="menu" *ngIf="false"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

getSC(){
return true; 
}
  
  menu = MENU_ITEMS;
  hallo = MENU_ITEMS_SELLER;
}
