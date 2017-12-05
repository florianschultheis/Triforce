import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../../@theme/theme.module';
import { QrscanComponent } from '../qrscan.component';
import { TabsComponent } from './tabs.component';

// Import the library
import { NgxZxingModule } from 'ngx-zxing';
// Needed as well
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    
  ],
  declarations: [
  ],
})
export class TabsModule { }
