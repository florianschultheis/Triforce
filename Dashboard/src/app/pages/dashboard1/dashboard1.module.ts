import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { Dashboard1Component } from './dashboard1.component';
import { ConsumerModule} from './consumer/consumer.module';
import { SellerModule } from './seller/seller.module';



@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    ConsumerModule,
    SellerModule,
  ],
  declarations: [
    Dashboard1Component,

  ],
})
export class Dashboard1Module { }
