import { Component } from '@angular/core';

import { MENU_ITEMS, MENU_ITEMS_SELLER, MENU_ITEMS_FIRST } from './pages-menu';
import { ScChoiceComponent } from './sc-choice/sc-choice.component';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="consumer" *ngIf="true"></nb-menu>
      <nb-menu [items]="seller" *ngIf="true"></nb-menu>     
      <nb-menu [items]="first" *ngIf="true"></nb-menu> 
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent{

  isSeller : boolean;
  



isFirstLogin(){
return this.isSeller;
}

getSC(){

  return true; 
}
  
  consumer = MENU_ITEMS;
  seller = MENU_ITEMS_SELLER;
  first = MENU_ITEMS_FIRST;
}
