import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { QrgenerateComponent } from './qrgenerate.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';




@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    NgxQRCodeModule,
  ],
  declarations: [
    QrgenerateComponent,
  ],
})
export class QrgenerateModule { }
