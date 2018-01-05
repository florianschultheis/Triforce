import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../../../@theme/theme.module';
import { SolarComponent} from './solar/solar.component'
import { ModalComponent } from './modal.component';
import { ConsumerComponent } from '../consumer.component';
import { NgxQRCodeModule } from 'ngx-qrcode-coupon';


@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    AngularEchartsModule,
    NgxQRCodeModule,
    
  ],
  declarations: [
    SolarComponent,
    ModalComponent,


  ],  
  entryComponents: [
    ModalComponent,
  ]
})
export class ModalModule { }
