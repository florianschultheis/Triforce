import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-sc-choice',
  templateUrl: './sc-choice.component.html',
  styleUrls: ['./sc-choice.component.scss']
})
export class ScChoiceComponent implements OnInit {


  constructor(private http : Http, private auth : AuthService) { }

  ngOnInit() {
  }
 

  
  weiter(){
   var e1 = <HTMLInputElement> document.getElementById('r1');
   var e2 = <HTMLInputElement> document.getElementById('r2');
   
   var ischecked1 = e1.checked;
   var ischecked2 = e2.checked;

   if(ischecked1){
     alert('Händler gewählt');

   }
   else if(ischecked2){
     alert('Käufer gewählt. Bitte neu einloggen');
   }
   else{
     alert('läuft');
   }
   
 
    
  }

}
