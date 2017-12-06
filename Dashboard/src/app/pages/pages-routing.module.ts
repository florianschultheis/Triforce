import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Datacomplete_SellerComponent } from './datacomplete_seller/datacomplete_seller.component';
import { Datacomplete_ConsumerComponent } from './datacomplete_consumer/datacomplete_consumer.component';
import { QrgenerateComponent} from './qrgenerate/qrgenerate.component'
import { QrscanComponent } from './qrscan/qrscan.component';
import { SellermapComponent } from './sellermap/sellermap.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'datacomplete_seller',
    component: Datacomplete_SellerComponent,
  }, {
    path: 'datacomplete_consumer',
    component: Datacomplete_ConsumerComponent,
  },{
    path: 'qrgenerate',
    component: QrgenerateComponent,
  }, {
    path: 'qrscan',
    component: QrscanComponent,
  }, {
    path: 'sellermap',
    component: SellermapComponent,
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
