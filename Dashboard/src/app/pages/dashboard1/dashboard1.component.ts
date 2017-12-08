import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard1.component.scss'],
  templateUrl: './dashboard1.component.html',
})
export class Dashboard1Component implements OnInit{
  ngOnInit(): void {
    this.getSeller();
  }
isSeller : boolean;

public getSeller(){

return this.isSeller; 

}
}
