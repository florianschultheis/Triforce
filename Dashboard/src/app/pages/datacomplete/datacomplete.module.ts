import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DatacompleteComponent } from './datacomplete.component';
import { SolarComponent } from './solar/solar.component';


@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
  ],
  declarations: [
    DatacompleteComponent,
    SolarComponent,
  ],
})
export class DatacompleteModule { }
