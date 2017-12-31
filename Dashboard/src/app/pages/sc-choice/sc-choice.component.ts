import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { Person, PersonService } from '../datacomplete_consumer/services/person.service';


@Component({
  selector: 'app-sc-choice',
  templateUrl: './sc-choice.component.html',
  styleUrls: ['./sc-choice.component.scss']
})
export class ScChoiceComponent implements OnInit {

  id = 0; 
  isSeller = false;
  people = new Person(this.id, this.isSeller); 


  constructor(private auth : AuthService, private personService : PersonService) { }

  ngOnInit() {
  }
 

  
  weiter(){
   var e1 = <HTMLInputElement> document.getElementById('r1');
   var e2 = <HTMLInputElement> document.getElementById('r2');

   var ischecked1 = e1.checked;
   var ischecked2 = e2.checked;

   if(ischecked1){
     alert('Händler gewählt');
     alert(this.auth.id);
     this.people.i = this.auth.id;
     this.people.isSeller = true; 
     alert(this.people.i + " und " + this.people.isSeller);
     this.personService.setSeller(this.people).subscribe();

   }
   else if(ischecked2){
     alert('Käufer gewählt. Bitte neu einloggen');
   }
   else{
     alert('läuft');
   }
   
 
    
  }

}
