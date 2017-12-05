import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/angular2-leaflet';

import { ThemeModule } from '../../@theme/theme.module';
import { SellermapComponent } from './sellermap.component';
import { GmapsComponent} from './gmaps/gmaps.component'

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    AgmCoreModule,
    LeafletModule,
  ],
  declarations: [
    SellermapComponent,
    GmapsComponent,
  ],
})
export class SellermapModule { }
