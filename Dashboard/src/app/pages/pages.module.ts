import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { Datacomplete_SellerModule } from './datacomplete_seller/datacomplete_seller.module';
import { Datacomplete_ConsumerModule } from './datacomplete_consumer/datacomplete_consumer.module';
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
    Datacomplete_SellerModule,
    Datacomplete_ConsumerModule,
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
