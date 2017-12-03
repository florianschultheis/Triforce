import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { QrscanComponent } from './qrscan.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
  ],
  declarations: [
    QrscanComponent,
    TabsComponent,
  ],
})
export class QrscanModule { }
