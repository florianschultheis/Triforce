import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { Dashboard1Component } from './dashboard1.component';
import { ConsumerModule} from './consumer/consumer.module';
import { NgxQRCodeModule } from 'ngx-qrcode-coupon';




@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    ConsumerModule,
    NgxQRCodeModule,
  ],
  declarations: [
    Dashboard1Component,

  ],
})
export class Dashboard1Module { }
