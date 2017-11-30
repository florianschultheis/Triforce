import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DatacompleteComponent } from './datacomplete.component';
import { SolarComponent } from './solar/solar.component';
import { FormComponent } from './form/form.component';
import { ChangeEmail } from './changeemail/changeemail.component';

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
  ],
  declarations: [
    DatacompleteComponent,
    SolarComponent,
    FormComponent,
    ChangeEmail,
  ],
})
export class DatacompleteModule { }
