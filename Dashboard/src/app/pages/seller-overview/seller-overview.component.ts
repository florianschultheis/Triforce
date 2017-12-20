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
  
    //Hier sollen die Daten mittels SellerID aus der Datenbank ausgelesen werden, momentan Mockup
    getSellerName(sellerID : number){
      if(sellerID == 0) return "Klein's Backstube"
      if (sellerID == 1) return "Brunsing & Brunsing Friseure"
      else return "Sellername"
    }
    getSellerText(sellerID : number){
      if(sellerID == 0) return "Bäckerfrische seit 1872"
      if (sellerID == 1) return "Ihre Frisur, Ihr Stil!"
      else return "Sellertext"
    }
    getEarnedPoints(sellerID : number){
      if(sellerID == 0) return 7
      if (sellerID == 1) return 10
      else return 3
    }

    showLargeModal(sellerID : number) {
      const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

      activeModal.componentInstance.modalSellername = this.getSellerName(sellerID); //Name mit SellerID aus Datenbank auslesen
      activeModal.componentInstance.modalSellertext = this.getSellerText(sellerID); //Text mit SellerID aus Datenbank auslesen
      activeModal.componentInstance.modalCollectedpoints = this.getEarnedPoints(sellerID); //Anzahl gesammelter Items mit SellerID aus Datenbank auslesen (max. 10)

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
