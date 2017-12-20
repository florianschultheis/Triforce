import { Component } from '@angular/core';

@Component({
  selector: 'ngx-qrgenerate',
  styleUrls: ['./qrgenerate.component.scss'],
  templateUrl: './qrgenerate.component.html',
})
export class QrgenerateComponent {
  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string = 'Techiediaries';
  text1 : any; 

  constructor(){}


  updateData(){
    this.text1 = document.getElementById("text1");
    this.value = this.text1.value;
  }

  
}
