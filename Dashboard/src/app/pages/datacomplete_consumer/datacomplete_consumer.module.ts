import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { Datacomplete_ConsumerComponent } from './datacomplete_consumer.component';
import { SolarComponent } from './solar/solar.component';
import { FormComponent } from './form/form.component';
import { ChangeEmail } from './changeemail/changeemail.component';

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
  ],
  declarations: [
    Datacomplete_ConsumerComponent,
    SolarComponent,
    FormComponent,
    ChangeEmail,
  ],
})
export class Datacomplete_ConsumerModule { }
