import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import {RouterModule, Routes} from "@angular/router";
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import {TabMenuModule} from "primeng/tabmenu";
import {ButtonModule} from "primeng/button";
import {SidebarModule} from "primeng/sidebar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HeaderBigComponent } from './components/header/components/header-big/header-big.component';
import { HeaderSmallComponent } from './components/header/components/header-small/header-small.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ProductsComponent,
    HeaderComponent,
    HeaderBigComponent,
    HeaderSmallComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    TabMenuModule,
    ButtonModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
