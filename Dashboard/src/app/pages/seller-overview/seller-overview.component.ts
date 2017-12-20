import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-seller-overview',
  templateUrl: './seller-overview.component.html',
  styleUrls: ['./seller-overview.component.scss']
})
export class SellerOverviewComponent {
  activeValue: any;


  constructor(private modalService: NgbModal) { }
  

    showLargeModal(sellerID : String) {
      const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
  
      activeModal.componentInstance.modalSellername = sellerID; //Name mit SellerID aus Datenbank auslesen
      activeModal.componentInstance.modalSellertext = sellerID; //Text mit SellerID aus Datenbank auslesen
      activeModal.componentInstance.modalCollectedpoints = 4; //Anzahl gesammelter Items mit SellerID aus Datenbank auslesen (max. 10)

    }

    getModalValue(){
      return this.activeValue;
    }
    showSmallModal() {
      const activeModal = this.modalService.open(ModalComponent, { size: 'sm', container: 'nb-layout' });
  
      activeModal.componentInstance.modalHeader = 'Small Modal';
    }
  
    showStaticModal() {
      const activeModal = this.modalService.open(ModalComponent, {
        size: 'sm',
        backdrop: 'static',
        container: 'nb-layout',
      });
  
      activeModal.componentInstance.modalHeader = 'Static modal';
      activeModal.componentInstance.modalContent = `This is static modal, backdrop click
                                                      will not close it. Click × or confirmation button to close modal.`;
    }
  

}
