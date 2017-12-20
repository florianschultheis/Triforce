import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { SellerOverviewComponent } from './seller-overview.component';
import { ModalModule } from './modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    ModalModule,
  ],
  declarations: [
    SellerOverviewComponent,

  ],  
})
export class SellerOverviewModule { }
