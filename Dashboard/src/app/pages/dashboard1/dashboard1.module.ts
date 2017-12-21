import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { Dashboard1Component } from './dashboard1.component';
import { ConsumerModule} from './consumer/consumer.module';



@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    ConsumerModule,
  ],
  declarations: [
    Dashboard1Component,

  ],
})
export class Dashboard1Module { }
