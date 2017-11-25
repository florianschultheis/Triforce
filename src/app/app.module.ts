import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NavComponent }  from './app.nav.component';
import { HeaderComponent }  from './app.header.component';
import { SectionListComponent }  from './app.section.list.component';
import { DownloadComponent }  from './app.section.downloads.component';
import { FeaturesComponent }  from './app.section.features.component';
import { CtaComponent }  from './app.section.cta.component';
import { ContactComponent }  from './app.section.contact.component';
import { FooterComponent }  from './app.footer.component';
import { AuthService } from './auth/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './app.seller.component';
import { HomeComponent } from './app.home.component';
import { CustomerDataComponent } from './app.section.customerdata.component';
import { SellerDataComponent } from './app.section.sellerdata.component';
import { DataComponent } from './app.data.component';
import { AnimationComponent } from './app.animation.component';
import { Header2Component } from './app.section.header2.component';
import {Seller2Component} from './app.section.seller1.component';


const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'seller',      component: SellerComponent},
  {path: 'data', component: DataComponent},
  {path: 'sellerdata', component: SellerDataComponent},
  {path: 'customerdata', component: CustomerDataComponent},
  { path: '**', component: AppComponent  },
];

@NgModule({
  imports:      [ BrowserModule,    RouterModule.forRoot(
   appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  declarations: [ AppComponent, NavComponent, HeaderComponent, SectionListComponent, DownloadComponent, FeaturesComponent, 
  CtaComponent, ContactComponent, FooterComponent, SellerComponent, HomeComponent,CustomerDataComponent,SellerDataComponent, DataComponent, AnimationComponent, Header2Component, Seller2Component],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})



export class AppModule{}


