import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sc-choice',
  templateUrl: './sc-choice.component.html',
  styleUrls: ['./sc-choice.component.scss']
})
export class ScChoiceComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
 

  
  weiter(){
   var e1 = <HTMLInputElement> document.getElementById('r1');
   var e2 = <HTMLInputElement> document.getElementById('r2');
   
   var ischecked1 = e1.checked;
   var ischecked2 = e2.checked;

   if(ischecked1){
     alert('gute wahl');
   }
   else if(ischecked2){
     alert('noch bessere wahl');
   }
   else{
     alert('läuft');
   }
   
    //alert('klappt wieder')
    
  }

}
