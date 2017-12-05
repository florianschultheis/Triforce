import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { DatacompleteModule } from './datacomplete/datacomplete.module';
import { QrscanModule } from './qrscan/qrscan.module';
import { QrgenerateModule } from './qrgenerate/qrgenerate.module';
import { TabsModule } from './qrscan/tabs/tabs.module';
import { SellermapModule } from './sellermap/sellermap.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    DatacompleteModule,
    QrscanModule,
    QrgenerateModule,
    TabsModule,
    SellermapModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
