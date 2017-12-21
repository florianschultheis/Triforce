import { Component, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ConsumerComponent} from '../consumer.component'


@Component({
  selector: 'ngx-modal',
  templateUrl:'./modal.component.html', 
})


export class ModalComponent {
  


constructor(private activeModal: NgbActiveModal){}


  closeModal() {
    this.activeModal.close();
  } 



}


