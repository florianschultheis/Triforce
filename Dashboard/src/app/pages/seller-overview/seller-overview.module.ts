import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { SellerOverviewComponent } from './seller-overview.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
  ],
  declarations: [
    SellerOverviewComponent,
  ]
})
export class SellerOverviewModule { }
